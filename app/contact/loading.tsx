export default function Loading() {
  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Nav placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-4">
          <div className="flex items-center justify-between">
            <div className="h-6 w-24 rounded bg-white/[0.06] animate-skeleton-pulse" />
            <div className="hidden md:flex items-center gap-6">
              <div className="h-4 w-16 rounded bg-white/[0.06] animate-skeleton-pulse" />
              <div className="h-4 w-16 rounded bg-white/[0.06] animate-skeleton-pulse" />
              <div className="h-4 w-16 rounded bg-white/[0.06] animate-skeleton-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="page-frame">
        {/* Header */}
        <div className="border-b border-white/[0.06] px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
          <div className="h-3 w-20 rounded bg-white/[0.06] animate-skeleton-pulse mb-5" />
          <div className="h-10 w-96 max-w-full rounded bg-white/[0.06] animate-skeleton-pulse mb-5" />
          <div className="h-5 w-80 max-w-full rounded bg-white/[0.06] animate-skeleton-pulse" />
        </div>

        {/* Form + Sidebar */}
        <div className="border-b border-white/[0.06] px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
          <div className="grid lg:grid-cols-3 gap-14 lg:gap-20">
            <div className="lg:col-span-2 space-y-6">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="h-[68px] rounded bg-white/[0.03] animate-skeleton-pulse" />
                <div className="h-[68px] rounded bg-white/[0.03] animate-skeleton-pulse" />
              </div>
              <div className="h-[68px] rounded bg-white/[0.03] animate-skeleton-pulse" />
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="h-[68px] rounded bg-white/[0.03] animate-skeleton-pulse" />
                <div className="h-[68px] rounded bg-white/[0.03] animate-skeleton-pulse" />
              </div>
              <div className="h-36 rounded bg-white/[0.03] animate-skeleton-pulse" />
              <div className="h-12 w-40 rounded-lg bg-white/[0.06] animate-skeleton-pulse" />
            </div>
            <div className="lg:col-span-1 space-y-10">
              <div className="space-y-3">
                <div className="h-4 w-48 rounded bg-white/[0.06] animate-skeleton-pulse" />
                <div className="h-4 w-64 max-w-full rounded bg-white/[0.06] animate-skeleton-pulse" />
              </div>
              <div className="space-y-4">
                <div className="h-3 w-32 rounded bg-white/[0.06] animate-skeleton-pulse" />
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-4 w-56 max-w-full rounded bg-white/[0.06] animate-skeleton-pulse" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
