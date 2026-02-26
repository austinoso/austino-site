import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Hero from "./Hero";
import RealExamples from "./RealExamples";
import AlwaysOn from "./AlwaysOn";
import Integration from "./Integration";
import TheMath from "./TheMath";
import TheProcess from "./TheProcess";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

export default function AutomationPage() {
  return (
    <main
      id="main-content"
      className="relative min-h-screen bg-cyber-dark"
    >
      <PageScrollAnimator />
      <Navigation />

      <div className="page-frame">
        {/* ── Hero ── */}
        <div
          className="relative border-b border-white/[0.06] overflow-hidden"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse 80% 70% at 85% 10%, rgba(64,224,255,0.14), rgba(167,139,250,0.1) 40%, rgba(244,114,182,0.06) 70%, transparent 100%)",
              "radial-gradient(ellipse 60% 55% at 10% 90%, rgba(64,224,255,0.07), rgba(167,139,250,0.04) 50%, transparent 80%)",
            ].join(", "),
          }}
        >
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

        {/* ── Real Examples ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <RealExamples />
          </div>
        </div>

        {/* ── Always On ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <AlwaysOn />
          </div>
        </div>

        {/* ── Integration ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <Integration />
          </div>
        </div>

        {/* ── The Math ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <TheMath />
          </div>
        </div>

        {/* ── The Process ── */}
        <div className="border-b border-white/[0.06]">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <TheProcess />
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
