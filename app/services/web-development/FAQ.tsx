import FAQAccordion from "@/components/ui/FAQAccordion";

const faqs = [
  {
    q: "My current website works fine. Is this really worth the investment?",
    a: '"Works fine" and "actively brings in customers" are two very different things. If your site isn\'t ranking on Google, converting visitors into leads, or building trust the moment someone lands on it — it\'s costing you business you never see. The sections above aren\'t theoretical. Those are real reasons people leave and never come back.',
  },
  {
    q: "How long does it take to build a site?",
    a: "Most projects take 2\u20134 weeks from kickoff to launch. That includes discovery, design, development, content, and revisions. I\u2019ll give you a clear timeline before we kick things off.",
  },
  {
    q: "What if I need something changed on the site?",
    a: "For most updates \u2014 new photos, changed hours, updated copy \u2014 just send me a list and I\u2019ll handle it, usually the same day. If your business needs to update things regularly on its own, I\u2019ll set up whatever makes sense for your workflow \u2014 whether that\u2019s a simple content editor, a scheduling widget, a product dashboard, or something else entirely.",
  },
  {
    q: "What does \u2018technical SEO\u2019 actually mean?",
    a: "It\u2019s the behind-the-scenes code that tells Google what your business does, where you\u2019re located, and what you offer. Schema markup, sitemaps, proper heading structure, optimized images \u2014 all the things covered in the Google ranking section above. Most template sites skip this entirely, which is why they don\u2019t rank.",
  },
  {
    q: "Can\u2019t I just use a template from Wix or Squarespace?",
    a: "You can \u2014 and it\u2019ll look like it. Templates share code with thousands of other sites, load slower, and give you almost zero control over the technical SEO signals Google uses to rank you. A custom-built site is faster, unique to your brand, and built from the ground up to convert visitors into customers.",
  },
  {
    q: "How much does a high-performance site cost?",
    a: "Most custom projects start at $1,500. Because I\u2019m a specialized engineer \u2014 not a bloated agency \u2014 you\u2019re paying for code and strategy, not office rent and project managers. For businesses looking for a long-term Growth Partnership, I offer hybrid pricing models that lower the upfront cost in exchange for ongoing optimization and tech support. My goal is to build a tool that pays for itself.",
  },
];

export default function FAQ() {
  return (
    <section data-fade>
      <p className="section-label mb-4">Common Questions</p>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-10 max-w-2xl">
        Things you might be wondering.
      </h2>
      <FAQAccordion faqs={faqs} idPrefix="webdev-faq" />
    </section>
  );
}
