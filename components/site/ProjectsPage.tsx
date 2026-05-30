"use client";

import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { projectSections } from "./data";

export function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <Nav />

      <section className="px-5 pb-16 pt-44 sm:px-8 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-[var(--burgundy)]">
              Projects & Writing
            </p>
            <h1 className="font-display text-balance text-6xl leading-[0.95] text-[var(--ink)] sm:text-7xl lg:text-8xl">
              Projects & Writing
            </h1>
            <p className="mt-8 max-w-3xl text-pretty text-xl leading-8 text-[var(--muted)] sm:text-2xl sm:leading-9">
              A working archive of technical projects, legal research,
              academic essays, and writing at the intersection of institutions,
              markets, governance, and culture.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="px-5 pb-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-20">
          {projectSections.map((section, sectionIndex) => (
            <section key={section.title} className="scroll-mt-28">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.78,
                  delay: sectionIndex * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mb-8 border-t border-[var(--line)] pt-8"
              >
                <h2 className="font-display text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
                  {section.title}
                </h2>
              </motion.div>

              <div
                className={`grid gap-5 ${
                  section.title === "Writing & Essays"
                    ? "sm:grid-cols-2 lg:grid-cols-4"
                    : section.items.length > 1
                    ? "md:grid-cols-2"
                    : ""
                }`}
              >
                {section.items.map((item, itemIndex) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.72,
                      delay: itemIndex * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition-colors duration-300 hover:border-[var(--blue)] hover:shadow-[0_28px_100px_rgba(0,0,0,0.34)]"
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--burgundy)]">
                      {item.category}
                    </p>
                    <h3 className="font-display mt-5 text-3xl leading-tight text-[var(--ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-7 text-[var(--muted)]">
                      {item.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {item.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          aria-label={`${item.title} ${link.label}`}
                          className="rounded-full border border-[var(--line)] px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition duration-300 hover:border-[var(--blue)] hover:bg-[var(--soft)] hover:text-[var(--ink)]"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
