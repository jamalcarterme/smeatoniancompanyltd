"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  HardHat,
  PaintRoller,
  Wrench,
  Boxes,
  Zap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import { Container, Reveal } from "./ui";

const icons: Record<string, LucideIcon> = { Building2, HardHat, PaintRoller, Wrench, Boxes, Zap };

export default function ServicesGrid() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon] ?? Building2;
            return (
              <Reveal key={service.title} delay={i * 0.06}>
                <Link
                  href={service.href}
                  className="group block overflow-hidden rounded-2xl border border-paper/10 bg-charcoal transition-colors hover:border-gold/50"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/30" />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-[18px] font-semibold text-paper">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-paper/65">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wide text-gold">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
