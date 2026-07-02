import simmonsFletcher from "@/assets/simmons-fletcher.jpg";
import veracity from "@/assets/veracity.png";

/** Responsive grid of confirmed sponsor logos. */
const SPONSORS: { name: string; logo: string }[] = [
  { name: "Simmons Fletcher, P.C.", logo: simmonsFletcher },
  { name: "Veracity", logo: veracity },
];

export const SponsorLogoCarousel = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {SPONSORS.map((s) => (
          <div
            key={s.name}
            className="group h-32 md:h-36 rounded-2xl bg-white border border-border/70 shadow-sm flex items-center justify-center p-6 md:p-8 transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-elegant"
          >
            <img
              src={s.logo}
              alt={`${s.name} logo`}
              loading="lazy"
              className="max-h-full max-w-full w-auto h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
