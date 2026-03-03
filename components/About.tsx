import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ────────────────────────────────────────────────────────────────── */
/*  About — server component (content in initial HTML)               */
/* ────────────────────────────────────────────────────────────────── */

export default function About() {
  return (
    <ScrollReveal
      as="section"
      className="relative overflow-hidden w-full pt-20 pb-20 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32 border-b border-stone-200"
      aria-labelledby="about-heading"
    >
      {/* Decorative semicircle — rose, right edge */}
      <div
        className="absolute -right-[9rem] sm:-right-[11rem] md:-right-[14rem] bottom-16 sm:bottom-24 md:bottom-28 w-[16rem] h-[16rem] sm:w-[20rem] sm:h-[20rem] md:w-[24rem] md:h-[24rem] rounded-full pointer-events-none"
        style={{ background: "rgba(219, 39, 119, 0.06)" }}
        aria-hidden="true"
      />

      {/* Gradient divider line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(167,139,250,0.06) 30%, rgba(180,83,9,0.08) 50%, transparent)",
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
            className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.1] tracking-tight"
          >
            One person.{" "}
            <span className="text-gradient-gold">The whole picture.</span>
          </h2>
          <p
            data-animate="fade"
            className="text-base sm:text-lg text-stone-600 leading-relaxed mt-8 sm:mt-10"
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
            className="mt-8 sm:mt-10 pl-5 sm:pl-6 relative"
          >
            {/* Brand gradient border-left */}
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, #B45309 0%, #DB2777 50%, #7C3AED 100%)",
              }}
              aria-hidden="true"
            />
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-medium">
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
              className="flex items-start gap-5 p-6 sm:p-7 rounded-lg border border-stone-200 bg-white shadow-sm"
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
                <p className="font-mono text-[10px] text-warm-gold uppercase tracking-widest mt-1">
                  Developer &amp; Founder
                </p>
                <p className="text-[13px] sm:text-sm text-stone-500 leading-relaxed mt-2.5">
                  Your strategist, developer, and growth partner — all in one.
                </p>
              </div>
            </div>

            {/* Rosa */}
            <div
              data-animate="fade"
              className="flex items-start gap-5 p-6 sm:p-7 rounded-lg border border-stone-200 bg-white shadow-sm"
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
                <p className="font-mono text-[10px] text-warm-gold uppercase tracking-widest mt-1">
                  Head of Morale
                </p>
                <p className="text-[13px] sm:text-sm text-stone-500 leading-relaxed mt-2.5">
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
