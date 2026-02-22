"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TheMath() {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mb-24 sm:mb-32">
      <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
        The Math
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        Build once. Runs forever.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
        You pay once for a custom automation. It runs for years. Compare that to
        paying someone $18/hr to do the same task every single day —
        indefinitely.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {/* Manual */}
        <div
          className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8"
          style={{
            boxShadow:
              "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <p className="font-mono text-xs text-cyber-gray-500 uppercase tracking-wider">
              Manual process
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-3xl sm:text-4xl font-semibold text-white font-mono">
                $9,360
              </p>
              <p className="text-sm text-cyber-gray-500 font-mono">
                per year (2 hrs/day × $18/hr)
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-sm">
                <span className="text-cyber-gray-400">Year 1</span>
                <span className="text-white font-mono">$9,360</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-cyber-gray-400">Year 2</span>
                <span className="text-white font-mono">$18,720</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-cyber-gray-400">Year 3</span>
                <span className="text-white font-mono">$28,080</span>
              </div>
              <div className="flex justify-between text-sm border-t border-white/[0.06] pt-2">
                <span className="text-cyber-gray-400">Year 4</span>
                <span className="text-[#FF5F57] font-mono font-semibold">
                  $37,440
                </span>
              </div>
            </div>
            <p className="text-xs text-cyber-gray-500 leading-relaxed pt-1">
              Plus errors. Plus missed follow-ups. Plus the opportunity cost of
              what that person could be doing instead.
            </p>
          </div>
        </div>

        {/* Automated */}
        <div
          className="rounded-xl border border-cyber-accent/20 bg-white/[0.02] p-6 sm:p-8 relative overflow-hidden"
          style={{
            boxShadow:
              "0 2px 24px -4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(64,224,255,0.04)",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(64,224,255,0.03), transparent)",
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex items-center gap-2 mb-5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#4ADE80]" />
              <p className="font-mono text-xs text-cyber-accent uppercase tracking-wider">
                Automated
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-3xl sm:text-4xl font-semibold text-white font-mono">
                  One-time
                </p>
                <p className="text-sm text-cyber-accent font-mono">
                  build cost, then $0/hr forever
                </p>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-cyber-gray-400">Year 1</span>
                  <span className="text-white font-mono">Build cost</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cyber-gray-400">Year 2</span>
                  <span className="text-[#4ADE80] font-mono">$0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-cyber-gray-400">Year 3</span>
                  <span className="text-[#4ADE80] font-mono">$0</span>
                </div>
                <div className="flex justify-between text-sm border-t border-white/[0.06] pt-2">
                  <span className="text-cyber-gray-400">Year 4</span>
                  <span className="text-[#4ADE80] font-mono font-semibold">
                    $0
                  </span>
                </div>
              </div>
              <p className="text-xs text-cyber-gray-300 leading-relaxed pt-1">
                Zero errors. Zero sick days. Runs 24/7 at machine speed. And
                your employee gets their 2 hours back every day to do meaningful
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
