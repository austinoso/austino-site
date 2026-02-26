import {
  Gauge,
  Smartphone,
  MapPin,
  FileCode2,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

const signals: {
  icon: LucideIcon;
  heading: string;
  stat: string;
  statLabel: string;
  body: string;
  source: { label: string; href: string };
}[] = [
  {
    icon: Gauge,
    heading: "Core Web Vitals",
    stat: "ranking signal",
    statLabel: "Confirmed by Google",
    body: "Google measures your load speed, layout stability, and interactivity in real time. Sites that fail these thresholds get pushed down in results — even if your content is solid.",
    source: {
      label: "Google Search Central",
      href: "https://developers.google.com/search/docs/appearance/core-web-vitals",
    },
  },
  {
    icon: Smartphone,
    heading: "Mobile-First Indexing",
    stat: "100%",
    statLabel: "of sites indexed mobile-first",
    body: "Google doesn't look at your desktop site anymore — it crawls and ranks the mobile version first. If your mobile experience is broken, slow, or missing content, that's what Google sees.",
    source: {
      label: "Google Search Central, 2023",
      href: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing",
    },
  },
  {
    icon: MapPin,
    heading: "Local Search Intent",
    stat: "46%",
    statLabel: "of searches have local intent",
    body: "Nearly half of all Google searches are people looking for something nearby. Your site's structure — NAP consistency, local schema, and Google Business integration — determines if you show up in the map pack or get buried.",
    source: {
      label: "GoGulf / Safari Digital",
      href: "https://www.safaridigital.com.au/blog/local-seo-statistics/",
    },
  },
  {
    icon: BookOpen,
    heading: "Topical Authority",
    stat: "E-E-A-T",
    statLabel: "Google's quality framework",
    body: "Google rewards sites that demonstrate real expertise. Detailed service pages, comprehensive FAQs, case studies, and structured content signal that your business actually knows what it's talking about — not just that it exists.",
    source: {
      label: "Google Quality Rater Guidelines",
      href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    },
  },
  {
    icon: FileCode2,
    heading: "Crawlability & Structure",
    stat: "invisible",
    statLabel: "without proper markup",
    body: "Schema markup, XML sitemaps, proper heading hierarchy, and clean URLs — these are table stakes for Google to understand what you do and serve it to the right people. Most small business sites miss all of them.",
    source: {
      label: "Google Search Central",
      href: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    },
  },
];

export default function GoogleRanking() {
  return (
    <section data-fade>
      <p className="section-label mb-4">How Google Sees You</p>
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        If Google can&apos;t understand your site, no one will find it.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12">
        A great-looking site means nothing if it doesn&apos;t show up when
        someone searches for what you do. Here&apos;s what Google actually
        measures — and what most small business sites get wrong.
      </p>

      {/* Stacked signal list */}
      <div className="border-t border-white/[0.06]">
        {signals.map((signal, i) => (
          <div
            key={signal.heading}
            className="grid grid-cols-1 md:grid-cols-[1fr_2fr] border-b border-white/[0.06]"
          >
            {/* Left — stat + icon */}
            <div className="p-6 sm:p-8 md:border-r md:border-white/[0.06] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full border border-cyber-accent/20 bg-cyber-accent/[0.05] flex items-center justify-center flex-shrink-0">
                  <signal.icon
                    className="w-[18px] h-[18px] text-cyber-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-white">
                  {signal.heading}
                </h3>
              </div>
              <div className="ml-12">
                <span className="font-display text-2xl sm:text-3xl font-bold text-cyber-accent leading-none">
                  {signal.stat}
                </span>
                <p className="text-xs text-cyber-gray-400 mt-1">
                  {signal.statLabel}
                </p>
              </div>
            </div>

            {/* Right — description */}
            <div className="p-6 sm:p-8 flex flex-col justify-center border-t border-white/[0.06] md:border-t-0">
              <p className="text-sm sm:text-[15px] text-cyber-gray-300 leading-relaxed">
                {signal.body}
              </p>
              <a
                href={signal.source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] text-cyber-accent/60 hover:text-cyber-accent transition-colors font-mono mt-2 inline-block"
              >
                {signal.source.label} ↗
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
