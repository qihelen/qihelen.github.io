"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className={`exhibition-panel rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_18px_54px_rgba(5,5,5,0.08)] transition-colors duration-300 hover:border-[var(--line-strong)] hover:shadow-[0_24px_70px_rgba(5,5,5,0.12)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
