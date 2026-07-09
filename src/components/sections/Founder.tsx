import { Reveal } from "@/components/Reveal";

export function Founder() {
  return (
    <section className="px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-7xl grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-24">
        <Reveal>
          <div className="relative aspect-square overflow-hidden rounded-[2rem]">
            <img
              src="/assets/founder_portrait.png"
              alt="Founder portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col justify-center">
          <Reveal delay={0.2}>
            <span className="mb-6 block text-[11px] font-medium uppercase tracking-[0.3em] text-moss">
              A note from the founder
            </span>
            <blockquote className="mb-8 text-2xl md:text-4xl font-serif leading-tight text-foreground">
              "Skincare shouldn't be complicated. We created Moss to bring simplicity, purity, and
              efficacy back to your daily ritual."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-moss"></div>
              <div>
                <p className="font-medium text-foreground">Elena Rostova</p>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
