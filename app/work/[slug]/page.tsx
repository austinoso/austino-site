import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getProjectBySlug(slug);
  if (!study) return { title: "Project Not Found | austino" };
  return {
    title: `${study.title} | austino`,
    description: study.excerpt,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getProjectBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <main id="main-content" className="relative min-h-screen bg-cyber-dark">
      <Navigation />

      <div className="page-frame">
        <article>
          {/* Back nav + Header */}
          <header className="border-b border-white/[0.06] px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-14 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-mono text-cyber-gray-400 hover:text-white transition-colors duration-300 mb-10 sm:mb-14 tracking-wide"
              aria-label="Back to all work"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Back to Work</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-cyber-accent uppercase tracking-[0.2em]">
                {study.category}
              </span>
              <span className="text-cyber-gray-500 text-[10px]">·</span>
              <span className="text-[10px] font-mono text-cyber-gray-400">
                {study.readTime}
              </span>
              <span className="text-cyber-gray-500 text-[10px]">·</span>
              <time className="text-[10px] font-mono text-cyber-gray-400">
                {study.publishedDate}
              </time>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-[1.1] tracking-tight">
              {study.title}
            </h1>

            <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-3xl text-pretty">
              {study.excerpt}
            </p>

            {study.link && (
              <div className="mt-6">
                <a
                  href={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyber-accent text-[#060608] font-semibold text-sm rounded-lg transition-all duration-300 hover:brightness-110"
                >
                  {study.linkText || "Visit Live Site"}
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}
          </header>

          {/* Hero Image — browser mockup */}
          {study.image && (
            <section className="border-b border-white/[0.06]">
              <div className="overflow-hidden bg-cyber-gray-900">
                {/* Chrome bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0D0F13]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  {study.link && (
                    <div className="flex-1 flex justify-center">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/[0.04] text-[11px] text-cyber-gray-400 font-mono">
                        <svg
                          className="w-2.5 h-2.5 opacity-40"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M11.5 1a3.5 3.5 0 00-3.5 3.5V7H3a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2H9V4.5a2.5 2.5 0 015 0V6h1V4.5A3.5 3.5 0 0011.5 1z" />
                        </svg>
                        {study.link
                          .replace(/^https?:\/\//, "")
                          .replace(/\/$/, "")}
                      </div>
                    </div>
                  )}
                </div>

                <Image
                  src={study.image}
                  alt={study.title}
                  width={1400}
                  height={788}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </section>
          )}

          {/* Challenge & Approach — two columns */}
          <section className="border-b border-white/[0.06] px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="section-label mb-4">The Challenge</p>
                <p className="text-sm sm:text-base text-cyber-gray-300 leading-relaxed text-pretty">
                  {study.challenge}
                </p>
              </div>
              <div>
                <p className="section-label mb-4">The Approach</p>
                <p className="text-sm sm:text-base text-cyber-gray-300 leading-relaxed text-pretty">
                  {study.solution}
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="border-b border-white/[0.06] px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20">
            <p className="section-label mb-6">Results</p>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4"
              role="list"
              aria-label="Project results"
            >
              {study.results.map((result: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  role="listitem"
                >
                  <span className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full bg-cyber-accent/60" />
                  <p className="text-sm sm:text-base text-cyber-gray-300 leading-relaxed text-pretty">
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed Sections */}
          {study.sections.map(
            (section: { heading: string; content: string }, index: number) => (
              <section
                key={index}
                className="border-b border-white/[0.06] px-6 sm:px-10 md:px-14 lg:px-20 pt-14 pb-14 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20"
              >
                <div className="max-w-3xl">
                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-white mb-4 leading-snug tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed text-pretty">
                    {section.content}
                  </p>
                </div>
              </section>
            ),
          )}

          {/* CTA */}
          <section className="px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
              <div className="max-w-xl">
                <p className="section-label mb-4">Your Project</p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight mb-4">
                  Need similar results?
                </h2>
                <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed text-pretty">
                  I&apos;d love to help your business achieve something similar.
                  Reach out and I&apos;ll share a clear plan tailored to your
                  needs.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-cyber-accent text-black font-semibold text-base rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.4)] w-full sm:w-auto"
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
        </article>
      </div>

      <Footer />
    </main>
  );
}

// Generate static params for all projects
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug: slug,
  }));
}
