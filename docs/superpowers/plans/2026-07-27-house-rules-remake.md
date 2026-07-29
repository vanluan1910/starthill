# House Rules Remake Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remake the House Rules slide into a polished hotel rules page matching the approved high-impact reference.

**Architecture:** The change is contained to `src/components/HouseRules.jsx`. Existing i18n keys and slide shell are reused. Small new `rules.*` keys may be added for section headers and hero copy. No app-level navigation changes are needed.

**Tech Stack:** React 19, Vite 8, Tailwind CSS 3, Material Symbols, oxlint

---

## File Structure

- `src/components/HouseRules.jsx`: rewrite layout and preserve current rule data structure conceptually.
- `src/i18n.js`: add concise section-title and hero-copy keys if needed.

---

### Task 1: Add House Rules copy keys

**Files:**
- Modify: `src/i18n.js`

- [ ] Add concise keys for the hero kicker and section headings if the component needs them.
- [ ] Run `npm run build` to verify the translation object remains valid.

### Task 2: Rewrite HouseRules

**Files:**
- Modify: `src/components/HouseRules.jsx`

- [ ] Replace the component with a hero-led editorial layout.
- [ ] Preserve the existing rule content categories and improve structure to match the reference.
- [ ] Keep all user-visible copy routed through `t(...)`.
- [ ] Ensure decorative icons have `aria-hidden="true"`.
- [ ] Ensure images have meaningful localized `alt` text.

### Task 3: Verify

- [ ] Run `npm run build`; expected: success.
- [ ] Run `npm run lint`; expected: success.

## Self-Review

- Spec coverage: hero, intro, rule categories, support section, i18n, accessibility, and verification are covered.
- Placeholder scan: no placeholders remain.
- Type consistency: `HouseRules({ lang = 'en' })` remains unchanged.
