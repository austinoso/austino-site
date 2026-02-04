import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "austino | Technical Partner for Web Apps & Custom Tools",
  description:
    "Partnering with founders and teams to build custom software, web apps, and digital tools. Focused on technical logistics and feasibility to ensure every project launches on a solid foundation.",
  keywords: [
    "software development",
    "MVP development",
    "custom solutions",
    "automation tools",
    "senior engineer",
    "technical consulting",
    "web applications",
    "SaaS products",
    "founder partner",
    "product engineering",
    "workflow automation",
    "technical advisory",
    "full-stack development",
    "web development",
  ],
  authors: [{ name: "Austin O." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "austino | Technical Partner for Web Apps & Custom Tools",
    description:
      "Partnering with founders and teams to build custom software, web apps, and digital tools. Focused on technical logistics and feasibility to ensure every project launches on a solid foundation.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <div className="min-h-screen bg-cyber-dark">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
