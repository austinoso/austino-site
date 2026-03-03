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
      "If your site takes this long to load, 53% of visitors leave before they see a thing.",
    source: {
      label: "Google / SOASTA Research",
      href: "https://blog.google/products/admanager/increase-speed-of-your-mobile-site-wi/",
    },
  },
];

const signals = [
  {
    heading: "Google\u2019s Speed Test",
    stat: "Ranking signal",
    body: "Google scores every site on speed, stability, and responsiveness. Sites that score poorly get pushed down in search results, even with great content.",
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
    stat: "67%",
    body: "Two-thirds of customers would rather book online than pick up the phone. If your site doesn\u2019t let them, they\u2019ll find one that does.",
    source: {
      label: "Zippia",
      href: "https://www.zippia.com/advice/appointment-scheduling-statistics/",
    },
  },
];

/* ── Shared styles ── */
const card =
  "rounded-2xl bg-white border border-stone-200 p-6 sm:p-8 hover:shadow-sm transition-shadow duration-300";

function Source({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[11px] text-stone-400 hover:text-stone-600 transition-colors font-mono"
    >
      {label} ↗<span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function TheEvidence() {
  return (
    <section data-fade>
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 mb-10 sm:mb-14">
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl">
          Your site is being judged — by visitors and{" "}
          <span className="text-gradient-gold">by Google.</span>
        </h2>
      </div>

      {/* ── Mobile: stacked cards ── */}
      <div className="md:hidden px-6 space-y-2 pb-6 sm:px-10">
        {/* Stat cards */}
        {stats.map((s) => (
          <div key={s.number} className={card}>
            <span className="block font-display text-5xl font-bold leading-none mb-3 tracking-tight text-warm-white">
              {s.number}
            </span>
            <p className="text-sm text-stone-500 leading-relaxed mb-2">
              {s.label}
            </p>
            <Source {...s.source} />
          </div>
        ))}
        {/* Signal cards */}
        {signals.map((s) => (
          <div key={s.stat} className={card}>
            <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-1.5">
              {s.heading}
            </p>
            <span className="block font-display text-2xl font-bold leading-tight text-warm-gold mb-2">
              {s.stat}
            </span>
            <p className="text-sm text-stone-500 leading-relaxed mb-2">
              {s.body}
            </p>
            <Source {...s.source} />
          </div>
        ))}
      </div>

      {/* ── Desktop: bento card grid ── */}
      <div className="hidden md:grid md:grid-cols-3 gap-2 px-6 sm:px-10 md:px-14 lg:px-20">
        {/* ── 46% — featured stat (col 1-2, row 1) ── */}
        <div
          className={`${card} md:col-span-2 md:row-start-1 flex flex-col justify-between`}
        >
          <div>
            <span className="block font-display text-7xl font-bold leading-none mb-5 tracking-tight text-warm-white">
              {stats[0].number}
            </span>
            <p className="text-[15px] text-stone-500 leading-relaxed mb-4 max-w-md">
              {stats[0].label}
            </p>
          </div>
          <Source {...stats[0].source} />
        </div>

        {/* ── Ranking Signal — tall signal (col 3, row 1-2) ── */}
        <div
          className={`${card} md:col-start-3 md:row-span-2 md:row-start-1 flex flex-col justify-center`}
        >
          <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-1.5">
            {signals[0].heading}
          </p>
          <span className="font-display text-3xl font-bold leading-tight text-warm-gold mb-4">
            {signals[0].stat}
          </span>
          <p className="text-[15px] text-stone-500 leading-relaxed mb-3">
            {signals[0].body}
          </p>
          <Source {...signals[0].source} />
        </div>

        {/* ── 100% — standard stat (col 1, row 2) ── */}
        <div className={`${card} md:col-start-1 md:row-start-2`}>
          <span className="block font-display text-7xl font-bold leading-none mb-5 tracking-tight text-warm-white">
            {stats[1].number}
          </span>
          <p className="text-[15px] text-stone-500 leading-relaxed mb-4">
            {stats[1].label}
          </p>
          <Source {...stats[1].source} />
        </div>

        {/* ── 3s — standard stat (col 2, row 2) ── */}
        <div className={`${card} md:col-start-2 md:row-start-2`}>
          <span className="block font-display text-7xl font-bold leading-none mb-5 tracking-tight text-warm-white">
            {stats[2].number}
          </span>
          <p className="text-[15px] text-stone-500 leading-relaxed mb-4">
            {stats[2].label}
          </p>
          <Source {...stats[2].source} />
        </div>

        {/* ── Mobile-First — signal (col 1, row 3) ── */}
        <div className={`${card} md:col-start-1 md:row-start-3`}>
          <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-1.5">
            {signals[1].heading}
          </p>
          <span className="font-display text-3xl font-bold leading-tight text-warm-gold mb-4 block">
            {signals[1].stat}
          </span>
          <p className="text-[15px] text-stone-500 leading-relaxed mb-3">
            {signals[1].body}
          </p>
          <Source {...signals[1].source} />
        </div>

        {/* ── 67% online booking — wide signal (col 2-3, row 3) ── */}
        <div className={`${card} md:col-span-2 md:col-start-2 md:row-start-3`}>
          <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-1.5">
            {signals[2].heading}
          </p>
          <span className="block font-display text-7xl font-bold leading-none mb-5 tracking-tight text-warm-gold">
            {signals[2].stat}
          </span>
          <p className="text-[15px] text-stone-500 leading-relaxed mb-4">
            {signals[2].body}
          </p>
          <Source {...signals[2].source} />
        </div>
      </div>
    </section>
  );
}
