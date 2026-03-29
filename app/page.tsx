import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicePillars from "@/components/ServicePillars";
import MidCTA from "@/components/MidCTA";
import Work from "@/components/Work";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <main id="main-content" className="relative bg-warm-bg">
        <Navigation />
        <div className="site-frame">
          <Hero />
          <ServicePillars />
          <MidCTA />
          <Work />
          <About />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
