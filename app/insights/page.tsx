import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllInsights } from "@/lib/insights";
import InsightsContent from "./InsightsContent";

export default function InsightsPage() {
  const insights = getAllInsights();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Local Insights",
    description:
      "Practical advice on websites, SEO, and automation for small businesses in the Central Valley.",
    url: "https://www.loudbark.dev/insights",
    publisher: {
      "@type": "Organization",
      name: "loudbark.dev",
      url: "https://www.loudbark.dev",
    },
    blogPost: insights.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url: `https://www.loudbark.dev/insights/${post.slug}`,
      author: {
        "@type": "Person",
        name: "Austin Osorio",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <Navigation />
        <div className="page-frame">
          {/* Hero */}
          <section className="pt-28 sm:pt-32 lg:pt-36 pb-10 sm:pb-12 section-px">
            <p className="section-label mb-5">Local Insights</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-warm-white leading-[1.1] tracking-tight max-w-2xl">
              Practical advice for <span className="text-gradient-gold">local businesses</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              No jargon, no fluff — just honest insights on websites, SEO, and growing your business
              online in the Central&nbsp;Valley.
            </p>
          </section>

          <InsightsContent insights={insights} />
        </div>
      </main>
      <Footer />
    </>
  );
}
