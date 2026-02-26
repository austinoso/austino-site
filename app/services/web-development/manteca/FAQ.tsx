import FAQAccordion from "@/components/ui/FAQAccordion";

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
  return (
    <section data-fade>
      <p className="section-label mb-4">Common Questions</p>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-10 max-w-2xl">
        Questions Manteca business owners ask.
      </h2>
      <FAQAccordion faqs={faqs} idPrefix="manteca-faq" />
    </section>
  );
}
