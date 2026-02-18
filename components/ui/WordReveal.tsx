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
  /** Play immediately without waiting for heroReady or ScrollTrigger */
  immediate?: boolean;
  /** Delay before animation starts (seconds) */
  delay?: number;
}

export default function WordReveal({
  text,
  className = "",
  as: Tag = "h2",
  id,
  immediate = false,
  delay = 0,
}: WordRevealProps) {
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const words = text.split(" ");

  useEffect(() => {
    const els = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!els.length) return;

    gsap.set(els, { y: "100%", opacity: 0 });

    let tween: gsap.core.Tween | null = null;

    const play = () => {
      tween = gsap.to(els, {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.06,
        delay,
        ...(immediate
          ? {}
          : { scrollTrigger: { trigger: els[0], start: "top 85%" } }),
      });
    };

    if (immediate) {
      play();
    } else {
      onHeroReady(play);
    }

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
