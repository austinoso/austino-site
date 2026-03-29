// ── CommunityProof — wellness pSEO section ──
// Two-column editorial layout showing why community-driven sites
// outperform templates for wellness businesses.

import type { LucideIcon } from "lucide-react";

interface Point {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface CommunityProofProps {
  sectionLabel: string;
  heading: string;
  subtext: string;
  points: Point[];
}

export default function CommunityProof({
  sectionLabel,
  heading,
  subtext,
  points,
}: CommunityProofProps) {
  return (
    <section data-fade>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left — heading */}
        <div className="lg:col-span-5">
          <p className="section-label mb-5">{sectionLabel}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-3">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">{subtext}</p>
        </div>

        {/* Right — points list */}
        <div className="lg:col-span-7 space-y-1">
          {points.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex items-start gap-3 py-3.5 px-3 rounded-lg border border-transparent hover:border-stone-300 hover:bg-stone-50 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-md bg-[#004D3A]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-sm font-medium text-warm-white block leading-snug">
                    {p.title}
                  </span>
                  <span className="text-[13px] text-stone-500 leading-relaxed block mt-0.5">
                    {p.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
