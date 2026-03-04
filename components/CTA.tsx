import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WordReveal from "@/components/ui/WordReveal";
import FlowLines from "@/components/ui/FlowLines";

/* ────────────────────────────────────────────────────────────────── */
/*  CTA — server component (content in initial HTML)                 */
/* ────────────────────────────────────────────────────────────────── */

export default function CTA() {
  return (
    <ScrollReveal
      as="section"
      className="dark-section relative w-full pt-20 pb-20 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32 overflow-hidden rounded-t-3xl bg-[#1C1917]"
      aria-labelledby="cta-heading"
    >
      {/* Gradient divider line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(251,191,36,0.12) 30%, rgba(244,114,182,0.08) 60%, transparent)",
        }}
        aria-hidden="true"
      />

      <FlowLines className="absolute bottom-0 right-0 w-[50%] h-full" />

      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <p
            data-animate="label"
            className="text-xs font-semibold text-amber-400 uppercase tracking-[0.2em] mb-5"
          >
            Your Move
          </p>
          <WordReveal
            text="Your competition isn't waiting. Neither should you."
            id="cta-heading"
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-white leading-[1.05] tracking-tight text-balance"
            accentWords={["isn't", "waiting."]}
            accentClassName="text-amber-400"
          />
        </div>

        {/* Body + CTA */}
        <div className="max-w-2xl">
          <p
            data-animate="fade"
            className="text-base sm:text-lg text-stone-400 leading-relaxed"
          >
            Thinking about a new site, or not sure if your current one
            isn&apos;t pulling its weight? Let&apos;s talk through what the
            right build looks like for your business.
          </p>

          <div
            data-animate="fade"
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-[15px] rounded-lg transition-all duration-300 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg"
              data-umami-event="cta-start-conversation"
            >
              <span>Start a Conversation</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <p className="text-xs font-mono text-stone-400">
              Free, zero obligation
            </p>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
