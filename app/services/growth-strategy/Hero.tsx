import Link from "next/link";
import {
  ArrowRight,
  Search,
  Star,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center pb-14 sm:pb-16 lg:pb-20">
      <div data-hero-copy className="lg:col-span-6 space-y-6 lg:py-10">
        <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold font-display text-warm-white leading-[1.1] tracking-tight text-balance">
          Launched is just{" "}
          <span className="text-gradient-gold">the starting line.</span>
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
          Most business websites stop working the day they launch. Yours
          doesn&apos;t have to.
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-sm rounded-lg transition-all duration-300 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg"
        >
          Get a Free Consultation
          <ArrowRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>

      {/* Google search results mockup */}
      <div data-hero-visual className="lg:col-span-6" aria-hidden="true">
        <div className="rounded-xl border border-white/[0.08] bg-[#0C0B09] overflow-hidden select-none" style={{ boxShadow: '12px 12px 0px 0px #CEC8C1' }}>
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06] bg-[#0F0E0B]">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/70" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-1.5 px-4 py-1 rounded-md bg-white/[0.04] text-[11px] text-stone-500 font-mono">
                google.com/search
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="px-5 sm:px-6 pt-5 pb-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03]">
              <Search className="w-4 h-4 text-stone-400 flex-shrink-0" />
              <span className="text-sm text-stone-200 font-normal">
                best personal trainer near me
              </span>
            </div>
            <p className="text-[11px] text-stone-500 mt-3 pl-1">
              About 3,100 results
            </p>
          </div>

          {/* Search results */}
          <div className="px-5 sm:px-6 py-2">
            {/* Result #1 — YOUR business, highlighted */}
            <div className="py-4 -mx-3 px-3 rounded-lg bg-warm-gold/[0.04] border border-warm-gold/[0.08]">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-warm-gold/20 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-warm-gold">Y</span>
                </div>
                <span className="text-[11px] text-stone-400">
                  yourbusiness.com
                </span>
              </div>
              <p className="text-[15px] text-[#8AB4F8] leading-snug mb-1 font-medium">
                Personal Training — Programs & Free Consultation
              </p>
              <p className="text-xs text-stone-400 leading-relaxed mb-2.5">
                Certified personal training in downtown Fresno. Customized
                programs for weight loss, strength, and mobility. Book a free
                30-minute consultation today.
              </p>
              {/* Rich snippets row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-stone-400 ml-0.5">
                    4.9 (127)
                  </span>
                </div>
                <span className="flex items-center gap-1 text-[10px] text-stone-400">
                  <MapPin className="w-2.5 h-2.5" />
                  Downtown Fresno
                </span>
                <span className="flex items-center gap-1 text-[10px] text-stone-400">
                  <Clock className="w-2.5 h-2.5" />
                  Opens 6 AM
                </span>
              </div>
              {/* Sitelinks */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3 pt-3 border-t border-white/[0.04]">
                {[
                  "Weight Loss Programs",
                  "1-on-1 Training",
                  "Group Classes",
                  "Free Consultation",
                ].map((link) => (
                  <span key={link} className="text-[11px] text-[#8AB4F8]">
                    {link}
                  </span>
                ))}
              </div>
              {/* Active strategy badge */}
              <div className="flex items-center gap-1.5 mt-3">
                <CheckCircle2 className="w-3 h-3 text-green-400" />
                <span className="text-[10px] text-green-400 font-mono">
                  Updated this week · 14 pages · Growth strategy active
                </span>
              </div>
            </div>

            {/* Result #2 — competitor, decent but stale.
                On mobile: clip to just the business name + fade out */}
            <div className="relative py-4 border-b border-white/[0.04] sm:border-b">
              {/* Mobile fade-out mask */}
              <div
                className="sm:hidden absolute inset-x-0 bottom-0 h-16 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, #0C0B09)",
                }}
              />
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center">
                  <span className="text-[9px] font-medium text-stone-500">
                    I
                  </span>
                </div>
                <span className="text-[11px] text-stone-500">
                  ironworksgym.com
                </span>
              </div>
              <p className="text-[15px] text-[#8AB4F8]/60 leading-snug mb-1">
                Certified Personal Trainers — All Levels
              </p>
              <p className="hidden sm:block text-xs text-stone-500 leading-relaxed mb-1">
                Our trainers are certified and experienced. Contact us for more
                information about personal training.
              </p>
              <p className="hidden sm:block text-[10px] text-stone-600 font-mono">
                Last updated 8 months ago · 3 pages
              </p>
            </div>

            {/* Result #3 — competitor, very stale (hidden on mobile) */}
            <div className="hidden sm:block py-4">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center">
                  <span className="text-[9px] font-medium text-stone-500">
                    P
                  </span>
                </div>
                <span className="text-[11px] text-stone-500">
                  peakperformance.co
                </span>
              </div>
              <p className="text-[15px] text-[#8AB4F8]/40 leading-snug mb-1">
                Peak Performance — Home
              </p>
              <p className="text-xs text-stone-600 leading-relaxed mb-1">
                Welcome to Peak Performance. We offer personal training
                services.
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
