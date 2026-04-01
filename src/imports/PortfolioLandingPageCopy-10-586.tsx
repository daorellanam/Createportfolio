import svgPaths from "./svg-1or4khgna2";
import imgImage8 from "figma:asset/cb7abe904d4ae4ceb10b3ec6a72c033d8bd9f7a7.png";

function Paragraph() {
  return (
    <div className="absolute content-stretch flex h-[15.994px] items-start left-[48px] top-[128px] w-[1184.006px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[12px] text-[rgba(255,255,255,0.3)] tracking-[1.92px] uppercase">UX UI Design · Product Design · 2025</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[17.997px] relative shrink-0 w-[11.989px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9886 17.9972">
        <g clipPath="url(#clip0_1_745)" id="Icon">
          <path d={svgPaths.p24284a80} fill="var(--fill-0, #0ACF83)" id="Vector" />
          <path d={svgPaths.p11534800} fill="var(--fill-0, #A259FF)" id="Vector_2" />
          <path d={svgPaths.p8be9100} fill="var(--fill-0, #F24E1E)" id="Vector_3" />
          <path d={svgPaths.p1c18980} fill="var(--fill-0, #FF7262)" id="Vector_4" />
          <path d={svgPaths.pbf84c00} fill="var(--fill-0, #1ABCFE)" id="Vector_5" />
        </g>
        <defs>
          <clipPath id="clip0_1_745">
            <rect fill="white" height="17.9972" width="11.9886" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute left-[677.18px] size-[38px] top-[54.01px]" data-name="Link">
      <div className="content-stretch flex items-center overflow-clip pl-[12.898px] pr-[0.909px] py-[0.909px] relative rounded-[inherit] size-full">
        <Icon />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[106.392px] left-[48px] top-[159.99px] w-[1184.006px]" data-name="Heading 1">
      <p className="absolute font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[106.4px] left-0 text-[112px] text-white top-[-0.18px] tracking-[-3.36px] whitespace-nowrap">Vivienda GTC</p>
      <Link />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[93.793px] left-[48px] top-[298.37px] w-[671.989px]" data-name="Paragraph">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[31.28px] left-0 text-[18.4px] text-[rgba(255,255,255,0.6)] top-[-0.36px] w-[619px]">Designing a real estate landing page that centralizes 280+ projects in Guatemala, offering a fast, personalized experience and 100% digital mortgage prequalification.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute border-[0.909px] border-[rgba(255,255,255,0.2)] border-solid h-[25.795px] left-0 top-0 w-[113.821px]" data-name="Text">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] left-[11.99px] text-[12px] text-[rgba(255,255,255,0.5)] top-[3.99px] tracking-[1.2px] uppercase whitespace-nowrap">UX UI Design</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute border-[0.909px] border-[rgba(255,255,255,0.2)] border-solid h-[25.795px] left-[121.82px] top-0 w-[54.602px]" data-name="Text">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] left-[11.99px] text-[12px] text-[rgba(255,255,255,0.5)] top-[3.99px] tracking-[1.2px] uppercase whitespace-nowrap">Web</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute border-[0.909px] border-[rgba(255,255,255,0.2)] border-solid h-[25.795px] left-[184.42px] top-0 w-[107.173px]" data-name="Text">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] left-[11.99px] text-[12px] text-[rgba(255,255,255,0.5)] top-[3.99px] tracking-[1.2px] uppercase whitespace-nowrap">Responsive</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute border-[0.909px] border-[rgba(255,255,255,0.2)] border-solid h-[25.795px] left-[299.59px] top-0 w-[139.29px]" data-name="Text">
      <p className="absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] left-[11.99px] text-[12px] text-[rgba(255,255,255,0.5)] top-[3.99px] tracking-[1.2px] uppercase whitespace-nowrap">Product Design</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[25.795px] left-[48px] top-[424.15px] w-[1184.006px]" data-name="Container">
      <Text />
      <Text1 />
      <Text2 />
      <Text3 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[513.935px] left-[91.82px] top-0 w-[1280px]" data-name="Section">
      <Paragraph />
      <Heading />
      <Paragraph1 />
      <Container />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-[#4dffd2] h-[3.991px] left-0 top-[600px] w-[1463.636px]" data-name="Container" />;
}

function ImageViviendaGtc() {
  return <div className="absolute h-[600px] left-0 top-0 w-[1463.636px]" data-name="Image (Vivienda GTC)" />;
}

function Container1() {
  return (
    <div className="absolute h-[600px] left-0 overflow-clip top-[513.93px] w-[1463.636px]" data-name="Container">
      <Container2 />
      <ImageViviendaGtc />
      <div className="absolute h-[1039px] left-0 top-[-24.93px] w-[1464px]" data-name="image 8">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage8} />
      </div>
    </div>
  );
}

function Container5() {
  return <div className="bg-[rgba(255,255,255,0.3)] h-[0.994px] shrink-0 w-[31.989px]" data-name="Container" />;
}

function Text4() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[72.457px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.92px] uppercase whitespace-nowrap">Overview</p>
      </div>
    </div>
  );
}

