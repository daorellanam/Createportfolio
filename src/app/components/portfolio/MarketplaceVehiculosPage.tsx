import videoMockup from "../../../imports/vehiculos_(1).mp4";
import { CaseStudyLayout } from "./CaseStudyLayout";

export function MarketplaceVehiculosPage() {
  return (
    <CaseStudyLayout
      index={2}
      total={4}
      category="UX UI Design · Product Design · 2025"
      title="Marketplace de Vehículos"
      description="Developing a visual and interactive vehicle marketplace experience within gtc.com.gt that allows users to fully explore the journey—from browsing the landing page to selecting a new vehicle, requesting a quote, and completing an immediate prequalification."
      tags={["UX UI DESIGN", "WEB", "RESPONSIVE", "PRODUCT DESIGN"]}
      mockupVideo={videoMockup}
      mockupAlt="Marketplace de Vehículos mockup"
      overview={`The Vehicle Marketplace is a visual and interactive experience designed within gtc.com.gt to allow users to fully explore the vehicle purchasing journey—from initial browsing to quotation and immediate prequalification. The platform supports both exploratory users with no purchase intent and users ready to select a vehicle and start a financial process.\n\nThe solution prioritizes clarity, personalization, and guided decision‑making across the entire experience.`}
      challenge={`Users interested in purchasing a vehicle faced fragmented journeys, limited financial visibility, and unclear paths between exploration and formal acquisition. There was a need to validate whether users could confidently move from browsing to prequalification without friction, confusion, or easy abandonment.\n\nAdditionally, the marketplace needed to support multiple user intents—casual exploration, comparison, financial simulation, and formal acquisition—within a single coherent experience.`}
      approach={`I designed a flexible, scenario‑based experience that adapts to different levels of user intent. The platform guides users through vehicle discovery using relevant filters, detailed listings, and comparison tools, while enabling quota simulations and immediate prequalification at multiple points in the journey.\n\nComplementary flows were also designed to support the ecosystem, including onboarding forms for partner dealerships and appointment scheduling with advisors, ensuring a connected and scalable marketplace experience.`}
      outcome="The Vehicle Marketplace unified vehicle discovery, financial simulation, and immediate prequalification into a single digital flow, improving lead qualification and accelerating user decision‑making. By providing early visibility into pricing and financing options, the platform reduced friction in the acquisition process and enabled more informed conversations between users, advisors, and partner dealerships."
      year="2025"
      categoryLabel="UX UI Design · Product Design"
      role="Lead Designer"
      accentColor="#ff6b6b"
      nextProject={{
        title: "Vivienda GTC",
        slug: "/work/vivienda-gtc",
      }}
    />
  );
}