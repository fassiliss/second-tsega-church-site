import { Heart, Cross, Star, Phone, Mail, MapPin } from "lucide-react";

export default function PrayerMinistryPage() {
  const missionPoints = [
    "Lead the church in faithful and consistent prayer.",
    "Encourage believers to seek God in every circumstance.",
    "Pray for healing, revival, guidance, and spiritual growth.",
    "Create opportunities for personal and corporate prayer.",
    "Support the needs of the church, families, and community through intercession.",
    "Strengthen the prayer life of the body of Christ.",
  ];

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-purple-900/70" />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:px-10 md:py-36">
          <p className="text-sm text-white/70">
            <span className="text-purple-400">Home</span>
            <span className="mx-2">•</span>
            Prayer Ministry
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight md:text-6xl">
            Prayer Ministry
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Calling the church to deeper prayer, dependence on God, and
            spiritual renewal.
          </p>
        </div>
      </section>

      <div className="relative z-10 -mt-8 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-700 text-white shadow-xl ring-8 ring-white">
          <Cross size={22} />
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-br from-purple-700 via-purple-700 to-purple-900 px-8 py-16 md:px-12 md:py-20">
              <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[22px] border border-white/10 bg-black/10 text-center text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-purple-200">
                  GEECN
                </p>
                <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                  Prayer Ministry
                </h2>
                <p className="mt-4 text-sm text-white/80">
                  Prayer • Faith • Renewal
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-600">
              Our Purpose
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">Mission</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-purple-600" />

            <ul className="mt-8 space-y-5">
              {missionPoints.map((point) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <Star size={14} fill="currentColor" />
                  </span>
                  <span className="leading-7 text-slate-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#433352] px-6 py-24 text-white md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-500/20 ring-8 ring-purple-500/10">
            <Heart className="text-purple-300" size={28} />
          </div>

          <blockquote className="mx-auto mt-10 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            “Devote yourselves to prayer, being watchful and thankful.”
          </blockquote>

          <div className="mx-auto mt-8 h-1 w-16 rounded-full bg-purple-400" />
          <p className="mt-5 text-lg italic text-purple-200">Colossians 4:2</p>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-400">
                Get in Touch
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight">
                Don&apos;t hesitate to contact us
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-purple-600" />

              <form
                action="mailto:gec5227@gmail.com"
                method="post"
                encType="text/plain"
                className="mt-10 space-y-4"
              >
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                  required
                  maxLength={120}
                  className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-purple-400"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  maxLength={160}
                  className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-purple-400"
                />
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone"
                  autoComplete="tel"
                  maxLength={40}
                  className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-purple-400"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={6}
                  required
                  maxLength={2000}
                  className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3.5 text-slate-900 outline-none placeholder:text-slate-400 focus:border-purple-400"
                />
                <button
                  type="submit"
                  className="rounded-2xl bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-600"
                >
                  Email Church Office
                </button>
              </form>
            </div>

            <aside className="flex h-fit flex-col rounded-[28px] bg-gradient-to-br from-purple-600 to-purple-700 p-8 shadow-2xl md:p-10">
              <h3 className="text-3xl font-bold">Contact Us</h3>
              <div className="mt-4 h-1 w-14 rounded-full bg-white/70" />

              <div className="mt-8 space-y-6 text-white/90">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-white/80">gec5227@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-white/80">(615) 485-1516</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-white/80">
                      5227 Murfreesboro Rd, La Vergne, TN 37086
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-white/10 p-4 text-sm text-white/85">
                For prayer requests, intercession gatherings, or ministry
                support, please contact us.
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
