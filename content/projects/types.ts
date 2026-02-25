import type { LucideIcon } from "lucide-react";

export interface Project {
  slug: string;
  title: string;
  excerpt: string;
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
