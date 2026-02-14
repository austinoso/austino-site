"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const smoothContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop for performance
    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      const smoother = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current!,
        content: smoothContentRef.current!,
        smooth: 0.8, // Snappier feel, less lag
        effects: true, // Enable data-speed attributes
        smoothTouch: 0.1, // Light smooth on mobile
      });

      return () => {
        smoother.kill();
      };
    }
  }, []);

  return (
    <div id="smooth-wrapper" ref={smoothWrapperRef}>
      <div id="smooth-content" ref={smoothContentRef}>
        {children}
      </div>
    </div>
  );
}