function SectionLabel() {
  return (
    <div className="content-stretch flex gap-[11.989px] h-[15.994px] items-center relative shrink-0 w-full" data-name="SectionLabel">
      <Container5 />
      <Text4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SectionLabel />
      <div className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16.8px] text-[rgba(255,255,255,0.7)] w-[764px] whitespace-pre-wrap">
        <p className="leading-[30.24px] mb-0">{`Vivienda GTC is a real estate landing page designed to centralize over 280 housing projects across Guatemala, offering users a fast, accessible, and personalized browsing experience. The platform connects qualified prospects directly with developers while enabling 100% digital mortgage prequalification through Banco G&T Continental.`}</p>
        <p className="leading-[30.24px] mb-0">&nbsp;</p>
        <p className="leading-[30.24px]">The solution aims to simplify property discovery and accelerate access to financing opportunities in a single digital experience.</p>
      </div>
    </div>
  );
}

function Container7() {
  return <div className="bg-[rgba(255,255,255,0.3)] h-[0.994px] shrink-0 w-[31.989px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[115.355px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.92px] uppercase whitespace-nowrap">The Challenge</p>
      </div>
    </div>
  );
}

function SectionLabel1() {
  return (
    <div className="content-stretch flex gap-[11.989px] h-[15.994px] items-center relative shrink-0 w-full" data-name="SectionLabel">
      <Container7 />
      <Text5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SectionLabel1 />
      <div className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16.8px] text-[rgba(255,255,255,0.7)] w-[716px] whitespace-pre-wrap">
        <p className="leading-[30.24px] mb-0">Real estate discovery was fragmented across multiple sources, making it difficult for users to explore available projects, compare options, and understand financing possibilities early in the journey. There was a need to create a centralized experience that could scale content, support different search behaviors, and reduce friction between exploration and financial decision‑making.</p>
        <p className="leading-[30.24px] mb-0">&nbsp;</p>
        <p className="leading-[30.24px]">Additionally, the platform needed to provide immediate feedback through mortgage simulations and prequalification, while ensuring clarity and accessibility across devices.</p>
      </div>
    </div>
  );
}

function Container9() {
  return <div className="bg-[rgba(255,255,255,0.3)] h-[0.994px] shrink-0 w-[31.989px]" data-name="Container" />;
}

function Text6() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[102.074px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-[rgba(255,255,255,0.4)] tracking-[1.92px] uppercase whitespace-nowrap">My Approach</p>
      </div>
    </div>
  );
}

