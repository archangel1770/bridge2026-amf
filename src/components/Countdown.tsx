import { useEffect, useState } from "react";

const TARGET = new Date("2026-11-07T09:00:00-06:00").getTime();

function calc() {
  const diff = Math.max(0, TARGET - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

type Variant = "compact" | "premium";

export const Countdown = ({
  light = true,
  variant = "compact",
}: {
  light?: boolean;
  variant?: Variant;
}) => {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  if (variant === "premium") {
    return (
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-4xl mx-auto"
        role="timer"
        aria-label="Countdown to BRIDGE 2026"
      >
        {units.map((u) => (
          <div
            key={u.label}
            className="group relative rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/20 px-3 py-6 md:py-10 text-center shadow-elegant overflow-hidden"
          >
            {/* Gold glow */}
            <div className="absolute -inset-px rounded-2xl md:rounded-3xl bg-gradient-to-br from-[hsl(var(--gold))]/30 via-transparent to-transparent opacity-60" aria-hidden="true" />
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-[hsl(var(--gold))]/20 blur-2xl" aria-hidden="true" />
            <div className="relative">
              <p className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tabular-nums text-gold leading-none drop-shadow-[0_4px_30px_rgba(212,175,55,0.45)]">
                {String(u.value).padStart(2, "0")}
              </p>
              <div className="mx-auto mt-4 h-px w-10 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />
              <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.28em] text-white/80 font-semibold">
                {u.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-4 gap-2 md:gap-3 max-w-md"
      role="timer"
      aria-label="Countdown to BRIDGE 2026"
    >
      {units.map((u) => (
        <div
          key={u.label}
          className={`rounded-2xl px-2 py-3 md:py-4 text-center border ${
            light
              ? "bg-white/10 backdrop-blur-md border-white/20 text-white"
              : "bg-card border-border text-[hsl(var(--navy))]"
          }`}
        >
          <p
            className={`font-display text-2xl md:text-4xl font-bold tabular-nums ${
              light ? "text-gold" : "text-[hsl(var(--navy))]"
            }`}
          >
            {String(u.value).padStart(2, "0")}
          </p>
          <p
            className={`mt-1 text-[10px] uppercase tracking-[0.18em] ${
              light ? "text-white/70" : "text-muted-foreground"
            }`}
          >
            {u.label}
          </p>
        </div>
      ))}
    </div>
  );
};
