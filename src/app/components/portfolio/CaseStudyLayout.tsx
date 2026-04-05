import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import svgPaths from "../../../imports/svg-jr7lu2qlcz";

interface CaseStudyLayoutProps {
  index: number;
  total: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
  mockupImage?: string;
  mockupVideo?: string;
  mockupAlt?: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  year: string;
  categoryLabel: string;
  role: string;
  figmaUrl?: string;
  nextProject: {
    title: string;
    slug: string;
  };
  accentColor: string;
}

function BackArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 15.9943 15.9943" fill="none">
      <path
        d={svgPaths.p265fbb80}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ArrowUpRightIcon({ color = "#0a0a0a" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p3e47bd00} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
      <path d={svgPaths.p3610fb80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
  );
}

/** Section label: "—— LABEL" */
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-6 h-px bg-white/30" />
      <span className="text-[10px] text-white/35 tracking-[1.68px] uppercase">
        {text}
      </span>
    </div>
  );
}

/** Animated Next Project section */
function NextProjectSection({
  nextProject,
  accentColor,
}: {
  nextProject: { title: string; slug: string };
  accentColor: string;
}) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="border-t border-white/10 border-b border-white/10">
      <motion.button
        onClick={() => {
          window.scrollTo({ top: 0 });
          navigate(nextProject.slug);
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="w-full text-left overflow-hidden"
        style={{ backgroundColor: hovered ? "#202020" : "transparent" }}
        initial={false}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-10 md:py-12">
          {/* Left: Label + Title */}
          <div className="flex flex-col gap-2">
            <p className="text-[10px] text-white/30 tracking-[1.92px] uppercase">
              Next Project
            </p>
            <motion.h2
              className="font-bold text-[clamp(22px,3.5vw,40px)] text-white tracking-[-0.02em] leading-none"
              animate={{ x: hovered ? 6 : 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {nextProject.title}
            </motion.h2>
          </div>

          {/* Right: Arrow circle */}
          <motion.div
            className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: accentColor }}
            animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ArrowUpRightIcon color="#0a0a0a" />
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
}

export function CaseStudyLayout({
  index,
  total,
  category,
  title,
  description,
  tags,
  mockupImage,
  mockupVideo,
  mockupAlt,
  overview,
  challenge,
  approach,
  outcome,
  year,
  categoryLabel,
  role,
  nextProject,
  accentColor,
}: CaseStudyLayoutProps) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-['Space_Grotesk',sans-serif]">

      {/* ─── Top bar ─── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-12 bg-[rgba(10,10,10,0.95)] backdrop-blur-sm border-b border-white/10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-[12px] tracking-[1.4px] uppercase"
        >
          <BackArrowIcon />
          Back
        </button>
        <span className="font-['Space_Mono',monospace] text-[12px] text-white/30">
          {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* ─── Header ─── */}
      <header className="pt-20 pb-10 px-6 md:px-10 lg:px-16 border-b border-white/10">
        <p className="text-[11px] text-white/30 tracking-[1.92px] uppercase mb-4">
          {category}
        </p>
        <h1 className="font-bold text-[clamp(36px,5.5vw,72px)] text-white tracking-[-0.03em] leading-[1] mb-4">
          {title}
        </h1>
        <p className="text-[15px] text-white/45 leading-[1.7] max-w-xl mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/12 px-3 py-1 text-[11px] text-white/50 tracking-[1px] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* ─── Mockup / Hero image ─── */}
      {mockupVideo ? (
        <div className="relative w-full overflow-hidden">
          <video
            src={mockupVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{ backgroundColor: accentColor }}
          />
        </div>
      ) : (
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "clamp(260px, 42vw, 580px)" }}
        >
          <img
            src={mockupImage}
            alt={mockupAlt || title}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{ backgroundColor: accentColor }}
          />
        </div>
      )}

      {/* ─── Body: two-column layout exactly as in the Figma frame ─── */}
      <div className="px-6 md:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-x-16 gap-y-12">

          {/* ── LEFT: Overview · Challenge · Approach ── */}
          <div className="space-y-10">
            {[
              { label: "Overview", content: overview },
              { label: "The Challenge", content: challenge },
              { label: "My Approach", content: approach },
            ].map(({ label, content }) => (
              <div key={label}>
                <SectionLabel text={label} />
                <p className="text-[14px] text-white/55 leading-[1.82] whitespace-pre-line">
                  {content}
                </p>
              </div>
            ))}
          </div>

          {/* ── RIGHT: Outcome + Metadata ── */}
          <div className="flex flex-col">
            {/* Outcome */}
            <div className="mb-8">
              <SectionLabel text="Outcome" />
              {/* Outcome block with left accent border, same style as Figma frame */}
              <div
                className="pl-4"
                style={{ borderLeft: `1.8px solid ${accentColor}` }}
              >
                <p className="text-[14px] text-white/55 leading-[1.82]">
                  {outcome}
                </p>
              </div>
            </div>

            {/* Metadata: Year · Category · Role */}
            <div className="border-t border-white/10">
              {[
                { label: "Year", value: year },
                { label: "Category", value: categoryLabel },
                { label: "Role", value: role },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 py-4 border-b border-white/10"
                >
                  <span className="text-[10px] text-white/30 tracking-[1.44px] uppercase">
                    {item.label}
                  </span>
                  <span className="font-medium text-[14px] text-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ─── Next Project ─── */}
      <NextProjectSection nextProject={nextProject} accentColor={accentColor} />

      {/* ─── Footer bar ─── */}
      <div className="border-t border-white/10 px-6 md:px-10 lg:px-16 py-5 flex items-center justify-between">
        <button
          onClick={() => navigate("/")}
          className="font-['Space_Mono',monospace] text-[13px] text-white/30 hover:text-white/55 transition-colors"
        >
          ← Back to home
        </button>
        <span className="font-['Space_Mono',monospace] text-[13px] text-white/25">
          © 2026 — MOW
        </span>
      </div>
    </div>
  );
}