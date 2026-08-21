// Financing information and application-preparation page.
import type { Metadata } from "next";
import { CallToAction } from "../components/CallToAction";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = { title: "HVAC Financing", description: "Explore flexible financing options for qualifying HVAC replacement and improvement projects." };

export default function FinancingPage() {
  return <><PageHero eyebrow="Financing" title="Comfort now. A payment plan that fits." description="Flexible financing can help make an unexpected replacement or planned efficiency upgrade easier to manage." aside="Financing is subject to credit approval. Available plans and terms can change." /><section className="section"><div className="container"><div className="financing-grid"><article><span>01</span><h2>Choose your project</h2><p>We prepare clear equipment options and a written project estimate before financing is discussed.</p></article><article><span>02</span><h2>Review available plans</h2><p>Compare qualifying promotional and fixed-payment options, including term and estimated monthly payment.</p></article><article><span>03</span><h2>Apply securely</h2><p>Complete a lender application through a secure link. Most applicants receive a decision quickly.</p></article></div><div className="financing-note"><div><p className="eyebrow">Planning checklist</p><h2>Know the full project, not just the monthly number.</h2></div><ul><li>Equipment and labor included</li><li>Warranty coverage</li><li>Interest rate and promotional period</li><li>Total financed amount</li><li>Early-payment terms</li></ul></div></div></section><CallToAction /></>;
}
// End financing page.
