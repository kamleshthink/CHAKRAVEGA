"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({ name: "", org: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || "";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          org: formState.org,
          email: formState.email,
          message: formState.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Contact submission failed:", error);
      alert("Unable to submit inquiry at this time. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: "rgba(13,17,23,0.8)",
    border: "1px solid rgba(61,90,107,0.3)",
    color: "var(--cool-white)",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    padding: "12px 16px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    fontFamily: "Inter Tight, sans-serif",
    marginBottom: "8px",
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--surface)" }}
      ref={sectionRef}
    >
      <div className="container-wide">
        {/* Header */}
        <div className="mb-16">
          <div className="eyebrow mb-5 reveal">Contact</div>
          <h2
            className="text-3xl lg:text-5xl font-bold tracking-tight reveal delay-100"
            style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
          >
            Let&#39;s Build
            <br />
            <span style={{ color: "var(--cyan)" }}>Something Meaningful.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ background: "rgba(61,90,107,0.12)" }}>
          {/* Contact info */}
          <div
            className="p-8 lg:p-10 flex flex-col gap-8 reveal"
            style={{ background: "var(--void)" }}
          >
            <div>
              <div
                className="text-[10px] tracking-[0.15em] uppercase font-semibold mb-4"
                style={{ color: "var(--text-muted)", fontFamily: "Inter Tight, sans-serif" }}
              >
                Get In Touch
              </div>

              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ border: "1px solid rgba(0,194,255,0.2)", background: "rgba(0,194,255,0.05)" }}
                  >
                    <Mail size={13} style={{ color: "var(--cyan)" }} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-wide mb-1" style={{ color: "var(--text-muted)", fontFamily: "Inter Tight, sans-serif" }}>EMAIL</div>
                    <a
                      href="mailto:chakravegatechnologies@gmail.com"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cool-white)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      chakravegatechnologies@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ border: "1px solid rgba(0,194,255,0.2)", background: "rgba(0,194,255,0.05)" }}
                  >
                    <Phone size={13} style={{ color: "var(--cyan)" }} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-wide mb-1" style={{ color: "var(--text-muted)", fontFamily: "Inter Tight, sans-serif" }}>PHONE</div>
                    <a
                      href="tel:+917209213003"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cool-white)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                      +91 7209 213 003
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ border: "1px solid rgba(0,194,255,0.2)", background: "rgba(0,194,255,0.05)" }}
                  >
                    <MapPin size={13} style={{ color: "var(--cyan)" }} />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-wide mb-1" style={{ color: "var(--text-muted)", fontFamily: "Inter Tight, sans-serif" }}>OFFICE</div>
                    <address
                      className="text-sm not-italic leading-relaxed"
                      style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
                    >
                      Samudih, Patrakhurd<br />
                      Japla, Palamau<br />
                      Jharkhand – 822116<br />
                      India
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Response commitment */}
            <div
              className="p-4 border-l-2"
              style={{
                borderColor: "var(--cyan)",
                background: "rgba(0,194,255,0.04)",
              }}
            >
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}>
                We typically respond within{" "}
                <span style={{ color: "var(--cool-white)", fontWeight: 500 }}>48 business hours</span>.
                For urgent inquiries, please call directly.
              </p>
            </div>
          </div>

          {/* Inquiry form */}
          <div
            className="lg:col-span-2 p-8 lg:p-10 reveal delay-100"
            style={{ background: "var(--surface-2)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-6">
                <CheckCircle size={48} style={{ color: "var(--cyan)" }} />
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "Inter Tight, sans-serif", color: "var(--cool-white)" }}
                  >
                    Message Received
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)", fontFamily: "Inter, sans-serif" }}
                  >
                    We&#39;ll get back to you within 48 business hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>Full Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,194,255,0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(61,90,107,0.3)")}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-org" style={labelStyle}>Organization</label>
                    <input
                      id="contact-org"
                      name="org"
                      type="text"
                      placeholder="Company / Institution"
                      value={formState.org}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(0,194,255,0.4)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(61,90,107,0.3)")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-email" style={labelStyle}>Email Address *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,194,255,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(61,90,107,0.3)")}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" style={labelStyle}>Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe your inquiry, project, or how we can collaborate..."
                    value={formState.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "150px" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(0,194,255,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(61,90,107,0.3)")}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p
                    className="text-[11px]"
                    style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}
                  >
                    By submitting, you agree to our privacy policy.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center gap-2 px-8 py-4 text-[12px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 disabled:opacity-60"
                    style={{
                      background: "var(--cyan)",
                      color: "var(--void)",
                      fontFamily: "Inter Tight, sans-serif",
                      cursor: submitting ? "not-allowed" : "pointer",
                    }}
                    onMouseEnter={(e) => !submitting && (e.currentTarget.style.boxShadow = "0 0 30px rgba(0,194,255,0.3)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                  >
                    {submitting ? "Sending..." : "Send Inquiry"}
                    <Send size={12} className={submitting ? "" : "group-hover:translate-x-0.5 transition-transform"} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
