// Detailed services overview page.
import type { Metadata } from "next";
import { CallToAction } from "../components/CallToAction";
import { PageHero } from "../components/PageHero";
import { siteConfig } from "../site-config";

export const metadata: Metadata = { title: "HVAC Services", description: "Heating, cooling, air quality, maintenance, installation, and ductwork services for local homes." };

export default function ServicesPage() {
  return <><PageHero eyebrow="Services" title="Everything your home needs to stay comfortable." description="Repairs, replacements, maintenance, and healthier-air solutions—delivered with clear pricing and respectful service." aside="Not sure which service fits? Tell us the symptoms and we’ll guide you." /><section className="section"><div className="container stacked-services">{siteConfig.services.map((service, index) => <article key={service.title}><div className="service-number">0{index + 1}</div><div className="service-icon large">{service.icon}</div><div><h2>{service.title}</h2><p>{service.short}</p><ul>{service.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul></div><a className="outline-button" href="/contact">Request service</a></article>)}</div></section><section className="section decision-section"><div className="container decision-grid"><div><p className="eyebrow">Repair or replace?</p><h2>We’ll help you compare the real costs.</h2><p>Equipment age, repair history, efficiency, comfort, and your plans for the home all matter. We explain the tradeoffs without pushing a predetermined answer.</p></div><div className="comparison"><div><h3>Repair may make sense when…</h3><p>The system is younger, the repair is modest, and performance has otherwise been reliable.</p></div><div><h3>Replacement may make sense when…</h3><p>Breakdowns are frequent, comfort is uneven, or efficiency and long-term ownership cost are concerns.</p></div></div></div></section><CallToAction /></>;
}
// End services overview page.
