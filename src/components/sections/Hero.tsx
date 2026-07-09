import { Navbar } from "@/components/ui/Navbar";
import hero from "@/assets/hero.jpg";


export function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={hero}
        alt=""
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/30" />
      <Navbar overHero />
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <h1
          className="font-serif text-white/85 mix-blend-screen select-none text-center leading-[0.85] font-medium"
          style={{
            fontSize: "clamp(9rem, 34vw, 32rem)",
            textShadow: "0 0 60px rgba(0,0,0,0.15)",
          }}
        >
          moss
        </h1>
      </div>
      {/* Call to Action Buttons */}
      <div className="absolute bottom-24 left-0 right-0 z-10 flex gap-4 justify-center">
        <a href="#catalog" className="px-6 py-2 bg-white text-black rounded-full hover:bg-white/80 transition">Shop Now</a>
        <a href="#about" className="px-6 py-2 bg-black/20 backdrop-blur-sm text-white rounded-full hover:bg-black/30 transition">Learn More</a>
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white/85 text-[11px] tracking-[0.2em] uppercase md:left-12 md:right-12 md:bottom-8">
        <span>Est. 2025</span>
        <span className="hidden md:inline">Pure care by nature</span>
        <span>Scroll ↓</span>
      </div>
    </section>
  );
}
