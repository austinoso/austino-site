"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CalendarCheck,
  BarChart3,
  Mail,
  Repeat,
  CheckCircle2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const scenarios = [
  {
    icon: CalendarCheck,
    title: "Hands-free booking flow",
    steps: [
      "Customer books online",
      "Confirmation sent",
      "Reminder next day",
      "Review request sent",
    ],
    description:
      "A customer books online. They instantly get a confirmation text, a reminder the day before, and a follow-up asking for a review \u2014 all without you touching a thing.",
  },
  {
    icon: BarChart3,
    title: "End-of-day reporting",
    steps: [
      "Register closed",
      "Data pulled",
      "Spreadsheet updated",
      "Summary emailed",
    ],
    description:
      "You close out for the day. Your revenue automatically lands in a spreadsheet organized by month, with a summary emailed to you by morning.",
  },
  {
    icon: Mail,
    title: "Instant lead capture",
    steps: [
      "Form submitted",
      "Added to CRM",
      "Auto-reply sent",
      "You get notified",
    ],
    description:
      "Someone fills out your contact form. They show up in your CRM, get a personalized auto-reply, and you get a notification on your phone \u2014 all in under 3 seconds.",
  },
  {
    icon: Repeat,
    title: "Smart inventory alerts",
    steps: [
      "Stock drops low",
      "Reorder fires",
      "Team notified",
      "Sheet logged",
    ],
    description:
      "A product drops below threshold. A reorder request fires to your supplier, your team gets a message, and it\u2019s logged in your inventory sheet automatically.",
  },
];

export default function RealExamples() {
  const [activeScenario, setActiveScenario] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const chainTlRef = useRef<gsap.core.Timeline | null>(null);

  /* Scroll-triggered fade-in for the whole section */
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

  const playChainAnimation = useCallback(() => {
    if (chainTlRef.current) {
      chainTlRef.current.kill();
    }
    const container = demoRef.current;
    if (!container) return;

    const tl = gsap.timeline();
    chainTlRef.current = tl;

    const steps = container.querySelectorAll("[data-step]");
    const checks = container.querySelectorAll("[data-check]");
    const desc = container.querySelector("[data-chain-desc]");
    const panel = container.querySelector("[data-panel]");

    gsap.set(steps, { opacity: 0, x: -8 });
    gsap.set(checks, { opacity: 0, scale: 0.5 });
    if (desc) gsap.set(desc, { opacity: 0, y: 10 });
    if (panel) gsap.set(panel, { opacity: 0 });

    if (panel) {
      tl.to(panel, { opacity: 1, duration: 0.35, ease: "power2.out" }, 0);
    }

    steps.forEach((step, i) => {
      const offset = 0.3 + i * 0.45;
      tl.to(
        step,
        { opacity: 1, x: 0, duration: 0.55, ease: "power2.out" },
        offset,
      );
      if (checks[i]) {
        tl.to(
          checks[i],
          { opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.7)" },
          offset + 0.35,
        );
      }
    });

    if (desc) {
      tl.to(
        desc,
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
        "-=0.05",
      );
    }
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      playChainAnimation();
    });
    return () => cancelAnimationFrame(raf);
  }, [activeScenario, playChainAnimation]);

  useEffect(() => {
    if (demoRef.current) {
      ScrollTrigger.create({
        trigger: demoRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => playChainAnimation(),
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === demoRef.current) t.kill();
      });
    };
  }, [playChainAnimation]);

  return (
    <section ref={sectionRef} className="mb-24 sm:mb-32">
      <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
        Real Examples
      </p>
      <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-snug tracking-tight text-balance mb-4 max-w-2xl">
        What automation actually looks like.
      </h2>
      <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-2xl mb-12 sm:mb-14">
        Click any example to see the flow in action.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 lg:items-center">
        {/* Left: scenario tabs */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-2">
          {scenarios.map((s, i) => {
            const Icon = s.icon;
            const isActive = i === activeScenario;
            return (
              <button
                key={s.title}
                onClick={() => setActiveScenario(i)}
                className={`group flex flex-col lg:flex-row items-center lg:items-center gap-2 lg:gap-3 px-3 py-3.5 lg:px-4 lg:py-3.5 rounded-lg text-center lg:text-left transition-all duration-300 ${
                  isActive
                    ? "bg-white/[0.05] border border-cyber-accent/20"
                    : "bg-transparent border border-transparent hover:bg-white/[0.03] hover:border-white/[0.06]"
                }`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isActive
                      ? "bg-cyber-accent/10 border border-cyber-accent/30"
                      : "bg-white/[0.03] border border-white/[0.06] group-hover:border-white/[0.1]"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 transition-colors duration-300 ${
                      isActive
                        ? "text-cyber-accent"
                        : "text-cyber-gray-400 group-hover:text-cyber-gray-300"
                    }`}
                  />
                </div>
                <span
                  className={`text-xs lg:text-sm font-medium transition-colors duration-300 leading-tight ${
                    isActive
                      ? "text-white"
                      : "text-cyber-gray-400 group-hover:text-cyber-gray-300"
                  }`}
                >
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: workflow panel */}
        <div ref={demoRef} className="lg:col-span-8">
          {(() => {
            const scenario = scenarios[activeScenario];
            const Icon = scenario.icon;
            return (
              <div
                data-panel
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden"
              >
                {/* Panel header */}
                <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.01]">
                  <div className="w-6 h-6 rounded-md bg-cyber-accent/10 flex items-center justify-center">
                    <Icon
                      className="w-3.5 h-3.5 text-cyber-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {scenario.title}
                  </span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-pulse" />
                    <span className="text-[10px] font-mono text-cyber-accent/60 uppercase tracking-wider">
                      Live
                    </span>
                  </div>
                </div>

                {/* Step flow */}
                <div className="px-5 sm:px-6 py-4 sm:py-5">
                  <div className="space-y-2">
                    {scenario.steps.map((step, i) => (
                      <div
                        key={`${activeScenario}-${i}`}
                        data-step
                        className="flex items-center gap-3.5 px-3.5 py-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
                      >
                        <div className="flex-shrink-0 w-7 h-7 rounded-full border border-cyber-accent/25 bg-cyber-accent/[0.07] flex items-center justify-center">
                          <span className="text-[11px] font-semibold text-cyber-accent font-mono">
                            {i + 1}
                          </span>
                        </div>
                        <span className="text-[13px] sm:text-sm text-cyber-gray-200 font-medium">
                          {step}
                        </span>
                        <div
                          data-check
                          className="ml-auto flex items-center gap-1.5"
                        >
                          <CheckCircle2
                            className="w-3.5 h-3.5 text-cyber-accent/50"
                            aria-hidden="true"
                          />
                          <span className="text-[10px] font-mono text-cyber-accent/60 uppercase tracking-wider hidden sm:inline">
                            Done
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <p
                    data-chain-desc
                    className="text-sm text-cyber-gray-400 leading-relaxed mt-5 pt-4 border-t border-white/[0.04]"
                  >
                    {scenario.description}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
