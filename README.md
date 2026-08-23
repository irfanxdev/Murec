# MUREC Frontend Redesign

## Overview

A premium, cinematic, editorial redesign of the MUREC homepage — built in React, inspired by (but not copying) the minimal, immersive feel of Timeless, and grounded in MUREC's actual brand content: 78 years of family legacy across tobacco, steel, dairy, education, and now real estate, culminating in the Forest Walk villa development in Dasna, Ghaziabad.

## Assignment Objective

Redesign the MUREC homepage as a luxury architectural brand experience rather than a typical real-estate template — large editorial typography, cinematic imagery, generous whitespace, and scroll-based storytelling in place of cards, bright colors, and stock layouts.

## Design Approach

Inspired by the premium, minimal, and editorial design language of the Timeless website while maintaining an original UI built specifically around MUREC's own materials: its family timeline, its stated principles (Trust, Quality, Transparency, Innovation), and the three experiential zones of the Forest Walk masterplan (The Hidden Forest, The Water Miracle, The Street Forest).

Palette, type, and motion follow the token system defined in `src/styles/variables.css`:

- **Color** — ink (`#11110f`), charcoal (`#1a1a17`), cream (`#f4f1ea`), sand (`#d8d0c2`), stone (`#8d897f`), gold (`#9d8257`) used sparingly as an accent only.
- **Type** — Cormorant Garamond for display/headings, Manrope for body/UI.
- **Motion** — Framer Motion, `duration: 0.8s`, `ease: [0.22, 1, 0.36, 1]` throughout, applied at page-load, on scroll-entry, and on hover — never as decoration.

## Features

- Responsive design (1440 / 1024 / 768 / 430 / 375 breakpoints)
- Floating navigation that blurs and pills on scroll; full-viewport mobile menu
- Fast, capped-duration branded preloader
- Scroll-triggered text and image reveals
- Interactive principles accordion (hover on desktop, tap on mobile)
- Desktop-only horizontal scroll storytelling for the Forest Walk masterplan, with an automatic vertical fallback on mobile — no scroll-jacking on touch devices
- Animated statistics counters (real MUREC figures, animate once)
- Accessibility support (focus states, semantic HTML, `prefers-reduced-motion`)
- Lazy-loaded below-the-fold imagery

## Tech Stack

- React 18
- Vite
- Framer Motion
- Plain CSS with custom properties (no CSS framework)

## Installation

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Design Decisions

**Why the layout is editorial.** MUREC's own positioning — "quality before profit, trust before everything" — reads as a heritage brand, not a listings site. Large serif display type, asymmetrical hero composition, and generous whitespace were chosen to match that register instead of a conventional card-grid real-estate template.

**Why the animations are subtle.** All motion uses one consistent easing curve and duration, applied purposefully (reveal on load, reveal on scroll-entry, respond on hover) rather than scattered across every element. Nothing spins, bounces, or repeats beyond a single on-view trigger.

**How mobile differs from desktop.** Hover-dependent interactions (principles accordion activation, project card hover, custom-cursor-style states) are gated behind `(hover: hover)` and `useMediaQuery` checks. The horizontal scroll masterplan section becomes a plain vertical stack under 1025px — deliberately, rather than forcing scroll-jacking onto touch devices. Typography and whitespace scale down via `clamp()` rather than fixed breakpoints for most sizes.

**How MUREC content was preserved.** Copy, statistics, principles, and the Forest Walk masterplan structure are sourced directly from murec.com (home, about, legacy, Forest Walk, and design philosophy pages) rather than invented — including the family timeline (1948–2026), the board members' stated philosophy, and the three real masterplan zones, which map naturally onto the brief's horizontal-scroll section.

## Performance Optimizations

- Images use `loading="lazy"` everywhere except the hero (per the brief)
- No animation libraries beyond Framer Motion; scroll-based effects use its built-in `useScroll`/`useTransform` hooks rather than a second scroll library
- Counters and reveals use `viewport={{ once: true }}` so they never re-trigger
- Preloader duration is time-capped, not tied to actual asset load time

## Accessibility

- Semantic landmarks (`header`, `main`, `nav`, `footer`)
- Descriptive `alt` text sourced from what's actually depicted
- Keyboard-operable navigation and accordion (`role="tab"`, `aria-selected`)
- Visible focus rings via `:focus-visible`
- `prefers-reduced-motion` disables the preloader animation, parallax, and horizontal scroll-jacking site-wide

## Deployment

Live URL: _add your Vercel URL here after deploying_

## Notes

This is a conceptual redesign exercise. Per MUREC's own site disclaimer, all layouts, specifications, and visuals referenced are conceptual and subject to change; nothing here should be read as an offer or solicitation.
