import Link from "next/link";
import ImageFrame from "./ImageFrame";
import { formatInr, type Room } from "@/lib/content";

export default function RoomCard({ room, index }: { room: Room; index: number }) {
  return <article className="room-card"><Link href={`/stay/${room.slug}`} className="room-card-image"><ImageFrame src={room.image} alt={`Imagined ${room.name} interior`} /><span className="image-index">0{index + 1} / 03</span></Link><div className="room-card-body"><p className="eyebrow">{room.eyebrow}</p><h3><Link href={`/stay/${room.slug}`}>{room.name}</Link></h3><p>{room.description}</p><div className="room-card-meta"><span>{room.area} m² · Up to {room.occupancy} guests</span><span>From {formatInr(room.rate)} / night*</span></div><Link href={`/stay/${room.slug}`} className="text-link">Explore the room <span aria-hidden="true">↗</span></Link></div></article>;
}
