export type ServiceDetail = {
  tagline: string;
  overview: string[];
  included: { title: string; text: string }[];
  faqs: { question: string; answer: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "property-development": {
    tagline: "From the first land assessment to a fully completed property.",
    overview: [
      "Our property development service takes a project from an idea on paper to a finished, ready-to-use property. We work with individuals, families and investors who want residential or commercial real estate developed properly, with engineering input from day one.",
      "Because our civil and structural engineers are involved from the start, decisions on layout, budget and buildability are made early, which keeps the project on track and avoids costly surprises later.",
    ],
    included: [
      { title: "Land assessment", text: "Checking the suitability of a plot for its intended use before you commit." },
      { title: "Planning & feasibility", text: "Shaping the concept, scope and budget into a workable development plan." },
      { title: "Design coordination", text: "Bringing architectural and engineering requirements together in one plan." },
      { title: "Project delivery", text: "Managing the build from groundwork through to completion." },
      { title: "Residential & commercial", text: "Homes, estates and business properties developed to suit your goals." },
      { title: "Handover", text: "A completed, inspected property delivered with ongoing support available." },
    ],
    faqs: [
      { question: "Do I need to own land before I contact you?", answer: "Not necessarily. We can advise on a plot you are considering, or work with land you already own. Get in touch and we will guide you on the best starting point." },
      { question: "Do you develop both residential and commercial properties?", answer: "Yes. We develop residential homes and estates as well as commercial properties, each planned around the client's purpose and budget." },
    ],
  },
  "building-construction": {
    tagline: "Homes, estates and commercial buildings built with structural precision.",
    overview: [
      "Our building construction service covers the full build of new homes, estates and commercial properties. Every structure is led by our own civil and structural engineers and built to a high standard of integrity and workmanship.",
      "We plan carefully, source dependable materials and keep clients informed so the project you approved is the project you receive.",
    ],
    included: [
      { title: "Residential buildings", text: "Family homes, duplexes and estates built for comfort and durability." },
      { title: "Commercial buildings", text: "Offices, retail and business premises built around how you operate." },
      { title: "Structural engineering", text: "Sound foundations and frames designed and supervised by engineers." },
      { title: "Site supervision", text: "Hands-on oversight so quality and safety standards are met on site." },
      { title: "Quality materials", text: "Reliable materials chosen for long-term structural performance." },
      { title: "Timely delivery", text: "Clear scheduling and progress updates from start to handover." },
    ],
    faqs: [
      { question: "Can you build from my existing architectural drawings?", answer: "Yes. We can build from drawings you already have, and our engineers will review them so any technical points are resolved before construction begins." },
      { question: "Will I be updated while the building is in progress?", answer: "Yes. We keep clients informed throughout the build so you always know where the project stands." },
    ],
  },
  "construction-finishes": {
    tagline: "The detail that gives every space its character and lasting quality.",
    overview: [
      "A well-built structure deserves a well-finished interior and exterior. Our detailed construction finishes service covers the works that bring a property to life, carried out with care and close attention to detail.",
      "We can finish a building we constructed, or take on finishing works for a property built by someone else.",
    ],
    included: [
      { title: "Interior finishes", text: "Walls, ceilings, floors and fittings completed to a refined standard." },
      { title: "Exterior finishes", text: "Facades and external works that protect and present your property well." },
      { title: "Painting & decorative works", text: "Clean, durable finishes that suit the look you want." },
      { title: "Tiling & flooring", text: "Accurate installation for a smooth, long-lasting result." },
      { title: "Fixtures & fittings", text: "Careful installation so everything sits and functions properly." },
      { title: "Final quality checks", text: "Every detail inspected before we consider the work complete." },
    ],
    faqs: [
      { question: "Can you handle finishing on a building someone else constructed?", answer: "Yes. We take on finishing works independently and will assess the property first so the scope and cost are clear." },
      { question: "Do you take on both interior and exterior finishing?", answer: "Yes. We handle interior and exterior finishes, together or separately, depending on what your property needs." },
    ],
  },
  "building-maintenance": {
    tagline: "Protecting your property's value long after handover.",
    overview: [
      "Good buildings stay good when they are looked after. Our building maintenance service gives homeowners, landlords and businesses a dependable team to keep their property safe, functional and in top condition.",
      "From routine upkeep to fixing problems as they arise, we help you deal with small issues before they become expensive ones.",
    ],
    included: [
      { title: "Routine maintenance", text: "Regular checks and upkeep that keep your property in good order." },
      { title: "Repairs", text: "Prompt attention to structural, finishing and general building faults." },
      { title: "Building systems support", text: "Keeping key systems running smoothly and reliably." },
      { title: "Inspections", text: "Spotting wear and defects early, before they grow." },
      { title: "Facility support", text: "Practical support for residential and commercial properties." },
      { title: "Ongoing partnership", text: "A team that already understands your building." },
    ],
    faqs: [
      { question: "Do you maintain properties you did not build?", answer: "Yes. We can maintain properties regardless of who built them, starting with an assessment of the building's current condition." },
      { question: "Can maintenance be scheduled regularly?", answer: "Yes. We can arrange regular visits or attend to specific issues as they come up. Contact us to discuss what suits your property." },
    ],
  },
  "construction-materials": {
    tagline: "Reliable, durable materials for projects of every size.",
    overview: [
      "Strong projects begin with dependable materials. Our construction materials service sources and supplies quality inputs for builders, developers and property owners, so your project is built on a reliable foundation.",
      "You can order materials as part of a project with us, or on their own for a build we are not involved in.",
    ],
    included: [
      { title: "Sourcing", text: "Finding suitable, quality materials for your specific project." },
      { title: "Supply", text: "Dependable delivery of the materials your project needs." },
      { title: "Quality focus", text: "Materials selected for durability and structural performance." },
      { title: "Project guidance", text: "Advice from engineers on what suits your build." },
      { title: "Projects of all sizes", text: "From single homes to larger developments." },
      { title: "Standalone or bundled", text: "Order on their own or as part of a full project." },
    ],
    faqs: [
      { question: "Can I buy materials without hiring you to build?", answer: "Yes. We can source and supply construction materials independently of a full building contract." },
      { question: "Can you help me decide which materials I need?", answer: "Yes. Our engineers can advise on materials that suit your project. Share your requirements with us and we will guide you." },
    ],
  },
  "mechanical-electrical": {
    tagline: "Mechanical and electrical systems, designed and installed right.",
    overview: [
      "Mechanical and electrical (M&E) systems keep a building comfortable, safe and working. Our M&E service covers the design, installation and commissioning of these systems, and is integrated with the rest of the build.",
      "Planning M&E alongside the structure means fewer clashes on site, cleaner installations and a building that performs as intended once you move in.",
    ],
    included: [
      { title: "Electrical systems", text: "Design and installation of power and lighting for your building." },
      { title: "Mechanical systems", text: "Installation of the mechanical services your property relies on." },
      { title: "Design & planning", text: "M&E coordinated with the structure from the outset." },
      { title: "Installation", text: "Careful, professional workmanship on site." },
      { title: "Testing & commissioning", text: "Systems checked and confirmed to work before handover." },
      { title: "New & existing buildings", text: "Suitable for new builds and for upgrades to existing properties." },
    ],
    faqs: [
      { question: "What does M&E stand for?", answer: "M&E stands for mechanical and electrical. It covers the systems in a building that provide power, lighting and other mechanical services." },
      { question: "Can M&E work be added to an existing building?", answer: "Yes. We can carry out M&E works on existing properties as well as new builds, beginning with an assessment of what is already in place." },
    ],
  },
};
