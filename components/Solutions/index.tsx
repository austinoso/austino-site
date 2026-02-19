"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onHeroReady } from "@/lib/heroReady";
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

    /* Hide label immediately */
    if (labelRef.current) gsap.set(labelRef.current, { opacity: 0 });

    /* Hide subsection elements immediately */
    const subs =
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-subsection]");
    subs?.forEach((sub, i) => {
      const content = sub.querySelector("[data-content]");
      const visual = sub.querySelector("[data-visual]");
      const features = sub.querySelectorAll("[data-feature]");
      const flipped = i === 1;
      if (content) gsap.set(content, { opacity: 0, x: flipped ? 20 : -20 });
      if (visual) gsap.set(visual, { opacity: 0, x: flipped ? -20 : 20 });
      if (features.length) gsap.set(features, { opacity: 0, y: 8 });
      if (i === 1) {
        const lines = sub.querySelectorAll("[data-line]");
        if (lines.length) gsap.set(lines, { opacity: 0, y: 4 });
      }
      if (i === 2) {
        const rows = sub.querySelectorAll("[data-row]");
        if (rows.length) gsap.set(rows, { opacity: 0, x: 10 });
      }
    });
    const closer = sectionRef.current?.querySelector("[data-closer]");
    if (closer) gsap.set(closer, { opacity: 0, y: 10 });

    onHeroReady(() => {
      ctx = gsap.context(() => {
        /* Label fade */
        if (labelRef.current) {
          gsap.to(labelRef.current, {
            opacity: 1,
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
            gsap.to(content, {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: { trigger: sub, start: "top 75%" },
            });
          }

          /* Visual slides in from opposite side */
          if (visual) {
            gsap.to(visual, {
              x: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: { trigger: sub, start: "top 75%" },
            });
          }

          /* Features */
          if (features.length) {
            gsap.to(features, {
              y: 0,
              opacity: 1,
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
              gsap.to(lines, {
                opacity: 1,
                y: 0,
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
              gsap.to(rows, {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                scrollTrigger: { trigger: rows[0], start: "top 90%" },
              });
            }
          }
        });

        /* Closer fade */
        if (closer) {
          gsap.to(closer, {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: closer, start: "top 90%" },
          });
        }
      }, sectionRef);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative w-full py-16 sm:py-24 md:py-28 bg-[#050505]"
      aria-labelledby="solutions-heading"
    >
      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          contain: "strict",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* Accent glows — extends beyond section for soft bleed */}
      <div
        className="absolute -top-32 -bottom-32 left-0 right-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 25% 35%, rgba(64,224,255,0.04), transparent), radial-gradient(ellipse 80% 40% at 75% 60%, rgba(64,224,255,0.035), transparent), radial-gradient(ellipse 60% 25% at 50% 50%, rgba(120,75,255,0.025), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <p
            ref={labelRef}
            className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4"
          >
            The Solution
          </p>
          <WordReveal
            text="How I solve it."
            id="solutions-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
          />
        </div>

        <div className="space-y-24 sm:space-y-32">
          <WebDevelopment />
          <Automation />
          <OngoingSupport />
        </div>

        {/* Closer — consultative positioning */}
        <div
          data-closer
          className="mt-20 sm:mt-28 pt-10 border-t border-white/[0.06] max-w-xl"
        >
          <p className="text-lg sm:text-xl text-cyber-gray-300 leading-relaxed">
            Every business is different.{" "}
            <span className="text-white font-medium">
              I&apos;ll recommend exactly what you need &mdash; nothing more.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
