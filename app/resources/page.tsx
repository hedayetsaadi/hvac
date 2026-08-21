// Homeowner resource center with guides and frequently asked questions.
import type { Metadata } from "next";
import { CallToAction } from "../components/CallToAction";
import { PageHero } from "../components/PageHero";
import { siteConfig } from "../site-config";

export const metadata: Metadata = { title: "HVAC Resources", description: "Practical heating and cooling guides, maintenance tips, and answers for homeowners." };

const guides = [
  { tag: "Cooling", title: "7 signs your AC needs professional attention", text: "Learn which sounds, smells, airflow changes, and performance issues should prompt a service call.", time: "5 min read" },
  { tag: "Maintenance", title: "A simple seasonal HVAC checklist", text: "Small homeowner tasks that support system performance between professional tune-ups.", time: "4 min read" },
  { tag: "Efficiency", title: "What HVAC efficiency ratings actually mean", text: "A plain-language guide to SEER2, AFUE, HSPF2, and how ratings affect real-world decisions.", time: "6 min read" },
  { tag: "Air quality", title: "Choosing the right whole-home air filter", text: "Compare common filter options without accidentally restricting airflow through your system.", time: "5 min read" },
  { tag: "Heating", title: "Heat pump or furnace: what fits your home?", text: "Understand comfort, climate, fuel, and budget considerations before making a choice.", time: "7 min read" },
  { tag: "Planning", title: "How to prepare for an HVAC replacement", text: "Questions to ask, information to gather, and what to expect on installation day.", time: "6 min read" },
];

export default function ResourcesPage() {
  return <><PageHero eyebrow="Resource center" title="Practical guidance for a more comfortable home." description="Understand your system, spot problems earlier, and make informed decisions with clear advice from local HVAC professionals." /><section className="section"><div className="container"><div className="resource-grid">{guides.map((guide, index) => <article className={index === 0 ? "featured-resource" : ""} key={guide.title}><span className="resource-tag">{guide.tag}</span><h2>{guide.title}</h2><p>{guide.text}</p><a href="/contact">Ask our team <span>→</span></a><small>{guide.time}</small></article>)}</div></div></section><section className="section faq-section"><div className="container faq-grid"><div><p className="eyebrow">Common questions</p><h2>Quick answers from our technicians.</h2><p>Every home is different, but these answers are a helpful place to start.</p></div><div className="faq-list">{siteConfig.faqs.map((faq, index) => <details key={faq.q} open={index === 0}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>)}</div></div></section><CallToAction /></>;
}
// End homeowner resource center.
