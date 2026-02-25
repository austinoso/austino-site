import { X, Check } from "lucide-react";
import Image from "next/image";

const beforeItems = [
  "Slow load times that frustrate visitors",
  "Generic template that looks like everyone else",
  "Broken or awkward on mobile devices",
  "No clear path from landing to contact",
  "Invisible to Google search results",
];

const afterItems = [
  "Sub-second loads that keep visitors engaged",
  "Custom design built around your brand",
  "Pixel-perfect on every screen size",
  "Every page guides visitors toward action",
  "SEO structure that ranks and converts",
];

export default function BeforeAfter() {
  return (
    <section data-fade className="mb-16 sm:mb-20">
      <p className="section-label mb-4">The Difference</p>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Your site should be working this hard.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12">
        Most small business websites have the same handful of problems.
        Here&apos;s what that looks like — and what I replace it with.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {/* Before column */}
        <div
          className="relative flex flex-col rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 overflow-hidden"
          style={{
            boxShadow:
              "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          {/* Subtle red glow */}
          <div
            className="absolute -top-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,80,80,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" aria-hidden />
              </div>
              <p className="text-lg font-semibold text-white">
                What visitors see now
              </p>
            </div>

            {/* Mini browser mockup — outdated site */}
            <div className="rounded-lg border border-white/[0.06] bg-[#0A0C0F] mb-6 overflow-hidden">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.04]">
                <span className="h-2 w-2 rounded-full bg-red-400/50" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
                <span className="h-2 w-2 rounded-full bg-white/10" />
              </div>
              <div className="p-3 sm:p-4 h-[200px]">
                {/* Ugly nav — cramped, inconsistent */}
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/[0.04]">
                  <div className="h-3 w-16 rounded-sm bg-white/[0.06]" />
                  <div className="flex gap-4">
                    <div className="h-2 w-8 rounded-sm bg-white/[0.04]" />
                    <div className="h-2 w-12 rounded-sm bg-white/[0.04]" />
                    <div className="h-2 w-6 rounded-sm bg-white/[0.04]" />
                    <div className="h-2 w-10 rounded-sm bg-white/[0.04]" />
                  </div>
                </div>
                {/* Hero area — broken image + wall of text */}
                <div className="flex gap-3 mb-3">
                  <div className="w-1/2 h-20 rounded bg-white/[0.02] border border-dashed border-red-500/20 flex items-center justify-center">
                    <span className="text-[9px] text-red-400/50 font-mono">
                      IMG 404
                    </span>
                  </div>
                  <div className="w-1/2 space-y-1.5">
                    <div className="h-2.5 w-full rounded-sm bg-white/[0.05]" />
                    <div className="h-2 w-full rounded-sm bg-white/[0.03]" />
                    <div className="h-2 w-full rounded-sm bg-white/[0.03]" />
                    <div className="h-2 w-4/5 rounded-sm bg-white/[0.03]" />
                    <div className="h-2 w-full rounded-sm bg-white/[0.03]" />
                    <div className="h-2 w-3/5 rounded-sm bg-white/[0.03]" />
                  </div>
                </div>
                {/* Cluttered content blocks */}
                <div className="space-y-1.5 mb-3">
                  <div className="h-2 w-full rounded-sm bg-white/[0.03]" />
                  <div className="h-2 w-full rounded-sm bg-white/[0.03]" />
                  <div className="h-2 w-2/3 rounded-sm bg-white/[0.03]" />
                </div>
                {/* Cookie banner blocking content */}
                <div className="rounded bg-white/[0.03] border border-white/[0.06] px-3 py-2 flex items-center justify-between">
                  <div className="h-2 w-24 rounded-sm bg-white/[0.05]" />
                  <div className="flex gap-1.5">
                    <div className="h-4 w-10 rounded-sm bg-white/[0.06]" />
                    <div className="h-4 w-10 rounded-sm bg-white/[0.06]" />
                  </div>
                </div>
              </div>
            </div>

            <ul className="space-y-3 mt-auto">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <X
                    className="w-4 h-4 text-red-400/70 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-cyber-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* After column */}
        <div className="relative flex flex-col rounded-lg border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 overflow-hidden">
          {/* Cyan glow */}
          <div
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(64,224,255,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-cyber-accent/10 border border-cyber-accent/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-cyber-accent" aria-hidden />
              </div>
              <p className="text-lg font-semibold text-white">
                What they should see
              </p>
            </div>

            {/* Browser mockup — real client site */}
            <div className="relative mb-6">
              <div className="rounded-lg border border-cyber-accent/10 bg-[#0A0C0F] overflow-hidden">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.04]">
                  <span className="h-2 w-2 rounded-full bg-[#FF5F57]/60" />
                  <span className="h-2 w-2 rounded-full bg-[#FEBC2E]/60" />
                  <span className="h-2 w-2 rounded-full bg-[#28C840]/60" />
                  <div className="flex-1 flex justify-center">
                    <span className="text-[9px] text-cyber-gray-500 font-mono">
                      mymassagecottage.com
                    </span>
                  </div>
                </div>
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/assets/mymassagecottage-demo.PNG"
                    alt="My Massage Cottage — client website built with custom code"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Lighthouse scores badge */}
              <div className="flex items-center gap-2 rounded-lg bg-[#4ADE80]/[0.06] border border-[#4ADE80]/15 px-3 py-2 mt-3">
                <span className="h-2 w-2 rounded-full bg-[#4ADE80]/60 flex-shrink-0" />
                <span className="text-[10px] text-[#4ADE80]/80 font-mono">
                  Performance 100 · Accessibility 100 · SEO 100 · Best Practices
                  100
                </span>
              </div>
            </div>

            <ul className="space-y-3 mt-auto">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check
                    className="w-4 h-4 text-[#4ADE80] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-cyber-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
