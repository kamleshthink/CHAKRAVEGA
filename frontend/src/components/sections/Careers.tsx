"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight, Code2, Brain, BarChart3, Layers } from "lucide-react";

const openings = [
  { role: "AI/ML Engineer", type: "Full-time · Remote", icon: Brain },
  { role: "Full-Stack Developer", type: "Full-time · Hybrid", icon: Code2 },
  { role: "Data Scientist", type: "Full-time · Remote", icon: BarChart3 },
  { role: "Systems Architect", type: "Contract · Remote", icon: Layers },
];

export default function Careers() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="careers"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--void)" }}
      ref={sectionRef}
    >
      {/* Accent glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(0,194,255,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="eyebrow mb-5 reveal">Careers</div>
            <h2
              className="text-3xl lg:text-5xl font-bold tracking-tight mb-6 reveal delay-100"
              style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
            >
              Build Technology
              <br />
              <span style={{ color: "var(--cyan)" }}>That Matters.</span>
            </h2>
            <p
              className="text-sm lg:text-base leading-relaxed mb-10 reveal delay-200"
              style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif", maxWidth: "440px" }}
            >
              We are a small, focused team working on hard problems with real-world
              consequences. If you care about building systems that work — not just
              systems that look like they work — we want to hear from you.
            </p>

            <div className="flex flex-col gap-3 mb-10 reveal delay-300">
              {["Mission-driven engineering environment", "Work on AI systems with real societal impact", "Founding-era equity opportunities", "Remote-first culture with deep collaboration"].map((point) => (
                <div key={point} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--cyan)" }} />
                  {point}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-[12px] font-semibold tracking-[0.08em] uppercase border transition-all duration-300 reveal delay-400"
              style={{
                borderColor: "rgba(0,194,255,0.3)",
                color: "var(--cyan)",
                fontFamily: "Inter Tight, sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0,194,255,0.08)";
                e.currentTarget.style.borderColor = "var(--cyan)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(0,194,255,0.3)";
              }}
            >
              Explore Opportunities
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right — open roles */}
          <div className="flex flex-col gap-px" style={{ background: "rgba(61,90,107,0.12)" }}>
            {openings.map((opening, i) => (
              <div
                key={opening.role}
                className={`card-enterprise group flex items-center justify-between p-6 cursor-pointer reveal delay-${i * 100}`}
                style={{ background: "var(--surface-2)" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{
                      border: "1px solid rgba(0,194,255,0.15)",
                      background: "rgba(0,194,255,0.05)",
                    }}
                  >
                    <opening.icon size={16} style={{ color: "var(--cyan)" }} />
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold mb-0.5"
                      style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
                    >
                      {opening.role}
                    </div>
                    <div
                      className="text-[10px] tracking-wide"
                      style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}
                    >
                      {opening.type}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={14}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--cyan)" }}
                />
              </div>
            ))}

            {/* General applications */}
            <div
              className="p-6 text-center reveal"
              style={{ background: "rgba(0,194,255,0.03)", border: "1px solid rgba(0,194,255,0.08)", borderTop: "none" }}
            >
              <p
                className="text-xs mb-3"
                style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}
              >
                Don&#39;t see your role? We&#39;re always open to exceptional talent.
              </p>
              <a
                href="mailto:chakravegatechnologies@gmail.com"
                className="text-[11px] font-semibold tracking-[0.08em] uppercase"
                style={{ color: "var(--cyan)", fontFamily: "Inter Tight, sans-serif" }}
              >
                Send Open Application →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
