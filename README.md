<div align="center">

  # 🌿 M O S S
  ### Luxury Botanical Skincare & High-End Wellness Experience

  <p align="center">
    <strong>An editorial-grade, motion-driven luxury skincare web application engineered with TanStack Start, React 19, TypeScript, and Tailwind CSS v4.</strong>
  </p>

  <p align="center">
    <a href="https://github.com/Komalgiri15/moss-landing-page">
      <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    </a>
    <a href="https://tanstack.com/start">
      <img src="https://img.shields.io/badge/TanStack_Start-1.168-FF4154?style=for-the-badge&logo=react&logoColor=white" alt="TanStack Start" />
    </a>
    <a href="https://tanstack.com/router">
      <img src="https://img.shields.io/badge/TanStack_Router-1.170-22c55e?style=for-the-badge&logo=react&logoColor=white" alt="TanStack Router" />
    </a>
    <a href="https://tailwindcss.com/">
      <img src="https://img.shields.io/badge/Tailwind_CSS-v4.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5.8" />
    </a>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 8" />
    </a>
  </p>

  <p align="center">
    <a href="#-visual-showcase">Visual Showcase</a> •
    <a href="#-portfolio--recruiter-value">Portfolio Value</a> •
    <a href="#-key-features--page-sections">Page Sections</a> •
    <a href="#-design-system--editorial-aesthetics">Design System</a> •
    <a href="#-technical-architecture">Architecture</a> •
    <a href="#-quick-start">Quick Start</a> •
    <a href="#-available-for-hire">Hire Me</a>
  </p>

  <br />

  <p align="center">
    <img src="src/assets/screenshots/01-hero-section.png" alt="MOSS Hero Section — Beauty That Feels as Good as It Looks" width="100%" />
  </p>

</div>

---

## 🌟 Executive Overview

**MOSS** is an editorial-first skincare landing experience inspired by luxury apothecary and clean botanical wellness brands (such as Aesop, Furtuna Skin, and Le Labo). Designed and developed to showcase **advanced frontend engineering**, **creative art direction**, and **pixel-perfect UI execution**, this project shows how to translate luxury branding into a responsive, high-performance web experience.

Rather than relying on generic landing page templates or standard component blocks, MOSS features:
- **Warm, earthy OKLCH color science** with tailored espresso taupes (`--ink`), soft creams (`--cream`), and muted sage tones (`--moss`).
- **High-fashion editorial typography** combining `Playfair Display` with geometric sans `Inter`.
- **Custom viewport scroll reveals** powered by lightweight `IntersectionObserver` physics.
- **Asymmetric Bento Grids**, floating glassmorphism social proof badges, and organic wave section transitions.

---

## 📸 Visual Showcase

### 1. Hero Landing Section: *"Beauty That Feels as Good as It Looks"*
> *High-contrast editorial typography paired with floating review bubbles, pill photo cutouts, and hero product staging for Velvet Camellia Cream.*

<p align="center">
  <img src="src/assets/screenshots/01-hero-section.png" alt="MOSS Hero Section" width="100%" />
</p>

- **Editorial Typography:** High-contrast serif headlines with responsive line-height and generous negative space.
- **Floating Social Proof Cards:** Layered interactive micro-cards with customer ratings, subtle drop-shadows, and smooth hover physics.
- **Product Staging:** Luminosity-blended studio product staging for *AURA BOTANICA Velvet Camellia Cream* designed for high-conversion luxury retail.

---

### 2. "Purely Beneficial" Bento Grid
> *Asymmetric 3-column layout highlighting core brand pillars: Vegan formulation, clinical testing, deep hydration, and clean ingredients.*

<p align="center">
  <img src="src/assets/screenshots/02-benefits-bento-grid.png" alt="MOSS Benefits Bento Grid" width="100%" />
</p>

- **Adaptive Bento Architecture:** Asymmetric span cards (`col-span-2`, `col-span-1`) with auto-row scaling.
- **Split Content & Image Masking:** Text metadata on one half and gradient-masked botanical imagery on the other.
- **Iconography & Subtle Accents:** Lucide icons embedded in circular pill badges for instant visual scanning.

---

### 3. Product Gallery & Social Proof Showcase
> *Detailed view of the product composition, verified 5-star customer ratings, and pill avatar accents.*

<p align="center">
  <img src="src/assets/screenshots/03-product-showcase.png" alt="MOSS Product Gallery & Social Proof Showcase" width="100%" />
</p>

- **Customer Trust Indicators:** Verified customer feedback (`"A miracle skincare solution. High quality, effective, simply perfect."`) layered directly onto the composition.
- **Tactile UI Elements:** Reusable pill button CTA with hover scaling and border highlights.

