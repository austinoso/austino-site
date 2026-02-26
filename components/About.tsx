"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { getGSAP } from "@/lib/gsap";
import WordReveal from "@/components/ui/WordReveal";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let reverted = false;
    let ctx: { revert: () => void } | null = null;

    const label = sectionRef.current?.querySelector("[data-label]");
    const items = sectionRef.current?.querySelectorAll("[data-fade]");

    getGSAP().then(({ gsap }) => {
      if (reverted) return;
      ctx = gsap.context(() => {
        if (label) {
          gsap.from(label, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: label, start: "top 85%" },
          });
        }

        if (items?.length) {
          gsap.from(items, {
            y: 12,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: items[0], start: "top 88%" },
          });
        }
      }, sectionRef);
    });

    return () => { reverted = true; ctx?.revert(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 border-b border-white/[0.06]"
      style={{ background: "rgba(6,6,8,0.92)" }}
      aria-labelledby="about-heading"
    >
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* Mission statement */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <p data-label className="section-label mb-5">
            About
          </p>
          <WordReveal
            text="Built to outpace your competition."
            id="about-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight"
            accentWords={["outpace"]}
          />
          <p
            data-fade
            className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed mt-8 sm:mt-10"
          >
            Most agencies hand you a site and disappear. I don&apos;t. I stick
            around and keep pushing until your digital presence doesn&apos;t
            just compete, it dominates. Continuous optimization, strategic
            growth, and a refusal to settle for &ldquo;good enough&rdquo; mean
            your website keeps getting better while your competitors&apos; stays
            the same.
          </p>
        </div>

        {/* Meet the team */}
        <div className="pt-12 border-t border-white/[0.06]">
          <p
            data-fade
            className="font-mono text-xs text-cyber-accent/60 uppercase tracking-[0.2em] mb-10"
          >
            Meet the Team
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Austin */}
            <div
              data-fade
              className="flex items-start gap-5 p-6 sm:p-7 rounded-lg border border-white/[0.06] bg-white/[0.015]"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-white/[0.08] flex-shrink-0 shadow-lg shadow-black/40">
                <Image
                  src="/assets/bio-pic.png"
                  alt="Headshot of Austin O., web strategist and developer"
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="min-w-0 pt-1 flex-1">
                <p className="text-lg font-semibold text-white leading-snug tracking-tight">
                  Austin O.
                </p>
                <p className="font-mono text-[10px] text-cyber-accent uppercase tracking-widest mt-1">
                  Developer &amp; Founder
                </p>
                <p className="text-[13px] sm:text-sm text-cyber-gray-400 leading-relaxed mt-2.5">
                  Six years experience in software engineering, web development,
                  and business automation.
                </p>
              </div>
            </div>

            {/* Rosa */}
            <div
              data-fade
              className="flex items-start gap-5 p-6 sm:p-7 rounded-lg border border-white/[0.06] bg-white/[0.015]"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-white/[0.08] flex-shrink-0 shadow-lg shadow-black/40">
                <Image
                  src="/assets/rosa.jpg"
                  alt="Rosa the dog, office mascot and head of morale"
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
                  Three years experience in stress management, perimeter
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
