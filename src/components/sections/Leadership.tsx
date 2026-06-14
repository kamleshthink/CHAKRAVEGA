"use client";

import { useEffect, useRef } from "react";

const founders = [
  {
    name: "Kamlesh Kumar Sharma",
    role: "Founder & Director",
    department: "Product · Strategy · AI Systems",
    initials: "KS",
    bio: "Engineering student with deep roots in Jharia, Dhanbad. Leading JhariaWatch development and overall company direction.",
    color: "rgba(0, 194, 255, 0.15)",
  },
  {
    name: "Varun Kumar Barnwal",
    role: "Co-Founder & Director",
    department: "Engineering · Operations",
    initials: "VB",
    bio: "Civil engineering background with focus on structural intelligence and operational systems design.",
    color: "rgba(0, 120, 180, 0.12)",
  },
  {
    name: "Priyanshu Kumar",
    role: "Co-Founder",
    department: "Technology · Development",
    initials: "PK",
    bio: "Technical co-founder driving platform development and infrastructure engineering at Chakravega.",
    color: "rgba(0, 80, 140, 0.12)",
  },
  {
    name: "Aman Kumar Arya",
    role: "Co-Founder",
    department: "Research · Innovation",
    initials: "AA",
    bio: "Research-focused co-founder contributing to analytical frameworks and innovation pipeline.",
    color: "rgba(0, 60, 100, 0.12)",
  },
];

export default function Leadership() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="leadership"
      className="section-padding"
      style={{ background: "var(--surface)" }}
      ref={sectionRef}
    >
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div>
            <div className="eyebrow mb-5 reveal">Leadership</div>
            <h2
              className="text-3xl lg:text-5xl font-bold tracking-tight reveal delay-100"
              style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
            >
              Founding Team.
            </h2>
          </div>
          <p
            className="max-w-md text-sm leading-relaxed reveal delay-200"
            style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
          >
            A multidisciplinary founding team committed to solving meaningful
            real-world problems through engineering, technology, and innovation.
            All four are Civil Engineering graduates from BIT Sindri, Dhanbad.
          </p>
        </div>

        {/* Founder cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(61,90,107,0.12)" }}>
          {founders.map((founder, i) => (
            <div
              key={founder.name}
              className={`card-enterprise group p-8 reveal delay-${i * 100}`}
              style={{ background: "var(--void)" }}
            >
              {/* Avatar */}
              <div
                className="w-14 h-14 flex items-center justify-center mb-6 text-lg font-bold transition-all duration-300"
                style={{
                  background: founder.color,
                  border: "1px solid rgba(0,194,255,0.15)",
                  fontFamily: "Inter Tight, sans-serif",
                  color: "var(--cyan)",
                  letterSpacing: "0.05em",
                }}
              >
                {founder.initials}
              </div>

              <div
                className="text-base font-semibold mb-1"
                style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
              >
                {founder.name}
              </div>
              <div
                className="text-[11px] font-medium mb-1"
                style={{ color: "var(--cyan)", fontFamily: "Inter Tight, sans-serif", letterSpacing: "0.05em" }}
              >
                {founder.role}
              </div>
              <div
                className="text-[10px] tracking-wide mb-5"
                style={{ color: "var(--text-muted)", fontFamily: "Inter Tight, sans-serif" }}
              >
                {founder.department}
              </div>

              <div
                className="h-px mb-5"
                style={{ background: "rgba(61,90,107,0.2)" }}
              />

              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
              >
                {founder.bio}
              </p>

              {/* Hover bottom line */}
              <div
                className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: "linear-gradient(90deg, var(--cyan), transparent)" }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Org note */}
        <div
          className="mt-px p-8 lg:p-10 reveal"
          style={{
            background: "rgba(0,194,255,0.03)",
            border: "1px solid rgba(0,194,255,0.08)",
            borderTop: "none",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
            <p
              className="text-sm"
              style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif", maxWidth: "600px" }}
            >
              Chakravega Technologies Private Limited is a founder-led organization.
              The founding team holds equity stakes reflecting their individual contributions to
              the company's creation, direction, and technical development.
            </p>
            <a
              href="#careers"
              className="flex-shrink-0 text-[12px] font-semibold tracking-[0.08em] uppercase transition-colors duration-200"
              style={{ color: "var(--cyan)", fontFamily: "Inter Tight, sans-serif" }}
            >
              Join Our Team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
