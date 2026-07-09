import { Reveal } from "@/components/Reveal";
import { PillButton } from "@/components/ui/PillButton";
import trio from "@/assets/trio.jpg";
import lineup from "@/assets/lineup.jpg";

export function AllInOne() {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-48 bg-secondary overflow-hidden">
      {/* Giant "new" spanning the whole section */}
      <h3
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif italic leading-none text-center text-[color:var(--moss)]/25"
        style={{ fontSize: "clamp(12rem, 35vw, 36rem)", zIndex: 0 }}
      >
        new
      </h3>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top band: heading left, trio image right */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <h2 className="font-serif text-4xl leading-[1.02] text-foreground md:text-5xl">
              All-in-One
              <br />
              Skincare Complex
            </h2>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
              Multifunctional line designed to amplify your daily routine without compromising
              results.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="overflow-hidden bg-secondary shadow-sm rounded-xl">
              <img
                src={trio}
                alt="Three skincare bottles arranged on beige backdrop"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Bottom band: lineup image left, description + CTA right */}
        <div className="mt-16 grid grid-cols-1 items-end gap-10 md:mt-24 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-xl shadow-sm">
              <img
                src={lineup}
                alt="Four skincare bottles lined up"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="pb-8">
            <p className="max-w-sm text-[13px] leading-relaxed text-muted-foreground">
              Each formula combines hydration, barrier support, and skin-balancing ingredients to
              work in one effortless step. The collection focuses on smart minimalism — fewer
              products, more impact, and consistent care for healthy-looking skin.
            </p>
            <div className="mt-8">
              <PillButton variant="outline">Catalog</PillButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
