import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section data-fade>
      {/* Dark card — echoes homepage CTA */}
      <div className="dark-section relative rounded-2xl overflow-hidden px-8 sm:px-10 md:px-12 py-10 sm:py-14 md:py-16 bg-[#1C1917]">
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
            <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-[1.2] tracking-tight text-balance mb-5">
              Built to grow{" "}
              <span className="text-gradient-gold">from day one.</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-300 leading-relaxed text-pretty">
              Growth strategy comes standard with every Build + Grow project.
              Your site launches with momentum already behind it, and I keep
              pushing it forward.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-base rounded-lg transition-all duration-300 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#1C1917] w-full sm:w-auto"
            >
              <span>Start a Conversation</span>
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
          href="/services/automation"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-warm-white transition-colors duration-300"
        >
          Still handling tasks manually? See how automation can help
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
        <Link
          href="/services/web-development"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-warm-white transition-colors duration-300"
        >
          See what comes with the site itself
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
