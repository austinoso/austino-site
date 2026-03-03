"use client";

import dynamic from "next/dynamic";

const HeroDemo = dynamic(() => import("./HeroDemo"), {
  ssr: false,
  loading: () => (
    <div
      className="relative rounded-xl border border-white/[0.06] bg-[#0C0B09] overflow-hidden select-none"
      style={{
        boxShadow:
          "0 24px 48px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02)",
      }}
      aria-hidden="true"
    >
      {/* Chrome bar skeleton — matches dark demo */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0A0A08]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/80" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 rounded-lg bg-white/[0.04] text-[11px] text-stone-500 font-mono">
            &nbsp;
          </div>
        </div>
      </div>
      {/* Empty stage — matches demo aspect ratio (640/400) */}
      <div style={{ aspectRatio: "640/400" }} className="bg-[#080807]" />
    </div>
  ),
});

export default function HeroDemoLoader() {
  return <HeroDemo />;
}
