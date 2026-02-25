import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section data-fade>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
        <div className="max-w-xl">
          <p className="section-label mb-4">Get Started</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4">
            What&apos;s eating your time?
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
            Tell me what&apos;s slowing you down and I&apos;ll map out exactly
            what can be automated — and what it would save you.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-[#060608] font-semibold text-base rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)] w-full sm:w-auto"
          >
            <span>Start a Conversation</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/[0.06] mt-10 pt-6">
        <Link
          href="/services/growth-strategy"
          className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors duration-300"
        >
          Need more customers, not just more efficiency? See Growth Strategy
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
