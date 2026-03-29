import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ────────────────────────────────────────────────────────────────── */
/*  About — server component (content in initial HTML)               */
/* ────────────────────────────────────────────────────────────────── */

export default function About() {
  return (
    <ScrollReveal
      as="section"
      className="relative overflow-hidden w-full pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 border-b border-stone-200"
      aria-labelledby="about-heading"
    >
      {/* Divider line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,77,58,0.08) 30%, rgba(0,77,58,0.12) 50%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">
          {/* LEFT: Copy */}
          <div>
            <p data-animate="label" className="section-label mb-5">
              About
            </p>
            <h2
              id="about-heading"
              className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.1] tracking-tight"
            >
              One person.
              <br />
              <span className="text-[#004D3A]">The whole&nbsp;picture.</span>
            </h2>
            <p
              data-animate="fade"
              className="text-base sm:text-lg text-stone-600 leading-relaxed mt-6 sm:mt-7"
            >
              I handle everything: Design, development, data, and the ongoing strategy to keep it
              all growing. Years of working inside small agencies taught me how businesses actually
              operate and what problems look like up close. That experience, plus a software
              engineering background, means I understand how Google&apos;s ranking systems work. Not
              just what to do, but why it&nbsp;works.
            </p>

            {/* Pull-quote */}
            <blockquote
              data-animate="fade"
              className="mt-6 sm:mt-8 border-l-[3px] border-[#004D3A]/40 pl-5 sm:pl-6"
            >
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed italic">
                &ldquo;Good enough&rdquo; has never been the bar I&apos;m aiming for. Once I take
                something on, I stay with it. I don&apos;t walk away until the solution is something
                we&apos;re both proud&nbsp;of.
              </p>
            </blockquote>

            <div data-animate="fade" className="mt-7 sm:mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#004D3A] hover:text-[#003328] transition-colors duration-200"
              >
                More about how I work
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* RIGHT: Team cards stacked */}
          <div className="flex flex-col gap-5">
            <p className="font-mono text-[11px] text-stone-400 uppercase tracking-widest mb-1">
              The Team
            </p>
            {/* Austin */}
            <div
              data-animate="fade"
              className="flex items-start gap-5 p-6 sm:p-7 rounded-xl border border-stone-200 bg-white shadow-sm"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-stone-200 flex-shrink-0 shadow-md shadow-black/8">
                <Image
                  src="/assets/bio-pic.png"
                  alt="Headshot of Austin O., web strategist and developer"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="min-w-0 pt-1 flex-1">
                <p className="text-lg font-semibold text-warm-white leading-snug tracking-tight">
                  Austin O.
                </p>
                <p className="font-mono text-[10px] text-[#004D3A] uppercase tracking-widest mt-1">
                  Developer &amp; Founder
                </p>
                <p className="text-[13px] sm:text-sm text-stone-500 leading-relaxed mt-2.5">
                  Six years in software engineering, building sites and automated workflows for
                  local businesses.
                </p>
              </div>
            </div>

            {/* Rosa */}
            <div
              data-animate="fade"
              className="flex items-start gap-5 p-6 sm:p-7 rounded-xl border border-stone-200 bg-white shadow-sm"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-stone-200 flex-shrink-0 shadow-lg shadow-black/[0.06]">
                <Image
                  src="/assets/rosa.jpg"
                  alt="Rosa the dog, office mascot and head of morale"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="min-w-0 pt-1 flex-1">
                <p className="text-lg font-semibold text-warm-white leading-snug tracking-tight">
                  Rosa
                </p>
                <p className="font-mono text-[10px] text-[#004D3A] uppercase tracking-widest mt-1">
                  Head of Morale
                </p>
                <p className="text-[13px] sm:text-sm text-stone-500 leading-relaxed mt-2.5">
                  Three years experience in stress management, perimeter security, and unsolicited
                  desk&nbsp;visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
