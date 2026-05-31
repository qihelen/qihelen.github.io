"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { Card } from "./Card";
import {
  artWorks,
  experiences,
  featuredProjects,
  photographyWorks,
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

export function PhotographyPage() {
  return (
    <PageShell>
      <Section
        id="photography"
        eyebrow="Photography"
        title="The Way People Live: Portraits Across Countries"
        className="min-h-screen bg-[var(--band)] pt-56 lg:pt-52"
        animateOnMount
      >
        <GalleryGrid items={photographyWorks} variant="photo" />
      </Section>
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
