"use client";

import { useEffect, useRef } from "react";
import { getGSAP } from "@/lib/gsap";

/**
 * Thin client component that adds scroll-triggered GSAP animations
 * to the Solutions section. Renders a hidden marker and works
 * off the parent section's DOM via data attributes.
 */
export default function SolutionsAnimator() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = ref.current?.closest("section");
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | null = null;
    let reverted = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        getGSAP().then(({ gsap }) => {
          if (reverted) return;

          ctx = gsap.context(() => {
            /* ── Label fade ── */
            section.querySelectorAll<HTMLElement>("[data-animate='label']").forEach((t) => {
              gsap.from(t, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
                scrollTrigger: { trigger: t, start: "top 85%" },
              });
            });

            /* ── Per-subsection animations ── */
            /*
             * Content & visual panels are NOT animated — they're just there,
             * solid and grounded. Only the data-viz mockup internals and
             * feature lists get motion (the parts that earn it).
             */
            section.querySelectorAll<HTMLElement>("[data-subsection]").forEach((sub, i) => {
              const features = sub.querySelectorAll("[data-feature]");

              /* Gentle opacity fade on feature list items — no slide */
              if (features.length) {
                gsap.from(features, {
                  opacity: 0,
                  duration: 0.5,
                  stagger: 0.06,
                  ease: "power2.out",
                  scrollTrigger: { trigger: features[0], start: "top 90%" },
                });
              }

              /* Section-specific mockup animations */
              /* i=1 → OngoingSupport / Growth (search results, badges) */
              if (i === 1) {
                const results = sub.querySelectorAll("[data-result]");
                if (results.length) {
                  gsap.from(results, {
                    y: 12,
                    opacity: 0,
                    duration: 0.4,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: { trigger: results[0], start: "top 85%" },
                  });
                }

                const badges = sub.querySelectorAll("[data-badge]");
                if (badges.length) {
                  gsap.from(badges, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.3,
                    stagger: 0.06,
                    ease: "back.out(1.7)",
                    scrollTrigger: { trigger: badges[0], start: "top 90%" },
                  });
                }
              }
            });

            /* ── Closer fade ── */
            const closer = section.querySelector("[data-closer]");
            if (closer) {
              gsap.from(closer, {
                y: 10,
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
                scrollTrigger: { trigger: closer, start: "top 90%" },
              });
            }
          }, section);
        });
      },
      { rootMargin: "200px" },
    );

    io.observe(section);

    return () => {
      reverted = true;
      io.disconnect();
      ctx?.revert();
    };
  }, []);

  return <span ref={ref} className="hidden" aria-hidden="true" />;
}
