"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onHeroReady } from "@/lib/heroReady";
import WordReveal from "@/components/ui/WordReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const projects = getAllProjects();
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    /* Initial styles set via JSX to prevent CLS */
    const cards = sectionRef.current?.querySelectorAll("[data-card]");
    const link = sectionRef.current?.querySelector("[data-footer-link]");

    onHeroReady(() => {
      ctx = gsap.context(() => {
        /* Label fade */
        if (labelRef.current) {
          gsap.to(labelRef.current, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: labelRef.current, start: "top 85%" },
          });
        }

        /* Cards fade in */
        if (cards?.length) {
          gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: { trigger: cards[0], start: "top 85%" },
          });
        }

        /* Footer link */
        if (link) {
          gsap.to(link, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: { trigger: link, start: "top 92%" },
          });
        }
      }, sectionRef);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full py-16 sm:py-24 md:py-28 bg-[#050505] border-t border-white/[0.04]"
      aria-labelledby="work-heading"
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
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <p
            ref={labelRef}
            className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4"
            style={{ opacity: 0 }}
          >
            Projects
          </p>
          <WordReveal
            text="Recent work."
            id="work-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight"
          />
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-card
              data-umami-event="project-card"
              data-umami-event-project={project.slug}
              className="group rounded-xl border border-white/[0.06] bg-[#111318] overflow-hidden transition-colors duration-300 hover:border-white/[0.12]"
              style={{
                opacity: 0,
                transform: "translateY(12px)",
                boxShadow:
                  "0 16px 40px -8px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.02)",
              }}
            >
              {/* Thumbnail */}
              {project.image && (
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-transparent to-transparent opacity-60" />
                </div>
              )}

              {/* Content */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono text-cyber-accent uppercase tracking-[0.15em]">
                    {project.category}
                  </span>
                  <span className="text-cyber-gray-500 text-[10px]">·</span>
                  <span className="text-[10px] font-mono text-cyber-gray-500">
                    {project.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white leading-snug tracking-tight mb-2 group-hover:text-cyber-accent transition-colors duration-300">
                  {project.title.split(":")[0]}
                </h3>
                <p className="text-sm text-cyber-gray-400 leading-relaxed line-clamp-2">
                  {project.excerpt}
                </p>

                <div className="flex items-center gap-1.5 mt-4 text-xs font-mono text-cyber-gray-500 group-hover:text-cyber-accent transition-colors duration-300">
                  <span>Read case study</span>
                  <ArrowRight
                    className="w-3 h-3 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer link */}
        <div
          data-footer-link
          className="flex justify-center sm:justify-end"
          style={{ opacity: 0 }}
        >
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-cyber-gray-400 hover:text-cyber-accent transition-colors duration-300 font-mono text-xs uppercase tracking-[0.15em] border border-white/[0.08] rounded-lg px-5 py-2.5 hover:border-cyber-accent/30"
            data-umami-event="see-all-work"
          >
            <span>See all work</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
