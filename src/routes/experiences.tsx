import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";
import expCoastal from "@/assets/imgi_13_675ffeed8edd871379a0092d_DJI_0519-Enhanced-NR copy.webp";
import expHeritage from "@/assets/imgi_23_677215f313af8fcb3bd47c1b_Varanga Traditional Kambala 2024.webp";
import expFood from "@/assets/imgi_22_677216968747c3a89492ff89_Moode Idli  kotte Kadubu.webp";
import expWaterfall from "@/assets/exp-waterfall.jpg";
import expSunrise from "@/assets/imgi_4_67cd949f03e3822d94252b8b_spri.webp";
import expCoffee from "@/assets/Coffee.webp";
import expCorporate from "@/assets/gallery-people.jpg";
import expPeople from "@/assets/imgi_20_67737f871ccf77fed3275d35_469479383_17892428070108648_6886044078070230829_n.webp";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Samvada Journeys" },
      { name: "description", content: "Six ways to experience coastal Karnataka. Food trails, heritage walks, waterfall treks, coffee estates, sunrise moments, and corporate retreats." },
      { property: "og:title", content: "Experiences — Samvada Journeys" },
      { property: "og:description", content: "Food trails, heritage walks, waterfall treks, coffee estates, sunrise moments and corporate retreats across coastal Karnataka." },
      { property: "og:url", content: "https://www.samvadajourneys.in/experiences" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/experiences" }],
  }),
  component: ExperiencesPage,
});

const C = "#D96B43";
const OCEAN = "#0B192C";

