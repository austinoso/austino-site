import ScrollReveal from "@/components/ui/ScrollReveal";
import WordReveal from "@/components/ui/WordReveal";

/* ────────────────────────────────────────────────────────────────── */
/*  Card data                                                        */
/* ────────────────────────────────────────────────────────────────── */

const opportunities = [
  {
    number: "01",
    title: "Their websites are stuck in\u00A02018",
    description:
      "Slow templates, broken mobile layouts, zero SEO. A fast, custom-built site puts you in a different league overnight.",
    stat: "53%",
    statLabel:
      "of mobile users leave a site that takes over 3\u00A0seconds to load",
    span: "md:col-span-7",
  },
  {
    number: "02",
    title: "They\u2019re doing everything by\u00A0hand",
    description:
      "Follow-ups, scheduling, data entry \u2014 all manual. One automated workflow saves hours and closes leads faster.",
    stat: "20hrs",
    statLabel: "per week wasted on tasks that could be automated",
    span: "md:col-span-5",
  },
  {
    number: "03",
    title: "They launched and walked\u00A0away",
    description:
      "No updates, no optimization, no strategy. Continuous improvement means you pull further ahead every single month.",
    stat: "88%",
    statLabel: "of users won\u2019t return after a bad experience",
    span: "md:col-span-12",
  },
];

/* ────────────────────────────────────────────────────────────────── */
/*  Component (server — content is in the initial HTML)              */
/* ────────────────────────────────────────────────────────────────── */

export default function PainPoints() {
  return (
    <ScrollReveal
      as="section"
      className="relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 border-b border-white/[0.06]"
      style={{ background: "rgba(6,6,8,0.92)" }}
      aria-labelledby="pain-points-heading"
    >
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* ── Header ── */}
        <div className="mb-14 sm:mb-20">
          <span data-animate="label" className="section-label block mb-5">
            The Opportunity
          </span>
          <WordReveal
            id="pain-points-heading"
            as="h2"
            text="Most businesses in your area aren't doing this. Yours can."
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight max-w-3xl"
            accentWords={["Yours"]}
          />
        </div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-l border-white/[0.06]">
          {opportunities.map((item, index) => {
            const isWide = item.span === "md:col-span-12";

            return (
              <div
                key={index}
                data-animate="card"
                className={`group relative ${item.span} border-b border-r border-white/[0.06] p-8 sm:p-10 md:p-12`}
              >
                {isWide ? (
                  /* ── Wide card: horizontal layout on md+ ── */
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-16">
                    <div className="flex-1 min-w-0">
                      <span className="font-mono text-[11px] text-cyber-accent/60 tracking-widest uppercase block mb-5">
                        {item.number}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-white leading-snug mb-3 group-hover:text-cyber-accent transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-[0.9375rem] text-cyber-gray-300 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-end gap-4 flex-shrink-0 md:pb-0.5">
                      <span className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-cyber-accent leading-none">
                        {item.stat}
                      </span>
                      <p className="text-xs text-cyber-gray-400 leading-relaxed max-w-[200px] pb-1.5">
                        {item.statLabel}
                      </p>
                    </div>
                  </div>
                ) : (
                  /* ── Standard card: vertical stack ── */
                  <div className="flex flex-col justify-between gap-8 sm:gap-10 h-full">
                    <div>
                      <span className="font-mono text-[11px] text-cyber-accent/60 tracking-widest uppercase block mb-5">
                        {item.number}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-semibold text-white leading-snug mb-3 group-hover:text-cyber-accent transition-colors duration-500">
                        {item.title}
                      </h3>
                      <p className="text-[0.9375rem] text-cyber-gray-300 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-end gap-4">
                      <span className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cyber-accent leading-none flex-shrink-0">
                        {item.stat}
                      </span>
                      <p className="text-xs text-cyber-gray-400 leading-relaxed max-w-[200px] pb-1">
                        {item.statLabel}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}
