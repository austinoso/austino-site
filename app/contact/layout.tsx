import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | austino",
  description:
    "Tell me about your business and I'll follow up with a clear plan within 24 hours. No jargon, no pressure.",
  alternates: {
    canonical: "https://www.austino.dev/contact",
  },
  openGraph: {
    title: "Contact | austino",
    description:
      "Tell me about your business and I'll follow up with a clear plan within 24 hours. No jargon, no pressure.",
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
