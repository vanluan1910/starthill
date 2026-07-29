# Resort Services Hero Image Design

## Goal

Replace the hero image shown at the top of the `Resort Services` slide with the provided Cloudinary image URL.

## Scope

- Update the `HERO_IMAGE` constant in `src/components/MotorbikeRental.jsx`.
- Keep the existing `EditorialHero` usage unchanged.
- Keep the current layout, overlay, alt text, and translations unchanged.
- Do not change any other service images on the page.

## Approach

- Perform a single-value replacement for the hero image URL.
- Continue loading the hero image from a remote URL, matching the current file pattern.

## Verification

- Run `npm run build`.
- Run `npm run lint`.
- Confirm the `Resort Services` hero now points to the provided Cloudinary URL in source.
