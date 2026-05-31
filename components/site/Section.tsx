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
  hideTitle?: boolean;
  animateOnMount?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  hideHeader = false,
  hideTitle = false,
  animateOnMount = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`content-section px-5 sm:px-8 lg:px-12 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={animateOnMount ? { opacity: 1, y: 0 } : undefined}
            whileInView={animateOnMount ? undefined : { opacity: 1, y: 0 }}
            viewport={animateOnMount ? undefined : { once: true, margin: "-120px" }}
            transition={{ duration: 0.86, delay: animateOnMount ? 0.3 : 0, ease: [0.16, 1, 0.3, 1] }}
            className="section-header mb-12 max-w-3xl"
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-[var(--burgundy)]">
              {eyebrow}
            </p>
            {!hideTitle && (
              <h2 className="font-display text-balance text-4xl leading-tight tracking-normal text-[var(--ink)] sm:text-5xl">
                {title}
              </h2>
            )}
          </motion.div>
        )}
        <div className="section-body">{children}</div>
      </div>
    </section>
  );
}
