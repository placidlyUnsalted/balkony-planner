# RUNNEN Balcony Planner

A single-file webapp to plan your IKEA RUNNEN floor tile makeover. Paint whole tiles or individual quarter-sections, save designs, and generate a shopping list.

**Live:** https://balkony-planner.pages.dev  
**Password:** `Balkon-0uSF9Svo` (any username)

## Features

- **L-shaped balcony grid** (default: 5 m × 3 m, 110 tiles) with editable footprint
- **Quarter-tile painting** — each 30×30 cm RUNNEN tile has four 15 cm sections you can color independently
- **5 RUNNEN variants** — brown stained, gray-brown, dark gray, light gray, artificial grass (each with realistic wood/grass texture)
- **6 preset patterns** — checker, stripes, diagonal, border, fill (uses colors A and B)
- **Save/load designs** — localStorage, named, with two-step delete confirm
- **Shopping list** — live count per variant with IKEA pack calculations (9 tiles/pack)
- **PNG export** — download the plan to share or print
- **Undo/redo** with keyboard shortcuts (Ctrl+Z / Ctrl+Y)
- **EN/PL languages** — full i18n support
- **Light/Dark/Auto theme** — follows system preference
- **Mobile-optimized** — board-first layout with fixed bottom toolbar on narrow screens

## Usage

Open `index.html` in any modern browser. No build, no server (except `deploy.sh` for Cloudflare Pages).

**Keyboard shortcuts:**
- **P** — Paint tool
- **E** — Erase tool
- **S** — Shape editor (edit balcony floor)
- **Q** — Toggle quarter-tile / full-tile brush
- **Ctrl+Z** — Undo
- **Ctrl+Y** — Redo

**Mobile:** pinch-zoom on the board to zoom in for quarter-tile precision.

## Deployment

```bash
./deploy.sh
```

Deploys to Cloudflare Pages with HTTP Basic Auth (password in `SITE_PASSWORD` secret, sourced from `SITE_PASSWORD.local.txt`).

## Architecture

Single 55 KB HTML file with inline CSS and JavaScript. No dependencies.

- **State:** footprint (set of tiles), tiles (map of id → variant or quarter array)
- **Rendering:** SVG board with deterministic jitter for wood grain/grass variation
- **Persistence:** localStorage for designs and current work; autosave on every change
- **Fast patching:** drag-painting re-renders only the touched tile, not the whole board

## Design

- **Aesthetic:** warm, editorial, hand-made feel (Fraunces + Karla typography, terracotta accents, concrete textures)
- **UX:** zero friction — paint, preview, export in under 2 minutes
- **Accessibility:** proper contrast, keyboard navigation, no modals or overlays

## Git history

```
762cb3f UX pass: mobile-first layout, redo, explicit A/B pattern colors, PNG export
539e0fb Deploy to Cloudflare Pages with Basic Auth gate
3cfe94c RUNNEN balcony tile planner: L-shape grid, quarter-tile editing, EN/PL, light/dark/auto theme
```
