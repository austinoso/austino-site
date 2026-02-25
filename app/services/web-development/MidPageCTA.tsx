import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MidPageCTA() {
  return (
    <section data-fade className="mb-24 sm:mb-32">
      <div className="rounded-lg border border-cyber-accent/20 bg-white/[0.015] p-8 sm:p-10 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(64,224,255,0.04), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-lg sm:text-xl font-bold font-display text-white mb-2">
              Seen enough?
            </p>
            <p className="text-sm sm:text-base text-cyber-gray-300 leading-relaxed max-w-lg">
              Tell me about your business and I&apos;ll put together a clear
              plan — no commitment, no pressure.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#060608] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)] flex-shrink-0 w-full sm:w-auto"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
