import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's Talk About Your Business | austino",
  description:
    "Share a few details and I'll follow up with a clear plan within 24 hours. No jargon, no sales pitch — just a straight answer on how to move forward.",
  alternates: {
    canonical: "https://www.austino.dev/contact",
  },
  openGraph: {
    title: "Let's Talk About Your Business | austino",
    description:
      "Share a few details and I'll follow up with a clear plan within 24 hours. No jargon, no sales pitch — just a straight answer on how to move forward.",
    url: "https://www.austino.dev/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
