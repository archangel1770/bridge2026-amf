import { useEffect, useRef } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  Brain,
  Megaphone,
  Building2,
  Briefcase,
  HandHeart,
  Sparkles,
  Lightbulb,
  TrendingUp,
  HelpCircle,
  Puzzle,
  CircleAlert,
  Link2,
  ArrowRight,
  Download,
  Mail,
  Phone,
  Globe,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiteHeader } from "@/components/SiteHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { BridgeDivider } from "@/components/BridgeDivider";
import { Reveal } from "@/components/Reveal";
import { Countdown } from "@/components/Countdown";
import { LoadingScreen } from "@/components/LoadingScreen";
import { FloatingSponsorCTA } from "@/components/FloatingSponsorCTA";
import { WaveSeparator } from "@/components/WaveSeparator";
import { SponsorLogoCarousel } from "@/components/SponsorLogoCarousel";
import { FAQSection } from "@/components/FAQSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { ImpactSection } from "@/components/ImpactSection";
import { MediaSection } from "@/components/MediaSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ShareButtons } from "@/components/ShareButtons";
import heroBridge from "@/assets/hero-bridge.jpg";
import prospectus from "@/assets/prospectus-mockup.png";
import bridgeLogo from "@/assets/bridge-2026-logo.png";
import familyImpact from "@/assets/family-impact.jpg";
import amfLogo from "@/assets/amf-logo.png";

// === Live links ===
const PROSPECTUS_URL =
  "https://drive.google.com/file/d/1g87HTBpGw_cU0qJ_Yq6vhyRj2DLbHYOm/view?usp=sharing";
const ZEFFY_SPONSOR_URL =
  "https://www.zeffy.com/en-US/donation-form/the-bridge-2026-the-autism-meets-faith-regional-resource-summit";
const PRIORITY_ACCESS_URL =
  "https://www.zeffy.com/en-US/newsletter-form/priority-access-2026-autism-meets-faith-summit";
const TITLE_UNDERWRITER_MAILTO =
  "mailto:holly@autismmeetsfaith.org?subject=Bridge%202026%20Title%20Underwriter%20Inquiry";
