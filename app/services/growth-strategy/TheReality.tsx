import Link from "next/link";

export default function TheReality() {
  return (
    <section
      data-fade
      className="px-6 sm:px-10 md:px-14 lg:px-20 pb-14 sm:pb-20 md:pb-24"
    >
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-5 max-w-2xl">
        Your next customer is already searching.{" "}
        <span className="text-gradient-gold">Can they find you?</span>
      </h2>
      <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mb-10 text-pretty">
        Right now, people in your area are Googling the exact service you offer.
        If your business doesn&apos;t show up, or doesn&apos;t look
        credible when it does, that customer goes to whoever does.
      </p>

      {/* ── Solution pivot ── */}
      <div className="border-t border-white/[0.06] pt-10 sm:pt-12">
        <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl mb-10 sm:mb-12 text-pretty">
          A{" "}
          <Link
            href="/services/web-development"
            className="text-warm-white font-medium underline decoration-warm-gold/30 underline-offset-2 hover:decoration-warm-gold/60 transition-colors duration-200"
          >
            fast, well-built site
          </Link>{" "}
          gets you in the door. But Google doesn&apos;t rank you once and walk
          away. It watches whether you keep showing up with fresh, useful
          content.{" "}
          <span className="text-warm-white font-medium">
            That&apos;s what a growth strategy builds.
          </span>
        </p>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-14 lg:items-start">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-warm-white leading-[1.2] tracking-tight text-balance">
              Google rewards the sites that{" "}
              <span className="text-gradient-gold">keep showing up.</span>
            </h3>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="border-l-2 border-warm-gold/25 pl-5">
              <p className="text-warm-white font-semibold text-base sm:text-lg leading-snug mb-1.5">
                Fresh content signals authority.
              </p>
              <p className="text-stone-400 text-sm sm:text-[15px] leading-relaxed">
                Every new page you publish is another chance to rank for a
                search your competitors aren&apos;t targeting.
              </p>
            </div>
            <div className="border-l-2 border-warm-gold/25 pl-5">
              <p className="text-warm-white font-semibold text-base sm:text-lg leading-snug mb-1.5">
                The work compounds over time.
              </p>
              <p className="text-stone-400 text-sm sm:text-[15px] leading-relaxed">
                Unlike ads that stop the moment you stop paying, every page and
                every optimization keeps working months after it&apos;s done.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Competitive edge ── */}
      <div className="mt-12 sm:mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-6">
        <span className="text-5xl sm:text-6xl font-mono font-bold text-warm-gold leading-none shrink-0">
          75%
        </span>
        <div>
          <p className="text-base sm:text-lg text-warm-white font-medium leading-snug mb-1">
            of users never scroll past page one.
          </p>
          <p className="text-sm text-stone-400 leading-relaxed max-w-md text-pretty">
            Most local businesses haven&apos;t updated their site in years. That
            means the top spots are wide open for whoever decides to
            show up consistently.
          </p>
        </div>
      </div>
    </section>
  );
}
