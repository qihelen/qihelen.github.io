"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    const frame = window.requestAnimationFrame(() => {
      setIsDark(shouldUseDark);
      setMounted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="group relative grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-[var(--glass)] text-[var(--ink)] shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-[var(--blue)] hover:text-[var(--blue-deep)]"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      <span className="relative block h-4 w-4 rounded-full border border-current">
        <span
          className={`absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[var(--surface)] transition ${
            mounted && isDark ? "translate-x-1 translate-y-1" : ""
          }`}
        />
      </span>
    </button>
  );
}
