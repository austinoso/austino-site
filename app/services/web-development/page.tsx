import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import { BackLink } from "@/components/ui/BackLink";
import { ServiceSection } from "@/components/ui/ServiceSection";

import Hero from "./Hero";
import TheEvidence from "./TheEvidence";
import DesignAndTools from "./DesignAndTools";
import PerformanceAndSEO from "./PerformanceAndSEO";
import AfterLaunch from "./AfterLaunch";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

export default function WebDevelopmentPage() {
  return (
    <>
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <PageScrollAnimator />
        <Navigation />

        <div className="page-frame">
          {/* -- Hero -- */}
          <div className="relative border-b border-stone-200 overflow-hidden">
            <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
              <BackLink href="/#solutions">Back to Home</BackLink>
              <Hero />
            </div>
          </div>

          {/* -- The Evidence -- */}
          <ServiceSection gradient={0} padding="pt-14 pb-6 sm:pt-28 sm:pb-10 md:pt-32 md:pb-14">
            <TheEvidence />
          </ServiceSection>

          {/* -- Design & Tools -- */}
          <ServiceSection
            gradient={1}
            className="overflow-hidden"
            padding="pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <DesignAndTools />
          </ServiceSection>

          {/* -- Performance & SEO -- */}
          <ServiceSection className="overflow-hidden bg-warm-surface/30" padding="">
            <PerformanceAndSEO />
          </ServiceSection>

          {/* -- After Launch -- */}
          <ServiceSection gradient={2} padding="pt-14 sm:pt-28 md:pt-32">
            <AfterLaunch />
          </ServiceSection>

          {/* -- FAQ -- */}
          <ServiceSection>
            <FAQ />
          </ServiceSection>

          {/* -- Final CTA -- */}
          <ServiceSection
            gradient={3}
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
