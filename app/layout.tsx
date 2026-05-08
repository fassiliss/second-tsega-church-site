import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LiveChat from "./components/LiveChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://graceethiopianchurch.org"),
  title: {
    default: "Grace Ethiopian Evangelical Church of Nashville",
    template: "%s | Grace Ethiopian Evangelical Church of Nashville",
  },
  description:
    "Grace Ethiopian Evangelical Church of Nashville is a Christ-centered Ethiopian church serving La Vergne, Nashville, and surrounding communities.",
  keywords: [
    "Grace Ethiopian Evangelical Church",
    "Ethiopian church Nashville",
    "Ethiopian church La Vergne",
    "Tsega Church",
    "Nashville worship service",
  ],
  openGraph: {
    title: "Grace Ethiopian Evangelical Church of Nashville",
    description:
      "Join us for worship, prayer, fellowship, and biblical teaching in La Vergne, Tennessee.",
    url: "/",
    siteName: "Grace Ethiopian Evangelical Church of Nashville",
    images: [
      {
        url: "/hero16.png",
        width: 1200,
        height: 630,
        alt: "Grace Ethiopian Evangelical Church of Nashville",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace Ethiopian Evangelical Church of Nashville",
    description:
      "Join us for worship, prayer, fellowship, and biblical teaching in La Vergne, Tennessee.",
    images: ["/hero16.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
        <LiveChat />
      </body>
    </html>
  );
}
