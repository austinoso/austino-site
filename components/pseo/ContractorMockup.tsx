// ── ContractorMockup — home-services pSEO "What You Get" bento grid ──
// Same bento rhythm as SiteMockup (legal): browser mockup + featured card
// + standard cards + ongoing-support anchor + CTA strip.
// Wireframe shows a contractor site (services, click-to-call, map, reviews).

import type { LucideIcon } from "lucide-react";
import { ArrowRight, TrendingUp, Wrench } from "lucide-react";
import Link from "next/link";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

interface Deliverable {
  icon: LucideIcon;
  title: string;
  body: string;
}

interface ContractorMockupProps {
  sectionLabel: string;
  heading: string;
  subtext: string;
  items: Deliverable[];
  cta: { label: string; href: string };
  cityName: string;
  citySlug: string;
  growthLink?: { href: string; label: string };
}

const card =
  "rounded-xl bg-white border border-stone-200 p-6 sm:p-7 hover:shadow-sm transition-shadow duration-300";

export default function ContractorMockup({
  sectionLabel,
  heading,
  subtext,
  items,
  cta,
  cityName,
  citySlug,
  growthLink,
}: ContractorMockupProps) {
  // items[0] is the featured card beside the mockup
  // items[1..3] are row 2
  // items[4..] are row 3 left cards
  // growth strategy callout is hard-coded (not from items)
  const [featured, ...rest] = items;
  const row2 = rest.slice(0, 3);
  const row3Left = rest.slice(3);

  return (
    <section id="deliverables" data-fade>
      <div className="mb-10 sm:mb-14">
        <p className="section-label mb-5">{sectionLabel}</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl mb-3">
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">{subtext}</p>
      </div>

      {/* ── Bento grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* ── Browser mockup (standalone visual, 2 cols) ── */}
        <div
          className="md:col-span-2 rounded-xl border border-stone-200 bg-[#F0EAE2] overflow-hidden select-none"
          aria-hidden="true"
        >
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-3.5 py-2.5 border-b border-stone-200/80 bg-[#E8E2DA]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/85" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/85" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/85" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-1.5 px-4 py-1 rounded-md bg-[#F7F4F0] text-[11px] text-stone-500 font-mono">
                your-{citySlug}-contractor.com
              </div>
            </div>
          </div>

          {/* Contractor site wireframe */}
          <div className="bg-white px-5 py-4 sm:px-6 sm:py-5">
            {/* Nav */}
            <div className="flex items-center justify-between mb-5 pb-2.5 border-b border-stone-100">
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-6 rounded bg-[#004D3A]/15 flex items-center justify-center">
                  <Wrench className="w-3 h-3 text-[#004D3A]" />
                </div>
                <span className="text-[11px] font-semibold text-stone-600">Your Business</span>
              </div>
              <div className="hidden sm:flex items-center gap-3.5">
                <span className="text-[10px] text-stone-400">Services</span>
                <span className="text-[10px] text-stone-400">Areas</span>
                <span className="text-[10px] text-stone-400">Reviews</span>
                <span className="text-[10px] px-2.5 py-1 rounded bg-[#004D3A] text-white font-medium">
                  Call Now
                </span>
              </div>
            </div>

            {/* Hero wireframe + phone CTA */}
            <div className="grid grid-cols-5 gap-4 mb-4">
              <div className="col-span-3">
                <div className="h-2.5 w-3/4 rounded bg-stone-800 mb-2" />
                <div className="h-2.5 w-full rounded bg-stone-800 mb-3.5" />
                <div className="h-1.5 w-full rounded bg-stone-200 mb-1" />
                <div className="h-1.5 w-4/5 rounded bg-stone-200 mb-3.5" />
                <div className="flex gap-2">
                  <div className="h-6 w-24 rounded bg-[#004D3A]" />
                  <div className="h-6 w-20 rounded bg-stone-100 flex items-center justify-center">
                    <span className="text-[8px] text-stone-500 font-medium">📞 (209) 555-…</span>
                  </div>
                </div>
              </div>
              {/* Map embed placeholder */}
              <div className="col-span-2 hidden sm:block">
                <div className="w-full h-full min-h-[5rem] rounded-lg bg-[#E8E4DD] border border-stone-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-stone-300/50" />
                    <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-stone-300/50" />
                    <div className="absolute top-0 bottom-0 left-2/3 w-[1px] bg-stone-300/50" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-white shadow-sm" />
                    <div className="w-0.5 h-2 bg-red-500/40 mt-[-1px]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service category pills */}
            <div className="flex items-center gap-1.5 mb-2.5">
              {["AC Repair", "Plumbing", "Roofing", "Electrical"].map((s) => (
                <span
                  key={s}
                  className="text-[8px] text-stone-500 font-medium bg-stone-50 border border-stone-100 rounded px-2 py-0.5"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Reviews bar */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-50/60 border border-amber-200/40">
              <span className="text-[10px] text-amber-500">★★★★★</span>
              <span className="text-[9px] text-stone-500 font-medium">4.8 · 94 reviews</span>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex items-center justify-between px-5 py-2 border-t border-stone-200 bg-stone-50/60">
            <span className="text-[10px] font-mono text-stone-400">Schema: LocalBusiness ✓</span>
            <span className="text-[10px] font-mono text-emerald-600">PageSpeed 97</span>
          </div>
        </div>

        {/* ── Featured card (1 col, beside mockup) ── */}
        <div className={`${card} flex flex-col justify-center`}>
          <div className="flex items-center gap-2.5 mb-2">
            <featured.icon className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
            <h3 className="text-base font-semibold text-warm-white">{featured.title}</h3>
          </div>
          <p className="text-[15px] text-stone-500 leading-relaxed">{featured.body}</p>
        </div>

        {/* ── Row 2: 3 standard deliverable cards ── */}
        {row2.map((d) => {
          const Icon = d.icon;
          return (
            <div key={d.title} className={card}>
              <div className="flex items-center gap-2.5 mb-2">
                <Icon className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                <h3 className="text-base font-semibold text-warm-white">{d.title}</h3>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed">{d.body}</p>
            </div>
          );
        })}

        {/* ── Row 3: remaining card + ongoing support (2 col) ── */}
        {row3Left.map((d) => {
          const Icon = d.icon;
          return (
            <div key={d.title} className={card}>
              <div className="flex items-center gap-2.5 mb-2">
                <Icon className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                <h3 className="text-base font-semibold text-warm-white">{d.title}</h3>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed">{d.body}</p>
            </div>
          );
        })}

        {growthLink && (
          <div className={`${card} md:col-span-2`}>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#004D3A]/10 shrink-0">
                <TrendingUp className="w-5 h-5 text-[#004D3A]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-warm-white mb-1">
                  Ongoing growth strategy
                </h3>
                <p className="text-[14px] text-stone-500 leading-relaxed">
                  Your site isn&apos;t a one-time project. I monitor rankings, publish content,
                  track what converts, and adjust the strategy monthly. You focus on the work.
                </p>
                <Link
                  href={growthLink.href}
                  className="group inline-flex items-center gap-2 text-[14px] font-medium text-[#004D3A] hover:text-[#003328] transition-colors duration-200 mt-2"
                >
                  {growthLink.label}
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── CTA strip (standalone) ── */}
      <div className="mt-2 rounded-xl border border-stone-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <p className="text-[15px] text-stone-500 leading-relaxed">
          Want to see how this would work for your {cityName} business?
        </p>
        <PrimaryButton href={cta.href} size="sm" arrow className="shrink-0">
          {cta.label}
        </PrimaryButton>
      </div>
    </section>
  );
}
