# StartHill Boutique Editorial Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign StartHill into a bright Boutique Editorial resort guide that works well on desktop and mobile and looks distinct from `D:\SunsetHill`.

**Architecture:** Keep the existing Vite React slide architecture, i18n keys, lazy loading, hash navigation, and swipe navigation. Apply the redesign by replacing the home slide composition, restyling the global slide shell, and updating header/content surfaces to the approved cream/sage/deep-teal editorial system.

**Tech Stack:** React 19, Vite 8, Tailwind CSS utility classes, plain CSS in `src/index.css` and `src/styles-home.css`, framer-motion already used by `WelcomePage` and `Header`.

---

## File Structure

- Modify `src/index.css`: define reusable editorial utility classes for page background, cards, section headings, icon badges, and subtle shadows so individual slides can align without duplicating long Tailwind class strings.
- Modify `src/styles-home.css`: replace the current dark organic home hero with the Boutique Editorial home layout and responsive rules.
- Modify `src/components/WelcomePage.jsx`: remove SVG organic panel constants and render the editorial two-column home with a feature image, inset guide card, and quick category pills.
- Modify `src/components/Header.jsx`: restyle desktop nav, language dropdown, mobile controls, and drawer to the light editorial palette while preserving behavior.
- Modify `src/components/SlideBackground.jsx`: replace the dark/photo-based slide background treatment with a warm paper/sage editorial background.
- Modify `src/App.jsx`: keep slide mechanics intact; adjust bottom dots styling so it fits the light theme and does not visually fight the redesigned home.
- Modify content slides as needed: start with `src/components/QuickInfo.jsx` and `src/components/WifiReception.jsx`, then apply the same reusable classes to the remaining slide components only where their existing dark teal boxes/card treatments conflict with the new visual system.

## Task 1: Baseline Verification

**Files:**
- Read-only: current project files

- [x] **Step 1: Run the current production build**

Run: `npm run build`

Expected: command exits with code 0 and Vite writes `dist/` assets.

- [x] **Step 2: Run the current lint command**

Run: `npm run lint`

Expected: command exits with code 0 or reports pre-existing lint findings. If lint fails before any implementation, record the exact output in the task notes and do not treat those findings as redesign regressions.

- [x] **Step 3: Start local app for reference**

Run: `npm run dev -- --host 127.0.0.1`

Expected: Vite prints a local URL such as `http://127.0.0.1:5173/`.

- [x] **Step 4: Capture visual baseline notes**

Open the local app on desktop width and narrow mobile width. Note these baseline points before changing code:

```text
Home: dark teal organic panel with gold curved line.
Header: dark transparent/dark teal nav.
Slides: light cards over image-backed SlideBackground, with many dark teal icon blocks.
Bottom dots: dark translucent pill with white inactive dots.
```

Task 1 verification artifact: `docs/superpowers/verification/2026-07-22-baseline.md`. Visual baseline notes were recorded from the plan; no browser automation or screenshot tool is available in this environment.

## Task 2: Global Editorial Theme Utilities

**Files:**
- Modify: `src/index.css`

- [x] **Step 1: Add reusable editorial classes**

Append these classes after the existing CSS in `src/index.css`:

```css
:root {
  --sh-paper: #f8f1e4;
  --sh-paper-soft: #fffaf0;
  --sh-sand: #eadcc3;
  --sh-sage: #c9d8cb;
  --sh-teal: #153b39;
  --sh-teal-soft: #2f6661;
  --sh-champagne: #c8913c;
  --sh-ink: #173331;
  --sh-muted: #66736f;
  --sh-border: rgba(32, 64, 60, 0.14);
  --sh-card-shadow: 0 22px 60px rgba(30, 53, 49, 0.10);
}

body {
  background: var(--sh-paper);
  color: var(--sh-ink);
}

.editorial-page {
  color: var(--sh-ink);
}

.editorial-card {
  border: 1px solid var(--sh-border);
  border-radius: 28px;
  background: rgba(255, 250, 240, 0.88);
  box-shadow: var(--sh-card-shadow);
}

.editorial-card-soft {
  border: 1px solid rgba(200, 145, 60, 0.18);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.68);
}

.editorial-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 16px;
  background: #153b39;
  color: #f0c985;
  box-shadow: 0 12px 28px rgba(21, 59, 57, 0.16);
}

.editorial-kicker {
  color: var(--sh-champagne);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.editorial-title {
  color: var(--sh-teal);
  font-family: Georgia, "Times New Roman", serif;
  letter-spacing: -0.035em;
}

.editorial-muted {
  color: var(--sh-muted);
}
```

