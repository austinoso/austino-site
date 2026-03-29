// ── SpeedProof — home services pSEO section ──
// Shows performance metrics that differentiate from slow contractor sites.

import { Gauge } from "lucide-react";

interface Metric {
  label: string;
  value: string;
  description: string;
}

interface SpeedProofProps {
  sectionLabel: string;
  heading: string;
  subtext: string;
  metrics: Metric[];
}

export default function SpeedProof({ sectionLabel, heading, subtext, metrics }: SpeedProofProps) {
  return (
    <section data-fade>
      <div className="mb-10 sm:mb-14">
        <p className="section-label mb-5">{sectionLabel}</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl mb-3">
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">{subtext}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl bg-white border border-stone-200 p-6 hover:shadow-sm transition-shadow duration-300 flex flex-col"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <Gauge className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                {m.label}
              </span>
            </div>
            <span className="font-display text-3xl sm:text-4xl font-bold text-[#004D3A] leading-none mb-3">
              {m.value}
            </span>
            <p className="text-sm text-stone-500 leading-relaxed mt-auto">{m.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
