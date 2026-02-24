import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Strategy | austino",
  description:
    "A web strategist in your corner — using real data to improve what's underperforming and building content that earns search authority every month.",
  alternates: {
    canonical: "https://austino.dev/services/growth-strategy",
  },
  openGraph: {
    title: "Growth Strategy | austino",
    description:
      "A web strategist in your corner — using real data to improve what's underperforming and building content that earns search authority every month.",
    url: "https://austino.dev/services/growth-strategy",
  },
};

export default function GrowthStrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
