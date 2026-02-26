"use client";

import { useEffect, useRef } from "react";
import { getGSAP } from "@/lib/gsap";

/**
 * Thin client component that applies the standard service-page
 * scroll animations.  Drop this inside a server <main> and it
 * will walk up to its nearest ancestor to find the data-* targets.
 *
 * Animates:
 *   [data-fade]        – slide-up 24 px + fade (scroll-triggered)
 *   [data-hero-visual] – slide-in from right 40 px (on load)
 *   [data-hero-copy]   – slide-in from left 30 px (on load)
 *   [data-step]        – slide-up 20 px, staggered 0.1 s (scroll-triggered)
 */
export default function PageScrollAnimator() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Walk up to the nearest <main> (the page root)
    const root = el.closest("main");
    if (!root) return;

    let ctx: { revert: () => void } | null = null;
    let reverted = false;

    getGSAP().then(({ gsap, ScrollTrigger }) => {
      if (reverted) return;

      ctx = gsap.context(() => {
        /* ── data-fade — scroll-triggered slide-up ── */
        gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((target) => {
          gsap.from(target, {
            y: 24,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: target, start: "top 85%" },
          });
        });

        /* ── data-hero-visual — slide-in from right on load ── */
        const heroVisual = root.querySelector<HTMLElement>("[data-hero-visual]");
        if (heroVisual) {
          gsap.from(heroVisual, {
            x: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.2,
          });
        }

        /* ── data-hero-copy — slide-in from left on load ── */
        const heroCopy = root.querySelector<HTMLElement>("[data-hero-copy]");
        if (heroCopy) {
          gsap.from(heroCopy, {
            x: -30,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: 0.1,
          });
        }

        /* ── data-step — staggered slide-up ── */
        gsap.utils.toArray<HTMLElement>("[data-step]").forEach((target, i) => {
          gsap.from(target, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: target, start: "top 88%" },
          });
        });
      }, root);
    });

    return () => {
      reverted = true;
      ctx?.revert();
    };
  }, []);

  return <span ref={ref} className="hidden" aria-hidden="true" />;
}
