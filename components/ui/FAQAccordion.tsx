"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  /** Unique prefix for aria IDs — e.g. "auto-faq", "webdev-faq" */
  idPrefix: string;
}

export default function FAQAccordion({ faqs, idPrefix }: FAQAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-lg border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-colors duration-200 hover:border-white/[0.10]"
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="flex items-center justify-between w-full px-6 py-5 text-left"
            aria-expanded={openFaq === i}
            aria-controls={`${idPrefix}-panel-${i}`}
            id={`${idPrefix}-btn-${i}`}
          >
            <span className="text-sm font-medium text-white pr-4">
              {faq.q}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-cyber-gray-500 flex-shrink-0 transition-transform duration-200 ${
                openFaq === i ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
          <div
            id={`${idPrefix}-panel-${i}`}
            role="region"
            aria-labelledby={`${idPrefix}-btn-${i}`}
            hidden={openFaq !== i}
            className={`overflow-hidden transition-all duration-300 ${
              openFaq === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-6 pb-5 text-sm text-cyber-gray-400 leading-relaxed text-pretty">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
