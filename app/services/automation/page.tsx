import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import { BackLink } from "@/components/ui/BackLink";
import { ServiceSection } from "@/components/ui/ServiceSection";

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
    <>
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <PageScrollAnimator />
        <Navigation />

        <div className="page-frame">
          {/* ── Hero ── */}
          <div className="relative border-b border-stone-200 overflow-hidden">
            <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
              <BackLink href="/#solutions">Back to Home</BackLink>
              <Hero />
            </div>
          </div>

          {/* ── What I Build ── */}
          <ServiceSection gradient={0}>
            <WhatIBuild />
          </ServiceSection>

          {/* ── Real Examples ── */}
          <ServiceSection gradient={1}>
            <RealExamples />
          </ServiceSection>

          {/* ── The Math ── */}
          <ServiceSection gradient={2}>
            <TheMath />
          </ServiceSection>

          {/* ── The Process ── */}
          <ServiceSection gradient={3}>
            <TheProcess />
          </ServiceSection>

          {/* ── Why Me ── */}
          <ServiceSection gradient={4}>
            <WhyMe />
          </ServiceSection>

          {/* ── FAQ ── */}
          <ServiceSection gradient={5}>
            <FAQ />
          </ServiceSection>

          {/* ── Final CTA ── */}
          <ServiceSection
            gradient={6}
            padding="section-px pt-10 pb-14 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24"
          >
            <FinalCTA />
          </ServiceSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
