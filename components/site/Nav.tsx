"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navItems } from "./data";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  const pathname = usePathname();

  function resolveHref(href: string) {
    return pathname === "/" || !href.startsWith("#") ? href : `/${href}`;
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.76, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav className="mx-auto max-w-6xl rounded-3xl border border-[var(--line)] bg-[var(--nav)] px-4 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl lg:rounded-full">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="font-display shrink-0 text-xl tracking-[0.04em] text-[var(--ink)] transition duration-300 hover:text-[var(--blue-deep)]"
            aria-label="Helen Qi home"
          >
            HQ
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={resolveHref(item.href)}
                className="rounded-full px-3 py-2 text-sm text-[var(--muted)] transition duration-300 hover:bg-[var(--soft)] hover:text-[var(--ink)]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-medium text-[var(--background)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--blue)] hover:text-[var(--ink)] hover:shadow-lg sm:inline-flex"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>
        </div>
        <div className="mt-3 flex gap-1 overflow-x-auto pb-1 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={resolveHref(item.href)}
              className="shrink-0 rounded-full px-3 py-2 text-sm text-[var(--muted)] transition duration-300 hover:bg-[var(--soft)] hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
