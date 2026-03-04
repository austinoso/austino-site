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
];

export default function OngoingSupport() {
  return (
    <div data-subsection>
      {/* ── Top row: label + heading + description side by side ── */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-10">
        <div>
          <span className="section-label block mb-5">Growth Strategy</span>
          <h3 className="font-display text-2xl sm:text-3xl md:text-[2.5rem] font-bold text-warm-white leading-[1.15] tracking-tight text-balance">
            A great site is just the foundation.
          </h3>
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
        <div className="flex flex-col justify-end">
          <p className="text-base text-stone-600 leading-relaxed text-pretty">
            After launch, I stay on as your web strategist. I use real data to
            fix what&apos;s underperforming and publish the kind of content
            Google rewards with higher rankings. Each month builds on
            the&nbsp;last.
          </p>
          <Link
            href="/services/growth-strategy"
            className="inline-flex self-start items-center gap-2 text-sm font-mono font-medium text-warm-gold hover:text-amber-700 transition-colors duration-300 mt-5"
          >
            Explore growth strategy
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* ── Google SERP mockup with map pack ── */}
      <div data-visual>
        <div
          className="rounded-xl border border-stone-300 bg-[#F0EAE2] overflow-hidden select-none"
          style={{
            boxShadow: "12px 12px 0px 0px #C4B5A0, 0 8px 32px rgba(0,0,0,0.08)",
          }}
          role="img"
          aria-label="Google search results mockup showing a client business ranking #1"
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-stone-300 bg-[#E8E2DA]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/85" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/85" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/85" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-1.5 px-4 py-1 rounded-md bg-[#F7F4F0] text-[11px] text-stone-500 font-mono">
                google.com/search
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-stone-200/60 bg-white">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-stone-200">
              <Search
                className="w-4 h-4 text-stone-400 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm text-stone-700 font-normal">
                personal trainer near me
              </span>
            </div>
          </div>

          {/* Two-column: organic results (left) + map pack (right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* ── Left: organic search results ── */}
            <div className="md:col-span-7 p-5 space-y-3 md:border-r md:border-stone-200/60 bg-white">
              {/* Result 1 — YOUR CLIENT at #1 (highlighted) */}
              <div
                data-result
                className="relative rounded-lg border border-warm-gold/15 bg-warm-gold/[0.06] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs text-warm-gold font-mono mb-1 truncate">
                      your-fitness-business.com
                    </p>
                    <p className="text-sm font-medium text-[#4663AC] leading-snug">
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
                      <span className="text-[10px] text-stone-500">
                        4.9 (84 reviews)
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1.5 line-clamp-1">
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
                className="py-4 border-b border-stone-200/60 opacity-50"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center">
                    <span className="text-[9px] font-medium text-stone-500">
                      M
                    </span>
                  </div>
                  <span className="text-xs text-stone-500 font-mono">
                    manteca-fitness-center.com
                  </span>
                </div>
                <p className="text-sm text-[#4663AC]/60 leading-snug mb-1">
                  Manteca Fitness Center &amp; Gym
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Gym memberships, personal training, and group&nbsp;classes...
                </p>
              </div>

              {/* Result 3 — directory (more faded) */}
              <div data-result className="hidden sm:block py-4 opacity-35">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center">
                    <span className="text-[9px] font-medium text-stone-500">
                      G
                    </span>
                  </div>
                  <span className="text-xs text-stone-500 font-mono">
                    generic-directory.com
                  </span>
                </div>
                <p className="text-sm text-[#4663AC]/40 leading-snug mb-1">
                  Find Personal Trainers | Compare&nbsp;Rates
                </p>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Browse certified trainers in your&nbsp;area...
                </p>
              </div>
            </div>

            {/* ── Right: Google Map Pack ── */}
            <div className="hidden md:block md:col-span-5 p-5 border-t md:border-t-0 border-stone-200/60 bg-white">
              {/* Fake map area */}
              <div className="rounded-lg bg-[#F4F1EC] border border-stone-200 overflow-hidden mb-4">
                <div className="relative h-32 bg-[#F9F7F4]">
                  {/* Map grid lines */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                    aria-hidden="true"
                  />
                  {/* Map road lines */}
                  <div className="absolute inset-0" aria-hidden="true">
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-stone-400/40" />
                    <div className="absolute top-0 bottom-0 left-1/3 w-px bg-stone-400/30" />
                    <div className="absolute top-0 bottom-0 right-1/4 w-px bg-stone-400/20" />
                    <div className="absolute top-1/4 left-0 right-0 h-px bg-stone-400/20 rotate-12 origin-left" />
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
                </div>
              </div>

              {/* Map pack listings */}
              <div className="space-y-0">
                {mapListings.map((listing, i) => (
                  <div
                    key={i}
                    data-result
                    className={`py-3 ${
                      i > 0 ? "border-t border-stone-200/60" : ""
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
                              ? "text-stone-900"
                              : "text-stone-600"
                          }`}
                        >
                          {listing.name}
                        </p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-[10px] text-stone-500">
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
          <div className="px-5 pb-4 pt-1 border-t border-stone-200/60 bg-white">
            <p className="text-[10px] text-stone-500 uppercase tracking-wider font-mono mb-2.5">
              Ranking keywords
            </p>
            <div className="flex flex-wrap gap-2">
              {keywords.map((kw) => (
                <span
                  data-badge
                  key={kw.term}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border border-stone-200/60 bg-[#F7F4F0] text-stone-600"
                >
                  {kw.term}
                  <span className="text-[#5C8A64] text-[9px] font-semibold">
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
