import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ZEFFY_TICKETS_URL } from "@/lib/links";

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
      href={ZEFFY_TICKETS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Get priority tickets for Bridge 2026"
      className={`lg:hidden fixed bottom-4 inset-x-4 z-40 flex items-center justify-center gap-2 h-12 rounded-full bg-gradient-gold text-[hsl(var(--navy))] font-semibold shadow-gold transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      Get Priority Tickets <ArrowRight size={16} />
    </a>
  );
};
