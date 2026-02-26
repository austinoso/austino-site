"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long until my Manteca business starts ranking on Google?",
    a: "Most businesses start seeing movement within 4\u20138 weeks of launch. Google needs time to crawl, index, and trust your site. Local rankings tend to move faster than national ones because there\u2019s less competition \u2014 especially in markets like Manteca where most competitors aren\u2019t doing any of this.",
  },
  {
    q: "Do I need a brand new website, or can you fix what I have?",
    a: "I build from the ground up \u2014 every time. Even if I started with what you have, I\u2019d end up rebuilding it anyway to get the speed, SEO, and structure right. So the cost would be the same either way. The good news is you\u2019re not paying to patch something old \u2014 you\u2019re getting a site built specifically for your business from day one.",
  },
  {
    q: "What makes this different from hiring a marketing agency?",
    a: "Agencies sell packages. I build tools. You\u2019re not paying for account managers, monthly reports full of vanity metrics, or a 12-month contract. You\u2019re paying for code and strategy from someone who actually builds the thing \u2014 and who only works with one business per niche in your area.",
  },
  {
    q: "I already have a Google Business Profile. Isn\u2019t that enough?",
    a: "A Google Business Profile is table stakes \u2014 it\u2019s the minimum. But Google cross-references your profile with your website. If your site doesn\u2019t have matching NAP info, local schema markup, and relevant content, your profile won\u2019t rank as well as it could. The two work together.",
  },
  {
    q: "Do you only work with businesses in Manteca?",
    a: "No \u2014 I work with small businesses across the Central Valley and beyond. But I know Manteca and the 209 area well, which means I understand the local market, the competition, and what it takes to stand out here specifically.",
  },
  {
    q: "How much does a custom website cost?",
    a: "Most projects start at $1,500. You\u2019re paying for custom code and local SEO strategy \u2014 not a reskinned template. For businesses that want ongoing growth support after launch, I offer partnership models that lower the upfront cost in exchange for continued optimization.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section data-fade>
      <p className="section-label mb-4">Common Questions</p>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-10 max-w-2xl">
        Questions Manteca business owners ask.
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
              aria-controls={`manteca-faq-panel-${i}`}
              id={`manteca-faq-btn-${i}`}
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
              id={`manteca-faq-panel-${i}`}
              role="region"
              aria-labelledby={`manteca-faq-btn-${i}`}
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
