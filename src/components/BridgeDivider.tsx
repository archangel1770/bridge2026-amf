import bridgeLine from "@/assets/bridge-line.png";

export const BridgeDivider = ({ className = "" }: { className?: string }) => (
  <div className={`relative w-full flex items-center justify-center py-8 ${className}`}>
    <div className="absolute inset-x-0 top-1/2 gold-rule" />
    <img
      src={bridgeLine}
      alt=""
      aria-hidden
      loading="lazy"
      className="relative h-14 md:h-20 w-auto opacity-70 mix-blend-multiply"
    />
  </div>
);
