import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { getAllInsights } from "@/lib/insights";
import { niches } from "@/content/pseo/niches";

// Update this when making meaningful content changes to static pages
const STATIC_PAGE_DATE = new Date("2026-01-30");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.loudbark.dev";

  /* ── Static pages ── */
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/web-development`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/automation`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/growth-strategy`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "yearly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/law-firms-central-valley`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/web-development/manteca`,
      lastModified: STATIC_PAGE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  /* ── Dynamic project / case-study pages ── */
  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(project.publishedDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  /* ── Insights (blog) pages ── */
  const allInsights = getAllInsights();
  const insightRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/insights`,
      lastModified: allInsights[0] ? new Date(allInsights[0].date) : STATIC_PAGE_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...allInsights.map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: new Date(insight.date),
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
        lastModified: STATIC_PAGE_DATE,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    );

  return [...staticRoutes, ...projectRoutes, ...insightRoutes, ...pseoRoutes];
}
