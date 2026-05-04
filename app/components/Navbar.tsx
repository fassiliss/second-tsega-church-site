"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-purple-700">
          Tsega Church
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 hover:text-purple-700"
          >
            Home
          </Link>

          {/* Ministries Dropdown */}
          <div className="group relative">
            <Link
              href="/ministries"
              className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-purple-700"
            >
              Ministries
              <span className="text-xs transition group-hover:rotate-180">
                ▾
              </span>
            </Link>

            <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <Link
                href="/ministries/womens-ministry"
                className="block rounded-xl px-4 py-3 text-sm hover:bg-slate-50 hover:text-purple-700"
              >
                Women&apos;s Ministry
              </Link>

              <Link
                href="/ministries/family-ministry"
                className="block rounded-xl px-4 py-3 text-sm hover:bg-slate-50 hover:text-purple-700"
              >
                Family Ministry
              </Link>

              <Link
                href="/ministries/youth-ministry"
                className="block rounded-xl px-4 py-3 text-sm hover:bg-slate-50 hover:text-purple-700"
              >
                Youth Ministry
              </Link>

              <Link
                href="/ministries/children-ministry"
                className="block rounded-xl px-4 py-3 text-sm hover:bg-slate-50 hover:text-purple-700"
              >
                Children&apos;s Ministry
              </Link>

              <Link
                href="/ministries/prayer-ministry"
                className="block rounded-xl px-4 py-3 text-sm hover:bg-slate-50 hover:text-purple-700"
              >
                Prayer Ministry
              </Link>
            </div>
          </div>

          <Link
            href="/sermons"
            className="text-sm font-semibold text-slate-700 hover:text-purple-700"
          >
            Sermons
          </Link>

          <Link
            href="/#events"
            className="text-sm font-semibold text-slate-700 hover:text-purple-700"
          >
            Events
          </Link>

          <Link
            href="/#contact"
            className="text-sm font-semibold text-slate-700 hover:text-purple-700"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link href="/">Home</Link>

            <Link href="/ministries">Ministries</Link>
            <Link href="/ministries/womens-ministry">
              Women&apos;s Ministry
            </Link>
            <Link href="/ministries/family-ministry">Family Ministry</Link>
            <Link href="/ministries/youth-ministry">Youth Ministry</Link>
            <Link href="/ministries/children-ministry">Children&apos;s Ministry</Link>
            <Link href="/sermons">Sermons</Link>

            <Link href="/#events">Events</Link>

            <Link href="/#contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}

