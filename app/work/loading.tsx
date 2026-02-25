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
          <div className="h-10 w-80 max-w-full rounded bg-white/[0.06] animate-skeleton-pulse mb-5" />
          <div className="h-5 w-96 max-w-full rounded bg-white/[0.06] animate-skeleton-pulse" />
        </div>

        {/* Project — full-width image placeholder */}
        <div className="border-b border-white/[0.06]">
          <div className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] bg-white/[0.03] animate-skeleton-pulse" />

          <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-10 pb-14 sm:pt-12 sm:pb-16">
            {/* Title block skeleton */}
            <div className="mb-8">
              <div className="h-3 w-24 rounded bg-white/[0.06] animate-skeleton-pulse mb-4" />
              <div className="h-8 w-72 max-w-full rounded bg-white/[0.06] animate-skeleton-pulse mb-3" />
              <div className="h-5 w-96 max-w-full rounded bg-white/[0.06] animate-skeleton-pulse" />
            </div>

            {/* Results list skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-8 pt-8 border-t border-white/[0.06]">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white/[0.06] animate-skeleton-pulse flex-shrink-0" />
                  <div className="h-4 w-full rounded bg-white/[0.06] animate-skeleton-pulse" />
                </div>
              ))}
            </div>

            {/* CTA skeleton */}
            <div className="h-4 w-32 rounded bg-white/[0.06] animate-skeleton-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
