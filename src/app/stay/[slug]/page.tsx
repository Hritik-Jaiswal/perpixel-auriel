import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageFrame from "@/components/ImageFrame";
import { formatInr, rooms } from "@/lib/content";

export function generateStaticParams() { return rooms.map((room) => ({ slug: room.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const room = rooms.find((item) => item.slug === slug); return { title: room?.name || "Room" }; }

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = rooms.find((item) => item.slug === slug);
  if (!room) notFound();
  return <main id="main"><section className="page-intro room-intro"><Link href="/stay" className="back-link">← All rooms & suites</Link><p className="eyebrow">{room.eyebrow}</p><h1>{room.name.split(" ")[0]}<br /><em>{room.name.split(" ").slice(1).join(" ")}</em></h1><p>{room.description}</p></section><ImageFrame src={room.image} alt={`Imagined ${room.name} interior`} className="page-hero-image" priority /><section className="section room-details"><div><p className="eyebrow">A room of your own</p><h2>Stay with<br /><em>the moment.</em></h2><p>{room.detail}</p><Link href="/reserve" className="button button-olive">Curate a stay <span aria-hidden="true">↗</span></Link></div><div className="room-facts"><div><span>Area</span><strong>{room.area} m²</strong></div><div><span>Occupancy</span><strong>Up to {room.occupancy} guests</strong></div><div><span>Bed</span><strong>{room.beds}</strong></div><div><span>Illustrative rate</span><strong>From {formatInr(room.rate)} / night*</strong></div><div><span>Sample inventory</span><strong>{room.keys} keys</strong></div></div></section><section className="section details-columns"><div><p className="eyebrow">Included in the example</p><h2>Small comforts,<br /><em>considered.</em></h2><ul>{room.inclusions.map((item) => <li key={item}>{item}</li>)}</ul></div><div><p className="eyebrow">Room amenities</p><ul>{room.amenities.map((item) => <li key={item}>{item}</li>)}</ul><p className="demo-note">{room.accessibility}</p></div></section><p className="section demo-note">*Rate, amenities and inventory are illustrative. Taxes and fees are not included. Auriel is a fictional property with no real availability.</p></main>;
}
