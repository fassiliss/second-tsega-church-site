"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur transition-all duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-1.5" : "py-4"
        }`}
      >
        {/* ✅ LOGO (fixed) */}
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <img
            src="/logo.png"
            alt="Church Logo"
            className={`object-cover rounded-full transition-all duration-300 ${
              scrolled ? "h-7 w-7 md:h-10 md:w-10" : "h-8 w-8 md:h-12 md:w-12"
            }`}
          />

          <div className="leading-tight">
            <p
              className={`font-bold text-purple-700 transition-all duration-300 ${
                scrolled ? "text-sm md:text-base" : "text-base md:text-lg"
              }`}
            >
              GEECN
            </p>
            <p
              className={`text-slate-500 transition-all duration-300 ${
                scrolled ? "text-[10px] md:text-xs" : "text-xs"
              }`}
            >
              Grace Ethiopian Evangelical Church of Nashville
            </p>
          </div>
        </Link>

        {/* ✅ DESKTOP NAV */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-700 transition hover:text-purple-700"
          >
            Home
          </Link>

          <Link
            href="/#services"
            className="text-sm font-medium text-slate-700 transition hover:text-purple-700"
          >
            Ministries
          </Link>

          <Link
            href="/#sermons"
            className="text-sm font-medium text-slate-700 transition hover:text-purple-700"
          >
            Sermons
          </Link>

          <Link
            href="/#events"
            className="text-sm font-medium text-slate-700 transition hover:text-purple-700"
          >
            Events
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-slate-700 transition hover:text-purple-700"
          >
            Contact
          </Link>

          <Link
            href="/donate"
            className="text-sm font-medium text-slate-700 transition hover:text-purple-700"
          >
            Donate
          </Link>

          <Link
            href="/contact#map"
            className="rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-800"
          >
            Visit Us
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className="flex items-center justify-center rounded-full p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
          <Link
            href="/"
            className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/#services"
            className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700"
            onClick={() => setOpen(false)}
          >
            Ministries
          </Link>

          <Link
            href="/#sermons"
            className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700"
            onClick={() => setOpen(false)}
          >
            Sermons
          </Link>

          <Link
            href="/#events"
            className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700"
            onClick={() => setOpen(false)}
          >
            Events
          </Link>

          <Link
            href="/contact"
            className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/donate"
            className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700"
            onClick={() => setOpen(false)}
          >
            Donate
          </Link>

          <Link
            href="/contact"
            className="mt-3 rounded-full bg-purple-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-purple-800"
            onClick={() => setOpen(false)}
          >
            Visit Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
