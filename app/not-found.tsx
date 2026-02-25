import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="relative min-h-screen bg-cyber-dark">
      <Navigation />

      <div className="page-frame">
        <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 flex flex-col items-center text-center">
          <p className="section-label mb-5">404</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-5">
            Page not found.
          </h1>
          <p className="text-base sm:text-lg text-cyber-gray-300 leading-relaxed max-w-md mb-10 text-pretty">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link
            href="/"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-cyber-accent text-black font-semibold text-[15px] rounded-lg transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(64,224,255,0.4)]"
          >
            <span>Back to Home</span>
            <ArrowRight
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
