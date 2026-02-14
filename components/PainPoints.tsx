"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const painPoints = [
  {
    num: "01",
    question: "Your evening is spent on data entry",
    description:
      "Appointments get booked, but then you're manually entering them into your calendar, your billing system, and maybe a spreadsheet. That's 3 touches for 1 event.",
  },
  {
    num: "02",
    question: "Your tools don't talk to each other",
    description:
      "You've got a booking app, a payment processor, an email tool, and a spreadsheet. None of them sync. So you're the integration layer — copying and pasting between tabs.",
  },
  {
    num: "03",
    question: "Your website isn't working for you",
    description:
      "It loads slow, doesn't rank locally, and customers can't book from it. Instead of bringing clients in, it's turning them away — and you might not even know it.",
  },
];

export default function PainPoints() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingWordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const closerRef = useRef<HTMLDivElement>(null);
  const closerLineRef = useRef<HTMLDivElement>(null);

  const headlineWords = "You didn't start a business to do IT work.".split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── Label fade ── */
      if (labelRef.current) {
        gsap.from(labelRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: labelRef.current, start: "top 85%" },
        });
      }

      /* ── Word-by-word headline reveal ── */
      const words = headingWordsRef.current.filter(Boolean);
      if (words.length) {
        gsap.set(words, { y: "100%", opacity: 0 });
        gsap.to(words, {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: words[0],
            start: "top 82%",
          },
        });
      }

      /* ── Card cascade + scroll-based active state ── */
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const num = card.querySelector<HTMLElement>("[data-num]");
        const title = card.querySelector<HTMLElement>("[data-title]");
        const desc = card.querySelector<HTMLElement>("[data-desc]");

        // Staggered entrance: number → title → description
        const cardTl = gsap.timeline({
          scrollTrigger: { trigger: card, start: "top 85%" },
        });

        if (num) {
          cardTl.from(num, {
            scale: 0.6,
            opacity: 0,
            duration: 0.4,
            ease: "back.out(2)",
          });
        }
        if (title) {
          cardTl.from(
            title,
            { x: -20, opacity: 0, duration: 0.5, ease: "power3.out" },
            "-=0.15",
          );
        }
        if (desc) {
          cardTl.from(
            desc,
            { opacity: 0, duration: 0.5, ease: "power2.out" },
            "-=0.2",
          );
        }

        // Active-on-scroll: brighten when centered, dim when not
        ScrollTrigger.create({
          trigger: card,
          start: "top 70%",
          end: "bottom 30%",
          onEnter: () => animateCardState(card, true),
          onLeave: () => animateCardState(card, false),
          onEnterBack: () => animateCardState(card, true),
          onLeaveBack: () => animateCardState(card, false),
        });
      });

      /* ── Closer: line grows then text fades ── */
      if (closerLineRef.current && closerRef.current) {
        const closerTl = gsap.timeline({
          scrollTrigger: {
            trigger: closerRef.current,
            start: "top 88%",
          },
        });

        closerTl.from(closerLineRef.current, {
          scaleX: 0,
          duration: 0.8,
          ease: "power2.inOut",
        });

        const closerText =
          closerRef.current.querySelector("[data-closer-text]");
        if (closerText) {
          closerTl.from(
            closerText,
            { opacity: 0, y: 12, duration: 0.6, ease: "power2.out" },
            "-=0.2",
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  function animateCardState(card: HTMLElement, active: boolean) {
    gsap.to(card, {
      opacity: active ? 1 : 0.35,
      borderColor: active ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.04)",
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto",
    });
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 md:py-36 bg-[#050505]"
      aria-labelledby="pain-points-heading"
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

      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <p
            ref={labelRef}
            className="font-mono text-[10px] text-cyber-gray-500 uppercase tracking-[0.2em] mb-4"
          >
            The Problem
          </p>

          <h2
            id="pain-points-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight max-w-2xl"
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

        {/* Pain point cards */}
        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="grid sm:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.015]"
              style={{ opacity: 0.35 }}
            >
              {/* Number */}
              <div className="sm:col-span-2 flex items-start">
                <span
                  data-num
                  className="font-mono text-3xl sm:text-4xl font-bold text-cyber-accent/30"
                >
                  {point.num}
                </span>
              </div>

              {/* Content */}
              <div className="sm:col-span-10">
                <h3
                  data-title
                  className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-3"
                >
                  {point.question}
                </h3>
                <p
                  data-desc
                  className="text-sm sm:text-base text-cyber-gray-300 leading-relaxed max-w-2xl"
                >
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closer */}
        <div ref={closerRef} className="mt-14 sm:mt-20 max-w-xl">
          <div
            ref={closerLineRef}
            className="h-px w-full bg-gradient-to-r from-cyber-accent/40 to-transparent mb-6 origin-left"
          />
          <p
            data-closer-text
            className="text-lg sm:text-xl text-cyber-gray-300 leading-relaxed"
          >
            Every hour you spend on busywork is an hour not spent growing your
            business.{" "}
            <span className="text-white font-medium">
              That&apos;s what I fix.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
