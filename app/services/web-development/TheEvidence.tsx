const stats = [
  {
    number: "46%",
    label: "of people judge a business\u2019s credibility on visual design alone.",
    source: {
      label: "Stanford Web Credibility Research",
      href: "https://credibility.stanford.edu/pdf/Stanford-MakovskyWebCredStudy2002-prelim.pdf",
    },
  },
  {
    number: "3s",
    label: "If your site takes this long to load, 53% of visitors leave before they see a thing.",
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
];

/* ── Shared styles ── */
const card =
  "rounded-xl bg-white border border-stone-200 p-6 sm:p-8 hover:shadow-sm transition-shadow duration-300";

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
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-[1.15] max-w-2xl">
          The numbers behind your next customer&apos;s{" "}
          <span className="text-emerald-300">decision.</span>
        </h2>
      </div>

      {/* ── Mobile: stacked cards ── */}
      <div className="md:hidden px-6 space-y-3 pb-6 sm:px-10">
        {stats.map((s) => (
          <div key={s.number} className={card}>
            <span className="block font-display text-5xl font-bold leading-none mb-3 tracking-tight text-warm-white">
              {s.number}
            </span>
            <p className="text-sm text-stone-500 leading-relaxed mb-2">{s.label}</p>
            <Source {...s.source} />
          </div>
        ))}
        {signals.map((s) => (
          <div key={s.stat} className={card}>
            <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-1.5">
              {s.heading}
            </p>
            <span className="block font-display text-2xl font-bold leading-tight text-[#004D3A] mb-2">
              {s.stat}
            </span>
            <p className="text-sm text-stone-500 leading-relaxed mb-2">{s.body}</p>
            <Source {...s.source} />
          </div>
        ))}
      </div>

      {/* ── Desktop: 2-row bento — signal cards wide, stat cards narrow ── */}
      <div className="hidden md:grid md:grid-cols-3 gap-4 px-6 sm:px-10 md:px-14 lg:px-20">
        {/* ── Row 1: Ranking signal (wide) | 46% ── */}
        <div className={`${card} md:col-span-2 flex flex-col justify-center`}>
          <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-1.5">
            {signals[0].heading}
          </p>
          <span className="font-display text-4xl font-bold leading-tight text-[#004D3A] mb-4">
            {signals[0].stat}
          </span>
          <p className="text-[15px] text-stone-500 leading-relaxed mb-3 max-w-md">
            {signals[0].body}
          </p>
          <Source {...signals[0].source} />
        </div>

        <div className={`${card} flex flex-col justify-between`}>
          <div>
            <span className="block font-display text-7xl font-bold leading-none mb-5 tracking-tight text-warm-white">
              {stats[0].number}
            </span>
            <p className="text-[15px] text-stone-500 leading-relaxed mb-4">{stats[0].label}</p>
          </div>
          <Source {...stats[0].source} />
        </div>

        {/* ── Row 2: 3s | Desktop is ignored (wide) ── */}
        <div className={`${card} flex flex-col justify-between`}>
          <div>
            <span className="block font-display text-7xl font-bold leading-none mb-5 tracking-tight text-warm-white">
              {stats[1].number}
            </span>
            <p className="text-[15px] text-stone-500 leading-relaxed mb-4">{stats[1].label}</p>
          </div>
          <Source {...stats[1].source} />
        </div>

        <div className={`${card} md:col-span-2 flex flex-col justify-center`}>
          <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-1.5">
            {signals[1].heading}
          </p>
          <span className="font-display text-4xl font-bold leading-tight text-[#004D3A] mb-4 block">
            {signals[1].stat}
          </span>
          <p className="text-[15px] text-stone-500 leading-relaxed mb-3 max-w-md">
            {signals[1].body}
          </p>
          <Source {...signals[1].source} />
        </div>
      </div>
    </section>
  );
}
