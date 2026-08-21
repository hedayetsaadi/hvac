// Contact and complete service-booking page.
import type { Metadata } from "next";
import { BookingForm } from "../components/BookingForm";
import { PageHero } from "../components/PageHero";
import { siteConfig } from "../site-config";

export const metadata: Metadata = { title: "Contact & Book Service", description: "Request an HVAC appointment or contact AeroComfort Heating & Air." };

export default function ContactPage() {
  return <><PageHero eyebrow="Contact" title="Tell us how we can help." description="Request an appointment online or call our local team. We’ll confirm availability and help you decide the right next step." aside="No heat, no cooling, or a safety concern? Call for the fastest response." /><section className="section contact-section"><div className="container contact-grid"><div className="contact-details"><p className="eyebrow">Talk with a person</p><h2>Friendly help starts here.</h2><a className="contact-phone" href={`tel:${siteConfig.contact.phoneHref}`}>{siteConfig.contact.phoneDisplay}<small>{siteConfig.contact.emergencyLabel}</small></a><a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a><address>{siteConfig.contact.address}</address><div className="hours-card"><h3>Office hours</h3>{siteConfig.hours.map((line) => <p key={line}>{line}</p>)}</div><p className="privacy-note">We use your information only to respond to your request and provide related service updates.</p></div><BookingForm /></div></section></>;
}
// End contact and booking page.