- [x] **Step 2: Run build to catch CSS syntax issues**

Run: `npm run build`

Expected: PASS. If it fails, fix the exact CSS syntax error before continuing.

Task 2 verification: `npm run build` passed with Vite production build output in `dist/`. Review cleanup merged the editorial body colors into the existing top `body` rule and removed the duplicate global `body` rule.

## Task 3: Redesign Slide Background And Bottom Navigation

**Files:**
- Modify: `src/components/SlideBackground.jsx`
- Modify: `src/App.jsx`

- [x] **Step 1: Replace `SlideBackground` background**

Change `src/components/SlideBackground.jsx` to remove the image dependency from the rendered background and use warm editorial gradients:

```jsx
const SLIDE_BACKGROUND_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1784272310/611558c3-87dc-421e-83f5-164f5d78aa17_h4kekh.png';

function SlideBackground({ children, className = '' }) {
  return (
    <div
      className={`relative min-w-full h-full overflow-y-auto overscroll-y-auto bg-[#f8f1e4] ${className}`}
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_10%,rgba(201,216,203,0.62),transparent_30%),radial-gradient(circle_at_85%_8%,rgba(200,145,60,0.16),transparent_26%),linear-gradient(135deg,#fffaf0_0%,#f4ead8_46%,#e8f0e7_100%)]" />
      <div className="absolute inset-x-0 top-0 h-28 pointer-events-none bg-gradient-to-b from-white/70 to-transparent" />
      <div className="relative z-[1] min-h-full">
        {children}
      </div>
    </div>
  );
}

export { SLIDE_BACKGROUND_IMAGE };
export default SlideBackground;
```

- [x] **Step 2: Restyle bottom slide dots in `src/App.jsx`**

Change the bottom `nav` classes to the light editorial treatment:

```jsx
<nav className="fixed bottom-4 left-0 right-0 flex justify-center z-50 pointer-events-none md:bottom-6">
  <div className="flex gap-2.5 rounded-full border border-[#d8c6aa]/70 bg-[#fffaf0]/82 px-4 py-2.5 shadow-[0_16px_40px_rgba(30,53,49,0.14)] backdrop-blur pointer-events-auto">
    {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
      <button
        key={i}
        aria-label={`Go to slide ${i + 1}`}
        aria-current={slide === i ? 'page' : undefined}
        className={`h-2.5 rounded-full transition-all duration-300 ${
          slide === i ? 'w-7 bg-[#153b39]' : 'w-2.5 bg-[#c8b895] hover:bg-[#c8913c]'
        }`}
        onClick={() => goTo(i)}
        type="button"
      />
    ))}
  </div>
</nav>
```

- [x] **Step 3: Run build**

Run: `npm run build`

Expected: PASS. Verify the bottom dots still navigate slides.

Task 3 notes: Replaced the rendered slide image background with warm editorial gradients while preserving `SLIDE_BACKGROUND_IMAGE`. Restyled the bottom slide dots with the light editorial treatment and added `aria-current="page"` for the active slide. `npm run build` passed on 2026-07-22.

## Task 4: Replace Home With Boutique Editorial Layout

**Files:**
- Modify: `src/components/WelcomePage.jsx`
- Modify: `src/styles-home.css`

- [x] **Step 1: Replace `WelcomePage.jsx` structure**

Use the existing translations and framer-motion import, but remove the SVG path constants. Render this structure:

```jsx
import { motion } from 'framer-motion';
import { t } from '../i18n';
import '../styles-home.css';

const HERO_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1784263298/0afe78be-233f-431c-b582-4558d0d58c40_i21b90.png';

const heroCopyVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
};

