const stats = [
  {
    number: "46%",
    label:
      "of people judge a business\u2019s credibility on visual design alone.",
    source: {
      label: "Stanford Web Credibility Research",
      href: "https://credibility.stanford.edu/pdf/Stanford-MakovskyWebCredStudy2002-prelim.pdf",
    },
  },
  {
    number: "100%",
    label:
      "Google now judges your site entirely by its mobile version. Desktop doesn\u2019t count.",
    source: {
      label: "Google Search Central, 2023",
      href: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
    },
  },
  {
    number: "3s",
    label:
      "If your site takes this long to load, 32% of visitors leave before they see a thing.",
    source: {
      label: "Think with Google",
      href: "https://business.google.com/ca-en/think/marketing-strategies/mobile-page-speed-new-industry-benchmarks/",
    },
  },
];

const signals = [
  {
    heading: "Google's Speed Test",
    stat: "Ranking signal",
    body: "Google scores every site on speed, stability, and responsiveness. Sites that score poorly get pushed down in search results\u2009\u2014\u2009even with great content.",
    source: {
      label: "Google Search Central",
      href: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
  },
  {
    heading: "Mobile Comes First",
    stat: "Desktop is ignored",
    body: "Google only looks at your mobile version now. If your phone experience is bad, you drop in search results.",
    source: {
      label: "Google Search Central, 2023",
      href: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
    },
  },
  {
    heading: "Online Booking",
    stat: "67% prefer online",
    body: "Two-thirds of customers would rather book online than pick up the phone. If your site doesn\u2019t let them, they\u2019ll find one that does.",
    source: {
      label: "Zippia",
      href: "https://www.zippia.com/advice/appointment-scheduling-statistics/",
    },
  },
];

/* shared cell style */
const cell =
  "p-6 sm:p-8 md:p-10 transition-colors duration-300 hover:bg-white/[0.02]";

function Source({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[11px] text-stone-500 hover:text-stone-300 transition-colors font-mono"
    >
      {label} ↗<span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function TheEvidence() {
  return (
    <section data-fade>
      <div className="p-6 sm:p-10 pb-0">
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.15] tracking-tight text-balance max-w-2xl mb-10 sm:mb-20">
          Your site is being judged — by visitors and{" "}
          <span className="text-gradient-gold">by Google.</span>
        </h2>
      </div>

      {/* ── Mobile: staggered items (stats + ranking signal) ── */}
      <div className="md:hidden px-10 space-y-8 pb-6">
        {[
          {
            number: stats[0].number,
            label: stats[0].label,
            source: stats[0].source,
          },
          {
            heading: signals[0].heading,
            number: signals[0].stat,
            label: signals[0].body,
            source: signals[0].source,
          },
          {
            number: stats[2].number,
            label: stats[2].label,
            source: stats[2].source,
          },
        ].map((item, i) => {
          const isRight = i % 2 !== 0;
          const isSignal = "heading" in item;
          return (
            <div
              key={item.number}
              className={`max-w-[75%] ${isRight ? "text-right ml-auto" : ""}`}
            >
              {isSignal && (
                <p className="text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-1.5">
                  {(item as { heading: string }).heading}
                </p>
              )}
              <span
                className={`block font-display font-bold leading-none mb-2 tracking-tight ${
                  isSignal
                    ? "text-[1.75rem] text-warm-gold"
                    : "text-[3.25rem] text-warm-white"
                }`}
              >
                {item.number}
              </span>
              <p className="text-[13px] text-stone-400 leading-relaxed mb-1.5">
                {item.label}
              </p>
              <Source {...item.source} />
            </div>
          );
        })}
      </div>

      {/* ── Desktop: bento grid (md+) ── */}
      <div className="hidden md:grid md:grid-cols-3 md:grid-rows-3 border-t border-white/[0.06]">
        {/* ── 46% — wide stat (col 1-2, row 1) ── */}
        <div
          className={`${cell} md:col-span-2 md:row-start-1 border-b md:border-r border-white/[0.06] bg-warm-surface/40`}
        >
          <span className="block font-display text-7xl font-bold leading-none mb-5 tracking-tight text-warm-white">
            {stats[0].number}
          </span>
          <p className="text-[15px] text-stone-400 leading-relaxed mb-4">
            {stats[0].label}
          </p>
          <Source {...stats[0].source} />
        </div>

        {/* ── Core Web Vitals — tall signal (col 3, row 1-2) ── */}
        <div
          className={`${cell} md:col-start-3 md:row-span-2 md:row-start-1 border-b border-white/[0.06] flex flex-col justify-center`}
        >
          <p className="text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-1.5">
            {signals[0].heading}
          </p>
          <span className="font-display text-3xl font-bold leading-tight text-warm-gold mb-4">
            {signals[0].stat}
          </span>
          <p className="text-[15px] text-stone-400 leading-relaxed mb-3">
            {signals[0].body}
          </p>
          <Source {...signals[0].source} />
        </div>

        {/* ── 0.05s — standard stat (col 1, row 2) ── */}
        <div
          className={`${cell} md:col-start-1 md:row-start-2 border-b md:border-r border-white/[0.06]`}
        >
          <span className="block font-display text-7xl font-bold leading-none mb-5 tracking-tight text-warm-white">
            {stats[1].number}
          </span>
          <p className="text-[15px] text-stone-400 leading-relaxed mb-4">
            {stats[1].label}
          </p>
          <Source {...stats[1].source} />
        </div>

        {/* ── 3s — standard stat (col 2, row 2) ── */}
        <div
          className={`${cell} md:col-start-2 md:row-start-2 border-b md:border-r border-white/[0.06]`}
        >
          <span className="block font-display text-7xl font-bold leading-none mb-5 tracking-tight text-warm-white">
            {stats[2].number}
          </span>
          <p className="text-[15px] text-stone-400 leading-relaxed mb-4">
            {stats[2].label}
          </p>
          <Source {...stats[2].source} />
        </div>

        {/* ── Mobile-First — standard signal (col 1, row 3) ── */}
        <div
          className={`${cell} md:col-start-1 md:row-start-3 md:border-r border-white/[0.06]`}
        >
          <p className="text-[11px] font-mono text-stone-500 uppercase tracking-wider mb-1.5">
            {signals[1].heading}
          </p>
          <span className="font-display text-3xl font-bold leading-tight text-warm-gold mb-4 block">
            {signals[1].stat}
          </span>
          <p className="text-[15px] text-stone-400 leading-relaxed mb-3">
            {signals[1].body}
          </p>
          <Source {...signals[1].source} />
        </div>

        {/* ── 67% prefer online — big stat style (col 2-3, row 3) ── */}
        <div className={`${cell} md:col-span-2 md:col-start-2 md:row-start-3`}>
          <span className="block font-display text-7xl font-bold leading-none mb-5 tracking-tight text-warm-white">
            67%
          </span>
          <p className="text-[15px] text-stone-400 leading-relaxed mb-4">
            {signals[2].body}
          </p>
          <Source {...signals[2].source} />
        </div>
      </div>
    </section>
  );
}
