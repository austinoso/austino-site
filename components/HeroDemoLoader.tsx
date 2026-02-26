"use client";

import dynamic from "next/dynamic";

const HeroDemo = dynamic(() => import("./HeroDemo"), {
  ssr: false,
  loading: () => (
    <div
      className="relative rounded-xl border border-white/[0.06] bg-[#0C0D12] overflow-hidden"
      style={{
        boxShadow:
          "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02)",
      }}
      aria-hidden="true"
    >
      {/* Chrome bar skeleton */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0A0B0F]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 rounded-lg bg-white/[0.04] text-[11px] text-cyber-gray-500 font-mono">
            &nbsp;
          </div>
        </div>
      </div>
      {/* Empty stage with matching aspect ratio */}
      <div className="aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[16/10] bg-[#080A0E]" />
    </div>
  ),
});

export default function HeroDemoLoader() {
  return <HeroDemo />;
}
