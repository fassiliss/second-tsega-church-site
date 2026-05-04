import Link from "next/link";

type Sermon = {
  id: string;
  title: string;
  description: string;
  preacher: string;
  date: string;
  youtubeUrl: string;
  category: string;
  featured?: boolean;
};

const sermons: Sermon[] = [
  {
    id: "1",
    title: "Walking in Faith",
    description:
      "A message about trusting God in every season and staying rooted in Christ.",
    preacher: "Pastor Biniam Tekle",
    date: "2026-04-14",
    youtubeUrl: "https://www.youtube.com/watch?v=H_YBVWUqFkw",
    category: "Sunday Sermon",
    featured: true,
  },
  {
    id: "2",
    title: "Growing in God’s Word",
    description:
      "A practical teaching on spiritual growth, obedience, and daily devotion.",
    preacher: "Pastor Biniam Tekle",
    date: "2026-04-07",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    category: "Bible Teaching",
  },
  {
    id: "3",
    title: "The Power of Prayer",
    description:
      "Encouragement to remain faithful in prayer and seek God together as a church.",
    preacher: "Pastor Biniam Tekle",
    date: "2026-03-31",
    youtubeUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    category: "Prayer Message",
  },
  {
    id: "4",
    title: "Living with Purpose",
    description:
      "A sermon on calling, service, and living as disciples in everyday life.",
    preacher: "Pastor Biniam Tekle",
    date: "2026-03-24",
    youtubeUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
    category: "Sunday Sermon",
  },
];

function getYoutubeEmbedUrl(url: string) {
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
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return "TBA";

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function SermonsPage() {
  const featuredSermon =
    sermons.find((sermon) => sermon.featured) || sermons[0];
  const otherSermons = sermons.filter(
    (sermon) => sermon.id !== featuredSermon.id,
  );

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="border-b border-white/10 bg-gradient-to-b from-orange-600/20 to-transparent">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <p className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium text-orange-300">
            Sermons
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Watch and listen to recent messages from Tsega Church
          </h1>
          <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            Be encouraged by biblical teaching, worship, and messages that help
            you grow in faith.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              Back Home
            </Link>
            <a
              href="#all-sermons"
              className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
            >
              Browse Sermons
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
            Featured Message
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            {featuredSermon.title}
          </h2>
          <p className="mt-3 max-w-3xl text-white/70">
            {featuredSermon.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <div className="aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={getYoutubeEmbedUrl(featuredSermon.youtubeUrl)}
                title={featuredSermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-medium text-orange-300">
                {featuredSermon.category}
              </span>
              <span className="text-sm text-white/60">
                {formatDate(featuredSermon.date)}
              </span>
            </div>

            <h3 className="text-2xl font-semibold">{featuredSermon.title}</h3>
            <p className="mt-2 text-sm font-medium text-orange-300">
              {featuredSermon.preacher}
            </p>

            <p className="mt-5 leading-7 text-white/75">
              {featuredSermon.description}
            </p>

            <a
              href={featuredSermon.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      <section
        id="all-sermons"
        className="mx-auto max-w-7xl px-6 pb-20 md:px-10"
      >
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              Recent Messages
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Latest Sermons
            </h2>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {otherSermons.map((sermon) => (
            <article
              key={sermon.id}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/[0.07]"
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

              <div className="p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
                    {sermon.category}
                  </span>
                  <span className="text-xs text-white/50">
                    {formatDate(sermon.date)}
                  </span>
                </div>

                <h3 className="text-xl font-semibold">{sermon.title}</h3>
                <p className="mt-2 text-sm font-medium text-orange-300">
                  {sermon.preacher}
                </p>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/70">
                  {sermon.description}
                </p>

                <a
                  href={sermon.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Open on YouTube
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
