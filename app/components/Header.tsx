"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronDown, Moon, Sun } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMinistriesOpen, setMobileMinistriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark =
      storedTheme === "dark" || (!storedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", shouldUseDark);
    document.documentElement.style.colorScheme = shouldUseDark
      ? "dark"
      : "light";
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl">
        <div className="overflow-visible rounded-2xl shadow-lg">
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

          <div
            className={`border border-slate-200 bg-white/95 backdrop-blur transition-all duration-300 dark:border-slate-700 dark:bg-slate-950/95 ${
              scrolled ? "shadow-sm" : ""
            }`}
          >
            <div
              className={`flex items-center justify-between px-6 transition-all duration-300 ${
                scrolled ? "py-1" : "py-2"
              }`}
            >
              <Link href="/" className="flex items-center gap-2 md:gap-3">
                <Image
                  src="/logo.png"
                  alt="Church Logo"
                  width={40}
                  height={40}
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
                    className={`hidden text-slate-500 transition-all duration-300 dark:text-slate-300 md:block ${
                      scrolled ? "text-[10px] md:text-[11px]" : "text-xs"
                    }`}
                  >
                    Grace Ethiopian Evangelical Church of Nashville
                  </p>
                </div>
              </Link>

              <nav className="hidden items-center gap-6 md:flex">
                <Link
                  href="/"
                  className="text-sm font-semibold text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
                >
                  Home
                </Link>

                <div className="group relative">
                  <Link
                    href="/ministries"
                    className="flex items-center gap-1 text-sm font-semibold text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
                  >
                    Ministries
                    <ChevronDown
                      size={14}
                      className="transition group-hover:rotate-180"
                    />
                  </Link>

                  <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 dark:border-slate-700 dark:bg-slate-900 group-hover:visible group-hover:opacity-100">
                    <Link
                      href="/ministries/womens-ministry"
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-purple-700 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                    >
                      Women&apos;s Ministry
                    </Link>

                    <Link
                      href="/ministries/family-ministry"
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-purple-700 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                    >
                      Family Ministry
                    </Link>

                    <Link
                      href="/ministries/youth-ministry"
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-purple-700 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                    >
                      Youth Ministry
                    </Link>

                    <Link
                      href="/ministries/children-ministry"
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-purple-700 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                    >
                      Children&apos;s Ministry
                    </Link>

                    <Link
                      href="/ministries/prayer-ministry"
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-purple-700 dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                    >
                      Prayer Ministry
                    </Link>
                  </div>
                </div>

                <Link
                  href="/sermons"
                  className="text-sm font-semibold text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
                >
                  Sermons
                </Link>

                <Link
                  href="/#events"
                  className="text-sm font-semibold text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
                >
                  Events
                </Link>

                <Link
                  href="/contact"
                  className="text-sm font-semibold text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
                >
                  Contact
                </Link>

                <Link
                  href="/donate"
                  className="text-sm font-semibold text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
                >
                  Donate
                </Link>

                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle light and dark mode"
                  title="Toggle light and dark mode"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 dark:border-slate-700 dark:text-slate-100 dark:hover:border-purple-500 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                >
                  <Sun size={18} className="hidden dark:block" />
                  <Moon size={18} className="dark:hidden" />
                </button>

                <Link
                  href="/contact#map"
                  className="rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-800"
                >
                  Visit Us
                </Link>
              </nav>

              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle light and dark mode"
                title="Toggle light and dark mode"
                className="ml-auto mr-2 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800 md:hidden"
              >
                <Sun size={18} className="hidden dark:block" />
                <Moon size={18} className="dark:hidden" />
              </button>

              <button
                type="button"
                className="flex items-center justify-center rounded-full p-2 text-slate-700 transition hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800 md:hidden"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            <div
              className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out dark:border-slate-700 dark:bg-slate-950 md:hidden ${
                open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <nav className="flex flex-col px-6 py-4">
                <Link
                  href="/"
                  className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>

                <div className="border-b border-slate-100 py-1 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileMinistriesOpen(!mobileMinistriesOpen)
                    }
                    className="flex w-full items-center justify-between py-3 text-left text-sm font-medium text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
                  >
                    <span>Ministries</span>
                    <ChevronDown
                      size={16}
                      className={`transition ${
                        mobileMinistriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileMinistriesOpen ? "max-h-96 pb-2" : "max-h-0"
                    }`}
                  >
                    <Link
                      href="/ministries"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-purple-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                      onClick={() => setOpen(false)}
                    >
                      All Ministries
                    </Link>

                    <Link
                      href="/ministries/womens-ministry"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-purple-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                      onClick={() => setOpen(false)}
                    >
                      Women&apos;s Ministry
                    </Link>

                    <Link
                      href="/ministries/family-ministry"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-purple-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                      onClick={() => setOpen(false)}
                    >
                      Family Ministry
                    </Link>

                    <Link
                      href="/ministries/youth-ministry"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-purple-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                      onClick={() => setOpen(false)}
                    >
                      Youth Ministry
                    </Link>

                    <Link
                      href="/ministries/children-ministry"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-purple-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                      onClick={() => setOpen(false)}
                    >
                      Children&apos;s Ministry
                    </Link>

                    <Link
                      href="/ministries/prayer-ministry"
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-purple-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-purple-300"
                      onClick={() => setOpen(false)}
                    >
                      Prayer Ministry
                    </Link>
                  </div>
                </div>

                <Link
                  href="/sermons"
                  className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
                  onClick={() => setOpen(false)}
                >
                  Sermons
                </Link>

                <Link
                  href="/#events"
                  className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
                  onClick={() => setOpen(false)}
                >
                  Events
                </Link>

                <Link
                  href="/contact"
                  className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  href="/donate"
                  className="py-3 text-sm font-medium text-slate-700 transition hover:text-purple-700 dark:text-slate-100 dark:hover:text-purple-300"
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
