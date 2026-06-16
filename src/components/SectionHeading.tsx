import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "center" | "left";
  light?: boolean;
}

export const SectionHeading = ({ eyebrow, title, intro, align = "center", light }: Props) => (
  <div
    className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12 md:mb-16`}
  >
    {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
    <h2
      className={`font-display text-3xl md:text-5xl font-semibold text-balance leading-[1.1] ${
        light ? "text-white" : "text-[hsl(var(--navy))]"
      }`}
    >
      {title}
    </h2>
    {intro && (
      <p
        className={`mt-5 text-base md:text-lg leading-relaxed text-balance ${
          light ? "text-white/75" : "text-muted-foreground"
        }`}
      >
        {intro}
      </p>
    )}
  </div>
);
