export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-700">
            Contact Us
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Get in touch with Grace Ethiopian Evangelical Church of Nashville
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We would love to hear from you. Reach out for prayer, questions,
            service information, or ministry support.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="rounded-[2rem] bg-purple-700 p-8 text-white shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-200">
              Church Information
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">Address</h2>
                <p className="mt-4 text-xl leading-9 text-purple-100">
                  5227 Murfreesboro Rd
                  <br />
                  La Vergne, TN 37086
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Phone</h2>
                <p className="mt-4 text-xl leading-9 text-purple-100">
                  (615) 485-1516
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Email</h2>
                <p className="mt-4 text-xl leading-9 text-purple-100">
                  gec5227@gmail.com
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Sunday Service</h2>
                <p className="mt-4 text-xl leading-9 text-purple-100">
                  11:00 AM - 1:00 PM
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Pastor</h2>
                <p className="mt-4 text-xl leading-9 text-purple-100">
                  Pastor Biniam Tekle
                </p>
              </div>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Send a Message
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Contact the church office
            </h2>

            <form className="mt-10 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-lg font-medium text-slate-700"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-3xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-purple-700"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-lg font-medium text-slate-700"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-3xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-purple-700"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-3 block text-lg font-medium text-slate-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  placeholder="(615) 000-0000"
                  className="w-full rounded-3xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-purple-700"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-lg font-medium text-slate-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={7}
                  placeholder="Write your message here..."
                  className="w-full rounded-3xl border border-slate-300 px-5 py-4 text-lg outline-none transition focus:border-purple-700"
                />
              </div>

              <button
                type="button"
                className="rounded-full bg-purple-700 px-8 py-4 text-base font-semibold text-white transition hover:bg-purple-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="map" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Visit Us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Church Location
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              5227 Murfreesboro Rd, La Vergne, TN 37086
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
              <iframe
                title="Grace Ethiopian Evangelical Church of Nashville Map"
                src="https://www.google.com/maps?q=5227+Murfreesboro+Rd,+La+Vergne,+TN+37086&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
