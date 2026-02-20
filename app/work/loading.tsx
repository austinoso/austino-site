export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Nav placeholder */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 py-4">
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

      {/* Content placeholder */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-36 lg:pt-40 pb-20">
        <div className="mb-14 sm:mb-20">
          <div className="h-3 w-20 rounded bg-white/[0.06] animate-skeleton-pulse mb-4" />
          <div className="h-10 w-80 max-w-full rounded bg-white/[0.06] animate-skeleton-pulse mb-5" />
          <div className="h-5 w-96 max-w-full rounded bg-white/[0.06] animate-skeleton-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-xl border border-white/[0.06] bg-[#111318] overflow-hidden"
            >
              <div className="aspect-[16/9] bg-white/[0.04] animate-skeleton-pulse" />
              <div className="p-5 sm:p-6 space-y-3">
                <div className="h-3 w-16 rounded bg-white/[0.06] animate-skeleton-pulse" />
                <div className="h-5 w-48 rounded bg-white/[0.06] animate-skeleton-pulse" />
                <div className="h-4 w-full rounded bg-white/[0.06] animate-skeleton-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
