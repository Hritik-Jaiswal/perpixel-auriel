import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ImageFrame from "@/components/ImageFrame";
import { experiences, formatInr } from "@/lib/content";

export const metadata: Metadata = { title: "Experiences" };
export default function ExperiencesPage() {
  return <main id="main"><PageIntro eyebrow="04 / Experiences" title="Beyond the" italic="expected.">A little more time with landscape, craft and the table. Each experience below is an illustrative proposal.</PageIntro><section className="section experience-list">{experiences.map((item, index) => <article className="experience-row" key={item.slug} id={item.slug}><ImageFrame src={item.image} alt={`Imagined ${item.name.toLowerCase()} scene`} /><div><p className="eyebrow">0{index + 1} / A moment to make</p><h2>{item.name}</h2><p>{item.description}</p><dl><div><dt>Duration</dt><dd>{item.duration}</dd></div><div><dt>Intensity</dt><dd>{item.intensity}</dd></div><div><dt>Sample price</dt><dd>{formatInr(item.rate)} {item.basis}</dd></div><div><dt>Assumed availability</dt><dd>{item.availability}</dd></div></dl><Link href="/reserve" className="text-link">Add to an imagined stay <span aria-hidden="true">↗</span></Link></div></article>)}</section><p className="section demo-note">All activities, schedules, partners and prices are fictional. The landscape walk and craft session make no health or therapeutic claims.</p></main>;
}
