"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToSection() {
  const searchParams = useSearchParams();

  useEffect(() => {
    try {
      const section = searchParams?.get("section");
      if (section) {
        const id = String(section);
        const el = document.getElementById(id);
        if (el) {
          // small timeout to allow layout to stabilize
          setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
        }
        // Remove query param from address bar so URL stays clean (no #)
        if (typeof window !== "undefined") {
          window.history.replaceState({}, "", "/");
        }
      }
    } catch (err) {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams?.toString()]);

  return null;
}
