import { Reveal } from "@/components/Reveal";
import { PillButton } from "@/components/ui/PillButton";
import jar from "@/assets/jar.jpg";

export function Philosophy() {
  return (
    <section id="about" className="px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            — Philosophy
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
            New philosophy of selfcare:{" "}
            <em className="italic text-[color:var(--moss-dark)]">healthy skin & hair</em>
          </h2>
          <p className="mt-8 max-w-md text-[13px] leading-relaxed text-muted-foreground">
            We formulate quiet rituals — plant-derived, dermatologist-tested, and calmly effective.
            Nothing loud. Nothing wasted. Just the essentials your skin actually recognises.
          </p>
          <div className="mt-10">
            <PillButton>More about moss</PillButton>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary">
            <img
              src={jar}
              alt="Open cream jar with ceramic lid"
              loading="lazy"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
