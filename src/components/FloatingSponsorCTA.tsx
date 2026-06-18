import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const ZEFFY =
  "https://www.zeffy.com/en-US/donation-form/the-bridge-2026-the-autism-meets-faith-regional-resource-summit";

export const FloatingSponsorCTA = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 480);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <a
      href={ZEFFY}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Become a Sponsor of Bridge 2026"
      className={`lg:hidden fixed bottom-4 inset-x-4 z-40 flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-gold text-[hsl(var(--navy))] font-semibold shadow-gold transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      Become a Sponsor <ArrowRight size={16} />
    </a>
  );
};
