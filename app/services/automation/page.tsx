import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Hero from "./Hero";
import RealExamples from "./RealExamples";
import AlwaysOn from "./AlwaysOn";
import Integration from "./Integration";
import TheMath from "./TheMath";
import TheProcess from "./TheProcess";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

export default function AutomationPage() {
  return (
    <main id="main-content" className="relative min-h-screen bg-[#050505]">
      <Navigation />

      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      {/* Accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 5%, rgba(64,224,255,0.04), transparent), radial-gradient(ellipse 60% 30% at 20% 60%, rgba(120,75,255,0.025), transparent)",
        }}
        aria-hidden="true"
      />

      <article className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 md:pb-36">
        {/* Back Navigation */}
        <Link
          href="/#solutions"
          className="inline-flex items-center gap-2 text-sm font-mono text-cyber-gray-400 hover:text-white transition-colors duration-300 mb-10 sm:mb-14 tracking-wide"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          <span>Back to Home</span>
        </Link>

        <Hero />
        <RealExamples />
        <AlwaysOn />
        <Integration />
        <TheMath />
        <TheProcess />
        <FAQ />
        <FinalCTA />
      </article>

      <Footer />
    </main>
  );
}
