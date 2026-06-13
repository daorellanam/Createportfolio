/* Diego Orellana — Portfolio
   Micro-interactions: split-flap, ticker, ledger previews,
   case overlays, custom cursor, magnetic buttons, reveals. */

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* ============ Data (from the live case studies) ============ */
const PROJECTS = [
  {
    id: "portal-archivo",
    ref: "AR-2026-01",
    title: "Portal Archivo",
    year: "2026",
    role: "Lead Designer",
    scope: "UX UI · Product Design",
    tags: ["UX Research", "Web", "Responsive", "Product Design"],
    desc: "A digital interface that automates manual archival processes into integrated workflows — end-to-end management, traceability, and compliance for physical and digital documents.",
    video: "assets/portal-archivo.mp4",
    image: "assets/portal-archivo.png",
    sections: {
      Overview: "Portal Archivo is a digital document management platform designed to transform manual archival processes into a centralized, traceable, and fully digital workflow. The product enables end-to-end management of document storage, loans, returns, and access control for both physical and digital files, ensuring operational efficiency and regulatory compliance. The platform guides users through each step of the document lifecycle, reducing friction while maintaining strict control over sensitive information.",
      Challenge: "Document management processes were fragmented and heavily dependent on manual steps, creating inefficiencies, limited traceability, and high operational risk. The lack of a unified system made it difficult to manage document storage, track physical movements, and control access across different user roles. Additionally, users with low system experience needed an intuitive solution that could guide them through complex workflows without increasing training overhead.",
      Approach: "I designed a role-based experience that guides users through each operational flow, including document storage, digital and physical loans, extensions, and returns. Each process was broken into clear, guided steps with intuitive forms, status visibility, and structured validations. The solution prioritized clarity, traceability, and flexibility — allowing administrators to control access periods, approval states, and operational rules, while maintaining a simple and accessible experience for requesters.",
      Outcome: "Portal Archivo unified document storage, loan, and return processes into a single role-based platform, significantly improving traceability and operational control across both digital and physical documents. The solution reduced manual handling, minimized errors, and provided clear visibility into document status throughout the entire lifecycle, while remaining flexible to adapt to future policy and access control changes."
    }
  },
  {
    id: "marketplace-vehiculos",
    ref: "MV-2025-02",
    title: "Marketplace de Vehículos",
    year: "2025",
    role: "Lead Designer",
    scope: "UX UI · Product Design",
    tags: ["UX UI Design", "Web", "Responsive", "Product Design"],
    desc: "An interactive vehicle marketplace within gtc.com.gt — from browsing the landing page to selecting a vehicle, requesting a quote, and completing an immediate prequalification.",
    video: "assets/marketplace-vehiculos.mp4",
    image: null,
    sections: {
      Overview: "The Vehicle Marketplace is a visual and interactive experience designed within gtc.com.gt to allow users to fully explore the vehicle purchasing journey — from initial browsing to quotation and immediate prequalification. The platform supports both exploratory users with no purchase intent and users ready to select a vehicle and start a financial process. The solution prioritizes clarity, personalization, and guided decision-making across the entire experience.",
      Challenge: "Users interested in purchasing a vehicle faced fragmented journeys, limited financial visibility, and unclear paths between exploration and formal acquisition. There was a need to validate whether users could confidently move from browsing to prequalification without friction, confusion, or easy abandonment. Additionally, the marketplace needed to support multiple user intents — casual exploration, comparison, financial simulation, and formal acquisition — within a single coherent experience.",
      Approach: "I designed a flexible, scenario-based experience that adapts to different levels of user intent. The platform guides users through vehicle discovery using relevant filters, detailed listings, and comparison tools, while enabling quota simulations and immediate prequalification at multiple points in the journey. Complementary flows were also designed to support the ecosystem, including onboarding forms for partner dealerships and appointment scheduling with advisors, ensuring a connected and scalable marketplace experience.",
      Outcome: "The Vehicle Marketplace unified vehicle discovery, financial simulation, and immediate prequalification into a single digital flow, improving lead qualification and accelerating user decision-making. By providing early visibility into pricing and financing options, the platform reduced friction in the acquisition process and enabled more informed conversations between users, advisors, and partner dealerships."
    }
  },
  {
    id: "vivienda-gtc",
    ref: "VG-2025-03",
    title: "Vivienda GTC",
    year: "2025",
    role: "Lead Designer",
    scope: "UX UI · Product Design",
    tags: ["UX UI Design", "Web", "Responsive", "Product Design"],
    desc: "A real estate landing that centralizes 280+ projects in Guatemala with a fast, personalized experience and 100% digital mortgage prequalification.",
    video: "assets/vivienda-gtc.mp4",
    image: "assets/vivienda-gtc.png",
    sections: {
      Overview: "Vivienda GTC is a real estate landing page designed to centralize over 280 housing projects across Guatemala, offering users a fast, accessible, and personalized browsing experience. The platform connects qualified prospects directly with developers while enabling 100% digital mortgage prequalification through Banco G&T Continental. The solution aims to simplify property discovery and accelerate access to financing opportunities in a single digital experience.",
      Challenge: "Real estate discovery was fragmented across multiple sources, making it difficult for users to explore available projects, compare options, and understand financing possibilities early in the journey. There was a need to create a centralized experience that could scale content, support different search behaviors, and reduce friction between exploration and financial decision-making. Additionally, the platform needed to provide immediate feedback through mortgage simulations and prequalification, while ensuring clarity and accessibility across devices.",
      Approach: "I designed a search-driven landing experience structured around real user navigation patterns, including generic searches, filtered exploration, and empty-state scenarios with cross-selling recommendations. The experience was built with modular components such as property cards, project detail views, and a dynamic form that enables real-time quota estimation and prequalification. The solution was optimized for desktop while maintaining consistent interactions and flows across devices, ensuring users could seamlessly move from discovery to contact and financing initiation.",
      Outcome: "Vivienda GTC centralized the real estate search and financing journey into a single digital platform, improving lead acquisition and accelerating mortgage prequalification. By combining fast property discovery with real-time financial estimation, the solution increased user confidence, reduced friction in early decision-making, and supported growth in the mortgage portfolio through qualified, high-intent prospects."
    }
  },
  {
    id: "tipo-de-cambio",
    ref: "TC-2025-04",
    title: "Tipo de Cambio",
    year: "2025",
    role: "Lead Designer",
    scope: "UX UI · Product Design",
    tags: ["UX UI Design", "Web", "Responsive", "Product Design"],
    desc: "A dedicated section displaying the real-time USD → GTQ exchange rate, with clear and accessible currency conversion information.",
    video: "assets/tipo-de-cambio.mp4",
    image: "assets/tipo-de-cambio.png",
    sections: {
      Overview: "The Exchange Rate project focused on designing a dedicated section that allows users to view the real-time exchange rate from US dollars (USD) to Guatemalan quetzals (GTQ). The solution provides clear, reliable, and easily accessible currency information within the platform. The feature supports users who require quick financial reference as part of broader decision-making and transactional flows.",
      Challenge: "Users needed a simple and trustworthy way to check the current exchange rate without leaving the platform or navigating complex financial tools. Existing solutions were either hidden, unintuitive, or overloaded with unnecessary information. The main challenge was to surface critical exchange rate data clearly, ensuring accuracy, readability, and contextual relevance without adding friction to the user experience.",
      Approach: "I designed a focused, low-friction interface that prioritizes clarity and visibility of the exchange rate. The section was structured to present essential information at a glance, using clear hierarchy, concise labeling, and consistent formatting aligned with the overall product design system. The solution was built to integrate seamlessly into the platform, supporting future scalability and potential expansion into additional currencies or financial tools.",
      Outcome: "The Exchange Rate section provided users with fast and reliable access to USD-GTQ conversion data, reducing dependency on external tools and improving confidence in financial decision-making. The solution strengthened the platform's value as a centralized financial reference while maintaining a lightweight, easy-to-use experience."
    }
  }
];

