import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import { BackLink } from "@/components/ui/BackLink";
import { ServiceSection } from "@/components/ui/ServiceSection";

import PseoHero from "@/components/pseo/PseoHero";
import PseoProblem from "@/components/pseo/PseoProblem";
import CompetitorAudit from "@/components/pseo/CompetitorAudit";
import SiteMockup from "@/components/pseo/SiteMockup";
import PseoFAQ from "@/components/pseo/PseoFAQ";
import PseoCTA from "@/components/pseo/PseoCTA";
import PseoNearby from "@/components/pseo/PseoNearby";
import PseoSchemaMarkup from "@/components/pseo/PseoSchemaMarkup";
import AuthoritySignals from "@/components/pseo/AuthoritySignals";
import PseoCredibility from "@/components/pseo/PseoCredibility";

import { getPseoPageData, getCitySlugsForNiche } from "@/lib/pseo";
import {
  hero,
  problems,
  authority,
  deliverables,
  faq,
  finalCta,
} from "@/content/pseo/legal/shared";

const NICHE_SLUG = "law-firm-websites";

interface Props {
  params: Promise<{ city: string }>;
}

export default async function LawFirmCityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const data = getPseoPageData(NICHE_SLUG, citySlug);
  if (!data) notFound();

  const { city, niche, override } = data;

  // ── Resolve templated copy (override-first, shared as fallback) ──
  const resolvedProblems = override.problemCards
    ? override.problemCards.map((c, i) => ({
        icon: problems.cards[i]?.icon ?? problems.cards[0].icon,
        ...c,
      }))
    : problems.cards.map((c) => ({
        icon: c.icon,
        stat: c.stat,
        statLabel: c.statLabel,
        heading: c.heading,
        body: c.body(city.name),
        source: c.source,
      }));

  const resolvedAuthority = override.authoritySignals
    ? override.authoritySignals.map((s, i) => ({
        icon: authority.signals[i]?.icon ?? authority.signals[0].icon,
        ...s,
      }))
    : authority.signals.map((s) => ({
        icon: s.icon,
        title: s.title,
        description: s.description(city.name),
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
          <div className="relative border-b border-white/[0.08] overflow-hidden bg-[#004D3A]">
            <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-16 pb-0 sm:pt-20 md:pt-24">
              <BackLink href="/services/law-firms-central-valley" inverted>
                Law Firms — Central Valley
              </BackLink>
              <PseoHero
                city={city}
                override={override}
                sectionLabel={hero.sectionLabel}
                headline={override.headline ?? hero.headline(city.name)}
                cta={hero.cta}
                dark
              />
            </div>
          </div>

          {/* ── Authority Signals ── */}
          <ServiceSection
            gradient={0}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <AuthoritySignals
              sectionLabel={authority.sectionLabel}
              heading={authority.heading}
              subtext={override.authoritySubtext ?? authority.subtext}
              signals={resolvedAuthority}
              crossLink={{ href: "/services/growth-strategy", label: "See the full growth strategy approach" }}
            />
          </ServiceSection>

          {/* ── The Gap (Problem) ── */}
          <ServiceSection
            gradient={1}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
            className="bg-[#F2F7F5]"
          >
            <PseoProblem
              sectionLabel={problems.sectionLabel}
              heading={override.problemHeading ?? problems.heading(city.name)}
              subtext={override.problemSubtext ?? problems.subtext}
              cards={resolvedProblems}
            />
          </ServiceSection>

          {/* ── Competitor Audit Scorecard ── */}
          {override.audit && (
            <ServiceSection
              gradient={2}
              padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
            >
              <CompetitorAudit
                sectionLabel="Market Scan"
                heading={override.audit.heading}
                subtext={override.audit.subtext}
                scanSummary={override.audit.scanSummary}
                sitesSummary={override.audit.sitesSummary}
                rows={override.audit.rows}
                source={override.audit.source}
              />
            </ServiceSection>
          )}

          {/* ── What You Get ── */}
          <ServiceSection
            gradient={3}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
            className="bg-[#F2F7F5]"
          >
            <SiteMockup
              sectionLabel={deliverables.sectionLabel}
              heading={deliverables.heading(city.name)}
              subtext={deliverables.subtext}
              items={deliverables.items}
              cta={hero.cta}
              cityName={city.name}
              citySlug={city.slug}
              growthLink={{
                href: "/services/growth-strategy",
                label: "How the growth strategy works",
              }}
              webDevLink={{ href: "/services/web-development", label: "See the full web development approach" }}
            />
          </ServiceSection>

          {/* ── Credibility ── */}
          <ServiceSection
            gradient={4}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <PseoCredibility />
          </ServiceSection>

          {/* ── FAQ ── */}
          <ServiceSection gradient={5}>
            <PseoFAQ
              sectionLabel={faq.sectionLabel}
              heading={faq.heading(city.name)}
              items={resolvedFAQ}
              idPrefix={`legal-${city.slug}-faq`}
            />
          </ServiceSection>

          {/* ── Final CTA ── */}
          <ServiceSection
            gradient={6}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <PseoCTA
              sectionLabel={finalCta.sectionLabel}
              headline={finalCta.headline(city.name)}
              body={finalCta.body(city.name)}
              cta={finalCta.cta}
              crossLinks={[
                {
                  label: "Law Firms — Central Valley overview",
                  href: "/services/law-firms-central-valley",
                },
                {
                  label: "Web Development services",
                  href: "/services/web-development",
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
