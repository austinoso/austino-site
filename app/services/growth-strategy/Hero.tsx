import Link from "next/link";
import { ArrowRight, Search, Star, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center pb-14 sm:pb-16 lg:pb-20">
      <div data-hero-copy className="lg:col-span-6 space-y-6 lg:py-10">
        <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold font-display text-warm-white leading-[1.1] tracking-tight text-balance">
          Launched is just <span className="text-[#004D3A]">the starting line.</span>
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
          New pages targeting real searches. Optimization driven by real data. The strategy Google
          wants from its page one sites.
        </p>
        <PrimaryButton href="/contact" size="sm" arrow>
          Get a Free Consultation
        </PrimaryButton>
      </div>

      {/* Google search results mockup */}
      <div data-hero-visual className="lg:col-span-6" aria-hidden="true">
        <div
          className="rounded-xl border border-stone-300 bg-[#F0EAE2] overflow-hidden select-none"
          style={{
            boxShadow: "12px 12px 0px 0px #A8CCBF, 0 8px 32px rgba(0,0,0,0.08)",
          }}
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
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-stone-200 bg-white">
              <Search className="w-4 h-4 text-stone-400 flex-shrink-0" />
              <span className="text-sm text-stone-700 font-normal">
                best personal trainer near me
              </span>
            </div>
            <p className="text-[11px] text-stone-500 mt-3 pl-1">About 3,100 results</p>
          </div>

          {/* Search results */}
          <div className="px-5 sm:px-6 py-2 bg-white">
            {/* Result #1 — YOUR business, highlighted */}
            <div className="py-4 -mx-3 px-3 rounded-lg bg-[#004D3A]/[0.06] border border-[#004D3A]/15">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-[#004D3A]/20 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-[#004D3A]">Y</span>
                </div>
                <span className="text-[11px] text-stone-500">yourbusiness.com</span>
              </div>
              <p className="text-[15px] text-[#4663AC] leading-snug mb-1 font-medium">
                Personal Training — Programs & Free Consultation
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mb-2.5">
                Certified personal training in downtown Modesto. Customized programs for weight
                loss, strength, and mobility. Book a free 30-minute consultation today.
              </p>
              {/* Rich snippets row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-500 ml-0.5">4.9 (127)</span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-stone-500">
                  <MapPin className="w-2.5 h-2.5" />
                  Downtown Fresno
                </span>
                <span className="flex items-center gap-1 text-[10px] text-stone-500">
                  <Clock className="w-2.5 h-2.5" />
                  Opens 6 AM
                </span>
              </div>
              {/* Sitelinks */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3 pt-3 border-t border-stone-200/60">
                {[
                  "Weight Loss Programs",
                  "1-on-1 Training",
                  "Group Classes",
                  "Free Consultation",
                ].map((link) => (
                  <span key={link} className="text-[11px] text-[#4663AC]">
                    {link}
                  </span>
                ))}
              </div>
              {/* Active strategy badge */}
              <div className="flex items-center gap-1.5 mt-3">
                <CheckCircle2 className="w-3 h-3 text-[#5C8A64]" />
                <span className="text-[10px] text-[#5C8A64] font-mono">
                  Updated this week · 14 pages · Growth strategy active
                </span>
              </div>
            </div>

            {/* Result #2 — competitor, decent but stale.
                On mobile: clip to just the business name + fade out */}
            <div className="relative py-4 border-b border-stone-200/60 sm:border-b">
              {/* Mobile fade-out mask */}
              <div
                className="sm:hidden absolute inset-x-0 bottom-0 h-16 pointer-events-none z-10"
                style={{
                  background: "linear-gradient(to bottom, transparent, white)",
                }}
              />
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center">
                  <span className="text-[9px] font-medium text-stone-500">I</span>
                </div>
                <span className="text-[11px] text-stone-500">ironworksgym.com</span>
              </div>
              <p className="text-[15px] text-[#4663AC]/60 leading-snug mb-1">
                Certified Personal Trainers — All Levels
              </p>
              <p className="hidden sm:block text-xs text-stone-500 leading-relaxed mb-1">
                Our trainers are certified and experienced. Contact us for more information about
                personal training.
              </p>
              <p className="hidden sm:block text-[10px] text-stone-600 font-mono">
                Last updated 8 months ago · 3 pages
              </p>
            </div>

            {/* Result #3 — competitor, very stale (hidden on mobile) */}
            <div className="hidden sm:block py-4">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-stone-200 flex items-center justify-center">
                  <span className="text-[9px] font-medium text-stone-500">P</span>
                </div>
                <span className="text-[11px] text-stone-500">peakperformance.co</span>
              </div>
              <p className="text-[15px] text-[#4663AC]/40 leading-snug mb-1">
                Peak Performance — Home
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mb-1">
                Welcome to Peak Performance. We offer personal training services.
              </p>
              <p className="text-[10px] text-stone-600 font-mono">
                Last updated 2 years ago · 1 page
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