/* ============ Live clock (GMT-6, no DST in Guatemala) ============ */
function tickClock() {
  const now = new Date();
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Guatemala",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
  });
  const t = fmt.format(now);
  const el = document.getElementById("clock");
  const elF = document.getElementById("clock-footer");
  if (el) el.textContent = t;
  if (elF) elF.textContent = t.slice(0, 5);
}
tickClock();
setInterval(tickClock, 1000);

/* ============ Split-flap role board ============ */
const ROLES = ["Product Designer", "UX·UI Designer", "Web Designer"];
(function flapLoop() {
  const viewport = document.querySelector(".flap__viewport");
  if (!viewport || reducedMotion) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % ROLES.length;
    const current = viewport.querySelector(".flap__item");
    const next = document.createElement("span");
    next.className = "flap__item flap-in";
    next.textContent = ROLES[i];
    current.classList.remove("is-current", "flap-in");
    current.classList.add("flap-out");
    current.addEventListener("animationend", () => current.remove(), { once: true });
    viewport.appendChild(next);
  }, 3200);
})();

/* ============ Ticker: duplicate group for seamless loop ============ */
(function ticker() {
  const track = document.querySelector(".ticker__track");
  if (!track) return;
  track.appendChild(track.firstElementChild.cloneNode(true));
})();

