"use client";

import { Award, HeartHandshake, Users } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const points = [
  {
    icon: Users,
    title: "Independent, engineering-led team",
    text: "Every project — from real estate development to structural consultancy — is led by our own civil and structural engineers.",
  },
  {
    icon: Award,
    title: "Quality materials and workmanship",
    text: "We source reliable construction materials and hold every build to a high standard of structural integrity and finishing.",
  },
  {
    icon: HeartHandshake,
    title: "Lasting support and maintenance",
    text: "Our relationship doesn't end at handover — we remain available for building maintenance and ongoing technical support.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-ink py-16 md:py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>About Smeatonian BC</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
            Engineering Vision. Building Reality.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-paper/70">
            Smeatonian Building Construction Ltd is an independent organization
            providing real estate, consultancy and construction services in the
            fields of civil and structural engineering. Since 2019, we have
            delivered property development, building construction, detailed
            construction finishes, building maintenance, construction materials
            supply, and mechanical &amp; electrical (M&amp;E) services for
            residential, commercial and industrial clients across Lagos.
          </p>
        </div>

        <div className="flex flex-col gap-7 lg:pt-2">
          {points.map((point) => (
            <div key={point.title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper/10 text-paper">
                <point.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="font-display text-[17px] font-semibold text-paper">
                  {point.title}
                </h3>
                <p className="mt-1 text-[15px] leading-relaxed text-paper/65">{point.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