const sections = [
  {
    id: "food-trails",
    label: "Food Trails",
    title: "Eat where the locals eat. Cook what they cook.",
    intro: "The food of coastal Karnataka is not a cuisine you find in restaurants. It lives in home kitchens, in the hands of women who learned to cook from their mothers, in the wood-fired stoves of eateries that have been serving the same breakfast for seventy years. Our food trails take you to these places, not as a tourist, but as a guest.",
    image: expFood,
    imageAlt: "Moode Idli and Kotte Kadubu",
    cards: [
      { title: "The 70-Year Eatery Morning", duration: "3 Hours", group: "2 to 8", desc: "Breakfast at a family-run eatery that has not changed its menu since it opened. Moode Idli, Kotte Kadubu, and filter kaapi made the way it was always made." },
      { title: "Home Kitchen Session", duration: "Half Day", group: "2 to 6", desc: "A morning in a village kitchen learning to make the dishes that define the coast. Stone grinder, clay pot, wood fire. The recipe is the easy part." },
      { title: "Banana Leaf Coastal Lunch", duration: "2 Hours", group: "4 to 12", desc: "A full coastal meal served on a banana leaf in a home that has been feeding guests for generations. Fish curry, rice, pickles, and the particular hospitality of a Tulu household." },
      { title: "Fish Market to Table", duration: "1 Day", group: "2 to 8", desc: "Start at the Malpe fish auction at dawn. Choose your fish. Watch it cleaned and cooked by the family who caught it. Eat it for lunch." },
    ],
  },
  {
    id: "heritage-walks",
    label: "Heritage Walks",
    title: "The history here is not in museums. It is in the streets.",
    intro: "The temples, the old towns, and the sacred sites of coastal Karnataka are not relics. They are living places, still active, still meaningful, still shaping the daily life of the communities around them. Our heritage walks take you into this living history with guides who are not tour operators but scholars, priests, and community members.",
    image: expHeritage,
    imageAlt: "Varanga Traditional Kambala",
    cards: [
      { title: "Krishna Matha Deep Dive", duration: "3 Hours", group: "2 to 10", desc: "A guided walk through the Krishna Matha complex in Udupi with a scholar who has spent decades studying its history and theology. The architecture, the ritual, and the seven-hundred-year story behind it all." },
      { title: "Old Town Udupi Walk", duration: "2 Hours", group: "2 to 12", desc: "A slow walk through the lanes of old Udupi: the eateries, the workshops, the shrines, and the families who have lived here for generations. The city that the guidebooks don't show you." },
      { title: "Jain Heritage Circuit", duration: "1 Day", group: "2 to 10", desc: "A full day through the Jain heritage of the coast: Moodabidri's Thousand-Pillar Basadi, the temples of Karkala, and the extraordinary Gomateshwara statue. With an architectural historian." },
      { title: "Yakshagana Backstage", duration: "3 Hours", group: "2 to 8", desc: "Meet the artists of a Yakshagana troupe before the performance. Watch the makeup being applied, the costumes assembled, and the characters come to life. Then watch the show." },
    ],
  },
  {
    id: "waterfall-treks",
    label: "Waterfall Treks",
    title: "The best waterfalls are the ones nobody else knows about.",
    intro: "The Western Ghats behind the coast are threaded with rivers that tumble off the escarpment in falls that range from the famous to the entirely unknown. Our waterfall treks take you to both, but we spend most of our time on the ones that don't appear on any tourist map, the ones that the local guides have been visiting since they were children.",
    image: expWaterfall,
    imageAlt: "Western Ghats waterfall",
    cards: [
      { title: "Hidden Falls Trek", duration: "1 Day", group: "4 to 12", desc: "A full-day trek to a waterfall that is not on any tourist map. Through forest, over rocks, and into a natural pool that feels like it belongs to you alone. Village lunch on the way back." },
      { title: "Monsoon Waterfall Experience", duration: "1 Day", group: "4 to 10", desc: "The Ghats in monsoon are a different world. The falls are at their most dramatic, the forest is intensely green, and the mist is constant. A guided walk through this extraordinary landscape." },
      { title: "River Valley Walk", duration: "Half Day", group: "2 to 10", desc: "A walk along one of the rivers that flows from the Ghats to the sea, following it through forest and farmland to a series of smaller falls and natural pools." },
      { title: "Photography Trek", duration: "1 Day", group: "2 to 6", desc: "A trek designed for photographers, timed to catch the best light at the best locations. With a guide who knows where the mist settles and when the light comes through the canopy." },
    ],
  },
  {
    id: "coffee-estates",
    label: "Coffee Estates",
    title: "The story of your cup begins here.",
    intro: "The hills of Chikmagalur are where coffee was first grown in India, and the estates here are still among the finest in the country. A Samvada coffee estate experience is not a tasting session. It is a full immersion in the life of a working plantation, from the nursery to the processing shed, with the grower who has spent a lifetime understanding this crop.",
    image: expCoffee,
    imageAlt: "Kodachadri Hills coffee estate",
    cards: [
      { title: "Estate Walk with the Grower", duration: "Half Day", group: "2 to 8", desc: "A morning on a working estate with the fourth-generation grower who tends it. From the nursery to the shade trees to the processing shed. The economics, the ecology, and the passion behind every cup." },
      { title: "Harvest Experience", duration: "1 Day", group: "2 to 8", desc: "During the harvest season (November to January), join the pickers in the field. Understand the skill involved in selecting only the ripe cherries. Help with the processing. Drink the result." },
      { title: "Estate Stay", duration: "2 to 3 Days", group: "2 to 6", desc: "Two or three nights on a working estate, living at the pace of the plantation. Dawn walks, estate meals, evenings on the veranda with the grower's family, and the particular silence of a place that is very far from the city." },
      { title: "Bean to Cup Workshop", duration: "3 Hours", group: "2 to 10", desc: "A hands-on session covering the full journey from cherry to cup: pulping, fermenting, drying, roasting, and brewing. You leave with a bag of coffee you helped make." },
    ],
  },
  {
    id: "sunrise-sunset",
    label: "Sunrise & Sunset",
    title: "The light here does things that photographs can't capture.",
    intro: "The coast of Karnataka faces west, which means the sunsets are extraordinary. The sunrises, over the Ghats, over the paddy fields, over the fishing harbour, are something else entirely. Our sunrise and sunset experiences are built around the moments when the light transforms the landscape, and the people who are already there when it happens.",
    image: expSunrise,
    imageAlt: "Sunrise on the coast",
    cards: [
      { title: "Malpe Harbour Sunrise", duration: "2 Hours", group: "2 to 10", desc: "At the harbour before dawn, when the boats are coming in and the auction is beginning. The light, the activity, and the smell of the sea at 5 AM is unlike anything you will experience at a tourist beach." },
      { title: "Kaup Lighthouse Sunset", duration: "2 Hours", group: "2 to 12", desc: "An evening at the 1901 lighthouse with a local guide who knows the history of every ship that has passed this shore. The view from the top at golden hour is one of the finest on the coast." },
      { title: "Delta Point Dusk", duration: "2 Hours", group: "2 to 8", desc: "Where the Sauparnika river meets the sea, the sunset is extraordinary and almost entirely crowd-free. A quiet evening at one of the coast's most beautiful confluences." },
      { title: "Ghats Sunrise Trek", duration: "Half Day", group: "4 to 10", desc: "A pre-dawn start and a walk to a viewpoint in the Western Ghats that catches the first light over the forest. The moment when the mist lifts and the hills reveal themselves." },
    ],
  },
  {
    id: "corporate-retreats",
    label: "Corporate Retreats",
    title: "The best team-building happens when you stop trying to build a team.",
    intro: "The most effective corporate retreats we have run have one thing in common: they put people in situations that are genuinely new. Not a workshop in a hotel conference room with a facilitator and a whiteboard. A morning with a fisherman who has been running his own business for thirty years. A conversation with a coffee grower about risk, resilience, and the long game. These are the experiences that change how people think.",
    image: expCorporate,
    imageAlt: "Corporate retreat experience",
    cards: [
      { title: "Founder Fireside", duration: "Half Day", group: "8 to 30", desc: "A conversation with a local entrepreneur, a fisherman, a coffee grower, a cultural performer, who has built something real in a place that doesn't make it easy. The kind of perspective that no business school provides." },
      { title: "Coastal Team Challenge", duration: "1 Day", group: "10 to 40", desc: "A day of outdoor challenges on the coast, designed not to test physical fitness but to create the conditions for genuine collaboration, communication, and trust." },
      { title: "Village Immersion Day", duration: "1 Day", group: "8 to 25", desc: "A full day in a working village, participating in the life of the community. Farming, cooking, craft, and conversation. The kind of experience that resets your perspective on what matters." },
      { title: "Custom Retreat", duration: "2 to 5 Days", group: "10 to 60", desc: "A fully customised retreat built around your team's specific needs and objectives. We design the experiences, arrange the logistics, and ensure that every moment serves the purpose you came for." },
    ],
  },
];

