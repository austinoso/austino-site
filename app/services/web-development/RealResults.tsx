import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "Pg. 1", label: "on Google locally", accent: true },
  { value: "2wk", label: "from kickoff to live", accent: true },
  { value: "0.8s", label: "page load time", accent: false },
  { value: "100", label: "Lighthouse (all 4 categories)", accent: false },
];

export default function RealResults() {
  return (
    <section data-fade className="mb-24 sm:mb-32">
      <p className="section-label mb-4">Real Results</p>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        This isn&apos;t theory.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
        A local massage therapist needed a site that actually performs. Page one
        on Google, sub-second loads, and perfect scores across the board.
      </p>

      <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(64,224,255,0.03), transparent)",
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 text-center"
              >
                <p
                  className={`text-3xl sm:text-4xl font-semibold font-mono mb-1 ${stat.accent ? "text-cyber-accent" : "text-white"}`}
                >
                  {stat.value}
                </p>
                <p className="text-[11px] text-cyber-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
            <p className="text-sm text-cyber-gray-400">
              My Massage Cottage — built with Next.js, launched in 2 weeks.
            </p>
            <Link
              href="/work/my-massage-cottage"
              className="inline-flex items-center gap-2 text-sm font-mono text-cyber-accent hover:text-white transition-colors duration-300 flex-shrink-0"
            >
              Read case study
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
