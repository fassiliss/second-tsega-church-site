export default function MinistriesPage() {
  const ministries = [
    {
      title: "Sunday Worship",
      description:
        "Join us every Sunday for worship, prayer, teaching, and fellowship as we gather together in Christ.",
    },
    {
      title: "Bible Study",
      description:
        "Grow deeper in God’s Word through weekly Bible study, discussion, and spiritual encouragement.",
    },
    {
      title: "Youth Ministry",
      description:
        "A place for young people to learn, connect, serve, and build strong faith in a supportive community.",
    },
    {
      title: "Prayer Ministry",
      description:
        "Come together in prayer for the church, families, the community, and the needs of one another.",
    },
    {
      title: "Community Outreach",
      description:
        "Serving others through compassion, encouragement, and practical support in the local community.",
    },
    {
      title: "Family Fellowship",
      description:
        "Strengthening families and relationships through fellowship, care, and shared life in the church.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-700">
            Ministries
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-bold tracking-tight md:text-6xl">
            Serving the church and community through faith, prayer, and
            fellowship
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Our ministries help people grow spiritually, serve others, and stay
            connected in the life of the church. There is a place for everyone
            to worship, learn, pray, and participate.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ministries.map((ministry) => (
            <article
              key={ministry.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-purple-400"
            >
              <h2 className="text-2xl font-semibold text-purple-700">
                {ministry.title}
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                {ministry.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 rounded-[2rem] bg-purple-700 p-8 text-white shadow-lg md:grid-cols-3 md:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-200">
                Worship
              </p>
              <h3 className="mt-3 text-3xl font-bold">Sunday Gathering</h3>
              <p className="mt-4 text-lg leading-8 text-purple-100">
                Join us every Sunday from 11:00 AM to 1:00 PM for worship and
                the Word.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-200">
                Growth
              </p>
              <h3 className="mt-3 text-3xl font-bold">Bible & Prayer</h3>
              <p className="mt-4 text-lg leading-8 text-purple-100">
                Grow in faith through teaching, prayer, and fellowship
                throughout the week.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-purple-200">
                Community
              </p>
              <h3 className="mt-3 text-3xl font-bold">Serve Together</h3>
              <p className="mt-4 text-lg leading-8 text-purple-100">
                Be part of a church family that serves one another and reaches
                out with love.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Get Involved
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            There is a place for you in ministry
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Whether you want to join worship, Bible study, youth ministry, or
            prayer gatherings, we would love to connect with you and help you
            get involved.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
            >
              Contact the Church
            </a>

            <a
              href="/contact#map"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              Visit Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
