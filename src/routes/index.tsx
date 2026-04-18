import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat, MobileStickyBar } from "@/components/floating";
import { useReveal } from "@/hooks/use-reveal";
import {
  HeroSection,
  TrustBar,
  ProblemSection,
  CtaStrip1,
  ServicesSection,
  CtaStrip2,
  ExpertsSection,
  ResultsSection,
  TestimonialsSection,
  CtaStrip3,
  PricingSection,
  FinalCtaSection,
} from "@/components/landing-sections";

const META_TITLE =
  "Canadian Compliance Consulting | PIPEDA, AIDA, SOC 2, ISO 27001 | Frigg Business Solutions";
const META_DESC =
  "Frigg Business Solutions helps Canadian businesses achieve PIPEDA, AIDA, PHIPA, SOC 2, and ISO 27001 compliance. Led by CISSP and ISO 27001 certified experts. Book your free 30-minute assessment.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: META_TITLE },
      { name: "twitter:description", content: META_DESC },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useReveal();
  return (
    <div ref={ref} className="bg-background">
      {/*
        Analytics placeholders — uncomment & populate before launch:
        [INSERT GA4 MEASUREMENT ID]
        [INSERT GTM CONTAINER ID]
        [INSERT LINKEDIN PARTNER ID]
      */}
      <SiteNav />
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemSection />
        <CtaStrip1 />
        <ServicesSection />
        <CtaStrip2 />
        <ExpertsSection />
        <ResultsSection />
        <TestimonialsSection />
        <CtaStrip3 />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <MobileStickyBar />
    </div>
  );
}
