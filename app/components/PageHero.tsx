// Compact reusable hero for interior pages.
export function PageHero({ eyebrow, title, description, aside }: { eyebrow: string; title: string; description: string; aside?: string }) {
  return (
    <section className="page-hero"><div className="container page-hero-grid"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>{aside && <div className="page-hero-aside"><span>Good to know</span><p>{aside}</p></div>}</div></section>
  );
}
// End interior page hero.
