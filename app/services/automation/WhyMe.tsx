import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    stat: "6",
    unit: "years",
    desc: "building software professionally",
  },
  {
    stat: "Scripts",
    unit: "→ platforms",
    desc: "from single tools to full business systems",
  },
] as const;

export default function WhyMe() {
  return (
    <section data-fade>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 lg:gap-20 items-start">
        {/* Photo + name */}
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

        {/* Bio + proof */}
        <div className="max-w-xl">
          <h2 className="font-display text-2xl sm:text-3xl md:text-[2.1rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-5">
            I&apos;ve been building things like this{" "}
            <span className="text-gradient-gold">for six years.</span>
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-stone-300 leading-relaxed text-pretty">
            <p>
              When someone brings me a problem, I find a solution. If one
              doesn&apos;t exist, I build it.
            </p>
            <p>
              Integrations, internal tools, scheduled jobs, full operations
              dashboards. For other companies and my own. The scope changes
              every project, but the approach stays the same: understand the
              problem, then build the simplest thing that solves it.
            </p>
          </div>

          {/* Proof points */}
          <div className="mt-8 flex flex-wrap gap-4 sm:gap-5">
            {highlights.map((h) => (
              <div
                key={h.desc}
                className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-5 py-4 min-w-[140px]"
              >
                <p className="font-display text-2xl font-bold text-warm-white tracking-tight leading-none">
                  {h.stat}
                  <span className="text-sm text-stone-500 font-medium ml-1.5">
                    {h.unit}
                  </span>
                </p>
                <p className="text-[12px] text-stone-400 leading-relaxed mt-1.5">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-8 text-sm font-medium text-warm-gold hover:text-amber-300 transition-colors duration-200"
          >
            Let&apos;s talk about what you need built
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
