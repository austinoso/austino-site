"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState, FormEvent } from "react";

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

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
            Let's Build Something{" "}
            <span className="text-cyber-accent">Worth Shipping.</span>
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
            <section>
              <div className="mb-5">
                <p className="font-mono text-[10px] text-cyber-accent tracking-[0.2em] uppercase mb-4">
                  // WHAT_TO_EXPECT
                </p>
                <h2 className="text-2xl font-bold text-white">
                  Response Protocol
                </h2>
              </div>
              <ul className="space-y-3 text-cyber-gray-300 text-sm" role="list">
                <li className="flex items-center gap-3">
                  <span className="text-cyber-accent">→</span>
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyber-accent">→</span>
                  <span>Free 30-min discovery call</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyber-accent">→</span>
                  <span>Technical feasibility assessment</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-cyber-accent">→</span>
                  <span>Custom proposal with timeline</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="mb-5">
                <p className="font-mono text-[10px] text-cyber-accent tracking-[0.2em] uppercase mb-4">
                  // IDEAL_PROJECTS
                </p>
                <h2 className="text-2xl font-bold text-white">Service Scope</h2>
              </div>
              <ul className="space-y-2 text-cyber-gray-300 text-sm" role="list">
                <li className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-cyber-accent"
                    aria-hidden="true"
                  />
                  <span>MVP Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-cyber-accent"
                    aria-hidden="true"
                  />
                  <span>Custom Business Tools</span>
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-cyber-accent"
                    aria-hidden="true"
                  />
                  <span>Process Automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-cyber-accent"
                    aria-hidden="true"
                  />
                  <span>API Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full bg-cyber-accent"
                    aria-hidden="true"
                  />
                  <span>Technical Consulting</span>
                </li>
              </ul>
            </section>
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
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-mono text-cyber-gray-400 mb-2"
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
                    className="w-full px-4 py-3 bg-[#0A0E14] border border-white/10 rounded-lg text-white placeholder-cyber-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent transition-all hover:border-white/20"
                    placeholder="John Smith"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-mono text-cyber-gray-400 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0A0E14] border border-white/10 rounded-lg text-white placeholder-cyber-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent transition-all hover:border-white/20"
                    placeholder="john@company.com"
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-mono text-cyber-gray-400 mb-2"
                >
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0A0E14] border border-white/10 rounded-lg text-white placeholder-cyber-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent transition-all hover:border-white/20"
                  placeholder="Acme Inc."
                />
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-mono text-cyber-gray-400 mb-2"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formState.projectType}
                    onChange={handleChange}
                    className="w-full pl-4 pr-12 py-3 bg-[#0A0E14] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent transition-all hover:border-white/20"
                    aria-required="true"
                  >
                    <option value="">Select project type</option>
                    <option value="mvp">MVP Development</option>
                    <option value="custom-solution">
                      Custom Business Solution
                    </option>
                    <option value="automation">Automation Tool</option>
                    <option value="api">API Development</option>
                    <option value="consulting">Technical Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-mono text-cyber-gray-400 mb-2"
                  >
                    Estimated Budget *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formState.budget}
                    onChange={handleChange}
                    className="w-full pl-4 pr-12 py-3 bg-[#0A0E14] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent transition-all hover:border-white/20"
                    aria-required="true"
                  >
                    <option value="">Select budget range</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="block text-sm font-mono text-cyber-gray-400 mb-2"
                >
                  Desired Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formState.timeline}
                  onChange={handleChange}
                  className="w-full pl-4 pr-12 py-3 bg-[#0A0E14] border border-white/10 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent transition-all hover:border-white/20"
                  aria-required="true"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (1-2 months)</option>
                  <option value="standard">Standard (2-4 months)</option>
                  <option value="extended">Extended (4-6 months)</option>
                  <option value="ongoing">Ongoing Partnership</option>
                </select>
              </div>

              {/* Discovery Questions */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-mono text-cyber-gray-400 mb-2"
                >
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  value={formState.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#0A0E14] border border-white/10 rounded-lg text-white placeholder-cyber-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent transition-all resize-none hover:border-white/20"
                  placeholder="Describe your project, the problem you're solving, and your target users..."
                  aria-required="true"
                />
              </div>

              <div>
                <label
                  htmlFor="currentChallenges"
                  className="block text-sm font-mono text-cyber-gray-400 mb-2"
                >
                  Current Challenges
                </label>
                <textarea
                  id="currentChallenges"
                  name="currentChallenges"
                  value={formState.currentChallenges}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-[#0A0E14] border border-white/10 rounded-lg text-white placeholder-cyber-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent transition-all resize-none hover:border-white/20"
                  placeholder="What problems or bottlenecks are you facing right now?"
                />
              </div>

              <div>
                <label
                  htmlFor="successMetrics"
                  className="block text-sm font-mono text-cyber-gray-400 mb-2"
                >
                  Success Metrics
                </label>
                <textarea
                  id="successMetrics"
                  name="successMetrics"
                  value={formState.successMetrics}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-[#0A0E14] border border-white/10 rounded-lg text-white placeholder-cyber-gray-600 focus:outline-none focus:ring-1 focus:ring-cyber-accent focus:border-cyber-accent transition-all resize-none hover:border-white/20"
                  placeholder="How will you measure the success of this project?"
                />
              </div>

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
                    Something went wrong. Please try again or email directly.
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
