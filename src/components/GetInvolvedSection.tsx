import { ArrowRight, Puzzle, HandHeart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const ZEFFY_SPONSOR_URL =
  "https://www.zeffy.com/en-US/donation-form/the-bridge-2026-the-autism-meets-faith-regional-resource-summit";
const VOLUNTEER_HUB_URL =
  "mailto:holly@autismmeetsfaith.org?subject=Bridge%202026%20Volunteer%20Signup";

const WAYS = [
  {
    icon: Puzzle,
    title: "Attend Bridge 2026",
    body: "Join families, professionals, and advocates for a day of learning, encouragement, and community.",
    cta: { label: "Attend Bridge 2026", href: "#attend", external: false },
  },
  {
    icon: HandHeart,
    title: "Become a Volunteer",
    body: "Help create an unforgettable experience by serving families throughout the event.",
    cta: { label: "Become a Volunteer", href: VOLUNTEER_HUB_URL, external: true },
  },
  {
    icon: Star,
    title: "Become a Sponsor",
    body: "Partner with Bridge 2026 to expand your impact and demonstrate your commitment to autism families.",
    cta: { label: "View Sponsorship Opportunities", href: ZEFFY_SPONSOR_URL, external: true },
  },
];

export const GetInvolvedSection = () => (
  <section id="get-involved" className="py-24 md:py-32 bg-background">
    <div className="container-tight">
      <SectionHeading
        eyebrow="Join Us"
        title={<>Three Ways to <span className="text-gold">Get Involved</span></>}
        intro="Every role matters. Choose the way that fits you best — and help shape Bridge 2026."
      />
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {WAYS.map(({ icon: Icon, title, body, cta }, i) => (
          <Reveal key={title} delay={i * 80}>
            <div className="h-full flex flex-col rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                <Icon className="text-[hsl(var(--navy))]" size={26} />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-[hsl(var(--navy))]">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{body}</p>
              <div className="mt-8">
                <Button
                  asChild
                  variant="hero"
                  size="lg"
                  className="w-full shadow-gold"
                >
                  {cta.external ? (
                    <a href={cta.href} target="_blank" rel="noopener noreferrer">
                      {cta.label} <ArrowRight />
                    </a>
                  ) : (
                    <a href={cta.href}>
                      {cta.label} <ArrowRight />
                    </a>
                  )}
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
