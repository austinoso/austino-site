import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Hero from "./Hero";
import InvisibleProblem from "./InvisibleProblem";
import CaseStudy from "./CaseStudy";
import RankLocally from "./RankLocally";
import WhatYouGet from "./WhatYouGet";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

export default function MantecaPage() {
  return (
    <>
      <main id="main-content" className="relative min-h-screen bg-cyber-dark">
        <PageScrollAnimator />
        <Navigation />

        <div className="page-frame">
          {/* ── Hero ── */}
          <div className="relative border-b border-stone-200 overflow-hidden">
            <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 text-sm font-mono text-cyber-gray-400 hover:text-stone-900 transition-colors duration-300 mb-8 sm:mb-10 tracking-wide"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Web Development</span>
              </Link>
              <Hero />
            </div>
          </div>

          {/* ── The Invisible Problem ── */}
          <div className="border-b border-stone-200">
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
              <InvisibleProblem />
            </div>
          </div>

          {/* ── Case Study — glow accent zone ── */}
          <div className="relative border-b border-stone-200 overflow-hidden">
            <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
              <CaseStudy />
            </div>
          </div>

          {/* ── What It Takes to Rank Locally ── */}
          <div className="border-b border-stone-200">
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
              <RankLocally />
            </div>
          </div>

          {/* ── What You Get ── */}
          <div className="border-b border-stone-200">
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
              <WhatYouGet />
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="border-b border-stone-200">
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
              <FAQ />
            </div>
          </div>

          {/* ── Final CTA ── */}
          <div className="border-b border-stone-200">
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
              <FinalCTA />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
