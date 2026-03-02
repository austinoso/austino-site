import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Hero from "./Hero";
import WhatIBuild from "./WhatIBuild";
import RealExamples from "./RealExamples";
import WhyMe from "./WhyMe";
import TheMath from "./TheMath";
import TheProcess from "./TheProcess";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

export default function AutomationPage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-warm-bg">
      <PageScrollAnimator />
      <Navigation />

      <div className="page-frame">
        {/* ── Hero ── */}
        <div
          className="relative border-b border-white/[0.06] overflow-hidden"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse 60% 70% at 80% -20%, rgba(212,168,83,0.12), rgba(184,148,74,0.06) 50%, transparent 100%)",
              "radial-gradient(ellipse 65% 60% at 0% 50%, rgba(167,139,250,0.10), transparent 70%)",
            ].join(", "),
          }}
        >
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
            <Link
              href="/#solutions"
              className="inline-flex items-center gap-2 text-sm font-mono text-stone-400 hover:text-warm-white transition-colors duration-300 mb-8 sm:mb-10 tracking-wide"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <Hero />
          </div>
        </div>

        {/* ── What I Build ── */}
        <div className="relative border-b border-white/[0.06]">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,83,0.12) 30%, rgba(167,139,250,0.10) 65%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
            <WhatIBuild />
          </div>
        </div>

        {/* ── Real Examples ── */}
        <div className="relative border-b border-white/[0.06]">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, rgba(212,168,83,0.10) 35%, rgba(167,139,250,0.08) 70%, transparent 95%)",
            }}
            aria-hidden="true"
          />
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
            <RealExamples />
          </div>
        </div>

        {/* ── The Math ── */}
        <div className="relative border-b border-white/[0.06]">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(167,139,250,0.12) 35%, rgba(212,168,83,0.06) 70%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
            <TheMath />
          </div>
        </div>

        {/* ── The Process ── */}
        <div className="relative border-b border-white/[0.06]">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,83,0.08) 35%, rgba(167,139,250,0.08) 70%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
            <TheProcess />
          </div>
        </div>

        {/* ── Why Me ── */}
        <div className="relative border-b border-white/[0.06]">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, rgba(212,168,83,0.10) 35%, rgba(167,139,250,0.08) 70%, transparent 95%)",
            }}
            aria-hidden="true"
          />
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
            <WhyMe />
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="relative border-b border-white/[0.06]">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,83,0.10) 40%, rgba(167,139,250,0.06) 65%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
            <FAQ />
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="relative border-b border-white/[0.06]">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,83,0.08) 35%, rgba(167,139,250,0.10) 65%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
            <FinalCTA />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
