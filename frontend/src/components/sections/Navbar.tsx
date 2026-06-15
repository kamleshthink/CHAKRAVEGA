"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Company", id: "company" },
  { label: "Solutions", id: "solutions" },
  { label: "Products", id: "business-units" },
  { label: "Industries", id: "industries" },
  { label: "Technology", id: "technology" },
  { label: "Leadership", id: "leadership" },
  { label: "Careers", id: "careers" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigateToSection = (id: string) => (e?: React.MouseEvent) => {
    e?.preventDefault();
    // Use query param so navigation is client-side and URL doesn't include a hash
    router.push(`/?section=${encodeURIComponent(id)}`);
    setMobileOpen(false);
  };

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
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
          className="flex items-center gap-2 group min-w-0"
          aria-label="Chakravega Technologies Home"
        >
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex-shrink-0">
            <Image
              src="/images/chakravega_logo.png"
              alt="Chakravega Technologies"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden md:block min-w-0">
            <span
              className="block truncate font-tight font-700 text-sm tracking-[0.08em] text-cool-white"
              style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}
            >
              CHAKRAVEGA
            </span>
            <div
              className="text-[9px] tracking-[0.15em] uppercase truncate"
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
              href={`/?section=${link.id}`}
              onClick={navigateToSection(link.id)}
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
            href="/?section=contact"
            onClick={navigateToSection("contact")}
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
                href={`/?section=${link.id}`}
                onClick={navigateToSection(link.id)}
                className="py-3 text-[14px] font-medium transition-colors border-b"
                style={{
                  color: "var(--text-secondary)",
                  borderColor: "rgba(61,90,107,0.15)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/?section=contact"
              onClick={navigateToSection("contact")}
              className="mt-4 py-3 text-center text-[12px] font-semibold tracking-[0.08em] uppercase border"
              style={{
                borderColor: "var(--cyan)",
                color: "var(--cyan)",
                fontFamily: "Inter Tight, sans-serif",
              }}
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
