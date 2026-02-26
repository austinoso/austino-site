"use client";

import { useEffect, useRef } from "react";
import { getGSAP } from "@/lib/gsap";
import WordReveal from "@/components/ui/WordReveal";

import WebDevelopment from "./WebDevelopment";
import Automation from "./Automation";
import OngoingSupport from "./OngoingSupport";

export default function Solutions() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let reverted = false;
    let ctx: { revert: () => void } | null = null;

    const subs =
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-subsection]");
    const closer = sectionRef.current?.querySelector("[data-closer]");

    getGSAP().then(({ gsap }) => {
      if (reverted) return;
      ctx = gsap.context(() => {
      /* Label fade */
      if (labelRef.current) {
        gsap.from(labelRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: { trigger: labelRef.current, start: "top 85%" },
        });
      }

      /* Subsection animations */
      subs?.forEach((sub, i) => {
        const content = sub.querySelector("[data-content]");
        const visual = sub.querySelector("[data-visual]");
        const features = sub.querySelectorAll("[data-feature]");
        const flipped = i === 1;

        /* Content slides in */
        if (content) {
          gsap.from(content, {
            x: flipped ? 20 : -20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: sub, start: "top 75%" },
          });
        }

        /* Visual slides in from opposite side */
        if (visual) {
          gsap.from(visual, {
            x: flipped ? -20 : 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: sub, start: "top 75%" },
          });
        }

        /* Features */
        if (features.length) {
          gsap.from(features, {
            y: 8,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: features[0], start: "top 90%" },
          });
        }

        /* ── Section-specific visual animations ── */

        if (i === 0) {
          /* Growth Strategy: search result highlights + keyword badge stagger */
          const results = sub.querySelectorAll("[data-result]");
          if (results.length) {
            gsap.from(results, {
              y: 12,
              opacity: 0,
              duration: 0.4,
              stagger: 0.12,
              ease: "power2.out",
              scrollTrigger: { trigger: results[0], start: "top 85%" },
            });
          }

          const badges = sub.querySelectorAll("[data-badge]");
          if (badges.length) {
            gsap.from(badges, {
              scale: 0.8,
              opacity: 0,
              duration: 0.3,
              stagger: 0.06,
              ease: "back.out(1.7)",
              scrollTrigger: { trigger: badges[0], start: "top 90%" },
            });
          }
        }

        if (i === 1) {
          /* Web Development: speed bars fill + speed counters */
          sub.querySelectorAll("[data-bar]").forEach((bar) => {
            gsap.from(bar, {
              scaleX: 0,
              duration: 1,
              ease: "power2.out",
              transformOrigin: "left center",
              scrollTrigger: { trigger: bar, start: "top 88%" },
            });
          });

          sub.querySelectorAll<HTMLElement>("[data-speed]").forEach((el) => {
            const target = parseFloat(el.dataset.speed || "0");
            const counter = { v: 0 };
            gsap.to(counter, {
              v: target,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 88%" },
              onUpdate: () => {
                el.textContent = counter.v.toFixed(1) + "s";
              },
            });
          });

          const speedCard = sub.querySelector("[data-speed-card]");
          if (speedCard) {
            gsap.from(speedCard, {
              y: 20,
              opacity: 0,
              duration: 0.6,
              delay: 0.3,
              ease: "power3.out",
              scrollTrigger: { trigger: speedCard, start: "top 90%" },
            });
          }
        }

        /* i === 2: Automation — AutomationDashboard handles its own live feed animation via React state */
      });

      /* Closer fade */
      if (closer) {
        gsap.from(closer, {
          y: 10,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: { trigger: closer, start: "top 90%" },
        });
      }
    }, sectionRef);
    }); // end dynamic import

    return () => { reverted = true; ctx?.revert(); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 border-b border-white/[0.06]"
      style={{
        backgroundColor: "rgba(6,6,8,0.92)",
        backgroundImage: [
          "radial-gradient(ellipse 70% 50% at 90% 15%, rgba(64,224,255,0.07), rgba(167,139,250,0.05) 50%, transparent 100%)",
          "radial-gradient(ellipse 60% 45% at 5% 80%, rgba(244,114,182,0.05), rgba(167,139,250,0.04) 50%, transparent 100%)",
          "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(64,224,255,0.03), transparent 80%)",
        ].join(", "),
      }}
      aria-labelledby="solutions-heading"
    >
      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <p ref={labelRef} className="section-label mb-5">
            The Edge
          </p>
          <WordReveal
            text="How you take the lead."
            id="solutions-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight"
            accentWords={["lead."]}
          />
        </div>

        <div className="space-y-20 sm:space-y-24">
          <OngoingSupport />
          <WebDevelopment />
          <Automation />
        </div>

        {/* Closer — consultative positioning */}
        <div
          data-closer
          className="mt-16 sm:mt-20 pt-10 border-t border-white/[0.06] max-w-2xl"
        >
          <p className="font-display text-2xl sm:text-3xl font-semibold text-cyber-gray-300 leading-snug">
            I only work with one business per niche in your area.{" "}
            <span className="text-gradient">
              Your competition won&apos;t get this from me.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
