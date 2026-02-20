"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip smooth scrolling for users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    // Only run on desktop for performance
    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    let smoother: { kill: () => void } | null = null;

    // Dynamically import GSAP plugins to reduce initial JS bundle
    Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
      import("gsap/ScrollSmoother"),
    ]).then(([{ gsap }, { ScrollTrigger }, { ScrollSmoother }]) => {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      smoother = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current!,
        content: smoothContentRef.current!,
        smooth: 0.8,
        effects: true,
        smoothTouch: 0.1,
      });

      (window as unknown as Record<string, unknown>).__smoother = smoother;
    });

    return () => {
      if (smoother) {
        smoother.kill();
        delete (window as unknown as Record<string, unknown>).__smoother;
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={smoothWrapperRef}>
      <div id="smooth-content" ref={smoothContentRef}>
        {children}
      </div>
    </div>
  );
}
