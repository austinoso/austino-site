import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section data-fade>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
        <div className="max-w-xl">
          <p className="section-label mb-4">Get Started</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4">
            Let&apos;s get your Manteca business found.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
            One conversation. I&apos;ll look at your current site, show you
            where you stand in local search, and map out what it would take to
            start showing up — whether we work together or not.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-[#060608] font-semibold text-base rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)] w-full sm:w-auto"
          >
            <span>Get a Free Local Audit</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/[0.06] mt-10 pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8">
        <Link
          href="/services/web-development"
          className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors duration-300"
        >
          Learn more about web development
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
        <Link
          href="/services/growth-strategy"
          className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors duration-300"
        >
          Want ongoing growth after launch? See Growth Strategy
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
