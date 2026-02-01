import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  title: "Senior Product Engineer | Custom Software Development & MVPs",
  description:
    "Specializing in building MVPs, custom business solutions, and automation tools. 6 years of experience delivering production-grade software for startups and enterprises.",
  keywords: [
    "software development",
    "MVP development",
    "custom solutions",
    "automation tools",
    "senior engineer",
  ],
  authors: [{ name: "Your Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Senior Product Engineer | Custom Software Development",
    description:
      "Building MVPs, custom business solutions, and automation tools with 6 years of experience.",
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
      </body>
    </html>
  );
}
