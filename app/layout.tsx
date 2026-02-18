import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
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
  openGraph: {
    type: "website",
    locale: "en_US",
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
        <SmoothScroll>
          <div className="min-h-screen bg-cyber-dark">{children}</div>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
