"use client";

import { useEffect, useRef, type ReactNode, type HTMLAttributes } from "react";
import { getGSAP } from "@/lib/gsap";

/**
 * Drop-in wrapper that turns a server-rendered section into a
 * scroll-animated one.  Children are RSC-rendered on the server
 * (fast LCP) and progressively enhanced with GSAP on the client.
 *
 * Mark elements with `data-animate` to opt in:
 *   "label"            – simple fade-in
 *   "fade"             – slide-up (12 px) + fade, staggered if multiple
 *   "card"             – larger slide-up (32 px) + fade, staggered
 *   "slide-up"         – slide-up (20 px) + fade, individual
 *   "slide-up-delayed" – same, with 0.1 s delay
 *   "line"             – scaleX grow from left
 */

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: "div" | "section";
};

export default function ScrollReveal({
  children,
  as: Tag = "div",
  ...htmlProps
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | null = null;
    let reverted = false;

    getGSAP().then(({ gsap }) => {
      if (reverted) return;

      ctx = gsap.context(() => {
        /* ── label — simple fade ── */
        el.querySelectorAll<HTMLElement>("[data-animate='label']").forEach(
          (t) => {
            gsap.from(t, {
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
              scrollTrigger: { trigger: t, start: "top 85%" },
            });
          },
        );

        /* ── fade — slide-up + stagger ── */
        const fades = el.querySelectorAll<HTMLElement>("[data-animate='fade']");
        if (fades.length) {
          gsap.from(fades, {
            y: 12,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: fades[0], start: "top 88%" },
          });
        }

        /* ── card — larger slide-up + stagger ── */
        const cards = el.querySelectorAll<HTMLElement>("[data-animate='card']");
        if (cards.length) {
          gsap.from(cards, {
            y: 32,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: { trigger: cards[0], start: "top 82%" },
          });
        }

        /* ── slide-up — individual elements ── */
        el.querySelectorAll<HTMLElement>("[data-animate='slide-up']").forEach(
          (t) => {
            gsap.from(t, {
              y: 20,
              opacity: 0,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: { trigger: t, start: "top 85%" },
            });
          },
        );

        /* ── slide-up-delayed — same with delay ── */
        el.querySelectorAll<HTMLElement>(
          "[data-animate='slide-up-delayed']",
        ).forEach((t) => {
          gsap.from(t, {
            y: 20,
            opacity: 0,
            duration: 0.6,
            delay: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: t, start: "top 85%" },
          });
        });

        /* ── line — scaleX from left ── */
        el.querySelectorAll<HTMLElement>("[data-animate='line']").forEach(
          (t) => {
            gsap.from(t, {
              scaleX: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: { trigger: t, start: "top 92%" },
            });
          },
        );
      }, el);
    });

    return () => {
      reverted = true;
      ctx?.revert();
    };
  }, []);

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} {...htmlProps}>
      {children}
    </Component>
  );
}
