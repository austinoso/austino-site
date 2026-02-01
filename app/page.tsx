import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <Work />
      <Services />
      <Footer />
    </main>
  );
}
