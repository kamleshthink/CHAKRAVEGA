"use client";

import { useEffect, useRef, useState } from "react";
import { Database, Brain, Cpu, Server, Globe } from "lucide-react";

const flowSteps = [
  {
    icon: Database,
    label: "Data Sources",
    sub: "Satellite · Sensors · Telemetry · Enterprise",
  },
  {
    icon: Brain,
    label: "Artificial Intelligence",
    sub: "Machine Learning · Computer Vision · NLP",
  },
  {
    icon: Cpu,
    label: "Decision Intelligence",
    sub: "Risk Models · Prediction Engines · Analytics",
  },
  {
    icon: Server,
    label: "Enterprise Systems",
    sub: "APIs · Dashboards · Integration Layer",
  },
  {
    icon: Globe,
    label: "Human Impact",
    sub: "Safety · Efficiency · Growth · Outcomes",
    highlight: true,
  },
];

export default function TechEcosystem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
            // Animate steps one by one
            flowSteps.forEach((_, i) => {
              setTimeout(() => setActiveStep(i), 800 + i * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="technology"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--void)" }}
      ref={sectionRef}
    >
      {/* Background grid */}
      <div className="grid-overlay opacity-20 absolute inset-0" aria-hidden="true" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="eyebrow mb-5 reveal">Technology Ecosystem</div>
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight mb-6 reveal delay-100"
            style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
          >
            How Data Becomes
            <br />
            <span style={{ color: "var(--cyan)" }}>Intelligence.</span>
          </h2>
          <p
            className="text-sm lg:text-base leading-relaxed reveal delay-200"
            style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
          >
            Every platform we build follows the same architectural philosophy:
            convert raw inputs into high-confidence decisions that drive action.
          </p>
        </div>

        {/* Flow diagram — desktop horizontal, mobile vertical */}
        <div className="hidden lg:flex items-center justify-between gap-0 relative reveal">
          {/* Background connector line */}
          <div
            className="absolute top-[48px] left-[10%] right-[10%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,194,255,0.2), transparent)" }}
            aria-hidden="true"
          />

          {flowSteps.map((step, i) => (
            <div key={step.label} className="flex flex-col items-center flex-1">
              {/* Node */}
              <div
                className="relative w-24 h-24 flex items-center justify-center mb-6 transition-all duration-700"
                style={{
                  border: activeStep >= i
                    ? step.highlight
                      ? "1px solid rgba(0,194,255,0.6)"
                      : "1px solid rgba(0,194,255,0.3)"
                    : "1px solid rgba(61,90,107,0.3)",
                  background: activeStep >= i
                    ? step.highlight
                      ? "rgba(0,194,255,0.1)"
                      : "rgba(0,194,255,0.05)"
                    : "rgba(13,17,23,0.8)",
                  boxShadow: activeStep >= i && step.highlight
                    ? "0 0 40px rgba(0,194,255,0.2)"
                    : "none",
                  transform: activeStep >= i ? "scale(1)" : "scale(0.9)",
                  opacity: activeStep >= i ? 1 : 0.4,
                }}
              >
                <step.icon
                  size={28}
                  style={{
                    color: activeStep >= i ? "var(--cyan)" : "var(--steel)",
                    transition: "color 0.5s ease",
                  }}
                />
                {/* Step number */}
                <div
                  className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-[9px] font-bold"
                  style={{
                    background: activeStep >= i ? "var(--cyan)" : "var(--steel)",
                    color: "var(--void)",
                    fontFamily: "Inter Tight, sans-serif",
                    transition: "background 0.5s ease",
                  }}
                >
                  {i + 1}
                </div>
              </div>

              <div
                className="text-center transition-all duration-700"
                style={{ opacity: activeStep >= i ? 1 : 0.3 }}
              >
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
                >
                  {step.label}
                </div>
                <div
                  className="text-[10px] leading-relaxed"
                  style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif", maxWidth: "120px" }}
                >
                  {step.sub}
                </div>
              </div>

              {/* Arrow connector — not for last */}
              {i < flowSteps.length - 1 && (
                <div
                  className="absolute"
                  style={{
                    top: "48px",
                    left: `calc(${(i / (flowSteps.length - 1)) * 100}% + 60px)`,
                    color: "var(--steel)",
                    fontSize: "18px",
                    opacity: activeStep >= i ? 0.5 : 0.15,
                    transition: "opacity 0.5s ease",
                  }}
                  aria-hidden="true"
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile flow — vertical */}
        <div className="lg:hidden flex flex-col gap-px" style={{ background: "rgba(61,90,107,0.1)" }}>
          {flowSteps.map((step, i) => (
            <div
              key={step.label}
              className="flex items-center gap-4 p-6"
              style={{
                background: step.highlight ? "rgba(0,194,255,0.04)" : "var(--surface-2)",
                borderLeft: step.highlight ? "2px solid var(--cyan)" : "2px solid transparent",
              }}
            >
              <div
                className="w-12 h-12 flex-shrink-0 flex items-center justify-center"
                style={{
                  border: "1px solid rgba(0,194,255,0.2)",
                  background: "rgba(0,194,255,0.05)",
                }}
              >
                <step.icon size={18} style={{ color: "var(--cyan)" }} />
              </div>
              <div>
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
                >
                  {step.label}
                </div>
                <div
                  className="text-[11px]"
                  style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}
                >
                  {step.sub}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Observe → Analyze → Predict → Act */}
        <div className="mt-24 border-t pt-16" style={{ borderColor: "rgba(61,90,107,0.2)" }}>
          <div className="eyebrow text-center mb-12 reveal">The Chakravega Method</div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(61,90,107,0.12)" }}>
            {["Observe", "Analyze", "Predict", "Act"].map((word, i) => (
              <div
                key={word}
                className={`p-8 lg:p-10 text-center reveal delay-${i * 100}`}
                style={{ background: "var(--surface-2)" }}
              >
                <div
                  className="text-2xl lg:text-4xl font-bold mb-2"
                  style={{ fontFamily: "Inter Tight, sans-serif", color: i === 3 ? "var(--cyan)" : "var(--cool-white)" }}
                >
                  {word}.
                </div>
                <div
                  className="text-[10px] tracking-[0.12em] uppercase"
                  style={{ color: "var(--text-muted)", fontFamily: "Inter Tight, sans-serif" }}
                >
                  Step {i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
