# Home Page Remake Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remake the home slide into a luxury resort hero that follows the provided HTML reference while preserving the current React slide app.

**Architecture:** `App.jsx` owns slide state and passes navigation into `WelcomePage`. `WelcomePage.jsx` remains a presentational slide with localized text, CTA buttons, background hero image, desktop glass cards, and a compact mobile layout. Existing global CSS utilities in `index.css` provide the slow zoom and text shadow.

**Tech Stack:** React 19, Vite 8, Tailwind CSS 3, Framer Motion 12, oxlint

---

## File Structure

- `src/App.jsx`: pass the existing `goTo` callback into `WelcomePage` as `onNavigate`.
- `src/components/WelcomePage.jsx`: replace current home slide markup with the approved cinematic two-column desktop layout and compact mobile layout.
- `src/index.css`: no planned change because `.hero-zoom` and `.text-shadow` already exist; verify after implementation.

---

### Task 1: Wire Home CTA Navigation

**Files:**
- Modify: `src/App.jsx:130-132`

- [ ] **Step 1: Pass `goTo` into `WelcomePage`**

Change the home slide render in `src/App.jsx` from:

```jsx
<WelcomePage lang={lang} />
```

to:

```jsx
<WelcomePage lang={lang} onNavigate={goTo} />
```

- [ ] **Step 2: Run build to verify the prop change does not break the app**

Run: `npm run build`

Expected: Vite build completes successfully with no errors.

---

### Task 2: Rewrite WelcomePage As Luxury Resort Hero

**Files:**
- Modify: `src/components/WelcomePage.jsx`

- [ ] **Step 1: Replace `WelcomePage.jsx` with the approved implementation**

Replace the complete file content with:

```jsx
import { motion } from 'framer-motion';
import { t } from '../i18n';

const HERO_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1784779432/abea70dd-3d67-4320-b864-bd645a36d299_tsddcy.png';

const SERVICES_SLIDE = 4;
const RECEPTION_SLIDE = 2;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function WelcomePage({ lang = 'en', onNavigate }) {
  const localTime = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Ho_Chi_Minh',
  });

  return (
    <section className="relative h-full w-full overflow-hidden bg-[#021816] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 hero-zoom bg-cover bg-center md:bg-[center_top]"
        style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,17,16,0.82)_0%,rgba(0,17,16,0.58)_42%,rgba(0,17,16,0.18)_72%,rgba(0,17,16,0.08)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.05)_45%,rgba(0,0,0,0.48)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1280px] flex-col px-5 pb-24 pt-20 md:grid md:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.75fr)] md:items-center md:gap-12 md:px-16 md:pb-20 md:pt-24 lg:gap-20">
        <motion.div
          className="flex min-h-0 flex-1 flex-col justify-center text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="mb-5 flex items-center justify-center gap-4 md:justify-start" variants={itemVariants}>
            <span className="h-px w-12 bg-[#d6a252]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#f0c975]">
              Private Paradise
            </span>
          </motion.div>

          <motion.h1
            className="font-serif text-[44px] font-bold leading-[0.96] tracking-[-0.045em] text-white text-shadow sm:text-[56px] md:max-w-[620px] md:text-[72px] lg:text-[86px]"
            variants={itemVariants}
          >
            Welcome to <span className="italic text-[#d6a252]">Star Hill</span> Resort
          </motion.h1>

          <motion.p
            className="mx-auto mt-5 max-w-[520px] font-serif text-[22px] italic leading-tight text-white/90 md:mx-0 md:text-[28px]"
            variants={itemVariants}
          >
            {t('welcome.guest', lang)}
          </motion.p>

          <motion.div className="mx-auto mt-6 max-w-[620px] space-y-4 md:mx-0" variants={itemVariants}>
            <p className="text-[16px] leading-[1.75] text-white/82 md:text-[18px]">
              {t('welcome.para1', lang)}
            </p>
            <p className="border-l-2 border-[#d6a252]/55 pl-5 text-left text-[14px] italic leading-[1.7] text-white/68 md:text-[16px]">
              {t('welcome.para2', lang)}
            </p>
          </motion.div>

          <motion.div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start" variants={itemVariants}>
            <button
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#d6a252] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-[#092522] shadow-[0_18px_36px_rgba(214,162,82,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#f0c975] active:scale-95"
              onClick={() => onNavigate?.(SERVICES_SLIDE)}
              type="button"
            >
              {t('services.title', lang)}
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1" style={{ color: '#092522' }}>
                arrow_forward
              </span>
            </button>
            <button
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all hover:bg-white/18 active:scale-95"
              onClick={() => onNavigate?.(RECEPTION_SLIDE)}
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]" style={{ color: '#f0c975' }}>
                support_agent
              </span>
              {t('services.needAssistance', lang)}
            </button>
          </motion.div>
        </motion.div>

        <motion.aside
          className="mt-7 hidden justify-self-end md:block md:w-full md:max-w-[380px]"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 rounded-[28px] border border-white/14 bg-white/12 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[42px]" style={{ color: '#f0c975' }}>
                    wb_sunny
                  </span>
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/72">Phu Quoc, VN</p>
                    <p className="mt-1 font-serif text-[30px] font-semibold leading-none text-white">29°C</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-serif text-[28px] font-semibold leading-none text-white">{localTime}</p>
                  <p className="mt-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/52">Local Time</p>
                </div>
              </div>
            </div>

            <button
              className="group rounded-[24px] border border-white/14 bg-white/10 p-5 text-left shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-lg transition-all hover:-translate-y-1 hover:bg-white/16"
              onClick={() => onNavigate?.(SERVICES_SLIDE)}
              type="button"
            >
              <span className="material-symbols-outlined text-[30px] transition-transform group-hover:scale-110" style={{ color: '#f0c975' }}>
                restaurant
              </span>
              <span className="mt-5 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-white">Dining</span>
              <span className="mt-2 block text-xs leading-relaxed text-white/58">Breakfast and local flavors</span>
            </button>

            <button
              className="group rounded-[24px] border border-white/14 bg-white/10 p-5 text-left shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-lg transition-all hover:-translate-y-1 hover:bg-white/16"
              onClick={() => onNavigate?.(SERVICES_SLIDE)}
              type="button"
            >
              <span className="material-symbols-outlined text-[30px] transition-transform group-hover:scale-110" style={{ color: '#f0c975' }}>
                spa
              </span>
              <span className="mt-5 block text-[11px] font-extrabold uppercase tracking-[0.2em] text-white">Wellness</span>
              <span className="mt-2 block text-xs leading-relaxed text-white/58">Pool and resort services</span>
            </button>
          </div>
        </motion.aside>

        <motion.div
          className="mt-5 grid grid-cols-2 gap-3 md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
        >
          <button
            className="rounded-[22px] border border-white/16 bg-white/10 px-4 py-4 text-left backdrop-blur-md"
            onClick={() => onNavigate?.(SERVICES_SLIDE)}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]" style={{ color: '#f0c975' }}>restaurant</span>
            <span className="mt-2 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">Dining</span>
          </button>
          <button
            className="rounded-[22px] border border-white/16 bg-white/10 px-4 py-4 text-left backdrop-blur-md"
            onClick={() => onNavigate?.(SERVICES_SLIDE)}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]" style={{ color: '#f0c975' }}>spa</span>
            <span className="mt-2 block text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">Wellness</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default WelcomePage;
```

