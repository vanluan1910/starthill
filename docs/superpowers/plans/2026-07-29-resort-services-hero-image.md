# Resort Services Hero Image Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the `Resort Services` hero image with the provided Cloudinary URL while keeping the page structure and content unchanged.

**Architecture:** Update the `HERO_IMAGE` constant in `src/components/MotorbikeRental.jsx` and leave `EditorialHero` and all other page assets untouched. Verify the change with the existing project build and lint commands.

**Tech Stack:** React, Vite, JavaScript, existing project lint/build tooling

---

## File Structure

- Modify: `src/components/MotorbikeRental.jsx` — replace the current `HERO_IMAGE` URL with the provided Cloudinary image URL

### Task 1: Replace The Resort Services Hero Image URL

**Files:**
- Modify: `src/components/MotorbikeRental.jsx:6-6`

- [ ] **Step 1: Update the hero image constant**

Replace the existing `HERO_IMAGE` declaration with:

```js
const HERO_IMAGE = 'https://res.cloudinary.com/dwb9x5s1j/image/upload/v1785294396/1784015817228_885263377326364022_g7328569027530867083_1d3fe220d1eb437c93bdd91f2e76487e_cjdvyw.jpg';
```

- [ ] **Step 2: Verify the source file contains the new URL**

Run: `rg -n "res\.cloudinary\.com/dwb9x5s1j/image/upload/v1785294396/1784015817228_885263377326364022_g7328569027530867083_1d3fe220d1eb437c93bdd91f2e76487e_cjdvyw\.jpg" "src/components/MotorbikeRental.jsx"`
Expected: one match on the `HERO_IMAGE` line

### Task 2: Verify The Project Still Passes Existing Checks

**Files:**
- Test: `src/components/MotorbikeRental.jsx`

- [ ] **Step 1: Run the production build**

Run: `npm run build`
Expected: Vite build completes successfully with exit code 0

- [ ] **Step 2: Run lint**

Run: `npm run lint`
Expected: lint exits successfully with no reported errors

- [ ] **Step 3: Confirm only the intended file changed**

Run: `git diff -- src/components/MotorbikeRental.jsx`
Expected: diff shows only the `HERO_IMAGE` URL replacement

Return exactly one final message with:
1. Status: DONE, DONE_WITH_CONCERNS, NEEDS_CONTEXT, or BLOCKED
2. What you changed
3. Verification commands run and outputs summarized
4. Self-review findings
5. Exact files changed
