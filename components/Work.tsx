import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getAllProjects } from "@/lib/projects";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* ────────────────────────────────────────────────────────────────── */
/*  Work — server component (content in initial HTML)                */
/* ────────────────────────────────────────────────────────────────── */

export default function Work() {
  const projects = getAllProjects();
  const project = projects[0];

  if (!project) return null;

  const highlights = [
    "Page 1 of Google within weeks of launch",
    "Automated booking & payments built in",
    "Ongoing growth strategy driving new clients",
  ];

  return (
    <ScrollReveal
      as="section"
      id="work"
      className="relative overflow-hidden w-full pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 border-b border-stone-200"
      aria-labelledby="work-heading"
    >
      {/* Decorative semicircle — violet, left edge */}
      <div
        className="absolute -left-[10rem] sm:-left-[12rem] md:-left-[17rem] top-1/3 w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] md:w-[28rem] md:h-[28rem] rounded-full pointer-events-none"
        style={{ background: "rgba(124, 58, 237, 0.05)" }}
        aria-hidden="true"
      />

      {/* Subtle divider */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(167,139,250,0.06) 30%, rgba(180,83,9,0.08) 50%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* ─── Section label ─── */}
        <p data-animate="label" className="section-label mb-5">
          Case Study
        </p>
        <h2
          id="work-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white leading-[1.1] tracking-tight mb-12 sm:mb-16"
        >
          See the <span className="text-warm-gold">proof.</span>
        </h2>

        {/* ─── Split layout: image + case study preview ─── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Project image */}
          <div data-animate="slide-up">
            <Link
              href={`/work/${project.slug}`}
              className="group relative block rounded-lg overflow-hidden border border-stone-200 hover:border-warm-gold/30 transition-all duration-500 shadow-lg shadow-black/[0.06]"
              style={{
                boxShadow:
                  "0 24px 48px -12px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
              }}
              data-umami-event="project-image"
              data-umami-event-project={project.slug}
            >
              {(project.thumbnail || project.image) && (
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <Image
                    src={project.thumbnail || project.image!}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
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
                className="text-xs font-mono text-stone-500 hover:text-warm-gold transition-colors"
              >
                mymassagecottage.com
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          {/* Right — Case study content */}
          <div data-animate="slide-up-delayed" className="flex flex-col">
            {/* Category + read time */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono text-warm-gold uppercase tracking-[0.15em]">
                {project.category}
              </span>
              <span className="text-stone-500 text-[10px]">·</span>
              <span className="text-[10px] font-mono text-stone-500">
                {project.readTime}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-warm-white leading-snug mb-4">
              {project.title.split(":")[0]}
            </h3>

            {/* Challenge summary */}
            <p className="text-[15px] text-stone-600 leading-relaxed mb-8">
              {project.excerpt}
            </p>

            {/* Key results */}
            <div className="space-y-3 mb-10">
              <p className="text-xs font-mono text-stone-500 uppercase tracking-[0.15em] mb-3">
                Key Outcomes
              </p>
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-4 h-4 text-warm-green mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-stone-600 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/work/${project.slug}`}
              className="group inline-flex items-center gap-2.5 self-start px-6 py-3 border border-stone-300 rounded-lg text-[14px] font-medium text-stone-800 hover:border-warm-gold/40 hover:text-warm-gold transition-all duration-500"
              style={{
                boxShadow: "0 0 0 1px rgba(0,0,0,0.02)",
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
    </ScrollReveal>
  );
}
