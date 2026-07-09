import { Reveal } from "@/components/Reveal";
import { Instagram } from "lucide-react";

const feedImages = [
  "/assets/insta_1.png",
  "/assets/moss_cleanser.png",
  "/assets/insta_2.png",
  "/assets/sage_serum.png",
  "/assets/cloud_cream.png",
];

export function InstaFeed() {
  return (
    <section className="py-24 md:py-32 bg-secondary">
      <Reveal>
        <div className="flex flex-col items-center justify-center mb-12 text-center px-6">
          <Instagram className="w-8 h-8 text-moss mb-4" strokeWidth={1.5} />
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-3">
            Follow our journey
          </h2>
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-moss transition-colors"
          >
            @moss_skincare
          </a>
        </div>
      </Reveal>

      {/* Bento Grid Layout */}
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {feedImages.map((image, index) => {
            // Make the first image a large 2x2 block, and the rest 1x1 small blocks.
            const isLarge = index === 0;
            return (
              <Reveal
                key={index}
                delay={index * 0.1}
                className={isLarge ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
              >
                <a
                  href="#"
                  className="group block relative w-full h-full overflow-hidden rounded-3xl bg-background"
                >
                  <img
                    src={image}
                    alt={`Instagram feed image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-moss/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
