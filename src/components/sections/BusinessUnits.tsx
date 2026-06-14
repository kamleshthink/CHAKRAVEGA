"use client";

import { useEffect, useRef } from "react";
import { Shield, Code2, ArrowUpRight, MapPin, Satellite, AlertTriangle, Globe, Layers, Bot, Workflow } from "lucide-react";

const units = [
  {
    id: "jhariawatch",
    category: "Industrial Intelligence Platform",
    name: "JhariaWatch",
    description:
      "AI-powered coal mine subsidence prediction and early warning platform integrating satellite intelligence, geospatial analytics, and machine learning — designed for the Jharia Coalfield and scalable across mining regions.",
    capabilities: [
      { icon: AlertTriangle, label: "Risk Prediction" },
      { icon: Shield, label: "Early Warning" },
      { icon: Satellite, label: "Satellite Monitoring" },
      { icon: MapPin, label: "Geospatial Intelligence" },
      { icon: Layers, label: "Decision Support" },
    ],
    cta: "Explore JhariaWatch",
    href: "https://jhariyawatch.onrender.com/",
    accentText: "Industrial Intelligence",
    stat: { value: "ESA Sentinel-1", label: "SAR Data Integration" },
    bgAccent: "rgba(0, 194, 255, 0.04)",
    visual: "mining",
  },
  {
    id: "pragyadek",
    category: "Digital Infrastructure & AI Engineering",
    name: "PragyaTek Solutions",
    description:
      "Designing enterprise-grade digital systems and intelligent automation platforms that help organizations scale their digital operations, integrate AI capabilities, and build robust software foundations.",
    capabilities: [
      { icon: Code2, label: "Web Development" },
      { icon: Globe, label: "Mobile Applications" },
      { icon: Bot, label: "AI Agents" },
      { icon: Layers, label: "ML Solutions" },
      { icon: Workflow, label: "Process Automation" },
    ],
    cta: "Explore PragyaTek",
    href: "https://kamtech-solutions.onrender.com/",
    accentText: "Digital Infrastructure",
    stat: { value: "Enterprise", label: "Grade Platforms" },
    bgAccent: "rgba(0, 194, 255, 0.03)",
    visual: "digital",
  },
];

function MiningVisual() {
  return (
    <div className="relative w-full h-full min-h-[280px] overflow-hidden" aria-hidden="true">
      {/* Terrain grid */}
      <svg viewBox="0 0 400 280" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="terrainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,194,255,0.08)" />
            <stop offset="100%" stopColor="rgba(0,194,255,0)" />
          </linearGradient>
          <linearGradient id="riskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,194,255,0.6)" />
            <stop offset="50%" stopColor="rgba(255,120,0,0.5)" />
            <stop offset="100%" stopColor="rgba(255,50,50,0.6)" />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 57} y1="0" x2={i * 57} y2="280" stroke="rgba(0,194,255,0.06)" strokeWidth="1" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 47} x2="400" y2={i * 47} stroke="rgba(0,194,255,0.06)" strokeWidth="1" />
        ))}
        {/* Terrain contours */}
        <path d="M0,200 Q80,180 140,160 Q200,140 260,130 Q320,120 400,100 L400,280 L0,280 Z" fill="url(#terrainGrad)" />
        <path d="M0,200 Q80,180 140,160 Q200,140 260,130 Q320,120 400,100" fill="none" stroke="rgba(0,194,255,0.2)" strokeWidth="1.5" />
        <path d="M0,220 Q100,200 180,185 Q260,170 320,155 Q360,148 400,130" fill="none" stroke="rgba(0,194,255,0.1)" strokeWidth="1" />
        {/* Risk zones */}
        <circle cx="180" cy="148" r="30" fill="rgba(255,80,0,0.12)" stroke="rgba(255,80,0,0.3)" strokeWidth="1" />
        <circle cx="180" cy="148" r="15" fill="rgba(255,80,0,0.18)" stroke="rgba(255,80,0,0.5)" strokeWidth="1" />
        <circle cx="180" cy="148" r="5" fill="rgba(255,80,0,0.6)" />
        {/* Satellite marker */}
        <g transform="translate(320, 40)">
          <rect x="-4" y="-12" width="8" height="16" rx="1" fill="none" stroke="rgba(0,194,255,0.6)" strokeWidth="1.5" />
          <rect x="-14" y="-6" width="10" height="5" rx="1" fill="rgba(0,194,255,0.3)" />
          <rect x="4" y="-6" width="10" height="5" rx="1" fill="rgba(0,194,255,0.3)" />
          <line x1="0" y1="4" x2="180" y2="148" stroke="rgba(0,194,255,0.15)" strokeWidth="1" strokeDasharray="4,4" />
        </g>
        {/* Data points */}
        {[[60,170],[120,160],[260,135],[320,125]].map(([x,y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="rgba(0,194,255,0.5)" />
        ))}
        {/* Alert label */}
        <rect x="140" y="110" width="80" height="22" rx="2" fill="rgba(255,80,0,0.12)" stroke="rgba(255,80,0,0.3)" strokeWidth="1" />
        <text x="180" y="125" textAnchor="middle" fill="rgba(255,120,0,0.8)" fontSize="9" fontFamily="Inter Tight, sans-serif" fontWeight="600">HIGH RISK ZONE</text>
      </svg>
    </div>
  );
}

