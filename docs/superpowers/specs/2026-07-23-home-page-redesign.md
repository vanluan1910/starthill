# Home Page Redesign — Star Hill Resort

## Overview

Redesign the WelcomePage (slide index 0) from an editorial 2-column layout to a full-screen luxury minimal hero with background image and centered text overlay. The redesign is purely visual — no structural changes to the slide system.

## Design Direction

**Style**: Luxury minimal — Aman / Six Senses resort aesthetic
**Layout**: Full-viewport hero, background image with overlay, content centered
**Colors**: White text on dark gradient overlay, glass UI elements, neutral/warm undertones
**Typography**: Playfair Display (headings) + Inter (body/UI)

## Layout

```
┌──────────────────────────────────────┐
│          [Header - transparent]       │
│                                       │
│         ╔══════════════════╗          │
│         ║   Star Hill      ║          │
│         ║   Resort         ║          │
│         ║                  ║          │
│         ║  Tagline ngắn    ║          │
│         ║                  ║          │
│         ║ [p1] [p2] [p3]  ║          │
│         ║                  ║          │
│         ║ [Khám phá] [Đặt] ║          │
│         ╚══════════════════╝          │
│                                       │
│  📍 Phu Quoc   ★★★★★    [icons]      │
└──────────────────────────────────────┘
```

- Full viewport height (100dvh), first slide in horizontal deck
- Background: hero image with slow-zoom CSS animation
- Overlay: linear gradient black 20% → 50%
- Content: centered, max-width ~800px
- Bottom bar: translucent, location + rating + social icons
- Header: transparent (existing Header component, no changes)

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Text | `#ffffff` | All hero text |
| Overlay | `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%)` | Background overlay |
| Primary CTA BG | `#f5f0eb` | Primary button |
| Primary CTA Text | `#1a1a1a` | Primary button |
| Glass BG | `rgba(255,255,255,0.1)` / `rgba(255,255,255,0.15)` | Secondary button, pills |
| Glass Border | `rgba(255,255,255,0.3)` | Secondary button, pills |
| Bottom bar text | `rgba(255,255,255,0.6)` | Footer info |

## Typography

- **Heading**: Playfair Display, weight 900, `clamp(3rem, 8vw, 6rem)`, `-tracking-tight`
- **Tagline**: Inter, weight 400, `clamp(1rem, 2vw, 1.3rem)`
- **Buttons/pills**: Inter, weight 700, `text-sm`–`text-base`
- **Bottom bar**: Inter, `text-xs`, `text-white/60`

## Animations

- Background: `@keyframes slowZoom` — scale 1 → 1.1 over 30s infinite alternate
- Text: Framer Motion fade-in-up stagger (existing pattern)
- Buttons: hover scale + glow, active scale
- Header: micro parallax on mousemove (from original HTML prototype)

## Component Design

### WelcomePage.jsx (rewritten)
- Props: `{ lang }` (unchanged)
- Removes `import '../styles-home.css'`
- Uses Tailwind utility classes exclusively
- Keeps same hero image URL
- i18n keys used: `welcome.greeting`, `welcome.guest`, `quickInfo.title`, `wifi.title`, `tours.title`, `services.needAssistance`
- 2 CTAs: "Khám phá" → navigate to slide 1, "Đặt ngay" → placeholder
- 3 pills: Quick Info, WiFi, Tours (existing keys)
- Bottom bar: location (hardcoded), rating (hardcoded), icon links (decorative)

### CSS additions (index.css)
- `.text-shadow` utility
- `.hero-zoom` keyframe animation
- `.glass-border` utility (if needed)

### No changes to:
- App.jsx (slide system)
- Header.jsx (navigation)
- SlideBackground.jsx (other slides)
- i18n.js

## Files Changed

1. `src/components/WelcomePage.jsx` — full rewrite
2. `src/index.css` — add animation keyframes + utilities
3. `src/styles-home.css` — no longer imported (can be deleted or kept)

## Testing

- Visual: hero fills screen, text centered and readable on all breakpoints
- Navigation: CTA "Khám phá" navigates to slide 1
- i18n: all text changes with language
- Animation: fade-in-up plays on mount
- Mobile: responsive stack, readable text on small screens
