import Link from "next/link";
import { ArrowRight, MapPin, Search, TrendingUp } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start pb-0">
      <div data-hero-copy className="lg:col-span-7 space-y-6 lg:py-10">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#004D3A]" aria-hidden="true" />
          <p className="section-label">Manteca, CA</p>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold font-display text-warm-white leading-[1.1] tracking-tight text-balance">
          Do Manteca customers find <span className="text-[#004D3A]">you</span> — or your
          competitor?
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl text-balance">
          Most local businesses have a website. Almost none of them show up when it matters — when a
          potential customer is actively searching for exactly what they offer, right here in
          Manteca. The difference isn&apos;t luck. It&apos;s how the site was built.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <PrimaryButton href="/contact" size="sm" arrow>
            Get a Free Local Audit
          </PrimaryButton>
          <Link
            href="#case-study"
            className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 rounded-lg text-[14px] font-medium text-stone-800 hover:border-[#004D3A]/30 hover:text-[#004D3A] transition-all duration-500"
          >
            See a Real Example
          </Link>
        </div>
      </div>

      {/* Right side — local search visualization */}
      <div
        data-hero-visual
        className="lg:col-span-5 flex justify-center items-start select-none"
        aria-hidden="true"
      >
        <div className="relative w-full max-w-[340px] mt-6 lg:mt-4">
          {/* Search bar mockup */}
          <div
            className="rounded-xl border border-stone-200 bg-white p-4 mb-4"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <Search className="w-4 h-4 text-stone-400" aria-hidden="true" />
              <span className="text-sm text-stone-600 font-mono">massage therapy manteca ca</span>
            </div>
            <div className="h-px bg-stone-200 mb-3" />
            <p className="text-[10px] text-stone-400 uppercase tracking-wider font-mono mb-2">
              Top Results
            </p>

            {/* Result 1 — the client */}
            <div className="rounded-lg border border-[#004D3A]/20 bg-[#004D3A]/[0.04] p-3 mb-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#004D3A]" />
                <span className="text-xs font-semibold text-warm-white">My Massage Cottage</span>
              </div>
              <p className="text-[11px] text-[#004D3A] font-mono ml-3.5">mymassagecottage.com</p>
              <p className="text-[11px] text-stone-500 ml-3.5 mt-0.5">
                Professional massage therapy in Manteca, CA
              </p>
            </div>

            {/* Result 2 — generic */}
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-3 mb-2 opacity-50">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                <span className="text-xs text-stone-500">Generic Directory Listing</span>
              </div>
              <div className="ml-3.5 space-y-1">
                <div className="h-2 w-3/4 rounded bg-stone-200" />
                <div className="h-2 w-1/2 rounded bg-stone-200" />
              </div>
            </div>

            {/* Result 3 — generic */}
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-3 opacity-40">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                <span className="text-xs text-stone-500">Another Competitor</span>
              </div>
              <div className="ml-3.5 space-y-1">
                <div className="h-2 w-2/3 rounded bg-stone-200" />
                <div className="h-2 w-2/5 rounded bg-stone-200" />
              </div>
            </div>
          </div>

          {/* Floating stat card */}
          <div
            className="absolute -bottom-4 -right-4 sm:-right-8 rounded-xl border border-stone-300/60 bg-warm-surface p-3 z-10"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-warm-green" aria-hidden="true" />
              <div>
                <p className="text-xs font-semibold text-warm-white">Page 1</p>
                <p className="text-[10px] text-stone-500">Local search results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
