"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "./Card";
import {
  artWorks,
  experiences,
  featuredProjects,
  interests,
  photographyWorks,
  researchAreas,
} from "./data";
import { GalleryGrid } from "./GalleryGrid";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Section } from "./Section";

export function PersonalSite() {
  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <Nav />
      <Hero />

      <Section
        id="about"
        eyebrow="About"
        title="Exploring the Intersection of Law, Philosophy, Economics, Aesthetics, and Technology."
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                Currently
              </p>
              <h3 className="font-display mt-5 text-4xl text-[var(--ink)]">
                Yale University
              </h3>
              <p className="mt-3 text-lg text-[var(--muted)]">
                Ethics, Politics, and Economics
              </p>
            </div>
            <div className="mt-12 grid gap-3">
              {interests.map((interest) => (
                <div
                  key={interest}
                  className="flex items-center justify-between border-t border-[var(--line)] pt-3 text-sm"
                >
                  <span className="text-[var(--muted)]">Interest</span>
                  <span className="font-medium text-[var(--ink)]">
                    {interest}
                  </span>
                </div>
              ))}
            </div>
          </Card>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-[var(--line)] bg-[var(--panel)] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-10"
          >
            <p className="text-pretty text-2xl leading-10 text-[var(--ink)]">
              Helen is interested in antitrust law, constitutional
              law, and the implications of artificial intelligence for legal
              institutions and practice. Drawn to questions that require both
              rigorous analytical thinking and creativity, she enjoys exploring
              ideas across disciplines and examining complex legal and economic
              problems from multiple perspectives. Outside of her academic
              pursuits, Helen is a classical musician and enjoys painting and
              photography.
            </p>
          </motion.div>
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="Legal Research, Quantitative Analysis, Strategic Advising, and Institutional Decision-Making."
        className="bg-[var(--band)]"
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
        eyebrow="Research Experience"
        title="Empirical, technical, and scientific research experience."
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

      <Section
        id="projects"
        eyebrow="Projects & Writing"
        title="Technical Projects, Legal Research, and Selected Academic Work."
        className="bg-[var(--band)]"
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
              className="group flex min-h-72 flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:border-[var(--blue)] hover:shadow-[0_28px_100px_rgba(0,0,0,0.34)]"
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
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] transition duration-300 group-hover:text-[var(--blue-deep)]">
                View details
                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </Section>

      <Section
        id="music"
        eyebrow="Music"
        title="Aesthetic Lover: Art for Arts Sake, Music that Speaks for Itself"
        className="bg-[var(--band)]"
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
            <div className="border-t border-[var(--line)] p-6">
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

      <Section
        id="art"
        eyebrow="Art"
        title="Self Portraits: A Portfolio for Sketches, Studies, and Finished Work"
      >
        <GalleryGrid items={artWorks} variant="art" />
      </Section>

      <Section
        id="photography"
        eyebrow="Photography"
        title="The Way People Live: Portraits Across Countries"
        className="bg-[var(--band)]"
      >
        <GalleryGrid items={photographyWorks} variant="photo" />
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="For Research, Professional Inquiries, and Creative Collaboration."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              label: "Email",
              href: "mailto:helenqi22@gmail.com",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/helen-qi-b85ba3154/",
            },
          ].map(
            (item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-6 text-[var(--ink)] shadow-[0_24px_80px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[var(--blue)] hover:shadow-[0_28px_100px_rgba(0,0,0,0.34)]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] opacity-70">
                  Connect
                </p>
                <p className="mt-6 text-2xl font-semibold">{item.label}</p>
              </motion.a>
            ),
          )}
        </div>
      </Section>
    </main>
  );
}
