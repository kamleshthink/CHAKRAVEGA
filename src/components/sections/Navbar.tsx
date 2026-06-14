"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Company", href: "#company" },
  { label: "Solutions", href: "#solutions" },
  { label: "Products", href: "#business-units" },
  { label: "Industries", href: "#industries" },
  { label: "Technology", href: "#technology" },
  { label: "Leadership", href: "#leadership" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-surface border-b border-[rgba(61,90,107,0.2)]"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-wide flex items-center justify-between h-16 lg:h-[70px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="Chakravega Technologies Home">
          <div className="relative w-9 h-9 lg:w-10 lg:h-10">
            <Image
              src="/images/chakravega_logo.png"
              alt="Chakravega Technologies"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span
              className="font-tight font-700 text-sm tracking-[0.08em] text-cool-white"
              style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
            >
              CHAKRAVEGA
            </span>
            <div
              className="text-[9px] tracking-[0.15em] uppercase"
              style={{ color: "var(--text-muted)", letterSpacing: "0.15em", fontFamily: "Inter Tight, sans-serif" }}
            >
              TECHNOLOGIES
            </div>
          </div>
        </a>

        {/* Center nav — desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200"
              style={{
                color: "var(--text-secondary)",
                fontFamily: "Inter, sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cool-white)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right CTA — desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 text-[12px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 border border-cyan-DEFAULT text-cyan-DEFAULT hover:bg-cyan-DEFAULT hover:text-void"
            style={{
              fontFamily: "Inter Tight, sans-serif",
              borderColor: "var(--cyan)",
              color: "var(--cyan)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--cyan)";
              e.currentTarget.style.color = "var(--void)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--cyan)";
            }}
          >
            Schedule Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
          style={{ color: "var(--cool-white)" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden glass-surface border-t"
          style={{ borderColor: "rgba(61,90,107,0.2)" }}
        >
          <div className="container-wide py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-3 text-[14px] font-medium transition-colors border-b"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "rgba(61,90,107,0.15)",
                  fontFamily: "Inter, sans-serif",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 py-3 text-center text-[12px] font-semibold tracking-[0.08em] uppercase border"
              style={{
                borderColor: "var(--cyan)",
                color: "var(--cyan)",
                fontFamily: "Inter Tight, sans-serif",
              }}
              onClick={() => setMobileOpen(false)}
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
