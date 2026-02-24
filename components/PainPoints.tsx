"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onHeroReady } from "@/lib/heroReady";
import WordReveal from "@/components/ui/WordReveal";

gsap.registerPlugin(ScrollTrigger);

/* ────────────────────────────────────────────────────────────────── */
/*  Card data                                                        */
/* ────────────────────────────────────────────────────────────────── */

const opportunities = [
  {
    number: "01",
    title: "Their websites are stuck in\u00A02018",
    description:
      "Slow templates, broken mobile layouts, zero SEO. A fast, custom-built site puts you in a different league overnight.",
    stat: "53%",
    statLabel:
      "of mobile users leave a site that takes over 3\u00A0seconds to load",
  },
  {
    number: "02",
    title: "They\u2019re doing everything by\u00A0hand",
    description:
      "Follow-ups, scheduling, data entry \u2014 all manual. One automated workflow saves hours and closes leads faster.",
    stat: "20hrs",
    statLabel: "per week wasted on tasks that could be automated",
  },
  {
    number: "03",
    title: "They launched and walked\u00A0away",
    description:
      "No updates, no optimization, no strategy. Continuous improvement means you pull further ahead every single month.",
    stat: "88%",
    statLabel: "of users won\u2019t return after a bad experience",
  },
];

/* ────────────────────────────────────────────────────────────────── */
/*  Component                                                        */
/* ────────────────────────────────────────────────────────────────── */

export default function PainPoints() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ── Set initial hidden states before first paint (prevents CLS) ── */
  useLayoutEffect(() => {
    const s = sectionRef.current;
    if (!s) return;

    const label = s.querySelector("[data-label]") as HTMLElement;
    if (label) label.style.opacity = "0";

    s.querySelectorAll<HTMLElement>("[data-card]").forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(32px)";
    });

    const closer = s.querySelector("[data-closer]") as HTMLElement;
    if (closer) {
      closer.style.opacity = "0";
      closer.style.transform = "translateY(12px)";
    }
  }, []);

  /* ── Scroll-triggered reveal animations ── */
  useEffect(() => {
    let ctx: gsap.Context | null = null;

    onHeroReady(() => {
      ctx = gsap.context(() => {
        const s = sectionRef.current;
        if (!s) return;

        /* Label */
        const label = s.querySelector("[data-label]");
        if (label) {
          gsap.to(label, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: label, start: "top 85%" },
          });
        }

        /* Cards — staggered entrance */
        const cards = s.querySelectorAll("[data-card]");
        if (cards.length) {
          gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: { trigger: cards[0], start: "top 82%" },
          });
        }

        /* Closer */
        const closer = s.querySelector("[data-closer]");
        if (closer) {
          gsap.to(closer, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
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
      className="relative w-full pt-16 pb-24 sm:pt-20 sm:pb-32 md:pt-24 md:pb-36 bg-[#050505]"
      aria-labelledby="pain-points-heading"
    >
      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          contain: "strict",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* ── Header ── */}
        <div className="mb-16 sm:mb-24">
          <p
            data-label
            className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4"
          >
            The Opportunity
          </p>
          <WordReveal
            id="pain-points-heading"
            as="h2"
            text="Most businesses in your area aren't doing this. Yours can."
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight max-w-2xl"
            accentWords={["Yours"]}
          />
        </div>

        {/* ── Cards — editorial rows ── */}
        <div className="space-y-0">
          {opportunities.map((item, index) => (
            <div
              key={index}
              data-card
              className="group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 sm:py-14 border-t border-white/[0.06] last:border-b last:border-white/[0.06]"
            >
              {/* Number */}
              <div className="md:col-span-1 flex items-start">
                <span className="font-mono text-sm text-cyber-accent/50 tracking-wider">
                  {item.number}
                </span>
              </div>

              {/* Title + description */}
              <div className="md:col-span-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug tracking-tight mb-4 group-hover:text-cyber-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[0.9375rem] text-cyber-gray-400 leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>

              {/* Stat highlight */}
              <div className="md:col-span-5 flex items-start md:justify-end">
                <div className="flex items-start gap-4 md:text-right">
                  <div className="md:order-2 flex-shrink-0">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none">
                      {item.stat}
                    </span>
                  </div>
                  <p className="text-xs text-cyber-gray-500 leading-relaxed max-w-[180px] md:order-1 pt-2">
                    {item.statLabel}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Closer ── */}
        <div className="mt-14 sm:mt-20 max-w-xl">
          <div data-closer>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyber-gray-300 leading-snug tracking-tight">
              The bar is low.{" "}
              <span className="text-cyber-accent">Let&apos;s raise it.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
