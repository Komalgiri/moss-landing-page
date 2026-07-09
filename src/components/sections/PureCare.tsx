import { Reveal } from "@/components/Reveal";
import thumb1 from "@/assets/thumb1.jpg";
import thumb2 from "@/assets/thumb2.jpg";
import bottlesDuo from "@/assets/bottles-duo.jpg";

export function PureCare() {
  return (
    <section className="bg-secondary px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 md:grid-cols-2 md:gap-20">
        {/* Left side: Two vertical images side by side */}
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={thumb1}
                alt="White pump bottle"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={thumb2}
                alt="Brown pump bottle"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Right side: Title, text, horizontal image */}
        <Reveal delay={120}>
          <h2 className="font-serif text-4xl leading-[1.05] text-foreground md:text-5xl">
            Pure care
            <br />
            by nature
          </h2>
          <p className="mt-6 max-w-md text-[13px] leading-relaxed text-muted-foreground">
            Thoughtfully crafted formulas designed to bring balance and calm to your daily routine.
            Lightweight textures, gentle ingredients, and a minimalist approach help support
            healthy-looking skin — effortlessly every day.
          </p>

          <div className="mt-10 overflow-hidden aspect-video w-full max-w-sm rounded-xl">
            <img
              src={bottlesDuo}
              alt="Two dark green tubes"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
