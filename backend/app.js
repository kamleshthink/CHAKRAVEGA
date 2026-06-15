const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
const geoip = require("geoip-lite");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const envPath = path.resolve(__dirname, ".env.local");
dotenv.config({ path: envPath });

const {
  PORT = 4000,
  MONGODB_URI,
  RESEND_API_KEY,
  EMAIL_FROM,
  EMAIL_TO,
  TELEGRAM_BOT_TOKEN,
  TELEGRAM_CHAT_ID,
} = process.env;

if (!MONGODB_URI || !RESEND_API_KEY || !EMAIL_FROM || !EMAIL_TO || !TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error(
    "Missing required environment variables. Please configure backend/.env.local or backend/.env.example."
  );
  process.exit(1);
}

const app = express();
app.use(helmet());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const POLICY_COOKIE = "chakravega_consent";
app.use((req, res, next) => {
  if (!req.cookies[POLICY_COOKIE]) {
    res.cookie(POLICY_COOKIE, "accepted", {
      maxAge: 31536000000,
      sameSite: "lax",
    });
  }
  next();
});

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(MONGODB_URI, mongoOptions)
  .then(() => console.log("MongoDB connection established."))
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });

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

const Contact = mongoose.model("Contact", contactSchema);

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please wait a moment and try again." },
});

app.use("/api/contact", limiter);

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  const rawIp = forwarded ? String(forwarded).split(",")[0].trim() : req.socket.remoteAddress;
  return rawIp ? rawIp.replace(/^::ffff:/, "") : "unknown";
};

const getLocation = (ip) => geoip.lookup(ip) || null;

const buildNotificationPayload = (contact) => {
  const location = contact.location
    ? `${contact.location.city || "Unknown city"}, ${contact.location.region || "Unknown region"}, ${contact.location.country || "Unknown country"}`
    : "Location data unavailable";

  return {
    text: `New inquiry received from ${contact.name} (${contact.email})\n\nOrganization: ${contact.org || "N/A"}\nMessage: ${contact.message}\n\nIP Address: ${contact.ip}\nLocation: ${location}\nUser Agent: ${contact.userAgent}\nReferrer: ${contact.referrer || "Direct"}`,
    html: `
      <h1>New Chakravega Inquiry</h1>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Organization:</strong> ${contact.org || "N/A"}</p>
      <p><strong>Message:</strong><br/>${contact.message}</p>
      <hr />
      <p><strong>IP Address:</strong> ${contact.ip}</p>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>User Agent:</strong> ${contact.userAgent}</p>
      <p><strong>Referrer:</strong> ${contact.referrer || "Direct"}</p>
      <p><strong>Cookies consent:</strong> ${contact.cookiesConsent ? "Accepted" : "Not accepted"}</p>
    `,
  };
};

const sendEmailNotification = async (contact) => {
  const payload = buildNotificationPayload(contact);

  await axios.post(
    "https://api.resend.com/emails",
    {
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: "Chakravega Technologies - New Inquiry Received",
      html: payload.html,
      text: payload.text,
    },
    {
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
};

const sendTelegramNotification = async (contact) => {
  const payload = buildNotificationPayload(contact);
  await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    chat_id: TELEGRAM_CHAT_ID,
    text: payload.text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
  });
};

app.post("/api/contact", async (req, res) => {
  try {
    const { name, org, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const ip = getClientIp(req);
    const contact = new Contact({
      name,
      org,
      email,
      message,
      ip,
      location: getLocation(ip),
      userAgent: req.get("User-Agent") || "Unknown",
      referrer: req.get("Referrer") || req.get("Referer") || "Direct",
      cookiesConsent: req.cookies[POLICY_COOKIE] === "accepted",
    });

    await contact.save();
    await Promise.all([sendEmailNotification(contact), sendTelegramNotification(contact)]);

    return res.status(201).json({ success: true, message: "Inquiry received." });
  } catch (error) {
    console.error("Failed to process contact submission:", error);
    return res.status(500).json({ error: "Unable to submit inquiry at this time." });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Provide a friendly root response so visiting the backend in a browser
// does not show "Cannot GET /". This helps when users open the backend URL.
app.get("/", (req, res) => {
  res.json({
    service: "Chakravega backend",
    status: "ok",
    info: "This server provides the API endpoints at /api/* — frontend is served separately.",
  });
});
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error." });
});

app.listen(PORT, () => {
  console.log(`Chakravega backend listening on port ${PORT}`);
});
