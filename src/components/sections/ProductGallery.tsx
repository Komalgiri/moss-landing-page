import { Reveal } from "@/components/Reveal";
import { PillButton } from "@/components/ui/PillButton";
import { Star } from "lucide-react";

export function ProductGallery() {
  return (
    <section className="bg-background px-6 py-32 md:px-12 md:py-48 overflow-hidden" id="catalog">
      <div className="mx-auto max-w-[90rem] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: Text and Overlapping Collage */}
        <div className="flex flex-col items-start w-full">
          <Reveal>
            <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-foreground leading-[0.95] mb-8 tracking-tight">
              Beauty That <br /> Feels as Good <br /> as It Looks
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-md mb-10 leading-relaxed">
              Our premium collection deeply hydrates, nourishes, and rejuvenates your skin — so you
              can glow with confidence every day.
            </p>
            <PillButton variant="solid" className="px-10 py-4 text-base">
              Shop now
            </PillButton>
          </Reveal>

          {/* Enhanced Floating Collage */}
          <Reveal delay={0.2} className="mt-20 relative w-full h-64 max-w-lg hidden md:block">
            {/* Image Pill 1 (Bottom Left) */}
            <div className="absolute bottom-0 left-0 w-48 h-24 rounded-full overflow-hidden shadow-2xl z-10">
              <img
                src="/assets/insta_2.png"
                alt="Glowing Skin"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Review Bubble 1 (Top Left, overlapping) */}
            <div className="absolute top-0 left-12 bg-foreground text-background px-8 py-5 rounded-[2rem] flex flex-col items-center text-center w-56 shadow-2xl z-30 hover:scale-105 transition-transform cursor-default">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-[11px] leading-relaxed font-medium">
                "A miracle skincare solution. High quality, effective, simply perfect."
              </p>
            </div>

            {/* Review Bubble 2 (Bottom Right) */}
            <div className="absolute bottom-8 right-16 bg-secondary text-foreground px-8 py-5 rounded-[2rem] flex flex-col items-center text-center w-56 shadow-xl z-30 hover:scale-105 transition-transform cursor-default">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-moss text-moss" />
                ))}
              </div>
              <p className="text-[11px] leading-relaxed font-medium">
                "This cream changed my skin texture. I can't live without it!"
              </p>
            </div>

            {/* Image Pill 2 (Top Right) */}
            <div className="absolute top-10 right-0 w-48 h-24 rounded-full overflow-hidden shadow-lg z-10">
              <img
                src="/assets/founder_portrait.png"
                alt="Model"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>

        {/* Right Column: Hero Product Composition */}
        <Reveal delay={0.1} className="w-full h-full flex items-center justify-center relative">
          {/* Subtle backdrop circle */}
          <div className="absolute w-[120%] h-[120%] bg-moss/5 rounded-full blur-3xl -z-10"></div>

          <div className="relative w-full max-w-xl aspect-[4/5] bg-secondary rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center p-0 md:p-8 group">
            <img
              src="/assets/cloud_cream.png"
              alt="Product composition"
              className="w-full h-full object-cover mix-blend-luminosity scale-105 group-hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
