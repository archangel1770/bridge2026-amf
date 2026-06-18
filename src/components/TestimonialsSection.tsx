import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const QUOTES = [
  {
    quote: "Testimonials from families, sponsors, and providers will rotate here after Bridge 2026.",
    name: "Future Attendee",
    role: "Bridge 2026",
  },
  {
    quote: "Sponsor reflections on impact and community partnership will appear in this space.",
    name: "Future Sponsor",
    role: "Founding Partner",
  },
  {
    quote: "Provider voices on what BRIDGE made possible for the families they serve.",
    name: "Future Provider",
    role: "Healthcare Partner",
  },
];

export const TestimonialsSection = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 5500);
    return () => clearInterval(id);
  }, []);
  const q = QUOTES[i];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[hsl(var(--navy))] text-white overflow-hidden">
      <div className="container-tight max-w-3xl text-center">
        <Quote className="text-gold mx-auto mb-6" size={40} />
        <div key={i} className="min-h-[10rem] animate-fade-up">
          <p className="font-display text-2xl md:text-3xl italic leading-snug text-balance text-white/95">
            "{q.quote}"
          </p>
          <p className="mt-6 text-gold font-semibold">{q.name}</p>
          <p className="text-xs uppercase tracking-[0.18em] text-white/60">{q.role}</p>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {QUOTES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "bg-gold w-8" : "bg-white/30 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
