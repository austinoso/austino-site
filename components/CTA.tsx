"use client";

import { Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingWordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const headlineWords = "Ready when you are.".split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Label */
      const label = sectionRef.current?.querySelector("[data-label]");
      if (label) {
        gsap.from(label, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: label, start: "top 85%" },
        });
      }

      /* Word-by-word headline */
      const words = headingWordsRef.current.filter(Boolean);
      if (words.length) {
        gsap.set(words, { y: "100%", opacity: 0 });
        gsap.to(words, {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: words[0], start: "top 82%" },
        });
      }

      /* Body + button */
      const body = sectionRef.current?.querySelectorAll("[data-fade]");
      if (body?.length) {
        gsap.from(body, {
          y: 16,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: body[0], start: "top 88%" },
        });
      }

      /* Divider line grow */
      const line = sectionRef.current?.querySelector("[data-line]");
      if (line) {
        gsap.from(line, {
          scaleX: 0,
          duration: 0.8,
          ease: "power2.out",
          transformOrigin: "left center",
          scrollTrigger: { trigger: line, start: "top 92%" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 md:py-28 bg-[#050505] border-t border-white/[0.04]"
      aria-labelledby="cta-heading"
    >
      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
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
          >
            Get Started
          </p>
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight"
          >
            {headlineWords.map((word, i) => (
              <Fragment key={i}>
                <span className="inline-block overflow-hidden pb-[0.15em]">
                  <span
                    ref={(el) => {
                      headingWordsRef.current[i] = el;
                    }}
                    className="inline-block"
                  >
                    {word}
                  </span>
                </span>{" "}
              </Fragment>
            ))}
          </h2>
        </div>

        {/* Body + CTA */}
        <div className="max-w-2xl">
          <p
            data-fade
            className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed"
          >
            Tell me what&apos;s slowing your business down. I&apos;ll put
            together a clear plan — no jargon, no obligations.
          </p>

          <div data-fade className="mt-5 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
            <span className="text-xs font-mono text-cyber-gray-500">
              Accepting new projects
            </span>
          </div>

          <div
            data-fade
            className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-black font-semibold text-base rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.4)]"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
        />
      </div>
    </section>
  );
}