const HOLLY_EMAIL_MAILTO = "mailto:holly@autismmeetsfaith.org";
const ZEFFY_QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&margin=16&data=${encodeURIComponent(
  ZEFFY_SPONSOR_URL
)}`;
const ZEFFY_LINKS = {
  legacy: ZEFFY_SPONSOR_URL,
  founding: ZEFFY_SPONSOR_URL,
  major: ZEFFY_SPONSOR_URL,
  community: ZEFFY_SPONSOR_URL,
};

const heroDetails = [
  { icon: Calendar, label: "Date", value: "November 7, 2026" },
  { icon: Clock, label: "Time", value: "9:00 AM – 4:00 PM" },
  { icon: MapPin, label: "Venue", value: "Hyatt Regency Baytown" },
  { icon: Users, label: "Audience", value: "150+ Attendees" },
];

const aboutCards = [
  {
    icon: Link2,
    title: "Connect",
    body: "Build meaningful relationships with experts, providers, and other families.",
  },
  {
    icon: Lightbulb,
    title: "Learn",
    body: "Gain practical strategies and evidence-based insights you can use immediately.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    body: "Leave with a plan and the resources to create long-term, daily success.",
  },
];

const challenge = [
  { icon: Sparkles, title: "Diagnosis", body: "The beginning of the journey." },
  { icon: HelpCircle, title: "Questions", body: "Where do we start? What do we do?" },
  { icon: Puzzle, title: "Fragmented Systems", body: "Too many pieces. Not enough guidance." },
  { icon: CircleAlert, title: "Overwhelmed Families", body: "Too many decisions. Not enough support." },
];

const pillars = [
  "Education",
  "Healthcare",
  "Therapy",
  "Family Support",
  "Community Resources",
  "Employment & Transition",
];

const attendees = [
  { icon: HeartHandshake, title: "Parents & Caregivers", body: "Seeking guidance, resources, and community." },
  { icon: GraduationCap, title: "Educators", body: "Teachers, administrators, and special education professionals." },
  { icon: Stethoscope, title: "Healthcare Providers", body: "Physicians, nurses, and medical specialists." },
  { icon: Brain, title: "Therapists & Service Providers", body: "Behavioral, speech, occupational, and support services." },
  { icon: Megaphone, title: "Self-Advocates", body: "Individuals with autism sharing experiences and perspectives." },
  { icon: Building2, title: "Community Leaders", body: "Faith leaders, civic organizations, and local leaders." },
  { icon: Briefcase, title: "Employers", body: "Businesses committed to inclusion and workforce development." },
  { icon: HandHeart, title: "Nonprofits & Advocates", body: "Organizations working to create positive change." },
];

const sponsorValue = [
  {
    title: "Community Impact",
    body: "Your support helps provide families with the resources, education, and connections they need to thrive.",
  },
  {
    title: "Brand Visibility",
    body: "Position your organization as a leader in autism awareness, accessibility, and inclusion.",
  },
  {
    title: "Meaningful Engagement",
    body: "Engage directly with families, professionals, and decision-makers through authentic experiences.",
  },
];

interface Tier {
  amount: string;
  name: string;
  subtitle: string;
  limit?: string;
  benefits: string[];
  cta: { label: string; href: string };
  featured?: boolean;
}

const tiers: Tier[] = [
  {
    amount: "$28,000",
    name: "Title Underwriter",
    subtitle: "Exclusive Anchor",
    limit: "1 available",
    benefits: [
      "Naming Rights: “The Bridge Summit, Presented by [Your Company]”",
      "Featured top-tier placement on the 10-year Founders Wall",
      "Custom partnership benefits & executive recognition",
      "Premier stage acknowledgment throughout the summit",
    ],
    cta: { label: "Schedule a Partnership Conversation", href: TITLE_UNDERWRITER_MAILTO },
    featured: true,
  },
  {
    amount: "$5,000",
    name: "Legacy Pillar",
    subtitle: "Strategic Partner",
    benefits: [
      "Logo on 150 “Bridge Kit” safety materials",
      "Double-sized booth in main exhibit area",
      "Priority 10-year Founders Wall recognition",
      "Premium program and digital placement",
    ],
    cta: { label: "Sponsor Online", href: ZEFFY_LINKS.legacy },
  },
  {
    amount: "$2,500",
    name: "Founding Partner",
    subtitle: "The “Founding Four” Tier",
    limit: "4 available — one per industry",
    benefits: [
      "Premium booth presence",
      "Dedicated 10-year Founders Wall recognition",
      "Category exclusivity within your industry",
      "Program and on-stage acknowledgment",
    ],
    cta: { label: "Sponsor Online", href: ZEFFY_LINKS.founding },
  },
  {
    amount: "$1,500",
    name: "Major Sponsor",
    subtitle: "Impact Partner",
    benefits: [
      "Booth presence in exhibit hall",
      "Program recognition",
      "Verbal acknowledgment at opening ceremony",
      "Logo across event signage",
    ],
    cta: { label: "Sponsor Online", href: ZEFFY_LINKS.major },
  },
  {
    amount: "$500",
    name: "Community Sponsor",
    subtitle: "Neighbor Level",
    benefits: [
      "Logo placement in the program",
      "Social media mentions",
      "2 attendee passes",
      "Listed as a community partner",
    ],
    cta: { label: "Sponsor Online", href: ZEFFY_LINKS.community },
  },
];

const speakers = [
  { role: "Keynote Speaker", note: "Visionary voice opening the day" },
  { role: "Provider Panel", note: "Healthcare, therapy & education experts" },
  { role: "Family & Advocacy Voice", note: "Lived experience and leadership" },
];

const Index = () => {
  const heroImgRef = useRef<HTMLDivElement | null>(null);

  // Subtle hero parallax
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const onScroll = () => {
      const el = heroImgRef.current;
      if (!el) return;
      const y = Math.min(window.scrollY, 800) * 0.25;
      el.style.transform = `translate3d(0, ${y}px, 0) scale(1.08)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen />
      <SiteHeader />
      <FloatingSponsorCTA />

      {/* ============== HERO ============== */}
      <section
        id="home"
        className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-20 overflow-hidden bg-gradient-to-b from-white via-[hsl(var(--navy))/0.02] to-[hsl(var(--navy-deep))]"
      >
        {/* Premium light ambience */}
        <div
          ref={heroImgRef}
          className="absolute inset-0 will-change-transform"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,hsl(var(--gold)/0.18),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,hsl(var(--teal)/0.12),transparent_60%)]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.25),transparent_70%)] blur-3xl opacity-70" />
        </div>

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(hsl(var(--navy)) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />

        <div className="container-tight max-w-6xl relative z-10 text-center animate-fade-up">
          {/* Logo with premium glow */}
          <div className="relative mx-auto inline-block">
            <div className="absolute -inset-10 md:-inset-20 bg-gradient-gold opacity-20 blur-3xl rounded-full" aria-hidden="true" />
            <img
              src={bridgeLogo}
              alt="BRIDGE 2026 — From Diagnosis to Daily Success. Presented by Autism Meets Faith."
              width={1600}
              height={900}
              fetchPriority="high"
              className="relative mx-auto w-full max-w-[920px] md:max-w-[1040px] h-auto drop-shadow-[0_20px_50px_rgba(11,28,58,0.18)]"
            />
          </div>

          {/* Tagline */}
          <div className="mt-8 md:mt-10 flex items-center justify-center gap-3 md:gap-5">
            <span className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-[hsl(var(--gold))]" />
            <p className="font-display text-sm sm:text-base md:text-xl font-semibold uppercase tracking-[0.25em] md:tracking-[0.4em] text-[hsl(var(--navy))]">
              From Diagnosis <span className="text-[hsl(var(--gold))]">to</span> Daily Success
            </p>
            <span className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-[hsl(var(--gold))]" />
          </div>

          {/* CTAs */}
          <div className="mt-10 md:mt-12 flex flex-wrap gap-3 md:gap-4 justify-center">
            <Button asChild variant="navy" size="xl" className="hover:-translate-y-0.5 shadow-elegant">
              <a href="#attend">Attend BRIDGE 2026 <ArrowRight /></a>
            </Button>
            <Button asChild variant="outline" size="xl" className="border-2 border-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--navy))]">
              <a href={ZEFFY_SPONSOR_URL} target="_blank" rel="noopener noreferrer">
                Become a Sponsor
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom transition */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[hsl(var(--navy-deep))] pointer-events-none" />
      </section>

      {/* ============== IMPACT SNAPSHOT ============== */}
      <section className="relative -mt-1 py-20 md:py-28 bg-[hsl(var(--navy-deep))] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.18),transparent_55%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--teal)/0.12),transparent_60%)]" aria-hidden="true" />

        <div className="container-tight relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <p className="eyebrow !text-gold mb-3">Our Proven Impact</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-white text-balance leading-tight">
                Real Families. Real Numbers. <span className="text-gold">Real Change.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { stat: "700+", label: "Children Served" },
              { stat: "3,000+", label: "Toys & Sensory Materials Distributed" },
              { stat: "200+", label: "Families Supported Through Shopping Assistance" },
              { stat: "3,000+", label: "Lives Impacted" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <div className="group relative h-full rounded-3xl bg-white/[0.06] backdrop-blur-md border border-white/15 p-6 md:p-8 text-center hover:bg-white/[0.1] hover:border-[hsl(var(--gold))]/50 hover:-translate-y-1 transition-all duration-500 shadow-elegant overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[hsl(var(--gold))]/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  <p className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gold leading-none drop-shadow-[0_2px_20px_rgba(212,175,55,0.35)]">
                    {item.stat}
                  </p>
                  <div className="mx-auto mt-4 h-px w-10 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />
                  <p className="mt-4 text-xs md:text-sm uppercase tracking-[0.16em] text-white/80 leading-relaxed">
                    {item.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FAMILY IMPACT BANNER ============== */}
      <section className="relative min-h-[60vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src={familyImpact}
          alt="An Autism Meets Faith family smiling together at a community event"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Navy overlay — preserves warmth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy-deep))]/75 via-[hsl(var(--navy))]/55 to-[hsl(var(--navy-deep))]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--navy-deep))/0.6_90%)]" />

        <div className="container-tight relative z-10 text-center py-20 md:py-28">
          <Reveal>
            <p className="eyebrow !text-gold mb-6">The Heart of BRIDGE 2026</p>
            <h2 className="font-display font-bold text-white text-balance leading-[1.05] tracking-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
              <span className="block">Building Pathways.</span>
              <span className="block mt-2 md:mt-3">Connecting Communities.</span>
              <span className="block mt-2 md:mt-3 text-gold italic">Transforming Lives.</span>
            </h2>
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />
          </Reveal>
        </div>
      </section>

      {/* ============== COUNTDOWN ============== */}
      <section className="relative py-20 md:py-28 bg-[hsl(var(--navy-deep))] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.2),transparent_60%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--teal)/0.18),transparent_55%)]" aria-hidden="true" />

        <div className="container-tight relative z-10 max-w-5xl">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow !text-gold mb-3">Save the Date</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-balance">
                Countdown to <span className="text-gold">Summit Day</span>
              </h2>
              <p className="mt-3 text-white/70 text-sm md:text-base tracking-wide">
                November 7, 2026 · Hyatt Regency Baytown-Houston
              </p>
            </div>
          </Reveal>

          <Reveal>
            <Countdown variant="premium" />
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button asChild variant="hero" size="lg">
              <a href="#attend">Reserve My Seat <ArrowRight /></a>
            </Button>
            <Button asChild variant="outlineGold" size="lg">
              <a href={ZEFFY_SPONSOR_URL} target="_blank" rel="noopener noreferrer">
                Become a Sponsor
              </a>
            </Button>
          </div>

          {/* Quick details strip */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {heroDetails.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-4 md:p-5 hover:bg-white/10 transition-all"
              >
                <Icon className="text-gold mb-3" size={22} />
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">{label}</p>
                <p className="text-sm md:text-base font-medium text-white mt-1">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ABOUT ============== */}
      <section id="about" className="py-24 md:py-32 bg-gradient-soft">
        <div className="container-tight">
          <SectionHeading
            eyebrow="About the Summit"
            title={<>What Is <span className="text-gold">BRIDGE 2026?</span></>}
            intro="BRIDGE 2026 is a one-day summit that brings together families, professionals, and community leaders to create a connected network of resources and solutions for individuals with autism and their families."
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {aboutCards.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group rounded-3xl bg-card p-8 shadow-card hover:shadow-elegant transition-all duration-500 border border-border/50 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                  <Icon className="text-[hsl(var(--navy))]" size={26} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-[hsl(var(--navy))] mb-3">
                  {title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== STORY ============== */}
      <section className="relative py-24 md:py-32 bg-[hsl(var(--navy-deep))] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBridge} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--navy-deep))]/95 via-[hsl(var(--navy))]/90 to-[hsl(var(--navy-deep))]" />

        <div className="container-tight relative z-10 max-w-4xl text-center">
          <p className="eyebrow mb-6">The Story</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-balance leading-tight">
            Every Journey <span className="italic text-gold">Begins Somewhere</span>
          </h2>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-white/85">
            <p>
              A diagnosis can change everything. Suddenly, families are faced with questions,
              uncertainty, and a system that can feel overwhelming.
            </p>
            <p className="font-display italic text-2xl md:text-3xl text-gold/90 text-balance">
              “Where do we start? Who can we trust? What comes next?”
            </p>
            <p>
              No family should have to walk this road alone. BRIDGE exists to bring people,
              resources, and hope together — creating a clear path from diagnosis to daily success.
            </p>
          </div>
        </div>
      </section>

      {/* ============== CHALLENGE ============== */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-tight">
          <SectionHeading
            eyebrow="The Challenge"
            title={<>The Journey Many <span className="text-gold">Families Face</span></>}
          />

          <div className="relative grid md:grid-cols-4 gap-6">
            {/* connecting line on desktop */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-[hsl(var(--gold))]/60 to-transparent" />
            {challenge.map(({ icon: Icon, title, body }, i) => (
              <div key={title} className="relative text-center">
                <div className="relative mx-auto w-20 h-20 rounded-full bg-card border-2 border-[hsl(var(--gold))]/40 flex items-center justify-center shadow-card z-10">
                  <Icon className="text-[hsl(var(--navy))]" size={28} />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-gold text-[hsl(var(--navy))] text-xs font-bold flex items-center justify-center shadow-gold">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-[hsl(var(--navy))]">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== SOLUTION ============== */}
      <section className="relative py-24 md:py-32 bg-gradient-soft overflow-hidden">
        <div className="container-tight">
          <SectionHeading
            eyebrow="The Solution"
            title={<>Building <span className="text-gold">Bridges</span> to Success</>}
            intro="The bridge connects families to the people, services, and systems that change everything."
          />

          <div className="relative max-w-5xl mx-auto">
            <BridgeDivider className="!py-4" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {pillars.map((p) => (
                <div
                  key={p}
                  className="rounded-2xl bg-card border border-border px-5 py-6 text-center shadow-card hover:shadow-elegant hover:border-[hsl(var(--gold))]/50 transition-all"
                >
                  <p className="font-display text-base md:text-lg font-semibold text-[hsl(var(--navy))]">
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center rounded-3xl bg-gradient-navy text-white p-10 md:p-14 shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.15),transparent_60%)]" />
            <div className="relative">
              <p className="eyebrow mb-4">Daily Success</p>
              <p className="font-display text-2xl md:text-3xl leading-snug text-balance">
                Empowered individuals.<br />
                Stronger families.<br />
                <span className="text-gold">Thriving communities.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== WHO ATTENDS ============== */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Who Attends"
            title={<>A Diverse Community <span className="text-gold">United by Purpose</span></>}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {attendees.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl bg-card border border-border p-6 hover:border-[hsl(var(--gold))]/50 hover:shadow-card transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--teal))]/10 flex items-center justify-center mb-4">
                  <Icon className="text-teal" size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-[hsl(var(--navy))] mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl bg-gradient-teal text-white p-8 md:p-12 text-center shadow-elegant">
            <p className="eyebrow !text-white/80 mb-3">2026 Attendance Goal</p>
            <p className="font-display text-4xl md:text-6xl font-bold">150 Participants</p>
            <p className="mt-3 text-white/85 max-w-xl mx-auto">
              A focused, high-impact audience for meaningful connection.
            </p>
          </div>
        </div>
      </section>

      {/* ============== FEATURED SPONSORS CAROUSEL ============== */}
      <section id="featured-sponsors" className="py-16 md:py-20 bg-background border-y border-border/60">
        <div className="container-tight">
          <Reveal>
            <div className="text-center mb-6">
              <p className="eyebrow mb-3">Featured Sponsors</p>
              <h2 className="font-display text-2xl md:text-3xl font-semibold text-[hsl(var(--navy))]">
                Sponsor logos <span className="text-gold">coming soon</span>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Logos appear here as partners join. Want to be first? Become a sponsor today.
              </p>
            </div>
          </Reveal>
          <SponsorLogoCarousel />
        </div>
      </section>

      <WaveSeparator
        topColor="hsl(var(--background))"
        bottomColor="hsl(218 60% 9%)"
      />

      <section id="sponsors" className="py-24 md:py-32 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.18),transparent_50%)]" />
        <div className="container-tight relative z-10">
          <SectionHeading
            light
            eyebrow="Sponsorship"
            title={<>Partner With <span className="text-gold">BRIDGE 2026</span></>}
            intro="Your sponsorship fuels a movement that creates real change for autism families across Greater Houston and beyond."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {sponsorValue.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/15 p-8 hover:bg-white/10 transition-colors"
              >
                <Star className="text-gold mb-4" size={24} />
                <h3 className="font-display text-xl font-semibold mb-3 text-white">{v.title}</h3>
                <p className="text-white/75 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>

          {/* Zeffy QR Code */}
          <div className="mt-16 grid lg:grid-cols-5 gap-8 items-center rounded-3xl bg-white/5 backdrop-blur-sm border border-white/15 p-8 md:p-12">
            <div className="lg:col-span-2 flex justify-center">
              <a
                href={ZEFFY_SPONSOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl bg-white p-5 md:p-6 shadow-elegant hover:scale-[1.02] transition-transform"
                aria-label="Open Bridge 2026 Zeffy sponsorship form"
              >
                <img
                  src={ZEFFY_QR_SRC}
                  alt="QR code linking to the Bridge 2026 Zeffy sponsorship payment form"
                  width={320}
                  height={320}
                  className="w-56 h-56 md:w-72 md:h-72 block"
                />
              </a>
            </div>
            <div className="lg:col-span-3 text-center lg:text-left">
              <p className="eyebrow !text-gold mb-3">Sponsor in Seconds</p>
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-white text-balance">
                Scan to Sponsor <span className="text-gold">Bridge 2026</span>
              </h3>
              <p className="mt-4 text-white/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Online sponsorship payments are processed securely through Zeffy.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button asChild variant="hero" size="lg">
                  <a href={ZEFFY_SPONSOR_URL} target="_blank" rel="noopener noreferrer">
                    Sponsor Online <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="outlineLight" size="lg">
                  <a href={PROSPECTUS_URL} target="_blank" rel="noopener noreferrer">
                    <Download /> Download Prospectus
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SPONSORSHIP LEVELS ============== */}
      <section id="sponsor-levels" className="py-24 md:py-32 bg-background">
        <div className="container-tight max-w-7xl">
          <SectionHeading
            eyebrow="Sponsorship Levels"
            title={<>Choose Your <span className="text-gold">Impact</span></>}
            intro="Every partnership tier comes with meaningful recognition and a direct line to community impact."
          />

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Title Underwriter - featured wide */}
            <TierCard tier={tiers[0]} className="lg:col-span-2" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.slice(1).map((t) => (
              <TierCard key={t.amount} tier={t} />
            ))}
          </div>

          <p className="mt-8 text-center text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For Title Underwriter naming rights, custom partnership agreements, or ACH payment
            instructions, please contact{" "}
            <a
              href={HOLLY_EMAIL_MAILTO}
              className="font-semibold text-[hsl(var(--navy))] underline decoration-[hsl(var(--gold))] decoration-2 underline-offset-4 hover:text-[hsl(var(--gold))]"
            >
              Holly Odogwu
            </a>{" "}
            directly.
          </p>

          {/* Title underwriter contact box */}
          <div className="mt-12 rounded-3xl bg-[hsl(var(--navy))] text-white p-8 md:p-10 shadow-elegant">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-1">
                <p className="eyebrow mb-2">Title Underwriting & Naming Rights</p>
                <p className="font-display text-xl md:text-2xl leading-snug text-balance">
                  For inquiries, contact Holly Odogwu directly. Custom partnership decks and
                  ACH payment instructions are available.
                </p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a href={HOLLY_EMAIL_MAILTO} className="inline-flex items-center gap-2 text-gold hover:text-[hsl(var(--gold-soft))] font-medium">
                  <Mail size={18} /> holly@autismmeetsfaith.org
                </a>
                <a href="tel:8322241147" className="inline-flex items-center gap-2 text-gold hover:text-[hsl(var(--gold-soft))] font-medium">
                  <Phone size={18} /> (832) 224-1147
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROSPECTUS DOWNLOAD ============== */}
      <section className="py-24 md:py-32 bg-gradient-soft">
        <div className="container-tight max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-8 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
              <img
                src={prospectus}
                alt="BRIDGE 2026 Sponsorship Prospectus"
                width={1024}
                height={1280}
                loading="lazy"
                className="relative w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="eyebrow mb-4">For Sponsors</p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-[hsl(var(--navy))] leading-tight text-balance">
                Download the <span className="text-gold">Sponsorship Prospectus</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                Review the complete Bridge 2026 sponsorship packet — benefits, audience overview,
                tier comparisons, and partnership opportunities.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="navy" size="lg">
                  <a href={PROSPECTUS_URL} target="_blank" rel="noopener noreferrer">
                    <Download /> Download Prospectus
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2">
                  <a href="#contact">Talk to Holly</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SPEAKERS ============== */}
      <section id="speakers" className="py-24 md:py-32 bg-background">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Program"
            title={<>Speakers <span className="text-gold">Announced Soon</span></>}
            intro="Bridge 2026 will feature voices from healthcare, education, therapy, advocacy, family support, and community leadership. Speaker announcements will be added as they are confirmed."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {speakers.map((s) => (
              <div
                key={s.role}
                className="rounded-3xl bg-card border border-border overflow-hidden shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--teal))] relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,hsl(var(--gold)/0.25),transparent_60%)]" />
                  <div className="relative w-24 h-24 rounded-full bg-white/10 backdrop-blur border-2 border-white/30 flex items-center justify-center">
                    <Sparkles className="text-gold" size={36} />
                  </div>
                  <span className="absolute bottom-4 left-4 right-4 text-center text-xs uppercase tracking-[0.2em] text-white/70">
                    Photo & bio to come
                  </span>
                </div>
                <div className="p-6">
                  <p className="eyebrow mb-2">{s.role}</p>
                  <h3 className="font-display text-xl font-semibold text-[hsl(var(--navy))]">
                    To Be Announced
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== ATTEND ============== */}
      <section id="attend" className="py-24 md:py-32 bg-gradient-soft">
        <div className="container-tight max-w-4xl text-center">
          <SectionHeading
            eyebrow="Registration"
            title={<>Attend <span className="text-gold">BRIDGE 2026</span></>}
            intro="Registration will open soon for families, professionals, providers, advocates, and community leaders."
          />

          <div className="rounded-3xl bg-card border border-border p-10 md:p-14 shadow-card">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--gold))]/15 text-[hsl(var(--navy))] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--gold))]" /> Registration Coming Soon
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-[hsl(var(--navy))] text-balance">
              Be the first to know when tickets go live.
            </h3>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Join Priority Access and we'll send registration details directly to your inbox first.
            </p>
            <div className="mt-8">
              <Button asChild variant="hero" size="xl" className="hover:-translate-y-0.5">
                <a href={PRIORITY_ACCESS_URL} target="_blank" rel="noopener noreferrer">
                  Join Priority Access <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ScheduleSection />

      <ImpactSection />

      {/* ============== VENUE ============== */}
      <section id="venue" className="py-24 md:py-32 bg-background">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Venue"
            title={<>Hyatt Regency <span className="text-gold">Baytown-Houston</span></>}
            intro="A professional, accessible setting for connection, learning, and community impact."
          />

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-2 rounded-3xl bg-[hsl(var(--navy))] text-white p-8 md:p-10 shadow-elegant">
              <MapPin className="text-gold mb-5" size={28} />
              <h3 className="font-display text-2xl font-semibold mb-2">Hyatt Regency Baytown-Houston</h3>
              <p className="text-white/80 leading-relaxed">
                1000 Heritage Place<br />
                Baytown, TX 77521
              </p>
              <div className="my-6 h-px bg-white/15" />
              <ul className="space-y-3 text-sm text-white/85">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={16} /> Free on-site parking</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={16} /> Fully accessible facility</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-gold" size={16} /> Professional conference space</li>
              </ul>
              <Button asChild variant="outlineGold" className="mt-8">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Hyatt+Regency+Baytown-Houston"
                  target="_blank"
                  rel="noopener"
                >
                  Get Directions <ArrowRight />
                </a>
              </Button>
            </div>

            <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-border shadow-card min-h-[360px] bg-muted">
              <iframe
                title="Hyatt Regency Baytown-Houston map"
                src="https://www.google.com/maps?q=Hyatt+Regency+Baytown-Houston,+1000+Heritage+Place,+Baytown,+TX+77521&output=embed"
                loading="lazy"
                className="w-full h-full min-h-[360px] border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <GallerySection />

      <MediaSection />

      <TestimonialsSection />

      <ShareButtons />

      {/* ============== CONTACT ============== */}
      <section id="contact" className="py-24 md:py-32 bg-gradient-soft">
        <div className="container-tight max-w-6xl">
          <SectionHeading
            eyebrow="Get In Touch"
            title={<>Questions or <span className="text-gold">Partnership Inquiries?</span></>}
          />

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 rounded-3xl bg-[hsl(var(--navy))] text-white p-8 md:p-10 shadow-elegant">
              <p className="eyebrow mb-3">Direct Contact</p>
              <h3 className="font-display text-2xl font-semibold">Holly Odogwu</h3>
              <p className="text-white/70 text-sm mt-1">Founder & Executive Director<br />Autism Meets Faith</p>

              <div className="mt-8 space-y-4">
                <a href="mailto:holly@autismmeetsfaith.org" className="flex items-start gap-3 text-white/90 hover:text-gold transition-colors">
                  <Mail className="text-gold mt-0.5 shrink-0" size={20} />
                  <span>holly@autismmeetsfaith.org</span>
                </a>
                <a href="tel:8322241147" className="flex items-start gap-3 text-white/90 hover:text-gold transition-colors">
                  <Phone className="text-gold mt-0.5 shrink-0" size={20} />
                  <span>(832) 224-1147</span>
                </a>
                <a href="https://autismmeetsfaith.org" target="_blank" rel="noopener" className="flex items-start gap-3 text-white/90 hover:text-gold transition-colors">
                  <Globe className="text-gold mt-0.5 shrink-0" size={20} />
                  <span>autismmeetsfaith.org</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 rounded-3xl bg-card border border-border p-8 md:p-10 shadow-card space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name"><Input name="name" placeholder="Your name" /></Field>
                <Field label="Organization"><Input name="organization" placeholder="Company / nonprofit" /></Field>
                <Field label="Email"><Input name="email" type="email" placeholder="you@example.com" /></Field>
                <Field label="Phone"><Input name="phone" type="tel" placeholder="(555) 555-5555" /></Field>
              </div>
              <Field label="Message">
                <Textarea name="message" rows={5} placeholder="Tell us about your interest in BRIDGE 2026..." />
              </Field>
              <p className="text-xs text-muted-foreground">
                Click below to open your email app with your message — Holly responds to every inquiry personally.
              </p>
              <Button asChild variant="navy" size="lg" className="w-full md:w-auto hover:-translate-y-0.5">
                <a href={HOLLY_EMAIL_MAILTO}>
                  <Mail /> Email Holly About Bridge 2026
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="bg-[hsl(var(--navy-deep))] text-white pt-20 pb-10">
        <div className="container-tight max-w-7xl">
          <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            <div className="md:col-span-5">
              <p className="font-display text-3xl font-bold">
                BRIDGE<span className="text-gold">.</span>
                <span className="text-gold text-base tracking-[0.2em] ml-2">2026</span>
              </p>
              <p className="mt-4 text-white/70 max-w-sm">
                From Diagnosis to Daily Success.<br />
                Building pathways. Connecting communities. Transforming lives.
              </p>
              <p className="mt-6 text-sm text-white/50">
                Presented by <a href="https://autismmeetsfaith.org" className="text-gold hover:underline">Autism Meets Faith</a>
              </p>
            </div>

            <div className="md:col-span-3">
              <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Explore</p>
              <ul className="space-y-2 text-white/70">
                <li><a href="#about" className="hover:text-gold">About</a></li>
                <li><a href="#sponsors" className="hover:text-gold">Sponsors</a></li>
                <li><a href="#speakers" className="hover:text-gold">Speakers</a></li>
                <li><a href="#venue" className="hover:text-gold">Venue</a></li>
                <li><a href="#attend" className="hover:text-gold">Attend</a></li>
                <li><a href="#contact" className="hover:text-gold">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <p className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Take Action</p>
              <div className="flex flex-col gap-3">
                <Button asChild variant="hero">
                  <a href={ZEFFY_SPONSOR_URL} target="_blank" rel="noopener noreferrer">Sponsor Bridge 2026</a>
                </Button>
                <Button asChild variant="outlineLight">
                  <a href={PROSPECTUS_URL} target="_blank" rel="noopener noreferrer">
                    <Download /> Download Prospectus
                  </a>
                </Button>
              </div>
              <div className="mt-6 text-sm text-white/70 space-y-1">
                <p>
                  <a href={HOLLY_EMAIL_MAILTO} className="hover:text-gold">holly@autismmeetsfaith.org</a>
                </p>
                <p>(832) 224-1147</p>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© 2026 Autism Meets Faith. All rights reserved.</p>
            <p>Hyatt Regency Baytown-Houston · November 7, 2026</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(var(--navy))]/70">{label}</span>
    <div className="mt-2">{children}</div>
  </label>
);

