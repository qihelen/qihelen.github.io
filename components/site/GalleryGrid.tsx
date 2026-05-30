"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export type GalleryItem = {
  title: string;
  medium?: string;
  src?: string;
  orientation?: "landscape" | "portrait";
};

type GalleryGridProps = {
  items: GalleryItem[];
  variant: "art" | "photo";
};

export function GalleryGrid({ items, variant }: GalleryGridProps) {
  const rows =
    variant === "art"
      ? [
          items.filter((item) => item.orientation === "landscape"),
          items.filter((item) => item.orientation === "portrait"),
        ].filter((row) => row.length > 0)
      : [items];

  return (
    <div className="space-y-5">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {row.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.72,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)] shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition-colors duration-300 hover:border-[var(--line-strong)]"
            >
              {item.src ? (
                <div
                  className={`relative overflow-hidden ${
                    item.orientation === "landscape"
                      ? "aspect-[5/4]"
                      : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover saturate-[0.96] transition duration-700 group-hover:scale-[1.04] group-hover:saturate-100"
                  />
                </div>
              ) : (
                <div
                  className={`aspect-[4/5] transition duration-500 group-hover:scale-[1.03] ${
                    variant === "art" ? "gallery-art" : "gallery-photo"
                  }`}
                />
              )}
              <div className="border-t border-[var(--line)] p-4">
                <p className="text-sm font-medium text-[var(--ink)]">
                  {item.title}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                  {item.medium ?? (item.src ? "Artwork" : "Placeholder")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}
