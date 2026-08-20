"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "Meet Hetvi" },
  { href: "#programs", label: "Programs" },
  { href: "#classroom", label: "The Classroom" },
  { href: "#approach", label: "How I Teach" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="script-eyebrow pb-1 text-[1.9rem] text-ink transition-colors hover:text-terracotta-deep">
          Hetvi Dhimar
          <span className="text-terracotta">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#start"
            className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-terracotta/30 transition hover:-translate-y-0.5 hover:bg-terracotta-deep"
          >
            Book a free class
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/5 bg-cream px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-ink-soft"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#start"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-terracotta px-5 py-3 text-center text-sm font-semibold text-white shadow-md shadow-terracotta/30"
          >
            Book a free class
          </a>
        </div>
      )}
    </header>
  );
}
