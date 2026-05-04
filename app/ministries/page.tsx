import Image from "next/image";
import Link from "next/link";
import { Cross } from "lucide-react";

type Ministry = {
  title: string;
  description: string;
  image: string;
  href: string;
  theme: "dark" | "purple";
};

const ministries: Ministry[] = [
  {
    title: "Women's Ministry",
    description:
      "The Women’s Ministry is a Christ-centered space where women grow in faith, encourage one another, and walk together in prayer, fellowship, and God’s Word. We seek to strengthen women in every season of life and help them flourish in their calling.",
    image: "/hero11.png",
    href: "/ministries/womens-ministry",
    theme: "dark",
  },
  {
    title: "Family Ministry",
    description:
      "Our Family Ministry exists to strengthen homes through biblical teaching, encouragement, prayer, and fellowship. We support marriages, parents, and children as they grow together in Christ.",
    image: "/hero5.png",
    href: "/ministries/family-ministry",
    theme: "purple",
  },
  {
    title: "Youth Ministry",
    description:
      "The Youth Ministry helps young people know Jesus personally, grow in faith, build strong friendships, and live boldly for Christ in everyday life. We are committed to discipleship, leadership, and purpose.",
    image: "/hero9.png",
    href: "/ministries/youth-ministry",
    theme: "dark",
  },
  {
    title: "Children's Ministry",
    description:
      "Our Children’s Ministry creates a safe, joyful, and loving environment where children learn God’s Word, worship with gladness, and begin a lifelong journey of faith in Jesus.",
    image: "/hero14.png",
    href: "/ministries/children-ministry",
    theme: "purple",
  },
  {
    title: "Prayer Ministry",
    description:
      "The Prayer Ministry leads the church in faithful prayer, intercession, and dependence on God. We gather to seek the Lord for healing, revival, wisdom, and the spiritual growth of our church and community.",
    image: "/hero16.png",
    href: "/ministries/prayer-ministry",
    theme: "dark",
  },
];

export default function MinistriesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-purple-900/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <p className="text-sm text-white/70">
            <span className="text-purple-400">Home</span>
            <span className="mx-2">•</span>
            Ministries
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Ministries
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Discover the ministries of Grace Ethiopian Evangelical Church of
            Nashville and find a place to grow, serve, and belong.
          </p>
        </div>
      </section>

      {/* Divider icon */}
      <div className="relative z-10 -mt-8 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-700 text-white shadow-xl ring-8 ring-white">
          <Cross size={22} />
        </div>
      </div>

      {/* Ministry Sections */}
      <section>
        {ministries.map((ministry, index) => {
          const reverse = index % 2 === 1;
          const isPurple = ministry.theme === "purple";

          return (
            <section
              key={ministry.title}
              className={`relative overflow-hidden ${
                isPurple
                  ? "bg-purple-700 text-white"
                  : "bg-slate-950 text-white"
              }`}
            >
              <div
                className={`absolute inset-0 ${
                  isPurple
                    ? "bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]"
                    : "bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.18),transparent_30%)]"
                }`}
              />

              <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div>
                    <div className="relative h-[280px] overflow-hidden rounded-[22px] border border-white/20 bg-white/5 shadow-2xl md:h-[340px]">
                      <Image
                        src={ministry.image}
                        alt={ministry.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="max-w-2xl">
                    <p
                      className={`text-sm font-semibold uppercase tracking-[0.28em] ${
                        isPurple ? "text-purple-100" : "text-purple-300"
                      }`}
                    >
                      Ministry
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
                      {ministry.title}
                    </h2>

                    <div
                      className={`mt-4 h-1 w-16 rounded-full ${
                        isPurple ? "bg-white/80" : "bg-purple-500"
                      }`}
                    />

                    <p
                      className={`mt-6 max-w-xl text-base leading-8 ${
                        isPurple ? "text-white/85" : "text-white/75"
                      }`}
                    >
                      {ministry.description}
                    </p>

                    <Link
                      href={ministry.href}
                      className={`mt-8 inline-flex rounded-full border px-6 py-3 text-sm font-semibold transition ${
                        isPurple
                          ? "border-white/40 text-white hover:bg-white hover:text-purple-700"
                          : "border-purple-400 text-white hover:bg-purple-700"
                      }`}
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}
