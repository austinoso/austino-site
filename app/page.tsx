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
    <main
      id="main-content"
      className="relative bg-warm-bg"
      style={{
        backgroundImage: [
          "radial-gradient(ellipse 80% 50% at 70% 10%, rgba(251,191,36,0.03), transparent 100%)",
          "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(167,139,250,0.02), transparent 100%)",
        ].join(", "),
      }}
    >
      <Navigation />
      <div
        className="page-frame"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 90% 60% at 80% 5%, rgba(251,191,36,0.04), rgba(167,139,250,0.03) 35%, transparent 100%)",
            "radial-gradient(ellipse 70% 45% at 5% 30%, rgba(167,139,250,0.03), rgba(212,168,83,0.02) 50%, transparent 100%)",
            "radial-gradient(ellipse 55% 35% at 85% 95%, rgba(244,114,182,0.03), rgba(251,191,36,0.02) 40%, transparent 70%)",
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