function SectionLabel({ text, invert = false, center = false }: { text: string; invert?: boolean; center?: boolean }) {
  const col = invert ? "text-white/60" : "text-[#0B192C]/60";
  const line = invert ? "bg-white/30" : "bg-[#0B192C]/30";
  return (
    <div className={`mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] ${col} ${center ? "justify-center" : ""}`}>
      <span className={`h-px w-8 ${line}`} />
      {text}
      <span className={`h-px w-8 ${line}`} />
    </div>
  );
}

function ExperiencesPage() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <SectionLabel text="Our Experiences" invert center />
          <h1 className="mx-auto max-w-4xl text-balance text-5xl leading-[1.05] tracking-tight text-white md:text-6xl" style={{ fontFamily: "Fraunces, serif" }}>
            Six ways to experience <em className="italic font-light">real India.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/65">
            Every experience is designed hand-in-hand with the locals who live it. No scripts. No filler. Just the real thing.
          </p>
          {/* Nav anchors */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80 transition-colors hover:bg-white hover:text-[#0B192C]">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      {sections.map((s, si) => {
        const isEven = si % 2 === 0;
        const bg = isEven ? "bg-[#F9F9FB]" : "bg-white";
        return (
          <section key={s.id} id={s.id} className={`${bg} py-24 md:py-32`}>
            <div className="mx-auto max-w-7xl px-6 md:px-8">
              {/* Section header with image */}
              <div className={`grid gap-12 md:grid-cols-2 items-center mb-16 ${si % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <motion.div initial={{ opacity: 0, x: si % 2 === 0 ? -24 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                  <SectionLabel text={s.label} />
                  <h2 className="text-balance text-3xl leading-[1.1] tracking-tight text-[#0B192C] md:text-4xl" style={{ fontFamily: "Fraunces, serif" }}>
                    {s.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-[#0B192C]/70">{s.intro}</p>
                  <button
                    onClick={() => navigate({ to: "/contact" })}
                    className="mt-8 inline-flex items-center gap-3 border border-[#0B192C]/30 px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B192C] transition-colors hover:bg-[#0B192C] hover:text-white"
                  >
                    Enquire Now <ArrowRight className="h-4 w-4" />
                  </button>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="aspect-[4/3] overflow-hidden rounded-3xl">
                  <img src={s.image} alt={s.imageAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] hover:scale-105" />
                </motion.div>
              </div>

              {/* Experience cards */}
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {s.cards.map((card, ci) => (
                  <motion.div key={ci} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.07 }} className="rounded-2xl border border-[#0B192C]/10 bg-white p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#0B192C]/5 px-2.5 py-1 text-[10px] font-semibold text-[#0B192C]/70">
                        <Clock className="h-3 w-3" /> {card.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#0B192C]/5 px-2.5 py-1 text-[10px] font-semibold text-[#0B192C]/70">
                        <Users className="h-3 w-3" /> {card.group}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-[#0B192C] leading-snug" style={{ fontFamily: "Fraunces, serif" }}>{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#0B192C]/60">{card.desc}</p>
                    <button onClick={() => navigate({ to: "/contact" })} className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C }}>
                      Book <ArrowRight className="h-3 w-3" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Final CTA */}
      <section className="py-24 md:py-32" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <SectionLabel text="Ready to Go" invert />
          <h2 className="text-balance text-4xl leading-[1.1] tracking-tight text-white md:text-5xl" style={{ fontFamily: "Fraunces, serif" }}>
            Tell us what you're looking for. <em className="italic font-light">We'll build it.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/65">
            Every Samvada experience can be customised to your group, your dates, and your interests. A real person will reply within 12 hours.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="border border-white/40 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B192C]">
              Plan Your Experience
            </Link>
            <Link to="/trips" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white/70 hover:text-white">
              View Upcoming Trips <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
