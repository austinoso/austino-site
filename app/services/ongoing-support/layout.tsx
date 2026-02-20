import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ongoing Partnership | austino",
  description:
    "A developer in your corner who watches the data, stays ahead of trends, and keeps your site evolving as fast as the web does.",
};

export default function OngoingSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
