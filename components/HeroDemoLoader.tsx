"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const HeroDemo = dynamic(() => import("./HeroDemo"), {
  ssr: false,
  loading: () => <HeroDemoSkeleton />,
});

function HeroDemoSkeleton() {
  return (
    <div
      className="relative rounded-xl border border-stone-300 bg-white overflow-hidden select-none shadow-xl shadow-stone-900/[0.06]"
      aria-hidden="true"
    >
      {/* Chrome bar skeleton — matches light demo */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-stone-300/60 bg-[#E8E2DA]">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]/85" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]/85" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]/85" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 rounded-lg bg-[#F7F4F0] text-[11px] text-stone-400 font-mono">
            &nbsp;
          </div>
        </div>
      </div>
      {/* Empty stage — matches demo aspect ratio (640/400) */}
      <div style={{ aspectRatio: "640/400" }} className="bg-[#F0EAE2]" />
    </div>
  );
}

export default function HeroDemoLoader() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Yield to the browser so the LCP text paints first,
    // then load the heavy demo + GSAP bundle.
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(() => setReady(true), { timeout: 1500 });
      return () => cancelIdleCallback(id);
    }
    // Safari doesn't support requestIdleCallback — fall back to setTimeout
    const id = setTimeout(() => setReady(true), 1500);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return <HeroDemoSkeleton />;
  return <HeroDemo />;
}
