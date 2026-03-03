import {
  BarChart3,
  PenTool,
  TrendingUp,
  ArrowRight,
  Search,
  Star,
  TrendingUp as TrendUp,
  LineChart,
} from "lucide-react";
import Link from "next/link";

const keywords = [
  { term: "personal trainer near me", trend: "+24%" },
  { term: "gym Manteca", trend: "+18%" },
  { term: "weight loss coach", trend: "+31%" },
  { term: "strength training", trend: "+12%" },
  { term: "fitness classes Manteca", trend: "+9%" },
];

const capabilities = [
  { icon: BarChart3, label: "Conversion Optimization" },
  { icon: PenTool, label: "Content That Ranks" },
  { icon: TrendingUp, label: "Google Profile Optimization" },
  { icon: LineChart, label: "Keyword Tracking" },
];

const mapListings = [
  {
    name: "Your Fitness Business",
    rating: 4.9,
    reviews: 84,
    type: "Personal Trainer",
    address: "123 Main St, Manteca",
    hours: "Open · Closes 8 PM",
    highlighted: true,
  },
  {
    name: "Manteca Fitness Center",
    rating: 4.2,
    reviews: 31,
    type: "Gym",
    address: "456 Yosemite Ave, Manteca",
    hours: "Open · Closes 9 PM",
    highlighted: false,
  },
  {
    name: "Central Valley Strength",
    rating: 3.8,
    reviews: 12,
    type: "Personal Trainer",
    address: "789 Center St, Manteca",
    hours: "Open · Closes 7 PM",
    highlighted: false,
  },
];

