import { Sparkles } from "lucide-react";

/** Auto-scrolling marquee of sponsor logos. Pause on hover.
 *  To add real sponsors later, push {name, logo} entries into the SPONSORS array. */
const SPONSORS: { name: string; logo?: string }[] = [
  { name: "Featured Sponsor Slot" },
  { name: "Founding Partner" },
  { name: "Legacy Pillar" },
  { name: "Major Sponsor" },
  { name: "Community Sponsor" },
  { name: "Your Company Here" },
];

export const SponsorLogoCarousel = () => {
  const items = [...SPONSORS, ...SPONSORS];
  return (
    <div className="group relative w-full overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
      <div
        className="flex gap-4 md:gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: "32s" }}
      >
        {items.map((s, i) => (
          <div
            key={i}
            className="shrink-0 h-20 md:h-24 w-48 md:w-60 rounded-2xl border border-dashed border-[hsl(var(--gold))]/40 bg-card flex items-center justify-center gap-2 px-4 text-center"
          >
            {s.logo ? (
              <img src={s.logo} alt={s.name} className="max-h-12 w-auto object-contain" loading="lazy" />
            ) : (
              <>
                <Sparkles className="text-gold" size={16} />
                <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[hsl(var(--navy))]/70">
                  {s.name}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
