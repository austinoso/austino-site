import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation | austino",
  description:
    "Custom automation that connects your tools, eliminates repetitive tasks, and runs 24/7 — so you can focus on growing your business.",
  alternates: {
    canonical: "https://austino.dev/services/automation",
  },
  openGraph: {
    title: "Automation | austino",
    description:
      "Custom automation that connects your tools, eliminates repetitive tasks, and runs 24/7 — so you can focus on growing your business.",
    url: "https://austino.dev/services/automation",
  },
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
