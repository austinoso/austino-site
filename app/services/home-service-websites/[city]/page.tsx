import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageScrollAnimator from "@/components/ui/PageScrollAnimator";
import { BackLink } from "@/components/ui/BackLink";
import { ServiceSection } from "@/components/ui/ServiceSection";

import PseoHero from "@/components/pseo/PseoHero";
import PseoProblem from "@/components/pseo/PseoProblem";
import CompetitorAudit from "@/components/pseo/CompetitorAudit";
import ContractorMockup from "@/components/pseo/ContractorMockup";
import PseoFAQ from "@/components/pseo/PseoFAQ";
import PseoCTA from "@/components/pseo/PseoCTA";
import PseoNearby from "@/components/pseo/PseoNearby";
import PseoSchemaMarkup from "@/components/pseo/PseoSchemaMarkup";
import SpeedProof from "@/components/pseo/SpeedProof";
import TheMath from "@/components/pseo/TheMath";

import { getPseoPageData, getCitySlugsForNiche } from "@/lib/pseo";
import { getCityAudit } from "@/lib/campaign-data";
import {
  hero,
  problems,
  speedProof,
  theMath,
  deliverables,
  faq,
  finalCta,
} from "@/content/pseo/home-services/shared";

const NICHE_SLUG = "home-service-websites";

interface Props {
  params: Promise<{ city: string }>;
}

export default async function HomeServiceCityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const data = getPseoPageData(NICHE_SLUG, citySlug);
  if (!data) notFound();

  const { city, niche, override } = data;

  // ── Fetch real scan data from campaign API ──
  const audit = await getCityAudit(city.slug);

  // ── Resolve templated copy ──
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
              <BackLink href="/#solutions">Home Services</BackLink>
              <PseoHero
                city={city}
                override={override}
                sectionLabel={hero.sectionLabel}
                headline={override.headline ?? hero.headline(city.name)}
                cta={hero.cta}
                serpConfig={{
                  query: `ac repair ${city.name.toLowerCase()}`,
                  domain: `your-${city.slug}-contractor.com`,
                  title: `Your HVAC Co. \u2014 ${city.name} AC Repair & Installation`,
                  snippet: `Licensed contractor serving ${city.name} & ${city.county} County. Same-day service.`,
                  competitors: [
                    {
                      initial: "Y",
                      domain: "yelp.com",
                      title: `Best AC Repair in ${city.name}, CA | Yelp`,
                      snippet: `Top 10 AC repair services in ${city.name}...`,
                    },
                    {
                      initial: "H",
                      domain: "homeadvisor.com",
                      title: `${city.name} HVAC Contractors | HomeAdvisor`,
                      snippet: "Find top-rated local pros...",
                    },
                  ],
                }}
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
              heading={override.problemHeading ?? problems.heading(city.name)}
              subtext={override.problemSubtext ?? problems.subtext}
              cards={resolvedProblems}
            />
          </ServiceSection>

          {/* ── Speed Proof ── */}
          <ServiceSection
            gradient={1}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <SpeedProof
              sectionLabel={speedProof.sectionLabel}
              heading={speedProof.heading}
              subtext={speedProof.subtext}
              metrics={speedProof.metrics}
            />
          </ServiceSection>

          {/* ── What You Get ── */}
          <ServiceSection
            gradient={2}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <ContractorMockup
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
            />
          </ServiceSection>

          {/* ── Competitor Audit (from real scan data) ── */}
          {audit && (
            <ServiceSection
              gradient={3}
              padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
            >
              <CompetitorAudit
                sectionLabel="Market Scan"
                heading={`What ${audit.totalBusinesses} ${city.name} contractors look like online.`}
                subtext={`${audit.services.length} service categories across ${city.name}. Here's how the local competition scored on the basics.`}
                scanSummary={audit.scanSummary}
                sitesSummary={audit.sitesSummary}
                rows={audit.rows}
                source={{ label: "loudbark.dev · Market scan", href: "/contact" }}
              />
            </ServiceSection>
          )}

          {/* ── The Math ── */}
          <ServiceSection
            gradient={audit ? 4 : 3}
            padding="section-px pt-14 pb-14 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32"
          >
            <TheMath
              sectionLabel={theMath.sectionLabel}
              heading={theMath.heading(city.name)}
              subtext={theMath.subtext}
              rows={theMath.rows}
              closer={theMath.closer}
            />
          </ServiceSection>

          {/* ── FAQ ── */}
          <ServiceSection gradient={audit ? 5 : 4}>
            <PseoFAQ
              sectionLabel={faq.sectionLabel}
              heading={faq.heading(city.name)}
              items={resolvedFAQ}
              idPrefix={`home-services-${city.slug}-faq`}
            />
          </ServiceSection>

          {/* ── Final CTA ── */}
          <ServiceSection
            gradient={audit ? 6 : 5}
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
