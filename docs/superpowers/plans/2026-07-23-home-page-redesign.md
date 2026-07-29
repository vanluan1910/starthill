# Home Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite WelcomePage from editorial 2-column layout to full-screen luxury minimal hero with centered text overlay.

**Architecture:** WelcomePage is slide 0 in a horizontal slide deck (App.jsx). Redesign is contained entirely within the WelcomePage component. Added CSS animations live in index.css. Header and slide system are unchanged.

**Tech Stack:** React 19, Tailwind CSS 3, Framer Motion 12, Vite 8

---

### Task 1: Add CSS utilities (index.css)

**Files:**
- Modify: `src/index.css` (end of file)

- [ ] **Step 1: Append hero-zoom keyframes and text-shadow utility**

```css
@keyframes hero-zoom {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

.hero-zoom {
  animation: hero-zoom 30s infinite alternate ease-in-out;
}

.text-shadow {
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
```

- [ ] **Step 2: Verify syntax**

Run: `npx tailwindcss -i src/index.css -o /dev/null --dry-run`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add hero-zoom and text-shadow utilities for home redesign"
```

---

### Task 2: Rewrite WelcomePage component

**Files:**
- Modify: `src/components/WelcomePage.jsx` (full rewrite)

- [ ] **Step 1: Write the new WelcomePage component**

Replace entire content:

```jsx
import { motion } from 'framer-motion';
import { t } from '../i18n';

const HERO_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1784263298/0afe78be-233f-431c-b582-4558d0d58c40_i21b90.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function WelcomePage({ lang = 'en', onNavigate }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-zoom" style={{ backgroundImage: `url('${HERO_IMAGE}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />

      {/* Header space — Header is rendered separately in App.jsx */}

      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          className="max-w-3xl space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-white/80 text-sm md:text-base font-medium tracking-[0.2em] uppercase"
            variants={itemVariants}
          >
            {t('welcome.greeting', lang)}
          </motion.p>

          <motion.h1
            className="text-white font-display-lg text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-shadow"
            variants={itemVariants}
          >
            Star Hill Resort
          </motion.h1>

          <motion.p
            className="text-white/90 text-lg md:text-xl font-body-lg max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t('welcome.guest', lang)}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 pt-2"
            variants={itemVariants}
          >
            {['quickInfo.title', 'wifi.title', 'tours.title'].map((key) => (
              <span
                key={key}
                className="px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold"
              >
                {t(key, lang)}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            variants={itemVariants}
          >
            <button
              type="button"
              className="min-w-[160px] h-14 px-8 rounded-full bg-[#f5f0eb] text-[#1a1a1a] text-base font-bold tracking-wide transition-all hover:shadow-[0_0_24px_rgba(245,240,235,0.4)] active:scale-95"
              onClick={() => onNavigate?.(1)}
            >
              {t('quickInfo.title', lang)}
            </button>
            <button
              type="button"
              className="min-w-[160px] h-14 px-8 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-white text-base font-bold tracking-wide transition-all hover:bg-white/20 active:scale-95"
            >
              {t('services.needAssistance', lang)}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-8 py-6 flex flex-col md:flex-row items-center justify-between text-white/60 text-xs">
        <div className="flex gap-6 mb-3 md:mb-0">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]" style={{ color: 'rgba(255,255,255,0.6)' }}>location_on</span>
            Phu Quoc Island, Vietnam
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]" style={{ color: 'rgba(255,255,255,0.6)' }}>star</span>
            5-Star Luxury
          </span>
        </div>
        <div className="flex gap-4">
          <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>facebook</span>
          <span className="material-symbols-outlined text-[18px] cursor-pointer hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.6)' }}>camera_alt</span>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
```

- [ ] **Step 2: Verify no broken imports**

Run: `npx vite build 2>&1 | Select-String -Pattern "error" -CaseSensitive`
Expected: No errors

- [ ] **Step 3: Commit**

```bash
git add src/components/WelcomePage.jsx
git commit -m "feat: redesign home page to full-screen luxury minimal hero"
```

---

### Task 3: Pass onNavigate to WelcomePage in App.jsx

**Files:**
- Modify: `src/App.jsx` (around line 131)

- [ ] **Step 1: Add `onNavigate` prop to WelcomePage**

```jsx
<WelcomePage lang={lang} onNavigate={goTo} />
```

- [ ] **Step 2: Build and verify**

Run: `npx vite build 2>&1`
Expected: Build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/App.jsx
git commit -m "fix: pass onNavigate to WelcomePage for CTA navigation"
```

---

### Task 4: Self-review and verification

- [ ] **Step 1: Run lint**

```bash
npm run lint 2>&1 | Select-String -Pattern "error" -CaseSensitive
```
Expected: No errors

- [ ] **Step 2: Build project**

```bash
npm run build 2>&1
```
Expected: Build succeeds

- [ ] **Step 3: Verify visual behavior**

- Open in browser, confirm:
  - Hero image covers full screen with zoom animation
  - Text is centered and readable on dark overlay
  - CTA buttons render and hover effects work
  - Bottom bar shows location, rating, icons
  - Pills render under tagline
  - Page fits within the horizontal slide system (no horizontal scroll)
