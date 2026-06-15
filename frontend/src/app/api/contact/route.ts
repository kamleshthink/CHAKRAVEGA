import { NextResponse } from 'next/server';
import axios from 'axios';
import geoip from 'geoip-lite';
import { connectToMongo } from '@/lib/mongo';
import mongoose from 'mongoose';

const POLICY_COOKIE = 'chakravega_consent';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    org: String,
    email: { type: String, required: true },
    message: { type: String, required: true },
    ip: String,
    location: Object,
    userAgent: String,
    referrer: String,
    cookiesConsent: Boolean,
  },
  { timestamps: true }
);

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

function getClientIp(req: Request) {
  const forwarded = req.headers.get('x-forwarded-for');
  const rawIp = forwarded ? String(forwarded).split(',')[0].trim() : req.headers.get('x-real-ip') || 'unknown';
  return rawIp.replace(/^::ffff:/, '');
}

function buildNotificationPayload(contact: any) {
  const location = contact.location
    ? `${contact.location.city || 'Unknown city'}, ${contact.location.region || 'Unknown region'}, ${contact.location.country || 'Unknown country'}`
    : 'Location data unavailable';

  return {
    text: `New inquiry received from ${contact.name} (${contact.email})\n\nOrganization: ${contact.org || 'N/A'}\nMessage: ${contact.message}\n\nIP Address: ${contact.ip}\nLocation: ${location}\nUser Agent: ${contact.userAgent}\nReferrer: ${contact.referrer || 'Direct'}`,
    html: `
      <h1>New Chakravega Inquiry</h1>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Organization:</strong> ${contact.org || 'N/A'}</p>
      <p><strong>Message:</strong><br/>${contact.message}</p>
      <hr />
      <p><strong>IP Address:</strong> ${contact.ip}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>User Agent:</strong> ${contact.userAgent}</p>
      <p><strong>Referrer:</strong> ${contact.referrer || 'Direct'}</p>
      <p><strong>Cookies consent:</strong> ${contact.cookiesConsent ? 'Accepted' : 'Not accepted'}</p>
    `,
  };
}

async function sendEmailNotification(contact: any) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const EMAIL_FROM = process.env.EMAIL_FROM;
  const EMAIL_TO = process.env.EMAIL_TO;
  if (!RESEND_API_KEY || !EMAIL_FROM || !EMAIL_TO) return;

  const payload = buildNotificationPayload(contact);
  await axios.post(
    'https://api.resend.com/emails',
    {
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: 'Chakravega Technologies - New Inquiry Received',
      html: payload.html,
      text: payload.text,
    },
    {
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );
}

async function sendTelegramNotification(contact: any) {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  const payload = buildNotificationPayload(contact);
  await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    chat_id: TELEGRAM_CHAT_ID,
    text: payload.text,
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, org, email, message } = body || {};
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    await connectToMongo();

    const ip = getClientIp(req);
    const location = geoip.lookup(ip) || null;

    const contact = new Contact({
      name,
      org,
      email,
      message,
      ip,
      location,
      userAgent: req.headers.get('user-agent') || 'Unknown',
      referrer: req.headers.get('referer') || 'Direct',
      cookiesConsent: (req.headers.get('cookie') || '').includes(`${POLICY_COOKIE}=accepted`),
    });

    await contact.save();

    // fire-and-forget notifications but await so Vercel returns after they complete
    await Promise.all([sendEmailNotification(contact), sendTelegramNotification(contact)]);

    return NextResponse.json({ success: true, message: 'Inquiry received.' }, { status: 201 });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Unable to submit inquiry at this time.' }, { status: 500 });
  }
}
