import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import amfLogo from "@/assets/amf-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#speakers", label: "Speakers" },
  { href: "#schedule", label: "Schedule" },
  { href: "#venue", label: "Venue" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const ZEFFY =
  "https://www.zeffy.com/en-US/donation-form/the-bridge-2026-the-autism-meets-faith-regional-resource-summit";

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[hsl(var(--navy-deep))]/95 backdrop-blur-md border-b border-white/10 shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div
        className={`container-tight max-w-7xl flex items-center justify-between transition-[height] duration-300 ${
          scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 group" aria-label="Bridge 2026 home">
          <img
            src={amfLogo}
            alt="Autism Meets Faith"
            width={40}
            height={40}
            className="h-8 w-8 md:h-9 md:w-9 rounded-full bg-white p-0.5 shadow-md ring-1 ring-white/20"
          />
          <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">
            BRIDGE<span className="text-gold">.</span>
            <span className="text-gold text-sm font-medium ml-1 tracking-[0.2em]">2026</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-white/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="hero" size="sm">
            <a href={ZEFFY} target="_blank" rel="noopener noreferrer">
              Become a Sponsor
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[hsl(var(--navy-deep))] border-t border-white/10">
          <nav aria-label="Mobile" className="container-tight py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-base text-white/90 hover:text-gold border-b border-white/5"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="hero" className="mt-4">
              <a
                href={ZEFFY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                Become a Sponsor
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
