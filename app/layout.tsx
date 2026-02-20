import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

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
  metadataBase: new URL("https://austino.dev"),
  title: "austino | Websites, Automation & Tech Support for Small Businesses",
  description:
    "I build fast, high-converting websites, automate the busywork, and provide ongoing tech support — so small business owners can focus on what they do best.",
  keywords: [
    "small business web development",
    "local business website",
    "business automation",
    "booking system integration",
    "workflow automation",
    "small business tech support",
    "website maintenance",
    "web developer for small business",
    "Northern California web developer",
    "custom business tools",
  ],
  authors: [{ name: "Austin O." }],
  alternates: {
    canonical: "https://austino.dev",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://austino.dev",
    siteName: "austino",
    title: "austino | Websites, Automation & Tech Support for Small Businesses",
    description:
      "I build fast, high-converting websites, automate the busywork, and provide ongoing tech support — so small business owners can focus on what they do best.",
  },
  twitter: {
    card: "summary_large_image",
    title: "austino | Websites, Automation & Tech Support for Small Businesses",
    description:
      "I build fast, high-converting websites, automate the busywork, and provide ongoing tech support — so small business owners can focus on what they do best.",
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
        <Script
          defer
          src="/stats/script.js"
          data-website-id="acac45ad-5413-4bdd-9e96-5d60f56a21ff"
          data-domains="austino.dev,www.austino.dev"
          strategy="afterInteractive"
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyber-accent focus:text-[#0B0D10] focus:font-semibold focus:rounded-lg focus:text-sm focus:outline-none"
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
