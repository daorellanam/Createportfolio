import imgMockup from "figma:asset/cb7abe904d4ae4ceb10b3ec6a72c033d8bd9f7a7.png";
import { CaseStudyLayout } from "./CaseStudyLayout";

export function ViviendaGtcPage() {
  return (
    <CaseStudyLayout
      index={3}
      total={4}
      category="UX UI Design · Product Design · 2025"
      title="Vivienda GTC"
      description="Designing a real estate landing page that centralizes 280+ projects in Guatemala, offering a fast, personalized experience and 100% digital mortgage prequalification."
      tags={["UX UI DESIGN", "WEB", "RESPONSIVE", "PRODUCT DESIGN"]}
      mockupImage={imgMockup}
      mockupAlt="Vivienda GTC mockup"
      overview={`Vivienda GTC is a real estate landing page designed to centralize over 280 housing projects across Guatemala, offering users a fast, accessible, and personalized browsing experience. The platform connects qualified prospects directly with developers while enabling 100% digital mortgage prequalification through Banco G&T Continental.\n\nThe solution aims to simplify property discovery and accelerate access to financing opportunities in a single digital experience.`}
      challenge={`Real estate discovery was fragmented across multiple sources, making it difficult for users to explore available projects, compare options, and understand financing possibilities early in the journey. There was a need to create a centralized experience that could scale content, support different search behaviors, and reduce friction between exploration and financial decision‑making.\n\nAdditionally, the platform needed to provide immediate feedback through mortgage simulations and prequalification, while ensuring clarity and accessibility across devices.`}
      approach={`I designed a search‑driven landing experience structured around real user navigation patterns, including generic searches, filtered exploration, and empty‑state scenarios with cross‑selling recommendations. The experience was built with modular components such as property cards, project detail views, and a dynamic form that enables real‑time quota estimation and prequalification.\n\nThe solution was optimized for desktop while maintaining consistent interactions and flows across devices, ensuring users could seamlessly move from discovery to contact and financing initiation.`}
      outcome="Vivienda GTC centralized the real estate search and financing journey into a single digital platform, improving lead acquisition and accelerating mortgage prequalification. By combining fast property discovery with real‑time financial estimation, the solution increased user confidence, reduced friction in early decision‑making, and supported growth in the mortgage portfolio through qualified, high‑intent prospects."
      year="2025"
      categoryLabel="UX UI Design · Product Design"
      role="Lead Designer"
      accentColor="#4dffd2"
      nextProject={{
        title: "Tipo de Cambio",
        slug: "/work/tipo-de-cambio",
      }}
    />
  );
}
