"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Hero from "./Hero";
import FirstImpressions from "./FirstImpressions";
import WhatYouGet from "./WhatYouGet";
import SpecialistDifference from "./SpecialistDifference";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

gsap.registerPlugin(ScrollTrigger);

export default function WebDevelopmentPage() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      const heroVisual = mainRef.current?.querySelector("[data-hero-visual]");
      if (heroVisual) {
        gsap.from(heroVisual, {
          x: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      const heroCopy = mainRef.current?.querySelector("[data-hero-copy]");
      if (heroCopy) {
        gsap.from(heroCopy, {
          x: -30,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.1,
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el, i) => {
        gsap.from(el, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={mainRef}
      id="main-content"
      className="relative min-h-screen bg-[#050505]"
    >
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

      {/* Accent glow — hero area */}
      <div
        className="absolute inset-x-0 top-0 h-[800px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 30%, rgba(64,224,255,0.05), transparent), radial-gradient(ellipse 50% 40% at 25% 50%, rgba(120,75,255,0.03), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow — mid-page cyan + purple */}
      <div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: "38%",
          height: "900px",
          transform: "translateY(-50%)",
          background:
            "radial-gradient(ellipse 90% 50% at 30% 40%, rgba(64,224,255,0.035), transparent), radial-gradient(ellipse 70% 40% at 75% 60%, rgba(120,75,255,0.03), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow — bottom cyan for results / CTA area */}
      <div
        className="absolute inset-x-0 bottom-0 h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 60%, rgba(64,224,255,0.04), transparent)",
        }}
        aria-hidden="true"
      />

      <article className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-36 lg:pt-40">
        <Link
          href="/#solutions"
          className="inline-flex items-center gap-2 text-sm font-mono text-cyber-gray-400 hover:text-white transition-colors duration-300 mb-10 sm:mb-14 tracking-wide"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>

        <Hero />
        <FirstImpressions />
      </article>

      {/* ── Full-bleed background zone — What You Get ── */}
      <div className="relative">
        {/* Top fade-in edge */}
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(64,224,255,0.12) 30%, rgba(64,224,255,0.12) 70%, transparent)",
          }}
          aria-hidden="true"
        />
        {/* Background panel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(64,224,255,0.02) 0%, rgba(64,224,255,0.04) 50%, rgba(64,224,255,0.02) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Bottom fade-out edge */}
        <div
          className="absolute inset-x-0 bottom-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(64,224,255,0.12) 30%, rgba(64,224,255,0.12) 70%, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-16 sm:py-20">
          <WhatYouGet />
        </div>
      </div>

      <article className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-24 sm:pt-32 pb-20 sm:pb-28 md:pb-36">
        <SpecialistDifference />
        <FAQ />
        <FinalCTA />
      </article>

      <Footer />
    </main>
  );
}
