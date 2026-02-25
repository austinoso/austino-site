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
      <div className="page-frame">
        {/* ── Flowing gradient ribbon — sits behind all sections ── */}
        <div
          className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          {/* Primary ribbon — cyan to violet flowing diagonally */}
          <div
            className="absolute"
            style={{
              top: "-5%",
              right: "-20%",
              width: "90%",
              height: "70%",
              background:
                "linear-gradient(135deg, rgba(64,224,255,0.45) 0%, rgba(167,139,250,0.5) 35%, rgba(244,114,182,0.45) 65%, rgba(251,191,36,0.25) 100%)",
              filter: "blur(120px)",
              borderRadius: "40%",
              transform: "rotate(-12deg)",
            }}
          />
          {/* Secondary ribbon — violet/cyan sweep from left */}
          <div
            className="absolute"
            style={{
              top: "25%",
              left: "-25%",
              width: "70%",
              height: "50%",
              background:
                "linear-gradient(160deg, rgba(167,139,250,0.35) 0%, rgba(64,224,255,0.4) 50%, rgba(244,114,182,0.2) 100%)",
              filter: "blur(130px)",
              borderRadius: "50%",
              transform: "rotate(8deg)",
            }}
          />
          {/* Tertiary accent — rose/amber bloom at bottom */}
          <div
            className="absolute"
            style={{
              bottom: "0%",
              right: "5%",
              width: "60%",
              height: "40%",
              background:
                "radial-gradient(ellipse at center, rgba(244,114,182,0.4) 0%, rgba(251,191,36,0.2) 40%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
          {/* Fourth bloom — cyan at mid-page */}
          <div
            className="absolute"
            style={{
              top: "55%",
              right: "-10%",
              width: "50%",
              height: "35%",
              background:
                "radial-gradient(ellipse at center, rgba(64,224,255,0.3) 0%, rgba(167,139,250,0.15) 50%, transparent 70%)",
              filter: "blur(110px)",
            }}
          />
        </div>

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
