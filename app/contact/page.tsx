"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, FormEvent } from "react";
import { Turnstile } from "@marsidev/react-turnstile";

// Shared styles
const INPUT_BASE_CLASS =
  "w-full px-4 py-3 bg-[#0A0E14] border border-white/10 rounded-lg text-white placeholder-cyber-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent transition-all hover:border-white/20";
const LABEL_CLASS = "block text-sm font-mono text-cyber-gray-400 mb-2";
const SECTION_HEADER_CLASS =
  "font-mono text-[10px] text-cyber-accent tracking-[0.2em] uppercase mb-4";

// Form field configurations
const PROJECT_TYPES = [
  { value: "web-development", label: "Web Development" },
  { value: "mvp", label: "MVP Development" },
  { value: "custom-solution", label: "Custom Business Solution" },
  { value: "automation", label: "Automation Tool" },
  { value: "api", label: "API Development" },
  { value: "consulting", label: "Technical Consulting" },
  { value: "other", label: "Other" },
];

const BUDGET_RANGES = [
  { value: "1-5k", label: "$1k - $5k" },
  { value: "5k-10k", label: "$5k - $10k" },
  { value: "10k-25k", label: "$10k - $25k" },
  { value: "25k-50k", label: "$25k - $50k" },
  { value: "50k+", label: "$50k+" },
  { value: "flexible", label: "Flexible" },
];

const TIMELINES = [
  { value: "asap", label: "ASAP (1-2 months)" },
  { value: "standard", label: "Standard (2-4 months)" },
  { value: "extended", label: "Extended (4-6 months)" },
  { value: "ongoing", label: "Ongoing Partnership" },
];

const RESPONSE_ITEMS = [
  "Response within 24 hours",
  "Free 30-min discovery call",
  "Technical feasibility assessment",
  "Custom proposal with timeline",
];

const SERVICE_SCOPE = [
  "Web Development",
  "MVP Development",
  "Custom Business Tools",
  "Process Automation",
  "API Development",
  "Technical Consulting",
];

// Reusable FormField component (moved outside to prevent re-creation on each render)
const FormField = ({
  id,
  label,
  required = false,
  type = "text",
  placeholder,
  as = "input",
  rows,
  children,
  value,
  onChange,
}: {
  id: string;
  label: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  rows?: number;
  children?: React.ReactNode;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}) => (
  <div>
    <label htmlFor={id} className={LABEL_CLASS}>
      {label} {required && "*"}
    </label>
    {as === "input" && (
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={onChange}
        className={INPUT_BASE_CLASS}
        placeholder={placeholder}
        aria-required={required}
      />
    )}
    {as === "textarea" && (
      <textarea
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={onChange}
        rows={rows}
        className={`${INPUT_BASE_CLASS} resize-none`}
        placeholder={placeholder}
        aria-required={required}
      />
    )}
    {as === "select" && (
      <select
        id={id}
        name={id}
        required={required}
        value={value}
        onChange={onChange}
        className={`${INPUT_BASE_CLASS} pr-12`}
        aria-required={required}
      >
        {children}
      </select>
    )}
  </div>
);

