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
      className="relative w-full pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 border-b border-stone-200 bg-[#FAF5F2]"
      aria-labelledby="work-heading"
    >
      {/* Decorative semicircle — violet, left edge */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0,77,58,0.05) 30%, rgba(0,77,58,0.08) 50%, transparent)",
        }}
        aria-hidden="true"
      />

      <div className="px-6 sm:px-10 md:px-14 lg:px-20 relative">
        {/* ─── Heading ─── */}
        <h2
          id="work-heading"
          data-animate="label"
          className="text-center font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white leading-[1.1] tracking-tight mb-10 sm:mb-12"
        >
          See the <span className="text-[#004D3A]">proof.</span>
        </h2>

        {/* ─── Image with floating outcome badges ─── */}
        <div data-animate="slide-up" className="relative max-w-[720px] mx-auto">
          {/* Floating badges — visible on xl+ to avoid clipping at smaller desktops */}
          <div className="hidden xl:flex absolute z-20 -left-[9rem] top-[14%] items-center gap-2.5 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)]">
            <CheckCircle2 className="w-4 h-4 text-warm-green flex-shrink-0" aria-hidden="true" />
            <span className="text-[13px] font-medium text-stone-700 whitespace-nowrap">
              Page 1 on Google
            </span>
          </div>
          <div className="hidden xl:flex absolute z-20 -right-[10.5rem] top-[38%] items-center gap-2.5 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)]">
            <CheckCircle2 className="w-4 h-4 text-warm-green flex-shrink-0" aria-hidden="true" />
            <span className="text-[13px] font-medium text-stone-700 whitespace-nowrap">
              Booking &amp; payments automated
            </span>
          </div>
          <div className="hidden xl:flex absolute z-20 -left-[8rem] bottom-[10%] items-center gap-2.5 rounded-xl border border-stone-200 bg-white px-4 py-3 shadow-[0_4px_16px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)]">
            <CheckCircle2 className="w-4 h-4 text-warm-green flex-shrink-0" aria-hidden="true" />
            <span className="text-[13px] font-medium text-stone-700 whitespace-nowrap">
              Ongoing growth strategy
            </span>
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="group relative block rounded-2xl overflow-hidden border border-stone-200 hover:border-[#004D3A]/30 transition-all duration-500"
            data-umami-event="project-image"
            data-umami-event-project={project.slug}
          >
            {(project.thumbnail || project.image) && (
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                <Image
                  src={project.thumbnail || project.image!}
                  alt={`Screenshot of ${project.title} website`}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />
              </div>
            )}
          </Link>

          {/* Mobile/tablet: badges row below image */}
          <div className="xl:hidden mt-5 flex flex-wrap justify-center gap-2.5">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3.5 py-2.5 shadow-sm"
              >
                <CheckCircle2
                  className="w-3.5 h-3.5 text-warm-green flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-[12px] font-medium text-stone-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Info below image ─── */}
        <div
          data-animate="fade"
          className="mt-8 sm:mt-10 flex flex-col items-center text-center max-w-xl mx-auto"
        >
          <h3 className="font-display text-2xl sm:text-3xl font-semibold text-warm-white leading-snug mb-3">
            {project.title.split(":")[0]}, Manteca
          </h3>

          <p className="text-[15px] text-stone-500 leading-relaxed mb-6 max-w-[48ch]">
            {project.excerpt}
          </p>

          <div className="flex items-center gap-5">
            <Link
              href={`/work/${project.slug}`}
              className="group inline-flex items-center gap-2.5 px-6 py-3 border border-[#004D3A]/25 rounded-lg text-[14px] font-medium text-[#004D3A] hover:bg-[#004D3A] hover:text-white hover:border-[#004D3A] transition-all duration-300"
              data-umami-event="view-case-study"
            >
              Read Case Study
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-mono text-stone-400 hover:text-[#004D3A] transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live site
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
