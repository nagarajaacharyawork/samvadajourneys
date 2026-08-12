import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/lib/site-data";

export const Route = createFileRoute("/blog/$id")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.id === params.id);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} — Samvada Journeys` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `https://www.samvadajourneys.in/blog/${loaderData.post.id}` },
        ]
      : [{ title: "Story not found — Samvada Journeys" }, { name: "robots", content: "noindex" }],
    links: loaderData
      ? [{ rel: "canonical", href: `https://www.samvadajourneys.in/blog/${loaderData.post.id}` }]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-3xl font-black">Story not found</h1>
      <Link to="/blog" className="mt-6 inline-block text-sm font-semibold underline">Back to all stories</Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-3xl font-black">Couldn't load this story</h1>
      <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: BlogDetail,
});

function BlogDetail() {
  const { post } = Route.useLoaderData();
  return (
    <article className="pb-24">
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-4xl px-6 pb-12 text-white md:px-8">
          <span className="inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ background: "var(--brand-terracotta)" }}>
            {post.category}
          </span>
          <h1 className="mt-4 text-balance text-4xl font-black leading-[1.05] md:text-6xl">{post.title}</h1>
          <div className="mt-4 text-sm opacity-85">{post.date} · {post.readTime}</div>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-6 md:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> All stories
        </Link>
        <p className="mt-8 text-xl leading-relaxed text-foreground/90">{post.excerpt}</p>
        <div className="mt-8 space-y-6 text-base leading-[1.85] text-foreground/85">
          <p>
            It is 5:47 AM. The nets have already been out for two hours. On the sand at Malpe, seven men crouch in a loose circle, sorting the night's catch, silver mackerel from the smaller sardines, sardines from the crab that keeps trying to shuffle away. Nobody speaks. The morning does the talking.
          </p>
          <p>
            This is the part of coastal Karnataka the tour buses skip. The photos happen at 9 AM, when the beach turns into an Instagram set. What happens at 5 AM is the reason the beach exists at all.
          </p>
          <p>
            We spent three days in a small fishing village north of Udupi with our friend Ramesh, third generation on the water, second generation to run his own boat. Over filter kaapi in his mother's kitchen, he explained a version of the coastal economy that no travel guide will ever hand you. Boat share, ice cost, kerosene, the daily gamble of the auction shed. The math is brutal. The stories are not.
          </p>
          <p>
            This is why we travel. Not to see a place. To sit inside it, until it starts to make sense.
          </p>
        </div>
      </div>
    </article>
  );
}