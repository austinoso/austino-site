"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AutomationDashboard from "@/components/Solutions/AutomationDashboard";

gsap.registerPlugin();

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const copy = sectionRef.current?.querySelector("[data-hero-copy]");
      if (copy) {
        gsap.from(copy, {
          x: -30,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.1,
        });
      }

      const visual = sectionRef.current?.querySelector("[data-hero-visual]");
      if (visual) {
        gsap.from(visual, {
          x: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-24 sm:mb-32"
    >
      <div data-hero-copy className="lg:col-span-5 space-y-6">
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em]">
          Automation
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight text-balance">
          The $37,000 spreadsheet.
        </h1>
        <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed">
          Two hours of manual work a day adds up to over $37,000 in four years —
          before you count the errors and the missed follow-ups. That&apos;s a
          lot to spend on a task code can handle in seconds.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 px-7 py-3.5 bg-cyber-accent text-[#050505] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_20px_rgba(64,224,255,0.3)]"
        >
          Get a Free Consultation
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>

      {/* Live automation dashboard */}
      <div data-hero-visual className="lg:col-span-7">
        <AutomationDashboard />
      </div>
    </section>
  );
}