const TierCard = ({ tier, className = "" }: { tier: Tier; className?: string }) => {
  const featured = tier.featured;
  return (
    <div
      className={`relative rounded-3xl p-8 md:p-10 transition-all duration-500 flex flex-col ${className} ${
        featured
          ? "bg-gradient-navy text-white shadow-elegant border border-[hsl(var(--gold))]/30 overflow-hidden"
          : "bg-card border border-border shadow-card hover:shadow-elegant hover:-translate-y-1"
      }`}
    >
      {featured && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.2),transparent_60%)]" />
          <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-gold text-[hsl(var(--navy))] px-3 py-1 text-[10px] font-bold uppercase tracking-wider shadow-gold">
            <Star size={12} fill="currentColor" /> Premier
          </span>
        </>
      )}
      <div className="relative">
        <p className={`text-sm font-semibold uppercase tracking-wider ${featured ? "text-gold" : "text-teal"}`}>
          {tier.subtitle}
        </p>
        <h3 className={`mt-2 font-display text-2xl md:text-3xl font-semibold ${featured ? "text-white" : "text-[hsl(var(--navy))]"}`}>
          {tier.name}
        </h3>
        <p className={`mt-4 font-display text-4xl md:text-5xl font-bold ${featured ? "text-gold" : "text-[hsl(var(--navy))]"}`}>
          {tier.amount}
        </p>
        {tier.limit && (
          <p className={`mt-2 text-xs uppercase tracking-wider ${featured ? "text-white/60" : "text-muted-foreground"}`}>
            {tier.limit}
          </p>
        )}

        <ul className={`mt-6 space-y-3 ${featured ? "text-white/85" : "text-muted-foreground"} text-sm flex-1`}>
          {tier.benefits.map((b) => (
            <li key={b} className="flex gap-2.5">
              <CheckCircle2 className={`shrink-0 mt-0.5 ${featured ? "text-gold" : "text-teal"}`} size={16} />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          {tier.cta.href.startsWith("mailto:") ? (
            <Button asChild variant={featured ? "hero" : "navy"} size="default" className="w-full">
              <a href={tier.cta.href}>{tier.cta.label} <ArrowRight /></a>
            </Button>
          ) : (
            <Button asChild variant={featured ? "hero" : "navy"} size="default" className="w-full">
              <a href={tier.cta.href} target="_blank" rel="noopener noreferrer">
                {tier.cta.label} <ArrowRight />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
