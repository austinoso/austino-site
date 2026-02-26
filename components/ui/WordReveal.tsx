"use client";

import { Fragment, useEffect, useRef } from "react";
import { getGSAP } from "@/lib/gsap";

interface WordRevealProps {
  /** The full text to animate word-by-word */
  text: string;
  /** Additional Tailwind classes for the wrapper element */
  className?: string;
  /** Render as a specific heading tag (default: "h2") */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  /** Optional id for the element (e.g. for aria-labelledby) */
  id?: string;
  /** Play immediately without waiting for heroReady or ScrollTrigger */
  immediate?: boolean;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Words to highlight with accent color (matched case-insensitively, includes punctuation) */
  accentWords?: string[];
}

export default function WordReveal({
  text,
  className = "",
  as: Tag = "h2",
  id,
  immediate = false,
  delay = 0,
  accentWords = [],
}: WordRevealProps) {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const words = text.split(" ");

  const accentSet = new Set(accentWords.map((w) => w.toLowerCase()));

  useEffect(() => {
    const els = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!els.length) return;

    // Ensure content is visible if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    let tween: { scrollTrigger?: { kill: () => void }; kill: () => void } | null = null;

    getGSAP().then(({ gsap }) => {
      tween = gsap.from(els, {
        y: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.06,
        delay,
        ...(immediate
          ? {}
          : { scrollTrigger: { trigger: els[0], start: "top 85%" } }),
      });
    });

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, [text]);

  return (
    <Tag id={id} className={className}>
      {words.map((word, i) => {
        const isAccent = accentSet.has(
          word.toLowerCase().replace(/[.,!?;:]+$/, ""),
        );
        return (
          <Fragment key={i}>
            <span
              className="inline-block"
              style={{ clipPath: "inset(-0.15em 0)" }}
            >
              <span
                ref={(el) => {
                  wordsRef.current[i] = el;
                }}
                className={`inline-block${isAccent ? " text-cyber-accent" : ""}`}
              >
                {word}
              </span>
            </span>{" "}
          </Fragment>
        );
      })}
    </Tag>
  );
}
