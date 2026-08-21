// Shared readable layout for policy pages.
import { PageHero } from "./PageHero";

export function LegalPage({ eyebrow, title, intro, sections }: { eyebrow: string; title: string; intro: string; sections: { title: string; body: string }[] }) {
  return <><PageHero eyebrow={eyebrow} title={title} description={intro} /><section className="section legal-section"><div className="container legal-copy"><p className="legal-updated">Template policy copy • Review with qualified counsel before publishing</p>{sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}</div></section></>;
}
// End shared policy layout.
