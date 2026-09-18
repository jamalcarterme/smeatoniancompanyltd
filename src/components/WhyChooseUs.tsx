import { Container, Eyebrow, Reveal } from "./ui";

const reasons = [
  {
    title: "Civil & Structural Expertise",
    text: "Technical engineering knowledge, proper planning, and meticulous attention to detail in every project.",
  },
  {
    title: "Quality & Reliability",
    text: "Trusted construction materials and workmanship designed for dependable, long-term structural performance.",
  },
  {
    title: "Tailored Consultancy",
    text: "Real estate and construction solutions designed to fit your specific site, budget and requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>Why choose us</Eyebrow>
          <h2 className="balance mt-4 max-w-2xl text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
            Why Choose Smeatonian BC?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {reasons.map((reason, i) => {
            const variants = ["pop", "scale", "slide-up"];
            const animationVariant = variants[i % variants.length] as "pop" | "scale" | "slide-up";
            return (
              <Reveal key={reason.title} delay={i * 0.1} variant={animationVariant}>
                <div className="rounded-2xl border border-paper/10 bg-ink p-6">
                  <h3 className="font-display text-[16px] font-semibold text-paper">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-paper/65">{reason.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
