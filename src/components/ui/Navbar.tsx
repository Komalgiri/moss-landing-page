import { ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.svg";

const navLinks = [
  { label: "About us", href: "/#about" },
  { label: "Catalog", href: "/#catalog" },
  { label: "Skincare", href: "/#skincare" },
  { label: "Hair & body", href: "/#hair-body" },
  { label: "Accessories", href: "/#accessories" },
  { label: "Shop", href: "/#shop" },
];

export function Navbar({ overHero = false }: { overHero?: boolean }) {
  const text = overHero ? "text-white" : "text-foreground";
  return (
    <nav
      className={`absolute left-0 right-0 top-0 z-20 flex items-center justify-between gap-6 px-6 py-6 md:px-12 md:py-8 ${text}`}
    >
      <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="moss home">
        <img src={logo} alt="MOSS logo" className={`h-9 w-auto ${overHero ? "brightness-0 invert" : "brightness-0 invert opacity-90"}`} />
      </Link>

      <ul className="hidden flex-1 items-center justify-center gap-8 text-[13px] font-medium tracking-wide lg:flex">
        {navLinks.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="opacity-90 transition-opacity hover:opacity-100 after:mt-1 after:block after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
            >
              {l.label}
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
