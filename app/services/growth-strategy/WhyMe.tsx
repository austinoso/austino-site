import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhyMe() {
  return (
    <section
      data-fade
      className="px-6 sm:px-10 md:px-14 lg:px-20 py-14 sm:py-20 md:py-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 lg:gap-20 items-start">
        {/* ── Photo + name ── */}
        <div className="flex md:flex-col items-center md:items-start gap-5 md:gap-0 md:pt-1">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border border-warm-gold/15 shadow-lg shadow-black/40 flex-shrink-0">
            <Image
              src="/assets/bio-pic.png"
              alt="Austin Osorio, developer and founder"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 128px, 96px"
            />
          </div>
          <div className="md:mt-4">
            <p className="text-lg font-semibold text-warm-white leading-snug tracking-tight">
              Austin Osorio
            </p>
            <p className="font-mono text-[10px] text-warm-gold/60 uppercase tracking-[0.2em] mt-1">
              Developer &amp; Founder
            </p>
          </div>
        </div>

        {/* ── Bio + CTA ── */}
        <div className="max-w-xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-[2.1rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-5">
            An engineer who understands{" "}
            <span className="text-gradient-gold">
              how growth actually works.
            </span>
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
            <p>
              I&apos;ve spent six years as a software engineer. That background
              means I understand how Google&apos;s ranking systems, analytics
              platforms, and data tools actually work. I don&apos;t just read
              dashboards. I understand what&apos;s happening underneath them.
            </p>
            <p>
              That means I build your site, read the data, and adjust the plan
              myself. One person who sees the whole picture: the code that makes
              your site fast and the content that makes it rank.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-8 text-sm font-medium text-warm-gold hover:text-amber-700 transition-colors duration-200"
          >
            Let&apos;s talk about your business
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
