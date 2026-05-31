"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { Card } from "./Card";
import {
  artWorks,
  experiences,
  featuredProjects,
  researchAreas,
} from "./data";
import { GalleryGrid } from "./GalleryGrid";
import { Nav } from "./Nav";
import { Section } from "./Section";

function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="museum-page min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <Nav />
      {children}
    </main>
  );
}

export function AboutPage() {
  const manifestoLines = [
    "Every meaningful pursuit begins with curiosity.",
    "Long before expertise, achievement, or innovation comes the willingness to ask questions and follow them wherever they lead.",
    "In a world changing faster than ever, intellectual curiosity may matter more than any particular skill or expertise.",
    "It drives discovery, challenges assumptions, and expands the boundaries of what we believe is possible.",
  ];

  return (
    <PageShell>
      <Section
        id="about"
        eyebrow=""
        title=""
        hideHeader
        className="min-h-screen pt-56 lg:pt-52"
      >
        <div className="space-y-7 text-center sm:space-y-9 lg:space-y-5">
          {manifestoLines.map((line, index) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.16 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="about-manifesto-line mx-auto text-balance font-display text-[2.35rem] leading-[1.08] text-[var(--ink)] sm:text-5xl sm:leading-[1.08] lg:text-[2.68rem] lg:leading-[1.04]"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}

export function ExperiencePage() {
  return (
    <PageShell>
      <Section
        id="experience"
        eyebrow="Experience"
        title="Legal Research, Quantitative Analysis, Strategic Advising, and Institutional Decision-Making."
        className="bg-[var(--band)] pt-56 lg:pt-52"
        animateOnMount
      >
        <div className="grid gap-5 md:grid-cols-2">
          {experiences.map((item) => (
            <Card key={item.title}>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--burgundy)]">
                {item.role}
              </p>
              <h3 className="font-display mt-5 text-3xl text-[var(--ink)]">
                {item.title}
              </h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {item.detail}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="research"
        eyebrow="Research"
        title="Research experience as a subset of broader professional and intellectual work."
        hideTitle
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {researchAreas.map((area) => (
            <Card key={area.title}>
              <span className="rounded-full bg-[var(--soft)] px-3 py-1 text-xs font-medium text-[var(--ink)]">
                {area.label}
              </span>
              <h3 className="font-display mt-6 text-3xl text-[var(--ink)]">
                {area.title}
              </h3>
              <p className="mt-4 leading-7 text-[var(--muted)]">
                {area.detail}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}

export function ResearchPage() {
  return <ExperiencePage />;
}

export function ProjectsLandingPage() {
  return (
    <PageShell>
      <Section
        id="projects"
        eyebrow="Projects & Writing"
        title="Exploring Constitutional Interpretation, Artificial Intelligence, Philosophy, and Aesthetics Through Technical Projects and Original Scholarship."
        hideTitle
        className="min-h-screen bg-[var(--panel)] pt-56 lg:pt-52"
      >
        <div className="grid gap-5">
          {featuredProjects.map((item, index) => (
            <motion.a
              key={item.title}
              href="/projects"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.72,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:border-[var(--blue)] hover:shadow-[0_28px_100px_rgba(0,0,0,0.34)]"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--burgundy)]">
                  {item.category}
                </p>
                <h3 className="font-display mt-5 text-3xl leading-tight text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] transition duration-300 group-hover:text-[var(--blue-deep)]">
                View details
                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}

export function MusicPage() {
  return (
    <PageShell>
      <Section
        id="music"
        eyebrow="Music"
        title="Aesthetic Lover: Art for Arts Sake, Music that Speaks for Itself"
        className="min-h-screen bg-[var(--band)] pt-56 lg:pt-52"
        animateOnMount
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
              Yale Symphony Orchestra
            </p>
            <h3 className="font-display mt-5 text-4xl text-[var(--ink)]">
              Viola
            </h3>
            <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
              Violist Helen Qi was featured on the WRTI Young Artist Spotlight,
              part of the NPR Music Live Sessions network. The feature included
              a &quot;Meet the Viola&quot; performance video and an accompanying
              &quot;10 Questions&quot; profile discussing her experiences as a
              principal violist at the Temple Music Prep Center for Gifted Young
              Musicians before matriculating at Yale University.
            </p>
            <p className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
              Helen currently performs with the Yale Symphony Orchestra, where
              she serves as Publicity Chair. In 2025, she appeared alongside Sir
              Paul McCartney in a silent film produced for the Yale Symphony
              Orchestra&apos;s annual Halloween Show, a long-standing tradition
              known for its original films and live orchestral performances.
            </p>
          </Card>
          <motion.a
            href="https://www.wrti.org/wrti-spotlight/2023-08-28/wrti-young-artist-spotlight-helen-qi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--panel)] shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition-colors duration-300 hover:border-[var(--line-strong)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/music/helen-qi-ensemble-performance.jpg"
                alt="Helen Qi performing viola with an ensemble"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover saturate-[0.96] transition duration-700 group-hover:scale-[1.04] group-hover:saturate-100"
              />
            </div>
            <div className="p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                WRTI Young Artist Spotlight
              </p>
              <p className="mt-3 text-xl font-semibold text-[var(--ink)]">
                Meet the Viola
              </p>
            </div>
          </motion.a>
        </div>
      </Section>
    </PageShell>
  );
}

export function ArtPage() {
  return (
    <PageShell>
      <Section
        id="art"
        eyebrow="Art"
        title="Self Portraits: A Portfolio for Sketches, Studies, and Finished Work"
        className="pt-56 lg:pt-52"
        animateOnMount
      >
        <GalleryGrid items={artWorks} variant="art" />
      </Section>
    </PageShell>
  );
}

const photographyStories = [
  {
    title: "Old Montreal Musician",
    meta: "Montreal, 2024",
    sentence: "A street corner holds its note a little longer than the crowd.",
    src: "/images/photography/old-montreal-musician.jpg",
    alt: "A musician performing on a street in Old Montreal",
    layout: "full",
  },
  {
    title: "The Streets of Skopje",
    meta: "Skopje, 2024",
    sentence: "Stone, shadow, and afternoon light gather into a public rhythm.",
    src: "/images/photography/the-streets-of-skopje.jpg",
    alt: "A city street scene in Skopje",
    layout: "pair-left",
  },
  {
    title: "Sunsets in North Macedonia",
    meta: "North Macedonia, 2024",
    sentence: "The horizon thins to gold before the evening closes in.",
    src: "/images/photography/sunsets-in-north-macedonia.jpg",
    alt: "A warm sunset in North Macedonia",
    layout: "pair-right",
  },
  {
    title: "The Winter Village",
    meta: "New York, 2024",
    sentence: "Winter turns the square into a small theater of passing faces.",
    src: "/images/photography/the-winter-village.jpg",
    alt: "A winter village scene with people and lights",
    layout: "portrait",
  },
];

type PhotographyStory = (typeof photographyStories)[number];

export function PhotographyPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotographyStory | null>(
    null,
  );

  useEffect(() => {
    if (!selectedPhoto) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedPhoto]);

  const fullImage = photographyStories[0];
  const pairImages = photographyStories.slice(1, 3);
  const portraitImage = photographyStories[3];

  const renderPhoto = (
    item: PhotographyStory,
    imageClassName: string,
    sizes: string,
  ) => (
    <figure className="photography-frame group">
      <button
        type="button"
        onClick={() => setSelectedPhoto(item)}
        className={`photography-image-button ${imageClassName}`}
        aria-label={`Open ${item.title}`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes={sizes}
          className="object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.035] group-hover:brightness-[0.82]"
        />
      </button>
      <figcaption className="photography-caption">
        <span className="font-display text-[0.95rem] italic text-[var(--ink)]">
          {item.title}
        </span>
        <span className="text-[0.65rem] uppercase tracking-[0.26em] text-[var(--quiet)]">
          {item.meta}
        </span>
        <span className="block max-w-[34rem] text-[0.82rem] leading-6 text-[var(--muted)]">
          {item.sentence}
        </span>
      </figcaption>
    </figure>
  );

  return (
    <PageShell>
      <section
        id="photography"
        className="photography-page min-h-screen px-5 pb-28 pt-20 sm:px-8 sm:pt-36 lg:px-10"
      >
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-6 max-w-6xl border-t border-[var(--line)] pt-8 sm:mb-20"
        >
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.34em] text-[var(--quiet)]">
            Photography
          </p>
          <h1 className="font-display mt-6 max-w-[18rem] text-balance text-[2.55rem] leading-[0.96] text-[var(--ink)] sm:mt-8 sm:max-w-5xl sm:text-6xl lg:text-[5.7rem]">
            The way people live, held in available light.
          </h1>
          <p className="mt-4 max-w-[18rem] font-display text-lg italic leading-7 text-[var(--muted)] sm:mt-8 sm:max-w-2xl sm:text-2xl">
            Streets, weather, strangers, and small ceremonies of attention.
          </p>
        </motion.header>

        <div className="mx-auto max-w-[96rem] space-y-24 sm:space-y-36 lg:space-y-44">
          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-14% 0px" }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="-mx-5 sm:-mx-8 lg:-mx-10"
          >
            {renderPhoto(
              fullImage,
              "aspect-[16/10] w-full sm:aspect-[21/10]",
              "100vw",
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-14% 0px" }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="grid items-start gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20"
          >
            <div className="lg:pt-24">
              {renderPhoto(
                pairImages[0],
                "aspect-[4/5] w-full",
                "(min-width: 1024px) 42vw, 100vw",
              )}
            </div>
            <div>
              {renderPhoto(
                pairImages[1],
                "aspect-[5/4] w-full",
                "(min-width: 1024px) 52vw, 100vw",
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 44 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-14% 0px" }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl"
          >
            {renderPhoto(
              portraitImage,
              "aspect-[3/4] w-full",
              "(min-width: 1024px) 48vw, 100vw",
            )}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b0a08]/88 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedPhoto(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.title}
          >
            <motion.div
              className="grid h-full w-full max-w-6xl grid-rows-[1fr_auto] gap-5"
              initial={{ opacity: 0, y: 18, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.99 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-0">
                <Image
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col gap-4 border-t border-white/20 pt-4 text-[#f3f0ea] sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-display text-xl italic">
                    {selectedPhoto.title}
                  </p>
                  <p className="mt-1 text-[0.65rem] uppercase tracking-[0.28em] text-[#b7b2a8]">
                    {selectedPhoto.meta}
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#d8d1c5]">
                    {selectedPhoto.sentence}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="self-start border border-white/30 px-4 py-2 text-[0.65rem] uppercase tracking-[0.24em] text-[#f3f0ea] transition duration-300 hover:bg-[#f3f0ea] hover:text-[#211f1b]"
                  aria-label="Close photography lightbox"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}

export function ContactPage() {
  const contacts = [
    {
      label: "Email",
      href: "mailto:helenqi22@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/helen-qi-b85ba3154/",
    },
  ];

  return (
    <PageShell>
      <Section
        id="contact"
        eyebrow="Contact"
        title="For Research, Professional Inquiries, and Creative Collaboration."
        className="min-h-screen pt-56 lg:pt-52"
        animateOnMount
      >
        <div className="grid gap-4 md:grid-cols-2">
          {contacts.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 text-[var(--ink)] shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:border-[var(--blue)] hover:shadow-[0_28px_100px_rgba(0,0,0,0.34)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.24em] opacity-70">
                Connect
              </p>
              <p className="mt-6 text-2xl font-semibold">{item.label}</p>
            </motion.a>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
