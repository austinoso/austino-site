import Link from "next/link";
import { ArrowRight, MapPin, Search, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-0">
      <div data-hero-copy className="lg:col-span-7 space-y-6 lg:py-10">
        <div className="flex items-center gap-2">
          <MapPin
            className="w-4 h-4 text-cyber-accent"
            aria-hidden="true"
          />
          <p className="section-label">Manteca, CA</p>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white leading-tight tracking-tight text-balance">
          Do Manteca customers find <span className="text-cyber-accent">you</span> — or your competitor?
        </h1>
        <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-xl">
          Most local businesses have a website. Almost none of them show up
          when it matters — when a potential customer is actively searching
          for exactly what they offer, right here in Manteca. The difference
          isn&apos;t luck. It&apos;s how the site was built.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#060608] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
          >
            Get a Free Local Audit
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            href="#case-study"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.08] rounded-lg text-[14px] font-medium text-white hover:border-cyber-accent/30 hover:text-cyber-accent transition-all duration-500"
          >
            See a Real Example
          </Link>
        </div>
      </div>

      {/* Right side — local search visualization */}
      <div
        data-hero-visual
        className="lg:col-span-5 flex justify-center items-start"
      >
        <div className="relative w-full max-w-[340px] mt-6 lg:mt-4">
          {/* Search bar mockup */}
          <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <Search
                className="w-4 h-4 text-cyber-gray-500"
                aria-hidden="true"
              />
              <span className="text-sm text-cyber-gray-300 font-mono">
                massage therapy manteca ca
              </span>
            </div>
            <div className="h-px bg-white/[0.06] mb-3" />
            <p className="text-[10px] text-cyber-gray-500 uppercase tracking-wider font-mono mb-2">
              Top Results
            </p>

            {/* Result 1 — the client */}
            <div className="rounded-lg border border-cyber-accent/20 bg-cyber-accent/[0.04] p-3 mb-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-accent" />
                <span className="text-xs font-semibold text-white">
                  My Massage Cottage
                </span>
              </div>
              <p className="text-[11px] text-cyber-accent/80 font-mono ml-3.5">
                mymassagecottage.com
              </p>
              <p className="text-[11px] text-cyber-gray-400 ml-3.5 mt-0.5">
                Professional massage therapy in Manteca, CA
              </p>
            </div>

            {/* Result 2 — generic */}
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.015] p-3 mb-2 opacity-50">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-gray-500" />
                <span className="text-xs text-cyber-gray-400">
                  Generic Directory Listing
                </span>
              </div>
              <div className="ml-3.5 space-y-1">
                <div className="h-2 w-3/4 rounded bg-white/[0.04]" />
                <div className="h-2 w-1/2 rounded bg-white/[0.04]" />
              </div>
            </div>

            {/* Result 3 — generic */}
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.015] p-3 opacity-40">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-gray-500" />
                <span className="text-xs text-cyber-gray-400">
                  Another Competitor
                </span>
              </div>
              <div className="ml-3.5 space-y-1">
                <div className="h-2 w-2/3 rounded bg-white/[0.04]" />
                <div className="h-2 w-2/5 rounded bg-white/[0.04]" />
              </div>
            </div>
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-4 -right-4 sm:-right-8 rounded-lg border border-white/[0.08] bg-[#111318]/95 backdrop-blur-sm p-3 z-10">
            <div className="flex items-center gap-2">
              <TrendingUp
                className="w-4 h-4 text-[#4ADE80]"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold text-white">Page 1</p>
                <p className="text-[10px] text-cyber-gray-500">
                  Local search results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
