"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getGSAP } from "@/lib/gsap";
import WordReveal from "@/components/ui/WordReveal";
import FlowLines from "@/components/ui/FlowLines";

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let reverted = false;
    let ctx: { revert: () => void } | null = null;

    /* Initial styles set via JSX to prevent CLS */
    const label = sectionRef.current?.querySelector("[data-label]");
    const body = sectionRef.current?.querySelectorAll("[data-fade]");
    const line = sectionRef.current?.querySelector("[data-line]");

    getGSAP().then(({ gsap }) => {
      if (reverted) return;
      ctx = gsap.context(() => {
        /* Label */
        if (label) {
          gsap.from(label, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: label, start: "top 85%" },
          });
        }

        /* Body + button */
        if (body?.length) {
          gsap.from(body, {
            y: 10,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: { trigger: body[0], start: "top 88%" },
          });
        }

        /* Divider line grow */
        if (line) {
          gsap.from(line, {
            scaleX: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: line, start: "top 92%" },
          });
        }
      }, sectionRef);
    });

    return () => { reverted = true; ctx?.revert(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 overflow-hidden border-b border-white/[0.06]"
      style={{
        backgroundColor: "rgba(6,6,8,0.92)",
        backgroundImage: [
          "radial-gradient(ellipse 70% 50% at 90% 85%, rgba(64,224,255,0.07), rgba(167,139,250,0.05) 50%, transparent 100%)",
          "radial-gradient(ellipse 60% 45% at 5% 95%, rgba(244,114,182,0.05), rgba(167,139,250,0.04) 50%, transparent 100%)",
          "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(64,224,255,0.03), transparent 80%)",
        ].join(", "),
      }}
      aria-labelledby="cta-heading"
    >
      <FlowLines className="absolute bottom-0 right-0 w-[50%] h-full" />

      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <p data-label className="section-label mb-5">
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
          >
            I take one client per niche in your area. If the spot is open,
            let&apos;s talk about making your online presence the one everyone
            else is trying to catch up to.
          </p>

          <div data-fade className="mt-5 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-xs font-mono text-cyber-gray-400">
              Availability is limited
            </span>
          </div>

          <div
            data-fade
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4"
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
          style={{ transformOrigin: "left center" }}
        />
      </div>
    </section>
  );
}
