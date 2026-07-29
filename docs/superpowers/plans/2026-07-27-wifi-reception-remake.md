# Wi-Fi & Reception Remake Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remake the Wi-Fi & Reception slide into a Services & Contact page matching the approved HTML direction.

**Architecture:** The change is contained to `src/components/WifiReception.jsx`. Existing i18n keys and slide shell are reused. No app-level navigation changes are needed.

**Tech Stack:** React 19, Vite 8, Tailwind CSS 3, Material Symbols, oxlint

---

## File Structure

- `src/components/WifiReception.jsx`: rewrite layout and preserve existing data arrays conceptually.

---

### Task 1: Rewrite WifiReception

**Files:**
- Modify: `src/components/WifiReception.jsx`

- [ ] Replace the component with a single responsive layout: hero, two primary contact cards, services grid, image section.
- [ ] Use only existing `wifi.*` translation keys for user-visible text.
- [ ] Keep `tel:` and WhatsApp links.
- [ ] Add `aria-hidden="true"` to decorative icons.
- [ ] Add `loading="lazy"` and `decoding="async"` to images below the hero.

### Task 2: Verify

- [ ] Run `npm run build`; expected: success.
- [ ] Run `npm run lint`; expected: success.

## Self-Review

- Spec coverage: hero, primary cards, services grid, visual image section, i18n, accessibility, and verification are covered.
- Placeholder scan: no placeholders remain.
- Type consistency: `WifiReception({ lang = 'en' })` remains unchanged.
