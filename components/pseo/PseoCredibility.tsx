import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PseoCredibility() {
  return (
    <section data-fade>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left — copy */}
        <div className="lg:col-span-7">
          <p className="section-label mb-5">Who builds this</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight">
            You work with me&nbsp;directly.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
            I&apos;m Austin, a software engineer based in the Central Valley. I do the research,
            build the site, write the SEO content, and manage what comes after launch. No handoffs,
            no account manager, no junior team.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#004D3A] hover:text-[#003328] transition-colors duration-200"
            >
              See selected work
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-stone-500 hover:text-stone-700 transition-colors duration-200"
            >
              More about how I work
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Right — photo card */}
        <div className="lg:col-span-5">
          <div className="flex items-start gap-5 p-6 sm:p-7 rounded-xl border border-stone-200 bg-white shadow-sm">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-stone-200 flex-shrink-0 shadow-md shadow-black/[0.08]">
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
                Six years in software engineering, building sites and automated workflows for local
                businesses in the Central Valley.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
