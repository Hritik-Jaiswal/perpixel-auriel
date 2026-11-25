export type Room = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  detail: string;
  image: string;
  area: number;
  occupancy: number;
  beds: string;
  rate: number;
  keys: number;
  inclusions: string[];
  amenities: string[];
  accessibility: string;
};

export const rooms: Room[] = [
  { slug: "courtyard-room", name: "Courtyard Room", eyebrow: "01 / Close to the courtyard", description: "A quiet room that opens towards the planted heart of the retreat.", detail: "Morning light moves over limewash, handwoven cotton and a sheltered window seat. The courtyard is close enough to feel part of the room, with space to step away from it.", image: "/images/courtyard-room.webp", area: 32, occupancy: 2, beds: "One king bed", rate: 12000, keys: 12, inclusions: ["Breakfast for two", "Filtered drinking water", "Access to shared courtyards"], amenities: ["Air conditioning", "Wi-Fi", "Tea service", "Walk-in shower"], accessibility: "Step-free room request is illustrative; accessibility needs require confirmation with a real operator." },
  { slug: "aravalli-suite", name: "Aravalli Suite", eyebrow: "02 / A room to linger", description: "A generous suite with an arched seat facing the imagined hills.", detail: "A low teak bed, a deep window niche and a little more room to stay with a book. The suite is composed around the view and the changing light.", image: "/images/suite.webp", area: 52, occupancy: 3, beds: "One king bed and optional daybed", rate: 19000, keys: 8, inclusions: ["Breakfast for up to three", "Filtered drinking water", "Evening tea service"], amenities: ["Air conditioning", "Wi-Fi", "Tea service", "Walk-in shower", "Window seat"], accessibility: "Accessibility features are not verified for this fictional property." },
  { slug: "pavilion-residence", name: "Pavilion Residence", eyebrow: "03 / Space to settle in", description: "An intimate residence with a separate sitting space and shaded terrace.", detail: "Set at the imagined edge of the property, the residence opens towards a private terrace. Teak, limewash and woven textures give each room space to breathe.", image: "/images/pavilion.webp", area: 78, occupancy: 4, beds: "One king bed and two daybeds", rate: 28000, keys: 4, inclusions: ["Breakfast for up to four", "Filtered drinking water", "Evening tea service", "Private terrace"], amenities: ["Air conditioning", "Wi-Fi", "Tea service", "Walk-in shower", "Separate sitting room"], accessibility: "Accessibility features are not verified for this fictional property." },
];

export type Experience = { slug: string; name: string; description: string; duration: string; intensity: string; rate: number; basis: string; image: string; availability: string };
export const experiences: Experience[] = [
  { slug: "landscape-walk", name: "The landscape walk", description: "Follow the contours of an imagined morning route through dry hills and local plant life.", duration: "90 minutes", intensity: "Moderate", rate: 1500, basis: "per person", image: "/images/courtyard.webp", availability: "Sample morning departure; weather dependent" },
  { slug: "craft-session", name: "Cloth & colour", description: "A quiet introduction to block printing, material and pattern in the craft courtyard.", duration: "2 hours", intensity: "Gentle", rate: 2000, basis: "per person", image: "/images/craft.webp", availability: "Sample afternoon session; limited places" },
  { slug: "seasonal-dinner", name: "At the shared table", description: "A seasonal sequence of regional dishes served slowly as the courtyard lamps come on.", duration: "2 hours", intensity: "Seated", rate: 3000, basis: "per person", image: "/images/dining.webp", availability: "Sample evening seating; dietary requests need confirmation" },
];

export const formatInr = (value: number) => `₹${value.toLocaleString("en-IN")}`;

export type Story = { slug: string; number: string; title: string; category: string; image: string; summary: string; paragraphs: string[] };
export const stories: Story[] = [
  { slug: "shape-of-shade", number: "01", title: "The shape of shade", category: "Architecture", image: "/images/courtyard.webp", summary: "An imagined note on arches, jaali screens and the cool spaces they make.", paragraphs: ["Auriel begins with a threshold. The imagined entrance gives way to a long, shaded court where the building softens the sun before it meets the guest.", "Jaali openings scatter small patches of light across limewash. Deep arches frame the hills while keeping the nearest rooms private. This language is a creative study in climate and material; a real property would need site-specific architectural and environmental work.", "The most useful luxury in this concept is room to notice: a change in temperature, a shift of shadow, the sound of water close to a wall."] },
  { slug: "pattern-made-slowly", number: "02", title: "A pattern, made slowly", category: "Craft", image: "/images/craft.webp", summary: "A look at the rhythm of block printing that informs Auriel’s material story.", paragraphs: ["A single block carries only part of a pattern. The fuller shape appears through repetition, alignment and the hand that places each impression.", "For Auriel, that patient rhythm suggests a way to use pattern sparingly: on a woven throw, a printed cloth or the shadow of a screen. It also suggests an experience built around making, rather than a decorative performance for guests.", "The proposed craft session is fictional. A real programme would need collaboration, consent, fair pay and proper attribution for participating makers."] },
  { slug: "evening-around-the-table", number: "03", title: "An evening around the table", category: "Food", image: "/images/dining.webp", summary: "How the concept kitchen might let seasonal regional dishes set the pace.", paragraphs: ["The dining pavilion is imagined for a conversation that has time to wander. Food arrives in courses to share, with the season and region leading the menu.", "The sample direction favours warm bread, local grains, vegetables and slowly cooked dishes. The website presents this as a proposal, never as a promise from an operating kitchen.", "A real menu would need a chef’s voice, sourced ingredients, verified allergen information, prices and service hours. Here, the table shows how food can make the retreat feel particular before a guest arrives."] },
];
