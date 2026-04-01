import { Link, useNavigate } from "react-router";

interface NavbarProps {
  onWorkClick?: () => void;
  onAboutClick?: () => void;
  onContactClick?: () => void;
}

export function Navbar({ onWorkClick, onAboutClick, onContactClick }: NavbarProps) {
  const navigate = useNavigate();

  const handleWork = () => {
    if (onWorkClick) {
      onWorkClick();
    } else {
      navigate("/", { state: { scrollTo: "work" } });
    }
  };

  const handleAbout = () => {
    if (onAboutClick) {
      onAboutClick();
    } else {
      navigate("/", { state: { scrollTo: "about" } });
    }
  };

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      navigate("/", { state: { scrollTo: "contact" } });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 h-16 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/5">
      <Link
        to="/"
        className="font-['Space_Grotesk',sans-serif] font-bold text-white text-base tracking-[-0.32px] hover:opacity-80 transition-opacity"
      >
        MOW©
      </Link>
      <div className="flex items-center gap-8">
        <button
          onClick={handleWork}
          className="font-['Space_Grotesk',sans-serif] font-medium text-sm text-white/60 tracking-[1.68px] uppercase hover:text-white transition-colors"
        >
          Work
        </button>
        <button
          onClick={handleAbout}
          className="font-['Space_Grotesk',sans-serif] font-medium text-sm text-white/60 tracking-[1.68px] uppercase hover:text-white transition-colors"
        >
          About
        </button>
        <button
          onClick={handleContact}
          className="font-['Space_Grotesk',sans-serif] font-medium text-sm text-white border border-white/30 px-5 py-2 tracking-[1.4px] uppercase hover:bg-white hover:text-black transition-colors"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
