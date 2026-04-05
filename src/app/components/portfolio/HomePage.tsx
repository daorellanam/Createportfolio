import { useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import svgPaths from "../../../imports/svg-vtkdccldpy";
import imgImagePortalArchivo from "figma:asset/2ad2b322681168a61808bb158f03e8d16fd03c67.png";
import imgImage2 from "figma:asset/9efc07517d654967338deadd81e4c2d1c382e30c.png";
import imgImageMarketplaceDeVehiculos from "figma:asset/e26468e0159c228f6109a0199f177e942d569ddb.png";
import imgImage3 from "figma:asset/78e61488754f7d3031964b49201c5496665f6d51.png";
import imgImageViviendaGtc from "figma:asset/383085b406413cacce39098deb5b49faa2f8627c.png";
import imgImage4 from "figma:asset/f94cf1b90856c36272357f67dde572cc5979a109.png";
import imgImageTipoDeCambio from "figma:asset/424832ab422170b8acffe6a9d27b64a03e08962c.png";
import imgImage5 from "figma:asset/8d1c8b8b685763dc052c69f8cb08eae93de3fc54.png";
import { Navbar } from "./Navbar";
import IllustrationDelivery from "../../../imports/IllustrationDelivery";

const projects = [
  {
    id: "portal-archivo",
    slug: "/work/portal-archivo",
    number: "01",
    category: "UX UI Design · Product Design · 2026",
    title: "Portal Archivo",
    description:
      "Designing a digital interface that automates and transforms manual processes into integrated digital workflows, enabling end‑to‑end management, traceability, and compliance of both physical and digital documents.",
    image: imgImagePortalArchivo,
    overlay: imgImage2,
    accentColor: "#e8ff4d",
  },
  {
    id: "marketplace-de-vehiculos",
    slug: "/work/marketplace-de-vehiculos",
    number: "02",
    category: "UX UI Design · Product Design · 2025",
    title: "Marketplace de Vehículos",
    description:
      "Developing a visual and interactive vehicle marketplace experience within gtc.com.gt that allows users to fully explore the journey—from browsing the landing page to selecting a new vehicle, requesting a quote, and completing an immediate prequalification.",
    image: imgImageMarketplaceDeVehiculos,
    overlay: imgImage3,
    accentColor: "#ff6b6b",
  },
  {
    id: "vivienda-gtc",
    slug: "/work/vivienda-gtc",
    number: "03",
    category: "UX UI Design · Product Design · 2025",
    title: "Vivienda GTC",
    description:
      "Designing a real estate landing page that centralizes 280+ projects in Guatemala, offering a fast, personalized experience and 100% digital mortgage prequalification.",
    image: imgImageViviendaGtc,
    overlay: imgImage4,
    accentColor: "#4dffd2",
  },
  {
    id: "tipo-de-cambio",
    slug: "/work/tipo-de-cambio",
    number: "04",
    category: "UX UI Design · Product Design · 2025",
    title: "Tipo de Cambio",
    description:
      "Designing a dedicated section to display the real‑time exchange rate from US dollars to Guatemalan quetzals, providing clear and accessible currency conversion information.",
    image: imgImageTipoDeCambio,
    overlay: imgImage5,
    accentColor: "#c4b5fd",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 15.9943 15.9943"
      fill="none"
    >
      <path
        d={svgPaths.p1aaa1180}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p37aecf00}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 17.9972 17.9972"
      fill="none"
    >
      <g clipPath="url(#clip0_li)">
        <path
          d={svgPaths.p3b53ed00}
          stroke="white"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.49976"
        />
        <path
          d={svgPaths.p28341100}
          stroke="white"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.49976"
        />
        <path
          d={svgPaths.p3afff980}
          stroke="white"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.49976"
        />
      </g>
      <defs>
        <clipPath id="clip0_li">
          <rect fill="white" height="17.9972" width="17.9972" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: (typeof projects)[0];
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative bg-[#111] border border-white/[0.08] overflow-hidden cursor-pointer group flex flex-col"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image — tall, fills top portion */}
      <div className="h-[340px] overflow-hidden relative shrink-0">
        <img
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          src={project.image}
        />
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          src={project.overlay}
        />
        {/* Dark overlay fades on hover */}
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-400 group-hover:opacity-0" />

        {/* Project number */}
        <span className="absolute top-4 right-4 font-['Space_Mono',monospace] text-[11px] text-white/30">
          {project.number}
        </span>
      </div>

      {/* Accent line — grows on hover */}
      <div
        className="h-[2px] shrink-0 transition-all duration-500 ease-out"
        style={{
          backgroundColor: project.accentColor,
          width: hovered ? "100%" : "0%",
        }}
      />

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p className="font-['Space_Grotesk',sans-serif] font-medium text-[11px] text-white/40 tracking-[1.68px] uppercase mb-2">
          {project.category}
        </p>
        <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[22px] text-white tracking-[-0.44px] mb-3">
          {project.title}
        </h3>
        <p className="font-['Space_Grotesk',sans-serif] font-medium text-[13px] text-white/45 leading-[1.65] flex-1">
          {project.description}
        </p>

        {/* Hover CTA button */}
        <div className="mt-5 h-[36px] overflow-hidden">
          <div
            className="flex items-center gap-2 transition-all duration-300 ease-out"
            style={{
              transform: hovered
                ? "translateY(0)"
                : "translateY(100%)",
              opacity: hovered ? 1 : 0,
            }}
          >
            <span
              className="inline-flex items-center gap-2 border px-4 py-2 font-['Space_Grotesk',sans-serif] font-medium text-[11px] tracking-[1.4px] uppercase"
              style={{
                borderColor: project.accentColor,
                color: project.accentColor,
              }}
            >
              View Project
              <svg
                width="11"
                height="11"
                viewBox="0 0 15.9943 15.9943"
                fill="none"
              >
                <path
                  d={svgPaths.p1aaa1180}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
                <path
                  d={svgPaths.p37aecf00}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const workRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const state = location.state as {
      scrollTo?: string;
    } | null;
    if (state?.scrollTo) {
      const refs: Record<
        string,
        React.RefObject<HTMLElement | null>
      > = {
        work: workRef,
        about: aboutRef,
        contact: contactRef,
      };
      const ref = refs[state.scrollTo];
      if (ref?.current) {
        setTimeout(() => {
          ref.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.state]);

  const scrollTo = (
    ref: React.RefObject<HTMLElement | null>,
  ) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar
        onWorkClick={() => scrollTo(workRef)}
        onAboutClick={() => scrollTo(aboutRef)}
        onContactClick={() => scrollTo(contactRef)}
      />

      {/* ─── Hero ─── */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-28 pb-16">
        {/* Available for work */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#e8ff4d] opacity-80" />
          <span className="font-['Space_Grotesk',sans-serif] text-[13px] text-white/50 tracking-[1.96px] uppercase">
            Available for work
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-['Space_Grotesk',sans-serif] font-bold text-[clamp(72px,11vw,144px)] leading-[0.95] tracking-[-0.03em] mb-10">
          <span className="text-white block">Product</span>
          <span className="text-white/20">
            Designer<span className="text-[#e8ff4d]">©</span>
          </span>
        </h1>

        {/* Subtext row */}
        <div className="flex flex-col md:flex-row gap-6 md:items-start md:justify-between max-w-5xl">
          <p className="font-['Space_Grotesk',sans-serif] text-[15px] text-white/50 leading-[1.6] max-w-[340px]">
            I design and optimize product experiences across
            fintech, real estate, and marketplace
            platforms—turning manual, fragmented processes into
            clear, scalable digital solutions.
          </p>
          <p className="font-['Space_Grotesk',sans-serif] text-[15px] text-white/50 leading-[1.6] max-w-[340px]">
            Based in Guatemala, I work closely with product,
            engineering, and business teams to create intuitive
            interfaces focused on usability, conversion, and
            growth.
          </p>
          <button
            onClick={() => scrollTo(contactRef)}
            className="flex items-center gap-2 font-['Space_Grotesk',sans-serif] font-bold text-[15px] text-white border-b border-white/30 pb-1 hover:border-white transition-colors self-start shrink-0"
          >
            Get in touch <ArrowIcon />
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="flex items-center gap-3 mt-14">
          <div className="w-12 h-px bg-white/20" />
          <span className="font-['Space_Grotesk',sans-serif] text-[11px] text-white/30 tracking-[1.92px] uppercase">
            Scroll
          </span>
        </div>
      </section>

      {/* ─── Selected Work ─── */}
      <section
        ref={workRef}
        className="px-6 md:px-12 lg:px-20 pt-16 pb-20 border-t border-white/10"
      >
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <span className="font-['Space_Grotesk',sans-serif] text-[12px] text-white/30 tracking-[1.92px] uppercase">
              02
            </span>
            <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[20px] text-white tracking-[-0.2px]">
              Selected Work
            </h2>
          </div>
          <span className="font-['Space_Grotesk',sans-serif] text-[14px] text-white/30">
            4 projects
          </span>
        </div>

        {/* 2-col grid — cards are vertical by nature */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => navigate(project.slug)}
            />
          ))}
        </div>
      </section>

      {/* ─── About ─── */}
      <section
        ref={aboutRef}
        className="border-t border-white/10 px-6 md:px-12 lg:px-20 pt-16 pb-20"
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-['Space_Grotesk',sans-serif] text-[12px] text-white/30 tracking-[1.92px] uppercase">
            02
          </span>
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[20px] text-white tracking-[-0.2px]">
            About
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left col — text left-aligned */}
          <div className="text-left">
            <p className="font-['Space_Grotesk',sans-serif] font-bold text-[26px] md:text-[30px] text-white leading-[1.3] tracking-[-0.6px] mb-6">
              I design digital experiences that simplify complex
              decisions and turn business goals into clear,
              usable products.
            </p>
            <div className="space-y-4 font-['Space_Grotesk',sans-serif] text-[14px] text-white/50 leading-[1.8]">
              <p>
                I'm a UX/UI Designer/Product Designer with a
                background in communication and design, focused
                on building conversion‑driven interfaces for
                fintech, real estate, and digital marketplaces.
                My work centers on clarity, usability, and
                scalable design systems that help users move
                confidently from exploration to action.
              </p>
              <p>
                I collaborate closely with product and
                engineering teams to design solutions that
                balance user needs, technical feasibility, and
                business impact—whether it's a vehicle
                marketplace, a digital mortgage flow, or a
                data‑driven platform.
              </p>
              <p>
                I believe good design should feel intuitive,
                reduce friction, and deliver measurable results.
              </p>
            </div>
          </div>

          {/* Right col — stats with values right-aligned */}
          <div>
            {[
              { label: "Experience", value: "4+ Years" },
              {
                label: "Specialization",
                value: "Product & UX Design",
              },
              { label: "Tools", value: "Figma, Claude, Miro" },
              {
                label: "Education",
                value:
                  "Bachelor's Degree in Communication and Design (Cum Laude)",
              },
              { label: "Location", value: "Guatemala City" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 py-4 border-b border-white/10"
              >
                <span className="font-['Space_Grotesk',sans-serif] text-[14px] text-white/40 shrink-0">
                  {item.label}
                </span>
                <span className="font-['Space_Grotesk',sans-serif] font-medium text-[14px] text-white text-right">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section
        ref={contactRef}
        className="border-t border-white/10 px-6 md:px-12 lg:px-20 pt-16 pb-20"
      >
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="font-['Space_Grotesk',sans-serif] text-[12px] text-white/30 tracking-[1.92px] uppercase">
            03
          </span>
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-[20px] text-white tracking-[-0.2px]">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left col — info */}
          <div className="text-left">
            <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[clamp(48px,6vw,72px)] leading-[1] tracking-[-0.03em] mb-6">
              <span className="text-white block">
                Let's work
              </span>
              <span className="text-white/20">together.</span>
            </h3>
            <p className="font-['Space_Grotesk',sans-serif] text-[14px] text-white/50 leading-[1.75] mb-6 max-w-sm">
              Open to full-time roles, freelance projects, and
              design consultancy. I typically respond within 24
              hours.
            </p>
            <a
              href="mailto:daorellanamgt@gmail.com"
              className="flex items-center gap-2 font-['Space_Grotesk',sans-serif] font-bold text-[#e8ff4d] text-[14px] hover:opacity-70 transition-opacity mb-4"
            >
              daorellanamgt@gmail.com <ArrowIcon />
            </a>
            <a
              href="https://linkedin.com/in/daorellanamgt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
            >
              <LinkedInIcon />
              <span className="font-['Space_Grotesk',sans-serif] text-[13px] underline">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Right col — illustration */}
          <div className="flex items-center justify-center w-full">
            <div className="w-full max-w-[480px]" style={{ aspectRatio: "402.857 / 369.52" }}>
              <IllustrationDelivery />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/10 px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between">
        <span className="font-['Space_Mono',monospace] text-[13px] text-white/30">
          © 2026 — MOW
        </span>
        <span className="font-['Space_Grotesk',sans-serif] text-[11px] text-white/20 tracking-[1.44px] uppercase">
          Product Designer
        </span>
      </footer>
    </div>
  );
}