"use client";

import { motion } from "framer-motion";
import { Nav } from "./Nav";

type EssayPageProps = {
  essay: {
    title: string;
    category: string;
    body: Array<
      | string
        | {
          type: "image";
          src: string;
          alt: string;
          caption?: string;
          size?: "default" | "small" | "smaller" | "full";
        }
      | {
          type: "imageGrid";
          images: {
            src: string;
            alt: string;
            caption?: string;
          }[];
        }
    >;
    footnotes?: {
      label: string;
      text: string;
    }[];
    worksCited?: string[];
    links?: {
      text: string;
      href: string;
    }[];
  };
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderLinkedText(
  text: string,
  links: EssayPageProps["essay"]["links"] = [],
) {
  const matches = links.filter((item) => text.includes(item.text));

  if (matches.length === 0) {
    return text;
  }

  const pattern = new RegExp(
    `(${matches.map((item) => escapeRegExp(item.text)).join("|")})`,
    "g",
  );
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    const link = matches.find((item) => item.text === part);

    return link ? (
        <a
          key={`${part}-${index}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--blue-deep)] underline decoration-[var(--line-strong)] underline-offset-4 transition hover:text-[var(--ink)] hover:decoration-[var(--blue)]"
        >
          {part}
        </a>
      ) : (
        part
      );
  });
}

export function EssayPage({ essay }: EssayPageProps) {
  const footnotes = essay.footnotes ?? [];
  const worksCited = essay.worksCited ?? [];
  const imageSizeClass = {
    default: "sm:mx-auto sm:max-w-[60%]",
    small: "sm:mx-auto sm:max-w-[48%]",
    smaller: "sm:mx-auto sm:max-w-[30%]",
    full: "",
  };

  return (
    <main className="museum-page min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <Nav />

      <article className="px-5 pb-24 pt-56 sm:px-8 lg:px-12 lg:pt-52">
        <div className="mx-auto max-w-[680px]">
          <motion.header
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.86, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-[var(--line)] pb-10"
          >
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.32em] text-[var(--burgundy)]">
              {essay.category}
            </p>
            <h1 className="font-display text-balance text-5xl leading-[1.02] text-[var(--ink)] sm:text-6xl">
              {essay.title}
            </h1>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 space-y-4 text-lg leading-8 text-[var(--muted)]"
          >
            {essay.body.map((block, index) => {
              if (typeof block === "string") {
                return (
                  <p key={index}>{renderLinkedText(block, essay.links)}</p>
                );
              }

              if (block.type === "imageGrid") {
                return (
                  <div
                    key={index}
                    className="my-10 grid gap-5 sm:grid-cols-2"
                  >
                    {block.images.map((image) => (
                      <figure
                        key={image.src}
                        className="overflow-hidden"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-auto w-full"
                          loading="lazy"
                        />
                        {image.caption && (
                          <figcaption className="px-4 py-3 text-sm leading-5 text-[var(--muted)]">
                            {image.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                );
              }

              return (
                <figure
                  key={index}
                  className={`my-10 overflow-hidden ${
                    imageSizeClass[block.size ?? "default"]
                  }`}
                >
                  <img
                    src={block.src}
                    alt={block.alt}
                    className="h-auto w-full"
                    loading="lazy"
                  />
                  {block.caption && (
                    <figcaption className="border-t border-[var(--line)] px-4 py-3 text-sm leading-5 text-[var(--muted)]">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </motion.div>

          {footnotes.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 border-t border-[var(--line)] pt-8"
            >
              <h2 className="font-display text-3xl text-[var(--ink)]">
                Footnotes
              </h2>
              <ol className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {footnotes.map((footnote) => (
                  <li key={`${footnote.label}-${footnote.text}`}>
                    <span className="mr-2 text-[var(--burgundy)]">
                      {footnote.label}.
                    </span>
                    {renderLinkedText(footnote.text, essay.links)}
                  </li>
                ))}
              </ol>
            </motion.section>
          )}

          {worksCited.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
              className="mt-14 border-t border-[var(--line)] pt-8"
            >
              <h2 className="font-display text-3xl text-[var(--ink)]">
                Works Cited
              </h2>
              <div className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {worksCited.map((entry) => (
                  <p key={entry} className="pl-6 indent-[-1.5rem]">
                    {renderLinkedText(entry, essay.links)}
                  </p>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </article>
    </main>
  );
}
