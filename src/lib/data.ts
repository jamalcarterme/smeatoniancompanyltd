export const site = {
  name: "Smeatonian BC",
  fullName: "Smeatonian Building Construction Ltd",
  tagline: "Turning Ideas Into Reality",
  domain: "https://www.smeatonianbc.com",
  description:
    "Smeatonian BC Limited is an independent organization providing real estate, consultancy and construction services in the fields of civil and structural engineering. Serving Lagos and beyond since 2019.",
  phones: [{ display: "0808 935 5891", href: "+2348089355891" }],
  whatsapp: "2348089355891",
  address:
    "Nigeria, Eti-Osa I Local Government Area, Victoria Island, Lagos 106104, Lagos",
  addressShort: "Victoria Island, Lagos",
  x: "https://x.com/smeatonianbc",
  instagram: "https://www.instagram.com/smeatonian1/",
  email: "info@smeatonianbc.com",
  founded: 2019,
  hours: [
    { day: "Monday", time: "8:30 am – 5:00 pm" },
    { day: "Tuesday", time: "8:30 am – 5:00 pm" },
    { day: "Wednesday", time: "8:30 am – 5:00 pm" },
    { day: "Thursday", time: "8:30 am – 5:00 pm" },
    { day: "Friday", time: "8:30 am – 5:00 pm" },
    { day: "Saturday", time: "9:30 am – 2:30 pm" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "6+", label: "Years of engineering expertise" },
  { value: "100+", label: "Projects delivered" },
  { value: "6", label: "Core service categories" },
  { value: "5.0", label: "Average client rating" },
];

export const services = [
  {
    title: "Property Development",
    description:
      "End-to-end development of residential and commercial real estate, from land assessment and planning to fully completed properties.",
    icon: "Building2",
    image: "/images/project-complex-1.jpg",
    href: "/services/property-development",
    slug: "property-development",
    teaser:
      "Land to landmark — developments shaped for the way people live and do business.",
  },
  {
    title: "Building Construction",
    description:
      "Complete building construction services for homes, estates and commercial properties, delivered with structural precision and quality craftsmanship.",
    icon: "HardHat",
    image: "/images/construction-mansion.jpg",
    href: "/services/building-construction",
    slug: "building-construction",
    teaser:
      "Homes, estates and commercial buildings, built with structural precision.",
  },
  {
    title: "Detailed Construction Finishes",
    description:
      "Meticulous interior and exterior finishing works that bring a refined, lasting quality to every structure we build.",
    icon: "PaintRoller",
    image: "/images/project-facade-2.jpg",
    href: "/services/construction-finishes",
    slug: "construction-finishes",
    teaser:
      "The finishing touches that give every space its character and quality.",
  },
  {
    title: "Building Maintenance",
    description:
      "Ongoing maintenance and facility support to protect your property's value and keep every system running smoothly.",
    icon: "Wrench",
    image: "/images/project-villa-1.jpg",
    href: "/services/building-maintenance",
    slug: "building-maintenance",
    teaser:
      "Keeping your property in top condition long after handover.",
  },
  {
    title: "Construction Materials",
    description:
      "Sourcing and supply of quality construction materials, ensuring every project is built on a foundation of reliable, durable inputs.",
    icon: "Boxes",
    image: "/images/construction-workers.jpg",
    href: "/services/construction-materials",
    slug: "construction-materials",
    teaser:
      "Reliable, quality materials for projects of every size.",
  },
  {
    title: "M&E (Mechanical & Electrical)",
    description:
      "Mechanical and electrical engineering services integrated into every build, from design through installation and commissioning.",
    icon: "Zap",
    image: "/images/construction-crane-towers.jpg",
    href: "/services/mechanical-electrical",
    slug: "mechanical-electrical",
    teaser:
      "Mechanical and electrical systems, designed and installed right.",
  },
];

export const process = [
  {
    title: "Consultation",
    description:
      "We listen to your vision and requirements, whether it's a new build, a development project, or professional construction consultancy.",
  },
  {
    title: "Site Assessment",
    description:
      "Our engineers assess the site, existing structures and technical requirements to fully understand the scope of the project.",
  },
  {
    title: "Design & Planning",
    description:
      "We develop a detailed civil and structural plan that balances performance, safety, aesthetics and your budget.",
  },
  {
    title: "Construction",
    description:
      "Our team executes the build with attention to structural integrity, quality materials and professional workmanship standards.",
  },
  {
    title: "Finishing & Quality Check",
    description:
      "Every detail is inspected and finished to a high standard before we consider a project complete.",
  },
  {
    title: "Handover & Support",
    description:
      "We hand over your completed property and remain available for maintenance and ongoing support.",
  },
];

export const testimonials = [
  {
    name: "Adaeze O.",
    text: "Smeatonian BC handled our Lagos residential development from planning to finishing. Professional, structured, and the quality of work speaks for itself.",
    rating: 5,
  },
  {
    name: "Chidi E.",
    text: "Their consultancy team gave us clear, honest structural guidance before we broke ground. That early advice saved us real money down the line.",
    rating: 5,
  },
  {
    name: "Tunde A.",
    text: "From construction materials sourcing to the final finishes, everything was coordinated smoothly. A construction partner you can trust.",
    rating: 5,
  },
];

export const galleryPhotos = [
  {
    src: "/images/project-complex-1.jpg",
    alt: "Completed modern residential complex with glass balconies",
    caption: "Residential Complex — Lagos",
  },
  {
    src: "/images/project-villa-2.jpg",
    alt: "Completed contemporary villa with marble courtyard",
    caption: "Contemporary Villa",
  },
  {
    src: "/images/construction-mansion.jpg",
    alt: "Mansion under construction with roof trusses and scaffolding",
    caption: "Building Construction — In Progress",
  },
  {
    src: "/images/project-row-1.jpg",
    alt: "Row of modern townhouses with timber and brick accents",
    caption: "Townhouse Development",
  },
  {
    src: "/images/construction-crane-towers.jpg",
    alt: "Highrise towers under construction with cranes",
    caption: "Highrise Construction",
  },
  {
    src: "/images/project-villa-1.jpg",
    alt: "Completed black and white contemporary villa",
    caption: "Detailed Construction Finishes",
  },
  {
    src: "/images/construction-workers.jpg",
    alt: "Construction workers on scaffolding pouring concrete",
    caption: "On-Site Construction Team",
  },
  {
    src: "/images/project-facade-1.jpg",
    alt: "Modern building facade with timber cladding",
    caption: "Property Development — Facade",
  },
  {
    src: "/images/construction-crane-highrise.jpg",
    alt: "Multiple cranes on a highrise construction site",
    caption: "Commercial Highrise Project",
  },
  {
    src: "/images/project-facade-2.jpg",
    alt: "Modern grey and white building facade",
    caption: "Estate Development",
  },
  {
    src: "/images/project-render-1.jpg",
    alt: "Architectural render of a modern residential estate at dusk",
    caption: "Design & Planning Render",
  },
  {
    src: "/images/construction-midrise.jpg",
    alt: "Midrise commercial building under construction",
    caption: "Commercial Building Construction",
  },
  {
    src: "/images/project-facade-3.jpg",
    alt: "Modern building with dark timber accents",
    caption: "Building Construction Finishes",
  },
  {
    src: "/images/project-facade-4.jpg",
    alt: "Modern white and timber apartment building",
    caption: "Apartment Development",
  },
  {
    src: "/images/project-facade-5.jpg",
    alt: "Contemporary grey building with balconies",
    caption: "Residential Property Development",
  },
];

export const consultPhotos = [
  {
    src: "/images/consult-review.jpg",
    alt: "Consultants reviewing project data on a tablet",
    caption: "Project Review",
  },
  {
    src: "/images/consult-strategy.jpg",
    alt: "Construction consultancy strategy concept",
    caption: "Strategy & Consultancy",
  },
  {
    src: "/images/consult-team-meeting.jpg",
    alt: "Team meeting around a table",
    caption: "Client Consultation",
  },
  {
    src: "/images/consult-boardroom.jpg",
    alt: "Boardroom discussion",
    caption: "Project Planning",
  },
  {
    src: "/images/consult-site-engineers.jpg",
    alt: "Site engineers in hard hats discussing plans",
    caption: "Structural Engineering",
  },
  {
    src: "/images/consult-desk.jpg",
    alt: "Engineer working at a desk",
    caption: "Design & Documentation",
  },
  {
    src: "/images/consult-client-meeting.jpg",
    alt: "Client consultation meeting",
    caption: "Client Consultation",
  },
  {
    src: "/images/consult-planning.jpg",
    alt: "Two professionals reviewing plans on a phone",
    caption: "On-Site Coordination",
  },
  {
    src: "/images/consult-professionals.jpg",
    alt: "Construction professionals in discussion",
    caption: "Civil & Structural Engineering",
  },
];
