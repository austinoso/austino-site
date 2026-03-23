import ScrollReveal from "@/components/ui/ScrollReveal";

/* ────────────────────────────────────────────────────────────────── */
/*  Data                                                             */
/* ────────────────────────────────────────────────────────────────── */

const points = [
  {
    title: "The site either earns the next step or it\u00A0doesn\u2019t",
    description:
      "Every decision\u00A0\u2014 how fast it loads, how it\u2019s laid out, what the visitor is asked to do\u00A0\u2014 either moves them toward calling you or toward hitting back. A site built around how your specific customers think and search is a different thing from a template with your logo on\u00A0it.",
  },
  {
    title: "Nobody in your market is doing the work to\u00A0rank",
    description:
      "Getting to page one takes more than a good-looking site. Ranking takes ongoing optimization and new content: detailed service pages, local guides, pages that answer what your customers are actually searching for. In Modesto, Stockton, Manteca, Tracy, and Turlock, the top three spots for most service searches are held by whoever put in the work. Almost nobody in your market is doing this. That\u2019s the\u00A0gap.",
  },
];

const stats = [
  {
    value: "53%",
    label: "of mobile users leave after 3s",
    color: "text-warm-gold",
  },
  {
    value: "75%",
    label: "never scroll past page 1",
    color: "text-gradient-brand",
  },
  {
    value: "88%",
    label: "won't return after a bad UX",
    color: "text-warm-gold",
  },
];

/* ────────────────────────────────────────────────────────────────── */
/*  Component                                                        */
/* ────────────────────────────────────────────────────────────────── */

export default function PainPoints() {
  return (
    <ScrollReveal
      as="section"
      className="relative w-full py-14 sm:py-16 md:py-20 border-b border-stone-200"
      aria-labelledby="pain-points-heading"
    >
      <div className="px-6 sm:px-10 md:px-14 lg:px-20">
        {/* ── Two-column: prose left, stats right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ── Left: header + points ── */}
          <div className="lg:col-span-7">
            <span data-animate="label" className="section-label block mb-5">
              The Opportunity
            </span>
            <h2
              id="pain-points-heading"
              data-animate="card"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white leading-[1.1] tracking-tight mb-10 sm:mb-12 text-balance"
            >
              Your competitors made <span className="text-gradient-gold">this&nbsp;easy.</span>
            </h2>

            <div data-animate="card" className="space-y-8">
              {points.map((point, i) => (
                <div key={i}>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-warm-white leading-snug text-balance">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] text-stone-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: stat sidebar ── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div
              data-animate="card"
              className="grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6 lg:gap-0 lg:divide-y lg:divide-stone-200 border-t border-stone-200 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:border-stone-200 lg:pl-12"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`text-center lg:text-left ${i > 0 ? "lg:pt-8" : ""} ${i < stats.length - 1 ? "lg:pb-8" : ""}`}
                >
                  <span
                    className={`font-display text-[2rem] sm:text-5xl lg:text-6xl font-bold ${stat.color} leading-none block`}
                  >
                    {stat.value}
                  </span>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-stone-500 leading-snug sm:leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
