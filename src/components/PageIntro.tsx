import type { ReactNode } from "react";

export default function PageIntro({ eyebrow, title, italic, children }: { eyebrow: string; title: string; italic: string; children: ReactNode }) {
  return <section className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}<br /><em>{italic}</em></h1><p>{children}</p></section>;
}
