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
      className={`rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-colors duration-300 hover:border-[var(--line-strong)] hover:shadow-[0_28px_90px_rgba(0,0,0,0.32)] ${className}`}
    >
      {children}
    </motion.div>
  );
}
