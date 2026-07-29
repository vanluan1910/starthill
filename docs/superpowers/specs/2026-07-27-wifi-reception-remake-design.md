# Wi-Fi & Reception Remake Design

## Goal

Remake the `WifiReception` slide to closely follow the provided Services & Contact HTML reference while preserving the existing slide app shell, app header, language selector, and bottom slide navigation.

## Scope

- Redesign `src/components/WifiReception.jsx`.
- Keep `WifiReception({ lang = 'en' })` as the component API.
- Do not copy the standalone HTML header/footer into the component.
- Use existing `wifi.*` i18n keys for visible content.
- Do not change `App.jsx`, `Header.jsx`, or `SlideBackground.jsx`.

## Layout

- Hero image card with dark overlay, localized `wifi.title`, and `wifi.subtitle`.
- Page title area for services/contact context.
- Two primary cards: Wi-Fi credentials and reception/contact details.
- Services grid using existing service keys.
- Final visual section using existing resort images from the component instead of the pasted fake map.
- Mobile stacks all sections in one column and remains scrollable inside the existing slide wrapper.

## Visual Style

- Bright surface palette with warm cream backgrounds and subtle borders.
- Hero and image panels use rounded corners, overlay gradients, and soft shadows.
- Cards use hover polish only; no custom DOM scripts.
- Decorative Material Symbols use `aria-hidden="true"`.

## Verification

- Run `npm run build`.
- Run `npm run lint`.
