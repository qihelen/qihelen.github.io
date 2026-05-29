"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { interests } from "./data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-44 sm:px-8 lg:px-12 lg:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(140deg,var(--surface)_0%,var(--warm)_42%,var(--cool)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-b from-transparent to-[var(--surface)]" />
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.32em] text-[var(--muted)]">
            Yale University / Ethics, Politics, and Economics
          </p>
          <h1 className="text-balance text-6xl font-semibold leading-[0.95] text-[var(--ink)] sm:text-7xl lg:text-8xl">
            Helen Qi
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-xl leading-8 text-[var(--muted)] sm:text-2xl sm:leading-9">
            Welcome! I study Ethics, Politics, and Economics at Yale
            University. My research and academic interests include corporate
            personhood, antitrust law, political theory, and AI ethics. Outside
            of these areas, I am passionate about the arts, and I am always
            looking for new ways to combine analytical and creative ways of
            thinking.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-[var(--line)] bg-[var(--glass)] px-4 py-2 text-sm text-[var(--ink)] shadow-sm backdrop-blur"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
            <div className="relative h-full overflow-hidden rounded-[1.45rem] border border-[var(--line)]">
              <Image
                src="/images/helen-qi-headshot.jpg"
                alt="Portrait of Helen Qi"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 90vw"
                className="object-cover object-[50%_34%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/70">
                  Helen Qi
                </p>
                <p className="mt-3 text-2xl font-medium">
                  Yale University / EP&amp;E
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
