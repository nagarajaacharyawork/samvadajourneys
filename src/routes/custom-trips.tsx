import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Heart, Users, User, Star, Building2 } from "lucide-react";

export const Route = createFileRoute("/custom-trips")({
  head: () => ({
    meta: [
      { title: "Custom & Group Trips — Samvada Journeys" },
      { name: "description", content: "Custom trips, family holidays, couple getaways, group tours, solo travel, and corporate retreats across coastal Karnataka. Tell us what you need — we'll build it." },
      { property: "og:title", content: "Custom & Group Trips — Samvada Journeys" },
      { property: "og:description", content: "Custom trips, family holidays, couple getaways, group tours, solo travel, and corporate retreats across coastal Karnataka." },
      { property: "og:url", content: "https://www.samvadajourneys.in/custom-trips" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/custom-trips" }],
  }),
  component: CustomTripsPage,
});

const OCEAN = "#0B192C";
const C = "#D96B43";

const tripTypes = [
  {
    icon: Star,
    label: "Custom Trips",
    title: "Built entirely around you.",
    body: "Tell us your dates, your interests, your pace, and your budget. We design the itinerary from scratch — no templates, no off-the-shelf packages. Every detail is curated for your specific group.",
    cta: "Plan a Custom Trip",
  },
  {
    icon: Users,
    label: "Family Trips",
    title: "Memories the whole family keeps.",
    body: "Multi-generational travel done right. We balance the energy of children with the pace grandparents enjoy, weaving in experiences that resonate across every age — village kitchens, boat rides, wildlife, and stories told by the people who live them.",
    cta: "Plan a Family Trip",
  },
  {
    icon: Heart,
    label: "Couple Trips",
    title: "Slow travel for two.",
    body: "Sunrise at a lighthouse. A private boat through the backwaters. Dinner cooked by a family who has been feeding guests for three generations. We design couple experiences that are intimate, unhurried, and genuinely romantic.",
    cta: "Plan a Couple Trip",
  },
  {
    icon: Users,
    label: "Group Tours",
    title: "Small groups. Big experiences.",
    body: "Our group tours are capped at 12 people. Small enough to go places a bus cannot, large enough to share the experience. Fixed departures with curated itineraries — or we can build a private group tour for your friends.",
    cta: "Join a Group Tour",
  },
  {
    icon: User,
    label: "Solo Travel",
    title: "Travel alone. Never feel alone.",
    body: "Solo travel in India is extraordinary when you have the right introduction. We connect solo travelers with local hosts, join them to small groups where the chemistry is right, and ensure every solo journey has a safety net and a human face.",
    cta: "Plan a Solo Journey",
  },
  {
    icon: Building2,
    label: "Corporate & Team Trips",
    title: "The best team-building is not a workshop.",
    body: "A morning with a fisherman who has run his own business for thirty years. A conversation with a coffee grower about risk and resilience. We design corporate retreats that change how your team thinks — not just how they feel for a weekend.",
    cta: "Plan a Corporate Retreat",
  },
];

function CustomTripsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
            <span className="h-px w-8 bg-white/30" />
            Custom & Group Trips
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h1
            className="mx-auto max-w-4xl text-balance text-5xl leading-[1.05] tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Every journey is different.{" "}
            <em className="italic font-light">Yours should be too.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/65">
            Whether you're travelling as a couple, a family, a group of friends, or a corporate team — we build the experience around you, not the other way around.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {tripTypes.map((t) => (
              <a
                key={t.label}
                href={`#${t.label.toLowerCase().replace(/[^a-z]/g, "-")}`}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80 transition-colors hover:bg-white hover:text-[#0B192C]"
              >
                {t.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trip type sections */}
      {tripTypes.map((t, i) => {
        const isEven = i % 2 === 0;
        const id = t.label.toLowerCase().replace(/[^a-z]/g, "-");
        return (
          <section
            key={t.label}
            id={id}
            className={`py-20 md:py-28 ${isEven ? "bg-[#F9F9FB]" : "bg-white"}`}
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
                  <t.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.32em]" style={{ color: C }}>
                    {t.label}
                  </div>
                  <h2
                    className="mt-2 text-3xl leading-tight tracking-tight text-[#0B192C] md:text-4xl"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    {t.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#0B192C]/70 max-w-2xl">
                    {t.body}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-3 border border-[#0B192C]/30 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B192C] transition-colors hover:bg-[#0B192C] hover:text-white"
                  >
                    {t.cta} <ArrowRight className="h-4 w-4" />
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
            Start Planning
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
            Fill in the enquiry form and a Samvada host will reply personally within 12 hours with ideas, availability, and a rough plan.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="border border-white/40 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B192C]"
            >
              Send an Enquiry
            </Link>
            <Link
              to="/trips"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white/70 hover:text-white"
            >
              View Upcoming Trips <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