---

### 4. "All-in-One Skincare Complex" & Typographic Watermark
> *Ghost watermark typography layered beneath dual product lineups and catalog navigation.*

<p align="center">
  <img src="src/assets/screenshots/04-all-in-one-complex.png" alt="MOSS All-in-One Complex" width="100%" />
</p>

- **Watermark Layering:** Subtle backdrop typography (*"new"*) rendered at fluid viewport sizes (`clamp(12rem, 35vw, 36rem)`) with zero layout interference (`pointer-events-none`).
- **Composition Stagger:** Staggered media layout separating the 3-bottle trio from the 4-step lineup with clean editorial narrative.
- **Branded Pill Actions:** Reusable outline and solid pill buttons engineered for effortless user interaction.

---

## 💼 Portfolio & Recruiter Value

> **Target Audience:** Freelance Clients, Frontend Engineering Leads, and Creative Directors looking for a developer who bridges the gap between **high-end design sensitivity** and **scalable code architecture**.

| Skill Area | Implementation in MOSS | Business & Engineering Impact |
| :--- | :--- | :--- |
| **Modern Stack & SSR Engine** | **TanStack Start & TanStack Router** with Nitro engine and React 19. | First-class routing, SEO-ready metadata headers, type-safe navigation, and zero client-side routing drift. |
| **Modern CSS & Tokenization** | **Tailwind CSS v4** with native `@theme inline` and custom **OKLCH** color values. | Uniform color perception across modern displays (P3 wide gamut); rapid design iteration without bloated stylesheets. |
| **Micro-Animations & Motion** | Custom `IntersectionObserver` reveal engine (`Reveal.tsx`) with staggered delays. | High-end, silky smooth scroll entrances without the heavy bundle size or CPU penalty of large external physics engines. |
| **Bespoke Layout Engineering** | Fluid `clamp()` typography, CSS Bento grids, and multi-layered glassmorphic depth. | Eliminates cookie-cutter template feel; produces custom high-converting branded experiences that stand out from competitors. |
| **Component Modularity** | Clean separation into semantic sections (`Hero`, `Benefits`, `Philosophy`, `ProductHighlight`, `AllInOne`, `InstaFeed`). | Plug-and-play architecture ready for headless CMS (Sanity, Strapi, Contentful) or Shopify storefront integration. |

---

## 🌿 Key Features & Page Sections

### 1. Hero Landing Section
- Editorial headline: *"Beauty That Feels as Good as It Looks"*.
- Featured hero product: *Aura Botanica Velvet Camellia Cream*.
- Floating social proof review badges with verified 5-star customer ratings and pill portrait cutouts.
- Direct "Shop now" pill action button.

### 2. Bento Grid Benefits (`Benefits.tsx`)
- Interactive cards showcasing 100% Vegan, Clinically Proven, Deep Hydration, and Clean Formulation.
- Subtle card zoom and gradient overlays on hover.

### 3. All-in-One Skincare Complex (`AllInOne.tsx`)
- Oversized typographic watermark background (*"new"*) adding depth without cluttering readability.
- Dual-stagger product showcase highlighting multifunctional formulas and minimal skincare routines.

### 4. 3D Product Highlight Spec (`ProductHighlight.tsx`)
- Floating frosted-glass spec card (`backdrop-blur-2xl`) featuring ingredient tags, localized pricing, and quick-action purchase button.
- Smooth hover scaling on product packaging rendering high tactile quality.

### 5. Brand Philosophy & Ritual (`Philosophy.tsx`)
- Editorial layout emphasizing the *"healthy skin & hair"* ethos.
- Warm textured ceramic jar imagery coupled with minimalist typographic storytelling.

### 6. Pure Care by Nature (`PureCare.tsx`)
- Multi-aspect ratio image composition showing minimalist product packaging in real-world lifestyle lighting.

### 7. Founder's Note (`Founder.tsx`)
- Authentic brand connection featuring portrait imagery and a personal message from founder Elena Rostova.

### 8. Curated Instagram Community Grid (`InstaFeed.tsx`)
- Asymmetric 2x2 and 1x1 photo grid replicating a live lifestyle social feed.
- Hover-activated branded overlays with smooth icon reveal transitions.

### 9. Organic Wave Transitions (`Wave.tsx`)
- SVG organic wave dividers replacing harsh geometric borders, maintaining a gentle, serene rhythm between sections.

### 10. Community Newsletter & Footer (`Newsletter.tsx` & `Footer.tsx`)
- Accessible email capture form with focused state styling.
- Comprehensive footer with secondary navigation, journal links, and copyright metadata.

