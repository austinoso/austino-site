import Link from "next/link";
import { ArrowRight, Search, MapPin } from "lucide-react";
import HeroDemoLoader from "./HeroDemoLoader";

/* ─────────────────────────────────────────────────────────────────── */
/*  Hero — Server component.  Editorial layout:                       */
/*  Text-dominant left (7 cols) + supporting demo right (5 cols).     */
/*  Headline is the star. Demo is proof, not spectacle.               */
/* ─────────────────────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-warm-bg"
      aria-labelledby="hero-heading"
    >
      {/* Decorative circles — amber wash, layered */}
      <div
        className="absolute -right-[16rem] sm:-right-[12rem] md:-right-[16rem] top-6 sm:top-12 md:top-16 w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] md:w-[32rem] md:h-[32rem] rounded-full pointer-events-none"
        style={{ background: "rgba(180, 83, 9, 0.06)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-[10rem] sm:-right-[6rem] md:-right-[8rem] top-[14rem] sm:top-[18rem] md:top-[22rem] w-[12rem] h-[12rem] sm:w-[14rem] sm:h-[14rem] md:w-[18rem] md:h-[18rem] rounded-full pointer-events-none"
        style={{ background: "rgba(180, 83, 9, 0.04)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-20 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ─── Text column — dominant ─── */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="section-label mb-5 sm:mb-6">
              For Local Businesses
            </span>

            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4.5rem] font-bold text-warm-white leading-[1.06] tracking-tight"
            >
              Websites built{" "}
              <span className="text-gradient-brand">to&nbsp;outperform.</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl text-pretty">
              Built to earn trust from the first click and drive more sales.
              Ongoing strategy helps your business show up higher on Google and
              keeps improving results month after month.
            </p>

            {/* ─── CTA pair ─── */}
            <div className="mt-9 sm:mt-10 flex flex-wrap items-center gap-x-7 gap-y-5">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg transition-all duration-200 text-[15px] hover:brightness-110 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg"
                aria-label="Get a free consultation"
                data-umami-event="hero-cta"
              >
                Book a Free Strategy Call
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-stone-500 hover:text-warm-gold transition-colors duration-200"
                data-umami-event="hero-secondary-cta"
              >
                See Selected Work
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* ─── Trust signals ─── */}
            <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg bg-stone-50 border border-stone-200 px-3.5 py-1.5 text-[13px] font-medium text-stone-600">
                <Search
                  className="w-3.5 h-3.5 text-amber-700 flex-shrink-0"
                  aria-hidden="true"
                />
                Built for Google&nbsp;&&nbsp;your&nbsp;customers
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-stone-50 border border-stone-200 px-3.5 py-1.5 text-[13px] font-medium text-stone-600">
                <MapPin
                  className="w-3.5 h-3.5 text-amber-700 flex-shrink-0"
                  aria-hidden="true"
                />
                California based
                <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
            </div>
          </div>

          {/* ─── Demo column — supporting visual ─── */}
          <div className="lg:col-span-5">
            <div
              className="rounded-xl"
              style={{
                boxShadow:
                  "12px 12px 0px 0px #C4B5A0, 0 8px 32px rgba(0,0,0,0.08)",
              }}
            >
              <HeroDemoLoader />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Brand gradient bottom border ─── */}
      <div
        className="absolute bottom-0 inset-x-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, #B45309 25%, #DB2777 50%, #7C3AED 75%, transparent 95%)",
          opacity: 0.7,
        }}
        aria-hidden="true"
      />
    </section>
  );
}
