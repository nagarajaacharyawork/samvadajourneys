import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sunrise, Waves, Utensils, TreePine, Moon, Anchor } from "lucide-react";

export const Route = createFileRoute("/couple")({
  head: () => ({
    meta: [
      { title: "Couple Trips — Samvada Journeys" },
      { name: "description", content: "Couple travel across coastal Karnataka. Intimate, unhurried, and genuinely romantic — sunrise at a lighthouse, private backwater boats, and dinners cooked by families who have been hosting guests for generations." },
      { property: "og:title", content: "Couple Trips — Samvada Journeys" },
      { property: "og:description", content: "Intimate couple travel across coastal Karnataka. Slow, private, and genuinely romantic." },
      { property: "og:url", content: "https://www.samvadajourneys.in/couple" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/couple" }],
  }),
  component: CouplePage,
});

const OCEAN = "#0B192C";
const C = "#D96B43";

const experiences = [
  {
    icon: Sunrise,
    label: "Lighthouse Sunrise",
    title: "The 1901 lighthouse. Golden hour. Just the two of you.",
    body: "An early morning at the Kaup lighthouse with a local guide who knows the history of every ship that has passed this shore. The view from the top at first light is one of the finest on the coast. No crowds. No noise. Just the sea.",
    cta: "Book This Morning",
  },
  {
    icon: Anchor,
    label: "Private Backwater Boat",
    title: "A private boat through the backwaters at dusk.",
    body: "A two-hour private boat through the Udupi backwaters as the light changes. The boatman knows every bend, every bird, every family that lives on the bank. A slow, quiet, entirely private experience that no resort can replicate.",
    cta: "Book the Boat",
  },
  {
    icon: Utensils,
    label: "Private Home Dinner",
    title: "Dinner cooked for two by a family who has been doing this for generations.",
    body: "A private dinner in a village home. The family cooks a full coastal meal — fish curry, rice, pickles, and a dessert that exists nowhere in writing. You eat on the veranda. The conversation goes wherever it goes.",
    cta: "Book a Private Dinner",
  },
  {
    icon: TreePine,
    label: "Coffee Estate Stay",
    title: "Two nights on a working estate. The world slows down.",
    body: "A private stay on a Chikmagalur coffee estate. Dawn walks through the plantation, meals cooked by the estate family, evenings on the veranda with the grower. The particular silence of a place that is very far from the city.",
    cta: "Book the Estate",
  },
  {
    icon: Waves,
    label: "Coastal Weekender",
    title: "Two days. The whole coast. No itinerary.",
    body: "A private two-day journey along the Karnataka coast — fishing villages, hidden beaches, a boat to St. Mary's Island, a sunset at Delta Point. Designed around your pace, not a schedule. A driver-guide who knows when to stop and when to keep going.",
    cta: "Plan the Weekender",
  },
  {
    icon: Moon,
    label: "Village Overnight",
    title: "One night in a village. Entirely off the tourist map.",
    body: "A night in a village homestay where the family cooks on a wood fire and the evening ends on the veranda under the stars. The morning begins before sunrise with the sounds of a village waking up. Intimate, quiet, and unlike anything a hotel can offer.",
    cta: "Book a Homestay",
  },
];

function CouplePage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
            <span className="h-px w-8 bg-white/30" />
            Couple Trips
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h1
            className="mx-auto max-w-4xl text-balance text-5xl leading-[1.05] tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Slow travel{" "}
            <em className="italic font-light">for two.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/65">
            Intimate, unhurried, and genuinely romantic. We design couple experiences around the moments that matter — not the sights that are supposed to.
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
            Plan Your Trip Together
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h2
            className="text-balance text-4xl leading-[1.1] tracking-tight text-white md:text-5xl"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Tell us what you're dreaming of.{" "}
            <em className="italic font-light">We'll make it real.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/65">
            Dates, interests, pace, budget — share the details and a Samvada host will reply personally within 12 hours with a plan built for the two of you.
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
