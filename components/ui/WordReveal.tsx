"use client";

import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onHeroReady } from "@/lib/heroReady";

gsap.registerPlugin(ScrollTrigger);

interface WordRevealProps {
  /** The full text to animate word-by-word */
  text: string;
  /** Additional Tailwind classes for the wrapper element */
  className?: string;
  /** Render as a specific heading tag (default: "h2") */
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  /** Optional id for the element (e.g. for aria-labelledby) */
  id?: string;
}

export default function WordReveal({
  text,
  className = "",
  as: Tag = "h2",
  id,
}: WordRevealProps) {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const words = text.split(" ");

  useEffect(() => {
    const els = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!els.length) return;

    gsap.set(els, { y: "100%", opacity: 0 });

    let tween: gsap.core.Tween | null = null;

    onHeroReady(() => {
      tween = gsap.to(els, {
        y: "0%",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        stagger: 0.04,
        scrollTrigger: { trigger: els[0], start: "top 85%" },
      });
    });

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, [text]);

  return (
    <Tag id={id} className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[0.15em]">
            <span
              ref={(el) => {
                wordsRef.current[i] = el;
              }}
              className="inline-block"
            >
              {word}
            </span>
          </span>{" "}
        </Fragment>
      ))}
    </Tag>
  );
}
