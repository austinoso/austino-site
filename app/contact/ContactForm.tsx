"use client";

import { useState, FormEvent } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

// Form field configurations — aligned to ICP (local / small business owners)
const BUDGET_RANGES = [
  { value: "under-1.5k", label: "Under $1.5k" },
  { value: "1.5-3k", label: "$1.5\u20133k" },
  { value: "5k+", label: "$5k+" },
  { value: "unsure", label: "Unsure" },
];

const TIMELINES = [
  { value: "asap", label: "Within a month" },
  { value: "1-2-months", label: "1\u20132 months" },
  { value: "2-3-months", label: "2\u20133 months" },
  { value: "flexible", label: "Flexible" },
];

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-warm-gold/60 focus:border-warm-gold/50 transition-all duration-300 hover:border-stone-300";

const selectArrowStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2378716C' d='M10.293 3.293L6 7.586 1.707 3.293A1 1 0 00.293 4.707l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z'/%3E%3C/svg%3E\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 1rem center",
  backgroundSize: "12px",
};

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
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
          website: "",
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

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-label="Project inquiry form"
    >
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-stone-500 mb-2">
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
          <label htmlFor="email" className="block text-sm text-stone-500 mb-2">
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
        <label htmlFor="company" className="block text-sm text-stone-500 mb-2">
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

      {/* Website */}
      <div>
        <label htmlFor="website" className="block text-sm text-stone-500 mb-2">
          Website URL
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formState.website}
          onChange={handleChange}
          className={inputClass}
          placeholder="https://mybusiness.com"
        />
        <p className="mt-2 text-xs text-stone-500 leading-relaxed">
          Have a site? I&apos;ll take a look and send a free report on
          what&apos;s working and what could be better.
        </p>
      </div>

      {/* Budget + Timeline */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="budget" className="block text-sm text-stone-500 mb-2">
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            value={formState.budget}
            onChange={handleChange}
            className={`${inputClass} pr-12 appearance-none`}
            style={selectArrowStyle}
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
            className="block text-sm text-stone-500 mb-2"
          >
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formState.timeline}
            onChange={handleChange}
            className={`${inputClass} pr-12 appearance-none`}
            style={selectArrowStyle}
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
          className="block text-sm text-stone-500 mb-2"
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
          placeholder="Tell me about your business and what you'd like to improve."
          aria-required="true"
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-[15px] rounded-lg transition-all duration-300 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-amber-600/15"
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
        <div className="mt-4" role="group" aria-label="Security verification">
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
            className="mt-4 p-4 bg-warm-green/10 border border-warm-green/20 rounded-lg text-warm-green text-sm"
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
  );
}
