import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Philosophy } from "@/components/sections/Philosophy";
import { PureCare } from "@/components/sections/PureCare";
import { AllInOne } from "@/components/sections/AllInOne";
import { Benefits } from "@/components/sections/Benefits";
import { ProductGallery } from "@/components/sections/ProductGallery";
import { Founder } from "@/components/sections/Founder";
import { InstaFeed } from "@/components/sections/InstaFeed";
import { ProductHighlight } from "@/components/sections/ProductHighlight";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/ui/Footer";
import { Wave } from "@/components/ui/Wave";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Wave />
      <Philosophy />
      <Wave />
      <PureCare />
      <Wave />
      <Benefits />
      <Wave />
      <AllInOne />
      <Wave />
      <ProductGallery />
      <Wave />
      <Founder />
      <Wave />
      <InstaFeed />
      <Wave />
      <ProductHighlight />
      <Wave />
      <Newsletter />
      <Wave />
      <Footer />
    </main>
  );
}