/* ============ Build ledger rows ============ */
const ledger = document.getElementById("ledger");
PROJECTS.forEach((p, idx) => {
  const li = document.createElement("li");
  li.className = "ledger__row reveal";
  li.style.setProperty("--d", `${idx * 0.06}s`);
  li.innerHTML = `
    <button class="ledger__btn" data-project="${idx}" data-cursor-view aria-haspopup="dialog">
      <span class="ledger__ref"><strong>${p.ref}</strong><em>${p.year}</em></span>
      <span class="ledger__title">${p.title}</span>
      <span class="ledger__desc">${p.desc}</span>
      <svg class="ledger__arrow" width="26" height="26" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>`;
  ledger.appendChild(li);
});

/* ============ Floating media preview (desktop) ============ */
const preview = document.getElementById("preview");
const previewMedia = document.getElementById("preview-media");
let pv = { x: innerWidth / 2, y: innerHeight / 2, tx: 0, ty: 0, active: false, raf: null };

function previewFrame() {
  pv.x += (pv.tx - pv.x) * 0.12;
  pv.y += (pv.ty - pv.y) * 0.12;
  const vel = (pv.tx - pv.x) * 0.018;
  const rot = Math.max(-6, Math.min(6, vel));
  preview.style.transform =
    `translate(${pv.x}px, ${pv.y}px) translate(-50%, -50%) rotate(${rot}deg)` +
    (pv.active ? " scale(1)" : " scale(0.86)");
  pv.raf = requestAnimationFrame(previewFrame);
}

if (finePointer && !reducedMotion) {
  document.addEventListener("mousemove", (e) => { pv.tx = e.clientX; pv.ty = e.clientY; });
  pv.raf = requestAnimationFrame(previewFrame);

  ledger.querySelectorAll(".ledger__btn").forEach((btn) => {
    const p = PROJECTS[+btn.dataset.project];
    btn.addEventListener("mouseenter", () => {
      previewMedia.innerHTML = "";
      const v = document.createElement("video");
      v.src = p.video;
      v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
      if (p.image) v.poster = p.image;
      previewMedia.appendChild(v);
      v.play().catch(() => {});
      pv.active = true;
      preview.classList.add("is-active");
    });
    btn.addEventListener("mouseleave", () => {
      pv.active = false;
      preview.classList.remove("is-active");
      setTimeout(() => { if (!pv.active) previewMedia.innerHTML = ""; }, 380);
    });
  });
}

/* ============ Case overlay ============ */
const caseEl = document.getElementById("case");
const caseScroll = caseEl.querySelector(".case__scroll");
let activeCase = -1;
let lastFocus = null;