// Reusable InfoSection component
const InfoSection = ({
  title,
  items,
  variant = "arrow",
}: {
  title: string;
  items: string[];
  variant?: "arrow" | "dot";
}) => (
  <section>
    <div className="mb-5">
      <p className={SECTION_HEADER_CLASS}>
        // {title.toUpperCase().replace(/ /g, "_")}
      </p>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    </div>
    <ul className="space-y-3 text-cyber-gray-300 text-sm" role="list">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          {variant === "arrow" ? (
            <span className="text-cyber-accent">→</span>
          ) : (
            <div
              className="w-1.5 h-1.5 rounded-full bg-cyber-accent"
              aria-hidden="true"
            />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    currentChallenges: "",
    successMetrics: "",
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

    // Check for turnstile token
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          turnstileToken,
        }),
      });

      let data;
      const contentType = response.headers.get("content-type");
      
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        // Response is not JSON (likely HTML error page)
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error("Server error. Please try again later.");
      }

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form after success
      setTimeout(() => {
        setFormState({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          description: "",
          currentChallenges: "",
          successMetrics: "",
        });
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred",
      );

      // Reset error status after 5 seconds
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
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="relative min-h-screen bg-[#050505]">
      <Navigation />

      <div className="max-w-5xl mx-auto px-6 py-32">
        {/* Breadcrumb Header */}
        <div className="mb-12">
          <p className="font-mono text-[10px] text-cyber-gray-400 tracking-[0.2em] uppercase">
            // CONTACT_FORM
          </p>
        </div>

        {/* Header */}
        <header className="mb-16 space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Let's Build Something Real.
          </h1>
          <p className="text-xl text-cyber-gray-300 max-w-2xl">
            Share your project vision and let's explore how we can turn your
            ideas into production-ready software that drives real business
            value.
          </p>
        </header>

        {/* Contact Form */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Info */}
          <aside className="lg:col-span-1 space-y-10">
            <InfoSection
              title="Response Protocol"
              items={RESPONSE_ITEMS}
              variant="arrow"
            />
            <InfoSection
              title="Service Scope"
              items={SERVICE_SCOPE}
              variant="dot"
            />
          </aside>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-label="Project inquiry form"
            >
              {/* Basic Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  id="name"
                  label="Your Name"
                  required
                  placeholder="John Smith"
                  value={formState.name}
                  onChange={handleChange}
                />
                <FormField
                  id="email"
                  label="Email Address"
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={formState.email}
                  onChange={handleChange}
                />
              </div>

              <FormField
                id="company"
                label="Company / Organization"
                placeholder="Acme Inc."
                value={formState.company}
                onChange={handleChange}
              />

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  id="projectType"
                  label="Project Type"
                  required
                  as="select"
                  value={formState.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select project type</option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </FormField>

                <FormField
                  id="budget"
                  label="Estimated Budget"
                  required
                  as="select"
                  value={formState.budget}
                  onChange={handleChange}
                >
                  <option value="">Select budget range</option>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </FormField>
              </div>

              <FormField
                id="timeline"
                label="Desired Timeline"
                required
                as="select"
                value={formState.timeline}
                onChange={handleChange}
              >
                <option value="">Select timeline</option>
                {TIMELINES.map((timeline) => (
                  <option key={timeline.value} value={timeline.value}>
                    {timeline.label}
                  </option>
                ))}
              </FormField>

              {/* Discovery Questions */}
              <FormField
                id="description"
                label="Project Description"
                required
                as="textarea"
                rows={4}
                placeholder="Describe your project, the problem you're solving, and your target users..."
                value={formState.description}
                onChange={handleChange}
              />

              <FormField
                id="currentChallenges"
                label="Current Challenges"
                as="textarea"
                rows={3}
                placeholder="What problems or bottlenecks are you facing right now?"
                value={formState.currentChallenges}
                onChange={handleChange}
              />

              <FormField
                id="successMetrics"
                label="Success Metrics"
                as="textarea"
                rows={3}
                placeholder="How will you measure the success of this project?"
                value={formState.successMetrics}
                onChange={handleChange}
              />

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-cyber-accent text-black font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  aria-label="Submit project inquiry"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
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
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Inquiry</span>
                  )}
                </button>

                {/* Turnstile Security Verification */}
                <div className="flex justify-center mt-4">
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
                    className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center"
                    role="alert"
                    aria-live="polite"
                  >
                    ✓ Message sent successfully! I'll get back to you within 24
                    hours.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center"
                    role="alert"
                    aria-live="polite"
                  >
                    ✗{" "}
                    {errorMessage ||
                      "Something went wrong. Please try again or email directly."}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
