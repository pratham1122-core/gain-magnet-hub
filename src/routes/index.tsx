import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFloat, MobileStickyBar } from "@/components/floating";
import { LeadPopup } from "@/components/lead-popup";
import { SectionDivider } from "@/components/section-divider";
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

/*
  BEFORE LAUNCH CHECKLIST:
  1. Replace Calendly URL: search 'calendly.com/frigg' — replace with real link
  2. Add GA4 tag: search INSERT GA4 MEASUREMENT ID
  3. Add GTM tag: search INSERT GTM CONTAINER ID
  4. Add LinkedIn tag: search INSERT LINKEDIN PARTNER ID
  5. Replace social media links in footer
  6. Connect popup form to CRM: search CONNECT FORM SUBMISSION
  7. Replace James, Paula, Tina bios with real details
  8. Verify all team photo URLs load without 403 errors
*/

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
      <SiteNav />
      <main>
        <HeroSection />
        <TrustBar />
        <SectionDivider />
        <ProblemSection />
        <CtaStrip1 />
        <ServicesSection />
        <CtaStrip2 />
        <ExpertsSection />
        <SectionDivider />
        <ResultsSection />
        <TestimonialsSection />
        <CtaStrip3 />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
      <MobileStickyBar />
      <LeadPopup />
    </div>
  );
}
