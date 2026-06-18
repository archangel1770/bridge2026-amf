import { Newspaper, Camera, Megaphone, Video } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const ITEMS = [
  { icon: Newspaper, title: "Press Releases", body: "Official announcements about Bridge 2026 will be posted here." },
  { icon: Camera, title: "Photos", body: "Event photography and behind-the-scenes coverage coming soon." },
  { icon: Megaphone, title: "Announcements", body: "Sponsor reveals, speaker confirmations, and program updates." },
  { icon: Video, title: "Videos", body: "Highlight reels and session recordings after the summit." },
];

export const MediaSection = () => (
  <section id="media" className="py-24 md:py-32 bg-background">
    <div className="container-tight">
      <SectionHeading
        eyebrow="Media & News"
        title={<>Stay <span className="text-gold">In The Loop</span></>}
        intro="Press, photos, announcements, and video — updated continually through summit day and beyond."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ITEMS.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl bg-card border border-border p-6 hover:border-[hsl(var(--gold))]/50 hover:shadow-card transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-[hsl(var(--gold))]/15 flex items-center justify-center mb-4">
              <Icon className="text-[hsl(var(--gold))]" size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold text-[hsl(var(--navy))] mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-teal">Coming Soon</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
