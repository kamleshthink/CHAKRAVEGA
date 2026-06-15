"use client";

import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "JhariaWatch", href: "https://jhariyawatch.onrender.com/" },
    { label: "PragyaTek Solutions", href: "https://kamtech-solutions.onrender.com/" },
  ],
  Industries: [
    { label: "Mining", href: "#industries" },
    { label: "Government", href: "#industries" },
    { label: "Manufacturing", href: "#industries" },
    { label: "Energy", href: "#industries" },
  ],
  Company: [
    { label: "About Us", href: "#company" },
    { label: "Technology", href: "#technology" },
    { label: "Leadership", href: "#leadership" },
    { label: "Careers", href: "#careers" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ background: "var(--void)", borderTop: "1px solid rgba(61,90,107,0.2)" }}
      role="contentinfo"
    >
      <div className="container-wide py-16 lg:py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand block */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/chakravega_logo.png"
                  alt="Chakravega Technologies"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <div
                  className="font-bold text-sm tracking-[0.08em]"
                  style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
                >
                  CHAKRAVEGA
                </div>
                <div
                  className="text-[9px] tracking-[0.15em] uppercase"
                  style={{ color: "var(--text-muted)", fontFamily: "Inter Tight, sans-serif" }}
                >
                  TECHNOLOGIES
                </div>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
            >
              Engineering Intelligence for a Safer and Smarter Future.
              A deep-tech company originating from India.
            </p>

            <div className="flex items-center gap-1">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--cyan)" }}
              />
              <span
                className="text-[10px] tracking-[0.1em] ml-1"
                style={{ color: "var(--text-muted)", fontFamily: "Inter Tight, sans-serif" }}
              >
                INCORPORATED · INDIA
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div
                className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-5"
                style={{ color: "var(--text-muted)", fontFamily: "Inter Tight, sans-serif" }}
              >
                {section}
              </div>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cool-white)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p
            className="text-[11px]"
            style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}
          >
            © {year} Chakravega Technologies Private Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:chakravegatechnologies@gmail.com"
              className="text-[11px] transition-colors duration-200"
              style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              chakravegatechnologies@gmail.com
            </a>
            <span style={{ color: "var(--text-muted)", fontSize: "10px" }}>|</span>
            <span
              className="text-[11px]"
              style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}
            >
              Jharkhand, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
