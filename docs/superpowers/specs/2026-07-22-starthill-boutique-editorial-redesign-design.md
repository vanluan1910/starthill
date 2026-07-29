# StartHill Boutique Editorial Redesign Design

Date: 2026-07-22

## Goal

Redesign the StartHill guest guide so it looks polished on desktop and mobile while remaining clearly different from the other resort projects in the workspace.

The approved direction is **Boutique Editorial**: a bright, high-end resort guide with sand/cream surfaces, sage/deep teal accents, restrained champagne gold, generous whitespace, and readable card-based information.

## Workspace Differentiation

The redesign must not resemble `D:\SunsetHill`, which uses a dark cinematic hero, centered copy, warm orange/brown accent colors, blurred photo overlay, and large central actions.

The redesign must also move away from StartHill's current home treatment, which uses a dark teal left-side organic panel, gold curved line overlay, and full-bleed dark hero composition.

StartHill should instead feel like a boutique printed concierge booklet translated into a responsive web app.

## Visual System

Use a light editorial palette:

- Base surfaces: cream, sand, ivory, and warm paper tones.
- Primary contrast: deep teal for text, logo marks, and selected navigation states.
- Secondary accents: sage green and champagne gold used sparingly for dividers, icons, pills, and active states.
- Avoid large dark overlays, orange/brown SunsetHill-style accents, and heavy glass/dark dashboard styling.

Typography should feel refined and readable:

- Serif display headings for the resort/editorial identity.
- Clean sans-serif body text for multilingual readability.
- Strong line-height and spacing so translated content remains comfortable on mobile.

## Home Slide

Desktop home uses an asymmetrical two-column editorial composition:

- Left side: resort logo/mark, welcome copy, concise supporting paragraphs, and small pill-style quick categories.
- Right side: a large rounded resort/island image with soft shadow and one small inset guide card for quick arrival details.
- The home slide should read as a bright boutique arrival page, not a dark cinematic splash page.

Mobile home stacks vertically:

- A rounded image-backed feature area appears near the top.
- Copy sits in a bright card with readable padding.
- Touch targets remain large and language/menu controls do not cover key content.

## Navigation

Desktop header becomes a lighter floating pill/bar:

- Translucent cream or very light surface.
- Deep teal text for default state.
- Champagne/sage active state.
- Compact spacing so all slide labels remain usable.

Mobile keeps the existing hamburger and language controls but restyles them as light floating controls:

- Cream/white backgrounds with deep teal text/icons.
- Clear borders/shadows for contrast over both image and light content.
- Drawer uses the same editorial palette rather than dark teal panels.

## Content Slides

Content slides should share the Boutique Editorial system:

- Light page backgrounds instead of dark full-slide wrappers.
- White or cream cards with rounded corners, soft shadows, and thin warm borders.
- Icons stay small and refined, using champagne/deep teal instead of large decorative treatments.
- Layouts remain easy to scan on desktop and become single-column or simple two-column stacks on mobile.

The existing slide structure, routing/hash behavior, swipe navigation, lazy-loaded components, and i18n data remain unchanged unless a visual issue requires a minimal adjustment.

## Responsive Behavior

Desktop target: polished at common laptop/desktop widths, with no cramped nav, no oversized text, and no bottom navigation overlapping important content.

Mobile target: comfortable at narrow phone widths, with readable text, card spacing, visible controls, and no horizontal overflow.

The existing horizontal slide interaction should remain intact.

## Accessibility And Usability

Maintain existing button semantics and language selector behavior.

Improve contrast where the old design placed light text over images or dark overlays.

Ensure active navigation states are visible by color and shape, not color alone where practical.

Avoid introducing animations that make the app feel slow or distract from guest information.

## Implementation Scope

Primary files expected to change:

- `src/styles-home.css`
- `src/components/WelcomePage.jsx`
- `src/components/Header.jsx`
- `src/index.css`
- `src/components/SlideBackground.jsx`
- Individual slide components only where needed to align surfaces, spacing, and card styling.

Do not add new features, routes, persisted state, or external services. Do not change translations except if a visual label requires using existing keys differently.

## Testing And Verification

Verify with:

- `npm run build`
- `npm run lint`
- Manual desktop review in the local Vite app.
- Manual mobile/narrow-width review in the local Vite app.

Acceptance criteria:

- StartHill visually differs from `SunsetHill` and the current dark StartHill home.
- Desktop layout looks intentionally designed, not just widened mobile cards.
- Mobile layout is readable, touch-friendly, and free of horizontal overflow.
- Existing slide navigation, language selector, hash navigation, and swipe gestures still work.
