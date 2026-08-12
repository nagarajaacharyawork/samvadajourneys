import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AlertTriangle, Waves, Mountain, Droplets, CloudRain, Sun, Phone } from "lucide-react";

export const Route = createFileRoute("/travel-safety")({
  head: () => ({
    meta: [
      { title: "Travel Safety & Preparedness — Samvada Journeys" },
      { name: "description", content: "Essential safety information for beaches, treks, waterfalls, weather conditions and outdoor activities in coastal Karnataka and the Western Ghats." },
      { property: "og:title", content: "Travel Safety & Preparedness — Samvada Journeys" },
      { property: "og:description", content: "Essential safety information for beaches, treks, waterfalls, weather and outdoor activities in coastal Karnataka." },
      { property: "og:url", content: "https://www.samvadajourneys.in/travel-safety" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/travel-safety" }],
  }),
  component: TravelSafetyPage,
});

const OCEAN = "#0B192C";
const C = "#D96B43";

const sections = [
  {
    icon: Waves,
    id: "beaches",
    label: "Beach Safety",
    title: "The sea here is powerful. Respect it.",
    points: [
      "Most beaches on the Karnataka coast have strong undertows and rip currents. Do not swim unless there is a designated safe zone with lifeguards present.",
      "Malpe Beach has a designated swimming area. Always ask locals or your Samvada host before entering the water at any other beach.",
      "Never swim alone, at night, or after consuming alcohol.",
      "Rip currents: if caught in one, do not swim against it. Swim parallel to the shore until you are out of the current, then swim back to the beach.",
      "Monsoon season (June to September): the sea is extremely rough. Boat trips to St. Mary's Island and other offshore locations are suspended. Do not attempt to swim.",
      "Jellyfish are common from March to May. If stung, rinse with seawater (not fresh water), remove tentacles carefully, and seek medical attention if symptoms are severe.",
    ],
  },
  {
    icon: Mountain,
    id: "treks",
    label: "Trekking Safety",
    title: "The forest rewards those who move carefully.",
    points: [
      "Always trek with a local guide who knows the terrain. Do not attempt unmarked trails alone.",
      "Start early — before 6 AM for full-day treks. The forest is most navigable in the cool morning hours and you avoid the midday heat.",
      "Wear full-length trousers and tuck them into your socks from June to November to protect against leeches.",
      "Carry at least 2 litres of water per person for a full-day trek. Dehydration is the most common cause of trek-related incidents.",
      "Wear sturdy, closed-toe shoes with grip. Sandals and flip-flops are not appropriate for forest trails.",
      "Wildlife: the Western Ghats are home to elephants, leopards, and king cobras. Make noise as you walk, stay on the trail, and follow your guide's instructions immediately if they signal you to stop.",
      "If you encounter an elephant: do not run. Back away slowly and quietly. Your guide will direct you.",
      "Carry a basic first aid kit: antiseptic, bandages, antihistamine, and any personal medication.",
    ],
  },
  {
    icon: Droplets,
    id: "waterfalls",
    label: "Waterfall Safety",
    title: "Beautiful and unpredictable. Never underestimate them.",
    points: [
      "Never stand directly under a waterfall or on wet rocks near the base. Rocks are extremely slippery and water flow can increase suddenly.",
      "Do not swim in waterfall pools unless your guide has confirmed it is safe. Hidden rocks, strong currents, and sudden depth changes are common.",
      "During and after monsoon (June to October), water levels rise rapidly. A waterfall that was safe in the morning can become dangerous by afternoon after upstream rain.",
      "Keep children within arm's reach at all times near waterfalls.",
      "Do not attempt to climb the rocks beside a waterfall. The combination of wet rock and mist makes falls extremely likely.",
      "If you hear a sudden increase in water noise or see the water colour change to brown, move away from the waterfall immediately — this indicates a flash flood upstream.",
    ],
  },
  {
    icon: CloudRain,
    id: "weather",
    label: "Weather & Monsoon",
    title: "The monsoon is magnificent. It is also serious.",
    points: [
      "The Karnataka coast receives 3,000 to 7,000 mm of rainfall between June and September. Roads can flood, rivers rise quickly, and landslides occur in the Ghats.",
      "Check weather forecasts before any outdoor activity. The India Meteorological Department (IMD) issues daily coastal and hill district warnings.",
      "During a red or orange weather alert, do not travel to coastal or hill areas. Follow local authority instructions.",
      "Lightning is common during monsoon. If caught outdoors, avoid open ground, tall trees, and water. Seek shelter in a solid building.",
      "River crossings that are safe in winter can be impassable in monsoon. Never attempt to cross a flooded road or river on foot or by vehicle.",
      "The Western Ghats generate their own weather. Conditions can change from clear to heavy rain in under 30 minutes. Always carry a rain jacket.",
    ],
  },
  {
    icon: Sun,
    id: "outdoor",
    label: "General Outdoor Safety",
    title: "Prepared travelers have better journeys.",
    points: [
      "Sun: the coastal sun is intense year-round. Use SPF 50+ sunscreen, wear a hat, and stay hydrated. Heat exhaustion can develop quickly.",
      "Insects: carry DEET-based repellent. Mosquitoes are active at dawn and dusk. Malaria and dengue are present in some areas — consult your doctor about prophylaxis before travel.",
      "Food and water: drink only bottled or filtered water. Avoid raw salads and unpeeled fruit from street vendors if you have a sensitive stomach.",
      "Medical: carry a copy of any prescriptions and a list of your allergies. The nearest hospitals to Udupi are Manipal Hospital (Manipal) and KMC Hospital (Udupi town).",
      "Mobile coverage: signal is patchy in forest and remote coastal areas. Download offline maps before you go. Share your itinerary with someone who is not travelling with you.",
      "Emergency numbers: Police 100, Ambulance 108, Coast Guard 1554, Disaster Management 1077.",
    ],
  },
];

function TravelSafetyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{ background: "var(--brand-sand)" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/70">
              <AlertTriangle className="h-3.5 w-3.5" style={{ color: C }} />
              Travel Safety & Preparedness
            </div>
            <h1
              className="mt-5 max-w-3xl text-balance text-5xl font-black leading-[1.05] md:text-6xl"
              style={{ fontFamily: "Fraunces, serif" }}
            >
              Know before you go.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Coastal Karnataka and the Western Ghats are extraordinary places. They are also wild, powerful, and occasionally unpredictable. This page covers the safety information every traveler should read before heading out.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-foreground/15 bg-foreground/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/70 transition-colors hover:bg-foreground/10"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safety sections */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 md:py-28 ${i % 2 === 0 ? "bg-white" : "bg-[#F9F9FB]"}`}
        >
          <div className="mx-auto max-w-5xl px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl"
                  style={{ background: `color-mix(in oklab, ${C} 12%, transparent)`, color: C }}
                >
                  <s.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.32em]" style={{ color: C }}>
                    {s.label}
                  </div>
                  <h2
                    className="text-2xl font-black text-[#0B192C] md:text-3xl"
                    style={{ fontFamily: "Fraunces, serif" }}
                  >
                    {s.title}
                  </h2>
                </div>
              </div>
              <ul className="space-y-4 mt-8">
                {s.points.map((point, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.04 }}
                    className="flex items-start gap-4 rounded-xl border border-[#0B192C]/8 bg-white p-4"
                  >
                    <span
                      className="mt-1 h-2 w-2 shrink-0 rounded-full"
                      style={{ background: C }}
                    />
                    <p className="text-sm leading-relaxed text-[#0B192C]/75">{point}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Emergency contacts + CTA */}
      <section className="py-20 md:py-28" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-start">
            <div>
              <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
                <span className="h-px w-8 bg-white/30" />
                Emergency Numbers
              </div>
              <h2
                className="text-3xl font-black text-white"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Save these before you travel.
              </h2>
              <div className="mt-8 space-y-3">
                {[
                  ["Police", "100"],
                  ["Ambulance", "108"],
                  ["Coast Guard", "1554"],
                  ["Disaster Management", "1077"],
                  ["Samvada Emergency Line", "+91 98450 12345"],
                ].map(([label, number]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                  >
                    <span className="text-sm font-semibold text-white/80">{label}</span>
                    <a
                      href={`tel:${number.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-sm font-black text-white hover:underline"
                    >
                      <Phone className="h-3.5 w-3.5" style={{ color: C }} />
                      {number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.32em]" style={{ color: C }}>
                Travel With Confidence
              </div>
              <h3
                className="mt-3 text-2xl font-black text-white"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                Every Samvada journey includes on-ground support.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                All our experiences are led by vetted local guides with first aid training. We monitor weather conditions, maintain relationships with local emergency services, and provide a direct contact number for every trip.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-3 border border-white/30 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-[#0B192C]"
              >
                Plan a Safe Journey
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
