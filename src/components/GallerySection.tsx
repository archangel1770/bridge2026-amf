import { Image as ImageIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const GallerySection = () => (
  <section id="gallery" className="py-24 md:py-32 bg-gradient-soft">
    <div className="container-tight">
      <SectionHeading
        eyebrow="Gallery"
        title={<>Moments from <span className="text-gold">Bridge 2026</span></>}
        intro="Photos and highlights will appear here after the summit. Sponsors and attendees will be tagged and featured."
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-2xl bg-gradient-to-br from-[hsl(var(--navy))]/10 to-[hsl(var(--teal))]/10 border border-border flex items-center justify-center"
          >
            <ImageIcon className="text-[hsl(var(--navy))]/30" size={32} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