- [ ] **Step 2: Verify JSX compiles**

Run: `npm run build`

Expected: Vite build completes successfully with no JSX or Tailwind class errors.

---

### Task 3: Fix Any Build Or Lint Issues Introduced By The Remake

**Files:**
- Modify: `src/components/WelcomePage.jsx` only if build or lint reports an issue
- Modify: `src/index.css` only if the build shows a missing utility that cannot be expressed with Tailwind classes

- [ ] **Step 1: Run lint**

Run: `npm run lint`

Expected: oxlint exits successfully with no errors introduced in `src/components/WelcomePage.jsx` or `src/App.jsx`.

- [ ] **Step 2: If lint reports `h-13` as an invalid or ineffective utility, replace it**

In `src/components/WelcomePage.jsx`, replace both occurrences of:

```jsx
className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#d6a252] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-[#092522] shadow-[0_18px_36px_rgba(214,162,82,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#f0c975] active:scale-95"
```

and:

```jsx
className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all hover:bg-white/18 active:scale-95"
```

with `min-h-[52px]` versions:

```jsx
className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#d6a252] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-[#092522] shadow-[0_18px_36px_rgba(214,162,82,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#f0c975] active:scale-95"
```

```jsx
className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-white backdrop-blur-md transition-all hover:bg-white/18 active:scale-95"
```

- [ ] **Step 3: Re-run lint after any fix**

Run: `npm run lint`

Expected: oxlint exits successfully.

---

### Task 4: Final Verification

**Files:**
- No planned file changes

- [ ] **Step 1: Run production build**

Run: `npm run build`

Expected: Vite build completes successfully and writes `dist/` output.

- [ ] **Step 2: Run lint**

Run: `npm run lint`

Expected: oxlint exits successfully.

- [ ] **Step 3: Manual browser check**

Run: `npm run dev`

Expected: Vite starts a local dev server.

Check these behaviors in the browser:

- Desktop home slide shows the full-screen resort image with left-aligned text and right-side glass cards.
- Mobile home slide has no horizontal overflow and keeps text readable below the fixed menu/language controls.
- `Resort Services` CTA navigates to slide 5 visually, which corresponds to zero-based slide index `4`.
- `Need Assistance?` CTA navigates to Wi-Fi & Reception, zero-based slide index `2`.
- Header, language selector, and bottom slide dots still work.

---

## Self-Review

- Spec coverage: the plan covers `WelcomePage.jsx`, `App.jsx`, existing CSS utility reuse, desktop layout, mobile layout, CTA navigation, localization, and build/lint verification.
- Placeholder scan: no `TBD`, `TODO`, or unspecified implementation steps remain.
- Type consistency: `WelcomePage` receives `lang` and optional `onNavigate`; `App.jsx` passes the existing `goTo` callback; CTA slide indices match `App.jsx` slide order.
