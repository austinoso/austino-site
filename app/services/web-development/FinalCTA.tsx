import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section data-fade>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-5">
            Let&apos;s build something that{" "}
            <span className="text-gradient-gold">
              actually brings in customers.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            One conversation. I&apos;ll review what you have, show you
            what&apos;s possible, and map out a plan — whether we work together
            or not.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-base rounded-lg transition-all duration-300 hover:brightness-110 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg w-full sm:w-auto"
          >
            <span>Start a Conversation</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
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
