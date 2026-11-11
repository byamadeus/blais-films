# Blais Films — Agent Rules

## Site identity
Blais Cameron's filmmaker portfolio. Dark, cinematic, minimal — think streaming platform meets personal director reel.

---

## Design system — read before every change

### Colour palette (Tailwind tokens)
| Token      | Hex       | Use                               |
|------------|-----------|-----------------------------------|
| `surface`  | `#141414` | Page / section backgrounds        |
| `card`     | `#1c1c1c` | Card fills, raised panels         |
| `border`   | `#2a2a2a` | Dividers, card borders            |
| `muted`    | `#a3a3a3` | Secondary / metadata text         |
| `black`    | `#000000` | Base background, gradient targets |
| `white`    | `#ffffff` | Primary text, active UI           |

White with Tailwind opacity modifiers (`white/70`, `white/40`, `white/10`, etc.) is the primary way to express hierarchy. Never introduce new named colours without discussion.

### Typography
- Font: **Satoshi** (variable, 300–900), loaded in `src/index.css`
- Headings (`h1`–`h3`): `font-bold` (700), `leading-tight` (1.2)
- Body `<p>`: `font-semibold` (600), `leading-relaxed` (1.5)
- Labels / eyebrows: `text-xs uppercase tracking-widest text-white/50`
- Never introduce a second typeface.

### Spacing & layout
- Horizontal page padding: `px-6 md:px-10` — use this on every full-width section.
- Sections are separated with `py-8` or `py-12`; use multiples of 4 (Tailwind 4-unit base).
- Max content width on prose/detail blocks: `max-w-xl` or `max-w-sm`.

### Component atoms already defined — reuse, don't reinvent
| Component | File | Notes |
|---|---|---|
| `HeroSection` | `src/components/HeroSection.jsx` | Full-viewport and 85 vh variants, Mux video + still + gradient overlays |
| `CardSection` | `src/components/CardSection.jsx` | Horizontal scroll row; variants: `film`, `commercial`, `press` |
| `Navigation` | `src/components/Navigation.jsx` | Absolute top bar with logo + profile switcher |
| `Footer` | `src/components/Footer.jsx` | Social icon row |
| `VideoPlayer` | `src/components/VideoPlayer.jsx` | Mux inline player |
| `ContentSection` | `src/components/ContentSection.jsx` | Prose + metadata layout |
| `DirectorFeature` | `src/components/DirectorFeature.jsx` | Full-bleed director highlight |

Before adding any new UI, check whether an existing component or variant covers the need.

### Interaction patterns
- Hover states use `transition-colors` or `transition-opacity` (300–500 ms). No jarring transitions.
- Scale on hover: `group-hover:scale-105` with `duration-500` — only on media thumbnails.
- Overlays: `bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300`.
- Buttons: primary = `bg-white text-black rounded hover:bg-white/90`; secondary = `bg-white/20 text-white border border-white/20 hover:bg-white/30`.

### Data files — single source of truth
- Films: `src/data/films.js`
- Press: `src/data/press.js`
- About/bio: `src/data/about.js`

Always update data files rather than hard-coding copy inside components.

---

## Development workflow
1. All changes go on the designated feature branch — never commit directly to `main`.
2. After every push, share the Vercel preview URL for the branch.
3. Wait for explicit confirmation before merging or pushing to `main`.
4. Run `npm run build` locally (or verify no Vite/TypeScript errors) before pushing.

---

## Style rules
- Atomic first: build from the existing colour tokens, spacing scale, and components. Only introduce net-new elements when the existing system genuinely cannot express the design.
- Keep the visual language dark, spare, and cinematic. If something reads as "generic web template" rather than "arthouse streaming platform", reconsider it.
- No light backgrounds, no bright accent colours, no decorative gradients beyond the black-to-transparent film overlays already in use.
- No emoji, no decorative icons beyond the minimal SVG set already in use.
- Copy tone: understated and confident. No marketing superlatives.
