"use client";

import { useEffect, useRef } from "react";
import { Bot, Zap, Navigation, Brain, Users } from "lucide-react";

const technologies = [
  {
    icon: Bot,
    title: "Robotics",
    description:
      "Intelligent robotic systems capable of operating in complex industrial and hazardous environments.",
  },
  {
    icon: Navigation,
    title: "Autonomous Systems",
    description:
      "Self-directing platforms that perceive, reason, and act with minimal human intervention.",
  },
  {
    icon: Zap,
    title: "Intelligent Drones",
    description:
      "Unmanned aerial vehicles with onboard intelligence for surveillance, inspection, and logistics.",
  },
  {
    icon: Brain,
    title: "Decision Intelligence",
    description:
      "AI architectures that augment and accelerate complex human decision-making in real-time.",
  },
  {
    icon: Users,
    title: "Human-AI Collaboration",
    description:
      "Interfaces and frameworks that enable humans and AI to work as integrated teams.",
  },
];

export default function FutureTech() {
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
      id="solutions"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--void)" }}
      ref={sectionRef}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(0,194,255,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <div className="eyebrow mb-5 reveal">Future Technologies</div>
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight mb-6 reveal delay-100"
            style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
          >
            Building the Technologies
            <br />
            <span style={{ color: "var(--cyan)" }}>of Tomorrow.</span>
          </h2>
          <p
            className="text-sm lg:text-base leading-relaxed reveal delay-200"
            style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
          >
            These are not concepts. These are strategic development initiatives
            that define Chakravega's long-term engineering roadmap.
          </p>
        </div>

        {/* Tech cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(61,90,107,0.12)" }}>
          {technologies.map((tech, i) => (
            <div
              key={tech.title}
              className={`card-enterprise group relative p-8 lg:p-10 overflow-hidden reveal delay-${(i % 5) * 100}`}
              style={{ background: "var(--surface-2)" }}
            >
              {/* Status badge */}
              <div
                className="absolute top-6 right-6 flex items-center gap-1.5 px-2.5 py-1 text-[9px] font-semibold tracking-[0.15em] uppercase"
                style={{
                  background: "rgba(0,194,255,0.06)",
                  border: "1px solid rgba(0,194,255,0.15)",
                  color: "var(--text-muted)",
                  fontFamily: "Inter Tight, sans-serif",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--cyan)" }} />
                In Development
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "rgba(0,194,255,0.06)",
                  border: "1px solid rgba(0,194,255,0.15)",
                }}
              >
                <tech.icon size={20} style={{ color: "var(--cyan)" }} />
              </div>

              <h3
                className="text-lg font-semibold mb-3"
                style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
              >
                {tech.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
              >
                {tech.description}
              </p>

              {/* Bottom glow on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(90deg, transparent, var(--cyan), transparent)" }}
              />
            </div>
          ))}

          {/* Strategy note card */}
          <div
            className="p-8 lg:p-10 flex flex-col justify-center reveal"
            style={{
              background: "rgba(0,194,255,0.03)",
              border: "1px solid rgba(0,194,255,0.08)",
            }}
          >
            <div
              className="text-[11px] tracking-[0.15em] uppercase mb-4"
              style={{ color: "var(--cyan)", fontFamily: "Inter Tight, sans-serif" }}
            >
              Under Strategic Development
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
            >
              These technologies represent Chakravega's R&D investment areas.
              Each is aligned to a specific market gap where intelligent systems
              can deliver asymmetric value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
