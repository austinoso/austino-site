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
    <main id="main-content" className="relative bg-warm-bg">
      <Navigation />
      <div
        className="page-frame"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 90% 60% at 80% 5%, rgba(251,191,36,0.12), rgba(167,139,250,0.12) 35%, rgba(244,114,182,0.10) 65%, transparent 100%)",
            "radial-gradient(ellipse 70% 45% at 5% 30%, rgba(167,139,250,0.10), rgba(212,168,83,0.08) 50%, transparent 100%)",
            "radial-gradient(ellipse 55% 35% at 85% 95%, rgba(244,114,182,0.10), rgba(251,191,36,0.06) 40%, transparent 70%)",
            "radial-gradient(ellipse 45% 30% at 95% 55%, rgba(212,168,83,0.08), rgba(167,139,250,0.05) 50%, transparent 70%)",
          ].join(", "),
        }}
      >
        <Hero />
        <PainPoints />
        <Solutions />
        <Work />
        <About />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
