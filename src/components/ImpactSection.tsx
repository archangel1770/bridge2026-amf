import { SectionHeading } from "@/components/SectionHeading";
import { Counter } from "@/components/Counter";

const STATS = [
  { value: 150, suffix: "+", label: "Expected Attendees" },
  { value: 10, suffix: "-Yr", label: "Founders Wall" },
  { value: 8, suffix: "", label: "Stakeholder Groups" },
  { value: 5, suffix: "", label: "Sponsorship Levels" },
];

const FUTURE = [
  { label: "Families Served" },
  { label: "Professionals Connected" },
  { label: "Community Partners" },
  { label: "Sponsors" },
  { label: "Volunteer Hours" },
];

export const ImpactSection = () => (
  <section id="impact" className="py-24 md:py-32 bg-[hsl(var(--navy-deep))] text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.15),transparent_55%)]" />
    <div className="container-tight relative z-10">
      <SectionHeading
        light
        eyebrow="Impact"
        title={<>Building Something <span className="text-gold">Measurable</span></>}
        intro="Every sponsorship, every attendee, every connection moves the needle for autism families across our region."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {STATS.map((s) => (
          <div
            key={s.label}
            className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/15 p-6 md:p-8 text-center"
          >
            <p className="font-display text-4xl md:text-6xl font-bold text-gold">
              <Counter to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.18em] text-white/70">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-white/[0.03] border border-white/10 p-8 md:p-10">
        <p className="eyebrow !text-gold mb-3 text-center">Post-Event Reporting</p>
        <p className="text-center text-white/75 max-w-2xl mx-auto">
          Sponsors receive a complete impact report after the summit, including:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2 md:gap-3">
          {FUTURE.map((f) => (
            <span
              key={f.label}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs md:text-sm text-white/85"
            >
              {f.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);
