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

    getGSAP().then(({ gsap }) => {
      if (reverted) return;

      ctx = gsap.context(() => {
        /* ── Label fade ── */
        section
          .querySelectorAll<HTMLElement>("[data-animate='label']")
          .forEach((t) => {
            gsap.from(t, {
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
              scrollTrigger: { trigger: t, start: "top 85%" },
            });
          });

        /* ── Per-subsection animations ── */
        section
          .querySelectorAll<HTMLElement>("[data-subsection]")
          .forEach((sub, i) => {
            const content = sub.querySelector("[data-content]");
            const visual = sub.querySelector("[data-visual]");
            const features = sub.querySelectorAll("[data-feature]");
            const flipped = i === 1;

            if (content) {
              gsap.from(content, {
                x: flipped ? 20 : -20,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: { trigger: sub, start: "top 75%" },
              });
            }

            if (visual) {
              gsap.from(visual, {
                x: flipped ? -20 : 20,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
                scrollTrigger: { trigger: sub, start: "top 75%" },
              });
            }

            if (features.length) {
              gsap.from(features, {
                y: 8,
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
                scrollTrigger: { trigger: features[0], start: "top 90%" },
              });
            }

            /* Section-specific visual animations */
            if (i === 0) {
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

            if (i === 1) {
              sub.querySelectorAll("[data-bar]").forEach((bar) => {
                gsap.from(bar, {
                  scaleX: 0,
                  duration: 1,
                  ease: "power2.out",
                  transformOrigin: "left center",
                  scrollTrigger: { trigger: bar, start: "top 88%" },
                });
              });

              sub
                .querySelectorAll<HTMLElement>("[data-speed]")
                .forEach((el) => {
                  const target = parseFloat(el.dataset.speed || "0");
                  const counter = { v: 0 };
                  gsap.to(counter, {
                    v: target,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: { trigger: el, start: "top 88%" },
                    onUpdate: () => {
                      el.textContent = counter.v.toFixed(1) + "s";
                    },
                  });
                });

              const speedCard = sub.querySelector("[data-speed-card]");
              if (speedCard) {
                gsap.from(speedCard, {
                  y: 20,
                  opacity: 0,
                  duration: 0.6,
                  delay: 0.3,
                  ease: "power3.out",
                  scrollTrigger: { trigger: speedCard, start: "top 90%" },
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

    return () => {
      reverted = true;
      ctx?.revert();
    };
  }, []);

  return <span ref={ref} className="hidden" aria-hidden="true" />;
}
