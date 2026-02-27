import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.austino.dev"),
  title: "Modern Web Strategy & Automation | austino",
  description:
    "Websites that rank, automation that saves hours, and growth strategy backed by real data. Built for local businesses tired of templates and guesswork.",
  keywords: [
    "small business web development",
    "local business website",
    "business automation",
    "local SEO strategy",
    "workflow automation",
    "growth strategy small business",
    "search engine optimization",
    "web developer for small business",
    "Central Valley web developer",
    "custom business websites",
  ],
  authors: [{ name: "Austin O." }],
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.austino.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.austino.dev",
    siteName: "austino",
    title: "Modern Web Strategy & Automation | austino",
    description:
      "Websites that rank, automation that saves hours, and growth strategy backed by real data. Built for local businesses tired of templates and guesswork.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Web Strategy & Automation | austino",
    description:
      "Websites that rank, automation that saves hours, and growth strategy backed by real data. Built for local businesses tired of templates and guesswork.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preconnect"
          href="https://api-gateway.umami.dev"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://api-gateway.umami.dev" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <Script
          defer
          src="/stats/script.js"
          data-website-id="acac45ad-5413-4bdd-9e96-5d60f56a21ff"
          data-domains="austino.dev,www.austino.dev"
          strategy="afterInteractive"
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyber-accent focus:text-[#060608] focus:font-semibold focus:rounded-lg focus:text-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <JsonLd />
        <div className="min-h-screen bg-cyber-dark">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
