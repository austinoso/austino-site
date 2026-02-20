import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section data-fade>
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
        <div className="max-w-xl">
          <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
            Get Started
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight tracking-tight text-balance mb-4">
            Let&apos;s build something that actually converts.
          </h2>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
            One conversation. I&apos;ll audit what you have, show you
            what&apos;s possible, and map out a plan — whether we work together
            or not.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-black font-semibold text-base rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.4)] w-full sm:w-auto"
          >
            <span>Start a Conversation</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
