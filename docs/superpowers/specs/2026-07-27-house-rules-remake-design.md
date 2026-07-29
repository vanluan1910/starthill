# House Rules Remake Design

## Goal

Remake the House Rules slide to follow the provided high-impact hotel rules reference while preserving the existing slide app shell, header, language system, and footer navigation.

## Scope

- Redesign `src/components/HouseRules.jsx`.
- Keep `HouseRules({ lang = 'en' })` as the component interface.
- Do not copy the standalone HTML header/footer or scripts into the component.
- Use existing `rules.*` i18n keys where possible and add a few concise new section keys if needed.
- Do not change `App.jsx`, `Header.jsx`, or `SlideBackground.jsx`.

## Layout

- Hero section with full-width resort image, dark overlay, kicker, title, and subtitle.
- Intro section with `rules.request`.
- Large rules grid with four thematic blocks: Arrival & Identity, Sanctuary Etiquette, Safety & Security, Departure.
- Supporting concierge/contact section near the bottom.
- On desktop, the Etquette and Safety cards can include decorative side images or split layouts.
- On mobile, stack all content in a single column and remain scrollable inside the existing slide wrapper.

## Visual Style

- Bright editorial surface with warm creams, muted teal, and gold accents.
- Rounded cards with soft shadows and subtle borders.
- Decorative Material Symbols use `aria-hidden="true"`.
- Images below the hero should use meaningful localized `alt` text.

## Verification

- Run `npm run build`.
- Run `npm run lint`.
