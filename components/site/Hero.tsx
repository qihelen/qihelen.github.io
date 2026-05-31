"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const rotatingPhrases = [
  "intellectual curiosity",
  "law",
  "economics",
  "philosophy",
  "AI ethics",
  "political theory",
  "classical music",
  "aesthetics",
  "ideas",
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPhraseIndex((current) => (current + 1) % rotatingPhrases.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative isolate grid h-screen place-items-center overflow-hidden px-5 pr-24 pt-28 sm:px-8 sm:pr-32 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-28 z-[2] h-px bg-[linear-gradient(90deg,transparent,var(--line-strong),transparent)] sm:inset-x-10 lg:inset-x-16"
      />
      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="sr-only">Helen Qi</h1>
          <p className="mb-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-[var(--muted)] sm:mb-8 sm:text-xs sm:tracking-[0.32em]">
            Yale University&nbsp;&nbsp;|&nbsp;&nbsp;Ethics, Politics, and Economics
          </p>
          <div className="hero-wordmark-wrap mx-auto w-[min(82vw,62rem)] sm:w-[min(78vw,76rem)] lg:w-[min(74vw,86rem)]">
            <Image
              src="/images/helen-qi-ink-wordmark.png"
              alt=""
              width={1881}
              height={836}
              priority
              aria-hidden="true"
              className="hero-ink-wordmark h-auto w-full"
            />
          </div>
          <div className="mx-auto mt-8 flex h-12 items-center justify-center overflow-hidden sm:mt-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={rotatingPhrases[phraseIndex]}
                initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0.01px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-xs uppercase tracking-[0.34em] text-[#5a6670] sm:text-sm"
              >
                {rotatingPhrases[phraseIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
