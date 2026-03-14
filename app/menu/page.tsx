import type { Metadata } from "next";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Service Menu | austino.dev",
  description: "Service tiers and pricing for austino.dev web development and growth packages.",
  robots: { index: false, follow: false },
};

const tiers = [
  {
    name: "Tier 1",
    title: "Small Business Kickstart",
    tagline: "A custom site built around your business and how people search for\u00A0it.",
    goal: "Get a clean, professional site that shows up when customers search your business\u00A0name.",
    includes: [
      {
        label: "Custom-Built Site",
        detail:
          "Built to make visitors pick up the phone, not bounce. Scope is flexible\u00A0\u2014 I\u2019ll figure out what you actually need on the\u00A0call.",
      },
      {
        label: "Google Business Profile + Search Console",
        detail:
          "Set up, optimized, and connected so Google knows you exist. I’ll walk you through how to keep it working for you after that.",
      },
      {
        label: "Hosting + Quick Edits",
        detail: "I handle hosting. Need a text or image swap? Just\u00A0ask.",
      },
      {
        label: "Expert Advice",
        detail:
          "After launch, you have a web and software person in your contacts. Questions about reviews, Google posts, or anything web-related \u2014 text or email me. I can’t fix your printer, but everything else is fair game.",
      },
    ],
    price: { upfront: "Starts at $400", monthly: "$50/mo" },
    priceNote: "Lower upfront available with a higher monthly\u00A0rate.",
    bestFor:
      "Solo entrepreneurs, new local service providers, and \u201coffline\u201d businesses going\u00A0digital.",
    note: "Limited spots available",
    spotsOpen: 3,
    accent: "stone" as const,
  },
  {
    name: "Tier 2",
    title: "Standard Growth",
    tagline:
      "You\u2019re past the basics. Now you need to show up for the specific things you do\u00A0\u2014 and rank higher than the other\u00A0guys.",
    goal: "Rank on Google for the specific services you offer, not just your business\u00A0name.",
    includes: [
      {
        label: "Dedicated Service Pages",
        detail:
          "A page for each service you offer \u2014 so \u201cDeep Tissue Massage in Modesto\u201d lands on your site, not a competitor\u2019s.",
      },
      {
        label: "Monthly Ranking Checks",
        detail:
          "I track where you show up on Google and adjust content to keep you moving\u00A0up.",
      },
      {
        label: "Competitor Insights",
        detail:
          "What your local competitors are doing online, where they\u2019re weak, and how to get\u00A0ahead.",
      },
      {
        label: "Performance Reporting",
        detail: "Monthly updates on traffic and how customers are finding\u00A0you.",
      },
    ],
    price: { upfront: "Starts at $1.2k", monthly: "$150+/mo" },
    priceNote: "Lower upfront available with a higher monthly\u00A0rate.",
    bestFor: "Established local businesses that want to rank higher and get more\u00A0calls.",
    buildsOn: "Everything in Kickstart, plus:",
    accent: "gold" as const,
  },
  {
    name: "Tier 3",
    title: "Market Dominator",
    tagline: "You serve multiple cities. Each one should know your\u00A0name.",
    goal: "Compete in every city you serve. Convert more of the traffic that finds\u00A0you.",
    includes: [
      {
        label: "City-Specific Landing Pages",
        detail:
          "Custom pages optimized for every city you serve (e.g., Manteca, Tracy,\u00A0Modesto).",
      },
      {
        label: "Competitor Deep-Dive",
        detail:
          "I study what the top-ranking sites in your space publish, then close the\u00A0gap.",
      },
      {
        label: "Conversion Testing",
        detail: "I test buttons, forms, and layouts to turn more visits into\u00A0calls.",
      },
      {
        label: "Priority Support",
        detail: "Direct access for fast updates and strategy calls when you need\u00A0them.",
      },
    ],
    price: { upfront: "Contact for Quote", monthly: "$300+/mo" },
    bestFor:
      "Businesses in competitive markets, serving multiple cities, or running high-volume\u00A0operations.",
    buildsOn: "Everything in Kickstart and Standard, plus:",
    accent: "brand" as const,
  },
] as const;

