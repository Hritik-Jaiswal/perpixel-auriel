import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import ImageFrame from "@/components/ImageFrame";
import { stories } from "@/lib/content";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return <main id="main"><PageIntro eyebrow="06 / Journal" title="Notes from" italic="elsewhere.">Short editorial studies in architecture, craft and food. These are concept stories, not reporting from a real property.</PageIntro><section className="section journal-grid">{stories.map((story) => <article key={story.slug}><Link href={`/journal/${story.slug}`} aria-label={`Read ${story.title}`}><ImageFrame src={story.image} alt={`Imagined scene for ${story.title}`} /></Link><p className="eyebrow">{story.number} / {story.category}</p><h2><Link href={`/journal/${story.slug}`}>{story.title}</Link></h2><p>{story.summary}</p><Link href={`/journal/${story.slug}`} className="text-link">Read the story <span aria-hidden="true">↗</span></Link></article>)}</section></main>;
}
