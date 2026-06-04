"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

interface NavProps {
  onContactClick: () => void;
  contactOpen: boolean;
}

export default function Nav({ onContactClick, contactOpen }: NavProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDark(true);
    } else if (stored === "light") {
      setIsDark(false);
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    const value = next ? "dark" : "light";
    localStorage.setItem("theme", value);
    document.documentElement.setAttribute("data-theme", value);
  }

  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 border-b border-edge backdrop-blur-md"
      style={{ backgroundColor: "var(--nav-bg)" }}
    >
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center gap-3">
        <span className="text-heading font-semibold text-sm tracking-tight flex-1">
          Max Cooper Evans
        </span>

        {/* Theme toggle — only rendered after mount to avoid hydration mismatch */}
        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label="Toggle colour scheme"
            className="p-1.5 rounded-md text-muted hover:text-heading hover:bg-edge transition-colors"
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        )}

        <button
          onClick={onContactClick}
          className="px-4 py-1.5 rounded-full border border-edge text-muted text-sm font-medium hover:border-accent hover:text-accent transition-colors"
        >
          {contactOpen ? "Close" : "Get in touch"}
        </button>
      </div>
    </nav>
  );
}
