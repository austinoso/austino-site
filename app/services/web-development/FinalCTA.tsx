import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section data-fade>
      {/* Divider */}
      <div className="h-px bg-stone-200 mb-14 sm:mb-16" />

      <p className="text-xs font-semibold text-[#004D3A] uppercase tracking-[0.2em] mb-5">
        Next Step
      </p>

      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-stone-900 leading-[1.1] tracking-tight max-w-2xl">
        Let&apos;s build something that{" "}
        <span className="text-stone-500">actually brings in customers.</span>
      </h2>

      <p className="mt-5 text-base sm:text-lg text-stone-500 leading-relaxed max-w-xl">
        Tell me about your business and what you need the site to do. I&apos;ll put together a clear
        plan with timeline and cost.
      </p>

      {/* CTA link */}
      <div className="mt-10 sm:mt-12 flex items-center gap-4">
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#004D3A] hover:text-[#003328] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#004D3A]/40 focus:ring-offset-2"
        >
          <span>Get Your Free Plan</span>
          <ArrowRight
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
        <span className="text-[11px] font-mono text-stone-500">Free, no commitment</span>
      </div>

      {/* Cross-links */}
      <div className="border-t border-stone-200 mt-10 pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <Link
          href="/services/growth-strategy"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-warm-white transition-colors duration-300"
        >
          Want ongoing growth after launch? See Growth Strategy
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
        <Link
          href="/services/automation"
          className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-warm-white transition-colors duration-300"
        >
          Still doing things manually? See Automation
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
