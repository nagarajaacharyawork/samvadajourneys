import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Play,
  Quote,
  Sparkles,
  Star,
  Utensils,
  HeartHandshake,
} from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/imgi_103_673340c832068788b2cfa746%2F675173fcd2b2608f3e1483c1_UDUPI no logo crop (com) (1)-poster-00001.webp";
import { experiences, gallery, posts, testimonials, trips } from "@/lib/site-data";
import { VideoModal } from "@/components/site/VideoModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samvada Journeys — Explore India Like a Local" },
      {
        name: "description",
        content:
          "India's first entrepreneur-led experiential travel company. Meet local communities, taste authentic food, and discover hidden India.",
      },
    ],
  }),
  component: Home,
});

const promises = [
  { n: "01", icon: Quote, title: "One Local Story", body: "Told by the person who lived it — never a script." },
  { n: "02", icon: MapPin, title: "One Hidden Place", body: "Off the map. Off the tourist trail. On the local trail." },
  { n: "03", icon: Utensils, title: "One Authentic Meal", body: "Home kitchens, 70-year-old eateries, banana-leaf lunches." },
  { n: "04", icon: HeartHandshake, title: "One Local Entrepreneur", body: "Coffee with the people quietly building their worlds." },
  { n: "05", icon: Sparkles, title: "One Lifetime Memory", body: "The kind you'll still be telling in twenty years." },
];

function Home() {
  return (
    <div className="bg-[#F9F9FB]">
      <Hero />
      <PromiseSection />
      <ExperiencesGrid />
      <DifferentlySection />
      <UpcomingTrips />
      <SocialGrid />
      <BlogsSection />
      <TestimonialsCarousel />
    </div>
  );
}

function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Coastal India at dusk" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="mb-6 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/70">
            <span className="h-px w-10 bg-white/40" />
            Samvada Journeys
            <span className="h-px w-10 bg-white/40" />
          </div>
          <h1
            className="text-balance font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            The Essence of
            <br />
            <em className="italic font-light">Experiential Travel</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base italic text-white/80 md:text-lg" style={{ fontFamily: "Fraunces, serif" }}>
            Explore India like a local, not like a tourist.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/experiences"
              className="border border-white/40 bg-white/5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B192C]"
            >
              Discover Experiences
            </Link>
            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white/90 hover:text-white"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border border-white/60 backdrop-blur-sm">
                <Play className="h-4 w-4 fill-white" />
              </span>
              Watch the Film
            </button>
          </div>
        </motion.div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}

function EyebrowHeading({ eyebrow, title, subtitle, invert = false }: { eyebrow: string; title: React.ReactNode; subtitle?: string; invert?: boolean }) {
  const c = invert ? "text-white" : "text-[#0B192C]";
  const sub = invert ? "text-white/60" : "text-[#0B192C]/60";
  return (
    <div className="text-center">
      <div className={`mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] ${sub}`}>
        <span className={`h-px w-8 ${invert ? "bg-white/30" : "bg-[#0B192C]/30"}`} />
        {eyebrow}
        <span className={`h-px w-8 ${invert ? "bg-white/30" : "bg-[#0B192C]/30"}`} />
      </div>
      <h2 className={`mx-auto max-w-3xl text-balance text-4xl leading-[1.1] tracking-tight md:text-5xl ${c}`} style={{ fontFamily: "Fraunces, serif" }}>
        {title}
      </h2>
      {subtitle && <p className={`mx-auto mt-4 max-w-2xl text-sm leading-relaxed md:text-base ${sub}`}>{subtitle}</p>}
    </div>
  );
}