---

## 🎨 Design System & Editorial Aesthetics

### Typography Hierarchy
- **Editorial Headings:** [`Playfair Display`](https://fonts.google.com/specimen/Playfair+Display) — Elegant, high-contrast serif giving the brand an artisanal, luxury magazine presence.
- **Body & Metadata:** [`Inter`](https://fonts.google.com/specimen/Inter) — Clean, legible modern sans with OpenType feature settings (`ss01`, `cv11`) for maximum readability.

### OKLCH Color Palette
The color scheme leverages modern **OKLCH color space** for rich tonal depth and consistent luminance across displays:

```css
/* Deep espresso taupe canvas */
--ink: oklch(0.24 0.02 70);

/* Elevated surface taupe */
--dark-surface: oklch(0.28 0.02 70);

/* Warm cream text and highlights */
--cream: oklch(0.95 0.02 85);

/* Fresh botanical sage accent */
--moss: oklch(0.70 0.05 130);

/* Sage hover state */
--moss-dark: oklch(0.60 0.05 130);
```

---

## 🏗 Technical Architecture

```text
moss-landing-page/
├── public/
│   ├── assets/               # Production image assets (cleansers, serums, portraits)
│   ├── favicon.svg           # Branded botanical SVG favicon
│   └── favicon.ico
├── src/
│   ├── assets/               # Brand logos, high-res photography, and UI captures
│   │   ├── screenshots/      # Organized high-res README showcase captures
│   │   │   ├── 01-hero-section.png
│   │   │   ├── 02-benefits-bento-grid.png
│   │   │   ├── 03-product-showcase.png
│   │   │   └── 04-all-in-one-complex.png
│   │   └── logo.svg          # Vector brand logo
│   ├── components/
│   │   ├── Reveal.tsx        # IntersectionObserver scroll-trigger animation wrapper
│   │   ├── sections/         # Modular landing page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── AllInOne.tsx
│   │   │   ├── ProductHighlight.tsx
│   │   │   ├── Philosophy.tsx
│   │   │   ├── PureCare.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── Founder.tsx
│   │   │   ├── InstaFeed.tsx
│   │   │   └── Newsletter.tsx
│   │   └── ui/               # Reusable UI primitives
│   │       ├── Navbar.tsx
│   │       ├── Footer.tsx
│   │       ├── PillButton.tsx
│   │       ├── Wave.tsx
│   │       └── ...           # Accessible Radix primitives
│   ├── routes/
│   │   ├── __root.tsx        # HTML document shell, meta tags & web fonts
│   │   └── index.tsx         # Assembled landing page route
│   ├── router.tsx            # TanStack Router configuration
│   ├── start.ts              # TanStack Start entry point
│   ├── server.ts             # Nitro server handler
│   └── styles.css            # Tailwind CSS v4 directives & OKLCH design tokens
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚡ Quick Start

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **Package Manager**: `npm` (or `bun` / `pnpm`)

### 1. Clone the repository
```bash
git clone https://github.com/Komalgiri15/moss-landing-page.git
cd moss-landing-page
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the Vite dev URL shown in your console) to view the application with instant Hot Module Replacement (HMR).

### 4. Build for production
```bash
npm run build
```

### 5. Preview production build
```bash
npm run preview
```

---

## 🛠 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts Vite dev server with Hot Module Replacement |
| `npm run build` | Compiles optimized production bundle via Vite & Nitro |
| `npm run preview` | Locally serves the production build |
| `npm run lint` | Runs ESLint across all TypeScript and React files |
| `npm run format` | Formats codebase using Prettier |

---

## 🤝 Available for Freelance & Frontend Roles

Looking for a frontend developer who can transform design concepts into pixel-perfect, high-converting digital products?

### What I Bring to Your Team / Project:
- **Design-to-Code Precision:** 100% faithful implementation of Figma designs into clean, responsive React/TypeScript code.
- **Modern Architecture:** Deep experience with React 19, Next.js, TanStack Start/Router, and Tailwind CSS.
- **Conversion-Focused Aesthetics:** Creating bespoke luxury experiences that elevate brand prestige and drive user action.
- **Performance & Accessibility:** Semantic HTML, fast load times, and fluid micro-animations without bloated dependencies.

### Connect With Me:
- **GitHub:** [@Komalgiri15](https://github.com/Komalgiri15)
- **Role Openings:** Frontend Engineer • React Developer • UI/UX Developer • Freelance Web Consultant

---

<div align="center">
  <p>Crafted with care & precision • <strong>moss studio</strong> © 2025–2026</p>
</div>
