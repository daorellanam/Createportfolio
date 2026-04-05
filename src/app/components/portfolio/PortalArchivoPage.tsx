import imgMockup from "figma:asset/b359b2013cac8fea9fc63e0d9ee92216f32612d6.png";
import videoMockup from "../../../imports/test.mp4";
import { CaseStudyLayout } from "./CaseStudyLayout";

export function PortalArchivoPage() {
  return (
    <CaseStudyLayout
      index={1}
      total={4}
      category="UX UI Design · Product Design · 2026"
      title="Portal Archivo"
      description="Designing a digital interface that automates and transforms manual processes into integrated digital workflows, enabling end-to-end management, traceability, and compliance of both physical and digital documents."
      tags={["UX RESEARCH", "WEB", "RESPONSIVE", "PRODUCT DESIGN"]}
      mockupImage={imgMockup}
      mockupVideo={videoMockup}
      mockupAlt="Portal Archivo mockup"
      overview={`Portal Archivo is a digital document management platform designed to transform manual archival processes into a centralized, traceable, and fully digital workflow. The product enables end‑to‑end management of document storage, loans, returns, and access control for both physical and digital files, ensuring operational efficiency and regulatory compliance.\n\nThe platform guides users through each step of the document lifecycle, reducing friction while maintaining strict control over sensitive information.`}
      challenge={`Document management processes were fragmented and heavily dependent on manual steps, creating inefficiencies, limited traceability, and high operational risk. The lack of a unified system made it difficult to manage document storage, track physical movements, and control access across different user roles.\n\nAdditionally, users with low system experience needed an intuitive solution that could guide them through complex workflows without increasing training overhead.`}
      approach={`I designed a role‑based experience that guides users through each operational flow, including document storage, digital and physical loans, extensions, and returns. Each process was broken into clear, guided steps with intuitive forms, status visibility, and structured validations.\n\nThe solution prioritized clarity, traceability, and flexibility—allowing administrators to control access periods, approval states, and operational rules, while maintaining a simple and accessible experience for requesters.`}
      outcome="Portal Archivo unified document storage, loan, and return processes into a single role‑based platform, significantly improving traceability and operational control across both digital and physical documents. The solution reduced manual handling, minimized errors, and provided clear visibility into document status throughout the entire lifecycle, while remaining flexible to adapt to future policy and access control changes."
      year="2026"
      categoryLabel="UX UI Design · Product Design"
      role="Lead Designer"
      accentColor="#e8ff4d"
      nextProject={{
        title: "Marketplace de Vehículos",
        slug: "/work/marketplace-de-vehiculos",
      }}
    />
  );
}