import type { LucideIcon } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

interface Deliverable {
  icon: LucideIcon;
  title: string;
  body: string;
}

interface PseoDeliverablesProps {
  sectionLabel: string;
  heading: string;
  subtext: string;
  items: Deliverable[];
  cta: { label: string; href: string };
  cityName: string;
}

export default function PseoDeliverables({
  sectionLabel,
  heading,
  subtext,
  items,
  cta,
  cityName,
}: PseoDeliverablesProps) {
  return (
    <section id="deliverables" data-fade>
      <div className="mb-10 sm:mb-14">
        <p className="section-label mb-5">{sectionLabel}</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl mb-3">
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">{subtext}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {items.map((d) => (
          <div
            key={d.title}
            className="rounded-xl bg-white border border-stone-200 p-6 sm:p-7 transition-colors duration-300 hover:bg-stone-50 hover:border-stone-300"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <d.icon className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
              <h3 className="text-base font-semibold text-warm-white">{d.title}</h3>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">{d.body}</p>
          </div>
        ))}
      </div>

      {/* CTA strip */}
      <div className="mt-2 border-t border-stone-200 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="text-[15px] text-stone-500 leading-relaxed max-w-md">
          Want to see how this would work for your {cityName} firm?
        </p>
        <PrimaryButton href={cta.href} size="sm" arrow className="flex-shrink-0">
          {cta.label}
        </PrimaryButton>
      </div>
    </section>
  );
}
