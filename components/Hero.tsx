"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const ribbonRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const scoreRingRef = useRef<SVGCircleElement>(null);
  const scoreTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const els = [
        ribbonRef.current,
        headlineRef.current,
        descriptionRef.current,
        trustRef.current,
        ctaRef.current,
        mockupRef.current,
        metricsRef.current,
        workflowRef.current,
      ];

      gsap.set(els, { opacity: 0, y: 20 });

      /* Score ring — start fully offset */
      const circumference = 2 * Math.PI * 15.5; // ≈97.4
      if (scoreRingRef.current) {
        gsap.set(scoreRingRef.current, {
          strokeDasharray: circumference,
          strokeDashoffset: circumference,
        });
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.8 },
      });

      tl.to(ribbonRef.current, { opacity: 1, y: 0, duration: 0.6 })
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.35")
        .to(
          descriptionRef.current,
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.45",
        )
        .to(trustRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(mockupRef.current, { opacity: 1, y: 0, duration: 0.9 }, "-=0.5")
        .to(metricsRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(workflowRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");

      /* Draw the score ring + count up */
      if (scoreRingRef.current) {
        tl.to(
          scoreRingRef.current,
          { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" },
          "-=0.6",
        );
      }
      if (scoreTextRef.current) {
        const counter = { v: 0 };
        tl.to(
          counter,
          {
            v: 100,
            duration: 1.2,
            ease: "power2.out",
            onUpdate: () => {
              if (scoreTextRef.current) {
                scoreTextRef.current.textContent = Math.round(
                  counter.v,
                ).toString();
              }
            },
          },
          "<",
        );
      }

      /* Float animations disabled for now */
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col"
      aria-labelledby="hero-heading"
    >
      {/* Ambient gradients — very subtle */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(64,224,255,0.05), transparent), radial-gradient(ellipse 60% 50% at 20% 50%, rgba(120,75,255,0.03), transparent)",
        }}
        aria-hidden="true"
      />
      {/* Noise grain texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 pt-28 sm:pt-32 lg:pt-36 pb-16 flex-1 flex items-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
          {/* ─── Copy ─── */}
          <div className="lg:col-span-7 space-y-6">
            <p
              ref={ribbonRef}
              className="font-mono text-[10px] sm:text-[11px] text-cyber-gray-500 uppercase tracking-[0.24em]"
            >
              SYSTEMS ARCHITECTURE // WEB ENGINEERING // AUTOMATION
            </p>

            <h1
              ref={headlineRef}
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight tracking-tight"
            >
              High-Performance Web Systems &amp; Custom Business Automation.
            </h1>

            <p
              ref={descriptionRef}
              className="text-lg sm:text-xl md:text-2xl text-cyber-gray-300 max-w-2xl leading-relaxed"
            >
              I bridge the gap between complex business problems and streamlined
              tech systems. Based in Northern California, serving clients
              worldwide.
            </p>

            <div
              ref={trustRef}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-cyber-gray-200"
            >
              <span className="h-2 w-2 rounded-full bg-cyber-accent" />
              Guaranteed 90+ Lighthouse scores for speed, SEO, and
              accessibility.
            </div>

            <div ref={ctaRef} className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-white text-[#050505] font-semibold rounded-lg transition-all text-sm sm:text-base shadow-lg shadow-white/10 hover:shadow-xl hover:shadow-cyber-accent/20"
                aria-label="Start a project"
              >
                Start a Project
              </Link>
            </div>
          </div>

          {/* ─── Visual ─── */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Browser mockup */}
              <div
                ref={mockupRef}
                className="relative rounded-2xl border border-white/[0.08] bg-[#111318] overflow-hidden"
                style={{
                  boxShadow:
                    "0 32px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03)",
                }}
              >
                {/* Chrome bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0D0F13]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] text-[11px] text-cyber-gray-400 font-mono">
                      <svg
                        className="w-2.5 h-2.5 opacity-40"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M11.5 1a3.5 3.5 0 00-3.5 3.5V7H3a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2H9V4.5a2.5 2.5 0 015 0V6h1V4.5A3.5 3.5 0 0011.5 1z" />
                      </svg>
                      mymassagecottage.com
                    </div>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/assets/my-massage-cottage-demo.jpg"
                    alt="My Massage Cottage — client website preview"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Workflow automation card */}
              <div
                ref={workflowRef}
                className="absolute -bottom-10 -left-4 sm:-left-6 w-[200px] rounded-xl border border-white/[0.08] bg-[#111318]/95 p-4"
                style={{
                  boxShadow:
                    "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-cyber-accent/10">
                    <svg
                      className="w-3 h-3 text-cyber-accent"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 4h12M2 8h8M2 12h10" />
                    </svg>
                  </div>
                  <p className="text-[11px] font-semibold text-white">
                    Workflows Active
                  </p>
                </div>
                <div className="space-y-2">
                  {[
                    { task: "Invoice sent", status: "Auto" },
                    { task: "Booking confirmed", status: "Auto" },
                    { task: "Follow-up scheduled", status: "Auto" },
                  ].map((w) => (
                    <div
                      key={w.task}
                      className="flex items-center justify-between"
                    >
                      <span className="text-[10px] text-cyber-gray-400">
                        {w.task}
                      </span>
                      <span className="text-[9px] font-medium text-cyber-accent/80 bg-cyber-accent/[0.08] px-1.5 py-0.5 rounded">
                        {w.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance metrics card */}
              <div
                ref={metricsRef}
                className="absolute -bottom-8 -right-4 sm:-right-8 w-[210px] rounded-xl border border-white/[0.08] bg-[#111318]/95 p-4"
                style={{
                  boxShadow:
                    "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Score ring + label */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative h-11 w-11 flex-shrink-0">
                    <svg
                      viewBox="0 0 36 36"
                      className="h-full w-full -rotate-90"
                    >
                      <circle
                        cx="18"
                        cy="18"
                        r="15.5"
                        fill="none"
                        stroke="rgba(255,255,255,0.06)"
                        strokeWidth="3"
                      />
                      <circle
                        ref={scoreRingRef}
                        cx="18"
                        cy="18"
                        r="15.5"
                        fill="none"
                        stroke="#4ADE80"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span
                      ref={scoreTextRef}
                      className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white"
                    >
                      0
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-white leading-tight">
                      Lighthouse
                    </p>
                    <p className="text-[10px] text-cyber-gray-400">
                      Overall Score
                    </p>
                  </div>
                </div>

                {/* Metric rows */}
                <div className="space-y-2 border-t border-white/[0.06] pt-3">
                  {[
                    { label: "Performance", value: "100" },
                    { label: "Accessibility", value: "100" },
                    { label: "SEO", value: "100" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="flex items-center justify-between"
                    >
                      <span className="text-[10px] text-cyber-gray-400">
                        {m.label}
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] font-semibold text-[#4ADE80]">
                          {m.value}
                        </span>
                        <svg
                          className="w-2.5 h-2.5 text-[#4ADE80]"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 111.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
