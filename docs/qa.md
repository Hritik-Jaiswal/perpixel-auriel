# Auriel release walkthrough — 25 November 2026

## Visual captures

- [Desktop arrival](screenshots/home-desktop.webp) — 1440 × 900.
- [Mobile arrival](screenshots/home-mobile.webp) — 360 × 800.
- [Mobile stay planner](screenshots/reserve-mobile.webp) — full page at 360px.
- [Property atlas](screenshots/atlas-desktop.webp) and [A day at Auriel](screenshots/day-desktop.webp) — desktop views.

## Walkthrough and observed results

1. Open the homepage at 360px, 820px and 1440px with reduced motion selected. The document width matched each viewport (360, 820 and 1440px); no horizontal overflow or browser page errors occurred.
2. At 360px, open the menu and follow **Stay**. The destination changed to `/stay`.
3. Open `/reserve` at 360px and try **Compare rooms** with empty dates. A visible validation error appears.
4. Choose 10–12 February 2027, two guests, Courtyard Room and the landscape walk. The review shows an illustrative subtotal of ₹27,000 (₹24,000 room + ₹3,000 experience). **Create demo itinerary** shows the no-reservation/no-payment disclosure.
5. Reset, then choose 14–17 January 2027. Pavilion Residence is disabled by the fixed unavailable-date fixture; Aravalli Suite remains selectable.
6. Open `/atlas` at 360px and select **Dining pavilion** from the location list. The detail panel changes to that location, with no horizontal overflow.

The six pure booking tests passed, including invalid dates, capacity, calendar-night arithmetic, sample totals and sold-out alternatives. `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` and `npm audit --omit=dev` passed after upgrading to Next.js 16.4.6. Core Web Vitals and WCAG audit scores were not measured; the brief's LCP, INP and CLS figures remain targets, not reported results. Real device and assistive technology review are still needed before any commercial adaptation.
