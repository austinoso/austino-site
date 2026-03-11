// ── TheMath — home services pSEO section ──
// ROI breakdown showing what missed calls actually cost contractors.

import { ArrowRight } from "lucide-react";

interface Row {
  label: string;
  value: string;
  highlight?: boolean;
}

interface TheMathProps {
  sectionLabel: string;
  heading: string;
  subtext: string;
  rows: Row[];
  closer: string;
}

export default function TheMath({ sectionLabel, heading, subtext, rows, closer }: TheMathProps) {
  return (
    <section data-fade>
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left — heading + closer */}
        <div className="lg:col-span-5">
          <p className="section-label mb-5">{sectionLabel}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-3">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">{subtext}</p>
          <div className="mt-8 pt-6 border-t border-stone-200">
            <p className="text-sm text-stone-500 leading-relaxed text-pretty">{closer}</p>
          </div>
        </div>

        {/* Right — numbers table */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-stone-200 bg-white overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-6 py-5 ${
                  i < rows.length - 1 ? "border-b border-stone-100" : ""
                } ${row.highlight ? "bg-amber-50/60" : ""}`}
              >
                <span
                  className={`text-sm leading-snug ${
                    row.highlight ? "font-semibold text-warm-white" : "text-stone-600"
                  }`}
                >
                  {row.highlight && (
                    <ArrowRight
                      className="w-3.5 h-3.5 text-warm-gold inline mr-2 -mt-0.5"
                      aria-hidden="true"
                    />
                  )}
                  {row.label}
                </span>
                <span
                  className={`font-display text-lg font-bold leading-none ${
                    row.highlight ? "text-warm-gold" : "text-warm-white"
                  }`}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
