"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "chakravega_consent";

function setConsentCookie() {
  document.cookie = `${COOKIE_NAME}=accepted;path=/;max-age=${60 * 60 * 24 * 365};SameSite=Lax`;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const cookies = document.cookie || "";
    if (!cookies.includes(`${COOKIE_NAME}=`)) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = async () => {
    setSaving(true);
    setConsentCookie();

    try {
      await fetch("/api/cookie-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accepted: true }),
      });
    } catch (error) {
      console.error("Cookie consent save failed:", error);
    }

    setVisible(false);
    setSaving(false);
  };

  const customizeCookies = () => {
    window.location.href = "/cookies-policy";
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[min(96%,720px)] -translate-x-1/2 rounded-[28px] border border-[rgba(194,245,255,0.18)] bg-[#08101fdd] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl text-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="font-semibold text-white" style={{ fontFamily: "Inter Tight, sans-serif" }}>
            Cookies help us deliver a personalized and secure experience.
          </div>
          <p className="mt-2 text-[13px] text-[rgba(255,255,255,0.75)]" style={{ fontFamily: "Inter, sans-serif" }}>
            Accept cookies for full access, or customize your preferences before continuing.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={customizeCookies}
            className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.15)] bg-transparent px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-200 hover:border-cyan-DEFAULT hover:text-cyan-DEFAULT"
            style={{ fontFamily: "Inter Tight, sans-serif" }}
          >
            Customize
          </button>
          <button
            type="button"
            onClick={acceptCookies}
            disabled={saving}
            className="inline-flex items-center justify-center rounded-full bg-cyan-DEFAULT px-5 py-3 text-[13px] font-semibold uppercase tracking-[0.1em] text-void transition-all duration-200 hover:bg-[#00d4ff] disabled:opacity-60"
            style={{ fontFamily: "Inter Tight, sans-serif" }}
          >
            {saving ? "Saving..." : "Accept Cookies"}
          </button>
        </div>
      </div>

      <div className="mt-4 text-[12px] text-[rgba(255,255,255,0.65)]" style={{ fontFamily: "Inter, sans-serif" }}>
        Your choice is saved securely and remembered for future visits.
      </div>
    </div>
  );
}
