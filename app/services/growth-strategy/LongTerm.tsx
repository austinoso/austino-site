export default function LongTerm() {
  const milestones = [
    {
      month: "Month 1",
      title: "Baseline & strategy",
      description:
        "Analytics go live. I audit your current rankings, identify pages where visitors leave without taking action, and map out which keywords you should be targeting. We establish your baseline so every future improvement is measurable.",
    },
    {
      month: "Month 3",
      title: "Data-driven fixes",
      description:
        "If most visitors are leaving your booking page without booking, I dig into why. Redesign the flow. Simplify the form. Changes like that routinely lift completions 20\u201330%. Two new service pages go live and start showing up in search results.",
    },
    {
      month: "Month 6",
      title: "Authority building",
      description:
        "You\u2019re now ranking for 30+ keywords you weren\u2019t targeting before. New pages are pulling in organic traffic for specific searches your customers actually make, without paying for ads.",
    },
    {
      month: "Month 12",
      title: "Sustained momentum",
      description:
        "Your site is the go-to result in your area. Traffic has grown steadily month over month, local rankings dominate, and your site generates leads consistently. Competitors still have a 5-page brochure.",
    },
  ];

  return (
    <section
      data-fade
      className="px-6 sm:px-10 md:px-14 lg:px-20 pb-14 sm:pb-20 md:pb-24"
    >
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 lg:items-center">
        {/* Left: heading — centered against timeline */}
        <div className="lg:col-span-5">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-4">
            A site that gets{" "}
            <span className="text-gradient-gold">stronger every month.</span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
            Every page I build keeps pulling traffic after it&apos;s published.
            Every fix I make stacks on the last.
          </p>
          <p className="mt-5 text-sm text-stone-500 leading-relaxed border-l-2 border-warm-gold/20 pl-4 text-pretty">
            This isn&apos;t paid ads. You won&apos;t see results overnight. But
            every month the results stack, and the gap between you and your
            competitors gets harder for them to close.
          </p>
        </div>

        {/* Right: vertical timeline */}
        <div className="lg:col-span-7">
          <div className="relative pl-8 sm:pl-10">
            {/* Timeline line */}
            <div
              className="absolute left-[15px] sm:left-[18px] top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(212,168,83,0.35), rgba(212,168,83,0.08) 50%, rgba(167,139,250,0.12))",
              }}
            />

            {milestones.map((milestone, i) => (
              <div
                key={milestone.month}
                className={`relative ${i < 3 ? "pb-10 sm:pb-12" : ""}`}
              >
                {/* Timeline node */}
                <div className="absolute left-[-25px] sm:left-[-31px] top-1">
                  <div className="w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full bg-warm-bg border-2 border-warm-gold/40 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-warm-gold/60" />
                  </div>
                </div>
                <div>
                  <p className="text-xs font-mono text-warm-gold font-semibold tracking-wider mb-2">
                    {milestone.month}
                  </p>
                  <h3 className="text-sm font-semibold text-warm-white mb-1.5">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed max-w-lg text-pretty">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
