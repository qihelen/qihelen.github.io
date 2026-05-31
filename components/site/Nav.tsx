"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "./data";

export function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Nav background: transparent over hero, frosted after 80px
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver (home page only)
  useEffect(() => {
    if (!isHome) return;
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  // Section reveal: toggle .in-view on .section-reveal elements as they enter viewport
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".section-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  function resolveHref(href: string) {
    return pathname === "/" ? href : `/${href}`;
  }

  const showFrosted = scrolled || !isHome;

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.76, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-4 ${
        isHome ? "home-light-nav" : ""
      } ${showFrosted ? "nav-frosted" : ""}`}
    >
      <nav className="mx-auto max-w-6xl lg:rounded-full lg:border lg:border-[var(--line)] lg:px-4 lg:py-3 lg:shadow-[0_18px_70px_rgba(0,0,0,0.32)]">
        <div className="flex items-center justify-between gap-4 lg:hidden">
          <Link
            href="/"
            className="font-display shrink-0 text-xl tracking-[0.04em] text-[var(--ink)] transition duration-300 hover:text-[var(--blue-deep)]"
            aria-label="Helen Qi home"
          >
            HQ
          </Link>
        </div>

        <div className="hidden items-center justify-between gap-4 lg:flex">
          <div className="hidden items-center justify-between gap-1 lg:flex lg:flex-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = isHome && activeSection === sectionId;
              return (
                <Link
                  key={item.href}
                  href={resolveHref(item.href)}
                  className={`rounded-full px-3 py-2 text-xs uppercase tracking-[0.18em] transition duration-300 hover:bg-[var(--soft)] hover:text-[var(--ink)] ${
                    isActive ? "text-[var(--ink)]" : "text-[var(--muted)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="fixed right-3 top-1/2 flex -translate-y-1/2 flex-col gap-1 rounded-3xl border border-[var(--line)] bg-[var(--nav)] p-2 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl lg:hidden">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = isHome && activeSection === sectionId;
            return (
              <Link
                key={item.href}
                href={resolveHref(item.href)}
                className={`rounded-full px-3 py-2 text-right text-[0.62rem] uppercase tracking-[0.12em] transition duration-300 hover:bg-[var(--soft)] hover:text-[var(--ink)] ${
                  isActive ? "text-[var(--ink)]" : "text-[var(--muted)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </motion.header>
  );
}
