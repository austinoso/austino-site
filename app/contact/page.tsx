"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, FormEvent } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

// Form field configurations — aligned to ICP (local / small business owners)
const BUDGET_RANGES = [
  { value: "under-3k", label: "Under $3k" },
  { value: "3k-5k", label: "$3k – $5k" },
  { value: "5k-10k", label: "$5k – $10k" },
  { value: "10k+", label: "$10k+" },
  { value: "flexible", label: "Not sure yet" },
];

const TIMELINES = [
  { value: "asap", label: "Within a month" },
  { value: "1-2-months", label: "1–2 months" },
  { value: "2-3-months", label: "2–3 months" },
  { value: "flexible", label: "Flexible" },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    if (!turnstileToken) {
      setErrorMessage("Please complete the security verification");
      setIsSubmitting(false);
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formState, turnstileToken }),
      });

      let data;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server error. Please try again later.");
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitting(false);
      setSubmitStatus("success");

      // Track successful form submission in Umami
      if (
        typeof window !== "undefined" &&
        (window as unknown as Record<string, unknown>).umami
      ) {
        (
          (window as unknown as Record<string, unknown>).umami as {
            track: (event: string, data?: Record<string, string>) => void;
          }
        ).track("contact-form-submit", {
          budget: formState.budget,
          timeline: formState.timeline,
        });
      }

      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          company: "",
          budget: "",
          timeline: "",
          description: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );
      setTimeout(() => {
        setSubmitStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#111318] border border-white/[0.06] rounded-lg text-white text-sm placeholder-cyber-gray-500 focus:outline-none focus:ring-1 focus:ring-cyber-accent/50 focus:border-cyber-accent/50 transition-all duration-300 hover:border-white/[0.12]";

  return (
    <main id="main-content" className="relative min-h-screen bg-[#050505]">
      <Navigation />

      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 30% 10%, rgba(64,224,255,0.04), transparent), radial-gradient(ellipse 60% 30% at 80% 60%, rgba(120,75,255,0.025), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 md:pb-36">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            Get Started
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight mb-5">
            Tell me about your business.
          </h1>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-xl">
            No jargon, no pressure. Fill out what you can and I&apos;ll follow
            up with a clear plan within 24 hours. Or email me directly at{" "}
            <a
              href="mailto:connect@austino.dev"
              className="text-cyber-accent hover:underline"
            >
              connect@austino.dev
            </a>
            .
          </p>
        </div>

        {/* Form + Sidebar */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* Form — 2/3 */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              aria-label="Project inquiry form"
            >
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-cyber-gray-400 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Jane Smith"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-cyber-gray-400 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="jane@mybusiness.com"
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm text-cyber-gray-400 mb-2"
                >
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Acme Co."
                />
              </div>

              {/* Budget + Timeline */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm text-cyber-gray-400 mb-2"
                  >
                    Budget range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    className={`${inputClass} pr-12 appearance-none`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "12px",
                    }}
                  >
                    <option value="">Select range</option>
                    {BUDGET_RANGES.map((range) => (
                      <option key={range.value} value={range.value}>
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm text-cyber-gray-400 mb-2"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formState.timeline}
                    onChange={handleChange}
                    className={`${inputClass} pr-12 appearance-none`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "12px",
                    }}
                  >
                    <option value="">Select timeline</option>
                    {TIMELINES.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm text-cyber-gray-400 mb-2"
                >
                  How can I help? *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formState.description}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClass} resize-none`}
                  placeholder="What's slowing your business down? What would make your day-to-day easier?"
                  aria-required="true"
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-cyber-accent text-[#050505] font-semibold text-base rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  aria-label="Submit project inquiry"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </button>

                {/* Turnstile */}
                <div
                  className="mt-4"
                  role="group"
                  aria-label="Security verification"
                >
                  <Turnstile
                    siteKey={
                      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
                      "1x00000000000000000000AA"
                    }
                    onSuccess={(token) => setTurnstileToken(token)}
                    onError={() => setTurnstileToken("")}
                    onExpire={() => setTurnstileToken("")}
                  />
                </div>

                {submitStatus === "success" && (
                  <div
                    className="mt-4 p-4 bg-[#4ADE80]/10 border border-[#4ADE80]/20 rounded-lg text-[#4ADE80] text-sm"
                    role="alert"
                    aria-live="polite"
                  >
                    Message sent! I&apos;ll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
                    role="alert"
                    aria-live="polite"
                  >
                    {errorMessage ||
                      "Something went wrong. Please try again or email directly."}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Sidebar — 1/3 */}
          <aside
            className="lg:col-span-1 space-y-8"
            aria-label="Additional information"
          >
            {/* What happens next */}
            <div
              className="p-6 rounded-xl border border-white/[0.06] bg-[#111318]"
              style={{
                boxShadow:
                  "0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
              }}
            >
              <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
                What Happens Next
              </p>
              <ul className="space-y-3.5">
                {[
                  "I review your message within 24 hours",
                  "We hop on a quick call to talk through it",
                  "I send you a clear plan with timeline and cost",
                  "You decide — no pressure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-cyber-accent/60 mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-cyber-gray-300 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability */}
            <div
              className="p-6 rounded-xl border border-white/[0.06] bg-[#111318]"
              style={{
                boxShadow:
                  "0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
              }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
                <span className="text-sm font-medium text-white">
                  Accepting new projects
                </span>
              </div>
              <p className="text-sm text-cyber-gray-400 leading-relaxed">
                Based in California&apos;s Central Valley, serving clients
                everywhere. Usually responds within 24 hours.
              </p>
            </div>

            {/* Solutions */}
            <div
              className="p-6 rounded-xl border border-white/[0.06] bg-[#111318]"
              style={{
                boxShadow:
                  "0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
              }}
            >
              <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
                Solutions
              </p>
              <ul className="space-y-2.5">
                {[
                  "Web Development",
                  "Automation & Integrations",
                  "Ongoing Support",
                ].map((service) => (
                  <li
                    key={service}
                    className="flex items-center gap-2.5 text-sm text-cyber-gray-300"
                  >
                    <div className="h-1 w-1 rounded-full bg-cyber-accent/50" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}
