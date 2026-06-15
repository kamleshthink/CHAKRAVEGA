"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Play } from "lucide-react";

const metrics = [
  { value: 2, suffix: "", label: "Deep-Tech Business Units" },
  { value: 8, suffix: "+", label: "Industries Supported" },
  { value: 15, suffix: "+", label: "Engineering Capabilities" },
  { value: 5, suffix: "", label: "Future Technologies" },
];

function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // Nodes
    const nodeCount = Math.min(55, Math.floor((width * height) / 20000));
    const nodes: {
      x: number; y: number;
      vx: number; vy: number;
      r: number; pulse: number;
    }[] = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 194, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const glow = 0.6 + 0.4 * Math.sin(n.pulse);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 194, 255, ${glow * 0.8})`;
        ctx.fill();

        // Inner glow
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        grad.addColorStop(0, `rgba(0, 194, 255, ${glow * 0.15})`);
        grad.addColorStop(1, "rgba(0, 194, 255, 0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.45 }}
      aria-hidden="true"
    />
  );
}

function MetricCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = () => {
            start += Math.ceil(value / 30);
            if (start >= value) {
              setCount(value);
              return;
            }
            setCount(start);
            requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="font-tight text-3xl lg:text-4xl font-bold mb-1"
        style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cyan)" }}
      >
        {count}
        {suffix}
      </div>
      <div
        className="text-[11px] tracking-[0.12em] uppercase"
        style={{ color: "var(--text-secondary)", fontFamily: "Inter Tight, sans-serif" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ background: "var(--void)" }}
      aria-label="Hero Section"
    >
      {/* Animated neural network background */}
      <NeuralCanvas />

      {/* Grid overlay */}
      <div className="grid-overlay" aria-hidden="true" />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, rgba(8,11,16,0.6) 70%, rgba(8,11,16,0.98) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Cyan accent light top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(0,194,255,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-wide w-full pt-24 lg:pt-0">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="eyebrow mb-8 flex items-center gap-3">
              <span
                className="inline-block w-8 h-px"
                style={{ background: "var(--cyan)" }}
              />
              Deep-Tech · India · Global Ambition
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
              style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
            >
              Engineering Intelligence
              <br />
              <span style={{ color: "var(--cyan)" }}>
                for a Safer and
              </span>
              <br />
              Smarter Future.
            </h1>

            {/* Subheadline */}
            <p
              className="text-base lg:text-lg max-w-2xl mb-12 leading-relaxed"
              style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
            >
              Chakravega Technologies develops advanced AI systems, industrial intelligence
              platforms, digital infrastructure solutions, and future autonomous technologies
              designed to solve high-impact real-world challenges.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#business-units"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-[13px] font-semibold tracking-[0.08em] uppercase transition-all duration-300"
                style={{
                  background: "var(--cyan)",
                  color: "var(--void)",
                  fontFamily: "Inter Tight, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(0,194,255,0.85)";
                  e.currentTarget.style.boxShadow = "0 0 40px rgba(0,194,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--cyan)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Explore Solutions
                <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#company"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-[13px] font-semibold tracking-[0.08em] uppercase border transition-all duration-300"
                style={{
                  borderColor: "rgba(61,90,107,0.5)",
                  color: "var(--text-secondary)",
                  fontFamily: "Inter Tight, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(0,194,255,0.4)";
                  e.currentTarget.style.color = "var(--cool-white)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(61,90,107,0.5)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                <Play size={12} style={{ color: "var(--cyan)" }} />
                Watch Our Vision
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics strip */}
      <div
        className="relative z-10 w-full border-t"
        style={{
          borderColor: "rgba(61,90,107,0.2)",
          background: "rgba(13,17,23,0.7)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div className="container-wide py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <MetricCounter key={m.label} {...m} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce"
        aria-hidden="true"
      >
        <div
          className="w-px h-10"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(0,194,255,0.4))",
          }}
        />
        <ChevronDown size={14} style={{ color: "var(--text-muted)" }} />
      </div>
    </section>
  );
}
