"use client";

import Link from "next/link";
import { ArrowRight, Award, HeartHandshake, Users } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const points = [
  {
    icon: Users,
    title: "Independent, engineering-led team",
    text: "Every project is led by our own civil and structural engineers.",
  },
  {
    icon: Award,
    title: "Quality materials and workmanship",
    text: "Reliable materials and a high standard of finishing on every build.",
  },
  {
    icon: HeartHandshake,
    title: "Lasting support and maintenance",
    text: "Our relationship doesn't end at handover.",
  },
];

export default function AboutPreview() {
  return (
    <section id="about" className="bg-ink py-16 md:py-20">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Eyebrow>About Smeatonian BC</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
            Engineering Vision. Building Reality.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-paper/70">
            Smeatonian BC is an independent real estate, consultancy and
            construction company built on civil and structural engineering
            expertise, serving clients across Lagos since 2019.
          </p>
          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-gold transition-colors hover:text-gold-light"
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
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
