"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onHeroReady } from "@/lib/heroReady";
import WordReveal from "@/components/ui/WordReveal";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    /* Initial styles set via JSX to prevent CLS */
    const label = sectionRef.current?.querySelector("[data-label]");
    const body = sectionRef.current?.querySelectorAll("[data-fade]");
    const line = sectionRef.current?.querySelector("[data-line]");

    onHeroReady(() => {
      ctx = gsap.context(() => {
        /* Label */
        if (label) {
          gsap.to(label, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: label, start: "top 85%" },
          });
        }

        /* Body + button */
        if (body?.length) {
          gsap.to(body, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: { trigger: body[0], start: "top 88%" },
          });
        }

        /* Divider line grow */
        if (line) {
          gsap.to(line, {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: line, start: "top 92%" },
          });
        }
      }, sectionRef);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 overflow-hidden border-b border-white/[0.06]"
      style={{
        background: "rgba(6,6,8,0.65)",
        backdropFilter: "blur(60px)",
      }}
      aria-labelledby="cta-heading"
    >
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <p data-label className="section-label mb-5" style={{ opacity: 0 }}>
            Your Move
          </p>
          <WordReveal
            text="Your competition isn't waiting. Neither should you."
            id="cta-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            accentWords={["isn't", "waiting."]}
          />
        </div>

        {/* Body + CTA */}
        <div className="max-w-2xl">
          <p
            data-fade
            className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed"
            style={{ opacity: 0, transform: "translateY(10px)" }}
          >
            I take one client per niche in your area. If the spot is open,
            let&apos;s talk about making your online presence the one everyone
            else is trying to catch up to.
          </p>

          <div
            data-fade
            className="mt-5 flex items-center gap-3"
            style={{ opacity: 0, transform: "translateY(10px)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-xs font-mono text-cyber-gray-400">
              Availability is limited
            </span>
          </div>

          <div
            data-fade
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ opacity: 0, transform: "translateY(10px)" }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#060608] font-semibold text-[15px] rounded-lg transition-all duration-300 hover:brightness-110"
              data-umami-event="cta-start-conversation"
            >
              <span>Start a Conversation</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <p className="text-xs font-mono text-cyber-gray-400">
              Usually responds within 24 hours
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          data-line
          className="mt-14 sm:mt-20 border-t border-white/[0.06]"
          style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
        />
      </div>
    </section>
  );
}
