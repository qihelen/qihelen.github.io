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
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.06)] transition-colors ${className}`}
    >
      {children}
    </motion.div>
  );
}
