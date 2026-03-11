import type { MetadataRoute } from "next";
import { getAllProjectSlugs } from "@/lib/projects";
import { getAllInsightSlugs } from "@/lib/insights";
import { niches } from "@/content/pseo/niches";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.austino.dev";

  /* ── Static pages ── */
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/automation`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/growth-strategy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/law-firms-central-valley`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-development/manteca`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  /* ── Dynamic project / case-study pages ── */
  const projectRoutes: MetadataRoute.Sitemap = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /* ── Insights (blog) pages ── */
  const insightRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...getAllInsightSlugs().map((slug) => ({
      url: `${baseUrl}/insights/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  /* ── pSEO niche × city pages (wellness excluded until ready) ── */
  const pseoRoutes: MetadataRoute.Sitemap = Object.values(niches)
    .filter((niche) => niche.slug !== "wellness")
    .flatMap((niche) =>
      niche.targetCities.map((citySlug) => ({
        url: `${baseUrl}/services/${niche.nicheSlug}/${citySlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    );

  return [...staticRoutes, ...projectRoutes, ...insightRoutes, ...pseoRoutes];
}
