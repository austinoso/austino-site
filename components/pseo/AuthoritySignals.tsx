import type { LucideIcon } from "lucide-react";

interface Signal {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AuthoritySignalsProps {
  sectionLabel: string;
  heading: string;
  subtext: string;
  signals: Signal[];
}

export default function AuthoritySignals({
  sectionLabel,
  heading,
  subtext,
  signals,
}: AuthoritySignalsProps) {
  return (
    <section data-fade>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left — heading + description */}
        <div className="lg:col-span-6">
          <p className="section-label mb-5">{sectionLabel}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance">
            {heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">{subtext}</p>
        </div>

        {/* Right — signal list items with hover */}
        <div className="lg:col-span-6 space-y-1">
          {signals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.title}
                className="flex items-start gap-3 py-3.5 px-3 rounded-lg border border-transparent hover:border-stone-300 hover:bg-stone-50 transition-colors duration-200"
              >
                <div className="w-8 h-8 rounded-md bg-[#004D3A]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-sm font-medium text-warm-white block leading-snug">
                    {signal.title}
                  </span>
                  <span className="text-[13px] text-stone-500 leading-relaxed block mt-0.5">
                    {signal.description}
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
