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
  dark?: boolean;
}

export default function PseoHero({
  city,
  override,
  sectionLabel,
  headline,
  subtext,
  cta,
  serpConfig,
  dark = false,
}: PseoHeroProps) {
  const t = {
    label: dark
      ? "text-white/60 text-xs font-semibold uppercase tracking-[0.2em]"
      : "section-label",
    labelIcon: dark ? "text-white/40" : "text-[#004D3A]",
    cityMono: dark ? "text-white/40" : "text-stone-400",
    heading: dark ? "text-white" : "text-warm-white",
    body: dark ? "text-stone-200" : "text-stone-600",
    muted: dark ? "text-white/60" : "text-stone-500",
    ctaLink: dark ? "text-white/60 hover:text-white" : "text-stone-500 hover:text-[#004D3A]",
    pill: dark
      ? "bg-white/[0.08] border-white/[0.12] text-white/70"
      : "bg-stone-50 border-stone-200 text-stone-600",
    pillIcon: dark ? "text-white/40" : "text-[#004D3A]",
    statVal: dark ? "text-white" : "text-[#004D3A]",
    statLabel: dark ? "text-white/50" : "text-stone-500",
    shadow: dark
      ? "0 28px 60px rgba(0,0,0,0.35), 0 8px 24px rgba(0,0,0,0.2)"
      : "12px 12px 0px 0px #A8CCBF, 0 8px 32px rgba(0,0,0,0.08)",
    mockupBorder: dark ? "border-white/[0.12]" : "border-stone-300",
  };

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
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-14 sm:pb-20 lg:pb-24">
        {/* ── Text column ── */}
        <div data-hero-copy className="lg:col-span-7 flex flex-col">
          <div className="flex items-center gap-2 mb-5 sm:mb-6">
            <MapPin className={`w-3.5 h-3.5 ${t.labelIcon}`} aria-hidden="true" />
            <span className={t.label}>{sectionLabel}</span>
            <span className={`text-xs font-mono tracking-wide ${t.cityMono}`}>
              · {city.name}, CA
            </span>
          </div>

          <h1
            id="pseo-hero-heading"
            className={`font-display text-3xl sm:text-4xl md:text-[3.25rem] font-bold leading-[1.14] tracking-tight text-balance ${t.heading}`}
          >
            {headline}
          </h1>

          <p
            className={`mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-xl text-pretty ${t.body}`}
          >
            {override.heroContext}
          </p>

          {subtext && (
            <p className={`mt-3 text-[15px] leading-relaxed max-w-xl text-pretty ${t.muted}`}>
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
              className={`group inline-flex items-center gap-2 text-[15px] font-medium transition-colors duration-200 ${t.ctaLink}`}
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
            <span
              className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-1.5 text-[13px] font-medium ${t.pill}`}
            >
              <Search className={`w-3.5 h-3.5 flex-shrink-0 ${t.pillIcon}`} aria-hidden="true" />
              Built for Google&nbsp;&&nbsp;your&nbsp;clients
            </span>
            <span
              className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-1.5 text-[13px] font-medium ${t.pill}`}
            >
              <MapPin className={`w-3.5 h-3.5 flex-shrink-0 ${t.pillIcon}`} aria-hidden="true" />
              {city.county} County
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </span>
          </div>
        </div>

        {/* ── Visual column — Google SERP mockup ── */}
        <div data-hero-visual className="lg:col-span-5 select-none relative" aria-hidden="true">
          {/* Ambient glow — dark mode only */}
          {dark && (
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-32 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(0,180,120,0.18) 0%, transparent 70%)",
                filter: "blur(24px)",
              }}
            />
          )}
          <div
            className={`rounded-xl border bg-[#F0EAE2] overflow-hidden ${t.mockupBorder}`}
            style={{
              boxShadow: t.shadow,
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
              <div className="relative rounded-lg border border-[#004D3A]/15 bg-[#004D3A]/[0.06] p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[11px] text-[#004D3A] font-mono mb-0.5 truncate">
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
                  <span className="flex-shrink-0 flex items-center gap-1 text-[9px] font-bold text-[#004D3A] bg-[#004D3A]/10 px-1.5 py-0.5 rounded-full whitespace-nowrap">
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
          <div
            className={`mt-5 flex items-baseline gap-3 ${dark ? "pl-4 border-l-2 border-white/20" : ""}`}
          >
            <span className={`font-display text-3xl font-bold leading-none ${t.statVal}`}>
              {override.localStat.value}
            </span>
            <span className={`text-sm leading-snug max-w-[180px] ${t.statLabel}`}>
              {override.localStat.label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
