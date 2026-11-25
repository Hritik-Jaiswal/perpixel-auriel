import Link from "next/link";
import ImageFrame from "@/components/ImageFrame";
import RoomCard from "@/components/RoomCard";
import DayAtAuriel from "@/components/DayAtAuriel";
import Atlas from "@/components/Atlas";
import { rooms } from "@/lib/content";

export default function HomePage() {
  return <main id="main">
    <section className="home-hero" aria-labelledby="hero-title"><ImageFrame src="/images/courtyard.webp" alt="Imagined limewashed Auriel courtyard overlooking the Aravalli hills" priority className="hero-image" /><div className="hero-shade" /><div className="hero-content"><p className="eyebrow light">An imagined retreat · Aravalli foothills</p><h1 id="hero-title">The art of<br /><em>being elsewhere.</em></h1><p>Rooted in heritage. Removed from the ordinary.</p><Link href="/retreat" className="button button-light">Explore the retreat <span aria-hidden="true">↗</span></Link></div><div className="hero-caption">01 / A quieter way to arrive</div></section>
    <section className="arrival-strip" aria-label="Plan a stay"><p>Begin with the details of a slower day.</p><Link href="/reserve" className="arrival-link"><span>Arrival</span><strong>Choose dates</strong><span>Departure</span><strong>At your pace</strong><span>Guests</span><strong>1–4 people</strong><b>Explore stays ↗</b></Link></section>
    <section className="section residence-section"><div className="section-heading"><p className="eyebrow">01 / The residence</p><h2>Room to<br /><em>simply be.</em></h2><p>Three ways to settle in. Each room makes space for light, landscape and a little quiet.</p><Link href="/stay" className="text-link">Discover all rooms <span aria-hidden="true">↗</span></Link></div><div className="residence-feature"><ImageFrame src="/images/suite.webp" alt="Imagined Aravalli Suite with a hillside window seat" /><div><span>24 imagined keys</span><span>Three room types</span></div></div></section>
    <section className="section room-preview" aria-label="Room types">{rooms.map((room, index) => <RoomCard key={room.slug} room={room} index={index} />)}<p className="demo-note">*Room inventory and rates are illustrative. Auriel is a fictional property.</p></section>
    <section className="immersive-split"><ImageFrame src="/images/craft.webp" alt="Imagined craft encounter with hand-block printed textiles" /><div className="split-copy"><p className="eyebrow">02 / Beyond the expected</p><h2>The pleasure<br />of <em>attention.</em></h2><p>Make time for a landscape walk, the rhythm of making, or a long dinner under the evening sky.</p><Link href="/experiences" className="text-link">Explore experiences <span aria-hidden="true">↗</span></Link></div></section>
    <section className="section dining-teaser"><div><p className="eyebrow">03 / At the table</p><h2>What the season<br /><em>brings in.</em></h2><p>Regional ingredients, a shared table and the welcome pause between courses.</p><Link href="/dining" className="text-link">Discover dining <span aria-hidden="true">↗</span></Link></div><ImageFrame src="/images/dining.webp" alt="Imagined regional dinner in Auriel's open dining pavilion" /></section>
    <DayAtAuriel />
    <section className="section atlas-home"><div className="section-heading compact"><p className="eyebrow">05 / Property atlas</p><h2>Find your<br /><em>own way.</em></h2><p>Explore the courtyards and quiet corners of an imagined retreat.</p></div><Atlas compact /><Link href="/atlas" className="text-link">Explore the full atlas <span aria-hidden="true">↗</span></Link></section>
    <section className="section closing-invitation"><p className="eyebrow">06 / The invitation</p><h2>Come away.<br /><em>Come closer.</em></h2><p>Put together an illustrative stay. Choose dates, compare rooms and see the whole itinerary before you decide.</p><Link href="/reserve" className="button button-olive">Curate your stay <span aria-hidden="true">↗</span></Link><small>A demonstration only. No reservation or payment is made.</small></section>
  </main>;
}
