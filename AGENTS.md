# Auriel project rules

Auriel is a fictional, self-initiated PerPixel hospitality concept. Preserve that disclosure. Never imply a real property, location pin, availability feed, reservation, payment, review or measured business result.

- Read `README.md` and the relevant installed Next.js docs before changing route conventions or framework APIs.
- Keep static page content in Server Components. Use Client Components only for navigation, atlas, day selector and booking interactions.
- Brand: limewash, sandstone, terracotta, olive, dark teak; editorial serif with readable sans utility text. No generic palace imagery or ornamental gold.
- Use original/generated imagery in `public/images`; record source and prompts in README. Do not copy reference photographs without a license.
- Booking is local and deterministic. Do not collect personal details, submit forms, or charge money. Validate dates, occupancy and unavailable inventory before showing a demo itinerary.
- Keep all controls keyboard accessible, respect reduced motion, and test at 360px, tablet and desktop widths.
- Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build` before release. Report checks that were not run.
