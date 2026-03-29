// ── RetentionEngine — wellness pSEO section ──
// Shows how a well-built site keeps clients coming back,
// not just acquiring new ones.

import { Repeat } from "lucide-react";

interface Feature {
  label: string;
  description: string;
}

interface RetentionEngineProps {
  sectionLabel: string;
  heading: string;
  subtext: string;
  features: Feature[];
}

export default function RetentionEngine({
  sectionLabel,
  heading,
  subtext,
  features,
}: RetentionEngineProps) {
  return (
    <section data-fade>
      <div className="mb-10 sm:mb-14">
        <p className="section-label mb-5">{sectionLabel}</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl mb-3">
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">{subtext}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {features.map((f, i) => (
          <div
            key={f.label}
            className="rounded-xl bg-white border border-stone-200 p-6 sm:p-7 hover:shadow-sm transition-shadow duration-300 flex flex-col"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-md bg-[#004D3A]/10 flex items-center justify-center shrink-0">
                <Repeat className="w-3.5 h-3.5 text-[#004D3A]" aria-hidden="true" />
              </div>
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-base font-semibold text-warm-white mb-2">{f.label}</h3>
            <p className="text-sm text-stone-500 leading-relaxed">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
