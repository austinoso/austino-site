"use client";

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" className="relative min-h-screen bg-warm-bg">
      <Navigation />

      <div className="page-frame">
        <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 flex flex-col items-center text-center">
          <p className="section-label mb-5">Error</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-5">
            Something went wrong.
          </h1>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-md mb-10 text-pretty">
            An unexpected error occurred. You can try again or head back to the
            home page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={reset}
              className="px-7 py-3.5 border border-stone-200 text-stone-900 font-semibold text-[15px] rounded-lg transition-all duration-300 hover:border-warm-gold/30 hover:text-warm-gold"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-[15px] rounded-lg transition-all duration-300 hover:-translate-y-px shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-warm-bg"
            >
              <span>Back to Home</span>
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
