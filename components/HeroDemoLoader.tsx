"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const HeroDemo = dynamic(() => import("./HeroDemo"), {
  ssr: false,
  loading: () => <HeroDemoSkeleton />,
});

function HeroDemoSkeleton() {
  return (
    <div className="relative rounded-2xl bg-white overflow-hidden select-none" aria-hidden="true">
      {/* Empty stage — matches demo aspect ratio (640/400) */}
      <div style={{ aspectRatio: "640/400" }} className="bg-white" />
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
