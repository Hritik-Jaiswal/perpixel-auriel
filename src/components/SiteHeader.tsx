"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/retreat", label: "The retreat" },
  { href: "/stay", label: "Stay" },
  { href: "/dining", label: "Dining" },
  { href: "/experiences", label: "Experiences" },
  { href: "/atlas", label: "Atlas" },
  { href: "/journal", label: "Journal" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="Auriel home" onClick={() => setOpen(false)}>AURIEL<span>AN IMAGINED RETREAT</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname.startsWith(link.href) ? "page" : undefined}>{link.label}</Link>)}
        </nav>
        <div className="header-actions">
          <Link href="/reserve" className="button button-olive header-reserve">Curate a stay <span aria-hidden="true">↗</span></Link>
          <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "☰"}</span></button>
        </div>
      </div>
      <nav id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} aria-label="Mobile navigation" inert={!open}>
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></Link>)}
        <Link href="/reserve" onClick={() => setOpen(false)}>Curate a stay<span aria-hidden="true">↗</span></Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Arrival & questions<span aria-hidden="true">↗</span></Link>
      </nav>
    </header>
  );
}
