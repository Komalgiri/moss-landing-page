import logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-14 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-[12px] tracking-wide text-muted-foreground md:flex-row">
        <img src={logo} alt="MOSS logo" className="h-8 w-auto brightness-0 invert opacity-80" />
        <nav
          className="flex flex-wrap items-center justify-center gap-6"
          aria-label="Footer Navigation"
        >
          <a href="/#journal">Journal</a>
          <a href="/#stockists">Stockists</a>
          <a href="/#contact">Contact</a>
          <a href="/#instagram">Instagram</a>
        </nav>
        <span>© {new Date().getFullYear()} moss studio</span>
      </div>
    </footer>
  );
}
