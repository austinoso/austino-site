import type { Metadata, Viewport } from "next";
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
  weight: ["600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.loudbark.dev"),
  title: "Modern Web Strategy & Automation | Loud Bark",
  description:
    "Websites that rank, automation that saves hours, and growth strategy backed by real data. Built for local businesses tired of templates and guesswork.",
  authors: [{ name: "Austin Osorio", url: "https://www.loudbark.dev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.loudbark.dev",
    siteName: "Loud Bark",
    title: "Modern Web Strategy & Automation | Loud Bark",
    description:
      "Websites that rank, automation that saves hours, and growth strategy backed by real data. Built for local businesses tired of templates and guesswork.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Web Strategy & Automation | Loud Bark",
    description:
      "Websites that rank, automation that saves hours, and growth strategy backed by real data. Built for local businesses tired of templates and guesswork.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api-gateway.umami.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api-gateway.umami.dev" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <Script
          defer
          src="/stats/script.js"
          data-website-id="acac45ad-5413-4bdd-9e96-5d60f56a21ff"
          data-domains="loudbark.dev,www.loudbark.dev"
          strategy="afterInteractive"
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-amber-600 focus:text-white focus:font-semibold focus:rounded-lg focus:text-sm focus:outline-none"
        >
          Skip to main content
        </a>
        <JsonLd />
        <div className="min-h-screen bg-warm-bg">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