export default function OngoingSupport() {
  return (
    <div data-subsection>
      {/* ── Top row: label + heading + description side by side ── */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-10">
        <div>
          <span className="section-label block mb-5">Growth Strategy</span>
          <h3 className="font-display text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-warm-white leading-[1.15] tracking-tight">
            A great site is just the foundation.
          </h3>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-base text-stone-600 leading-relaxed text-pretty">
            Your site is built to perform from day one, but I don&apos;t walk
            away after launch. I stay on as your web strategist, using data to
            improve what&apos;s underperforming and building new content that
            earns search authority. More leads every&nbsp;month.
          </p>
          <Link
            href="/services/growth-strategy"
            className="inline-flex self-start items-center gap-2 text-sm font-mono font-medium text-warm-gold hover:text-amber-700 transition-colors duration-300 mt-5"
          >
            Explore growth strategy
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
          {/* ── Capability pills ── */}
          <div className="flex flex-wrap gap-3 mt-6">
            {capabilities.map(({ icon: Icon, label }) => (
              <div
                data-feature
                key={label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-stone-200 bg-white text-sm text-stone-600"
              >
                <Icon
                  className="w-3.5 h-3.5 text-stone-500 flex-shrink-0"
                  aria-hidden="true"
                />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Google SERP mockup with map pack ── */}
      <div data-visual>
        <div
          className="rounded-2xl border border-white/[0.08] bg-[#0C0B09] overflow-hidden select-none"
          role="img"
          aria-label="Google search results mockup showing a client business ranking #1"
          style={{
            boxShadow:
              "0 32px 64px -16px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Search bar */}
          <div className="px-5 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
              <Search
                className="w-4 h-4 text-stone-500 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm text-stone-300 font-mono">
                personal trainer near me
              </span>
            </div>
          </div>

          {/* Two-column: organic results (left) + map pack (right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* ── Left: organic search results ── */}
            <div className="md:col-span-7 p-5 space-y-3 md:border-r md:border-white/[0.04]">
              {/* Result 1 — YOUR CLIENT at #1 (highlighted) */}
              <div
                data-result
                className="relative rounded-lg border border-warm-gold/20 bg-warm-gold/[0.04] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs text-warm-gold font-mono mb-1 truncate">
                      your-fitness-business.com
                    </p>
                    <p className="text-sm font-semibold text-white leading-snug">
                      Your Fitness Business &mdash; Manteca&apos;s Top-Rated
                      Trainer
                    </p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className="w-3 h-3 fill-amber-400 text-amber-400"
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] text-stone-400">
                        4.9 (84 reviews)
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 mt-1.5 line-clamp-1">
                      1-on-1 personal training, group classes &amp; nutrition
                      coaching. Book your free&nbsp;consultation.
                    </p>
                  </div>
                  <span className="flex-shrink-0 flex items-center gap-1 text-[10px] font-bold text-warm-gold bg-warm-gold/10 px-2 py-1 rounded-full whitespace-nowrap">
                    <TrendUp className="w-3 h-3" aria-hidden="true" />
                    #1
                  </span>
                </div>
              </div>

              {/* Result 2 — competitor (faded) */}
              <div
                data-result
                className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-4 opacity-50"
              >
                <p className="text-xs text-stone-600 font-mono mb-1">
                  manteca-fitness-center.com
                </p>
                <p className="text-sm text-stone-400">
                  Manteca Fitness Center &amp; Gym
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Gym memberships, personal training, and group&nbsp;classes...
                </p>
              </div>

              {/* Result 3 — directory (more faded) */}
              <div
                data-result
                className="hidden sm:block rounded-lg border border-white/[0.04] bg-white/[0.02] p-4 opacity-35"
              >
                <p className="text-xs text-stone-600 font-mono mb-1">
                  generic-directory.com
                </p>
                <p className="text-sm text-stone-400">
                  Find Personal Trainers | Compare&nbsp;Rates
                </p>
                <p className="text-xs text-stone-600 mt-1">
                  Browse certified trainers in your&nbsp;area...
                </p>
              </div>
            </div>

            {/* ── Right: Google Map Pack ── */}
            <div className="md:col-span-5 p-5 border-t md:border-t-0 border-white/[0.04]">
              {/* Fake map area */}
              <div className="rounded-lg bg-[#1a1916] border border-white/[0.06] overflow-hidden mb-4">
                <div className="relative h-32 bg-[#161412]">
                  {/* Map grid lines */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                    aria-hidden="true"
                  />
                  {/* Map road lines */}
                  <div className="absolute inset-0" aria-hidden="true">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-stone-700/40" />
                    <div className="absolute top-0 bottom-0 left-1/3 w-px bg-stone-700/30" />
                    <div className="absolute top-0 bottom-0 right-1/4 w-px bg-stone-700/20" />
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-stone-700/20 rotate-12 origin-left" />
                  </div>
                  {/* Map pins */}
                  <div
                    className="absolute top-6 left-[38%] flex flex-col items-center"
                    aria-hidden="true"
                  >
                    <div className="w-5 h-5 rounded-full bg-warm-gold border-2 border-warm-bg flex items-center justify-center shadow-lg shadow-warm-gold/30">
                      <span className="text-[8px] font-bold text-warm-bg">
                        A
                      </span>
                    </div>
                  </div>
                  <div
                    className="absolute top-14 left-[55%] flex flex-col items-center opacity-50"
                    aria-hidden="true"
                  >
                    <div className="w-4 h-4 rounded-full bg-stone-500 border-2 border-warm-bg flex items-center justify-center">
                      <span className="text-[7px] font-bold text-warm-bg">
                        B
                      </span>
                    </div>
                  </div>
                  <div
                    className="absolute bottom-6 left-[25%] flex flex-col items-center opacity-40"
                    aria-hidden="true"
                  >
                    <div className="w-4 h-4 rounded-full bg-stone-500 border-2 border-warm-bg flex items-center justify-center">
                      <span className="text-[7px] font-bold text-warm-bg">
                        C
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map pack listings */}
              <div className="space-y-0">
                {mapListings.map((listing, i) => (
                  <div
                    key={i}
                    data-result
                    className={`py-3 ${
                      i > 0 ? "border-t border-white/[0.04]" : ""
                    } ${listing.highlighted ? "" : "opacity-45"}`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`text-[10px] font-bold mt-0.5 flex-shrink-0 ${
                          listing.highlighted
                            ? "text-warm-gold"
                            : "text-stone-500"
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      <div className="min-w-0">
                        <p
                          className={`text-[13px] font-semibold leading-snug ${
                            listing.highlighted
                              ? "text-white"
                              : "text-stone-400"
                          }`}
                        >
                          {listing.name}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[10px] text-stone-400">
                            {listing.rating}
                          </span>
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, j) => (
                              <Star
                                key={j}
                                className={`w-2.5 h-2.5 ${
                                  j < Math.floor(listing.rating)
                                    ? listing.highlighted
                                      ? "fill-amber-400 text-amber-400"
                                      : "fill-stone-500 text-stone-500"
                                    : "fill-none text-stone-600"
                                }`}
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <span className="text-[10px] text-stone-500">
                            ({listing.reviews})
                          </span>
                        </div>
                        <p className="text-[10px] text-stone-500 mt-0.5">
                          {listing.type} · {listing.address}
                        </p>
                        <p className="text-[10px] text-stone-500">
                          {listing.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ranking keywords bar */}
          <div className="px-5 pb-4 pt-1 border-t border-white/[0.04]">
            <p className="text-[10px] text-stone-500 uppercase tracking-wider font-mono mb-2.5">
              Ranking keywords
            </p>
            <div className="flex flex-wrap gap-2">
              {keywords.map((kw) => (
                <span
                  data-badge
                  key={kw.term}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.03] text-stone-300"
                >
                  {kw.term}
                  <span className="text-green-400 text-[9px] font-semibold">
                    {kw.trend}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
