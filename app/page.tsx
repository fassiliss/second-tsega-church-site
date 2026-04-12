"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
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

  const sermons = [
    {
      title: "Walking in Faith",
      meta: "Latest message • Sunday Service",
    },
    {
      title: "The Power of Prayer",
      meta: "Featured sermon • Midweek Fellowship",
    },
    {
      title: "Hope in Christ",
      meta: "Special message • Community Gathering",
    },
  ];

  const events = [
    {
      day: "SUN",
      title: "Morning Worship Service",
      time: "9:00 AM - 11:30 AM",
    },
    {
      day: "WED",
      title: "Bible Study & Prayer",
      time: "6:00 PM - 7:30 PM",
    },
    {
      day: "SAT",
      title: "Youth Fellowship",
      time: "4:00 PM - 6:00 PM",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative">
        <div className="custom-prev absolute left-5 top-1/2 z-20 -translate-y-1/2 cursor-pointer">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 text-white shadow-lg transition hover:bg-purple-800">
            <ChevronLeft size={16} />
          </div>
        </div>

        <div className="custom-next absolute right-5 top-1/2 z-20 -translate-y-1/2 cursor-pointer">
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
          className="h-screen relative"
        >
          <SwiperSlide>
            <div className="relative h-screen w-full">
              <img
                src="/pastor3-hero.png"
                alt="Pastor Biniyam Tekle"
                className="absolute inset-0 h-full w-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl font-bold md:text-6xl">
                      Grace Ethiopian Evangelical Church of Nashville
                    </h1>
                    {/* <p className="mt-4">Led by Pastor Biniam Teklee</p> */}
                    <p className="mt-2">Sunday Service • 11:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative h-screen w-full">
              <img
                src="/hero5.png"
                alt="Church worship"
                className="absolute inset-0 h-full w-full object-cover"
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
            <div className="relative h-screen w-full">
              <img
                src="/hero9.png"
                alt="Church worship"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <div className="max-w-xl text-white">
                    <h1 className="text-4xl font-bold md:text-6xl">
                      Worship with us this Sunday at 11AM
                    </h1>
                    <p className="mt-8">
                      Lead by Pastor Biniam Teklee, we gather to praise, learn,
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
                Share teaching and encouragement online.
              </h3>
            </div>
            <a
              href="#"
              className="text-sm font-semibold text-slate-800 underline underline-offset-4"
            >
              View all sermons
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sermons.map((sermon) => (
              <article
                key={sermon.title}
                className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 hover:ring-purple-300"
              >
                <p className="text-sm text-slate-500">{sermon.meta}</p>
                <h4 className="mt-3 text-2xl font-semibold tracking-tight">
                  {sermon.title}
                </h4>
                <p className="mt-4 leading-7 text-slate-600">
                  This card can later link to sermon details, audio, video, or
                  notes.
                </p>
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
            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400"
              />
              <textarea
                placeholder="Your message"
                rows={5}
                className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-400"
              />
              <button
                type="button"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-purple-700 transition hover:bg-purple-100 hover:-translate-y-0.5"
              >
                Send Message
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
                  <a
                    href="#"
                    className="mt-3 inline-block rounded-full bg-purple-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-800"
                  >
                    Online Giving Coming Soon
                  </a>
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