const comparisonRows = [
  {
    feature: "Upfront Cost",
    kickstart: "Starts at $400*",
    standard: "Starts at $1.2k*",
    dominator: "Contact for Quote",
  },
  { feature: "Monthly Support", kickstart: "$50", standard: "$150+", dominator: "$300+" },
  {
    feature: "Google Presence",
    kickstart: "Profile setup",
    standard: "Optimized + monitored",
    dominator: "Multi-location",
  },
  { feature: "Monthly Edits", kickstart: "Basic", standard: "Priority", dominator: "Unlimited" },
  {
    feature: "SEO Focus",
    kickstart: "Local Foundations",
    standard: "Local Rankings",
    dominator: "Market Dominance",
  },
  {
    feature: "1-Year Term Discount",
    kickstart: "Available\u2020",
    standard: "Available\u2020",
    dominator: "Custom",
  },
];

type Tier = {
  name: string;
  title: string;
  tagline: string;
  goal: string;
  includes: readonly { label: string; detail: string }[];
  price: { upfront: string; monthly: string };
  priceNote?: string;
  bestFor: string;
  note?: string;
  spotsOpen?: number;
  buildsOn?: string;
  accent: "stone" | "gold" | "brand";
};

function TierBadge({ tier }: { tier: Tier }) {
  const styles = {
    stone: "bg-stone-100 text-stone-600 border-stone-200",
    gold: "bg-amber-50 text-amber-700 border-amber-200",
    brand: "bg-gradient-to-r from-amber-50 to-rose-50 text-amber-800 border-amber-300",
  };

  return (
    <span
      className={`inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full border ${styles[tier.accent]}`}
    >
      {tier.name}
    </span>
  );
}

