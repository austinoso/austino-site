import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Your Free Game Plan | austino",
  description:
    "Answer a few quick questions about your business and I'll build a custom plan before we even talk. Takes 3 minutes.",
  alternates: {
    canonical: "https://www.austino.dev/onboarding",
  },
  openGraph: {
    title: "Get Your Free Game Plan | austino",
    description:
      "Answer a few quick questions about your business and I'll build a custom plan before we even talk. Takes 3 minutes.",
    url: "https://www.austino.dev/onboarding",
  },
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
