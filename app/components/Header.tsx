"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

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
    <header className="fixed left-0 right-0 top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          {/* Top info bar */}
          <div className="bg-slate-950 text-white">
            <div className="flex items-center justify-between px-6 py-1 text-[11px]">
              <div className="hidden items-center gap-4 md:flex">
                <span className="flex items-center gap-1">
                  <Phone size={12} />
                  <span>(615) 485-1516</span>
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={12} />
                  <span>gec5227@gmail.com</span>
                </span>
              </div>

              <div className="ml-auto text-[11px] text-slate-300">
                Sunday Service • 11:00 AM - 1:00 PM
              </div>
            </div>
          </div>

          {/* Main header */}
          <div
            className={`border border-slate-200 bg-white/95 backdrop-blur transition-all duration-300 ${
              scrolled ? "shadow-sm" : ""
            }`}
          >
            <div
              className={`flex items-center justify-between px-6 transition-all duration-300 ${
                scrolled ? "py-1" : "py-2"
              }`}
            >
              <Link href="/" className="flex items-center gap-2 md:gap-3">
                <img
                  src="/logo.png"
                  alt="Church Logo"
                  className={`rounded-full object-cover transition-all duration-300 ${
                    scrolled
                      ? "h-7 w-7 md:h-8 md:w-8"
                      : "h-8 w-8 md:h-10 md:w-10"
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
                    className={`hidden text-slate-500 transition-all duration-300 md:block ${
                      scrolled ? "text-[10px] md:text-[11px]" : "text-xs"
                    }`}
                  >
                    Grace Ethiopian Evangelical Church of Nashville
                  </p>
                </div>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden items-center gap-6 md:flex">
                <Link
                  href="/"
                  className="text-sm font-semibold  text-slate-700 transition hover:text-purple-700"
                >
                  Home
                </Link>

                <Link
                  href="/ministries"
                  className="text-sm font-semibold  text-slate-700 transition hover:text-purple-700"
                >
                  Ministries
                </Link>

                <Link
                  href="/#sermons"
                  className="text-sm font-semibold  text-slate-700 transition hover:text-purple-700"
                >
                  Sermons
                </Link>

                <Link
                  href="/#events"
                  className="text-sm font-semibold  text-slate-700 transition hover:text-purple-700"
                >
                  Events
                </Link>

                <Link
                  href="/contact"
                  className="text-sm font-semibold  text-slate-700 transition hover:text-purple-700"
                >
                  Contact
                </Link>

                <Link
                  href="/donate"
                  className="text-sm font-semibold  text-slate-700 transition hover:text-purple-700"
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

              {/* Mobile button */}
              <button
                type="button"
                className="flex items-center justify-center rounded-full p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            {/* Mobile menu */}
            <div
              className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out md:hidden ${
                open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <nav className="flex flex-col px-6 py-4">
                <Link
                  href="/"
                  className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/ministries"
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
                  href="/contact#map"
                  className="mt-3 rounded-full bg-purple-700 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-purple-800"
                  onClick={() => setOpen(false)}
                >
                  Visit Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
