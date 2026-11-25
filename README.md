# Auriel

Auriel is a self-initiated PerPixel concept for a **fictional** 24-key retreat in the Aravalli foothills outside Udaipur. There is no property, address, operator, live inventory, reservation service or payment flow. The site demonstrates how an architectural editorial identity can support practical stay planning.

## Run locally

Requires Node.js 22.13 or newer (or a supported Node.js 20/24 release).

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
```

## Architecture

- Next.js App Router, React, TypeScript and custom CSS. Static page content remains in Server Components.
- `src/lib/content.ts`: typed room and experience assumptions, shared across pages and planner.
- `src/lib/booking.ts`: pure date validation, deterministic unavailable-date fixture and itemized quote calculation.
- `src/components/BookingJourney.tsx`: local four-stage planner. Dates, guests, room, add-ons, review and demo confirmation. No backend, personal details, analytics or payment.
- `src/components/Atlas.tsx`: original SVG schematic with keyboard-friendly hotspot buttons and an equivalent location list.
- `src/components/DayAtAuriel.tsx`: six explicit time controls; reduced-motion CSS removes visual transitions.
- `src/app/`: home, retreat, stay and three room details, dining, experiences, atlas, three journal stories, contact and reserve routes.
- `docs/qa.md`: release walkthrough, screenshots, observed checks and unmeasured quality targets.

The three room types have sample inventory of 12, 8 and 4 keys. Nightly rates, prices, hours, inclusions and activity assumptions are illustrative INR values. Taxes and fees are explicitly excluded from demo totals. The Pavilion Residence is unavailable on 14–17 January 2027 in a fixed local fixture. No real availability is represented.

## Imagery

The six WebP files in `public/images/` are original AI-generated Auriel concept scenes made with the built-in image generation tool on 25 November 2026, then optimized with Sharp. The user's supplied hotel photographs and homepage studies informed the direction but were not copied. These images are imagined property illustrations, never evidence of a real venue.

Prompt set (all photorealistic natural editorial scenes of an **original fictional** contemporary Indian heritage retreat near Udaipur; no text, logos, gilding, palace spectacle or generic hotel styling):

1. `courtyard.webp` — A wide early-morning limewashed sandstone courtyard, broad shaded arch, still water channel, jaali shadows, sparse native trees and dry Aravalli hills, with left-side breathing room for a headline.
2. `suite.webp` — Intimate suite with low teak bed, ivory and terracotta handwoven textiles, arched hillside window seat, sandstone floor and soft jaali shadow.
3. `dining.webp` — Open-sided dining pavilion at dusk, seasonal regional dinner on a simple sandstone shared table, ceramic bowls, warm lamps and hills beyond.
4. `craft.webp` — Artisan hands arranging block-printed cloth, carved blocks and pigments in a shaded limewashed craft courtyard with patterned sunlight.
5. `courtyard-room.webp` — Smaller Courtyard Room opening through a pale sandstone arch to a planted inner court, teak bed, olive cushions and morning light.
6. `pavilion.webp` — Private Pavilion Residence with a separate low-teak-bed space, sitting room, shaded terrace and Aravalli view in calm afternoon light.

The property atlas is an original code-native SVG schematic. It is not a surveyed map. The wordmark and interface lettering are rendered with locally bundled Cormorant Garamond and Manrope through Fontsource packages. The supplied SVG studies informed the typographic direction but were not copied.

## Production boundary

The intended demo host is `auriel.perpixel.agency`. Deploy the repository to the correct Vercel workspace, then verify the production build and URL. Add the subdomain only with the exact Vercel-provided DNS records, preserving the existing PerPixel, Other Table and mail records. A real hotel launch would also need verified property and accessibility facts, a PMS/booking provider, real availability, taxes, policies, consent, secure personal-data handling and operator-approved imagery.
