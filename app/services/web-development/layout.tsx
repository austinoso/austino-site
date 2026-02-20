import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development | austino",
  description:
    "Fast, search-optimized websites that turn visitors into customers around the clock. No templates, no bloat — just clean code built for results.",
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
