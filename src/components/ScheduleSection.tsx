import { SectionHeading } from "@/components/SectionHeading";

const SCHEDULE = [
  { time: "8:30 AM", title: "Registration & Welcome", body: "Check-in, coffee, and exhibit hall opens." },
  { time: "9:00 AM", title: "Opening Ceremony", body: "Welcome from Holly Odogwu and the BRIDGE 2026 vision." },
  { time: "9:30 AM", title: "Keynote Address", body: "Setting the day's direction — from diagnosis to daily success." },
  { time: "10:30 AM", title: "Provider Panel", body: "Healthcare, therapy, and education experts answer your questions." },
  { time: "12:00 PM", title: "Lunch & Networking", body: "Sponsored lunch with curated table discussions." },
  { time: "1:30 PM", title: "Family & Advocacy Voices", body: "Lived experience, leadership, and lasting community." },
  { time: "2:30 PM", title: "Resource Workshops", body: "Breakout sessions across the six BRIDGE pillars." },
  { time: "3:45 PM", title: "Closing & Commitments", body: "Action steps, partnerships, and the year ahead." },
];

export const ScheduleSection = () => (
  <section id="schedule" className="py-24 md:py-32 bg-gradient-soft">
    <div className="container-tight max-w-4xl">
      <SectionHeading
        eyebrow="Agenda"
        title={<>Conference <span className="text-gold">Schedule</span></>}
        intro="A full day designed for connection, learning, and lasting change. Final agenda will be confirmed closer to the event."
      />
      <ol className="relative border-l-2 border-[hsl(var(--gold))]/40 ml-3 md:ml-6 space-y-8">
        {SCHEDULE.map((s) => (
          <li key={s.title} className="pl-6 md:pl-10 relative">
            <span className="absolute -left-[10px] top-1.5 w-4 h-4 rounded-full bg-gradient-gold ring-4 ring-background shadow-gold" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">{s.time}</p>
            <h3 className="mt-1 font-display text-xl md:text-2xl font-semibold text-[hsl(var(--navy))]">
              {s.title}
            </h3>
            <p className="mt-1 text-muted-foreground leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
