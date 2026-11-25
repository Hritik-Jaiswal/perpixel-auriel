import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Auriel — The art of being elsewhere", template: "%s — Auriel" },
  description: "Explore Auriel, a self-initiated fictional retreat concept by PerPixel. Discover imagined rooms, dining, experiences and a simulated stay-planning journey.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><SiteHeader />{children}<SiteFooter /></body></html>;
}
