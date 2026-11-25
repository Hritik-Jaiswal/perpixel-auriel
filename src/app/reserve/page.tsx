import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import BookingJourney from "@/components/BookingJourney";

export const metadata: Metadata = { title: "Curate Your Stay" };
export default function ReservePage() { return <main id="main"><PageIntro eyebrow="08 / Curate your stay" title="A quieter way" italic="to arrive.">Choose dates, compare rooms and build an illustrative itinerary. This is a demo: no availability feed, reservation, payment or personal details.</PageIntro><section className="section reserve-page"><BookingJourney /></section></main>; }
