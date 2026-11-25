import Link from "next/link";

export default function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-top"><div><p className="eyebrow">A quieter way to arrive</p><h2>The art of<br /><em>being elsewhere.</em></h2></div><Link href="/reserve" className="button button-light">Curate your stay <span aria-hidden="true">↗</span></Link></div>
    <div className="footer-bottom"><Link href="/" className="footer-wordmark">AURIEL</Link><div><Link href="/retreat">The retreat</Link><Link href="/stay">Stay</Link><Link href="/dining">Dining</Link><Link href="/experiences">Experiences</Link><Link href="/atlas">Atlas</Link><Link href="/journal">Journal</Link><Link href="/contact">Contact</Link></div><p>Fictional hospitality concept by <a href="https://perpixel.agency/" target="_blank" rel="noopener noreferrer">PerPixel ↗</a><br />No real property or reservations.</p></div>
  </footer>;
}
