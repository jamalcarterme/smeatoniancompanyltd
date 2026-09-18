import { Award, HeartHandshake, Target, Eye } from "lucide-react";
import { Container, Eyebrow, Reveal } from "./ui";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To deliver reliable, innovative real estate, consultancy and construction services that turn our clients' ideas into lasting, well-engineered structures.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become a leading name in civil and structural engineering across Nigeria, recognized for quality, integrity and professionalism.",
  },
  {
    icon: Award,
    title: "Quality Materials",
    text: "We source and use proven, durable construction materials matched to each project's structural requirements.",
  },
  {
    icon: HeartHandshake,
    title: "Lasting Partnership",
    text: "From consultancy to handover and beyond, we remain a dependable partner for maintenance and ongoing support.",
  },
];

export default function MissionGrid() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>What drives us</Eyebrow>
          <h2 className="balance mt-4 text-[30px] font-semibold uppercase tracking-tight text-paper sm:text-[32px]">
            Mission &amp; Values
          </h2>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const variants = ["pop", "scale", "slide-up", "fade"];
            const animationVariant = variants[i % variants.length] as
              | "pop"
              | "scale"
              | "slide-up"
              | "fade";
            return (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="flex flex-col items-center text-center"
                variant={animationVariant}
              >
                <span className="flex h-24 w-24 items-center justify-center rounded-full border border-paper/25 text-paper">
                  <item.icon className="h-8 w-8" strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-6 text-[15px] font-semibold uppercase tracking-wide text-paper">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-paper/65">{item.text}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
