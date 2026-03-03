import ScrollReveal from "@/components/ui/ScrollReveal";

/* ────────────────────────────────────────────────────────────────── */
/*  Data                                                             */
/* ────────────────────────────────────────────────────────────────── */

const points = [
  {
    title: "Slow sites bleed customers before they\u00A0land",
    description:
      "Most local businesses run bloated templates that take 6\u201310\u00A0seconds to load. A fast, custom-built site puts you in front of every search\u00A0\u2014\u00A0before competitors even\u00A0render.",
  },
  {
    title: "Page one belongs to whoever shows\u00A0up",
    description:
      "Most businesses launch a site and never touch it again. The ones that keep publishing and optimizing are the ones that\u00A0rank.",
  },
  {
    title: "Launch-and-forget is the\u00A0norm",
    description:
      "No updates, no optimization, no strategy. The businesses that keep improving are the ones that pull further ahead every\u00A0month.",
  },
];

const stats = [
  {
    value: "53%",
    label: "of mobile users leave after 3\u00A0s",
    color: "text-warm-gold",
  },
  {
    value: "75%",
    label: "never scroll past page\u00A01",
    color: "text-gradient-brand",
  },
  {
    value: "88%",
    label: "won\u2019t return after a bad\u00A0UX",
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
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white leading-[1.1] tracking-tight mb-10 sm:mb-12"
            >
              Your competitors made{" "}
              <span className="text-gradient-gold">this&nbsp;easy.</span>
            </h2>

            <div data-animate="card" className="space-y-8">
              {points.map((point, i) => (
                <div key={i}>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-warm-white leading-snug">
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
              className="grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-0 lg:divide-y lg:divide-stone-200 border-t border-stone-200 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:border-stone-200 lg:pl-12"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`${i > 0 ? "lg:pt-8" : ""} ${i < stats.length - 1 ? "lg:pb-8" : ""}`}
                >
                  <span
                    className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold ${stat.color} leading-none block`}
                  >
                    {stat.value}
                  </span>
                  <p className="mt-2 text-sm text-stone-500 leading-relaxed">
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
