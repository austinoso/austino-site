"use client";

import FAQAccordion from "@/components/ui/FAQAccordion";

interface PseoFAQProps {
  sectionLabel: string;
  heading: string;
  /** Merged shared + city-specific FAQ items (already resolved) */
  items: { q: string; a: string }[];
  idPrefix: string;
}

export default function PseoFAQ({ sectionLabel, heading, items, idPrefix }: PseoFAQProps) {
  return (
    <section data-fade>
      <p className="section-label mb-4">{sectionLabel}</p>
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-10 max-w-2xl">
        {heading}
      </h2>
      <FAQAccordion faqs={items} idPrefix={idPrefix} />
    </section>
  );
}
