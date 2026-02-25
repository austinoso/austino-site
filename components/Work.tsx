"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WordReveal from "@/components/ui/WordReveal";

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const projects = getAllProjects();
  const project = projects[0];
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: gsap.Context | null = null;

    ctx = gsap.context(() => {
      if (labelRef.current) {
        gsap.from(labelRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: { trigger: labelRef.current, start: "top 85%" },
        });
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: imageRef.current, start: "top 82%" },
        });
      }

      if (contentRef.current) {
        gsap.from(contentRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
        });
      }
    }, sectionRef);

    return () => ctx?.revert();
  }, []);

  if (!project) return null;

  /* Pick 3 short outcomes for the preview */
  const highlights = [
    "Professional presence from day one",
    "Automated booking & payments",
    "Mobile-optimized for local discovery",
  ];

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 border-b border-white/[0.06]"
      style={{ background: "rgba(6,6,8,0.92)" }}
      aria-labelledby="work-heading"
    >
      {/* Subtle divider */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(167,139,250,0.12) 30%, rgba(64,224,255,0.18) 50%, rgba(244,114,182,0.12) 70%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* ─── Section label ─── */}
        <p ref={labelRef} className="section-label mb-5">
          Case Study
        </p>
        <WordReveal
          text="See the results."
          id="work-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-12 sm:mb-16"
          accentWords={["results."]}
        />

        {/* ─── Split layout: image + case study preview ─── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Project image */}
          <div ref={imageRef}>
            <Link
              href={`/work/${project.slug}`}
              className="group relative block rounded-lg overflow-hidden border border-white/[0.08] hover:border-cyber-accent/20 transition-all duration-500"
              style={{
                boxShadow:
                  "0 24px 48px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)",
              }}
              data-umami-event="project-image"
              data-umami-event-project={project.slug}
            >
              {(project.thumbnail || project.image) && (
                <div className="relative aspect-[4/3] overflow-hidden bg-[#111318]">
                  <Image
                    src={project.thumbnail || project.image!}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    priority
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    aria-hidden="true"
                  />
                </div>
              )}
            </Link>

            {/* Live link below image */}
            <div className="mt-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyber-gray-400 hover:text-cyber-accent transition-colors"
              >
                mymassagecottage.com
              </a>
            </div>
          </div>

          {/* Right — Case study content */}
          <div ref={contentRef} className="flex flex-col">
            {/* Category + read time */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono text-cyber-accent uppercase tracking-[0.15em]">
                {project.category}
              </span>
              <span className="text-cyber-gray-500 text-[10px]">·</span>
              <span className="text-[10px] font-mono text-cyber-gray-500">
                {project.readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white leading-snug mb-4">
              {project.title.split(":")[0]}
            </h3>

            {/* Challenge summary */}
            <p className="text-[15px] text-cyber-gray-300 leading-relaxed mb-8">
              {project.excerpt}
            </p>

            {/* Key results */}
            <div className="space-y-3 mb-10">
              <p className="text-xs font-mono text-cyber-gray-400 uppercase tracking-[0.15em] mb-3">
                Key Outcomes
              </p>
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-cyber-accent/70 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-cyber-gray-300 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/work/${project.slug}`}
              className="group inline-flex items-center gap-2.5 self-start px-6 py-3 border border-white/[0.08] rounded-lg text-[14px] font-medium text-white hover:border-cyber-accent/30 hover:text-cyber-accent transition-all duration-500"
              style={{
                boxShadow: "0 0 0 1px rgba(255,255,255,0.02)",
              }}
              data-umami-event="view-case-study"
            >
              Read Case Study
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
