import {
  ArrowRight,
  ClipboardList,
  HeartHandshake,
  Baby,
  Wrench,
  Car,
  HandHeart,
  Camera,
  Handshake,
  Sparkles,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import volunteerGroup from "@/assets/volunteer-group.png.asset.json";
import volunteerHighfive from "@/assets/volunteer-highfive.png.asset.json";

const VOLUNTEER_HUB_URL = "https://bridge2026-volunteer-hub.lovable.app";

const OPPORTUNITIES = [
  { icon: ClipboardList, title: "Registration & Welcome", body: "Greet guests and check-in attendees with warmth." },
  { icon: HeartHandshake, title: "Family Hospitality", body: "Guide and comfort families throughout the day." },
  { icon: Baby, title: "Children's Activities", body: "Lead sensory-friendly play and creative fun." },
  { icon: Wrench, title: "Event Setup & Breakdown", body: "Help build and reset the venue with the team." },
  { icon: Car, title: "Parking & Guest Services", body: "Direct arrivals and support smooth entry." },
  { icon: HandHeart, title: "Prayer Team", body: "Offer prayer and encouragement to families." },
  { icon: Camera, title: "Photography & Media", body: "Capture moments that tell our story." },
  { icon: Handshake, title: "Sponsor & Vendor Support", body: "Assist partners and exhibitors at their booths." },
];

const WHY = [
  { icon: Sparkles, title: "Make a Difference", body: "Support autism families in meaningful ways." },
  { icon: Users, title: "Build Community", body: "Serve alongside compassionate people who care." },
  { icon: Star, title: "Leave a Lasting Impact", body: "Help create memories that families will never forget." },
];

export const VolunteerSection = () => (
  <>
    <section id="volunteer" className="py-24 md:py-32 bg-gradient-soft">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Photo */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-20 blur-2xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-elegant border border-border/60 bg-card">
                <img
                  src={volunteerGroup.url}
                  alt="Bridge 2026 volunteers in Autism Meets Faith shirts smiling at the welcome entrance."
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Copy + Opportunities */}
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Volunteer</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-[hsl(var(--navy))] leading-[1.1] text-balance">
                Serve Families. Create Hope. <span className="text-gold">Make an Impact.</span>
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                Every smile, every warm welcome, and every helping hand makes a lasting difference.
              </p>
              <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                Bridge 2026 is powered by compassionate volunteers who are committed to creating an unforgettable
                experience for autism families. Whether you're welcoming guests, assisting with children's activities,
                supporting event logistics, or encouraging families throughout the day, your service helps build a
                community where everyone belongs.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Opportunities grid */}
        <div className="mt-16 md:mt-20">
          <Reveal>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[hsl(var(--navy))] text-center mb-10">
              Volunteer <span className="text-gold">Opportunities</span>
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {OPPORTUNITIES.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="group h-full rounded-2xl bg-card border border-border/60 p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                    <Icon className="text-[hsl(var(--navy))]" size={22} />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-[hsl(var(--navy))]">{title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Why Volunteer */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[hsl(var(--navy))] text-center mb-10">
              Why <span className="text-gold">Volunteer?</span>
            </h3>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {WHY.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="h-full rounded-3xl bg-[hsl(var(--navy))] text-white p-8 shadow-elegant hover:-translate-y-1 transition-all duration-500 border border-white/10">
                  <Icon className="text-gold mb-5" size={28} />
                  <h4 className="font-display text-xl font-semibold">{title}</h4>
                  <p className="mt-3 text-white/75 leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Emotional Impact Banner */}
    <section className="relative overflow-hidden">
      <div className="relative min-h-[520px] md:min-h-[620px] flex items-center justify-center">
        <img
          src={volunteerHighfive.url}
          alt="Bridge 2026 volunteer high-fiving a child at the welcome table."
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy-deep))]/70 via-[hsl(var(--navy-deep))]/60 to-[hsl(var(--navy-deep))]/85" />
        <div className="relative z-10 container-tight max-w-3xl text-center text-white py-24 md:py-32">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-semibold leading-[1.1] text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
              Together, We Build <span className="text-gold italic">Bridges of Hope.</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto">
              Every volunteer helps create a welcoming environment where children and families can connect, celebrate,
              and thrive.
            </p>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="hero" size="xl" className="shadow-gold">
                <a href={VOLUNTEER_HUB_URL} target="_blank" rel="noopener noreferrer">
                  Become a Bridge 2026 Volunteer <ArrowRight />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  </>
);
