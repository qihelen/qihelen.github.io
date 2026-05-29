"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
  hideHeader?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  hideHeader = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-28 px-5 py-24 sm:px-8 lg:px-12 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 max-w-3xl"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              {eyebrow}
            </p>
            <h2 className="text-balance text-4xl font-semibold leading-tight text-[var(--ink)] sm:text-5xl">
              {title}
            </h2>
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
