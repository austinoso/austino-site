"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import WebDevelopment from "./WebDevelopment";
import Automation from "./Automation";
import OngoingSupport from "./OngoingSupport";

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingWordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const labelRef = useRef<HTMLParagraphElement>(null);

  const headlineWords = "How I solve it.".split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Label fade */
      if (labelRef.current) {
        gsap.from(labelRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: labelRef.current, start: "top 85%" },
        });
      }

      /* Word-by-word headline */
      const words = headingWordsRef.current.filter(Boolean);
      if (words.length) {
        gsap.set(words, { y: "100%", opacity: 0 });
        gsap.to(words, {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: words[0], start: "top 82%" },
        });
      }

      /* Subsection animations */
      const subs =
        sectionRef.current?.querySelectorAll<HTMLElement>("[data-subsection]");

      subs?.forEach((sub, i) => {
        const content = sub.querySelector("[data-content]");
        const visual = sub.querySelector("[data-visual]");
        const features = sub.querySelectorAll("[data-feature]");
        const flipped = i === 1;

        /* Content slides in */
        if (content) {
          gsap.from(content, {
            x: flipped ? 30 : -30,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: sub, start: "top 75%" },
          });
        }

        /* Visual slides in from opposite side */
        if (visual) {
          gsap.from(visual, {
            x: flipped ? -30 : 30,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: sub, start: "top 75%" },
          });
        }

        /* Features stagger */
        if (features.length) {
          gsap.from(features, {
            y: 14,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: { trigger: features[0], start: "top 90%" },
          });
        }

        /* ── Section-specific visual animations ── */

        if (i === 0) {
          /* Performance card: bars fill + numbers count */
          sub.querySelectorAll("[data-bar]").forEach((bar) => {
            gsap.from(bar, {
              scaleX: 0,
              duration: 1,
              ease: "power2.out",
              transformOrigin: "left center",
              scrollTrigger: { trigger: bar, start: "top 88%" },
            });
          });

          sub.querySelectorAll<HTMLElement>("[data-score]").forEach((el) => {
            const target = parseInt(el.dataset.score || "0");
            const counter = { v: 0 };
            gsap.to(counter, {
              v: target,
              duration: 1.2,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 88%" },
              onUpdate: () => {
                el.textContent = Math.round(counter.v).toString();
              },
            });
          });
        }

        if (i === 1) {
          /* Terminal: typewriter line-by-line */
          const lines = sub.querySelectorAll("[data-line]");
          if (lines.length) {
            gsap.set(lines, { opacity: 0, y: 4 });
            gsap.to(lines, {
              opacity: 1,
              y: 0,
              duration: 0.25,
              stagger: 0.15,
              ease: "power1.out",
              scrollTrigger: { trigger: visual, start: "top 72%" },
            });
          }
        }

        if (i === 2) {
          /* Dashboard: counters + status row stagger */
          sub.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
            const target = parseFloat(el.dataset.count || "0");
            const suffix = el.dataset.suffix || "";
            const decimal = el.dataset.decimal === "true";
            const counter = { v: 0 };
            gsap.to(counter, {
              v: target,
              duration: 1.4,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 85%" },
              onUpdate: () => {
                el.textContent =
                  (decimal
                    ? counter.v.toFixed(1)
                    : Math.round(counter.v).toString()) + suffix;
              },
            });
          });

          const rows = sub.querySelectorAll("[data-row]");
          if (rows.length) {
            gsap.from(rows, {
              x: 16,
              opacity: 0,
              duration: 0.4,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: { trigger: rows[0], start: "top 90%" },
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 md:py-36 bg-[#050505]"
      aria-labelledby="solutions-heading"
    >
      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* Header */}
        <div className="mb-16 sm:mb-24">
          <p
            ref={labelRef}
            className="font-mono text-[10px] text-cyber-gray-500 uppercase tracking-[0.2em] mb-4"
          >
            The Solution
          </p>
          <h2
            id="solutions-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight"
          >
            {headlineWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
                <span
                  ref={(el) => {
                    headingWordsRef.current[i] = el;
                  }}
                  className="inline-block"
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>
        </div>

        <div className="space-y-24 sm:space-y-32">
          <WebDevelopment />
          <Automation />
          <OngoingSupport />
        </div>
      </div>
    </section>
  );
}
