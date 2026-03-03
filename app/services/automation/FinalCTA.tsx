import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section data-fade>
      {/* Dark card — echoes homepage CTA */}
      <div
        className="dark-section relative rounded-2xl overflow-hidden px-8 sm:px-10 md:px-12 py-10 sm:py-14 md:py-16"
        style={{
          backgroundColor: "#1C1917",
          backgroundImage: [
            "radial-gradient(ellipse 70% 50% at 85% 80%, rgba(251,191,36,0.07), rgba(244,114,182,0.04) 50%, transparent 100%)",
            "radial-gradient(ellipse 55% 45% at 10% 90%, rgba(244,114,182,0.05), transparent 70%)",
            "radial-gradient(ellipse 45% 35% at 50% 10%, rgba(167,139,250,0.03), transparent 70%)",
          ].join(", "),
        }}
      >
        {/* Top gradient edge */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(251,191,36,0.10) 30%, rgba(244,114,182,0.07) 60%, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold font-display text-white leading-snug tracking-tight text-balance mb-4">
              What&apos;s eating{" "}
              <span className="text-gradient-brand">your time?</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
              Tell me what&apos;s slowing you down and I&apos;ll map out exactly
              what can be automated, and what it would save you.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-base rounded-lg transition-all duration-300 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#1C1917] w-full sm:w-auto"
            >
              <span>Map Out Your Savings</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-200 mt-10 pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <Link
          href="/services/growth-strategy"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-warm-white transition-colors duration-300"
        >
          Need more customers, not just more efficiency? See Growth Strategy
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
        <Link
          href="/services/web-development"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-warm-white transition-colors duration-300"
        >
          Need a site that converts first? See Web Development
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
