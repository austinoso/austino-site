import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ongoing Partnership | austino",
  description:
    "A developer in your corner who watches the data, stays ahead of trends, and keeps your site evolving as fast as the web does.",
  alternates: {
    canonical: "https://austino.dev/services/ongoing-support",
  },
  openGraph: {
    title: "Ongoing Partnership | austino",
    description:
      "A developer in your corner who watches the data, stays ahead of trends, and keeps your site evolving as fast as the web does.",
    url: "https://austino.dev/services/ongoing-support",
  },
};

export default function OngoingSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
