// Friendly fallback for unknown routes.
export default function NotFound() { return <section className="not-found"><div><span>404</span><h1>That page stepped out for a tune-up.</h1><p>The address may have changed. Let’s get you back to a comfortable place.</p><div className="hero-actions"><a className="button" href="/">Return home</a><a className="outline-button" href="/contact">Contact us</a></div></div></section>; }
// End unknown-route fallback.
