import { Reveal } from "@/components/Reveal";
import { PillButton } from "@/components/ui/PillButton";

export function Newsletter() {
  return (
    <section className="px-6 py-32 md:px-12 md:py-48 bg-background">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
            Join the Moss Community
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mb-10">
            Subscribe to our newsletter for 10% off your first order, plus exclusive access to new
            drops and skincare tips.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <form
            className="flex flex-col sm:flex-row max-w-md mx-auto gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex-1 rounded-full border border-border bg-transparent px-6 py-4 text-sm text-foreground outline-none transition-colors focus:border-moss focus:ring-1 focus:ring-moss placeholder:text-muted-foreground"
            />
            <PillButton variant="solid" className="py-4">
              Subscribe
            </PillButton>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
