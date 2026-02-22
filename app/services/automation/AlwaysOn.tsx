"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Zap, CheckCircle2 } from "lucide-react";
import FeatureCard from "@/components/ui/FeatureCard";

gsap.registerPlugin(ScrollTrigger);

export default function AlwaysOn() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current!, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current!, start: "top 85%" },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mb-24 sm:mb-32">
      <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
        Always On
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        It works while you sleep. And doesn&apos;t call in sick.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-10">
        This isn&apos;t an argument against your employees — it&apos;s about
        freeing them up to do work that actually requires a human. The
        repetitive stuff? That&apos;s where code shines.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
        <FeatureCard
          icon={Clock}
          title="24/7/365"
          body="Runs at 2am on Christmas just as reliably as 10am on a Tuesday. No overtime, no holidays."
          layout="stacked"
        />
        <FeatureCard
          icon={Zap}
          title="Milliseconds, not minutes"
          body="A task that takes a person 15 minutes takes code about 200 milliseconds. That gap adds up fast."
          layout="stacked"
        />
        <FeatureCard
          icon={CheckCircle2}
          title="Zero human error"
          body="No fat-fingered numbers. No skipped rows. No 'I forgot to send that email.' Every time, exactly right."
          layout="stacked"
        />
      </div>
    </section>
  );
}
