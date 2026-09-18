"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "./ui";

const easeOut = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.09, duration: 0.6, ease: easeOut },
  }),
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const markReady = () => setVideoReady(true);

    const attemptPlay = async () => {
      try {
        await video.play();
        markReady();
      } catch {
        // Autoplay was prevented, will play on first user interaction
      }
    };

    const handleCanPlay = () => attemptPlay();
    const handleLoadedData = () => markReady();

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("playing", markReady);

    if (video.readyState >= 2) {
      attemptPlay();
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("playing", markReady);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[440px] items-center overflow-hidden bg-ink pb-12 pt-24 sm:min-h-[480px] md:min-h-[560px] md:pb-16 md:pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/project-complex-1.jpg"
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="absolute inset-0 bg-ink/50" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <motion.p
          variants={reveal}
          custom={0}
          initial="hidden"
          animate="show"
          className="text-[13px] font-semibold uppercase tracking-widest text-gold"
        >
          Smeatonian BC Limited
        </motion.p>

        <motion.h1
          variants={reveal}
          custom={1}
          initial="hidden"
          animate="show"
          className="max-w-full mt-3 text-[clamp(24px,7vw,34px)] font-bold uppercase leading-[1.15] tracking-[0.01em] text-paper sm:text-[42px] lg:text-[50px]"
        >
          Turning Ideas Into Reality
        </motion.h1>

        <motion.p
          variants={reveal}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-4 text-[12px] font-semibold uppercase tracking-widest text-paper/60"
        >
          Real Estate · Consultancy · Construction
        </motion.p>

        <motion.p
          variants={reveal}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-[16px] leading-relaxed text-paper/80 sm:text-[17px]"
        >
          Smeatonian BC is an independent organization providing real estate,
          consultancy and construction services in the fields of civil and
          structural engineering — building homes, estates and businesses
          across Lagos since 2019.
        </motion.p>

        <motion.div
          variants={reveal}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
          >
            Get a Quote
          </a>

          <a
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold/10"
          >
            View Our Projects
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
