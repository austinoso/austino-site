export default function TheMath() {
  return (
    <section data-fade>
      <p className="section-label mb-4">The Math</p>
      <h2 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Build once. Runs forever.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
        You pay once for a custom automation. It runs for years. Compare that to
        paying someone $18/hr to do the same task every single day —
        indefinitely.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-white/[0.06]">
        {/* Manual */}
        <div className="border-b border-r border-white/[0.06] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <p className="font-mono text-xs text-cyber-gray-400 uppercase tracking-wider">
              Manual process
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-3xl sm:text-4xl font-semibold text-white font-mono">
                $9,360
              </p>
              <p className="text-sm text-cyber-gray-400 font-mono">
                per year (2 hrs/day × $18/hr)
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-sm">
                <span className="text-cyber-gray-400">Year 1</span>
                <span className="text-white font-mono">$9,360</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-cyber-gray-400">Year 2</span>
                <span className="text-white font-mono">$18,720</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-cyber-gray-400">Year 3</span>
                <span className="text-white font-mono">$28,080</span>
              </div>
              <div className="flex justify-between text-sm border-t border-white/[0.06] pt-2">
                <span className="text-cyber-gray-400">Year 4</span>
                <span className="text-[#FF5F57] font-mono font-semibold">
                  $37,440
                </span>
              </div>
            </div>
            <p className="text-sm text-cyber-gray-400 leading-relaxed pt-1">
              Plus errors. Plus missed follow-ups. Plus the opportunity cost of
              what that person could be doing instead.
            </p>
          </div>
        </div>

        {/* Automated */}
        <div className="border-b border-r border-white/[0.06] p-6 sm:p-8 relative overflow-hidden bg-cyber-accent/[0.02]">
          <div className="relative">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
              <p className="font-mono text-xs text-cyber-accent uppercase tracking-wider">
                Automated
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-3xl sm:text-4xl font-semibold text-white font-mono">
                  One-time
                </p>
                <p className="text-sm text-cyber-accent font-mono">
                  build cost, then $0/hr forever
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-cyber-gray-400">Year 1</span>
                  <span className="text-white font-mono">Build cost</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cyber-gray-400">Year 2</span>
                  <span className="text-[#4ADE80] font-mono">$0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cyber-gray-400">Year 3</span>
                  <span className="text-[#4ADE80] font-mono">$0</span>
                </div>
                <div className="flex justify-between text-sm border-t border-white/[0.06] pt-2">
                  <span className="text-cyber-gray-400">Year 4</span>
                  <span className="text-[#4ADE80] font-mono font-semibold">
                    $0
                  </span>
                </div>
              </div>
              <p className="text-sm text-cyber-gray-300 leading-relaxed pt-1">
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