function SectionLabel2() {
  return (
    <div className="content-stretch flex gap-[11.989px] h-[15.994px] items-center relative shrink-0 w-full" data-name="SectionLabel">
      <Container9 />
      <Text6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <SectionLabel2 />
      <div className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[16.8px] text-[rgba(255,255,255,0.7)] w-[748px] whitespace-pre-wrap">
        <p className="leading-[30.24px] mb-0">I designed a search‑driven landing experience structured around real user navigation patterns, including generic searches, filtered exploration, and empty‑state scenarios with cross‑selling recommendations. The experience was built with modular components such as property cards, project detail views, and a dynamic form that enables real‑time quota estimation and prequalification.</p>
        <p className="leading-[30.24px] mb-0">&nbsp;</p>
        <p className="leading-[30.24px]">The solution was optimized for desktop while maintaining consistent interactions and flows across devices, ensuring users could seamlessly move from discovery to contact and financing initiation.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[63.992px] items-start left-0 top-0 w-[767.997px]" data-name="Container">
      <Container4 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[15.994px] items-start left-0 top-0 w-[352.017px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[12px] text-[rgba(255,255,255,0.3)] tracking-[1.92px] uppercase">Outcome</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pl-[25.81px] top-[39.99px] w-[352.017px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#4dffd2] border-l-[1.818px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28.8px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] w-[322px]">Vivienda GTC centralized the real estate search and financing journey into a single digital platform, improving lead acquisition and accelerating mortgage prequalification. By combining fast property discovery with real‑time financial estimation, the solution increased user confidence, reduced friction in early decision‑making, and supported growth in the mortgage portfolio through qualified, high‑intent prospects.</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[352.017px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[12px] text-[rgba(255,255,255,0.3)] tracking-[1.44px] uppercase">Year</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[352.017px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[20px] left-0 text-[14px] text-white top-[-0.09px] whitespace-nowrap">2026</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[3.992px] h-[72.884px] items-start pb-[0.909px] pt-[15.994px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.909px] border-solid inset-0 pointer-events-none" />
      <Text7 />
      <Text8 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[352.017px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[12px] text-[rgba(255,255,255,0.3)] tracking-[1.44px] uppercase">Category</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[352.017px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[20px] left-0 text-[14px] text-white top-[-0.09px] whitespace-nowrap">UX UI Design · Product Design</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[3.992px] h-[72.884px] items-start pb-[0.909px] pt-[15.994px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.909px] border-solid inset-0 pointer-events-none" />
      <Text9 />
      <Text10 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[352.017px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[12px] text-[rgba(255,255,255,0.3)] tracking-[1.44px] uppercase">Role</p>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[352.017px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[20px] left-0 text-[14px] text-white top-[-0.09px] whitespace-nowrap">Lead Designer</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[3.992px] h-[72.884px] items-start pb-[0.909px] pt-[15.994px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.909px] border-solid inset-0 pointer-events-none" />
      <Text11 />
      <Text12 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[26px] top-[410px] w-[352.017px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.909px] inset-0 pointer-events-none" />
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute h-[556.989px] left-[831.99px] top-0 w-[352.017px]" data-name="Container">
      <Paragraph2 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[862px] left-[140px] top-[1178px] w-[1184px]" data-name="Section">
      <Container3 />
      <Container10 />
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[119.815px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.3)] top-[0.09px] whitespace-nowrap">← Back to home</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[15.994px] relative shrink-0 w-[72.003px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.3)] uppercase whitespace-nowrap">© 2026 — MOW</p>
      </div>
    </div>
  );
}

function CaseStudy() {
  return (
    <div className="absolute bg-[#0a0a0a] h-[2538px] left-0 top-0 w-[1464px]" data-name="CaseStudy">
      <Section />
      <Container1 />
      <Section1 />
      <div className="absolute content-stretch flex h-[84.886px] items-center justify-between left-[91.82px] pt-[0.909px] px-[47.997px] top-[2453.11px] w-[1280px]" data-name="Footer">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.909px] inset-0 pointer-events-none" />
        <Link1 />
        <Text13 />
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[23.991px] relative shrink-0 w-[49.446px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[24px] left-0 text-[16px] text-white top-[-0.18px] tracking-[-0.32px] whitespace-nowrap">MOW©</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[20px] relative shrink-0 w-[45.966px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[20px] left-[23.5px] text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[-0.09px] tracking-[1.68px] uppercase whitespace-nowrap">Work</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[53.551px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[20px] left-[27px] text-[14px] text-[rgba(255,255,255,0.6)] text-center top-[-0.09px] tracking-[1.68px] uppercase whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[33.807px] relative shrink-0 w-[104.375px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[20px] left-[51.9px] text-[14px] text-center text-white top-[6.81px] tracking-[1.4px] uppercase whitespace-nowrap">Contact</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[33.807px] relative shrink-0 w-[267.869px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[31.989px] items-center relative size-full">
        <Button />
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute content-stretch flex h-[63.991px] items-center justify-between left-[91.82px] px-[47.997px] top-0 w-[1280px]" data-name="Navbar">
      <Link2 />
      <Container16 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[15.994px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9943 15.9943">
        <g id="Icon">
          <path d={svgPaths.p265fbb80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33286" />
          <path d="M12.6622 7.99716H3.33215" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5" strokeWidth="1.33286" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[42.33px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[20px] left-[21.5px] text-[14px] text-[rgba(255,255,255,0.5)] text-center top-[-0.09px] tracking-[1.68px] uppercase whitespace-nowrap">Back</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[66.321px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.997px] items-center relative size-full">
        <Icon1 />
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[60.014px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Space_Mono:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.3)] top-[0.09px] whitespace-nowrap">03 / 04</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[63.991px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[47.997px] relative size-full">
          <Button3 />
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function CaseStudy1() {
  return (
    <div className="absolute bg-[rgba(10,10,10,0.95)] content-stretch flex flex-col h-[64.901px] items-start left-0 pb-[0.909px] px-[91.818px] top-0 w-[1463.636px]" data-name="CaseStudy">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b-[0.909px] border-solid inset-0 pointer-events-none" />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[95.98px] relative shrink-0 w-[572.358px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7.997px] items-start relative size-full">
        <p className="flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px relative text-[12px] text-[rgba(255,255,255,0.3)] tracking-[1.92px] uppercase w-[572.358px]">Next Project</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[72px] relative shrink-0 text-[48px] text-white tracking-[-0.96px] whitespace-nowrap">Tipo de Cambio</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3e47bd00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3610fb80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#c4b5fd] relative rounded-[30504000px] shrink-0 size-[47.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[13.991px] pr-[14.006px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[223.963px] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[47.997px] relative size-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

export default function PortfolioLandingPageCopy() {
  return (
    <div className="bg-white relative size-full" data-name="Portfolio landing page (Copy)">
      <CaseStudy />
      <Navbar />
      <CaseStudy1 />
      <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col h-[224.872px] items-start left-0 pt-[0.909px] px-[91.818px] top-[2228.24px] w-[1463.636px]" data-name="Section">
        <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[0.909px] inset-0 pointer-events-none" />
        <Button4 />
      </div>
    </div>
  );
}