/* Edit this one file to rebrand the static template for a new HVAC client. */
window.HVAC_SITE = {
  business: { name: "AeroComfort", initials: "AC", descriptor: "Heating & Air", tagline: "Reliable comfort. Right when you need it.", legalName: "AeroComfort Heating & Air LLC", yearStarted: 2008 },
  contact: { phoneDisplay: "(555) 014-8227", phoneHref: "+15550148227", whatsapp: "15550148227", email: "hello@aerocomfort.example", address: "2840 Meridian Parkway, Brookfield, ST 00000", emergencyLabel: "24/7 emergency support" },
  hours: ["Mon–Fri: 7:00 AM–7:00 PM", "Saturday: 8:00 AM–4:00 PM", "Sunday: Emergency service"],
  map: {
    title: "Map centered on the Brookfield service area",
    embedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-88.197%2C43.000%2C-88.016%2C43.121&layer=mapnik&marker=43.0606%2C-88.1065",
    externalUrl: "https://www.openstreetmap.org/?mlat=43.0606&mlon=-88.1065#map=12/43.0606/-88.1065"
  },
  formEndpoint: "",
  googleReviews: {
    rating: "5.0",
    count: 60,
    url: "https://www.google.com/maps/place/Continental+HVAC/@40.7230093,-151.8622136,3z/data=!4m12!1m2!2m1!1scontinental+hvac!3m8!1s0xad30879273efe8a3:0x85d6e615483733bf!8m2!3d40.7230093!4d-73.8153386!9m1!1b1!15sChBjb250aW5lbnRhbCBodmFjWhIiEGNvbnRpbmVudGFsIGh2YWOSAR9haXJfY29uZGl0aW9uaW5nX3JlcGFpcl9zZXJ2aWNlmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4YVdsWllUbWxsUmxKdFRtMDVjbGRzVGxGWlZsSnpZbGRLUmxGclJSQULgAQD6AQQIABAv!16s%2Fg%2F11m5j7mnwb?entry=ttu",
    reviews: [
      { name: "Ben A.", date: "February 2026", text: "Transparent estimate, prompt installation, and everything left clean. The new furnace works perfectly." },
      { name: "Ari A.", date: "February 2026", text: "Responsive and reliable. The issue was diagnosed quickly, repaired efficiently, and priced reasonably." },
      { name: "Alyssa C.", date: "February 2026", text: "Fast, knowledgeable service from a team I would confidently recommend for quality HVAC work." }
    ]
  },
  nav: [
    { key: "home", label: "Home", href: "index.html" },
    { key: "services", label: "Services", href: "services.html" },
    { key: "about", label: "About", href: "about.html" },
    { key: "area", label: "Service Area", href: "service-area.html" },
    { key: "resources", label: "Resources", href: "resources.html" },
    { key: "blog", label: "Blog", href: "blog.html" },
    { key: "contact", label: "Contact", href: "contact.html" }
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/", icon: "assets/social-facebook.svg" },
    { label: "Instagram", href: "https://www.instagram.com/", icon: "assets/social-instagram.svg" },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "assets/social-youtube.svg" }
  ],
  services: [
    { title: "AC Repair", href: "ac-repair.html", image: "assets/ac-repair-card-v1.0.11.avif", thumb: "assets/ac-repair-thumb-v1.0.11.avif", short: "Fast diagnostics and dependable repairs for every major cooling system.", features: ["Same-day appointments", "All makes and models", "Upfront repair options"] },
    { title: "Heating Repair", href: "heating-repair.html", image: "assets/heating-repair-card-v1.0.11.avif", thumb: "assets/heating-repair-thumb-v1.0.11.avif", short: "Safe, efficient furnace and heat pump repair when temperatures drop.", features: ["Furnaces and heat pumps", "Carbon monoxide checks", "Emergency availability"] },
    { title: "System Installation", href: "hvac-installation.html", image: "assets/system-installation-card-v1.0.11.avif", thumb: "assets/system-installation-thumb-v1.0.11.avif", short: "Right-sized, high-efficiency equipment designed around your home and budget.", features: ["Free replacement estimates", "Load calculations", "Manufacturer warranties"] },
    { title: "Maintenance", href: "hvac-maintenance.html", image: "assets/maintenance-card-v1.0.11.avif", thumb: "assets/maintenance-thumb-v1.0.11.avif", short: "Seasonal tune-ups that improve performance and help prevent surprise breakdowns.", features: ["Cooling and heating checks", "Priority scheduling", "Member savings"] },
    { title: "Indoor Air Quality", href: "indoor-air-quality.html", image: "assets/indoor-air-quality-card-v1.0.11.avif", thumb: "assets/indoor-air-quality-thumb-v1.0.11.avif", short: "Cleaner indoor air with filtration, humidity, and ventilation solutions.", features: ["Air quality testing", "Whole-home filtration", "Humidity control"] },
    { title: "Ductwork", href: "ductwork.html", image: "assets/ductwork-card-v1.0.11.avif", thumb: "assets/ductwork-thumb-v1.0.11.avif", short: "Repair, sealing, and airflow balancing for quieter, more even comfort.", features: ["Leak detection", "Airflow balancing", "Insulation upgrades"] }
  ],
  serviceAreas: ["Brookfield", "Cedar Grove", "Fairview", "Lakewood", "Maple Heights", "North Ridge", "Oak Valley", "Riverside", "Westhaven"]
};
/* End reusable static client configuration. */
