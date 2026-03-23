import FAQAccordion from "@/components/ui/FAQAccordion";

const faqs = [
  {
    q: "My current website works fine. Is this really worth the investment?",
    a: '"Works fine" and "actively brings in customers" are two very different things. If your site isn\'t showing up on Google, turning visitors into customers, or building trust the moment someone lands on it, it\'s costing you business you never see.',
  },
  {
    q: "How long does it take to build a site?",
    a: "Most projects take 2\u20134 weeks from kickoff to launch. That includes discovery, design, development, content, and revisions. I\u2019ll give you a clear timeline before we kick things off.",
  },
  {
    q: "What if I need something changed on the site?",
    a: "For most updates (new photos, changed hours, updated text), just send me a list and I\u2019ll handle it, usually the same day. If your business needs to update things regularly on its own, I\u2019ll set up whatever makes sense for your workflow: a simple content editor, a scheduling widget, a product dashboard, or something else entirely.",
  },
  {
    q: "What does \u2018technical SEO\u2019 actually mean?",
    a: "It\u2019s the behind-the-scenes work that tells Google what your business does, where you\u2019re located, and what you offer. Things like making sure your business info is tagged correctly, your pages load fast, your images aren\u2019t slowing things down, and your site is organized in a way Google can actually read. Most template sites skip this entirely, which is why they don\u2019t rank.",
  },
  {
    q: "Can\u2019t I just use a template from Wix or Squarespace?",
    a: "You can, and it\u2019ll look like it. Templates share code with thousands of other sites, load slower, and give you almost zero control over the technical SEO signals Google uses to rank you. A custom-built site is faster, unique to your brand, and built from the ground up to convert visitors into customers.",
  },
  {
    q: "How much does a high-performance site cost?",
    a: "Entry packages start at $399 + $50/month \u2014 a limited-time offer for new clients. Larger custom projects start at $999. I\u2019m a specialized engineer, not a bloated agency, so you\u2019re paying for code and strategy, not office rent and project managers. My goal is to build a tool that pays for itself.",
  },
];

export default function FAQ() {
  return (
    <section data-fade>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
        {/* Left — heading + reassurance */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-5">
            Things you might be <span className="text-gradient-gold">wondering.</span>
          </h2>
          <p className="text-[15px] text-stone-600 leading-relaxed text-pretty">
            No hard sell. If we&apos;re not the right fit, I&apos;ll tell you.
          </p>
        </div>

        {/* Right — accordion */}
        <div>
          <FAQAccordion faqs={faqs} idPrefix="webdev-faq" />
        </div>
      </div>
    </section>
  );
}
