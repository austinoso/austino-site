import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Hero from "./Hero";
import TheEvidence from "./TheEvidence";
import DesignAndTools from "./DesignAndTools";
import PerformanceAndSEO from "./PerformanceAndSEO";
import AfterLaunch from "./AfterLaunch";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

export default function WebDevelopmentPage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-warm-bg">
      <PageScrollAnimator />
      <Navigation />

      <div className="page-frame">
        {/* -- Hero -- */}
        <div
          className="relative border-b border-stone-200 overflow-hidden"
          style={{
            backgroundImage: [
              "radial-gradient(ellipse 60% 70% at 80% -20%, rgba(212,168,83,0.011), rgba(184,148,74,0.005) 50%, transparent 100%)",
              "radial-gradient(ellipse 65% 60% at 0% 50%, rgba(167,139,250,0.009), transparent 70%)",
            ].join(", "),
          }}
        >
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
            <Link
              href="/#solutions"
              className="inline-flex items-center gap-2 text-sm font-mono text-stone-500 hover:text-warm-white transition-colors duration-300 mb-8 sm:mb-10 tracking-wide"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to Home</span>
            </Link>
            <Hero />
          </div>
        </div>

        {/* -- The Evidence -- */}
        <div className="relative border-b border-stone-200">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,83,0.04) 25%, rgba(167,139,250,0.06) 55%, rgba(244,114,182,0.03) 80%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="pt-14 pb-6 sm:pt-28 sm:pb-10 md:pt-32 md:pb-14">
            <TheEvidence />
          </div>
        </div>

        {/* -- Design & Tools -- */}
        <div className="relative border-b border-stone-200 overflow-hidden">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 5%, rgba(167,139,250,0.05) 30%, rgba(212,168,83,0.04) 55%, rgba(244,114,182,0.03) 80%, transparent 95%)",
            }}
            aria-hidden="true"
          />
          <div className="pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
            <DesignAndTools />
          </div>
        </div>

        {/* -- Performance & SEO -- */}
        <div className="relative border-b border-stone-200 overflow-hidden bg-warm-surface/30">
          <div>
            <PerformanceAndSEO />
          </div>
        </div>

        {/* -- After Launch -- */}
        <div className="relative border-b border-stone-200">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(167,139,250,0.05) 30%, rgba(244,114,182,0.03) 55%, rgba(212,168,83,0.04) 75%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="pt-14 sm:pt-28 md:pt-32">
            <AfterLaunch />
          </div>
        </div>

        {/* -- FAQ -- */}
        <div className="relative border-b border-stone-200">
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32">
            <FAQ />
          </div>
        </div>

        {/* -- Final CTA -- */}
        <div className="relative border-b border-stone-200">
          <div
            className="absolute top-0 inset-x-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,168,83,0.04) 30%, rgba(167,139,250,0.05) 55%, rgba(244,114,182,0.03) 75%, transparent)",
            }}
            aria-hidden="true"
          />
          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-10 pb-14 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24">
            <FinalCTA />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
