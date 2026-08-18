import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sunrise, Utensils, TreePine, Waves, Camera, Home } from "lucide-react";

export const Route = createFileRoute("/family")({
  head: () => ({
    meta: [
      { title: "Family Trips — Samvada Journeys" },
      { name: "description", content: "Family travel across coastal Karnataka. Multi-generational journeys with village kitchens, boat rides, wildlife, and stories told by the people who live them." },
      { property: "og:title", content: "Family Trips — Samvada Journeys" },
      { property: "og:description", content: "Multi-generational family travel across coastal Karnataka and the Western Ghats." },
      { property: "og:url", content: "https://www.samvadajourneys.in/family" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/family" }],
  }),
  component: FamilyPage,
});

const OCEAN = "#0B192C";
const C = "#D96B43";

const experiences = [
  {
    icon: Waves,
    label: "Coastal Family Day",
    title: "The coast through every generation's eyes.",
    body: "A day on the Malpe coast built for all ages. Sunrise with the fishermen for the early risers, a boat ride to St. Mary's Island for the adventurous, and a slow seafood lunch on the shore for everyone. No rushing, no ticking boxes.",
    cta: "Plan This Experience",
  },
  {
    icon: Home,
    label: "Village Homestay",
    title: "Live at the pace of a family that isn't yours.",
    body: "Two nights in a working village. Children help collect eggs and water the garden. Grandparents sit on the veranda with the elders. Parents cook with the family. Everyone eats together. It is the kind of travel that changes how a family sees itself.",
    cta: "Book a Homestay",
  },
  {
    icon: Utensils,
    label: "Family Kitchen Session",
    title: "Cook together. Eat together. Remember together.",
    body: "A morning in a village kitchen where three generations of a family teach yours how to make Moode Idli, Kotte Kadubu, and a proper coastal fish curry. Children are given their own tasks. The meal at the end belongs to everyone.",
    cta: "Book a Kitchen Session",
  },
  {
    icon: TreePine,
    label: "Western Ghats Family Trek",
    title: "A forest walk that every age can do.",
    body: "A gentle trail through the lower Ghats with a naturalist who knows how to hold the attention of a seven-year-old and a seventy-year-old at the same time. Bird calls, medicinal plants, animal tracks, and a waterfall at the end.",
    cta: "Plan the Trek",
  },
  {
    icon: Camera,
    label: "Heritage Discovery",
    title: "History told as story, not lecture.",
    body: "A guided walk through the temples and old lanes of Udupi with a storyteller who makes seven hundred years of history feel immediate. Children ask the best questions. The guide has the best answers.",
    cta: "Book a Heritage Walk",
  },
  {
    icon: Sunrise,
    label: "Sunrise Boat Ride",
    title: "The harbour at dawn. No crowds. Just the sea.",
    body: "A private boat from Malpe harbour before the sun is fully up. Watch the fishing fleet return, the auction begin, and the coast come alive. A two-hour experience that no child forgets and no adult expects to love as much as they do.",
    cta: "Book the Boat",
  },
];

function FamilyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
            <span className="h-px w-8 bg-white/30" />
            Family Trips
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h1
            className="mx-auto max-w-4xl text-balance text-5xl leading-[1.05] tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Memories the whole family{" "}
            <em className="italic font-light">keeps forever.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/65">
            Multi-generational travel done right. We balance the energy of children with the pace grandparents enjoy — weaving in experiences that resonate across every age.
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
            Plan Your Family Trip
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h2
            className="text-balance text-4xl leading-[1.1] tracking-tight text-white md:text-5xl"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Tell us who's coming.{" "}
            <em className="italic font-light">We'll build around them.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/65">
            Ages, interests, pace, budget — share the details and a Samvada host will reply personally within 12 hours with a plan built for your family.
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
