"use client";

import Image from "next/image";
import { consultPhotos } from "@/lib/data";
import { Container, Eyebrow } from "./ui";
import SlidingCarousel from "./SlidingCarousel";

function Slide({ photo }: { photo: (typeof consultPhotos)[number] }) {
  return (
    <div className="px-3">
      <div className="group relative h-56 w-full overflow-hidden rounded-2xl border border-paper/10 sm:h-64">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <p className="absolute bottom-4 left-5 text-[13px] font-semibold uppercase tracking-wide text-paper">
          {photo.caption}
        </p>
      </div>
    </div>
  );
}

export default function ConsultGallery() {
  return (
    <section className="border-t border-paper/10 bg-charcoal py-16 md:py-20">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Consultancy</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
            Expert consultancy, every step of the way
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/70">
            Our civil and structural engineering consultants guide every
            client from feasibility and planning through to project delivery.
          </p>
        </div>

        <div className="mt-14 hidden sm:block">
          <SlidingCarousel
            items={consultPhotos}
            visible={3}
            intervalMs={3400}
            keyExtractor={(photo, i) => `${photo.src}-${i}`}
            renderItem={(photo) => <Slide photo={photo} />}
            showDots
            showArrows
          />
        </div>

        <div className="mt-10 sm:hidden">
          <SlidingCarousel
            items={consultPhotos}
            visible={1}
            intervalMs={3400}
            keyExtractor={(photo, i) => `${photo.src}-${i}`}
            renderItem={(photo) => <Slide photo={photo} />}
            showDots
            showArrows
          />
        </div>
      </Container>
    </section>
  );
}
