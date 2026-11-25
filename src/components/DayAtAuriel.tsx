"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const chapters = [
  { time: "06:30", title: "The hills, before the heat", body: "Begin with an imagined guided walk as the first light finds the ridgeline.", image: "/images/courtyard.webp", href: "/experiences#landscape-walk", action: "The landscape walk", tone: "dawn" },
  { time: "08:30", title: "Breakfast has no hurry", body: "Fruit, warm bread and a table held in the shade of the dining pavilion.", image: "/images/dining.webp", href: "/dining", action: "At the table", tone: "morning" },
  { time: "12:00", title: "Hands remember", body: "Learn the rhythm of a block print, a pattern built one careful impression at a time.", image: "/images/craft.webp", href: "/experiences#craft-session", action: "Cloth & colour", tone: "midday" },
  { time: "16:30", title: "A long afternoon pause", body: "Tea arrives as the shadows travel across the courtyard floor.", image: "/images/courtyard.webp", href: "/retreat", action: "The retreat", tone: "afternoon" },
  { time: "19:30", title: "Gather at the table", body: "Seasonal regional dishes arrive slowly, with room for one more story.", image: "/images/dining.webp", href: "/dining", action: "Discover dining", tone: "evening" },
  { time: "21:00", title: "The courtyard settles", body: "A final walk beneath the arches before the rooms turn quiet.", image: "/images/courtyard.webp", href: "/stay", action: "Find your room", tone: "night" },
] as const;

export default function DayAtAuriel() {
  const [active, setActive] = useState(0);
  const chapter = chapters[active];
  return <section className="day-section" aria-labelledby="day-heading"><div className="day-heading"><p className="eyebrow">04 / A day at Auriel</p><h2 id="day-heading">Let the day<br /><em>take its time.</em></h2><p>Six moments. Choose one to see how a day might unfold.</p></div><div className="day-body"><div className={`day-visual tone-${chapter.tone}`}><Image src={chapter.image} alt="Imagined moment at Auriel" fill sizes="(min-width: 760px) 60vw, 100vw" /><span className="day-image-label">{chapter.time} / {chapter.title}</span></div><div className="day-controls"><div className="day-tabs" role="tablist" aria-label="Time of day">{chapters.map((item, index) => <button key={item.time} type="button" role="tab" id={`day-tab-${index}`} aria-controls="day-panel" aria-selected={active === index} tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => { if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); const next = (index + (event.key === "ArrowRight" ? 1 : -1) + chapters.length) % chapters.length; setActive(next); document.getElementById(`day-tab-${next}`)?.focus(); } }}><span>{item.time}</span><span>{item.title}</span></button>)}</div><div id="day-panel" role="tabpanel" aria-labelledby={`day-tab-${active}`} className="day-panel"><span className="eyebrow">A moment to keep</span><h3>{chapter.title}</h3><p>{chapter.body}</p><Link href={chapter.href} className="text-link">{chapter.action} <span aria-hidden="true">↗</span></Link></div></div></div></section>;
}