function PromiseSection() {
  return (
    <section className="bg-[#F9F9FB] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <EyebrowHeading
          eyebrow="The Samvada Promise"
          title={<>Five non-negotiables on <em className="italic font-light">every journey.</em></>}
          subtitle="Every experience we craft carries these five essentials — no exceptions, no shortcuts."
        />

        <div className="mt-16 grid gap-px overflow-hidden bg-[#0B192C]/10 md:grid-cols-5">
          {promises.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col gap-4 bg-[#F9F9FB] p-8 transition-colors hover:bg-white"
            >
              <div className="text-[10px] font-bold tracking-[0.32em] text-[#D96B43]">{p.n}</div>
              <p.icon className="h-6 w-6 text-[#0B192C]" strokeWidth={1.5} />
              <div className="text-lg leading-tight text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>{p.title}</div>
              <p className="text-sm leading-relaxed text-[#0B192C]/60">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperiencesGrid() {
  return (
    <section className="bg-[#07111E] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <EyebrowHeading
          eyebrow="Our Experiences"
          title={<>Seven doorways into <em className="italic font-light">hidden India.</em></>}
          subtitle="Coast, culture, food, forest and coffee — each journey curated with the locals who live it."
          invert
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experiences.slice(0, 6).map((e, i) => (
            <OverlayCard
              key={e.slug}
              image={e.image}
              eyebrow={e.duration}
              title={e.title}
              subtitle={e.tagline}
              to="/experiences"
              delay={(i % 3) * 0.08}
              className={i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-[4/3] lg:aspect-auto" : "aspect-[4/3]"}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/experiences"
            className="inline-flex items-center gap-3 border border-white/30 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.28em] text-white transition-colors hover:bg-white hover:text-[#0B192C]"
          >
            View All Experiences <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function OverlayCard({
  image,
  eyebrow,
  title,
  subtitle,
  to,
  className = "aspect-[4/3]",
  delay = 0,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  to: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay }}
      className={`group relative overflow-hidden ${className}`}
    >
      <Link to={to} className="absolute inset-0">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          {eyebrow && (
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.32em] text-white/80">{eyebrow}</div>
          )}
          <h3 className="text-2xl leading-tight tracking-tight text-white md:text-3xl" style={{ fontFamily: "Fraunces, serif" }}>
            {title}
          </h3>
          {subtitle && <p className="mt-2 max-w-md text-sm text-white/75">{subtitle}</p>}
          <div className="mt-5">
            <span className="inline-flex items-center gap-2 border border-white/40 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors group-hover:bg-white group-hover:text-[#0B192C]">
              View More <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

const differences = [
  ["Tourist Traps", "Local Moments"],
  ["Krishna Temple photo-stop", "Breakfast at a hidden 70-year-old eatery run by three generations"],
  ["Malpe Beach group tour", "Sunrise with the fishermen — real coastal economics"],
  ["St. Mary's Island selfies", "Backstage with a Yakshagana troupe hearing myths behind the masks"],
  ["Kaup Lighthouse checkbox", "Slow chai with a Bhoota Kola storyteller at dusk"],
  ["Standard filter coffee stop", "Founders quietly building coastal Karnataka's small economy"],
];

function DifferentlySection() {
  return (
    <section className="bg-[#F9F9FB] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <EyebrowHeading
          eyebrow="Experience Travel Differently"
          title={<>Instead of sightseeing, <em className="italic font-light">you meet the place.</em></>}
          subtitle="Here's how a typical Udupi itinerary shifts when you travel with Samvada."
        />

        <div className="mx-auto mt-14 grid max-w-5xl overflow-hidden md:grid-cols-2">
          <div className="bg-white p-8 md:p-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#0B192C]/50">Standard Tour</div>
            <div className="mt-2 text-2xl text-[#0B192C]/70" style={{ fontFamily: "Fraunces, serif" }}>Tick. Photo. Next.</div>
            <ul className="mt-8 space-y-5">
              {differences.slice(1).map(([left]) => (
                <li key={left} className="flex items-start gap-3 border-t border-[#0B192C]/10 pt-5 first:border-t-0 first:pt-0">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0B192C]/30" />
                  <span className="text-sm text-[#0B192C]/55 line-through decoration-[#0B192C]/20">{left}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0B192C] p-8 text-white md:p-12">
            <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#D96B43]">The Samvada Way</div>
            <div className="mt-2 text-2xl" style={{ fontFamily: "Fraunces, serif" }}>Meet. Taste. Remember.</div>
            <ul className="mt-8 space-y-5">
              {differences.slice(1).map(([, right], i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
                >
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#D96B43]" />
                  <span className="text-sm leading-relaxed text-white/90">{right}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function UpcomingTrips() {
  const [i, setI] = useState(0);
  const perPage = 3;
  const max = Math.max(0, trips.length - perPage);
  const visible = trips.slice(i, i + perPage);
  return (
    <section className="bg-[#F9F9FB] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-[#0B192C]/60">
              <span className="h-px w-8 bg-[#0B192C]/30" />
              Upcoming Journeys
            </div>
            <h2 className="max-w-2xl text-balance text-4xl leading-[1.1] tracking-tight text-[#0B192C] md:text-5xl" style={{ fontFamily: "Fraunces, serif" }}>
              The next ninety days of <em className="italic font-light">hidden India.</em>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setI(Math.max(0, i - 1))}
              disabled={i === 0}
              className="grid h-11 w-11 place-items-center border border-[#0B192C]/20 text-[#0B192C] transition-colors hover:bg-[#0B192C] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#0B192C]"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setI(Math.min(max, i + 1))}
              disabled={i >= max}
              className="grid h-11 w-11 place-items-center border border-[#0B192C]/20 text-[#0B192C] transition-colors hover:bg-[#0B192C] hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#0B192C]"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <img src={t.image} alt={t.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                <span className="border border-white/40 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
                  {t.category}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/85">{t.spots} spots</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-white/80">
                  <Calendar className="h-3 w-3" /> {t.date}
                </div>
                <h3 className="text-2xl leading-tight text-white" style={{ fontFamily: "Fraunces, serif" }}>{t.title}</h3>
                <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-4">
                  <div className="text-white">
                    <div className="text-[10px] uppercase tracking-[0.28em] text-white/60">From {t.from}</div>
                    <div className="text-xl font-bold" style={{ fontFamily: "Fraunces, serif" }}>{t.price}</div>
                  </div>
                  <Link to="/trips" className="border border-white/40 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B192C]">
                    Reserve
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialGrid() {
  return (
    <section className="bg-[#0B192C]">
      <div className="mx-auto max-w-none px-0">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-8 md:py-24">
          <EyebrowHeading
            eyebrow="Follow The Journey"
            title={<>Real moments from <em className="italic font-light">real travelers.</em></>}
            subtitle="Fresh from Instagram — no filters, no staging. Just India, as it happens."
            invert
          />
        </div>
        <div className="grid grid-cols-2 gap-0 md:grid-cols-4 lg:grid-cols-6">
          {gallery.slice(0, 6).map((g, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden"
            >
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white">#{g.category}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogsSection() {
  return (
    <section className="bg-[#F9F9FB] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-[#0B192C]/60">
              <span className="h-px w-8 bg-[#0B192C]/30" />
              Journal & Stories
            </div>
            <h2 className="max-w-2xl text-balance text-4xl leading-[1.1] tracking-tight text-[#0B192C] md:text-5xl" style={{ fontFamily: "Fraunces, serif" }}>
              Field notes from <em className="italic font-light">the road.</em>
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 border-b border-[#0B192C] pb-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[#0B192C]">
            All Stories <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.slice(0, 3).map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group"
            >
              <Link to="/blog/$id" params={{ id: p.id }} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105" />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#0B192C]/60">
                  <span>{p.category}</span>
                  <span className="h-1 w-1 rounded-full bg-[#0B192C]/30" />
                  <span>{p.readTime}</span>
                </div>
                <h3 className="mt-3 text-2xl leading-tight tracking-tight text-[#0B192C] group-hover:underline underline-offset-4 decoration-[#D96B43]" style={{ fontFamily: "Fraunces, serif" }}>
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#0B192C]/60">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-[#D96B43]">
                  Read More <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="relative overflow-hidden bg-[#07111E] py-24 text-white md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-8">
        <div className="mb-8 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
          <span className="h-px w-8 bg-white/30" />
          Voices
          <span className="h-px w-8 bg-white/30" />
        </div>
        <Quote className="mx-auto h-8 w-8 text-[#D96B43]" strokeWidth={1.5} />
        <motion.blockquote
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-balance text-2xl leading-[1.35] md:text-4xl"
          style={{ fontFamily: "Fraunces, serif" }}
        >
          "{t.quote}"
        </motion.blockquote>
        <div className="mt-8">
          <div className="flex items-center justify-center gap-1">
            {Array.from({ length: t.rating }).map((_, k) => (
              <Star key={k} className="h-4 w-4 fill-[#D96B43] text-[#D96B43]" />
            ))}
          </div>
          <div className="mt-3 text-sm font-bold uppercase tracking-[0.28em] text-white">{t.name}</div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-white/60">{t.role}</div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Testimonial ${k + 1}`}
              className={`h-1.5 transition-all ${k === i ? "w-10 bg-[#D96B43]" : "w-6 bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

