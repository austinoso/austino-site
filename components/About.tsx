import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ────────────────────────────────────────────────────────────────── */
/*  About — server component (content in initial HTML)               */
/* ────────────────────────────────────────────────────────────────── */

export default function About() {
  return (
    <ScrollReveal
      as="section"
      className="relative w-full pt-16 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 border-b border-white/[0.06]"
      aria-labelledby="about-heading"
    >
      {/* Gradient divider line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(167,139,250,0.15) 30%, rgba(212,168,83,0.20) 50%, rgba(167,139,250,0.15) 70%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* Mission statement */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <p data-animate="label" className="section-label mb-5">
            About
          </p>
          <h2
            id="about-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white leading-[1.1] tracking-tight"
          >
            One person.{" "}
            <span className="text-warm-gold">The whole picture.</span>
          </h2>
          <p
            data-animate="fade"
            className="text-base sm:text-lg text-stone-300 leading-relaxed mt-8 sm:mt-10"
          >
            Most agencies hand you a site and disappear. I don&apos;t. I design
            it, build it, read the data, and adjust the plan myself. Six years
            of software engineering, web development, and business automation —
            focused on one thing: making local businesses impossible to ignore
            online. Your site keeps getting better every month while your
            competitors&apos; stays exactly where it launched.
          </p>

          {/* Mission — pull-quote treatment */}
          <blockquote
            data-animate="fade"
            className="mt-8 sm:mt-10 pl-5 sm:pl-6 border-l-2 border-warm-gold/30"
          >
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-medium">
              I care about your growth because that&apos;s the whole point of
              the work. But I&apos;ll be honest — it&apos;s also a reflection of
              mine. Every project I take on goes in my portfolio with my name
              next to it. That keeps my standards high, because &ldquo;good
              enough&rdquo; doesn&apos;t look good on either of&nbsp;us.
            </p>
          </blockquote>
        </div>

        {/* Team */}
        <div className="mt-12 sm:mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Austin */}
            <div
              data-animate="fade"
              className="flex items-start gap-5 p-6 sm:p-7 rounded-lg border border-white/[0.06] bg-white/[0.015]"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-white/[0.08] flex-shrink-0 shadow-lg shadow-black/40">
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
                <p className="font-mono text-[10px] text-warm-gold uppercase tracking-widest mt-1">
                  Developer &amp; Founder
                </p>
                <p className="text-[13px] sm:text-sm text-stone-400 leading-relaxed mt-2.5">
                  Your strategist, developer, and growth partner — all in one.
                </p>
              </div>
            </div>

            {/* Rosa */}
            <div
              data-animate="fade"
              className="flex items-start gap-5 p-6 sm:p-7 rounded-lg border border-white/[0.06] bg-white/[0.015]"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-white/[0.08] flex-shrink-0 shadow-lg shadow-black/40">
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
                <p className="font-mono text-[10px] text-warm-gold uppercase tracking-widest mt-1">
                  Head of Morale
                </p>
                <p className="text-[13px] sm:text-sm text-stone-400 leading-relaxed mt-2.5">
                  Three years experience in stress management, perimeter
                  security, and unsolicited desk visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
