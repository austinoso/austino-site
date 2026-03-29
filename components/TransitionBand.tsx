"use client";

import { useEffect, useRef, useState } from "react";

export default function TransitionBand() {
  const ref = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const element = ref.current;
    if (!element) return;
    let frame = 0;

    const updateRevealState = () => {
      frame = 0;
      const revealPoint = element.offsetTop - window.innerHeight * 0.76;
      setRevealed(window.scrollY >= revealPoint);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateRevealState);
    };

    updateRevealState();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-[#D7C8BA] bg-[#EFE5DB]"
      aria-label="Homepage transition"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 motion-reduce:hidden"
        style={{
          width: "calc(100% + 96px)",
          transform: revealed ? "translateX(calc(100% - 18px))" : "translateX(0)",
          transition: "transform 900ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[#7A6554]" />
      </div>

      <div
        className={`relative mx-auto max-w-[1600px] px-6 py-11 transition-all duration-700 ease-out sm:px-10 sm:py-12 md:px-16 lg:px-20 ${
          revealed
            ? "translate-x-0 translate-y-0 opacity-100"
            : "translate-x-2 translate-y-3 opacity-0 motion-reduce:translate-x-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
        }`}
      >
        <div className="max-w-4xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A4F16]">
            How I Help
          </p>
          <h2 className="max-w-3xl font-display text-[1.9rem] font-bold leading-[1.06] tracking-tight text-warm-white sm:text-[2.2rem] md:text-[2.55rem]">
            Showing up is one part. Being chosen is the rest.
          </h2>
          <p className="mt-4 max-w-[58rem] text-[15px] leading-relaxed text-[#6D5A4B] sm:text-[16px]">
            Most of the work comes down to showing up in the right searches, earning trust fast,
            and tightening the follow-through that keeps good leads from slipping through.
          </p>
        </div>
      </div>
    </section>
  );
}
