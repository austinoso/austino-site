import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ────────────────────────────────────────────────────────────────── */
/*  CTA — lowkey closing section, cream background, steps animate in */
/* ────────────────────────────────────────────────────────────────── */

const steps = [
  {
    num: "01",
    title: "We talk",
    desc: "A real conversation about your business, not a sales pitch. 20 minutes, no obligation.",
  },
  {
    num: "02",
    title: "I audit what you have",
    desc: "I look at your current site, your competitors, and where the gaps are.",
  },
  {
    num: "03",
    title: "You get a clear plan",
    desc: "Timeline, cost, and exactly what I\u2019d build. Your call if we move forward.",
  },
];

export default function CTA() {
  return (
    <ScrollReveal
      as="section"
      className="relative w-full pt-20 pb-24 sm:pt-24 sm:pb-32 md:pt-28 md:pb-36"
      aria-labelledby="cta-heading"
    >
      <div className="px-6 sm:px-10 md:px-14 lg:px-20">
        {/* Divider line from previous section */}
        <div data-animate="line" className="h-px bg-stone-200 mb-10 sm:mb-12" />

        {/* ── Label ── */}
        <p
          data-animate="label"
          className="text-xs font-semibold text-[#004D3A] uppercase tracking-[0.2em] mb-5"
        >
          Your Move
        </p>

        {/* ── Headline ── */}
        <h2
          data-animate="fade"
          id="cta-heading"
          className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-stone-900 leading-[1.1] tracking-tight max-w-2xl"
        >
          It starts with <span className="text-stone-500">20 minutes.</span>
        </h2>

        {/* ── Body ── */}
        <p
          data-animate="fade"
          className="mt-5 text-base sm:text-lg text-stone-500 leading-relaxed max-w-xl"
        >
          Not sure why your competitors keep showing up above you? Let&apos;s look at the gaps and
          map out what it would take to get you&nbsp;ranking.
        </p>

        {/* ── Steps — quiet reassurance ── */}
        <ol className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <li key={step.num} data-animate="card" className="flex gap-3">
              <span className="text-[11px] font-mono text-stone-500 font-medium pt-0.5 flex-shrink-0">
                {step.num}
              </span>
              <div>
                <p className="text-sm font-medium text-stone-700 leading-snug mb-1">{step.title}</p>
                <p className="text-[13px] text-stone-500 leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* ── CTA link ── */}
        <div data-animate="fade" className="mt-10 sm:mt-12 flex items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#004D3A] hover:text-[#003328] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#004D3A]/40 focus:ring-offset-2"
            data-umami-event="cta-start-conversation"
          >
            <span>Start a Conversation</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
          <span className="text-[11px] font-mono text-stone-500">Free, no commitment</span>
        </div>
      </div>
    </ScrollReveal>
  );
}
