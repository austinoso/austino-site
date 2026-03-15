import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface InsightFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
  relatedSlugs?: string[];
}

export interface InsightMeta extends InsightFrontmatter {
  slug: string;
}

export interface Insight extends InsightMeta {
  content: string;
}

const insightsDir = path.join(process.cwd(), "content", "insights");

export function getAllInsights(): InsightMeta[] {
  const files = fs.readdirSync(insightsDir).filter((f) => f.endsWith(".md"));

  const insights = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(insightsDir, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      ...(data as InsightFrontmatter),
    };
  });

  // Sort newest first
  return insights.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getInsightBySlug(slug: string): Insight | undefined {
  const filePath = path.join(insightsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    content,
    ...(data as InsightFrontmatter),
  };
}

export function getAllInsightSlugs(): string[] {
  return fs
    .readdirSync(insightsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getRelatedInsights(slugs: string[]): InsightMeta[] {
  return slugs
    .map((slug) => {
      const filePath = path.join(insightsDir, `${slug}.md`);
      if (!fs.existsSync(filePath)) return undefined;
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as InsightFrontmatter) };
    })
    .filter((item): item is InsightMeta => item !== undefined);
}
