import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroDemoLoader from "./HeroDemoLoader";

/* ─────────────────────────────────────────────────────────────────── */
/*  Hero — Server component.                                          */
/*  The h1/copy is in the initial HTML (fast LCP).                    */
/*  The animated demo loads via the HeroDemo client component.        */
/* ─────────────────────────────────────────────────────────────────── */

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/[0.06]"
      style={{
        backgroundColor: "rgba(6,6,8,0.82)",
        backgroundImage: [
          "radial-gradient(ellipse 80% 70% at 10% 15%, rgba(64,224,255,0.10), rgba(167,139,250,0.07) 45%, transparent 100%)",
          "radial-gradient(ellipse 50% 55% at 95% 90%, rgba(251,191,36,0.06), rgba(244,114,182,0.05) 40%, transparent 70%)",
          "radial-gradient(ellipse 35% 40% at 85% 35%, rgba(74,222,128,0.04), rgba(64,224,255,0.02) 50%, transparent 70%)",
        ].join(", "),
      }}
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-20 pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ─── Left column: copy (server-rendered for fast LCP) ─── */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="section-label mb-5 sm:mb-6">
              Web Strategy &amp; Engineering
            </span>

            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-[1.1] tracking-tight"
            >
              Websites built to{" "}
              <span className="text-gradient">outperform.</span>
            </h1>

            <p className="mt-6 sm:mt-7 text-[15px] sm:text-base text-cyber-gray-400 leading-relaxed max-w-md">
              High-performance engineering paired with smart automation — giving
              local businesses a technical edge that no template can match.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#060608] font-semibold rounded-lg transition-all text-[15px] hover:brightness-110"
                aria-label="Get a free consultation"
                data-umami-event="hero-cta"
              >
                Get a Free Consultation
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="mt-7 flex items-center gap-3 text-sm text-cyber-gray-500">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
              Based in California&apos;s Central Valley
            </div>
          </div>

          {/* ─── Demo column (client component for animations) ─── */}
          <div className="lg:col-span-7">
            <HeroDemoLoader />
          </div>
        </div>
      </div>
    </section>
  );
}
