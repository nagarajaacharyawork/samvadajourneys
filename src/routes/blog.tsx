import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { posts } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Stories — Samvada Journeys" },
      { name: "description", content: "Field notes from India's coasts, forests, and kitchens — told by the people who live there." },
      { property: "og:title", content: "Blog & Stories — Samvada Journeys" },
      { property: "og:description", content: "Local stories, travel guides, food and heritage journalism from Samvada Journeys." },
    ],
  }),
  component: BlogIndex,
});

const cats = ["All", "Culture", "Local Stories", "Travel Guides", "Food & Heritage"];

function BlogIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [featured, ...rest] = posts;
  const list = rest.filter((p) => (cat === "All" || p.category === cat) && p.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <div>
      <section className="pt-32 pb-8" style={{ background: "var(--brand-sand)" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading eyebrow="Blog & Stories" title={<>Field notes from a slower India.</>}>
            Told by the people who live it, not by us.
          </SectionHeading>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <Link to="/blog/$id" params={{ id: featured.id }} className="group grid overflow-hidden rounded-3xl border border-foreground/10 bg-card md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
              <img src={featured.image} alt={featured.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span className="inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white" style={{ background: "var(--brand-terracotta)" }}>
                Featured {featured.category}
              </span>
              <h3 className="mt-5 text-3xl font-black leading-tight md:text-4xl">{featured.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-6 text-xs text-muted-foreground">{featured.date} {featured.readTime}</div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "var(--brand-terracotta)" }}>
                Read the story <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <div className="mt-14 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-2 rounded-xl border border-foreground/10 bg-card px-4 py-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…" className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
            </div>
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${cat === c ? "text-white" : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"}`} style={cat === c ? { background: "var(--brand-ocean)" } : {}}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.06 }}>
                <Link to="/blog/$id" params={{ id: p.id }} className="group block overflow-hidden rounded-3xl border border-foreground/10 bg-card transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(15,44,58,0.25)]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{p.category} {p.readTime}</div>
                    <div className="mt-2 text-lg font-bold leading-snug">{p.title}</div>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}