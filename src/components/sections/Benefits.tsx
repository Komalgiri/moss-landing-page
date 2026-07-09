import { Reveal } from "@/components/Reveal";
import { Leaf, ShieldCheck, Droplet, Sun } from "lucide-react";

export function Benefits() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
              Purely Beneficial
            </h2>
            <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              Our products are designed to nourish your skin and the planet simultaneously.
            </p>
          </div>
        </Reveal>

        {/* Bento Grid layout for Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Card 1: 100% Vegan (Spans 2 columns) with Half-Card Image */}
          <Reveal delay={0.1} className="md:col-span-2">
            <div className="h-full rounded-[2rem] bg-secondary flex flex-col md:flex-row overflow-hidden relative group">
              {/* Text Side */}
              <div className="flex flex-col justify-center relative z-10 w-full md:w-1/2 p-8 md:p-12">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center mb-4 shadow-sm">
                  <Leaf className="w-5 h-5 text-moss" />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-2">100% Vegan</h3>
                <p className="text-foreground/80 text-sm">
                  Cruelty-free and ethically sourced ingredients that respect nature.
                </p>
              </div>

              {/* Image Side */}
              <div className="relative w-full md:w-1/2 h-48 md:h-full overflow-hidden">
                <img
                  src="/assets/insta_1.png"
                  alt="Natural sage leaves"
                  className="w-full h-full object-cover blur-[2px] opacity-90 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-secondary via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>

          {/* Card 2: Dermatologist Tested */}
          <Reveal delay={0.2} className="md:col-span-1">
            <div className="h-full rounded-[2rem] bg-moss/10 p-8 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">Clinically Proven</h3>
                <p className="text-sm text-muted-foreground">
                  Dermatologist tested and safe for the most sensitive skin types.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Deep Hydration (Dark Card) */}
          <Reveal delay={0.3} className="md:col-span-1">
            <div className="h-full rounded-[2rem] bg-foreground p-8 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-full bg-background/10 flex items-center justify-center mb-6">
                  <Droplet className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-medium text-background mb-2">Deep Hydration</h3>
                <p className="text-sm text-background/70">
                  Locks in moisture for a lasting, natural, and radiant glow.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Card 4: Clean Formula (Spans 2 columns) with Half-Card Image */}
          <Reveal delay={0.4} className="md:col-span-2">
            <div className="h-full rounded-[2rem] bg-secondary flex flex-col md:flex-row-reverse overflow-hidden relative group">
              {/* Text Side */}
              <div className="flex flex-col justify-center items-start md:items-end md:text-right relative z-10 w-full md:w-1/2 p-8 md:p-12">
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center mb-4 shadow-sm">
                  <Sun className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-2xl font-serif text-foreground mb-2">Clean Formula</h3>
                <p className="text-foreground/80 text-sm">
                  Formulated without parabens, sulfates, artificial fragrances, or chemicals.
                </p>
              </div>

              {/* Image Side */}
              <div className="relative w-full md:w-1/2 h-48 md:h-full overflow-hidden">
                <img
                  src="/assets/insta_2.png"
                  alt="Glowing skin"
                  className="w-full h-full object-cover object-top blur-[2px] opacity-90 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-secondary via-transparent to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
