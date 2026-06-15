"use client";

import { useEffect, useRef } from "react";
import {
  HardHat,
  Landmark,
  Building2,
  Factory,
  GraduationCap,
  Zap,
  Store,
  Users,
} from "lucide-react";

const industries = [
  { icon: HardHat, label: "Mining", description: "Subsidence monitoring, safety systems, operational intelligence." },
  { icon: Landmark, label: "Government", description: "Digital infrastructure, citizen systems, policy intelligence." },
  { icon: Building2, label: "Infrastructure", description: "Structural monitoring, smart buildings, city intelligence." },
  { icon: Factory, label: "Manufacturing", description: "Process automation, quality control, predictive maintenance." },
  { icon: GraduationCap, label: "Education", description: "Learning platforms, institutional AI, digital campuses." },
  { icon: Zap, label: "Energy", description: "Grid intelligence, renewable optimization, safety monitoring." },
  { icon: Store, label: "SMEs", description: "Affordable enterprise tech, automation, digital transformation." },
  { icon: Users, label: "Public Sector", description: "Data-driven governance, transparency systems, impact analytics." },
];

export default function Industries() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 70);
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
      id="industries"
      className="section-padding"
      style={{ background: "var(--surface)" }}
      ref={sectionRef}
    >
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="eyebrow mb-5 reveal">Industries</div>
            <h2
              className="text-3xl lg:text-5xl font-bold tracking-tight reveal delay-100"
              style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
            >
              Where We
              <br />
              <span style={{ color: "var(--cyan)" }}>Create Impact.</span>
            </h2>
          </div>
          <p
            className="max-w-sm text-sm leading-relaxed reveal delay-200"
            style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
          >
            Our systems are designed for real-world deployment across sectors where
            data-driven intelligence produces measurable outcomes.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "rgba(61,90,107,0.15)" }}>
          {industries.map((industry, i) => (
            <div
              key={industry.label}
              className={`card-enterprise group p-6 lg:p-8 reveal delay-${(i % 4) * 100}`}
              style={{ background: "var(--void)" }}
            >
              <div
                className="w-10 h-10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:border-cyan-DEFAULT"
                style={{
                  border: "1px solid rgba(61,90,107,0.3)",
                  background: "rgba(13,17,23,0.8)",
                }}
              >
                <industry.icon
                  size={18}
                  className="transition-colors duration-300"
                  style={{ color: "var(--steel)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cyan)")}
                />
              </div>

              <div
                className="text-sm font-semibold mb-2 transition-colors duration-300 group-hover:text-cyan-DEFAULT"
                style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
              >
                {industry.label}
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}
              >
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
