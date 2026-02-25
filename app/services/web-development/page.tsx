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
import GoogleRanking from "./GoogleRanking";
import WhatYouGet from "./WhatYouGet";
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
      className="relative min-h-screen bg-cyber-dark"
    >
      <Navigation />

      <div className="page-frame">
        {/* ── Hero ── */}
        <div className="relative border-b border-white/[0.06] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="absolute"
              style={{
                top: "-30%",
                right: "-15%",
                width: "70%",
                height: "80%",
                background:
                  "linear-gradient(135deg, rgba(64,224,255,0.25) 0%, rgba(167,139,250,0.3) 40%, rgba(244,114,182,0.2) 100%)",
                filter: "blur(60px)",
                borderRadius: "40%",
              }}
            />
            <div
              className="absolute"
              style={{
                bottom: "-20%",
                left: "-10%",
                width: "50%",
                height: "60%",
                background:
                  "radial-gradient(ellipse at center, rgba(64,224,255,0.15) 0%, rgba(167,139,250,0.1) 50%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
          </div>
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <Link
              href="/#solutions"
              className="inline-flex items-center gap-2 text-sm font-mono text-cyber-gray-400 hover:text-white transition-colors duration-300 mb-10 sm:mb-14 tracking-wide"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <Hero />
          </div>
        </div>

        {/* ── First Impressions ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <FirstImpressions />
          </div>
        </div>

        {/* ── How Google Sees You ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <GoogleRanking />
          </div>
        </div>

        {/* ── What You Get — glow accent zone ── */}
        <div className="relative border-b border-white/[0.06] overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="absolute"
              style={{
                top: "10%",
                left: "-10%",
                width: "60%",
                height: "70%",
                background:
                  "linear-gradient(160deg, rgba(167,139,250,0.1) 0%, rgba(64,224,255,0.12) 50%, rgba(244,114,182,0.06) 100%)",
                filter: "blur(60px)",
                borderRadius: "50%",
              }}
            />
            <div
              className="absolute"
              style={{
                bottom: "0%",
                right: "-5%",
                width: "45%",
                height: "50%",
                background:
                  "radial-gradient(ellipse at center, rgba(64,224,255,0.08) 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
          </div>
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
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
