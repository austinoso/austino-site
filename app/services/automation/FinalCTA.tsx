"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef}>
      {/* ─── Closer ─── */}
      <section data-fade className="mb-20 sm:mb-28">
        <div className="border-t border-white/[0.06] pt-10 max-w-xl">
          <p className="text-lg sm:text-xl text-cyber-gray-300 leading-relaxed">
            If you&apos;re doing the same task twice, you&apos;re paying twice.{" "}
            <span className="text-white font-medium">
              Let&apos;s find the bottleneck and fix it.
            </span>
          </p>
          <Link
            href="/services/growth-strategy"
            className="inline-flex items-center gap-2 text-sm text-cyber-accent/70 hover:text-cyber-accent transition-colors duration-300 mt-6"
          >
            Already automated? Keep growing with a long-term strategy
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section data-fade>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          <div className="max-w-xl">
            <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
              Get Started
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4">
              What&apos;s eating your time?
            </h2>
            <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
              Tell me what&apos;s slowing you down and I&apos;ll map out exactly
              what can be automated — and what it would save you.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-black font-semibold text-base rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.4)] w-full sm:w-auto"
            >
              <span>Start a Conversation</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
