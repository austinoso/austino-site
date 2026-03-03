export default function YourDashboard() {
  return (
    <section data-fade>
      <div className="px-6 sm:px-10 md:px-14 lg:px-20">
        <p className="section-label mb-4">Your Dashboard</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-warm-white leading-[1.2] tracking-tight text-balance mb-4 max-w-2xl">
          Numbers that mean something to{" "}
          <span className="text-gradient-gold">your business.</span>
        </h2>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-10 text-pretty">
          Every metric I track maps directly to a business outcome you care
          about. You get a monthly summary in plain English &mdash; what
          changed, what the data shows, and what I&apos;m planning next.
        </p>
      </div>

      {/* Bento grid — full-width within page-frame */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-stone-200">
        {/* Growth chart — spans 2 cols on lg */}
        <div
          className="col-span-2 border-b border-r border-stone-200 flex flex-col"
          aria-hidden="true"
        >
          {/* Header — gets padding */}
          <div className="flex items-center justify-between px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
            <div>
              <p className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-1">
                Organic Traffic
              </p>
              <p className="text-2xl sm:text-3xl font-semibold text-warm-white font-mono">
                2,847
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-mono text-green-400 mb-1">+180% YoY</p>
              <p className="text-[10px] font-mono text-stone-500">
                ↑ 34% from last month
              </p>
            </div>
          </div>
          {/* Chart — bleeds edge-to-edge, anchors to bottom */}
          <div className="mt-auto">
            <svg
              viewBox="0 0 400 100"
              fill="none"
              className="w-full h-28 sm:h-32 block"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="bentoGrowthFill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(74,222,128)"
                    stopOpacity="0.15"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(74,222,128)"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
              {[25, 50, 75].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="400"
                  y2={y}
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="0.5"
                />
              ))}
              <path
                d="M0 88 C30 85 60 80 90 72 C120 64 150 54 180 44 C210 35 240 26 270 18 C300 12 330 7 360 4 L400 2"
                stroke="rgb(74,222,128)"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M0 88 C30 85 60 80 90 72 C120 64 150 54 180 44 C210 35 240 26 270 18 C300 12 330 7 360 4 L400 2 L400 100 L0 100 Z"
                fill="url(#bentoGrowthFill)"
              />
            </svg>
            <div className="flex justify-between px-2 pb-3 pt-1">
              {["Jan", "Apr", "Jul", "Oct", "Now"].map((label) => (
                <span
                  key={label}
                  className="text-[10px] font-mono text-stone-500"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Keywords */}
        <div className="col-span-2 lg:col-span-1 border-b border-r border-stone-200 p-6 sm:p-8 flex flex-col">
          <p className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-2">
            Keywords in Top 10
          </p>
          <p className="text-3xl sm:text-4xl font-semibold text-warm-white font-mono mb-1">
            47
          </p>
          <p className="text-xs font-mono text-green-400 mb-4">
            +18 new this quarter
          </p>
          <p className="text-sm text-stone-500 leading-relaxed mt-auto text-pretty">
            Every new page I publish is another way for customers to find you.
          </p>
        </div>

        {/* Google Ranking */}
        <div className="col-span-2 lg:col-span-1 border-b border-r border-stone-200 p-6 sm:p-8 flex flex-col">
          <p className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-2">
            Google Ranking
          </p>
          <p className="text-3xl sm:text-4xl font-semibold text-warm-white font-mono mb-1">
            #1
          </p>
          <p className="text-xs font-mono text-green-400 mb-4">
            Up from #8 at launch
          </p>
          <p className="text-sm text-stone-500 leading-relaxed mt-auto text-pretty">
            First organic result for your core service in your area. The result
            of showing up consistently, month after month.
          </p>
        </div>

        {/* Bounce rate — 2 cols on lg */}
        <div className="col-span-2 border-b border-r border-stone-200 p-6 sm:p-8 flex flex-col">
          <p className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-2">
            Visitors Who Leave
          </p>
          <div className="flex items-baseline gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-semibold text-warm-white font-mono">
              31%
            </p>
            <p className="text-xs font-mono text-green-400">
              ↓ 12% since launch
            </p>
          </div>
          <p className="text-sm text-stone-500 leading-relaxed max-w-md mt-3 text-pretty">
            This was 43% at launch. I reworked the copy and layout on three
            underperforming pages &mdash; now visitors stay and act.
          </p>
        </div>

        {/* Conversion rate — 2 cols on lg */}
        <div className="col-span-2 border-b border-r border-stone-200 p-6 sm:p-8 flex flex-col">
          <p className="text-xs font-mono text-stone-500 uppercase tracking-wider mb-2">
            Visitor → Lead Conversion
          </p>
          <div className="flex items-baseline gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-semibold text-warm-white font-mono">
              4.8%
            </p>
            <p className="text-xs font-mono text-green-400">
              ↑ 2.1x from launch
            </p>
          </div>
          <p className="text-sm text-stone-500 leading-relaxed mt-2 max-w-lg text-pretty">
            Industry average sits around 2.3%. Better copy, faster pages, and
            clearer calls to action turned more of your existing traffic into
            actual inquiries.
          </p>
        </div>
      </div>
    </section>
  );
}
