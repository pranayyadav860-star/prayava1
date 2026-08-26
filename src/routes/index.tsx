
import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeLeadPopup } from "@/components/home-popup";
import {
  ContactBand,
  FaqSection,
  HomeHero,
  IndustriesSection,
  PricingSection,
  ProcessSection,
  ProofStrip,
  ResultsSection,
  ServicesPreview,
  ServicesScrollBar,
  TestimonialsSection,
  WhySection,
} from "@/components/home-sections";
import { SiteShell } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: "PRAYAVA — Digital Marketing, Web Design & SEO in Hyderabad",
      },
    ],
  }),
});

function Home() {
  return (
    <SiteShell>
      <HomeHero />
      <ProofStrip />
      <ServicesScrollBar />
      
      <ServicesPreview />
      
      <IndustriesSection />
      <ResultsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactBand />
       <HomeLeadPopup />
    </SiteShell>
  );
}
