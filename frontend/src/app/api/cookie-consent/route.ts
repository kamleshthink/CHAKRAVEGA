import { NextResponse } from "next/server";
import { connectToMongo } from "@/lib/mongo";
import mongoose from "mongoose";

const consentSchema = new mongoose.Schema(
  {
    accepted: { type: Boolean, required: true },
    ip: String,
    referrer: String,
    userAgent: String,
    location: Object,
  },
  { timestamps: true }
);

const CookieConsent = mongoose.models.CookieConsent || mongoose.model("CookieConsent", consentSchema);

function getClientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  const rawIp = forwarded ? String(forwarded).split(",")[0].trim() : req.headers.get("x-real-ip") || "unknown";
  return rawIp.replace(/^::ffff:/, "");
}

async function lookupLocation(ip: string) {
  if (!ip || ip === "unknown") {
    return null;
  }

  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`, { cache: "no-store", next: { revalidate: 0 } });
    const data = await response.json();

    if (!data || data.error) {
      return null;
    }

    return {
      ip: data.ip || ip,
      city: data.city || null,
      region: data.region || null,
      country: data.country_name || null,
      latitude: data.latitude || null,
      longitude: data.longitude || null,
    };
  } catch (error) {
    console.error("Cookie consent location lookup failed:", error);
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { accepted } = body || {};

    if (accepted !== true) {
      return NextResponse.json({ error: "Consent must be accepted." }, { status: 400 });
    }

    const ip = getClientIp(req);
    const location = await lookupLocation(ip);

    const mongoConn = await connectToMongo();
    if (mongoConn) {
      await new CookieConsent({
        accepted: true,
        ip,
        referrer: req.headers.get("referer") || "direct",
        userAgent: req.headers.get("user-agent") || "Unknown",
        location,
      }).save();
    }

    return NextResponse.json({ success: true, message: "Cookie consent recorded." }, { status: 201 });
  } catch (error) {
    console.error("Cookie consent API error:", error);
    return NextResponse.json({ error: "Unable to record cookie consent." }, { status: 500 });
  }
}
