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

    // Muted playback is required for browsers to allow autoplay
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");

    const markReady = () => setVideoReady(true);

    const tryPlay = () => {
      const playing = video.play();
      if (playing) playing.then(markReady).catch(() => {});
    };

    // Start right away (also covers autoplay that began before hydration)
    tryPlay();

    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("playing", markReady);
    window.addEventListener("load", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);

    // Fallback for browsers that block autoplay (e.g. low-power mode):
    // start on the very first interaction
    const interactions = ["pointerdown", "touchstart", "keydown", "scroll"] as const;
    const onInteract = () => {
      tryPlay();
      interactions.forEach((e) => window.removeEventListener(e, onInteract));
    };
    interactions.forEach((e) => window.addEventListener(e, onInteract, { passive: true }));

    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("playing", markReady);
      window.removeEventListener("load", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      interactions.forEach((e) => window.removeEventListener(e, onInteract));
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
          preload="auto"
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
          Building Is Our Passion
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
          Real estate, consultancy and construction, bringing homes, estates
          and businesses to life across Lagos since 2019.
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
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink shadow-[0_8px_24px_rgba(0,0,0,0.55)] ring-2 ring-paper/60 transition-colors hover:bg-gold-light"
          >
            Get a Quote
          </a>

          <a
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border-2 border-gold-light bg-ink/70 px-[31px] py-[13px] text-[13px] font-semibold uppercase tracking-wide text-paper shadow-[0_8px_24px_rgba(0,0,0,0.55)] backdrop-blur-sm transition-colors hover:bg-gold hover:text-ink"
          >
            View Our Projects
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
