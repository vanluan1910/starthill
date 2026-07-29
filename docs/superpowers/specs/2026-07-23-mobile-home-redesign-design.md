# Mobile Home Redesign Design

## Overview

Redesign only the mobile version of `WelcomePage` to match the approved visual direction from the provided mockup while leaving the desktop home largely unchanged.

## Scope

- Change only the mobile layout of `src/components/WelcomePage.jsx`
- Keep the existing desktop layout structure
- Keep the existing header position
- Adjust mobile background crop so the built-in resort logo in the image is visible

## Mobile Layout

The mobile home screen should use a left-aligned stacked layout over the existing background image.

Order of content:

1. `Resort Information` badge
2. Large hero heading: `Welcome to Star Hill Resort`
3. `Dear Valued Guest,`
4. First paragraph (`welcome.para1`)
5. Thin gold divider line
6. Dark translucent info card containing second paragraph (`welcome.para2`)
7. Dot indicator at the bottom

## Visual Rules

- Background image remains the current home background image
- Mobile background crop is adjusted independently from desktop to reveal the logo area inside the image
- Text is white or warm off-white for readability
- `Star Hill` in the heading can use a gold-accent treatment similar to the mockup
- The info card uses a dark translucent fill with a subtle gold border
- Overall layout is left-aligned, not centered

## Header

- Keep the menu/header in its current position
- Improve mobile language switch readability if needed, but do not move it

## Files Affected

- Modify: `src/components/WelcomePage.jsx`
- Modify only if needed for supporting styles: `src/index.css`
- Avoid changing `Header.jsx` unless strictly required for readability only

## Acceptance Criteria

- Mobile home visually resembles the approved mockup
- Desktop home remains functionally and visually close to its current state
- Mobile heading and text are clearly readable on top of the image
- The logo area inside the background image is visible on mobile
- The second paragraph appears inside a card-like panel
- Build succeeds after the change
