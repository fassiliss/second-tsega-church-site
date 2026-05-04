import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold text-white">
              Grace Ethiopian Evangelical Church
            </h3>
            <p className="mt-4 text-sm leading-6">
              A place of worship, prayer, and community. Join us as we grow
              together in faith and love.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="hover:text-purple-400">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:text-purple-400">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/#events" className="hover:text-purple-400">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Service Times
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Sunday: 11:00 AM - 1:00 PM</li>
              <li>Wednesday: 6:00 PM</li>
              <li>Friday Prayer: 6:30 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-purple-400" />
                <span>gec5227@gmail.com</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} className="text-purple-400" />
                <span>(615) 485-1516</span>
              </li>

              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-purple-400" />
                <span>
                  5227 Murfreesboro Rd <br />
                  La Vergne, TN
                </span>
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com/yourchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition hover:bg-purple-700"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@yourchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition hover:bg-purple-700"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/yourchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-white transition hover:bg-purple-700"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>© 2026 Grace Ethiopian Evangelical Church of Nashville.</p>

          <p>
            Built by{" "}
            <a
              href="https://fassiltsegaye.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-purple-400 hover:underline"
            >
              Fassil Tsegaye
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
