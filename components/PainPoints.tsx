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
    color: "text-cyber-violet",
    hoverColor: "group-hover:text-cyber-violet",
    numberColor: "text-cyber-violet/60",
  },
  {
    number: "02",
    title: "They\u2019re doing everything by\u00A0hand",
    description:
      "Follow-ups, scheduling, data entry \u2014 all manual. One automated workflow saves hours and closes leads faster.",
    stat: "20hrs",
    statLabel: "per week wasted on tasks that could be automated",
    span: "md:col-span-5",
    color: "text-cyber-rose",
    hoverColor: "group-hover:text-cyber-rose",
    numberColor: "text-cyber-rose/60",
  },
  {
    number: "03",
    title: "They launched and walked\u00A0away",
    description:
      "No updates, no optimization, no strategy. Continuous improvement means you pull further ahead every single month.",
    stat: "88%",
    statLabel: "of users won\u2019t return after a bad experience",
    span: "md:col-span-12",
    color: "text-cyber-accent",
    hoverColor: "group-hover:text-cyber-accent",
    numberColor: "text-cyber-accent/60",
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
      style={{
        background: "rgba(6,6,8,0.92)",
        backgroundImage: [
          "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(167,139,250,0.10), transparent 70%)",
          "radial-gradient(ellipse 50% 40% at 15% 80%, rgba(244,114,182,0.08), transparent 70%)",
        ].join(", "),
      }}
      aria-labelledby="pain-points-heading"
    >
      {/* Gradient divider line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(64,224,255,0.15) 20%, rgba(167,139,250,0.20) 50%, rgba(244,114,182,0.15) 80%, transparent)",
        }}
        aria-hidden="true"
      />
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
                      <span
                        className={`font-mono text-[11px] ${item.numberColor} tracking-widest uppercase block mb-5`}
                      >
                        {item.number}
                      </span>
                      <h3
                        className={`font-display text-xl sm:text-2xl font-semibold text-white leading-snug mb-3 ${item.hoverColor} transition-colors duration-500`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[0.9375rem] text-cyber-gray-300 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-end gap-4 flex-shrink-0 md:pb-0.5">
                      <span
                        className={`font-display text-5xl sm:text-6xl md:text-7xl font-bold ${item.color} leading-none`}
                      >
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
                      <span
                        className={`font-mono text-[11px] ${item.numberColor} tracking-widest uppercase block mb-5`}
                      >
                        {item.number}
                      </span>
                      <h3
                        className={`font-display text-xl sm:text-2xl font-semibold text-white leading-snug mb-3 ${item.hoverColor} transition-colors duration-500`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[0.9375rem] text-cyber-gray-300 leading-relaxed max-w-md">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-end gap-4">
                      <span
                        className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold ${item.color} leading-none flex-shrink-0`}
                      >
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
