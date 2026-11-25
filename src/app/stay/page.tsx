import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/lib/content";

export const metadata: Metadata = { title: "Rooms & Suites" };

export default function StayPage() {
  return <main id="main"><PageIntro eyebrow="02 / Rooms & suites" title="Room to" italic="simply be.">Courtyard, hillside or a residence of your own. Compare three imagined ways to stay, with the practical details close at hand.</PageIntro><section className="section room-list">{rooms.map((room, index) => <RoomCard key={room.slug} room={room} index={index} />)}<p className="demo-note">The 24 keys, room specifications, inclusions and rates are creative assumptions for this fictional retreat. Taxes and fees are not included in sample nightly rates.</p></section></main>;
}