function DigitalVisual() {
  return (
    <div className="relative w-full h-full min-h-[280px] overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 400 280" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0,194,255,0)" />
            <stop offset="50%" stopColor="rgba(0,194,255,0.6)" />
            <stop offset="100%" stopColor="rgba(0,194,255,0)" />
          </linearGradient>
        </defs>
        {/* Grid bg */}
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 67} y1="0" x2={i * 67} y2="280" stroke="rgba(0,194,255,0.05)" strokeWidth="1" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 57} x2="400" y2={i * 57} stroke="rgba(0,194,255,0.05)" strokeWidth="1" />
        ))}
        {/* Code blocks */}
        {[
          { x: 20, y: 40, w: 100, h: 60 },
          { x: 150, y: 20, w: 120, h: 50 },
          { x: 290, y: 60, w: 90, h: 70 },
          { x: 40, y: 160, w: 110, h: 70 },
          { x: 190, y: 140, w: 80, h: 90 },
          { x: 300, y: 170, w: 85, h: 70 },
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="4" fill="rgba(13,17,23,0.8)" stroke="rgba(0,194,255,0.15)" strokeWidth="1" />
            {[12, 22, 32, 42].filter(dy => dy < b.h - 10).map((dy, j) => (
              <rect key={j} x={b.x + 10} y={b.y + dy} width={(b.w - 20) * (0.4 + Math.random() * 0.5)} height="4" rx="2" fill={j === 0 ? "rgba(0,194,255,0.4)" : "rgba(0,194,255,0.12)"} />
            ))}
          </g>
        ))}
        {/* Connection lines */}
        <path d="M120,70 L150,45" stroke="rgba(0,194,255,0.25)" strokeWidth="1.5" fill="none" />
        <path d="M270,45 L290,95" stroke="rgba(0,194,255,0.25)" strokeWidth="1.5" fill="none" />
        <path d="M150,195 L190,185" stroke="rgba(0,194,255,0.25)" strokeWidth="1.5" fill="none" />
        <path d="M270,185 L300,205" stroke="rgba(0,194,255,0.25)" strokeWidth="1.5" fill="none" />
        {/* Animated flow line */}
        <line x1="0" y1="140" x2="400" y2="140" stroke="url(#flowGrad)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function BusinessUnits() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="business-units"
      className="section-padding"
      style={{ background: "var(--surface)" }}
      ref={sectionRef}
    >
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <div className="eyebrow mb-5 reveal">Business Units</div>
            <h2
              className="text-3xl lg:text-5xl font-bold tracking-tight reveal delay-100"
              style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
            >
              Active Platforms
              <br />
              <span style={{ color: "var(--cyan)" }}>Solving Real Problems.</span>
            </h2>
          </div>
          <p
            className="max-w-sm text-sm leading-relaxed reveal delay-200"
            style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
          >
            Two operational business units, each addressing distinct high-impact domains
            with purpose-built intelligent systems.
          </p>
        </div>

        {/* Unit cards */}
        <div className="flex flex-col gap-px" style={{ background: "rgba(61,90,107,0.1)" }}>
          {units.map((unit, idx) => (
            <div
              key={unit.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-px reveal"
              style={{
                background: "rgba(61,90,107,0.1)",
                animationDelay: `${idx * 0.15}s`,
              }}
            >
              {/* Content */}
              <div
                className="p-8 lg:p-14 flex flex-col justify-between"
                style={{ background: "var(--surface-2)", minHeight: "460px" }}
              >
                <div>
                  <div className="eyebrow mb-3">{unit.category}</div>
                  <h3
                    className="text-2xl lg:text-4xl font-bold mb-5"
                    style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
                  >
                    {unit.name}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-8 max-w-md"
                    style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
                  >
                    {unit.description}
                  </p>

                  {/* Capabilities */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {unit.capabilities.map((cap) => (
                      <div
                        key={cap.label}
                        className="flex items-center gap-1.5 px-3 py-1.5 border text-[11px] font-medium tracking-wide"
                        style={{
                          borderColor: "rgba(0,194,255,0.15)",
                          color: "var(--text-secondary)",
                          fontFamily: "Inter Tight, sans-serif",
                          background: "rgba(0,194,255,0.04)",
                        }}
                      >
                        <cap.icon size={11} style={{ color: "var(--cyan)" }} />
                        {cap.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stat + CTA */}
                <div className="flex items-end justify-between">
                  <div>
                    <div
                      className="text-lg font-bold"
                      style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cyan)" }}
                    >
                      {unit.stat.value}
                    </div>
                    <div
                      className="text-[11px] tracking-wide"
                      style={{ color: "var(--text-muted)", fontFamily: "Inter Tight, sans-serif" }}
                    >
                      {unit.stat.label}
                    </div>
                  </div>
                  <a
                    href={unit.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 text-[12px] font-semibold tracking-[0.08em] uppercase border transition-all duration-300"
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
                    {unit.cta}
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Visual */}
              <div
                className="relative overflow-hidden"
                style={{ background: "var(--void)", minHeight: "360px" }}
              >
                <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden="true" />
                {unit.visual === "mining" ? <MiningVisual /> : <DigitalVisual />}
                {/* Label overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-8 py-5 border-t"
                  style={{
                    borderColor: "rgba(61,90,107,0.2)",
                    background: "rgba(8,11,16,0.7)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase font-semibold"
                    style={{ color: "var(--cyan)", fontFamily: "Inter Tight, sans-serif" }}
                  >
                    {unit.accentText} ·{" "}
                    <span style={{ color: "var(--text-muted)" }}>Active Platform</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
