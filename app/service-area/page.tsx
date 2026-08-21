// Local service-area page with city coverage and visit expectations.
import type { Metadata } from "next";
import { CallToAction } from "../components/CallToAction";
import { PageHero } from "../components/PageHero";
import { siteConfig } from "../site-config";

export const metadata: Metadata = { title: "Service Area", description: "See the communities served by AeroComfort Heating & Air and request local HVAC service." };

export default function ServiceAreaPage() {
  return <><PageHero eyebrow="Service area" title="Your neighborhood comfort team." description="We provide responsive residential heating and cooling service throughout Brookfield and nearby communities." aside="Outside the listed area? Call us—availability varies by day and project." /><section className="section area-section"><div className="container area-grid"><div className="map-art" aria-label="Illustrated service area map"><div className="map-ring ring-one" /><div className="map-ring ring-two" /><span className="map-pin">AC</span>{siteConfig.serviceAreas.slice(0,6).map((area, index) => <i key={area} style={{ "--x": `${18 + ((index * 23) % 67)}%`, "--y": `${18 + ((index * 31) % 65)}%` } as React.CSSProperties} />)}</div><div><p className="eyebrow">Proudly serving</p><h2>Fast help, close to home.</h2><p>Local routes help us respond quickly, maintain parts availability, and build long-term relationships with the homeowners we serve.</p><div className="area-list">{siteConfig.serviceAreas.map((area) => <span key={area}>⌖ {area}</span>)}</div><a className="button" href="/contact">Check availability <span>→</span></a></div></div></section><section className="section light-section"><div className="container visit-grid"><article><span>1</span><h3>Arrival updates</h3><p>We confirm the appointment and let you know when your technician is on the way.</p></article><article><span>2</span><h3>Prepared technicians</h3><p>Our service vehicles carry common parts and diagnostic tools for efficient visits.</p></article><article><span>3</span><h3>Respect for your home</h3><p>We use protective coverings, explain the work, and clean the area before leaving.</p></article></div></section><CallToAction /></>;
}
// End local service-area page.
