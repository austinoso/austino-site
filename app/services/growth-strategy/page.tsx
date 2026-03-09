import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import { BackLink } from "@/components/ui/BackLink";
import { ServiceSection } from "@/components/ui/ServiceSection";

import Hero from "./Hero";
import SoundFamiliar from "./SoundFamiliar";
import TheReality from "./TheReality";
import WhatsIncluded from "./TheStrategy";
import LongTerm from "./LongTerm";
import WhyMe from "./WhyMe";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

export default function GrowthStrategyPage() {
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

          {/* ── Sound Familiar ── */}
          <ServiceSection gradient={0} padding="pt-14 sm:pt-28 md:pt-32">
            <SoundFamiliar />
          </ServiceSection>

          {/* ── The Reality ── */}
          <ServiceSection gradient={2} padding="pt-14 sm:pt-28 md:pt-32">
            <TheReality />
          </ServiceSection>

          {/* ── The Strategy ── */}
          <ServiceSection gradient={1} padding="pt-14 sm:pt-28 md:pt-32">
            <WhatsIncluded />
          </ServiceSection>

          {/* ── Long-Term ── */}
          <ServiceSection gradient={2} padding="pt-14 sm:pt-28 md:pt-32">
            <LongTerm />
          </ServiceSection>

          {/* ── Who's Behind This ── */}
          <ServiceSection gradient={3} padding="">
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
