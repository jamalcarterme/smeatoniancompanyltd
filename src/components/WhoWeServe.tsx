import { Container, Eyebrow, Reveal } from "./ui";

const segments = [
  {
    title: "Residential",
    text: "Homes, duplexes and estates built to a high standard of structural quality and finishing.",
  },
  {
    title: "Commercial",
    text: "Office buildings and commercial properties engineered for durability and performance.",
  },
  {
    title: "Property Developers",
    text: "Consultancy and construction partnerships for estates and multi-unit developments.",
  },
  {
    title: "Corporate & Industrial",
    text: "Civil and structural engineering solutions for demanding industrial applications.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Who we serve</Eyebrow>
          <h2 className="balance mt-4 max-w-2xl text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
            Who We Serve
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment, i) => {
            const animationVariant = i % 2 === 0 ? "slide-up" : "fade";
            return (
              <Reveal
                key={segment.title}
                delay={i * 0.08}
                className="text-center sm:text-left"
                variant={animationVariant}
              >
                <h3 className="font-display text-[18px] font-semibold text-paper">
                  {segment.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-paper/65">{segment.text}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
