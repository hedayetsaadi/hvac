/* Edit this one file to rebrand the static template for a new HVAC client. */
window.HVAC_SITE = {
  business: { name: "AeroComfort", initials: "AC", descriptor: "Heating & Air", tagline: "Reliable comfort. Right when you need it.", legalName: "AeroComfort Heating & Air LLC", yearStarted: 2008 },
  contact: { phoneDisplay: "(555) 014-8227", phoneHref: "+15550148227", email: "hello@aerocomfort.example", address: "2840 Meridian Parkway, Brookfield, ST 00000", emergencyLabel: "24/7 emergency support" },
  hours: ["Mon–Fri: 7:00 AM–7:00 PM", "Saturday: 8:00 AM–4:00 PM", "Sunday: Emergency service"],
  formEndpoint: "",
  nav: [
    { key: "home", label: "Home", href: "index.html" },
    { key: "services", label: "Services", href: "services.html" },
    { key: "about", label: "About", href: "about.html" },
    { key: "area", label: "Service Area", href: "service-area.html" },
    { key: "resources", label: "Resources", href: "resources.html" },
    { key: "contact", label: "Contact", href: "contact.html" }
  ],
  services: [
    { icon: "❄", title: "AC Repair", short: "Fast diagnostics and dependable repairs for every major cooling system.", features: ["Same-day appointments", "All makes and models", "Upfront repair options"] },
    { icon: "◉", title: "Heating Repair", short: "Safe, efficient furnace and heat pump repair when temperatures drop.", features: ["Furnaces and heat pumps", "Carbon monoxide checks", "Emergency availability"] },
    { icon: "⌂", title: "System Installation", short: "Right-sized, high-efficiency equipment designed around your home and budget.", features: ["Free replacement estimates", "Load calculations", "Manufacturer warranties"] },
    { icon: "↻", title: "Maintenance", short: "Seasonal tune-ups that improve performance and help prevent surprise breakdowns.", features: ["Cooling and heating checks", "Priority scheduling", "Member savings"] },
    { icon: "≋", title: "Indoor Air Quality", short: "Cleaner indoor air with filtration, humidity, and ventilation solutions.", features: ["Air quality testing", "Whole-home filtration", "Humidity control"] },
    { icon: "▱", title: "Ductwork", short: "Repair, sealing, and airflow balancing for quieter, more even comfort.", features: ["Leak detection", "Airflow balancing", "Insulation upgrades"] }
  ],
  serviceAreas: ["Brookfield", "Cedar Grove", "Fairview", "Lakewood", "Maple Heights", "North Ridge", "Oak Valley", "Riverside", "Westhaven"]
};
/* End reusable static client configuration. */
