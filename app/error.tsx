"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" className="relative min-h-screen bg-[#050505]">
      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 md:px-12 pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 md:pb-36 flex flex-col items-center text-center">
        <p className="font-mono text-xs text-cyber-accent/70 uppercase tracking-[0.2em] mb-4">
          Error
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
          Something went wrong.
        </h1>
        <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-md mb-10">
          An unexpected error occurred. You can try again or head back to the
          home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={reset}
            className="px-7 py-3.5 border-2 border-cyber-accent text-cyber-accent font-semibold text-base rounded-lg transition-all duration-300 hover:bg-cyber-accent hover:text-[#0B0D10]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-cyber-accent text-black font-semibold text-base rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.4)]"
          >
            <span>Back to Home</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
