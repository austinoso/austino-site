import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local Insights — Tips for Central Valley Businesses | austino",
  description:
    "Practical advice on websites, SEO, and automation for small businesses in the Central Valley. No jargon — just what works.",
  alternates: {
    canonical: "https://www.austino.dev/insights",
  },
  openGraph: {
    title: "Local Insights — Tips for Central Valley Businesses | austino",
    description:
      "Practical advice on websites, SEO, and automation for small businesses in the Central Valley. No jargon — just what works.",
    url: "https://www.austino.dev/insights",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
