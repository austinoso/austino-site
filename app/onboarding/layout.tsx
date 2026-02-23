import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started | austino",
  description:
    "Tell me about your business in a few quick steps and I'll have a plan ready for our discovery call.",
  alternates: {
    canonical: "https://austino.dev/onboarding",
  },
  openGraph: {
    title: "Get Started | austino",
    description:
      "Tell me about your business in a few quick steps and I'll have a plan ready for our discovery call.",
    url: "https://austino.dev/onboarding",
  },
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
