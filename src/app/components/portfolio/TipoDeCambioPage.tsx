import imgMockup from "../../../assets/8e12ad280096f8f1a2b7a740b369c1d92cc6080b.png";
import { CaseStudyLayout } from "./CaseStudyLayout";

export function TipoDeCambioPage() {
  return (
    <CaseStudyLayout
      index={4}
      total={4}
      category="UX UI Design · Product Design · 2025"
      title="Tipo de Cambio"
      description="Designing a dedicated section to display the real‑time exchange rate from US dollars to Guatemalan quetzals, providing clear and accessible currency conversion information."
      tags={["UX UI DESIGN", "WEB", "RESPONSIVE", "PRODUCT DESIGN"]}
      mockupImage={imgMockup}
      mockupAlt="Tipo de Cambio mockup"
      overview={`The Exchange Rate project focused on designing a dedicated section that allows users to view the real‑time exchange rate from US dollars (USD) to Guatemalan quetzals (GTQ). The solution provides clear, reliable, and easily accessible currency information within the platform.\n\nThe feature supports users who require quick financial reference as part of broader decision‑making and transactional flows.`}
      challenge={`Users needed a simple and trustworthy way to check the current exchange rate without leaving the platform or navigating complex financial tools. Existing solutions were either hidden, unintuitive, or overloaded with unnecessary information.\n\nThe main challenge was to surface critical exchange rate data clearly, ensuring accuracy, readability, and contextual relevance without adding friction to the user experience.`}
      approach={`I designed a focused, low‑friction interface that prioritizes clarity and visibility of the exchange rate. The section was structured to present essential information at a glance, using clear hierarchy, concise labeling, and consistent formatting aligned with the overall product design system.\n\nThe solution was built to integrate seamlessly into the platform, supporting future scalability and potential expansion into additional currencies or financial tools.`}
      outcome="The Exchange Rate section provided users with fast and reliable access to USD‑GTQ conversion data, reducing dependency on external tools and improving confidence in financial decision‑making. The solution strengthened the platform's value as a centralized financial reference while maintaining a lightweight, easy‑to‑use experience."
      year="2025"
      categoryLabel="UX UI Design · Product Design"
      role="Lead Designer"
      accentColor="#c4b5fd"
      nextProject={{
        title: "Portal Archivo",
        slug: "/work/portal-archivo",
      }}
    />
  );
}
