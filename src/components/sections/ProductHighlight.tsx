import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import image3d from "@/assets/3d.png";

export function ProductHighlight() {
  return (
    <section className="relative w-full overflow-hidden bg-background px-6 py-12 md:py-16 flex items-center justify-center">
      {/* Giant Typography Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h2 className="text-[35vw] md:text-[40vw] font-serif leading-none tracking-tighter text-white/15 select-none whitespace-nowrap">
          moss"
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-0">
        
        {/* Glassmorphic Info Card */}
        <Reveal delay={0.2} className="w-full md:w-auto z-20 md:translate-x-16">
          <div className="w-full max-w-md mx-auto md:w-[22rem] rounded-[2.5rem] border border-white/10 bg-background/50 p-8 backdrop-blur-2xl shadow-2xl relative">
            <div className="mb-6 flex gap-3">
              <span className="rounded-full border border-foreground/30 px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-foreground">
                Hydration
              </span>
              <span className="rounded-full border border-foreground/30 px-4 py-1.5 text-[11px] font-medium uppercase tracking-widest text-foreground">
                Repair
              </span>
            </div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-moss">
              [ for face & neck ]
            </p>
            <h3 className="mb-8 text-2xl md:text-3xl font-serif leading-tight text-foreground">
              Hydrating <br /> Cloud Cream
            </h3>
            <div className="flex items-center justify-between">
              <span className="text-xl md:text-2xl font-medium text-foreground">$48</span>
              <button className="flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/30 px-6 text-sm font-semibold transition-all hover:bg-foreground hover:text-background hover:scale-105 active:scale-95">
                Buy now <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Main Product Image Container */}
        <Reveal className="w-full max-w-lg md:max-w-2xl z-10">
          <img
            src={image3d}
            alt="Product Highlight 3D"
            className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-1000 hover:scale-105"
          />
        </Reveal>
      </div>
    </section>
  );
}
