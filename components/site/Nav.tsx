"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type MouseEvent, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "./data";

export function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileMenuOpen]);

  function resolveHref(href: string) {
    if (href === "#photography") {
      return "/photography";
    }

    return pathname === "/" ? href : `/${href}`;
  }

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    setMobileMenuOpen(false);

    if (pathname !== "/" || !href.startsWith("#") || href === "#photography") {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) {
      return;
    }

    event.preventDefault();
    const headerOffset = Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--header-offset",
      ),
    );
    const top = Math.max(
      target.offsetTop - (Number.isFinite(headerOffset) ? headerOffset : 112),
      0,
    );

    window.scrollTo({ top, behavior: "smooth" });
    window.history.pushState(null, "", href);
  }

  const showFrosted = scrolled || !isHome;
  const isItemActive = (href: string) => {
    const sectionId = href.replace("#", "");
    return href === "#photography"
      ? pathname === "/photography"
      : isHome && activeSection === sectionId;
  };
  const showMobileLandingNav = isHome && !scrolled;
  const showCompactMenu = scrolled || !isHome;

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.76, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 px-4 pt-7 transition duration-300 sm:px-6 sm:pt-8 lg:px-4 ${
          isHome ? "home-light-nav" : ""
        } ${showFrosted ? "nav-frosted" : ""} ${
          showMobileLandingNav
            ? ""
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-6xl rounded-3xl border border-[var(--line)] bg-[var(--nav)] px-3 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.18)] backdrop-blur-2xl lg:rounded-full lg:bg-transparent lg:px-4 lg:shadow-[0_18px_70px_rgba(0,0,0,0.32)]">
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/"
              prefetch={false}
              className="font-display shrink-0 text-xl tracking-[0.04em] text-[var(--ink)] transition duration-300 hover:text-[var(--blue-deep)]"
              aria-label="Helen Qi home"
            >
              HQ
            </Link>
          </div>

          <div className="mt-3 flex gap-1 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:hidden">
            {navItems.map((item) => {
              const isActive = isItemActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={resolveHref(item.href)}
                  prefetch={false}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className={`shrink-0 rounded-full px-3 py-2 text-[0.62rem] uppercase tracking-[0.13em] transition duration-300 hover:bg-[var(--soft)] hover:text-[var(--ink)] ${
                    isActive
                      ? "bg-[var(--soft)] text-[var(--ink)]"
                      : "text-[var(--muted)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center justify-between gap-4 lg:flex">
            <div className="hidden items-center justify-between gap-1 lg:flex lg:flex-1">
              {navItems.map((item) => {
                const isActive = isItemActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={resolveHref(item.href)}
                    prefetch={false}
                    onClick={(event) => handleNavClick(event, item.href)}
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
        </nav>
      </motion.header>

      <div
        className={`floating-site-menu transition duration-300 ${
          showCompactMenu
            ? ""
            : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-14 items-center gap-3 rounded-full border border-[#211f1b]/30 bg-[#211f1b] px-4 text-[#f3f0ea] shadow-[0_18px_60px_rgba(5,5,5,0.34)] backdrop-blur-2xl transition duration-300 hover:bg-[#050505]"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="flex w-4 flex-col gap-1">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
          <span className="text-[0.68rem] uppercase tracking-[0.18em]">
            Menu
          </span>
        </button>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[3.25rem] right-0 w-56 rounded-2xl border border-[var(--line)] bg-[var(--nav)] p-2 shadow-[0_24px_80px_rgba(5,5,5,0.22)] backdrop-blur-2xl"
          >
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (window.history.length > 1) {
                  router.back();
                } else {
                  window.location.href = "/";
                }
              }}
              className="mb-1 w-full rounded-xl px-3 py-2 text-left text-[0.68rem] uppercase tracking-[0.16em] text-[var(--ink)] transition duration-300 hover:bg-[var(--soft)]"
            >
              Back
            </button>
            <div className="h-px bg-[var(--line)]" />
            <div className="mt-1 grid">
              {navItems.map((item) => {
                const isActive = isItemActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={resolveHref(item.href)}
                    prefetch={false}
                    onClick={(event) => handleNavClick(event, item.href)}
                    className={`rounded-xl px-3 py-2 text-[0.68rem] uppercase tracking-[0.16em] transition duration-300 hover:bg-[var(--soft)] hover:text-[var(--ink)] ${
                      isActive ? "text-[var(--ink)]" : "text-[var(--muted)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
