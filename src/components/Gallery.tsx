"use client";

import Image from "next/image";
import { galleryPhotos } from "@/lib/data";
import { Container, Eyebrow } from "./ui";
import SlidingCarousel from "./SlidingCarousel";

function Slide({ photo }: { photo: (typeof galleryPhotos)[number] }) {
  return (
    <div className="px-3">
      <div className="group relative h-64 w-full overflow-hidden rounded-2xl border border-paper/10 sm:h-72 lg:h-80">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <p className="absolute bottom-4 left-5 text-[14px] font-semibold uppercase tracking-wide text-paper">
          {photo.caption}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="projects" className="bg-ink py-16 md:py-20">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Recent projects</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
            Real developments, built by our own team
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/70">
            A look at properties we&apos;ve developed and built — from completed
            residences to active construction sites across Lagos.
          </p>
        </div>

        <div className="mt-14 hidden lg:block">
          <SlidingCarousel
            items={galleryPhotos}
            visible={3}
            intervalMs={3200}
            keyExtractor={(photo, i) => `${photo.src}-${i}`}
            renderItem={(photo) => <Slide photo={photo} />}
            showDots
            showArrows
          />
        </div>

        <div className="mt-12 hidden sm:block lg:hidden">
          <SlidingCarousel
            items={galleryPhotos}
            visible={2}
            intervalMs={3200}
            keyExtractor={(photo, i) => `${photo.src}-${i}`}
            renderItem={(photo) => <Slide photo={photo} />}
            showDots
            showArrows
          />
        </div>

        <div className="mt-10 sm:hidden">
          <SlidingCarousel
            items={galleryPhotos}
            visible={1}
            intervalMs={3200}
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
