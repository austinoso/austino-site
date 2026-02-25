"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "I\u2019m not a tech person. Is this going to be complicated for me?",
    a: "Not at all. You won\u2019t touch any code. Once everything\u2019s built, it just runs in the background. If it connects to tools you already use (Calendly, Sheets, email), it\u2019ll feel invisible \u2014 like things just started working better on their own.",
  },
  {
    q: "What if my business processes change?",
    a: "Automations can be adjusted. If you add a new service, change your pricing, or switch tools, I update the workflows to match. Everything\u2019s built to adapt to you, not the other way around.",
  },
  {
    q: "Do you only build custom-coded automations?",
    a: "No. I use whatever gets the job done fastest and works best for your situation \u2014 that might be Zapier, Make, custom scripts, or a combination. The point isn\u2019t the tool. It\u2019s that the problem gets solved and you stop doing it manually.",
  },
  {
    q: "How long does it take to build?",
    a: "Simple automations (like booking \u2192 confirmation \u2192 reminder) can be done in a week. More complex workflows with multiple integrations usually take 2\u20134 weeks. I\u2019ll scope it clearly before we start.",
  },
  {
    q: "What happens if something breaks?",
    a: "I build in error handling and monitoring. If something fails, the system retries automatically and I get notified. If you\u2019re on a growth strategy plan, I\u2019ll fix it before you even know it happened.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section data-fade>
      <p className="section-label mb-4">Common Questions</p>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-10 max-w-2xl">
        Things you might be wondering.
      </h2>

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
              aria-controls={`auto-faq-panel-${i}`}
              id={`auto-faq-btn-${i}`}
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
              id={`auto-faq-panel-${i}`}
              role="region"
              aria-labelledby={`auto-faq-btn-${i}`}
              hidden={openFaq !== i}
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
