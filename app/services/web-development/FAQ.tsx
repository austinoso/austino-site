"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "I already have a website. Why would I pay for a new one?",
    a: "If your current site loads in under a second, ranks on Google, and brings in new customers every week \u2014 you probably don\u2019t need one. But if it\u2019s mostly a digital business card that sits there, a rebuild isn\u2019t a cost \u2014 it\u2019s an upgrade to a tool that actively works for you.",
  },
  {
    q: "How long does it take to build a site?",
    a: "Most projects take 2\u20134 weeks from kickoff to launch. That includes discovery, design, development, content, and revisions. I\u2019ll give you a clear timeline before we kick things off.",
  },
  {
    q: "What if I need something changed on the site?",
    a: "For most updates \u2014 new photos, changed hours, updated copy \u2014 just send me a list and I\u2019ll handle it, usually the same day. That way everything stays looking sharp and performing well. If your business needs to update things regularly on its own, I\u2019ll set up whatever makes sense for your workflow \u2014 whether that\u2019s a simple content editor, a scheduling widget, a product dashboard, or something else entirely. Every project is different, so the solution fits around how you actually run your business.",
  },
  {
    q: "What does \u2018technical SEO\u2019 actually mean?",
    a: "It\u2019s the behind-the-scenes code that tells Google what your business does, where you\u2019re located, and what you offer. Think of it like labeling every room in your store so Google knows exactly where to send people. Most template sites skip this entirely.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section data-fade className="mb-24 sm:mb-32">
      <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
        Common Questions
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-10 max-w-2xl">
        Things you might be wondering.
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-colors duration-200 hover:border-white/[0.10]"
            style={{
              boxShadow:
                "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
            }}
          >
            <button
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              className="flex items-center justify-between w-full px-6 py-5 text-left"
              aria-expanded={openFaq === i}
              aria-controls={`webdev-faq-panel-${i}`}
              id={`webdev-faq-btn-${i}`}
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
              id={`webdev-faq-panel-${i}`}
              role="region"
              aria-labelledby={`webdev-faq-btn-${i}`}
              aria-hidden={openFaq !== i}
              className={`overflow-hidden transition-all duration-300 ${
                openFaq === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-5 text-sm text-cyber-gray-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
