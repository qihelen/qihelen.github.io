"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const rows =
    variant === "art"
      ? [
          items.filter((item) => item.orientation === "landscape"),
          items.filter((item) => item.orientation === "portrait"),
        ].filter((row) => row.length > 0)
      : [items];

  useEffect(() => {
    if (!selectedItem) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedItem]);

  return (
    <>
      <div className="space-y-5">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {row.map((item, index) => {
              const cardContent = (
                <>
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
                        className="object-cover saturate-[0.96] transition duration-300 group-hover:scale-[1.04] group-hover:saturate-100"
                      />
                    </div>
                  ) : (
                    <div
                      className={`aspect-[4/5] transition duration-300 group-hover:scale-[1.03] ${
                        variant === "art" ? "gallery-art" : "gallery-photo"
                      }`}
                    />
                  )}
                  <div className="p-4 text-left">
                    <p className="text-sm font-medium text-[var(--ink)]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                      {item.medium ?? (item.src ? "Artwork" : "Placeholder")}
                    </p>
                  </div>
                </>
              );

              return (
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
                  whileHover={{ y: -4 }}
                  className="exhibition-panel group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)] shadow-[0_18px_54px_rgba(5,5,5,0.08)] transition-colors duration-300 hover:border-[var(--line-strong)]"
                >
                  {item.src ? (
                    <button
                      type="button"
                      onClick={() => setSelectedItem(item)}
                      className="block h-full w-full cursor-zoom-in text-left"
                      aria-label={`Enlarge ${item.title}`}
                    >
                      {cardContent}
                    </button>
                  ) : (
                    cardContent
                  )}
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedItem?.src && (
              <motion.div
                className="fixed inset-0 z-[100] grid place-items-center bg-[#211f1b]/40 px-5 py-8 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedItem(null)}
                role="dialog"
                aria-modal="true"
                aria-label={selectedItem.title}
              >
                <motion.div
                  className="relative h-[70vh] w-[70vw] max-w-[1100px] overflow-hidden rounded-2xl border border-white/25 bg-[var(--paper)] shadow-[0_30px_120px_rgba(5,5,5,0.32)] max-md:h-[70vh] max-md:w-[88vw]"
                  initial={{
                    opacity: 0,
                    y: 22,
                    scale: 0.96,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: 12,
                    scale: 0.98,
                    filter: "blur(6px)",
                  }}
                  transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                  onClick={(event) => event.stopPropagation()}
                >
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    fill
                    sizes="70vw"
                    className="object-contain"
                    priority
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-[#f3f0ea]/82 text-xl leading-none text-[#211f1b] shadow-[0_10px_30px_rgba(5,5,5,0.18)] backdrop-blur-md transition duration-200 hover:bg-[#f3f0ea]"
                    aria-label="Close enlarged image"
                  >
                    X
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
