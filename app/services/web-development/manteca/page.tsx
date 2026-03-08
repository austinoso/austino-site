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
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <PageScrollAnimator />
        <Navigation />

        <div className="page-frame">
          {/* ── Hero ── */}
          <div className="relative border-b border-stone-200 overflow-hidden">
            <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 text-sm font-mono text-stone-500 hover:text-warm-white transition-colors duration-300 mb-8 sm:mb-10 tracking-wide"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Web Development</span>
              </Link>
              <Hero />
            </div>
          </div>

          {/* ── The Invisible Problem ── */}
          <div className="relative border-b border-stone-200">
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,168,83,0.04) 30%, rgba(167,139,250,0.03) 65%, transparent)",
              }}
              aria-hidden="true"
            />
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
              <InvisibleProblem />
            </div>
          </div>

          {/* ── Case Study ── */}
          <div className="relative border-b border-stone-200 overflow-hidden">
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 5%, rgba(167,139,250,0.05) 30%, rgba(212,168,83,0.04) 55%, rgba(244,114,182,0.03) 80%, transparent 95%)",
              }}
              aria-hidden="true"
            />
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
              <CaseStudy />
            </div>
          </div>

          {/* ── What It Takes to Rank Locally ── */}
          <div className="relative border-b border-stone-200">
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,168,83,0.04) 25%, rgba(167,139,250,0.06) 55%, rgba(244,114,182,0.03) 80%, transparent)",
              }}
              aria-hidden="true"
            />
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
              <RankLocally />
            </div>
          </div>

          {/* ── What You Get ── */}
          <div className="relative border-b border-stone-200">
            <div
              className="absolute top-0 inset-x-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent 5%, rgba(167,139,250,0.05) 30%, rgba(212,168,83,0.04) 55%, transparent 95%)",
              }}
              aria-hidden="true"
            />
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
              <WhatYouGet />
            </div>
          </div>

          {/* ── FAQ ── */}
          <div className="relative border-b border-stone-200">
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
                  "linear-gradient(90deg, transparent, rgba(212,168,83,0.04) 30%, rgba(244,114,182,0.03) 65%, transparent)",
              }}
              aria-hidden="true"
            />
            <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
              <FinalCTA />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
