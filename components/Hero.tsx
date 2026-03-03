import Link from "next/link";
import { ArrowRight, Search, Phone, Code2 } from "lucide-react";
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
      <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-20 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ─── Text column — dominant ─── */}
          <div className="lg:col-span-7 flex flex-col">
            <span className="section-label mb-5 sm:mb-6">
              Web Strategy & Engineering
            </span>

            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold text-warm-white leading-[1.08] tracking-tight"
            >
              Websites built{" "}
              <span className="text-gradient-brand">to&nbsp;outperform.</span>
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-stone-600 leading-relaxed max-w-lg text-pretty">
              A fast, custom-built site that ranks on Google and turns visitors
              into customers. Then a growth strategy that keeps it climbing
              every month.
            </p>

            {/* ─── CTA pair ─── */}
            <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-lg transition-all duration-200 text-[15px] hover:brightness-110 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg"
                aria-label="Get a free consultation"
                data-umami-event="hero-cta"
              >
                Get a Free Consultation
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-[15px] font-medium text-stone-600 hover:text-warm-gold transition-colors duration-200"
                data-umami-event="hero-secondary-cta"
              >
                Recent Projects
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* ─── Trust strip ─── */}
            <div className="mt-8 pt-5 border-t border-stone-200 space-y-2.5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5">
                {[
                  { Icon: Search, text: "Rank on Google" },
                  { Icon: Phone, text: "More Calls &\u00A0Bookings" },
                  { Icon: Code2, text: "Custom-Built Code" },
                ].map(({ Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 text-sm text-stone-500"
                  >
                    <Icon
                      className="w-3.5 h-3.5 text-amber-600/70"
                      aria-hidden="true"
                    />
                    {text}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm text-stone-600">
                <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Based in California&apos;s Central Valley
              </span>
            </div>
          </div>

          {/* ─── Demo column — supporting visual ─── */}
          <div className="lg:col-span-5">
            <HeroDemoLoader />
          </div>
        </div>
      </div>

      {/* ─── Brand gradient bottom border ─── */}
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 5%, #B45309 25%, #DB2777 50%, #7C3AED 75%, transparent 95%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
