import type { LucideIcon } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  /** Shorter title for <title> tag (≤50 chars before suffix). Falls back to `title`. */
  seoTitle?: string;
  excerpt: string;
  /** Shorter excerpt for meta description (≤160 chars). Falls back to `excerpt`. */
  seoExcerpt?: string;
  category: string;
  readTime: string;
  icon: LucideIcon;
  image?: string;
  thumbnail?: string;
  publishedDate: string;
  link?: string;
  linkText?: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  sections: {
    heading: string;
    content: string;
  }[];
}
