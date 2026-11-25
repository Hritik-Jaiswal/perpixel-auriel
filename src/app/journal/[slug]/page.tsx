import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImageFrame from "@/components/ImageFrame";
import { stories } from "@/lib/content";

export function generateStaticParams() { return stories.map((story) => ({ slug: story.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; return { title: stories.find((item) => item.slug === slug)?.title || "Journal" }; }

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!story) notFound();
  return <main id="main"><section className="page-intro story-intro"><Link href="/journal" className="back-link">← All journal stories</Link><p className="eyebrow">{story.number} / {story.category}</p><h1>{story.title}</h1><p>{story.summary}</p></section><ImageFrame src={story.image} alt={`Imagined scene for ${story.title}`} className="page-hero-image" priority /><article className="section story-body">{story.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p className="demo-note">Auriel is a fictional hospitality concept by PerPixel. This essay describes its proposed design direction.</p><Link href="/journal" className="text-link">More journal stories <span aria-hidden="true">↗</span></Link></article></main>;
}
