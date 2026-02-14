import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Work from "@/components/Work";
import StrategicWorkflow from "@/components/StrategicWorkflow";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <PainPoints />
      <Solutions />
      <Work />
      {/* <Services />
      <StrategicWorkflow /> */}
      <CTA />
      <Footer />
    </main>
  );
}
