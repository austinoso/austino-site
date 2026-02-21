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
      className="relative w-full pt-14 pb-16 sm:pt-20 sm:pb-24 md:pt-20 md:pb-28 bg-[#050505] border-t border-white/[0.04]"
      aria-labelledby="about-heading"
    >
      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          contain: "strict",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 relative">
        {/* Mission statement — full width */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p
            data-label
            className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4"
            style={{ opacity: 0 }}
          >
            About
          </p>
          <WordReveal
            text="Custom-coded quality, without the agency markup."
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
          />
          <p
            data-fade
            className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed mt-6 sm:mt-8"
            style={{ opacity: 0, transform: "translateY(12px)" }}
          >
            Too many small businesses are held back by slow, outdated websites
            or overpaying for work that doesn&apos;t fit. I build fast,
            frictionless digital tools — websites, automation, internal systems
            — so you can stop wrestling with tech and get back to growing your
            business.
          </p>
        </div>

        {/* Meet the team */}
        <div className="pt-10 border-t border-white/[0.06]">
          <p
            data-fade
            className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-8"
            style={{ opacity: 0, transform: "translateY(12px)" }}
          >
            Meet the Team
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
            {/* Austin */}
            <div
              data-fade
              className="flex items-start gap-4"
              style={{ opacity: 0, transform: "translateY(12px)" }}
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/[0.08] flex-shrink-0 shadow-lg shadow-black/40">
                <Image
                  src="/assets/bio-pic.png"
                  alt="Austin O."
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-white leading-snug tracking-tight">
                  Austin O.
                </p>
                <p className="font-mono text-[10px] text-cyber-accent uppercase tracking-widest mt-0.5">
                  Developer &amp; Founder
                </p>
                <p className="text-sm text-cyber-gray-400 leading-relaxed mt-2">
                  Six years of experience building websites, automation, and
                  internal tools for startups and small businesses.
                </p>
              </div>
            </div>

            {/* Rosa */}
            <div
              data-fade
              className="flex items-start gap-4"
              style={{ opacity: 0, transform: "translateY(12px)" }}
            >
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/[0.08] flex-shrink-0 shadow-lg shadow-black/40">
                <Image
                  src="/assets/rosa.jpg"
                  alt="Rosa the dog"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="min-w-0">
                <p className="text-base font-semibold text-white leading-snug tracking-tight">
                  Rosa
                </p>
                <p className="font-mono text-[10px] text-cyber-accent uppercase tracking-widest mt-0.5">
                  Head of Morale
                </p>
                <p className="text-sm text-cyber-gray-400 leading-relaxed mt-2">
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
