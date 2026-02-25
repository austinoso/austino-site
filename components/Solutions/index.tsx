"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WordReveal from "@/components/ui/WordReveal";

import WebDevelopment from "./WebDevelopment";
import Automation from "./Automation";
import OngoingSupport from "./OngoingSupport";

gsap.registerPlugin(ScrollTrigger);

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const subs =
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-subsection]");
    const closer = sectionRef.current?.querySelector("[data-closer]");

    ctx = gsap.context(() => {
      /* Label fade */
      if (labelRef.current) {
        gsap.from(labelRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: { trigger: labelRef.current, start: "top 85%" },
        });
      }

      /* Subsection animations */
      subs?.forEach((sub, i) => {
        const content = sub.querySelector("[data-content]");
        const visual = sub.querySelector("[data-visual]");
        const features = sub.querySelectorAll("[data-feature]");
        const flipped = i === 1;

        /* Content slides in */
        if (content) {
          gsap.from(content, {
            x: flipped ? 20 : -20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: sub, start: "top 75%" },
          });
        }

        /* Visual slides in from opposite side */
        if (visual) {
          gsap.from(visual, {
            x: flipped ? -20 : 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: sub, start: "top 75%" },
          });
        }

        /* Features */
        if (features.length) {
          gsap.from(features, {
            y: 8,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
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
            gsap.from(lines, {
              opacity: 0,
              y: 4,
              duration: 0.2,
              stagger: 0.08,
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
              x: 10,
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
              scrollTrigger: { trigger: rows[0], start: "top 90%" },
            });
          }
        }
      });

      /* Closer fade */
      if (closer) {
        gsap.from(closer, {
          y: 10,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: { trigger: closer, start: "top 90%" },
        });
      }
    }, sectionRef);

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 border-b border-white/[0.06]"
      style={{ background: "rgba(6,6,8,0.92)" }}
      aria-labelledby="solutions-heading"
    >
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <p ref={labelRef} className="section-label mb-5">
            The Edge
          </p>
          <WordReveal
            text="How you take the lead."
            id="solutions-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight"
            accentWords={["lead."]}
          />
        </div>

        <div className="space-y-20 sm:space-y-24">
          <WebDevelopment />
          <Automation />
          <OngoingSupport />
        </div>

        {/* Closer — consultative positioning */}
        <div
          data-closer
          className="mt-16 sm:mt-20 pt-10 border-t border-white/[0.06] max-w-2xl"
        >
          <p className="font-display text-2xl sm:text-3xl font-semibold text-cyber-gray-300 leading-snug">
            I only work with one business per niche in your area.{" "}
            <span className="text-gradient">
              Your competition won&apos;t get this from me.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
