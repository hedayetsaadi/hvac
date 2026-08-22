# AeroComfort HVAC: GitHub Pages edition v1.0.9

<!-- v1.0.9 layout note: begin -->
This version uses concise single-line desktop hero headlines and three purpose-composed backgrounds with clear right-side subjects and quiet left-side copy space.
<!-- v1.0.9 layout note: end -->

<!-- v1.0.8 layout note: begin -->
This version makes photographic page heroes shorter and left-aligned, while returning desktop promise callouts to a space-efficient horizontal composition.
<!-- v1.0.8 layout note: end -->

<!-- v1.0.7 layout note: begin -->
This version gives photographic page heroes a restrained editorial treatment and visually distinguishes solid-color promise sections as bordered callouts.
<!-- v1.0.7 layout note: end -->

<!-- v1.0.6 layout note: begin -->
This version tightens the spacing inside centered introductions and extends the centered-stack treatment to page heroes, dark callout bands, and direct section headings.
<!-- v1.0.6 layout note: end -->

<!-- v1.0.5 layout note: begin -->
This version presents split section introductions as centered, single-column stacks for a clearer reading order and more cohesive page rhythm.
<!-- v1.0.5 layout note: end -->

This is a complete, no-build static HVAC website. Upload the contents of this folder to the root of a GitHub repository and enable GitHub Pages from the `main` branch.

## Rebrand for a new client

1. Edit `assets/site-config.js` for the business name, phone, WhatsApp number, email, hours, services, service areas, social links, and Google review details.
2. Replace the written copy in the HTML pages.
3. Replace `assets/og.png` with the client’s social sharing image.
4. Update page titles, descriptions, and the Open Graph URL in `index.html`.
5. Add a secure form endpoint to `formEndpoint` in `assets/site-config.js` if the client needs direct form delivery. Without one, the form opens the visitor’s email app.
6. Replace the financing and legal placeholder language with client-approved information before launch.
7. Replace the generated HVAC photography in `assets` with approved client photos whenever they are available.
8. Replace the example Facebook, Instagram, and YouTube URLs with the client’s real profile links before launch.

The Google review cards are a static snapshot so the site remains compatible with GitHub Pages. Update the rating, count, excerpts, and listing URL in `assets/site-config.js` when the source listing changes. Automatically synchronized reviews require a separate reviews service or a secure server-side Google Places integration.

## Included pages

- Home
- Services overview plus dedicated AC repair, heating repair, installation, maintenance, indoor-air-quality, and ductwork pages
- About
- Service area
- Resources and FAQs
- Blog listing plus three dedicated homeowner article pages
- Financing
- Contact and quote request
- Privacy, terms, accessibility, and custom 404

## One-shot GitHub upload

Open the repository upload page, drag every item inside this folder into the browser, and commit the upload. Keep `index.html` at the repository root.

