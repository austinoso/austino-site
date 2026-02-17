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
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const timelineProgressRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
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

      /* ── Timeline progress line ── */
      if (timelineTrackRef.current && timelineProgressRef.current) {
        gsap.set(timelineProgressRef.current, { scaleY: 0 });

        ScrollTrigger.create({
          trigger: timelineTrackRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 0.8,
          animation: gsap.to(timelineProgressRef.current, {
            scaleY: 1,
            ease: "none",
          }),
        });
      }

      /* ── Row entrance + node pulse ── */
      rowRefs.current.forEach((row, i) => {
        if (!row) return;

        const node = nodeRefs.current[i];
        const num = row.querySelector<HTMLElement>("[data-num]");
        const title = row.querySelector<HTMLElement>("[data-title]");
        const desc = row.querySelector<HTMLElement>("[data-desc]");
        const glow = node?.querySelector<HTMLElement>("[data-glow]");
        const ring = node?.querySelector<HTMLElement>("[data-ring]");

        // Initial states
        gsap.set(row, { opacity: 0, x: 40 });
        if (node) gsap.set(node, { scale: 0 });

        // Entrance timeline
        const tl = gsap.timeline({
          scrollTrigger: { trigger: row, start: "top 78%" },
        });

        // Node pops in
        if (node) {
          tl.to(node, {
            scale: 1,
            duration: 0.5,
            ease: "back.out(2.5)",
          });
        }

        // Row slides in
        tl.to(
          row,
          { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3",
        );

        // Number scales up
        if (num) {
          tl.from(
            num,
            { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" },
            "-=0.5",
          );
        }

        // Title slides in
        if (title) {
          tl.from(
            title,
            { y: 15, opacity: 0, duration: 0.5, ease: "power3.out" },
            "-=0.3",
          );
        }

        // Description fades in
        if (desc) {
          tl.from(
            desc,
            { opacity: 0, duration: 0.5, ease: "power2.out" },
            "-=0.2",
          );
        }

        // Active state — glow + brighten when in viewport center
        ScrollTrigger.create({
          trigger: row,
          start: "top 65%",
          end: "bottom 35%",
          onEnter: () => activateRow(row, node, glow, ring, true),
          onLeave: () => activateRow(row, node, glow, ring, false),
          onEnterBack: () => activateRow(row, node, glow, ring, true),
          onLeaveBack: () => activateRow(row, node, glow, ring, false),
        });
      });

      /* ── Closer ── */
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

  function activateRow(
    row: HTMLDivElement | null,
    node: HTMLDivElement | null,
    glow: HTMLElement | null | undefined,
    ring: HTMLElement | null | undefined,
    active: boolean,
  ) {
    if (row) {
      gsap.to(row, {
        opacity: active ? 1 : 0.3,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
    if (glow) {
      gsap.to(glow, {
        opacity: active ? 1 : 0,
        scale: active ? 1 : 0.5,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
    if (ring) {
      gsap.to(ring, {
        borderColor: active ? "rgba(64,224,255,0.8)" : "rgba(64,224,255,0.15)",
        backgroundColor: active
          ? "rgba(64,224,255,0.15)"
          : "rgba(64,224,255,0.03)",
        scale: active ? 1.15 : 1,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
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

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* Header */}
        <div className="mb-16 sm:mb-24 relative">
          <p
            ref={labelRef}
            className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4 relative"
          >
            The Problem
          </p>

          <h2
            id="pain-points-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight max-w-2xl relative"
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

        {/* Timeline layout */}
        <div className="relative" ref={timelineTrackRef}>
          {/* Vertical track line */}
          <div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-white/[0.06]"
            aria-hidden="true"
          />
          {/* Progress fill */}
          <div
            ref={timelineProgressRef}
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px origin-top"
            style={{
              background:
                "linear-gradient(to bottom, rgba(64,224,255,0.6), rgba(64,224,255,0.15))",
            }}
            aria-hidden="true"
          />

          {/* Rows */}
          <div className="space-y-16 sm:space-y-20">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="relative grid grid-cols-[2rem_1fr] sm:grid-cols-[3rem_1fr] gap-6 sm:gap-10"
              >
                {/* Node on the line */}
                <div
                  ref={(el) => {
                    nodeRefs.current[index] = el;
                  }}
                  className="relative flex items-start justify-center pt-1"
                >
                  {/* Glow behind node */}
                  <div
                    data-glow
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(64,224,255,0.25), transparent 70%)",
                      opacity: 0,
                    }}
                  />
                  {/* Ring */}
                  <div
                    data-ring
                    className="relative h-3 w-3 rounded-full border-2 border-cyber-accent/15 bg-cyber-accent/[0.03]"
                  />
                </div>

                {/* Content */}
                <div
                  ref={(el) => {
                    rowRefs.current[index] = el;
                  }}
                  style={{ opacity: 0 }}
                >
                  <span
                    data-num
                    className="inline-block font-mono text-sm font-semibold text-cyber-accent/60 mb-3 tracking-wider"
                  >
                    {point.num}
                  </span>
                  <h3
                    data-title
                    className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-3"
                  >
                    {point.question}
                  </h3>
                  <p
                    data-desc
                    className="text-sm sm:text-base text-cyber-gray-300 leading-relaxed max-w-xl"
                  >
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closer */}
        <div
          ref={closerRef}
          className="mt-16 sm:mt-24 ml-10 sm:ml-[4.75rem] max-w-xl"
        >
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
