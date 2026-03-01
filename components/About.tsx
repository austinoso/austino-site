import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import WordReveal from "@/components/ui/WordReveal";

/* ────────────────────────────────────────────────────────────────── */
/*  About — server component (content in initial HTML)               */
/* ────────────────────────────────────────────────────────────────── */

export default function About() {
  return (
    <ScrollReveal
      as="section"
      className="relative w-full pt-24 pb-24 sm:pt-28 sm:pb-28 md:pt-32 md:pb-32 border-b border-white/[0.06]"
      style={{
        background: "rgba(11,10,8,0.92)",
        backgroundImage: [
          "radial-gradient(ellipse 50% 45% at 85% 70%, rgba(244,114,182,0.05), transparent 70%)",
          "radial-gradient(ellipse 40% 40% at 20% 30%, rgba(212,168,83,0.06), transparent 70%)",
        ].join(", "),
      }}
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
          <WordReveal
            text="Built to outpace your competition."
            id="about-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white leading-[1.1] tracking-tight"
            accentWords={["outpace"]}
          />
          <p
            data-animate="fade"
            className="text-base sm:text-lg text-stone-300 leading-relaxed mt-8 sm:mt-10"
          >
            Most agencies hand you a site and disappear. I don&apos;t. I stick
            around and keep pushing until your digital presence doesn&apos;t
            just compete, it dominates. Continuous optimization, strategic
            growth, and a refusal to settle for &ldquo;good enough&rdquo; mean
            your website keeps getting better while your competitors&apos; stays
            the same.
          </p>
        </div>

        {/* Meet the team */}
        <div className="pt-12 border-t border-white/[0.06]">
          <p
            data-animate="fade"
            className="font-mono text-xs text-warm-gold/60 uppercase tracking-[0.2em] mb-10"
          >
            Meet the Team
          </p>

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
                  Six years experience in software engineering, web development,
                  and business automation.
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
