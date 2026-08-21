// Edit this single file to rebrand the template for a new HVAC client.
export const siteConfig = {
  business: {
    name: "AeroComfort",
    descriptor: "Heating & Air",
    tagline: "Reliable comfort. Right when you need it.",
    legalName: "AeroComfort Heating & Air LLC",
    yearStarted: 2008,
  },
  contact: {
    phoneDisplay: "(555) 014-8227",
    phoneHref: "+15550148227",
    email: "hello@aerocomfort.example",
    address: "2840 Meridian Parkway, Brookfield, ST 00000",
    emergencyLabel: "24/7 emergency support",
  },
  hours: ["Mon–Fri: 7:00 AM–7:00 PM", "Saturday: 8:00 AM–4:00 PM", "Sunday: Emergency service"],
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Service Area", href: "/service-area" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { icon: "❄", title: "AC Repair", short: "Fast diagnostics and dependable repairs for every major cooling system.", features: ["Same-day appointments", "All makes and models", "Upfront repair options"] },
    { icon: "◉", title: "Heating Repair", short: "Safe, efficient furnace and heat pump repair when temperatures drop.", features: ["Furnaces and heat pumps", "Carbon monoxide checks", "Emergency availability"] },
    { icon: "⌂", title: "System Installation", short: "Right-sized, high-efficiency equipment designed around your home and budget.", features: ["Free replacement estimates", "Load calculations", "Manufacturer warranties"] },
    { icon: "↻", title: "Maintenance", short: "Seasonal tune-ups that improve performance and help prevent surprise breakdowns.", features: ["Cooling and heating checks", "Priority scheduling", "Member savings"] },
    { icon: "≋", title: "Indoor Air Quality", short: "Cleaner, healthier indoor air with filtration, humidity, and ventilation solutions.", features: ["Air quality testing", "Whole-home filtration", "Humidity control"] },
    { icon: "▱", title: "Ductwork", short: "Repair, sealing, and airflow balancing for quieter, more even comfort.", features: ["Leak detection", "Airflow balancing", "Insulation upgrades"] },
  ],
  serviceAreas: ["Brookfield", "Cedar Grove", "Fairview", "Lakewood", "Maple Heights", "North Ridge", "Oak Valley", "Riverside", "Westhaven"],
  reviews: [
    { quote: "The technician explained every option clearly, fixed our AC the same afternoon, and left the work area spotless.", name: "Jordan M.", detail: "AC repair customer" },
    { quote: "From the first call to the final walkthrough, everything felt organized, honest, and genuinely professional.", name: "Renee K.", detail: "System replacement customer" },
    { quote: "Our upstairs is finally as comfortable as the rest of the house. The airflow improvements made a huge difference.", name: "Alex L.", detail: "Ductwork customer" },
  ],
  faqs: [
    { q: "Do you offer same-day HVAC service?", a: "Yes. We reserve daily capacity for urgent repairs and offer same-day appointments whenever scheduling allows. Call early for the best availability." },
    { q: "Will I know the price before work begins?", a: "Yes. After diagnosing the issue, your technician explains the findings and provides clear repair options before any approved work starts." },
    { q: "What brands do you service?", a: "Our technicians service all major residential heating and cooling brands. If specialized parts are needed, we will explain timing and alternatives clearly." },
    { q: "How often should my system be maintained?", a: "Most systems benefit from professional maintenance twice a year: cooling equipment in spring and heating equipment in fall." },
    { q: "Do you provide financing?", a: "Yes. Flexible financing options are available for qualifying replacement and improvement projects. Terms vary by project and applicant." },
  ],
  socialLinks: [] as { label: string; href: string }[],
};

export type Service = (typeof siteConfig.services)[number];
// End reusable client configuration.
