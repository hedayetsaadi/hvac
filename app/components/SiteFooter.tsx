// Structured footer shared by every page.
import { siteConfig } from "../site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="brand brand-light" href="/"><span className="brand-mark">AC</span><span className="brand-words"><strong>{siteConfig.business.name}</strong><small>{siteConfig.business.descriptor}</small></span></a>
          <p>{siteConfig.business.tagline} Local expertise, clear options, and workmanship backed by our satisfaction promise.</p>
          <div className="footer-certifications"><span>Licensed</span><span>Insured</span><span>Background checked</span></div>
        </div>
        <div><h3>Explore</h3><a href="/about">About us</a><a href="/service-area">Service area</a><a href="/resources">Resources</a><a href="/financing">Financing</a></div>
        <div><h3>Services</h3>{siteConfig.services.slice(0,5).map((service) => <a key={service.title} href="/services">{service.title}</a>)}</div>
        <div className="footer-contact"><h3>Get in touch</h3><a className="footer-phone" href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phoneDisplay}</a><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a><address>{siteConfig.contact.address}</address><p>{siteConfig.hours[0]}<br />{siteConfig.hours[1]}</p></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.business.legalName}. All rights reserved.</span><span><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/accessibility">Accessibility</a></span></div>
    </footer>
  );
}
// End shared footer.
