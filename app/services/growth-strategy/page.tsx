import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Hero from "./Hero";
import TheReality from "./TheReality";
import WhatsIncluded from "./TheStrategy";
import LongTerm from "./LongTerm";
import WhyMe from "./WhyMe";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

export default function GrowthStrategyPage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-warm-bg">
      <PageScrollAnimator />
      <Navigation />

      <div className="page-frame">
        {/* ── Hero ── */}
        <div
          className="relative border-b border-stone-200 overflow-hidden"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse 60% 70% at 10% 15%, rgba(212,168,83,0.009), rgba(184,148,74,0.005) 50%, transparent 100%)",
              "radial-gradient(ellipse 55% 60% at 95% 90%, rgba(167,139,250,0.007), transparent 70%)",
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

        {/* ── Sound Familiar + The Opportunity ── */}
        <div className="relative border-b border-stone-200">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,83,0.011) 30%, rgba(167,139,250,0.009) 65%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="pt-14 sm:pt-28 md:pt-32">
            <TheReality />
          </div>
        </div>

        {/* ── The Strategy ── */}
        <div className="relative border-b border-stone-200">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, rgba(212,168,83,0.009) 35%, rgba(167,139,250,0.007) 70%, transparent 95%)",
            }}
            aria-hidden="true"
          />
          <div className="pt-14 sm:pt-28 md:pt-32">
            <WhatsIncluded />
          </div>
        </div>

        {/* ── Long-Term ── */}
        <div className="relative border-b border-stone-200">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,83,0.007) 40%, rgba(167,139,250,0.009) 65%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="pt-14 sm:pt-28 md:pt-32">
            <LongTerm />
          </div>
        </div>

        {/* ── Who's Behind This ── */}
        <div className="relative border-b border-stone-200">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,83,0.009) 35%, rgba(167,139,250,0.007) 60%, transparent)",
            }}
            aria-hidden="true"
          />
          <WhyMe />
        </div>

        {/* ── FAQ ── */}
        <div className="relative border-b border-stone-200">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(167,139,250,0.007) 35%, rgba(212,168,83,0.005) 70%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
            <FAQ />
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div className="relative border-b border-stone-200">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,83,0.009) 40%, rgba(167,139,250,0.005) 65%, transparent)",
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
