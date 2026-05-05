"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

type Sermon = {
  id: string;
  title: string;
  description: string;
  preacher: string;
  date: string;
  youtubeUrl: string;
  category: string;
};

export default function Page() {
  const ministries = [
    {
      title: "Sunday Worship",
      text: "Join us every Sunday for worship, prayer, and a message centered on Christ.",
    },
    {
      title: "Bible Study",
      text: "Grow in faith through weekly teaching, discussion, and fellowship.",
    },
    {
      title: "Youth Ministry",
      text: "A place where young people can learn, connect, and serve together.",
    },
  ];

  const sermons: Sermon[] = [
    {
      id: "1",
      title: "Walking in Faith",
      description:
        "A message about trusting God in every season and staying rooted in Christ.",
      preacher: "Pastor Biniam Tekle",
      date: "2026-04-14",
      youtubeUrl: "https://www.youtube.com/watch?v=H_YBVWUqFkw",
      category: "Sunday Service",
    },
    {
      id: "2",
      title: "The Power of Prayer",
      description:
        "An encouraging message about prayer, perseverance, and seeking God together.",
      preacher: "Pastor Biniam Tekle",
      date: "2026-04-07",
      youtubeUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
      category: "Midweek Fellowship",
    },
    {
      id: "3",
      title: "Hope in Christ",
      description:
        "A special message on hope, grace, and the promises of God for His people.",
      preacher: "Pastor Biniam Tekle",
      date: "2026-03-31",
      youtubeUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
      category: "Special Message",
    },
  ];

  const events = [
    {
      day: "SUN",
      title: "Morning Worship Service",
      time: "11:00 AM - 1:00 PM",
    },
    {
      day: "WED",
      title: "Youth Fellowship",
      time: "6:00 PM - 8:00 PM",
    },
    {
      day: "SAT",
      title: "Prayer Meeting",
      time: "9:00 AM - 11:00 AM",
    },
  ];

  const getYoutubeEmbedUrl = (url: string) => {
    if (!url) return "";

    if (url.includes("youtube.com/watch?v=")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }

    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }

    if (url.includes("youtube.com/embed/")) {
      return url;
    }

    return "";
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);

    if (Number.isNaN(date.getTime())) return "TBA";

    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative">
        <div className="custom-prev absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer md:block">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 text-white shadow-lg transition hover:bg-purple-800">
            <ChevronLeft size={16} />
          </div>
        </div>

        <div className="custom-next absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer md:block">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 text-white shadow-lg transition hover:bg-purple-800">
            <ChevronRight size={16} />
          </div>
        </div>

        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="relative h-screen"
        >
          <SwiperSlide>
            <div className="relative h-screen w-full bg-slate-950">
              <Image
                src="/hero16.png"
                alt="Pastor Biniam Tekle"
                fill
                priority
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-contain object-center md:object-cover md:object-right"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl font-bold md:text-6xl">
                      Grace Ethiopian Evangelical Church of Nashville
                    </h1>
                    <p className="mt-2">Sunday Service • 11:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-screen w-full bg-slate-950">
              <Image
                src="/hero5.png"
                alt="Church worship"
                fill
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-contain object-center md:object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl font-bold md:text-6xl">
                      Worship with us this Sunday at 11AM
                    </h1>
                    <p className="mt-4">
                      Experience faith, fellowship, and community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-screen w-full bg-slate-950">
              <Image
                src="/hero9.png"
                alt="Church worship"
                fill
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-contain object-center md:object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl font-bold md:text-6xl">
                      Worship with us this Sunday at 11AM
                    </h1>
                    <p className="mt-8">
                      Led by Pastor Biniam Tekle, we gather to praise, learn,
                      and grow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-screen w-full bg-slate-950">
              <Image
                src="/hero11.png"
                alt="Church worship"
                fill
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-contain object-center md:object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl font-bold md:text-6xl">
                      Worship with us this Sunday at 11AM
                    </h1>
                    <p className="mt-8">
                      Experience faith, fellowship, and community. We gather to
                      praise, learn, and grow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-screen w-full bg-slate-950">
              <Image
                src="/hero14.png"
                alt="Church worship"
                fill
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-contain object-center md:object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl font-bold md:text-6xl">
                      Worship with us this Sunday at 11AM
                    </h1>
                    <p className="mt-8">
                      Led by Pastor Biniam Tekle, we gather to praise, learn,
                      and grow
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Ministries
          </p>
          <h3 className="mt-3 text-3xl font-bold tracking-tight text-purple-700 md:text-4xl">
            Main sections for your church community.
          </h3>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ministries.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 p-7 shadow-sm hover:border-purple-400"
            >
              <h4 className="text-xl font-semibold">{item.title}</h4>
              <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="sermons" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Recent Sermons
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Watch recent messages and grow in God&apos;s Word.
              </h3>
            </div>
            <Link
              href="/sermons"
              className="text-sm font-semibold text-slate-800 underline underline-offset-4"
            >
              View all sermons
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sermons.map((sermon) => (
              <article
                key={sermon.id}
                className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:ring-purple-300"
              >
                <div className="aspect-video bg-black">
                  <iframe
                    className="h-full w-full"
                    src={getYoutubeEmbedUrl(sermon.youtubeUrl)}
                    title={sermon.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                      {sermon.category}
                    </span>
                    <span className="text-sm text-slate-500">
                      {formatDate(sermon.date)}
                    </span>
                  </div>

                  <h4 className="mt-4 text-2xl font-semibold tracking-tight">
                    {sermon.title}
                  </h4>

                  <p className="mt-2 text-sm font-medium text-purple-700">
                    {sermon.preacher}
                  </p>

                  <p className="mt-4 leading-7 text-slate-600">
                    {sermon.description}
                  </p>

                  <a
                    href={sermon.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Upcoming Events
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Keep members informed about weekly gatherings.
            </h3>
            <div className="mt-8 space-y-4">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="flex items-center gap-5 rounded-3xl border border-slate-200 p-5 shadow-sm"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-purple-700 text-sm font-bold text-white">
                    {event.day}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">{event.title}</h4>
                    <p className="mt-1 text-slate-600">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside
            className="rounded-3xl bg-purple-700 p-8 text-white shadow-sm"
            id="contact"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              Contact
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight">
              Get in touch with the church office.
            </h3>
            <div className="mt-8 space-y-4 text-slate-200">
              <p>Email: gec5227@gmail.com</p>
              <p>Phone: +615 485 1516</p>
              <p>Address: 5227 Murfreesboro Rd, La Vergne, TN 37086</p>
            </div>
            <form
              action="mailto:gec5227@gmail.com"
              method="post"
              encType="text/plain"
              className="mt-8 space-y-4"
            >
              <input
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
                maxLength={120}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
                required
                maxLength={160}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400"
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows={5}
                required
                maxLength={2000}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-purple-700 transition hover:-translate-y-0.5 hover:bg-purple-100"
              >
                Email Church Office
              </button>
            </form>
          </aside>
        </div>
      </section>

      <section id="donate" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid items-center gap-10 rounded-3xl bg-purple-700 p-8 text-white shadow-lg md:grid-cols-2 md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-200">
                Support the Ministry
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Give to Grace Ethiopian Evangelical Church of Nashville
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-purple-100">
                Your generosity helps support worship services, outreach, prayer
                gatherings, youth ministry, and the growth of our church
                community.
              </p>

              <div className="mt-6 space-y-2 text-sm text-purple-100">
                <p>• Tithes and offerings</p>
                <p>• Community outreach</p>
                <p>• Church events and ministry support</p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-sm md:p-8">
              <h3 className="text-2xl font-bold text-purple-700">
                Ways to Give
              </h3>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-500">
                    Online Giving
                  </p>
                  <p className="mt-1 text-base text-slate-700">
                    Add your secure donation link here.
                  </p>
                  <span className="mt-3 inline-block rounded-full bg-purple-700 px-5 py-2 text-sm font-semibold text-white">
                    Online Giving Coming Soon
                  </span>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-500">
                    In Person
                  </p>
                  <p className="mt-1 text-base text-slate-700">
                    You can give during Sunday service from 11:00 AM - 1:00 PM.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-500">
                    By Contact
                  </p>
                  <p className="mt-1 text-base text-slate-700">
                    For special giving or support questions, contact the church
                    office at{" "}
                    <span className="font-medium">gec5227@gmail.com</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
