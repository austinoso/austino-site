import type { LucideIcon } from "lucide-react";

interface ProblemCard {
  icon: LucideIcon;
  stat: string;
  statLabel: string;
  heading: string;
  body: string;
  source: { label: string; href: string };
}

interface PseoProblemProps {
  sectionLabel: string;
  heading: string;
  subtext: string;
  cards: ProblemCard[];
}

const card =
  "rounded-xl bg-white border border-stone-200 p-6 sm:p-8 hover:shadow-sm transition-shadow duration-300";

function Source({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[11px] text-stone-400 hover:text-stone-600 transition-colors font-mono"
    >
      {label} ↗<span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function PseoProblem({ sectionLabel, heading, subtext, cards }: PseoProblemProps) {
  return (
    <section data-fade>
      <div className="mb-10 sm:mb-14">
        <p className="section-label mb-5">{sectionLabel}</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance max-w-2xl">
          {heading}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
          {subtext}
        </p>
      </div>

      {/* ── Mobile: stacked cards ── */}
      <div className="md:hidden space-y-2">
        {cards.map((c) => (
          <div key={c.heading} className={card}>
            <span className="block font-display text-4xl font-bold leading-none mb-1.5 tracking-tight text-[#004D3A]">
              {c.stat}
            </span>
            <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-3">
              {c.statLabel}
            </p>
            <h3 className="text-base font-semibold text-warm-white mb-2">{c.heading}</h3>
            <p className="text-sm text-stone-500 leading-relaxed mb-3">{c.body}</p>
            <Source {...c.source} />
          </div>
        ))}
      </div>

      {/* ── Desktop: equal-width 3-col grid ── */}
      <div className="hidden md:grid md:grid-cols-3 gap-2">
        {cards.map((c) => (
          <div key={c.heading} className={`${card} flex flex-col justify-between`}>
            <div>
              <span className="block font-display text-5xl lg:text-6xl font-bold leading-none mb-1.5 tracking-tight text-[#004D3A]">
                {c.stat}
              </span>
              <p className="text-[11px] font-mono text-stone-400 uppercase tracking-wider mb-4">
                {c.statLabel}
              </p>
              <h3 className="text-base font-semibold text-warm-white mb-2">{c.heading}</h3>
              <p className="text-[15px] text-stone-500 leading-relaxed mb-3">{c.body}</p>
            </div>
            <Source {...c.source} />
          </div>
        ))}
      </div>
    </section>
  );
}
