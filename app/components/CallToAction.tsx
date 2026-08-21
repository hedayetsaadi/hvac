// Reusable closing call-to-action band.
import { siteConfig } from "../site-config";

export function CallToAction() {
  return <section className="cta-band"><div className="container cta-grid"><div><p className="eyebrow light">Ready when you are</p><h2>Comfort is one call away.</h2><p>Tell us what is happening and we’ll help you choose the right next step.</p></div><div className="cta-actions"><a className="button" href="/contact">Book service <span>→</span></a><a className="cta-phone" href={`tel:${siteConfig.contact.phoneHref}`}><small>Call our team</small>{siteConfig.contact.phoneDisplay}</a></div></div></section>;
}
// End closing call-to-action band.
