import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import hero from "@/assets/hero.jpg";
import jar from "@/assets/jar.jpg";
import bottlesDuo from "@/assets/bottles-duo.jpg";
import trio from "@/assets/trio.jpg";
import lineup from "@/assets/lineup.jpg";
import thumb1 from "@/assets/thumb1.jpg";
import thumb2 from "@/assets/thumb2.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = ["About us", "Catalog", "Skincare", "Hair & body", "Accessories", "Shop"];

function PillButton({
  children,
  variant = "solid",
}: {
  children: ReactNodeLike;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.99]";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-[color:var(--moss-dark)] shadow-sm"
      : "border border-foreground/30 text-foreground hover:bg-foreground/5";
  return <button className={`${base} ${styles}`}>{children}</button>;
}

type ReactNodeLike = React.ReactNode;

function Navbar({ overHero = false }: { overHero?: boolean }) {
  const text = overHero ? "text-white" : "text-foreground";
  return (
    <nav
      className={`absolute left-0 right-0 top-0 z-20 flex items-center justify-between gap-6 px-6 py-6 md:px-12 md:py-8 ${text}`}
    >
      <a href="#" className="flex items-center gap-3 shrink-0" aria-label="moss home">
        <span className="grid h-9 w-9 place-items-center rounded-full border border-current/40 backdrop-blur-sm">
          <span className="font-serif text-lg leading-none">m</span>
        </span>
      </a>

      <ul className="hidden flex-1 items-center justify-center gap-8 text-[13px] font-medium tracking-wide lg:flex">
        {navLinks.map((l) => (
          <li key={l}>
            <a
              href="#"
              className="opacity-90 transition-opacity hover:opacity-100 after:mt-1 after:block after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      <button
        aria-label="Cart"
        className="grid h-9 w-9 place-items-center rounded-full border border-current/40 transition-colors hover:bg-current/10"
      >
        <ShoppingBag size={16} />
      </button>
    </nav>
  );
}

function Hero() {
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
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white/85 text-[11px] tracking-[0.2em] uppercase md:left-12 md:right-12 md:bottom-8">
        <span>Est. 2025</span>
        <span className="hidden md:inline">Pure care by nature</span>
        <span>Scroll ↓</span>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            — Philosophy
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
            New philosophy of selfcare:{" "}
            <em className="italic text-[color:var(--moss-dark)]">healthy skin & hair</em>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
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

function PureCare() {
  return (
    <section className="bg-[color:var(--cream)] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <img
              src={bottlesDuo}
              alt="Two pump bottles on a still-life scene"
              loading="lazy"
              width={1200}
              height={1400}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
            — Nº 02
          </p>
          <h2 className="font-serif text-4xl leading-[1.05] text-foreground md:text-6xl">
            Pure care <em className="italic">by nature</em>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Cold-pressed botanicals, ceramide-rich oils and mineral waters — sourced close to home
            and blended in small batches so every drop stays potent.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 max-w-sm">
            {[
              { src: thumb1, label: "Botanical balm" },
              { src: thumb2, label: "Ceramide jar" },
            ].map((p) => (
              <div key={p.label} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-2xl bg-secondary">
                  <img
                    src={p.src}
                    alt={p.label}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-2 text-[11px] tracking-wide text-muted-foreground">{p.label}</p>
              </div>
            ))}
          </div>

        </Reveal>
      </div>
    </section>
  );
}

function AllInOne() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                — Nº 03
              </p>
              <h2 className="font-serif text-4xl leading-[1.02] text-foreground md:text-6xl">
                All-in-One <br />
                <em className="italic">Skincare</em> Complex
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:justify-self-end">
              A three-step ritual — cleanse, replenish, protect — engineered as one continuous
              formula. Fewer bottles, more results, an easier morning.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 overflow-hidden rounded-[2rem]">
            <img
              src={trio}
              alt="Three skincare bottles arranged on beige backdrop"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="relative mt-24 md:mt-40">
          <h3
            aria-hidden
            className="pointer-events-none select-none font-serif italic text-foreground/[0.07] leading-none text-center"
            style={{ fontSize: "clamp(10rem, 36vw, 32rem)" }}
          >
            new
          </h3>

          <Reveal>
            <div className="-mt-[18vw] overflow-hidden rounded-[2rem] md:-mt-[22vw]">
              <img
                src={lineup}
                alt="Four skincare bottles lined up"
                loading="lazy"
                width={1600}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-14 flex flex-col items-center gap-4 text-center">
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                Twelve new formulas. One quiet routine. Now available in the moss atelier.
              </p>
              <PillButton>Catalog</PillButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-14 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-[12px] tracking-wide text-muted-foreground md:flex-row">
        <span className="font-serif text-2xl text-foreground">moss</span>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="#">Journal</a>
          <a href="#">Stockists</a>
          <a href="#">Contact</a>
          <a href="#">Instagram</a>
        </div>
        <span>© {new Date().getFullYear()} moss studio</span>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Philosophy />
      <PureCare />
      <AllInOne />
      <Footer />
    </main>
  );
}
