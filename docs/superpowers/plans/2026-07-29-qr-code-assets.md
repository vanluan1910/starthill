# QR Code Assets Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate static QR code assets for `https://starthill.vercel.app/` and store them in `public/` as reusable project assets.

**Architecture:** Use a one-off CLI generation flow to create `svg` and `png` QR files without adding runtime React code. Keep the implementation limited to static assets so the current app behavior and bundle remain unchanged.

**Tech Stack:** Node.js, npm, Vite project structure, QR code CLI/package

---

## File Structure

- Create: `public/qr-starthill.svg` — vector QR asset for the public project URL
- Create: `public/qr-starthill.png` — raster QR asset for the public project URL
- Modify: `docs/superpowers/specs/2026-07-29-qr-code-design.md` — no changes expected during implementation
- Modify: `docs/superpowers/plans/2026-07-29-qr-code-assets.md` — no changes expected during implementation

### Task 1: Generate The SVG QR Asset

**Files:**
- Create: `public/qr-starthill.svg`

- [ ] **Step 1: Verify the target output directory exists**

Run: `Test-Path -LiteralPath "D:\StartHill\public"`
Expected: `True`

- [ ] **Step 2: Generate the SVG QR code for the deployed URL**

Run: `npx qrcode -o "public/qr-starthill.svg" "https://starthill.vercel.app/"`
Expected: command exits successfully and writes `public/qr-starthill.svg`

- [ ] **Step 3: Verify the SVG file exists**

Run: `Test-Path -LiteralPath "D:\StartHill\public\qr-starthill.svg"`
Expected: `True`

### Task 2: Generate The PNG QR Asset

**Files:**
- Create: `public/qr-starthill.png`

- [ ] **Step 1: Generate the PNG QR code for the deployed URL**

Run: `npx qrcode -o "public/qr-starthill.png" "https://starthill.vercel.app/"`
Expected: command exits successfully and writes `public/qr-starthill.png`

- [ ] **Step 2: Verify the PNG file exists**

Run: `Test-Path -LiteralPath "D:\StartHill\public\qr-starthill.png"`
Expected: `True`

- [ ] **Step 3: Inspect the generated file sizes**

Run: `Get-Item -LiteralPath "D:\StartHill\public\qr-starthill.svg","D:\StartHill\public\qr-starthill.png" | Format-Table Name,Length`
Expected: both files are listed with non-zero sizes

### Task 3: Verify The Assets In The Project

**Files:**
- Test: `public/qr-starthill.svg`
- Test: `public/qr-starthill.png`

- [ ] **Step 1: Confirm the SVG content is an SVG document**

Run: `Get-Content -LiteralPath "D:\StartHill\public\qr-starthill.svg" -TotalCount 5`
Expected: output starts with SVG/XML markup

- [ ] **Step 2: Confirm the PNG signature exists**

Run: `[System.BitConverter]::ToString([System.IO.File]::ReadAllBytes("D:\StartHill\public\qr-starthill.png")[0..7])`
Expected: `89-50-4E-47-0D-0A-1A-0A`

- [ ] **Step 3: Check git sees the new assets**

Run: `git status --short`
Expected: shows `public/qr-starthill.svg` and `public/qr-starthill.png` as untracked or added files
