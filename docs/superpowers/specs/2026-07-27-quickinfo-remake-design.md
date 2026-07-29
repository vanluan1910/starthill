# QuickInfo Remake Design

## Goal

Remake the Quick Information slide to follow the provided luxury coastal information page reference while preserving the existing React slide deck, header, language system, and QuickInfo content.

## Scope

- Redesign `src/components/QuickInfo.jsx` only unless small i18n additions are needed.
- Keep `QuickInfo({ lang = 'en' })` as the component interface.
- Keep the existing slide wrapper from `App.jsx` and `SlideBackground.jsx`; do not add a separate page header/nav from the pasted HTML.
- Preserve all current translated content from `quickInfo.*`.
- Do not add routes, APIs, booking flow, or unrelated slide changes.

## Layout

The slide uses the second provided Quick Information reference: a top cinematic hero image card, followed by an asymmetric information grid.

- Hero: wide rounded image panel with dark overlay, `quickInfo.title`, and `quickInfo.subtitle` placed at the lower-left.
- Main grid: desktop uses a 12-column layout.
- Left column: `Stay Schedule` card and `Morning Dining` card.
- Right column: dark `Late Check-out Policy` card with the three fee rules and reception note.
- Optional services grid: compact supporting cards below the main grid using existing i18n where possible.

Desktop should feel like the pasted HTML: wide centered content, image-led hero, 7/5 content split, dark policy card, and smaller service cards.

Mobile should stack content in a single column, remain scrollable inside the slide, and avoid horizontal overflow.

## Content And Localization

Use existing keys:

- `quickInfo.title`
- `quickInfo.checkin`
- `quickInfo.checkinTime`
- `quickInfo.checkout`
- `quickInfo.checkoutTime`
- `quickInfo.lateCheckout`
- `quickInfo.lateCheckoutDesc`
- `quickInfo.until3`
- `quickInfo.until3rate`
- `quickInfo.until6`
- `quickInfo.until6rate`
- `quickInfo.after6`
- `quickInfo.after6rate`
- `quickInfo.lateCheckoutNote`
- `quickInfo.breakfast`
- `quickInfo.breakfastDesc`
- `quickInfo.breakfastHours`
- `quickInfo.breakfastTime`
- `quickInfo.breakfastRecommend`

If a subtitle or section label needs new copy, add concise `quickInfo.*` i18n keys for all supported languages.

## Visual Style

- Background: transparent over existing `SlideBackground` gradient.
- Cards: white/cream translucent surfaces, subtle borders, rounded corners, soft shadow.
- Typography: serif headline feel for titles where appropriate, sans for body.
- Icons: Material Symbols with `aria-hidden="true"` when decorative.
- Motion: avoid custom scroll scripts; use CSS hover/transition only.

## Testing

- Run `npm run build`.
- Run `npm run lint`.
- Manually check that desktop and mobile layouts are readable and scrollable.

## Out Of Scope

- Header redesign.
- Additional navigation.
- Real image upload or CMS wiring.
- Changes to other slides.
