import Link from "next/link";
import { ArrowRight, MapPin, Search, Star, TrendingUp } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import type { CityData } from "@/content/pseo/cities";
import type { CityOverride } from "@/lib/pseo";

interface SerpConfig {
  query: string;
  domain: string;
  title: string;
  snippet: string;
  competitors: { initial: string; domain: string; title: string; snippet: string }[];
}

interface PseoHeroProps {
  city: CityData;
  override: CityOverride;
  sectionLabel: string;
  headline: string;
  subtext?: string;
  cta: { label: string; href: string };
  serpConfig?: SerpConfig;
}

export default function PseoHero({
  city,
  override,
  sectionLabel,
  headline,
  subtext,
  cta,
  serpConfig,
}: PseoHeroProps) {
  const serp: SerpConfig = serpConfig ?? {
    query: `lawyer near me ${city.name.toLowerCase()}`,
    domain: `your-${city.slug}-firm.com`,
    title: `Your Law Firm \u2014 ${city.name}\u2019s Trusted Legal Team`,
    snippet: `Experienced attorneys serving ${city.name} & ${city.county} County. Free consultation.`,
    competitors: [
      {
        initial: "F",
        domain: "findlaw.com",
        title: `${city.name} Lawyers | FindLaw Directory`,
        snippet: `Browse attorneys in ${city.name}, CA...`,
      },
      {
        initial: "A",
        domain: "avvo.com",
        title: `Top Rated ${city.name} Attorneys | Avvo`,
        snippet: "Compare lawyers, read reviews...",
      },
    ],
  };

  return (
    <section className="relative" aria-labelledby="pseo-hero-heading">
      {/* Decorative circles */}
      <div
        className="absolute -right-[16rem] sm:-right-[12rem] md:-right-[16rem] top-6 sm:top-12 md:top-16 w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[32rem] md:h-[32rem] rounded-full pointer-events-none"
        style={{ background: "rgba(180, 83, 9, 0.06)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-[10rem] sm:-right-[6rem] md:-right-[8rem] top-[14rem] sm:top-[18rem] md:top-[22rem] w-[12rem] h-[12rem] sm:w-[14rem] sm:h-[14rem] md:w-[18rem] md:h-[18rem] rounded-full pointer-events-none"
        style={{ background: "rgba(180, 83, 9, 0.04)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-20 sm:pb-24 lg:pb-28">
        {/* ── Text column ── */}
        <div data-hero-copy className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-2 mb-5 sm:mb-6">
            <MapPin className="w-3.5 h-3.5 text-warm-gold" aria-hidden="true" />
            <span className="section-label">{sectionLabel}</span>
            <span className="text-xs font-mono text-stone-400 tracking-wide">
              · {city.name}, CA
            </span>
          </div>

          <h1
            id="pseo-hero-heading"
            className="font-display text-3xl sm:text-4xl md:text-[3.25rem] font-bold text-warm-white leading-[1.14] tracking-tight text-balance"
          >
            {headline}
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl text-pretty">
            {override.heroContext}
          </p>

          {subtext && (
            <p className="mt-3 text-[15px] text-stone-500 leading-relaxed max-w-xl text-pretty">
              {subtext}
            </p>
          )}

          {/* CTA pair */}
          <div className="mt-9 sm:mt-10 flex flex-wrap items-center gap-x-7 gap-y-5">
            <PrimaryButton href={cta.href} size="sm" arrow>
              {cta.label}
            </PrimaryButton>
            <Link
              href="#deliverables"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-stone-500 hover:text-warm-gold transition-colors duration-200"
            >
              What You Get
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg bg-stone-50 border border-stone-200 px-3.5 py-1.5 text-[13px] font-medium text-stone-600">
              <Search className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" aria-hidden="true" />
              Built for Google&nbsp;&&nbsp;your&nbsp;clients
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg bg-stone-50 border border-stone-200 px-3.5 py-1.5 text-[13px] font-medium text-stone-600">
              <MapPin className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" aria-hidden="true" />
              {city.county} County
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
          </div>
        </div>

        {/* ── Visual column — Google SERP mockup ── */}
        <div data-hero-visual className="lg:col-span-5 select-none" aria-hidden="true">
          <div
            className="rounded-xl border border-stone-300 bg-[#F0EAE2] overflow-hidden"
            style={{
              boxShadow: "12px 12px 0px 0px #C4B5A0, 0 8px 32px rgba(0,0,0,0.08)",
            }}
            role="img"
            aria-label={`Google search mockup showing a ${city.name} law firm ranking #1`}
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stone-300 bg-[#E8E2DA]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/85" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/85" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/85" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-1.5 px-4 py-1 rounded-md bg-[#F7F4F0] text-[11px] text-stone-500 font-mono">
                  google.com/search
                </div>
              </div>
            </div>

            {/* Search bar */}
            <div className="px-4 sm:px-5 pt-4 pb-3 border-b border-stone-200/60 bg-white">
              <div className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-white border border-stone-200">
                <Search className="w-3.5 h-3.5 text-stone-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-[13px] text-stone-700 font-normal truncate">
                  {serp.query}
                </span>
              </div>
            </div>

            {/* Search results */}
            <div className="p-4 sm:p-5 space-y-2.5 bg-white">
              {/* Result 1 — highlighted #1 */}
              <div className="relative rounded-lg border border-warm-gold/15 bg-warm-gold/[0.06] p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[11px] text-warm-gold font-mono mb-0.5 truncate">
                      {serp.domain}
                    </p>
                    <p className="text-[13px] font-medium text-[#4663AC] leading-snug">
                      {serp.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-2.5 h-2.5 fill-amber-400 text-amber-400"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="text-[9px] text-stone-500">4.9 (127 reviews)</span>
                    </div>
                    <p className="text-[11px] text-stone-600 mt-1 line-clamp-1">{serp.snippet}</p>
                  </div>
                  <span className="flex-shrink-0 flex items-center gap-1 text-[9px] font-bold text-warm-gold bg-warm-gold/10 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                    <TrendingUp className="w-2.5 h-2.5" aria-hidden="true" />
                    #1
                  </span>
                </div>
              </div>

              {/* Result 2 — competitor (faded) */}
              <div className="py-3 border-b border-stone-200/60 opacity-50">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-stone-200 flex items-center justify-center">
                    <span className="text-[8px] font-medium text-stone-500">
                      {serp.competitors[0]?.initial}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono">
                    {serp.competitors[0]?.domain}
                  </span>
                </div>
                <p className="text-[13px] text-[#4663AC]/60 leading-snug mb-0.5">
                  {serp.competitors[0]?.title}
                </p>
                <p className="text-[10px] text-stone-500">{serp.competitors[0]?.snippet}</p>
              </div>

              {/* Result 3 — competitor (more faded) */}
              <div className="py-3 opacity-30">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-4 h-4 rounded-full bg-stone-200 flex items-center justify-center">
                    <span className="text-[8px] font-medium text-stone-500">
                      {serp.competitors[1]?.initial}
                    </span>
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono">
                    {serp.competitors[1]?.domain}
                  </span>
                </div>
                <p className="text-[13px] text-[#4663AC]/40 leading-snug mb-0.5">
                  {serp.competitors[1]?.title}
                </p>
                <p className="text-[10px] text-stone-400">{serp.competitors[1]?.snippet}</p>
              </div>
            </div>
          </div>

          {/* Stat callout below mockup */}
          <div className="mt-4 flex items-center gap-3">
            <span className="font-display text-2xl font-bold text-warm-gold leading-none">
              {override.localStat.value}
            </span>
            <span className="text-sm text-stone-500">{override.localStat.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
