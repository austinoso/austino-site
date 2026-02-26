"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Hero from "./Hero";
import InvisibleProblem from "./InvisibleProblem";
import CaseStudy from "./CaseStudy";
import RankLocally from "./RankLocally";
import WhatYouGet from "./WhatYouGet";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

gsap.registerPlugin(ScrollTrigger);

export default function MantecaPage() {
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
      className="relative min-h-screen bg-cyber-dark"
    >
      <Navigation />

      <div className="page-frame">
        {/* ── Hero ── */}
        <div
          className="relative border-b border-white/[0.06] overflow-hidden"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse 80% 70% at 85% 10%, rgba(64,224,255,0.18), rgba(167,139,250,0.2) 40%, rgba(244,114,182,0.12) 70%, transparent 100%)",
              "radial-gradient(ellipse 60% 55% at 10% 90%, rgba(64,224,255,0.1), rgba(167,139,250,0.06) 50%, transparent 80%)",
            ].join(", "),
          }}
        >
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
            <Link
              href="/services/web-development"
              className="inline-flex items-center gap-2 text-sm font-mono text-cyber-gray-400 hover:text-white transition-colors duration-300 mb-8 sm:mb-10 tracking-wide"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Web Development</span>
            </Link>
            <Hero />
          </div>
        </div>

        {/* ── The Invisible Problem ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <InvisibleProblem />
          </div>
        </div>

        {/* ── Case Study — glow accent zone ── */}
        <div
          className="relative border-b border-white/[0.06] overflow-hidden"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse 65% 60% at 15% 35%, rgba(167,139,250,0.07), rgba(64,224,255,0.08) 50%, transparent 85%)",
              "radial-gradient(ellipse 50% 45% at 90% 80%, rgba(64,224,255,0.06), transparent 75%)",
            ].join(", "),
          }}
        >
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <CaseStudy />
          </div>
        </div>

        {/* ── What It Takes to Rank Locally ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <RankLocally />
          </div>
        </div>

        {/* ── What You Get ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <WhatYouGet />
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <FAQ />
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <FinalCTA />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
