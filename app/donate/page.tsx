export default function DonatePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-700">
            Support the Ministry
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Give to Grace Ethiopian Evangelical Church of Nashville
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Your generosity helps support worship services, prayer gatherings,
            outreach, youth ministry, and the growth of our church community.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <aside className="rounded-[2rem] bg-purple-700 p-8 text-white shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-200">
              Why We Give
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold">Worship & Ministry</h2>
                <p className="mt-3 text-lg leading-8 text-purple-100">
                  Support weekly worship services, prayer gatherings, and church
                  ministry activities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Outreach</h2>
                <p className="mt-3 text-lg leading-8 text-purple-100">
                  Help us serve the wider community through outreach, care, and
                  encouragement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Church Growth</h2>
                <p className="mt-3 text-lg leading-8 text-purple-100">
                  Your giving helps maintain church operations and support the
                  future of the ministry.
                </p>
              </div>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Ways to Give
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Giving Options
            </h2>

            <div className="mt-10 space-y-5">
              <div className="rounded-3xl border border-slate-200 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  Online Giving
                </p>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  Online giving will be available soon. Thank you for supporting
                  the ministry.
                </p>

                <button
                  type="button"
                  className="mt-5 rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white opacity-90 cursor-default"
                >
                  Online Giving Coming Soon
                </button>
              </div>

              <div className="rounded-3xl border border-slate-200 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  In Person
                </p>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  You can give during Sunday service from 11:00 AM - 1:00 PM.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  By Contact
                </p>
                <p className="mt-3 text-lg leading-8 text-slate-700">
                  For giving questions, contact the church office at{" "}
                  <span className="font-medium">gec5227@gmail.com</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Thank You
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              We appreciate your generosity
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Every gift, large or small, helps strengthen the ministry and
              support the mission of Grace Ethiopian Evangelical Church of
              Nashville.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
