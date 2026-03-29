export default function TheMath() {
  return (
    <section data-fade>
      <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold font-display text-warm-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Build once. Runs forever.
      </h2>
      <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-10">
        You pay once for a custom automation. It runs for years. Compare that to
        paying someone $18/hr to do the same task every single day —
        indefinitely.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Manual */}
        <div className="rounded-xl border border-stone-200 bg-white p-7 sm:p-8 transition-colors duration-300 hover:bg-stone-50 hover:border-stone-300">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Manual process
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-3xl sm:text-4xl font-semibold text-warm-white font-mono">
                $9,360
              </p>
              <p className="text-sm text-stone-500 font-mono">
                per year (2 hrs/day × $18/hr)
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Year 1</span>
                <span className="text-warm-white font-mono">$9,360</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Year 2</span>
                <span className="text-warm-white font-mono">$18,720</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-stone-500">Year 3</span>
                <span className="text-warm-white font-mono">$28,080</span>
              </div>
              <div className="flex justify-between text-sm border-t border-stone-200 pt-2">
                <span className="text-stone-500">Year 4</span>
                <span className="text-red-400 font-mono font-semibold">
                  $37,440
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed pt-1">
              Plus errors. Plus missed follow-ups. Plus the opportunity cost of
              what that person could be doing instead.
            </p>
          </div>
        </div>

        {/* Automated */}
        <div className="rounded-xl border border-[#004D3A]/20 bg-[#004D3A]/[0.03] p-7 sm:p-8 relative overflow-hidden transition-colors duration-300 hover:bg-[#004D3A]/[0.06] hover:border-[#004D3A]/30">
          <div className="relative">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <p className="font-mono text-xs text-[#004D3A] uppercase tracking-wider">
                Automated
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-3xl sm:text-4xl font-semibold text-warm-white font-mono">
                  One-time
                </p>
                <p className="text-sm text-[#004D3A] font-mono">
                  build cost, then $0/hr forever
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Year 1</span>
                  <span className="text-warm-white font-mono">Build cost</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Year 2</span>
                  <span className="text-emerald-400 font-mono">$0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-stone-500">Year 3</span>
                  <span className="text-emerald-400 font-mono">$0</span>
                </div>
                <div className="flex justify-between text-sm border-t border-stone-200 pt-2">
                  <span className="text-stone-500">Year 4</span>
                  <span className="text-emerald-400 font-mono font-semibold">
                    $0
                  </span>
                </div>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed pt-1">
                Zero errors. Zero sick days. Runs 24/7 at machine speed. And
                your employee gets their 2 hours back every day to do meaningful
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
