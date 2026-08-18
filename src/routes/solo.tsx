import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Coffee, Users, Footprints, Moon, Camera } from "lucide-react";

export const Route = createFileRoute("/solo")({
  head: () => ({
    meta: [
      { title: "Solo Travel — Samvada Journeys" },
      { name: "description", content: "Solo travel across coastal Karnataka. Travel alone, never feel alone. Local hosts, small groups, and genuine India — curated for the independent traveller." },
      { property: "og:title", content: "Solo Travel — Samvada Journeys" },
      { property: "og:description", content: "Solo travel across coastal Karnataka. Local hosts, small groups, and genuine India." },
      { property: "og:url", content: "https://www.samvadajourneys.in/solo" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/solo" }],
  }),
  component: SoloPage,
});

const OCEAN = "#0B192C";
const C = "#D96B43";

const experiences = [
  {
    icon: Compass,
    label: "Solo Coastal Walk",
    title: "The coast at your own pace. No itinerary, no group.",
    body: "A full day on the Malpe and Kaup coastline with a local guide who knows every fishing family, every hidden cove, and every eatery that doesn't have a sign outside. You set the pace. The guide opens the doors.",
    cta: "Plan This Walk",
  },
  {
    icon: Users,
    label: "Join a Small Group",
    title: "Travel alone. Share the experience.",
    body: "We match solo travellers to our small-group departures where the chemistry is right. Groups of six to ten people, curated by interest and travel style. You arrive alone. You leave with people you'll stay in touch with.",
    cta: "See Group Departures",
  },
  {
    icon: Coffee,
    label: "Local Host Introductions",
    title: "The best conversations happen over chai.",
    body: "We introduce solo travellers to local entrepreneurs, fishermen, coffee growers, and cultural practitioners. Not as a tour. As a genuine introduction. You sit, you talk, you listen. These are the conversations that make solo travel worth it.",
    cta: "Meet a Local Host",
  },
  {
    icon: Footprints,
    label: "Solo Waterfall Trek",
    title: "Into the Ghats. Just you and the forest.",
    body: "A full-day trek to an unmarked waterfall in the Western Ghats with an experienced naturalist. The trail is not on any tourist map. The pool at the end is almost always empty. Village lunch on the way back.",
    cta: "Book the Trek",
  },
  {
    icon: Moon,
    label: "Village Overnight",
    title: "One night in a village. A different kind of alone.",
    body: "A night in a village homestay where the family treats you as a guest, not a customer. Wood-fire dinner, a veranda conversation with the elders, and a morning that begins before sunrise. Solo travel at its most honest.",
    cta: "Book a Homestay",
  },
  {
    icon: Camera,
    label: "Solo Photography Journey",
    title: "The light here does things cameras struggle to capture.",
    body: "A two-day photography-focused journey across the coast and lower Ghats. Timed for the best light at the best locations — the harbour at 5 AM, the paddy fields at golden hour, the temple corridors at dusk. With a guide who knows where to stand.",
    cta: "Plan the Journey",
  },
];

function SoloPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
            <span className="h-px w-8 bg-white/30" />
            Solo Travel
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h1
            className="mx-auto max-w-4xl text-balance text-5xl leading-[1.05] tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Travel alone.{" "}
            <em className="italic font-light">Never feel alone.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/65">
            Solo travel in India is extraordinary when you have the right introduction. We connect solo travellers with local hosts, small groups, and experiences that are better alone than in a crowd.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {experiences.map((e) => (
              <a
                key={e.label}
                href={`#${e.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80 transition-colors hover:bg-white hover:text-[#0B192C]"
              >
                {e.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience sections */}
      {experiences.map((e, i) => {
        const id = e.label.toLowerCase().replace(/[^a-z]/g, "-");
        return (
          <section
            key={e.label}
            id={id}
            className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-[#F9F9FB]" : "bg-white"}`}
          >
            <div className="mx-auto max-w-5xl px-6 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid gap-10 md:grid-cols-[auto_1fr] items-start"
              >
                <div
                  className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl"
                  style={{ background: `color-mix(in oklab, ${C} 12%, transparent)`, color: C }}
                >
                  <e.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.32em]" style={{ color: C }}>
                    {e.label}
                  </div>
                  <h2
                    className="mt-2 text-3xl leading-tight tracking-tight text-[#0B192C] md:text-4xl"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    {e.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#0B192C]/70 max-w-2xl">
                    {e.body}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-3 border border-[#0B192C]/30 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B192C] transition-colors hover:bg-[#0B192C] hover:text-white"
                  >
                    {e.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-24 md:py-32" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
            <span className="h-px w-8 bg-white/30" />
            Start Your Solo Journey
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h2
            className="text-balance text-4xl leading-[1.1] tracking-tight text-white md:text-5xl"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Tell us what you're looking for.{" "}
            <em className="italic font-light">We'll find it.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/65">
            Dates, interests, pace, budget — share what matters and a Samvada host will reply personally within 12 hours with a plan built around you.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="border border-white/40 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B192C]"
            >
              Send an Enquiry
            </Link>
            <Link
              to="/custom-trips"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white/70 hover:text-white"
            >
              View All Trip Types <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
