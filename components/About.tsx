"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onHeroReady } from "@/lib/heroReady";
import WordReveal from "@/components/ui/WordReveal";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    const label = sectionRef.current?.querySelector("[data-label]");
    const items = sectionRef.current?.querySelectorAll("[data-fade]");

    onHeroReady(() => {
      ctx = gsap.context(() => {
        if (label) {
          gsap.to(label, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: label, start: "top 85%" },
          });
        }

        if (items?.length) {
          gsap.to(items, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: items[0], start: "top 88%" },
          });
        }
      }, sectionRef);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-24 pb-24 sm:pt-32 sm:pb-32 md:pt-36 md:pb-36 bg-[#050505] border-t border-white/[0.04]"
      aria-labelledby="about-heading"
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

      {/* Subtle warm accent glow for About — differentiates from other sections */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 30%, rgba(120,75,255,0.035), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* Mission statement — full width */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <p
            data-label
            className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-5"
            style={{ opacity: 0 }}
          >
            About
          </p>
          <WordReveal
            text="Built to outpace your competition."
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
            accentWords={["outpace"]}
          />
          <p
            data-fade
            className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed mt-8 sm:mt-10"
            style={{ opacity: 0, transform: "translateY(12px)" }}
          >
            Most agencies hand you a site and disappear. I don&apos;t. I partner
            with one business per niche — yours — and keep pushing until your
            digital presence doesn&apos;t just compete, it dominates. Continuous
            optimization, ongoing support, and a refusal to settle for
            &ldquo;good enough&rdquo; mean your website keeps getting better
            while your competitors&apos; stays the same.
          </p>
        </div>

        {/* Meet the team */}
        <div className="pt-12 border-t border-white/[0.06]">
          <p
            data-fade
            className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-10"
            style={{ opacity: 0, transform: "translateY(12px)" }}
          >
            Meet the Team
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Austin — featured */}
            <div
              data-fade
              className="lg:col-span-3 relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 sm:p-8 overflow-hidden"
              style={{ opacity: 0, transform: "translateY(12px)" }}
            >
              {/* Accent glow */}
              <div
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(64,224,255,0.05) 0%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/[0.08] flex-shrink-0 shadow-lg shadow-black/40">
                  <Image
                    src="/assets/bio-pic.png"
                    alt="Austin O."
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
                <div className="min-w-0 pt-1">
                  <p className="text-xl font-semibold text-white leading-snug tracking-tight">
                    Austin O.
                  </p>
                  <p className="font-mono text-[10px] text-cyber-accent uppercase tracking-widest mt-1">
                    Developer &amp; Founder
                  </p>
                  <p className="text-sm sm:text-[0.9375rem] text-cyber-gray-400 leading-relaxed mt-3">
                    Six years building digital presences that outpace the
                    competition — websites, automation, and internal tools
                    engineered for businesses that refuse to settle.
                  </p>
                </div>
              </div>
            </div>

            {/* Rosa */}
            <div
              data-fade
              className="lg:col-span-2 flex items-start gap-5 p-6 sm:p-7 rounded-2xl border border-white/[0.06] bg-white/[0.015]"
              style={{ opacity: 0, transform: "translateY(12px)" }}
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-white/[0.08] flex-shrink-0 shadow-lg shadow-black/40">
                <Image
                  src="/assets/rosa.jpg"
                  alt="Rosa the dog"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="min-w-0 pt-1 flex-1">
                <p className="text-lg font-semibold text-white leading-snug tracking-tight">
                  Rosa
                </p>
                <p className="font-mono text-[10px] text-cyber-accent uppercase tracking-widest mt-1">
                  Head of Morale
                </p>
                <p className="text-[13px] sm:text-sm text-cyber-gray-400 leading-relaxed mt-2.5">
                  Over three years of experience in stress management, perimeter
                  security, and unsolicited desk visits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
