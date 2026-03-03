export default function TheProcess() {
  const steps = [
    {
      step: "01",
      title: "Audit",
      description:
        "We walk through your daily operations. I pinpoint every task that\u2019s costing you time and can be automated.",
    },
    {
      step: "02",
      title: "Blueprint",
      description:
        "I map out the full workflow \u2014 which tools connect, what triggers what, and how it all fits together.",
    },
    {
      step: "03",
      title: "Build & Test",
      description:
        "I build it, test every edge case, and make sure it works with your existing stack before it goes live.",
    },
    {
      step: "04",
      title: "Go Live & Monitor",
      description:
        "We flip the switch. I monitor everything for the first week and fine-tune based on real data.",
    },
  ];

  return (
    <section data-fade>
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold font-display text-warm-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        How we get from &quot;this is eating my time&quot; to &quot;it just
        runs.&quot;
      </h2>
      <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-10">
        You don&apos;t need to know how automation works. You just need to tell
        me what&apos;s slowing you down.
      </p>

      {/* ── Mobile: vertical timeline ── */}
      <div className="relative lg:hidden">
        <div
          className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(212,168,83,0.2) 10%, rgba(212,168,83,0.2) 90%, transparent)",
          }}
        />
        <div className="space-y-10 sm:space-y-12">
          {steps.map((item) => (
            <div
              key={item.step}
              data-step
              className="relative flex items-start gap-5 sm:gap-8"
            >
              <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-[30px] w-[30px] sm:h-[38px] sm:w-[38px] rounded-full bg-warm-bg border border-warm-gold/30 shadow-[0_0_12px_rgba(212,168,83,0.08)]">
                <span className="text-[10px] sm:text-xs font-mono text-warm-gold font-semibold">
                  {item.step}
                </span>
              </div>
              <div className="pt-0.5 sm:pt-1.5">
                <p className="text-sm sm:text-base font-semibold text-warm-white mb-1.5">
                  {item.title}
                </p>
                <p className="text-sm text-stone-500 leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop: horizontal timeline ── */}
      <div className="hidden lg:block relative">
        <div className="grid grid-cols-4 gap-0 mb-8">
          {steps.map((item, i) => (
            <div
              key={item.step}
              data-step
              className="relative flex flex-col items-start"
            >
              {/* Marker row with connecting line */}
              <div className="relative flex items-center w-full mb-5">
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-[38px] w-[38px] rounded-full bg-warm-bg border border-warm-gold/30 shadow-[0_0_12px_rgba(212,168,83,0.08)]">
                  <span className="text-xs font-mono text-warm-gold font-semibold">
                    {item.step}
                  </span>
                </div>
                {/* Line segment to next step */}
                {i < 3 && (
                  <div
                    className="flex-1 h-px ml-3"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(212,168,83,0.25), rgba(212,168,83,0.08))",
                    }}
                  />
                )}
              </div>
              {/* Content below the marker */}
              <div className="pr-8">
                <p className="text-base font-semibold text-warm-white mb-2">
                  {item.title}
                </p>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
