# Mobile Home Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the mobile home screen to match the approved mockup while keeping the desktop home mostly unchanged.

**Architecture:** The implementation stays inside `src/components/WelcomePage.jsx`, using separate mobile and desktop render blocks as the file already does. Mobile will switch from centered text to a left-aligned hero composition with a badge, strong heading, first paragraph, divider, and a translucent information card for the second paragraph.

**Tech Stack:** React 19, Framer Motion, Tailwind CSS, Vite

---

### Task 1: Update mobile background framing and overlay

**Files:**
- Modify: `src/components/WelcomePage.jsx`

- [ ] **Step 1: Replace the mobile background blocks with mobile-specific framing**

Replace the existing mobile background section near the top of `WelcomePage.jsx`:

```jsx
      {/* ===== MOBILE ===== */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[rgba(10,18,32,0.42)] via-[rgba(10,18,32,0.24)] to-[rgba(10,18,32,0.38)]" />
```

with:

```jsx
      {/* ===== MOBILE ===== */}
      <div
        className="absolute inset-0 hero-zoom md:hidden"
        style={{ backgroundImage: `url('${HERO_IMAGE}')`, backgroundSize: 'cover', backgroundPosition: 'center 18%' }}
      />
      <div className="absolute inset-0 md:hidden bg-[linear-gradient(180deg,rgba(7,18,36,0.42)_0%,rgba(7,18,36,0.18)_24%,rgba(7,18,36,0.28)_100%)]" />
```

- [ ] **Step 2: Verify the file still parses**

Run: `npx vite build`
Expected: build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/components/WelcomePage.jsx
git commit -m "feat: refine mobile home background framing"
```

---

### Task 2: Replace the mobile text block with the approved left-aligned composition

**Files:**
- Modify: `src/components/WelcomePage.jsx`

- [ ] **Step 1: Replace the current mobile `<section>` block**

Replace the existing mobile section:

```jsx
      <section className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center md:hidden">
        <motion.div
          className="w-full max-w-[320px] space-y-6 rounded-[28px] border border-white/10 bg-black/18 px-5 py-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-sm"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } } }}
        >
          ...
        </motion.div>
      </section>
```

with:

```jsx
      <section className="relative z-10 flex h-full flex-col justify-center px-6 pb-14 pt-28 text-left md:hidden">
        <motion.div
          className="w-full max-w-[340px]"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } } }}
        >
          <motion.div
            className="mb-8"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <img
              alt="Star Hill Resort brand mark"
              className="mb-5 h-36 w-auto"
              src="https://res.cloudinary.com/dwb9x5s1j/image/upload/v1784778305/9a747282-dab0-4fd7-898e-e81a89f47be4_xthgkk.png"
            />

            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.26em] text-white backdrop-blur-sm">
              🏨 Resort Information
            </span>
          </motion.div>

          <motion.h1
            className="text-display text-[38px] font-bold leading-[0.92] tracking-tight text-white text-shadow"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          >
            Welcome to <br />
            <span className="text-[#d6ad54] italic">Star Hill</span>
            <br />
            Resort
          </motion.h1>

          <motion.p
            className="mt-8 text-[20px] font-semibold leading-tight text-[#d6ad54] text-shadow"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {t('welcome.guest', lang)}
          </motion.p>

          <motion.p
            className="mt-4 max-w-[290px] text-[18px] leading-[1.5] text-white text-shadow"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          >
            {t('welcome.para1', lang)}
          </motion.p>

          <motion.div
            className="mt-8 h-px w-full max-w-[280px] bg-[#d6ad54]/80"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          />

          <motion.div
            className="relative mt-8 max-w-[320px] rounded-[24px] border border-[#d6ad54]/80 bg-[rgba(7,18,36,0.62)] px-6 py-8 shadow-[0_18px_48px_rgba(0,0,0,0.22)] backdrop-blur-sm"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
          >
            <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#d6ad54] bg-[rgba(7,18,36,0.82)] text-[#f0c975] shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
              <span className="material-symbols-outlined text-[18px]">info</span>
            </div>

            <p className="text-[16px] leading-[1.7] text-white/95">
              {t('welcome.para2', lang)}
            </p>
          </motion.div>
        </motion.div>
      </section>
```

- [ ] **Step 2: Verify build still passes**

Run: `npx vite build`
Expected: build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/components/WelcomePage.jsx
git commit -m "feat: rebuild mobile home hero layout"
```

---

### Task 3: Restore and style the mobile pager dots

**Files:**
- Modify: `src/components/WelcomePage.jsx`

- [ ] **Step 1: Add the mobile dots indicator near the bottom**

Insert this block just before the desktop section comment in `WelcomePage.jsx`:

```jsx
      <motion.div
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[#d6ad54]/50 bg-[rgba(7,18,36,0.68)] px-6 py-3 backdrop-blur-sm md:hidden"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
      >
        <span className="h-4 w-7 rounded-full bg-[#d6ad54]" />
        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className="h-3.5 w-3.5 rounded-full border border-white/90 bg-transparent"
          />
        ))}
      </motion.div>
```

- [ ] **Step 2: Verify build still passes**

Run: `npx vite build`
Expected: build succeeds

- [ ] **Step 3: Commit**

```bash
git add src/components/WelcomePage.jsx
git commit -m "feat: add mobile home pager indicator"
```

---

### Task 4: Verify the whole feature

**Files:**
- Modify: none

- [ ] **Step 1: Run build**

Run: `npm run build`
Expected: Vite build succeeds with no errors

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: no lint errors

- [ ] **Step 3: Manual visual verification checklist**

Confirm on mobile viewport:

```text
- Header stays in the same position
- Language switch text is readable
- Background shows the built-in logo area from the image
- Mobile content is left-aligned
- “Star Hill” is gold-accented and readable
- “Dear Valued Guest,” is gold and visually separated
- First paragraph sits directly under the greeting
- Second paragraph is inside a dark translucent card
- Divider line appears above the card
- Dots indicator appears at the bottom
```