function WelcomePage({ lang = 'en' }) {
  return (
    <main className="sunset-home sh-editorial-home" style={{ '--sh-hero-img': `url('${HERO_IMAGE}')` }}>
      <section className="sh-home-shell" aria-labelledby="home-title">
        <motion.div className="sh-home-copy" variants={heroCopyVariants} initial="hidden" animate="visible">
          <motion.div className="sh-brand-lockup" variants={heroItemVariants}>
            <span className="sh-brand-mark">SH</span>
            <span className="sh-brand-text">StartHill Guest Guide</span>
          </motion.div>
          <motion.p className="sh-home-kicker" variants={heroItemVariants}>{t('welcome.greeting', lang)}</motion.p>
          <motion.h1 id="home-title" variants={heroItemVariants}>Star Hill Resort</motion.h1>
          <motion.p className="sh-home-lead" variants={heroItemVariants}>{t('welcome.guest', lang)}</motion.p>
          <motion.p className="sh-home-body" variants={heroItemVariants}>{t('welcome.para1', lang)}</motion.p>
          <motion.p className="sh-home-body" variants={heroItemVariants}>{t('welcome.para2', lang)}</motion.p>
          <motion.div className="sh-home-pills" variants={heroItemVariants} aria-label="Guest guide highlights">
            <span>{t('quickInfo.title', lang)}</span>
            <span>{t('wifi.title', lang)}</span>
            <span>{t('tours.title', lang)}</span>
          </motion.div>
        </motion.div>

        <motion.div className="sh-home-visual" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <div className="sh-home-photo" role="img" aria-label="Star Hill Resort" />
          <div className="sh-arrival-card">
            <span className="sh-arrival-label">Boutique Stay</span>
            <strong>Island comfort, made simple</strong>
            <p>{t('welcome.para1', lang)}</p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default WelcomePage;
```

- [x] **Step 2: Replace `src/styles-home.css` with home-specific editorial CSS**

Keep the `.sunset-home` class name for compatibility, but make it editorial. Use this complete CSS:

```css
.sunset-home {
  --sh-paper: #f8f1e4;
  --sh-paper-soft: #fffaf0;
  --sh-sand: #eadcc3;
  --sh-sage: #c9d8cb;
  --sh-teal: #153b39;
  --sh-teal-soft: #2f6661;
  --sh-champagne: #c8913c;
  --sh-ink: #173331;
  --sh-muted: #66736f;
  --sh-border: rgba(32, 64, 60, 0.14);
  position: relative;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  color: var(--sh-ink);
  font-family: Inter, "Plus Jakarta Sans", system-ui, sans-serif;
  background:
    radial-gradient(circle at 10% 8%, rgba(201, 216, 203, 0.78), transparent 30%),
    radial-gradient(circle at 90% 10%, rgba(200, 145, 60, 0.14), transparent 25%),
    linear-gradient(135deg, #fffaf0 0%, #f4ead8 48%, #e8f0e7 100%);
}

.sunset-home * { box-sizing: border-box; }

.sh-home-shell {
  min-height: 100dvh;
  display: grid;
  grid-template-columns: minmax(320px, 0.82fr) minmax(420px, 1.18fr);
  align-items: center;
  gap: clamp(28px, 5vw, 72px);
  width: min(100% - 48px, 1220px);
  margin: 0 auto;
  padding: clamp(96px, 11vw, 132px) 0 86px;
}

.sh-home-copy {
  position: relative;
  z-index: 2;
  padding: clamp(24px, 4vw, 42px);
  border: 1px solid var(--sh-border);
  border-radius: 34px;
  background: rgba(255, 250, 240, 0.74);
  box-shadow: 0 24px 70px rgba(30, 53, 49, 0.11);
  backdrop-filter: blur(18px);
}

.sh-brand-lockup {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: clamp(24px, 5vw, 54px);
}

.sh-brand-mark {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 17px;
  background: var(--sh-teal);
  color: #f0c985;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 800;
  letter-spacing: -0.05em;
}

.sh-brand-text,
.sh-home-kicker,
.sh-arrival-label {
  color: var(--sh-champagne);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.sh-home-kicker { margin: 0 0 14px; }

.sh-home-copy h1 {
  margin: 0;
  color: var(--sh-teal);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(3.2rem, 7vw, 6.8rem);
  font-weight: 600;
  line-height: 0.88;
  letter-spacing: -0.07em;
}

.sh-home-lead {
  margin: clamp(20px, 3vw, 30px) 0 0;
  color: var(--sh-teal);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.25rem, 2vw, 2rem);
  line-height: 1.35;
}

.sh-home-body {
  margin: 16px 0 0;
  color: var(--sh-muted);
  font-size: clamp(0.98rem, 1.2vw, 1.12rem);
  line-height: 1.78;
}

.sh-home-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.sh-home-pills span {
  border: 1px solid rgba(32, 64, 60, 0.13);
  border-radius: 999px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.54);
  color: var(--sh-teal);
  font-size: 0.82rem;
  font-weight: 700;
}

.sh-home-visual {
  position: relative;
  min-height: min(68vh, 660px);
}

.sh-home-photo {
  position: absolute;
  inset: 0;
  border: 12px solid rgba(255, 250, 240, 0.78);
  border-radius: 42px;
  background-image:
    linear-gradient(180deg, rgba(21, 59, 57, 0.02), rgba(21, 59, 57, 0.16)),
    var(--sh-hero-img);
  background-position: center;
  background-size: cover;
  box-shadow: 0 34px 90px rgba(30, 53, 49, 0.18);
}

.sh-arrival-card {
  position: absolute;
  right: clamp(18px, 4vw, 44px);
  bottom: clamp(18px, 4vw, 44px);
  width: min(320px, calc(100% - 36px));
  padding: 22px;
  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 26px;
  background: rgba(255, 250, 240, 0.86);
  box-shadow: 0 18px 52px rgba(30, 53, 49, 0.18);
  backdrop-filter: blur(16px);
}

.sh-arrival-card strong {
  display: block;
  margin-top: 8px;
  color: var(--sh-teal);
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.45rem;
  line-height: 1.1;
}

.sh-arrival-card p {
  margin: 10px 0 0;
  color: var(--sh-muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .sh-home-shell {
    grid-template-columns: 1fr;
    width: min(100% - 28px, 620px);
    padding: 72px 0 86px;
    gap: 18px;
  }

  .sh-home-visual {
    order: -1;
    min-height: 330px;
  }

  .sh-home-photo {
    border-width: 8px;
    border-radius: 30px;
  }

  .sh-home-copy {
    border-radius: 28px;
    padding: 24px;
  }

  .sh-brand-lockup {
    margin-bottom: 22px;
  }

  .sh-home-copy h1 {
    font-size: clamp(2.7rem, 15vw, 4.6rem);
  }

  .sh-arrival-card {
    left: 16px;
    right: 16px;
    bottom: 16px;
    width: auto;
    padding: 18px;
  }
}

@media (max-width: 420px) {
  .sh-home-shell {
    width: min(100% - 22px, 620px);
    padding-top: 66px;
  }

  .sh-home-visual {
    min-height: 300px;
  }

  .sh-home-copy {
    padding: 20px;
  }

  .sh-home-pills span {
    width: 100%;
    text-align: center;
  }
}
```

- [x] **Step 3: Run build**

Run: `npm run build`

Expected: PASS. Verify home displays at slide 1 and does not horizontally overflow at narrow widths.

Task 4 notes: Replaced the dark organic SVG home hero with the Boutique Editorial two-column layout, feature image, inset arrival card, and quick category pills using existing translations and framer-motion. Replaced `src/styles-home.css` with the home-specific editorial CSS while preserving the `.sunset-home` compatibility class. First build caught a JSX closing tag typo in the new pills block; after fixing it, `npm run build` passed on 2026-07-22. Review fixes replaced hardcoded user-facing/accessibility strings with existing translation keys, made the hero image decorative, allowed vertical home overflow scrolling, and added scoped reduced-motion CSS; `npm run lint` and `npm run build` passed on 2026-07-22. Follow-up clipping fix set `.sunset-home` to `height: 100%` so it becomes the vertical scroll container inside App's clipped home pane while `.sh-home-shell` remains min-height based.

## Task 5: Restyle Header And Menus

**Files:**
- Modify: `src/components/Header.jsx`

- [x] **Step 1: Update desktop header classes**

In `Header.jsx`, change the desktop header/nav/button/dropdown classes to use light editorial surfaces. Preserve `MENU_ITEMS`, `LANGUAGES`, `handleNavigate`, and dropdown behavior.

Use these class patterns:

```jsx
<header className="hidden md:flex fixed top-4 left-0 right-0 z-50 justify-center px-5">
  <nav className="flex max-w-[calc(100vw-40px)] items-center gap-1 overflow-x-auto rounded-full border border-[#d8c6aa]/70 bg-[#fffaf0]/82 px-3 py-2 shadow-[0_16px_44px_rgba(30,53,49,0.13)] backdrop-blur-xl">
```

For nav item buttons:

```jsx
className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-bold transition-all duration-200 lg:px-4 ${
  currentSlide === item.slide
    ? 'bg-[#153b39] text-[#fffaf0] shadow-[0_10px_22px_rgba(21,59,57,0.18)]'
    : 'text-[#2f5551] hover:bg-white/70 hover:text-[#153b39]'
}`}
```

For desktop language trigger:

```jsx
className="flex items-center gap-2 rounded-full px-3 py-2 text-xs font-bold text-[#2f5551] transition-colors hover:bg-white/70 hover:text-[#153b39]"
```

For desktop dropdown panel:

```jsx
className="absolute right-0 mt-2 min-w-[150px] rounded-2xl border border-[#d8c6aa]/70 bg-[#fffaf0] py-2 shadow-xl z-50"
```

- [x] **Step 2: Update mobile controls and drawer classes**

Use light floating controls:

```jsx
className="fixed top-3 left-3 z-50 h-10 w-10 rounded-full border border-[#d8c6aa]/70 bg-[#fffaf0]/88 text-[#153b39] shadow-lg backdrop-blur flex items-center justify-center group"
```

Use this language trigger pattern:

```jsx
className="w-full h-10 rounded-full border border-[#d8c6aa]/70 bg-[#fffaf0]/88 px-3 text-xs font-bold text-[#153b39] shadow-lg backdrop-blur flex items-center justify-between gap-1"
```

Use this mobile drawer panel pattern:

```jsx
className="fixed left-0 top-0 h-full w-72 bg-[#fffaf0] shadow-2xl z-[70] py-6 overflow-y-auto border-r border-[#d8c6aa]/70"
```

Use deep teal for selected drawer items and muted teal for unselected items.

- [x] **Step 3: Add `aria-current` to nav buttons**

For each desktop and mobile menu item button, add:

```jsx
aria-current={currentSlide === item.slide ? 'page' : undefined}
```

- [x] **Step 4: Run lint and build**

Run: `npm run lint`

Expected: PASS or only the same pre-existing lint findings recorded in Task 1.

Run: `npm run build`

Expected: PASS. Verify menu opens/closes, language dropdown opens/closes, and menu navigation still changes slides.

Task 5 notes: Restyled the desktop header as a floating cream editorial pill with deep teal text, active deep teal nav pills, and a matching light language dropdown. Restyled mobile hamburger/language controls as floating light pills and converted the drawer into a light editorial panel with deep teal selected items and muted teal inactive items. Preserved `MENU_ITEMS`, `LANGUAGES`, navigation, and language behavior. Added `aria-current` to desktop/mobile nav buttons plus menu and language expanded/control relationships, menu semantics for language dropdowns, drawer dialog labeling, mobile nav semantics, overlay hiding, and a close button aria-label. `npm run lint` and `npm run build` passed on 2026-07-22.

Task 5 quality fix notes: Replaced drawer modal dialog semantics with non-modal `aside`/navigation semantics because focus trapping is not implemented. Removed ARIA menu/menuitem roles from language dropdowns and kept them as labeled grouped buttons. Added Escape handling to close the drawer/dropdowns and made drawer/language dropdown state mutually exclusive so mobile controls do not overlap. `npm run lint` and `npm run build` passed on 2026-07-22.

## Task 6: Apply Editorial Polish To QuickInfo And WifiReception

**Files:**
- Modify: `src/components/QuickInfo.jsx`
- Modify: `src/components/WifiReception.jsx`

- [x] **Step 1: Replace top-level wrappers with editorial page classes**

In both files, replace top wrappers such as:

```jsx
<div className="min-h-screen bg-transparent text-[#1a1c1c] font-sans pt-16">
```

with:

```jsx
<div className="editorial-page min-h-screen bg-transparent pt-20 font-sans text-[#173331] md:pt-24">
```

- [x] **Step 2: Replace primary cards with `editorial-card` classes**

For large white cards, use:

```jsx
className="editorial-card p-5 md:p-8"
```

For smaller interior cards, use:

```jsx
className="editorial-card-soft p-5"
```

- [x] **Step 3: Replace dark square icon blocks with `editorial-icon`**

Change dark icon wrapper blocks from patterns like:

```jsx
<div className="w-10 h-10 bg-[#003333] rounded-lg flex items-center justify-center shrink-0">
```

to:

```jsx
<div className="editorial-icon shrink-0">
```

Keep the existing Material Symbol names.

- [x] **Step 4: Keep Wi-Fi password block high contrast but editorial**

Use deep teal block with softer radius and border:

```jsx
className="rounded-[24px] border border-[#315f5a]/30 bg-[#153b39] p-6 text-[#fffaf0] shadow-[0_18px_42px_rgba(21,59,57,0.18)]"
```

- [ ] **Step 5: Run build and manual slide check**

Run: `npm run build`

Expected: PASS. Manually inspect Quick Information and Wi-Fi slides on desktop and mobile for readable text and no horizontal overflow.

Task 6 notes: Applied `editorial-page`, `editorial-card`, `editorial-card-soft`, and `editorial-icon` utilities to Quick Information and Wi-Fi/Reception mobile and desktop layouts. Replaced old dark square icon blocks with `editorial-icon` where appropriate, preserved high-contrast deep teal editorial Wi-Fi password blocks, and kept data arrays, translation keys, links, and component behavior unchanged. `npm run lint` and `npm run build` passed on 2026-07-22. Manual browser inspection was not run in this implementation session.

Task 6 quality fix notes: Updated the mobile and desktop visible WhatsApp numbers in `src/components/WifiReception.jsx` to `+84 855 484 444` so they match the existing `https://api.whatsapp.com/send?phone=%2B84855484444` targets. Preserved link targets and styling.

## Task 7: Apply Editorial Classes To Remaining Slides

**Files:**
- Modify as needed: `src/components/HouseRules.jsx`
- Modify as needed: `src/components/MotorbikeRental.jsx`
- Modify as needed: `src/components/ToursTickets.jsx`
- Modify as needed: `src/components/ExplorePhuQuoc.jsx`
- Modify as needed: `src/components/LocalFood.jsx`
- Modify as needed: `src/components/Attractions.jsx`
- Modify as needed: `src/components/TravelTips.jsx`

- [x] **Step 1: Search for old dark/card patterns**

Run: `rg "bg-\[#003333\]|bg-background|text-white|border-gray-200|rounded-xl|shadow-sm" src/components`

Expected: results show remaining old-style UI classes. Do not change functional links, data arrays, translation keys, or component exports.

- [x] **Step 2: Convert page wrappers**

For each remaining slide, use the same top wrapper target:

```jsx
<div className="editorial-page min-h-screen bg-transparent pt-20 font-sans text-[#173331] md:pt-24">
```

If a component already has a more complex wrapper, keep the structure and add `editorial-page`, `text-[#173331]`, and adequate `pt-20 md:pt-24` spacing.

- [x] **Step 3: Convert main content containers**

Use this content shell for desktop/mobile consistency:

```jsx
<main className="mx-auto w-full max-w-6xl px-4 py-6 md:px-8 md:py-8">
```

For main panels:

```jsx
className="editorial-card p-5 md:p-8"
```

For list/item cards:

```jsx
className="editorial-card-soft p-4 md:p-5"
```

- [x] **Step 4: Convert headings and icons**

Use these patterns when headings/icons are visually inconsistent:

```jsx
<h1 className="editorial-title text-3xl font-semibold md:text-5xl">...</h1>
```

```jsx
<div className="editorial-icon shrink-0">
  <span className="material-symbols-outlined text-xl">...</span>
</div>
```

- [x] **Step 5: Run build after every two components**

Run after two component conversions: `npm run build`

Expected: PASS. If build fails, fix the last edited component before continuing.

- [x] **Step 6: Final pattern search**

Run: `rg "bg-\[#003333\]|bg-background|text-white/|from-\[#003333\]" src/components`

Expected: only intentional high-contrast blocks remain, such as Wi-Fi password or image overlays where white text is still readable.

Task 7 notes: Applied `editorial-page` wrappers and light editorial text theme to House Rules, Motorbike Rental, Tours/Tickets, Explore Phu Quoc, Local Food, Attractions, and Travel Tips. Converted main panels and list cards to `editorial-card` / `editorial-card-soft`, and replaced inconsistent dark heading/icon blocks with `editorial-title` / `editorial-icon` where appropriate. Preserved data arrays, links, translation keys, state, Framer Motion variants, and component exports. Follow-up final search intentionally still reports high-contrast image badges/overlays in House Rules, Local Food, Attractions, and Wi-Fi/Reception password/image overlay blocks. `npm run build` passed after the first batch, second batch, and final CTA cleanup; `npm run lint` passed on 2026-07-22. Follow-up quality fixes added accessible FAQ accordion `aria-expanded` / `aria-controls` IDs in Travel Tips and removed misleading pointer/active/group-hover affordances from non-interactive Tours/Tickets cards; `npm run lint` and `npm run build` passed again on 2026-07-22.

## Task 8: Responsive And Interaction Verification

**Files:**
- No code changes unless verification finds issues

- [x] **Step 1: Run final lint**

Run: `npm run lint`

Expected: PASS or only pre-existing findings recorded in Task 1.

- [x] **Step 2: Run final production build**

Run: `npm run build`

Expected: PASS.

- [x] **Step 3: Start local app**

Run: `npm run dev -- --host 127.0.0.1`

Expected: Vite prints local URL.

- [x] **Step 4: Desktop manual review**

At desktop width, verify:

```text
Home is bright Boutique Editorial with two-column layout.
Header is light floating pill and all nav labels are usable.
Every slide is readable and visually aligned with cream/sage/deep-teal theme.
Bottom dots do not cover key content.
Clicking nav items changes slides.
Language dropdown changes displayed text.
```

- [x] **Step 5: Mobile manual review**

At narrow mobile width, verify:

```text
Home stacks image then content card without horizontal overflow.
Hamburger opens a light editorial drawer.
Language dropdown opens and closes.
Cards are readable in one column.
Horizontal swipe changes slides.
No important content is hidden behind bottom dots.
```

- [x] **Step 6: Compare against `D:\SunsetHill`**

Open or inspect `D:\SunsetHill` and confirm:

```text
StartHill does not use the SunsetHill dark centered cinematic hero.
StartHill does not use warm orange/brown as the primary accent.
StartHill reads as a bright concierge booklet rather than a dark landing splash.
```

Task 8 verification artifact: `docs/superpowers/verification/2026-07-22-final-redesign.md`. Final `npm run lint` passed with no findings. Final `npm run build` passed and wrote Vite production assets in `dist/`. `npm run dev -- --host 127.0.0.1` started successfully at `http://127.0.0.1:5173/`, and the root app shell returned HTTP 200 before the background dev server was stopped. Desktop and mobile checklist items were verified by source/CSS inspection and app-shell reachability because no browser automation, screenshot capture, or viewport emulation tool is available in this environment. `D:\SunsetHill` comparison was performed by inspecting its home/styles/app files; StartHill is visibly differentiated in source styling as bright cream/sage/deep-teal editorial rather than SunsetHill's dark centered orange/brown cinematic hero. No source UI code changes were made during Task 8.

## Self-Review

- Spec coverage: The plan covers visual differentiation, Boutique Editorial palette, home desktop/mobile, navigation desktop/mobile, content slide surfaces, responsive behavior, accessibility basics, and verification.
- Placeholder scan: No implementation step uses TBD/TODO/fill-in placeholders. Remaining “as needed” entries are limited to explicitly listed component files and include exact class patterns and commands.
- Type consistency: No new exported functions, props, or data types are introduced. Existing component props remain `lang`, `currentSlide`, `onNavigate`, and `onLangChange`.
