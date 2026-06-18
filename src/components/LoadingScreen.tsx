import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [done, setDone] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1400);
    const t2 = setTimeout(() => setHide(true), 1900);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hide) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(var(--navy-deep))] transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <svg
          viewBox="0 0 320 100"
          className="w-64 md:w-80 h-auto"
          aria-label="Bridge logo loading"
        >
          <defs>
            <linearGradient id="bridgeGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="hsl(41 80% 65%)" />
              <stop offset="100%" stopColor="hsl(41 70% 48%)" />
            </linearGradient>
          </defs>
          {/* deck */}
          <path
            d="M10 78 L310 78"
            stroke="url(#bridgeGrad)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            className="bridge-draw"
            style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: "draw 1.2s ease-out forwards" }}
          />
          {/* arch */}
          <path
            d="M10 78 Q160 6 310 78"
            stroke="url(#bridgeGrad)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            style={{ strokeDasharray: 360, strokeDashoffset: 360, animation: "draw 1.3s 0.15s ease-out forwards" }}
          />
          {/* cables */}
          {[60, 100, 140, 180, 220, 260].map((x, i) => (
            <line
              key={x}
              x1={x}
              y1="78"
              x2={x}
              y2={78 - Math.sin(((x - 10) / 300) * Math.PI) * 70}
              stroke="hsl(41 70% 52% / 0.7)"
              strokeWidth="1.5"
              style={{ opacity: 0, animation: `fadeCable 0.4s ${0.5 + i * 0.07}s ease-out forwards` }}
            />
          ))}
        </svg>
        <p className="font-display tracking-[0.4em] text-gold text-sm">BRIDGE · 2026</p>
      </div>
      <style>{`
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @keyframes fadeCable { to { opacity: 1; } }
      `}</style>
    </div>
  );
};
