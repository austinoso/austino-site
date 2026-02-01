import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="relative w-full py-32 bg-[#050505]"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-8 md:px-0">
        {/* Breadcrumb Header */}
        <div className="mb-8">
          <span className="text-[8pt] font-mono text-cyber-cyan tracking-wide">
            // READY_TO_BUILD
          </span>
        </div>

        {/* Main CTA Content */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-8">
          {/* Left: Headline & Description */}
          <div className="flex-1 max-w-3xl">
            <h2
              id="cta-heading"
              className="text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight"
            >
              Let's build something
              <br />
              <span className="text-cyber-cyan">worth shipping.</span>
            </h2>
            <p className="text-lg text-cyber-gray-400 max-w-2xl">
              Whether you need a technical partner to bring your product to
              life, optimize your operations, or validate your roadmap—I'm here
              to help you move fast and build smart.
            </p>

            {/* Status Indicator */}
            <div className="mt-8 inline-flex items-center gap-2 text-[9pt] font-mono">
              <span className="text-cyber-gray-500">[ STATUS:</span>
              <span className="text-green-400">ACCEPTING_NEW_PROJECTS</span>
              <span className="text-cyber-gray-500">// 2026_Q1 ]</span>
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-cyber-accent text-black font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.5)]"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Response Time Note */}
            <p className="mt-4 text-xs font-mono text-cyber-gray-600 text-right">
              // RESPONSE_TIME: ~24HRS
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 pt-8 border-t border-cyber-gray-800">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm font-mono text-cyber-gray-600">
            <span>// CURRENT_AVAILABILITY: LIMITED_SLOTS</span>
            <span>// BOOKING: FIRST_COME_FIRST_SERVE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
