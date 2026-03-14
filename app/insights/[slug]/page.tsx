import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { formatDate } from "@/lib/format-date";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { BackLink } from "@/components/ui/BackLink";
import { getInsightBySlug, getAllInsightSlugs } from "@/lib/insights";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};

  return {
    title: `${insight.title} | Local Insights | Loud Bark`,
    description: insight.excerpt,
    authors: [{ name: "Austin Osorio", url: "https://www.loudbark.dev" }],
    alternates: {
      canonical: `https://www.loudbark.dev/insights/${slug}`,
    },
    openGraph: {
      title: `${insight.title} | Loud Bark`,
      description: insight.excerpt,
      url: `https://www.loudbark.dev/insights/${slug}`,
      type: "article",
      publishedTime: insight.date,
      authors: ["Austin Osorio"],
      section: insight.category,
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) notFound();

  const processed = await remark()
    .use(remarkGfm)
    .use(html, { sanitize: false })
    .process(insight.content);
  const contentHtml = processed
    .toString()
    .replace(/<a href="http/g, '<a target="_blank" rel="noopener noreferrer" href="http');

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.date,
    dateModified: insight.date,
    author: {
      "@type": "Person",
      name: "Austin Osorio",
      url: "https://www.loudbark.dev",
      jobTitle: "Founder & Lead Engineer",
    },
    publisher: {
      "@type": "Organization",
      name: "loudbark.dev",
      url: "https://www.loudbark.dev",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.loudbark.dev/insights/${slug}`,
    },
    articleSection: insight.category,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.loudbark.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: "https://www.loudbark.dev/insights",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: insight.title,
        item: `https://www.loudbark.dev/insights/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <Navigation />
        <div className="page-frame">
          <article className="px-6 sm:px-10 md:px-14 lg:px-20 pt-28 sm:pt-32 lg:pt-36 pb-24 sm:pb-28 md:pb-32">
            {/* Back link */}
            <BackLink href="/insights">All Insights</BackLink>

            {/* Header */}
            <header className="max-w-2xl mb-10 sm:mb-14">
              <span className="inline-block text-[11px] font-mono text-warm-gold uppercase tracking-wider mb-4">
                {insight.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold font-display text-warm-white leading-[1.15] tracking-tight mb-5">
                {insight.title}
              </h1>
              <div className="flex items-center gap-5 text-sm text-stone-400">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime={insight.date}>{formatDate(insight.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                  {insight.readTime}
                </span>
              </div>
            </header>

            {/* Prose Content */}
            <div
              className="insight-prose max-w-2xl"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Author */}
            <div className="max-w-2xl mt-16 sm:mt-20 pt-10 border-t border-stone-200">
              <div className="flex items-start gap-5">
                <Image
                  src="/assets/bio-pic.png"
                  alt="Austin Osorio"
                  width={56}
                  height={56}
                  className="rounded-full shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold text-warm-white">Written by Austin Osorio</p>
                  <p className="text-[13px] text-stone-400 mt-0.5">
                    Founder &amp; Lead Engineer at loudbark.dev
                  </p>
                  <p className="text-sm text-stone-500 leading-relaxed mt-3">
                    Austin is a software engineer and the founder of loudbark.dev. A lifelong
                    resident of the Central Valley, he has over six years of experience building
                    high-performance systems. He started loudbark.dev to close the gap between what
                    enterprise companies build and what local businesses can afford.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="max-w-2xl mt-10 sm:mt-12 pt-10 border-t border-stone-200">
              <p className="text-[15px] text-stone-500 leading-relaxed mb-5">
                Want to talk about how this applies to your&nbsp;business?
              </p>
              <PrimaryButton href="/contact" arrow>
                Let&apos;s Talk
              </PrimaryButton>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
