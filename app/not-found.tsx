import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

export default function NotFound() {
  return (
    <>
      <main id="main-content" className="relative min-h-screen bg-warm-bg">
        <Navigation />

        <div className="page-frame">
          <div className="relative px-6 sm:px-10 md:px-14 lg:px-20 pt-20 pb-20 sm:pt-24 sm:pb-24 md:pt-28 md:pb-28 flex flex-col items-center text-center">
            <p className="section-label mb-5">404</p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-5">
              Page not found.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-md mb-10 text-pretty">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <PrimaryButton href="/" arrow>
              Back to Home
            </PrimaryButton>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
