// Responsive, shrinking site navigation with active-page highlighting.
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "../site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const active = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={`site-header${compact ? " compact" : ""}`}>
      <div className="container nav-row">
        <a className="brand" href="/" aria-label={`${siteConfig.business.name} home`}>
          <span className="brand-mark" aria-hidden="true">AC</span>
          <span className="brand-words"><strong>{siteConfig.business.name}</strong><small>{siteConfig.business.descriptor}</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteConfig.nav.map((item) => <a key={item.href} className={active(item.href) ? "active" : ""} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-phone" href={`tel:${siteConfig.contact.phoneHref}`}><span>Call now</span>{siteConfig.contact.phoneDisplay}</a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}><i /><i /><i /></button>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
        <nav className="container" aria-label="Mobile navigation">
          {siteConfig.nav.map((item) => <a key={item.href} className={active(item.href) ? "active" : ""} href={item.href}>{item.label}<span>→</span></a>)}
          <a className="button" href="/contact">Book service</a>
        </nav>
      </div>
    </header>
  );
}
// End responsive site navigation.
