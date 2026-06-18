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

export const Countdown = ({ light = true }: { light?: boolean }) => {
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
