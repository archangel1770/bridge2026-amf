interface Props {
  topColor?: string;
  bottomColor?: string;
  flip?: boolean;
  className?: string;
}

/** Bridge-cable inspired wave separator. Colors are CSS color values. */
export const WaveSeparator = ({
  topColor = "transparent",
  bottomColor = "hsl(var(--background))",
  flip = false,
  className = "",
}: Props) => (
  <div
    aria-hidden
    className={`relative w-full overflow-hidden leading-[0] ${className}`}
    style={{ background: topColor }}
  >
    <svg
      viewBox="0 0 1200 80"
      preserveAspectRatio="none"
      className={`block w-full h-10 md:h-16 ${flip ? "rotate-180" : ""}`}
    >
      <path
        d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40 L1200,80 L0,80 Z"
        fill={bottomColor}
      />
      <path
        d="M0,40 C150,80 350,0 600,40 C850,80 1050,0 1200,40"
        stroke="hsl(var(--gold) / 0.45)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  </div>
);
