import FAQAccordion from "@/components/ui/FAQAccordion";

const faqs = [
  {
    q: "What kind of content do you create?",
    a: "Service deep-dives, FAQ pages, educational content, and location-specific landing pages, all written to match how your customers actually search. I handle the research and drafting. All I need from you is a quick voice memo or call. Your real-world expertise is what makes the content rank.",
  },
  {
    q: "How is this different from SEO?",
    a: "The SEO happens as a byproduct of doing useful work. Traditional SEO is often a checklist: meta tags, keywords, backlinks. This is about building actual pages with real value that make you the go-to answer in your space.",
  },
  {
    q: "What if I don\u2019t need changes every month?",
    a: "That\u2019s fine. This isn\u2019t about making changes for the sake of it. Some months I\u2019m building a new service page. Other months the data says everything\u2019s performing well, so I\u2019m monitoring and planning the next move. You\u2019re paying for a strategist who\u2019s always watching, not someone who\u2019s always tinkering.",
  },
  {
    q: "What does this cost?",
    a: "Plans start at $200/mo. That\u2019s less than most businesses spend on ads in a week, except this work builds over time instead of resetting to zero. Final pricing depends on scope: how large your site is, how many service areas you\u2019re targeting, and how much content needs to be built each month.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No long-term contracts. That said, this kind of growth isn\u2019t overnight. Google takes time to index new pages and build trust in your site. Most clients start seeing real movement by month two or three, and it builds from there. Every page I publish keeps earning traffic long after it goes live.",
  },
  {
    q: "Do I need this if I just launched a new site?",
    a: "Especially then. The first few months after launch are when your ranking momentum is building fastest. That\u2019s the most impactful time to have someone reading the data, fixing what\u2019s underperforming, and publishing the pages that establish your presence early.",
  },
  {
    q: "Can I get growth strategy without a new site?",
    a: "Growth strategy is only available alongside my web development service. The strategy depends on a fast, well-structured site with clean code and proper SEO foundations. If the site itself has problems, no amount of content or optimization will fix the rankings. I need to know the foundation is solid before I can build on it.",
  },
];

export default function FAQ() {
  return (
    <section data-fade>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
        {/* Left — heading */}
        <div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-5">
            Honest answers <span className="text-[#004D3A]">before you commit.</span>
          </h2>
          <p className="text-[15px] text-stone-500 leading-relaxed text-pretty">
            If we&apos;re not the right fit, I&apos;ll tell you.
          </p>
        </div>

        {/* Right — accordion */}
        <div>
          <FAQAccordion faqs={faqs} idPrefix="growth-faq" />
        </div>
      </div>
    </section>
  );
}
