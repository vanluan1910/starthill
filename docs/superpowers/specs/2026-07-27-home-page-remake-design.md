# Home Page Remake Design

## Goal

Remake the Star Hill Resort home slide to closely follow the provided luxury resort HTML concept while preserving the current React slide application, multilingual content, and navigation patterns.

## Selected Direction

Use the provided HTML as the visual reference: a full-screen cinematic resort hero, dark gradient overlay, left-aligned welcome message, and glassmorphism cards on the right. Adapt the palette and behavior to the existing app by using the current teal/gold Star Hill theme, existing `i18n.js` copy, and existing slide navigation.

## Scope

- Redesign `src/components/WelcomePage.jsx`.
- Pass `onNavigate` from `App.jsx` to `WelcomePage` so home CTAs can move to existing slides.
- Reuse existing global CSS utilities in `src/index.css`, adding only small utilities if required.
- Keep `Header.jsx`, the horizontal slide deck, language selector, and bottom slide dots intact.
- Do not introduce a new routing system, booking flow, weather API, or external data dependency.

## Desktop Layout

The desktop home slide fills the viewport inside the existing slide deck. The background image uses the current resort hero image with a slow zoom animation and layered gradients for legibility.

The content area is a two-column layout:

- Left column: welcome message, visual accent line, `Private Paradise` or `Resort Information` label, large Playfair-style headline, English/Vietnamese-friendly welcome copy from `i18n.js`, and two CTAs.
- Right column: floating glass panel stack aligned toward the lower-right. The top card shows `Phu Quoc, VN` and local time. Two smaller cards provide service shortcuts such as `Dining` and `Wellness`.

The primary CTA, `Explore Services`, navigates to the existing Resort Services slide. The secondary CTA, `Contact Reception`, navigates to the existing Wi-Fi & Reception slide because that slide contains reception/contact information.

## Mobile Layout

Mobile keeps the cinematic hero image and dark overlay but avoids duplicating the dense desktop right column. The content stacks vertically with strong center alignment and compact glass chips/cards below the copy.

The mobile layout must fit within `100dvh`, remain readable behind the fixed mobile header controls, and avoid horizontal scrolling. Nonessential cards can be hidden or collapsed into concise shortcuts.

## Content And Localization

Use existing translations from `src/i18n.js` where available:

- `welcome.guest`
- `welcome.para1`
- `welcome.para2`
- `services.title`
- `services.needAssistance`
- `wifi.title`

Hardcoded place labels such as `Phu Quoc, VN`, `Dining`, and `Wellness` are acceptable for this visual home panel because they are short location/service labels, not core instructional content.

## Visual Style

- Background: existing resort image with `hero-zoom`.
- Overlay: left-heavy dark teal/black gradient for text contrast.
- Typography: Playfair Display for headline, Plus Jakarta Sans / Inter for UI and body copy, matching current Tailwind config.
- Colors: white text, warm gold accents (`#d6a252` / existing sunset gold), dark teal glass backgrounds, subtle white borders.
- Cards: rounded glassmorphism panels with blur, translucent background, and low-contrast borders.
- Motion: keep Framer Motion fade-in/stagger already used in `WelcomePage.jsx`; avoid adding mousemove parallax because it adds complexity and can conflict with mobile/touch behavior.

## Component Boundaries

`WelcomePage` remains a presentational slide component with two props:

- `lang`: selects localized text.
- `onNavigate`: optional callback for CTA slide navigation.

`App.jsx` remains responsible for slide state. It only passes `goTo` into `WelcomePage`.

No other slide components need to know about the home page remake.

## Accessibility And Responsiveness

- CTA controls use `button type="button"`.
- Decorative icon text remains within Material Symbols spans already marked as non-translatable by `App.jsx`.
- Text contrast must remain high over the hero image on desktop and mobile.
- Mobile content must account for the fixed menu and language controls at the top.
- Motion must respect the existing reduced-motion global handling where applicable.

## Testing

Verification after implementation:

- Run `npm run build` and confirm it succeeds.
- Run `npm run lint` and confirm there are no lint errors introduced by the remake.
- Manually inspect desktop and mobile breakpoints for readable text, no overflow, and functional CTA navigation.

## Files Expected To Change

- `src/components/WelcomePage.jsx`
- `src/App.jsx`
- `src/index.css` only if a small missing utility is required

## Out Of Scope

- Real weather data.
- Real booking flow.
- Header redesign.
- Footer redesign.
- Changes to non-home slides.
