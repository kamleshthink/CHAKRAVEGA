"use client";

import { useEffect, useRef } from "react";
import { Brain, Factory, Globe, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Building AI systems that extract signal from noise — turning raw data into decisions that matter, at scale.",
  },
  {
    icon: Factory,
    title: "Industrial Intelligence",
    description:
      "Applying machine intelligence to real-world industrial environments where accuracy and reliability are not optional.",
  },
  {
    icon: Globe,
    title: "Digital Infrastructure",
    description:
      "Designing robust digital systems that serve as the backbone for enterprise-grade intelligent operations.",
  },
  {
    icon: Cpu,
    title: "Robotics & Autonomous Systems",
    description:
      "Developing the next generation of autonomous technologies that will redefine how machines interact with the physical world.",
  },
];

export default function Company() {
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
    <section id="company" className="section-padding" style={{ background: "var(--void)" }} ref={sectionRef}>
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <div className="eyebrow mb-5 reveal">Who We Are</div>
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight mb-6 reveal delay-100"
            style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
          >
            A Deep-Tech Company
            <br />
            <span style={{ color: "var(--cyan)" }}>Originating from India.</span>
          </h2>
          <p
            className="text-base lg:text-lg leading-relaxed reveal delay-200"
            style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif", maxWidth: "600px" }}
          >
            Chakravega Technologies was founded to address a gap: the absence of
            deep-tech companies from India&#39;s industrial heartland that build serious,
            high-impact intelligent systems. We operate at the intersection of engineering
            rigor and applied intelligence, targeting problems where the stakes are real.
          </p>
        </div>

        {/* Divider line */}
        <div className="section-divider mb-20 reveal delay-200" />

        {/* Four pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(61,90,107,0.15)" }}>
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`card-enterprise p-8 reveal delay-${(i + 1) * 100}`}
              style={{ background: "var(--surface)" }}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 flex items-center justify-center mb-6 border"
                style={{
                  borderColor: "rgba(0,194,255,0.2)",
                  background: "rgba(0,194,255,0.05)",
                }}
              >
                <pillar.icon size={18} style={{ color: "var(--cyan)" }} />
              </div>

              <h3
                className="text-base font-semibold mb-3"
                style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
              >
                {pillar.description}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className="mt-6 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: "var(--cyan)" }}
              />
            </div>
          ))}
        </div>

        {/* Mission & Vision block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px mt-px" style={{ background: "rgba(61,90,107,0.15)" }}>
          <div className="p-8 lg:p-12 reveal" style={{ background: "var(--surface-2)" }}>
            <div className="eyebrow mb-4">Mission</div>
            <p
              className="text-xl lg:text-2xl font-medium leading-relaxed"
              style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
            >
              To build intelligent systems that transform data into action and create
              measurable impact across industries and society.
            </p>
          </div>
          <div className="p-8 lg:p-12 reveal delay-100" style={{ background: "var(--surface-2)" }}>
            <div className="eyebrow mb-4">Vision</div>
            <p
              className="text-xl lg:text-2xl font-medium leading-relaxed"
              style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
            >
              To become a globally trusted deep-tech company originating from India,
              advancing the future of industrial intelligence, robotics, and autonomous systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