function openCase(idx, { focus = true } = {}) {
  const p = PROJECTS[idx];
  activeCase = idx;
  document.getElementById("case-ref").textContent =
    `${String(idx + 1).padStart(2, "0")} / ${String(PROJECTS.length).padStart(2, "0")} — ${p.ref}`;
  document.getElementById("case-title").textContent = p.title;
  document.getElementById("case-year").textContent = p.year;
  document.getElementById("case-role").textContent = p.role;
  document.getElementById("case-scope").textContent = p.scope;
  document.getElementById("case-tags").innerHTML =
    p.tags.map((t) => `<li>${t}</li>`).join("");

  const media = document.getElementById("case-media");
  media.innerHTML = "";
  const v = document.createElement("video");
  v.src = p.video;
  v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
  v.setAttribute("aria-label", `${p.title} interface walkthrough`);
  if (p.image) v.poster = p.image;
  media.appendChild(v);
  v.play().catch(() => {});

  document.getElementById("case-body").innerHTML = Object.entries(p.sections)
    .map(([h, body]) => `<section class="case__section"><h3>${h}</h3><p>${body}</p></section>`)
    .join("");

  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  document.getElementById("case-next-title").textContent = next.title;

  caseEl.hidden = false;
  requestAnimationFrame(() => requestAnimationFrame(() => caseEl.classList.add("is-open")));
  document.body.classList.add("case-open");
  caseScroll.scrollTop = 0;
  if (focus) {
    lastFocus = document.activeElement;
    document.getElementById("case-close").focus({ preventScroll: true });
  }
  pv.active = false;
  preview.classList.remove("is-active");
}

function closeCase() {
  caseEl.classList.remove("is-open");
  document.body.classList.remove("case-open");
  const media = document.getElementById("case-media");
  setTimeout(() => {
    caseEl.hidden = true;
    media.innerHTML = "";
  }, 650);
  if (lastFocus) lastFocus.focus({ preventScroll: true });
  activeCase = -1;
}

ledger.addEventListener("click", (e) => {
  const btn = e.target.closest(".ledger__btn");
  if (btn) openCase(+btn.dataset.project);
});
document.getElementById("case-close").addEventListener("click", closeCase);
document.getElementById("case-next").addEventListener("click", () => {
  const nextIdx = (activeCase + 1) % PROJECTS.length;
  caseEl.classList.remove("is-open");
  setTimeout(() => { openCase(nextIdx, { focus: false }); }, 620);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && activeCase !== -1) closeCase();
});

/* ============ Scroll reveals ============ */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add("in-view");
      en.target.querySelectorAll(".reveal-scroll-line").forEach((s) => s.classList.add("in-view"));
      io.unobserve(en.target);
    }
  }),
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
/* Masked lines sit outside their clipping parent until revealed, so they
   never intersect — observe the nearest block ancestor instead. */
document.querySelectorAll(".reveal-scroll-line").forEach((el) => {
  io.observe(el.closest("h1, h2, h3, section, div") || el.parentElement);
});

/* ============ Custom cursor ============ */
const cursor = document.querySelector(".cursor");
if (finePointer && !reducedMotion) {
  document.body.classList.add("has-cursor");
  let cx = -100, cy = -100, ctx = -100, cty = -100;
  document.addEventListener("mousemove", (e) => { ctx = e.clientX; cty = e.clientY; });
  (function cursorFrame() {
    cx += (ctx - cx) * 0.35;
    cy += (cty - cy) * 0.35;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    requestAnimationFrame(cursorFrame);
  })();
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("[data-cursor-view]")) {
      cursor.classList.add("is-view");
      cursor.classList.remove("is-hover");
    } else if (e.target.closest("a, button, [data-cursor]")) {
      cursor.classList.add("is-hover");
      cursor.classList.remove("is-view");
    } else {
      cursor.classList.remove("is-hover", "is-view");
    }
  });
}

/* ============ Magnetic buttons ============ */
if (finePointer && !reducedMotion) {
  document.querySelectorAll("[data-magnetic]").forEach((el) => {
    const strength = 0.32;
    el.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });
}
