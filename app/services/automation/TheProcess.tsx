"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TheProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current!, start: "top 85%" },
      });

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el, i) => {
        gsap.from(el, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      step: "01",
      title: "Audit",
      description:
        "We walk through your daily operations. I pinpoint every task that\u2019s costing you time and can be automated.",
    },
    {
      step: "02",
      title: "Blueprint",
      description:
        "I map out the full workflow \u2014 which tools connect, what triggers what, and how it all fits together.",
    },
    {
      step: "03",
      title: "Build & Connect",
      description:
        "I build the automations, connect your existing tools, and test every edge case before it goes live.",
    },
    {
      step: "04",
      title: "Go Live & Monitor",
      description:
        "We flip the switch. I monitor everything for the first week and fine-tune based on real data.",
    },
  ];

  return (
    <section ref={sectionRef} className="mb-24 sm:mb-32">
      <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
        The Process
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        How we get from &quot;this is eating my time&quot; to &quot;it just
        runs.&quot;
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
        You don&apos;t need to know how automation works. You just need to tell
        me what&apos;s slowing you down.
      </p>

      {/* ── Mobile: vertical timeline ── */}
      <div className="relative lg:hidden">
        <div
          className="absolute left-[15px] sm:left-[19px] top-0 bottom-0 w-px"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(100,255,218,0.2) 10%, rgba(100,255,218,0.2) 90%, transparent)",
          }}
        />
        <div className="space-y-10 sm:space-y-12">
          {steps.map((item) => (
            <div
              key={item.step}
              data-step
              className="relative flex items-start gap-5 sm:gap-8"
            >
              <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-[30px] w-[30px] sm:h-[38px] sm:w-[38px] rounded-full bg-cyber-dark border border-cyber-accent/30 shadow-[0_0_12px_rgba(100,255,218,0.08)]">
                <span className="text-[10px] sm:text-xs font-mono text-cyber-accent font-semibold">
                  {item.step}
                </span>
              </div>
              <div className="pt-0.5 sm:pt-1.5">
                <p className="text-sm sm:text-base font-semibold text-white mb-1.5">
                  {item.title}
                </p>
                <p className="text-sm text-cyber-gray-400 leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop: horizontal timeline ── */}
      <div className="hidden lg:block relative">
        <div className="grid grid-cols-4 gap-0 mb-8">
          {steps.map((item, i) => (
            <div
              key={item.step}
              data-step
              className="relative flex flex-col items-start"
            >
              {/* Marker row with connecting line */}
              <div className="relative flex items-center w-full mb-5">
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center h-[38px] w-[38px] rounded-full bg-cyber-dark border border-cyber-accent/30 shadow-[0_0_12px_rgba(100,255,218,0.08)]">
                  <span className="text-xs font-mono text-cyber-accent font-semibold">
                    {item.step}
                  </span>
                </div>
                {/* Line segment to next step */}
                {i < 3 && (
                  <div
                    className="flex-1 h-px ml-3"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(100,255,218,0.25), rgba(100,255,218,0.08))",
                    }}
                  />
                )}
              </div>
              {/* Content below the marker */}
              <div className="pr-8">
                <p className="text-base font-semibold text-white mb-2">
                  {item.title}
                </p>
                <p className="text-sm text-cyber-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
