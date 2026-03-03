import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Results, Not Just Designs | austino",
  description:
    "See how local businesses went from invisible online to booked solid. Real projects, real strategy, real numbers.",
  alternates: {
    canonical: "https://www.austino.dev/work",
  },
  openGraph: {
    title: "Results, Not Just Designs | austino",
    description:
      "See how local businesses went from invisible online to booked solid. Real projects, real strategy, real numbers.",
    url: "https://www.austino.dev/work",
  },
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <main id="main-content" className="relative min-h-screen bg-warm-bg">
      <Navigation />

      <div className="page-frame">
        {/* Header */}
        <section className="border-b border-stone-200 px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-warm-white leading-[1.1] tracking-tight mb-5">
            Work that speaks for itself.
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl text-pretty">
            Real projects for real businesses. Each case study walks through the
            problem, the approach, and the results.
          </p>
        </section>

        {/* Projects */}
        <div role="list" aria-label="Work projects">
          {projects.map((project) => (
            <article
              key={project.slug}
              role="listitem"
              className="border-b border-stone-200"
            >
              {/* Full-width image — taller ratio to show more */}
              {project.image && (
                <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle bottom fade to blend into page bg */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-warm-bg to-transparent" />
                </div>
              )}

              {/* Project info — below image */}
              <div className="px-6 sm:px-10 md:px-14 lg:px-20 pt-10 pb-14 sm:pt-12 sm:pb-16">
                <div className="mb-8">
                  <span className="text-[10px] font-mono text-warm-gold uppercase tracking-[0.2em] mb-4 block">
                    {project.category}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-warm-white leading-[1.1] tracking-tight mb-3">
                    {project.title.split(":")[0]}
                  </h2>
                  <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl text-pretty">
                    {project.excerpt}
                  </p>
                </div>

                {/* Results — clean two-column list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-8 pt-8 border-t border-stone-200">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-warm-gold/60" />
                      <p className="text-sm text-stone-500 leading-relaxed text-pretty">
                        {result}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/work/${project.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-mono text-warm-gold hover:text-amber-700 transition-colors duration-300"
                >
                  <span>Read case study</span>
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <section className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-warm-white leading-snug tracking-tight mb-4">
                Want results like these?
              </h2>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed text-pretty">
                Have a project in mind? Let&apos;s talk about what&apos;s
                possible — no pressure, no commitments.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-base rounded-lg shadow-lg shadow-amber-600/20 transition-all duration-300 hover:-translate-y-px hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg w-full sm:w-auto"
              >
                <span>Start a Conversation</span>
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
