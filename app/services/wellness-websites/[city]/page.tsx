import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import { BackLink } from "@/components/ui/BackLink";
import { ServiceSection } from "@/components/ui/ServiceSection";

import PseoHero from "@/components/pseo/PseoHero";
import PseoProblem from "@/components/pseo/PseoProblem";
import PseoDeliverables from "@/components/pseo/PseoDeliverables";
import PseoFAQ from "@/components/pseo/PseoFAQ";
import PseoCTA from "@/components/pseo/PseoCTA";
import PseoNearby from "@/components/pseo/PseoNearby";
import PseoSchemaMarkup from "@/components/pseo/PseoSchemaMarkup";
import CommunityProof from "@/components/pseo/CommunityProof";
import RetentionEngine from "@/components/pseo/RetentionEngine";

import { getPseoPageData, getCitySlugsForNiche } from "@/lib/pseo";
import {
  hero,
  problems,
  communityProof,
  retentionEngine,
  deliverables,
  faq,
  finalCta,
} from "@/content/pseo/wellness/shared";

const NICHE_SLUG = "wellness-websites";

interface Props {
  params: Promise<{ city: string }>;
}

export default async function WellnessCityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const data = getPseoPageData(NICHE_SLUG, citySlug);
  if (!data) notFound();

  const { city, niche, override } = data;

  // ── Resolve templated copy ──
  const resolvedProblems = problems.cards.map((c) => ({
    icon: c.icon,
    stat: c.stat,
    statLabel: c.statLabel,
    heading: c.heading,
    body: c.body(city.name),
    source: c.source,
  }));

  const resolvedCommunity = communityProof.points.map((p) => ({
    icon: p.icon,
    title: p.title,
    description: p.description(city.name),
  }));

  // Merge shared FAQ + city overrides
  const resolvedFAQ = [
    ...faq.items.map((item) => ({
      q: item.q(city.name, city.county),
      a: item.a(city.name, city.county),
    })),
    ...override.additionalFAQ,
  ];

  const activeSlugs = getCitySlugsForNiche(NICHE_SLUG);

  return (
    <>
      <PseoSchemaMarkup city={city} niche={niche} faqItems={resolvedFAQ} />

      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <PageScrollAnimator />
        <Navigation />

        <div className="page-frame">
          {/* ── Hero ── */}
          <div className="relative border-b border-stone-200 overflow-hidden">
            <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
              <BackLink href="/#solutions">Wellness</BackLink>
              <PseoHero
                city={city}
                override={override}
                sectionLabel={hero.sectionLabel}
                headline={hero.headline(city.name)}
                subtext={hero.subtext(city.name)}
                cta={hero.cta}
              />
            </div>
          </div>

          {/* ── The Problem ── */}
          <ServiceSection
            gradient={0}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <PseoProblem
              sectionLabel={problems.sectionLabel}
              heading={problems.heading(city.name)}
              subtext={problems.subtext}
              cards={resolvedProblems}
            />
          </ServiceSection>

          {/* ── Community Proof ── */}
          <ServiceSection
            gradient={1}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <CommunityProof
              sectionLabel={communityProof.sectionLabel}
              heading={communityProof.heading(city.name)}
              subtext={communityProof.subtext}
              points={resolvedCommunity}
            />
          </ServiceSection>

          {/* ── Retention Engine ── */}
          <ServiceSection
            gradient={2}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <RetentionEngine
              sectionLabel={retentionEngine.sectionLabel}
              heading={retentionEngine.heading}
              subtext={retentionEngine.subtext}
              features={retentionEngine.features}
            />
          </ServiceSection>

          {/* ── What You Get ── */}
          <ServiceSection
            gradient={3}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <PseoDeliverables
              sectionLabel={deliverables.sectionLabel}
              heading={deliverables.heading(city.name)}
              subtext={deliverables.subtext}
              items={deliverables.items}
              cta={hero.cta}
              cityName={city.name}
            />
          </ServiceSection>

          {/* ── FAQ ── */}
          <ServiceSection gradient={4}>
            <PseoFAQ
              sectionLabel={faq.sectionLabel}
              heading={faq.heading(city.name)}
              items={resolvedFAQ}
              idPrefix={`wellness-${city.slug}-faq`}
            />
          </ServiceSection>

          {/* ── Final CTA ── */}
          <ServiceSection
            gradient={5}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <PseoCTA
              sectionLabel={finalCta.sectionLabel}
              headline={finalCta.headline(city.name)}
              body={finalCta.body(city.name)}
              cta={finalCta.cta}
              crossLinks={[
                {
                  label: "Web Development services",
                  href: "/services/web-development",
                },
                {
                  label: "Growth Strategy",
                  href: "/services/growth-strategy",
                },
              ]}
            />
          </ServiceSection>

          {/* ── Nearby Cities ── */}
          <div className="px-6 sm:px-10 md:px-14 lg:px-20">
            <PseoNearby
              cityName={city.name}
              nearbyCities={city.nearbyCities}
              basePath={`/services/${niche.nicheSlug}`}
              activeSlugs={activeSlugs}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
