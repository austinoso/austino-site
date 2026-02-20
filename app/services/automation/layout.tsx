import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automation | austino",
  description:
    "Stop paying hourly for work that code can do in seconds. Custom automation that connects your tools, eliminates busywork, and runs 24/7.",
  alternates: {
    canonical: "https://austino.dev/services/automation",
  },
  openGraph: {
    title: "Automation | austino",
    description:
      "Stop paying hourly for work that code can do in seconds. Custom automation that connects your tools, eliminates busywork, and runs 24/7.",
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
