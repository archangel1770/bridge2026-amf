import { Facebook, Linkedin, Mail, Share2 } from "lucide-react";

const URL = typeof window !== "undefined" ? window.location.href : "https://bridge2026.org";
const TEXT = "Join us at BRIDGE 2026 — the Autism Meets Faith Regional Resource Summit.";

const SHARES = [
  { label: "Facebook", icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(URL)}` },
  { label: "LinkedIn", icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(URL)}` },
  { label: "X", icon: Share2, href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(TEXT)}&url=${encodeURIComponent(URL)}` },
  { label: "Email", icon: Mail, href: `mailto:?subject=${encodeURIComponent("BRIDGE 2026")}&body=${encodeURIComponent(TEXT + " " + URL)}` },
];

export const ShareButtons = () => (
  <section aria-label="Share Bridge 2026" className="py-14 bg-background border-t border-border">
    <div className="container-tight flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
      <p className="font-display text-lg text-[hsl(var(--navy))]">Share Bridge 2026</p>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {SHARES.map(({ label, icon: Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${label}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-[hsl(var(--navy))] hover:bg-[hsl(var(--gold))] hover:text-[hsl(var(--navy))] hover:border-[hsl(var(--gold))] transition-all hover:-translate-y-0.5"
          >
            <Icon size={16} />
            {label}
          </a>
        ))}
      </div>
    </div>
  </section>
);
