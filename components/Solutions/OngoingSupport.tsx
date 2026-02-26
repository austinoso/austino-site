import {
  BarChart3,
  PenTool,
  TrendingUp,
  ArrowRight,
  Search,
  Star,
  TrendingUp as TrendUp,
} from "lucide-react";
import Link from "next/link";

const keywords = [
  { term: "personal trainer near me", trend: "+24%" },
  { term: "gym Manteca", trend: "+18%" },
  { term: "weight loss coach", trend: "+31%" },
  { term: "strength training", trend: "+12%" },
  { term: "fitness classes Manteca", trend: "+9%" },
];

export default function OngoingSupport() {
  return (
    <div
      data-subsection
      className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
    >
      <div data-content className="lg:col-span-5 space-y-5">
        <div className="inline-flex items-center gap-2">
          <span className="section-label">Growth Strategy</span>
        </div>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-snug">
          Most websites collect dust. Yours keeps climbing.
        </h3>
        <p className="text-base text-cyber-gray-300 leading-relaxed">
          Most businesses treat their site as a one-time project. I stay on as
          your web strategist — using data to improve what&apos;s
          underperforming and building new content that earns search authority,
          so your site generates more leads every month.
        </p>
        <div className="pt-4 space-y-4">
          <div data-feature className="flex items-start gap-3">
            <BarChart3
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">
                Conversion Optimization
              </p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                I track what&apos;s working and what&apos;s not &mdash; then fix
                the pages that aren&apos;t turning visitors into customers
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <PenTool
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">
                Content That Ranks
              </p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                New service pages, FAQ content, and local landing pages that
                rank for the searches your customers actually make
              </p>
            </div>
          </div>
          <div data-feature className="flex items-start gap-3">
            <TrendingUp
              className="w-4 h-4 text-cyber-accent flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium text-white">Growth Planning</p>
              <p className="text-xs text-cyber-gray-400 mt-0.5">
                Email campaigns, AI chatbots, retargeting &mdash; I map out the
                next move that drives more sales, then build&nbsp;it
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/services/growth-strategy"
          className="inline-flex items-center gap-2 text-sm font-mono text-cyber-accent hover:text-white transition-colors duration-300 mt-6"
        >
          Explore growth strategy{" "}
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>

      {/* Search ranking mockup — shows the client at #1 */}
      <div data-visual className="lg:col-span-7">
        <div
          className="rounded-xl border border-white/[0.08] bg-[#0C0D12] overflow-hidden"
          style={{
            boxShadow:
              "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Search bar */}
          <div className="px-5 py-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
              <Search
                className="w-4 h-4 text-cyber-gray-500 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm text-cyber-gray-300 font-mono">
                personal trainer near me
              </span>
            </div>
          </div>

          {/* Search results */}
          <div className="p-5 space-y-3">
            {/* Result 1 — YOUR CLIENT at #1 (highlighted) */}
            <div
              data-result
              className="relative rounded-lg border border-cyber-accent/20 bg-cyber-accent/[0.04] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs text-cyber-accent font-mono mb-1 truncate">
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
                    <span className="text-[10px] text-cyber-gray-400">
                      4.9 (84 reviews)
                    </span>
                  </div>
                  <p className="text-xs text-cyber-gray-400 mt-1.5 line-clamp-1">
                    1-on-1 personal training, group classes &amp; nutrition
                    coaching. Book your free&nbsp;consultation.
                  </p>
                </div>
                <span className="flex-shrink-0 flex items-center gap-1 text-[10px] font-bold text-cyber-accent bg-cyber-accent/10 px-2 py-1 rounded-full whitespace-nowrap">
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
              <p className="text-xs text-cyber-gray-600 font-mono mb-1">
                manteca-fitness-center.com
              </p>
              <p className="text-sm text-cyber-gray-400">
                Manteca Fitness Center &amp; Gym
              </p>
              <p className="text-xs text-cyber-gray-600 mt-1">
                Gym memberships, personal training, and group&nbsp;classes...
              </p>
            </div>

            {/* Result 3 — directory (more faded) */}
            <div
              data-result
              className="rounded-lg border border-white/[0.04] bg-white/[0.02] p-4 opacity-35"
            >
              <p className="text-xs text-cyber-gray-600 font-mono mb-1">
                generic-directory.com
              </p>
              <p className="text-sm text-cyber-gray-400">
                Find Personal Trainers | Compare&nbsp;Rates
              </p>
              <p className="text-xs text-cyber-gray-600 mt-1">
                Browse certified trainers in your&nbsp;area...
              </p>
            </div>
          </div>

          {/* Ranking keywords bar */}
          <div className="px-5 pb-4 pt-1 border-t border-white/[0.04]">
            <p className="text-[10px] text-cyber-gray-500 uppercase tracking-wider font-mono mb-2.5">
              Ranking keywords
            </p>
            <div className="flex flex-wrap gap-2">
              {keywords.map((kw) => (
                <span
                  data-badge
                  key={kw.term}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.03] text-cyber-gray-300"
                >
                  {kw.term}
                  <span className="text-[#4ADE80] text-[9px] font-semibold">
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
