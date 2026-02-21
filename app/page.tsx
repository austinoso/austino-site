import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import Work from "@/components/Work";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="main-content" className="relative">
      <Navigation />
      <Suspense>
        <Hero />
      </Suspense>
      <PainPoints />
      <Solutions />
      <Work />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}
