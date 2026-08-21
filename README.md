# AeroComfort HVAC: GitHub Pages edition

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
- Services
- About
- Service area
- Resources and FAQs
- Blog with three complete homeowner articles
- Financing
- Contact and quote request
- Privacy, terms, accessibility, and custom 404

## One-shot GitHub upload

Open the repository upload page, drag every item inside this folder into the browser, and commit the upload. Keep `index.html` at the repository root.

