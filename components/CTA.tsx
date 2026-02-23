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
      className="relative w-full pt-14 pb-16 sm:pt-20 sm:pb-24 md:pt-20 md:pb-28 bg-[#050505] border-t border-white/[0.04]"
      aria-labelledby="cta-heading"
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

      {/* Accent glow — extends beyond section for soft bleed */}
      <div
        className="absolute -top-32 -bottom-32 left-0 right-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(64,224,255,0.05), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <p
            data-label
            className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4"
            style={{ opacity: 0 }}
          >
            Get Started
          </p>
          <WordReveal
            text="Ready when you are."
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight"
          />
        </div>

        {/* Body + CTA */}
        <div className="max-w-2xl">
          <p
            data-fade
            className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed"
            style={{ opacity: 0, transform: "translateY(10px)" }}
          >
            Tell me what&apos;s slowing your business down. I&apos;ll put
            together a clear plan — no jargon, no obligations.
          </p>

          <div
            data-fade
            className="mt-5 flex items-center gap-3"
            style={{ opacity: 0, transform: "translateY(10px)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-xs font-mono text-cyber-gray-500">
              Accepting new projects
            </span>
          </div>

          <div
            data-fade
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4"
            style={{ opacity: 0, transform: "translateY(10px)" }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-black font-semibold text-base rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.4)]"
              data-umami-event="cta-start-conversation"
            >
              <span>Start a Conversation</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <p className="text-[11px] font-mono text-cyber-gray-500">
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