function TierCard({ tier, index }: { tier: Tier; index: number }) {
  const borderStyles = {
    stone: "border-stone-200",
    gold: "border-amber-300/60",
    brand: "border-amber-400/70 shadow-sm shadow-amber-100",
  };

  const goalBarStyles = {
    stone: "bg-stone-50 border-stone-200",
    gold: "bg-amber-50/60 border-amber-200/60",
    brand: "bg-gradient-to-r from-amber-50/80 to-rose-50/60 border-amber-200/50",
  };

  return (
    <section
      className={`relative border rounded-2xl bg-white overflow-hidden ${borderStyles[tier.accent]} print:border-stone-300 print:shadow-none print:rounded-none`}
      aria-labelledby={`tier-${index}-title`}
    >
      <div className="p-8 sm:p-10 print:p-6">
        <div className="mb-6">
          <TierBadge tier={tier} />
        </div>

        <h2
          id={`tier-${index}-title`}
          className="text-2xl sm:text-3xl font-bold font-display text-warm-white leading-[1.15] tracking-tight mb-3"
        >
          {tier.title}
        </h2>

        <p className="text-[15px] text-stone-500 leading-relaxed mb-5 max-w-xl">{tier.tagline}</p>

        {/* Pricing */}
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-lg font-bold font-display text-warm-white">
            {tier.price.upfront}
            {tier.price.upfront.startsWith("Starts") && (
              <span className="text-[10px] align-super text-stone-500" aria-hidden="true">
                *
              </span>
            )}
            {tier.price.upfront.startsWith("Starts") && (
              <span className="sr-only">(see pricing footnote)</span>
            )}
          </span>
          <span className="text-sm text-stone-500" aria-hidden="true">
            +
          </span>
          <span className="text-sm font-semibold text-stone-600">{tier.price.monthly}</span>
        </div>
        {tier.priceNote && (
          <p className="text-xs -mt-4 mb-6">
            <a
              href="#footnote-flexible"
              className="text-stone-500 hover:text-stone-700 underline underline-offset-2 decoration-stone-300 hover:decoration-stone-500 transition-colors"
            >
              <span aria-hidden="true">†</span> {tier.priceNote}
            </a>
          </p>
        )}

        {/* The Goal */}
        <div
          className={`rounded-xl border px-5 py-4 mb-8 ${goalBarStyles[tier.accent]} print:bg-stone-50 print:border-stone-200`}
        >
          <p className="text-xs font-mono font-semibold text-stone-500 uppercase tracking-[0.15em] mb-1.5">
            The Goal
          </p>
          <p className="text-[15px] text-stone-700 leading-relaxed font-medium">{tier.goal}</p>
        </div>

        {/* What's Included */}
        <h3 className="text-xs font-mono font-semibold text-stone-500 uppercase tracking-[0.15em] mb-4">
          What&apos;s Included
        </h3>

        {tier.buildsOn && <p className="text-sm text-stone-500 italic mb-4">{tier.buildsOn}</p>}

        <dl className="space-y-4 mb-8">
          {tier.includes.map((item, i) => (
            <div key={i} className="flex gap-3">
              <div className="flex-shrink-0 mt-1">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    tier.accent === "stone"
                      ? "bg-stone-300"
                      : tier.accent === "gold"
                        ? "bg-amber-400"
                        : "bg-amber-500"
                  }`}
                />
              </div>
              <div>
                <dt className="text-[15px] font-semibold text-warm-white">{item.label}</dt>
                <dd className="text-sm text-stone-500 leading-relaxed mt-0.5">{item.detail}</dd>
              </div>
            </div>
          ))}
        </dl>

        {/* Best For */}
        <div className="border-t border-stone-100 pt-5 print:border-stone-200">
          <p className="text-xs font-mono font-semibold text-stone-500 uppercase tracking-[0.15em] mb-1.5">
            Best For
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">{tier.bestFor}</p>
        </div>
      </div>

      {/* Card footer — limited availability */}
      {tier.note && (
        <div className="border-t border-stone-100 bg-stone-50/60 px-8 sm:px-10 py-3 flex items-center justify-between print:bg-transparent print:px-6">
          <p className="text-sm text-stone-500">{tier.note}</p>
          {tier.spotsOpen != null && (
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 print:hidden" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              {tier.spotsOpen} open
            </span>
          )}
        </div>
      )}
    </section>
  );
}

function ComparisonTable() {
  return (
    <section aria-labelledby="comparison-title" className="mt-16 print:mt-10">
      <h2
        id="comparison-title"
        className="text-2xl sm:text-3xl font-bold font-display text-warm-white leading-[1.15] tracking-tight mb-2"
      >
        Quick Comparison
      </h2>
      <p className="text-[15px] text-stone-500 mb-8">
        The short version, if you don&apos;t want to read the cards.
      </p>

      <div className="overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0">
        <table className="w-full text-sm border-collapse min-w-[540px]">
          <thead>
            <tr>
              <th
                scope="col"
                className="text-left text-xs font-mono font-semibold text-stone-500 uppercase tracking-[0.15em] pb-3 pr-4 border-b-2 border-stone-200 w-[28%]"
              >
                Feature
              </th>
              <th
                scope="col"
                className="text-left text-xs font-mono font-semibold text-stone-500 uppercase tracking-[0.15em] pb-3 px-4 border-b-2 border-stone-200 w-[24%]"
              >
                Kickstart
              </th>
              <th
                scope="col"
                className="text-left text-xs font-mono font-semibold text-stone-500 uppercase tracking-[0.15em] pb-3 px-4 border-b-2 border-stone-200 w-[24%]"
              >
                Standard
              </th>
              <th
                scope="col"
                className="text-left text-xs font-mono font-semibold text-amber-600 uppercase tracking-[0.15em] pb-3 pl-4 border-b-2 border-amber-300/60 w-[24%]"
              >
                Dominator
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-stone-50/50 print:bg-transparent" : ""}>
                <th
                  scope="row"
                  className="py-3 pr-4 text-warm-white font-medium border-b border-stone-100 print:border-stone-200 text-left"
                >
                  {row.feature}
                </th>
                <td className="py-3 px-4 text-stone-600 border-b border-stone-100 print:border-stone-200">
                  {row.kickstart}
                </td>
                <td className="py-3 px-4 text-stone-600 border-b border-stone-100 print:border-stone-200">
                  {row.standard}
                </td>
                <td className="py-3 pl-4 text-stone-700 font-medium border-b border-stone-100 print:border-stone-200">
                  {row.dominator}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function ServiceMenuPage() {
  return (
    <div className="min-h-screen bg-warm-bg print:bg-white print:min-h-0">
      {/* Header */}
      <header className="pt-12 sm:pt-16 pb-10 sm:pb-14 px-6 sm:px-10 md:px-14 lg:px-20 max-w-[800px] mx-auto print:pt-6 print:pb-6">
        <div className="mb-6 print:mb-3">
          <span className="text-[11px] font-mono font-semibold text-warm-gold uppercase tracking-[0.2em]">
            austino.dev
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-warm-white leading-[1.08] tracking-tight mb-4 print:text-3xl">
          Service Menu
        </h1>

        <p className="text-base sm:text-lg text-stone-500 leading-relaxed max-w-2xl">
          Three tiers. Pick the one that fits where your business is now&nbsp;&mdash; you can always
          move&nbsp;up.
        </p>

        <div className="mt-6 h-px bg-gradient-to-r from-amber-300/40 via-stone-200 to-transparent print:bg-stone-300 print:mt-4" />
      </header>

      {/* Tier Cards */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 max-w-[800px] mx-auto space-y-8 print:space-y-6">
        {tiers.map((tier, i) => (
          <TierCard key={tier.name} tier={tier} index={i} />
        ))}
      </div>

      {/* CMS Note — right after tiers, where the question naturally comes up */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 max-w-[800px] mx-auto mt-8 print:mt-4">
        <div className="rounded-xl border border-stone-200 bg-white px-6 py-5 sm:px-8 sm:py-6 print:border-stone-300">
          <p className="text-[15px] font-semibold text-warm-white mb-2">
            What about editing your own&nbsp;site?
          </p>
          <p className="text-sm text-stone-500 leading-relaxed">
            A content management system (think WordPress-style editing) can be added to any tier.
            But my honest recommendation: send me the updates instead. When you tell me about a new
            service, a seasonal deal, or a change in hours, I write it into the site so it reads
            reads clean and ranks well. Self-edited pages usually end up hurting the copy and
            the&nbsp;rankings.
          </p>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 max-w-[800px] mx-auto print:break-before-page">
        <ComparisonTable />
      </div>

      {/* Automation Add-On */}
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 max-w-[800px] mx-auto mt-12 print:mt-6">
        <div className="rounded-xl border border-amber-200/50 bg-amber-50/30 px-6 py-5 sm:px-8 sm:py-6 print:border-stone-300 print:bg-transparent">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-[0.18em] px-3 py-1 rounded-full border border-amber-200 bg-amber-50 text-amber-700">
              Add-On
            </span>
          </div>
          <p className="text-[15px] font-semibold text-warm-white mb-2">Automation</p>
          <p className="text-sm text-stone-500 leading-relaxed mb-3">
            Repetitive work adds up. If you're copying data between apps, sending the same emails by
            hand, or managing bookings in a spreadsheet, I can build custom code that does it for
            you. Connects the tools you already use, or builds new ones from&nbsp;scratch.
          </p>
          <p className="text-sm text-stone-500 leading-relaxed">
            Available at every tier. Pricing depends on scope — I'll map out what makes sense during
            your&nbsp;call.
          </p>
        </div>
      </div>

      {/* Footer note */}
      <footer className="px-6 sm:px-10 md:px-14 lg:px-20 max-w-[800px] mx-auto pt-12 pb-16 print:pt-6 print:pb-6">
        <div className="h-px bg-stone-200 mb-8 print:mb-4" />

        <p className="text-xs text-stone-500 leading-relaxed max-w-lg">
          * Pricing is based on project scope. Upfront costs listed are starting points&nbsp;&mdash;
          final pricing is discussed during the discovery call. Monthly support is billed separately
          and can be adjusted as your needs&nbsp;change.
        </p>

        <p
          id="footnote-flexible"
          className="text-xs text-stone-500 leading-relaxed max-w-lg mt-3 scroll-mt-8"
        >
          † Not every business budgets the same way. These tiers offer a flexible payment option: a
          reduced upfront fee in exchange for a higher monthly rate over an agreed term. Same scope,
          same quality — just a different way to structure the&nbsp;cost.
        </p>

        <div className="mt-6 flex items-center gap-3 print:mt-4">
          <span className="text-[11px] font-mono text-stone-500 uppercase tracking-[0.15em]">
            austino.dev
          </span>
          <span className="text-stone-300">·</span>
          <a
            href="mailto:connect@austino.dev"
            className="text-[11px] font-mono text-warm-gold hover:text-amber-700 transition-colors print:text-stone-600 print:no-underline"
          >
            connect@austino.dev
          </a>
        </div>
      </footer>

      {/* Print button — hidden when printing */}
      <div className="fixed bottom-6 right-6 print:hidden">
        <PrintButton />
      </div>
    </div>
  );
}
