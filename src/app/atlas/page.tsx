import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import Atlas from "@/components/Atlas";

export const metadata: Metadata = { title: "Property Atlas" };
export default function AtlasPage() { return <main id="main"><PageIntro eyebrow="05 / Property atlas" title="Find your" italic="own way.">Explore six corners of an imagined retreat. Choose a numbered place on the plan or use the location list beside it.</PageIntro><section className="section atlas-page"><Atlas /><p className="demo-note">This is an original schematic of a fictional property. It is not a surveyed site plan, a map pin or travel guidance.</p></section></main>; }
