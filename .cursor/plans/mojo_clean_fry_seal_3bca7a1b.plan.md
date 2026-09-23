---
name: Mojo Clean Fry Seal
overview: Redesign the circular fry seal as a Mojo-branded SVG component (no Zero Acre), then place it in the home Story section beside the origin copy.
todos:
  - id: seal-svg
    content: Build CleanFrySeal SVG component with Mojo tokens + copy
    status: completed
  - id: story-place
    content: Place seal in Story section image column; verify desktop/mobile
    status: completed
isProject: false
---

# Mojo Clean-Fry Seal

## Decisions
- **Placement:** Home [`Story`](src/components/Story.tsx) — kitchen credential next to “Born hungry on Austin St”
- **Wording:** Mojo voice, not partner mark — keep the seal idea (no seed oils / better crisp), drop “clean-fried®” and “Zero Acre”

## Seal copy (Mojo)
- Top arc: `Better oil. Better crisp.`
- Center: `CLEAN FRY` (display type, not script trademark)
- Subline: `MOJO`
- Bottom arc: `We fry without seed oils.`

## Implementation
1. Add [`src/components/CleanFrySeal.tsx`](src/components/CleanFrySeal.tsx) — inline SVG seal:
   - Circle stroke + cream fill (`--color-cream` / espresso stroke, chili accent ring)
   - Arced text via SVG `<textPath>` on two paths
   - Center stack: Big Shoulders Display uppercase for `CLEAN FRY` + smaller `MOJO` / Newsreader for body arcs
   - Colors only from existing tokens (espresso, cream, chili, mango) — no purple, no black/white flat logo look
   - Accessible: `role="img"` + `aria-label` summarizing the claim
   - Optional slow rotate on the outer ring only via Framer (respect `useReducedMotion`); stamp-in on scroll when Story enters view

2. Wire into [`Story.tsx`](src/components/Story.tsx):
   - Keep two-column layout; on the image column, overlay or nest the seal (~140–180px) at a corner of the photo frame (bottom-left or overlapping the border) so it reads as a kitchen badge, not a floating sticker soup in the hero
   - Mobile: seal below the image or smaller corner overlay so it does not crush the photo

3. Do **not** add to footer or menu unless asked later.

## Verify
- Home Story at 1280 and 390: seal readable, arcs legible, no clash with Story headline
- Reduced-motion: no continuous spin
