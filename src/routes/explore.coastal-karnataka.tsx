import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { C, OCEAN, PageCTA, PageFAQ, PageHero, SectionLabel, SectionTitle, type DestinationData } from "@/components/site/DestinationPage";
import { ImageBannerWithQuote } from "@/components/site/DestinationPageEnhancements";
import heroImg from "@/assets/Coastal Karnataka.jpg";
import imgMalpe from "@/assets/Malpe harbour.jpg";
import imgFishing from "@/assets/fishing economy.jpeg";
import imgStMarys from "@/assets/St. Mary's Island.jpg";
import imgKaup from "@/assets/Kaup Lighthouse.jpg";
import imgDelta from "@/assets/Delta Point.jpg";
import imgBackwaters from "@/assets/backwaters.jpeg";
import imgTemples from "@/assets/Coastal Temples.jpg";
import imgMangaluru from "@/assets/Mangaluru.jpg";
import imgCuisine from "@/assets/cuisine.jpg";
import imgQuoteBg from "@/assets/qoutebg-Anne Morrow Lindbergh.jpg";

export const Route = createFileRoute("/explore/coastal-karnataka")({
  head: () => ({
    meta: [
      { title: "Coastal Karnataka — Samvada Journeys" },
      { name: "description", content: "Discover the hidden beaches, fishing villages, ancient temples and backwaters of Coastal Karnataka with Samvada Journeys." },
      { property: "og:title", content: "Coastal Karnataka — Samvada Journeys" },
      { property: "og:description", content: "Discover the hidden beaches, fishing villages, ancient temples and backwaters of Coastal Karnataka." },
      { property: "og:url", content: "https://www.samvadajourneys.in/explore/coastal-karnataka" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/explore/coastal-karnataka" }],
  }),
  component: CoastalKarnataka,
});

const data: DestinationData = {
  slug: "coastal-karnataka",
  heroImage: heroImg,
  heroTitle: "Coastal Karnataka",
  heroSubtitle: "320 kilometres of shoreline. One lifetime is not enough.",
  eyebrow: "Explore",
  about: [
    "It is 5:12 AM at Malpe harbour. The auction has already started. Seven men crouch over silver mackerel, sorting by size in the dark. Nobody is performing for anyone. This is just Tuesday.",
    "Coastal Karnataka stretches 320 km along the Arabian Sea. From Karwar's forested cliffs to Mangaluru. Behind the sand: backwaters, paddy terraces, ancient temples, and a Tulu civilisation over two thousand years old.",
  ],
  whyVisit: [
    "One of India's last unspoiled working coastlines. No resort strips, no cocktail menus on the sand.",
    "St. Mary's Island: hexagonal basalt columns formed 88 million years ago, accessible only by boat.",
    "The Tulu cultural belt. Yakshagana, Bhoota Kola, and Kambala exist nowhere else on earth.",
    "Seafood so fresh it was in the ocean six hours ago. Cooked on wood fire. Eaten on a banana leaf.",
    "Kaup Lighthouse, built in 1901, still operational. Still the finest sunset perch on the coast.",
    "Delta Point: where a river meets the sea with no crowd, no entry fee, and no filter needed.",
  ],
  attractions: [
    { name: "Malpe Harbour", description: "Karnataka's busiest fishing harbour. Arrive before 5 AM for the night boats and the auction.", bestTime: "Oct to Feb", badge: "Dawn Experience" },
    { name: "St. Mary's Island", description: "Hexagonal basalt columns formed 88 million years ago. A 20-minute boat ride from Malpe.", bestTime: "Oct to May", badge: "Geological Wonder" },
    { name: "Kaup Lighthouse", description: "Built in 1901. Climb to the top at golden hour for the finest sunset on the coast.", bestTime: "Year Round", badge: "Sunset Landmark" },
    { name: "Delta Point", description: "Where the Sauparnika river meets the Arabian Sea. Wide, empty, crowd-free at dusk.", bestTime: "Oct to Mar", badge: "Hidden Gem" },
    { name: "Udupi Backwaters", description: "Quiet channels lined with mangroves, paddy fields, and temple glimpses through the trees.", bestTime: "Nov to Feb", badge: "Slow Travel" },
    { name: "Coastal Temple Circuit", description: "Kollur Mookambika, Kateel Durgaparameshwari. Sacred sites woven into daily coastal life.", bestTime: "Oct to Feb", badge: "Sacred Sites" },
  ],
  experiences: [
    { title: "Malpe Dawn Immersion", duration: "3 Hours", groupSize: "2 to 6 People", difficulty: "Easy", description: "Inside the fish auction as it happens. Breakfast at a fisherman's eatery that opens at 5:30 AM and closes when the food runs out." },
    { title: "St. Mary's Island Expedition", duration: "Half Day", groupSize: "2 to 10 People", difficulty: "Easy", description: "Boat journey with a local naturalist. The geology, history, and ecology of the basalt formations." },
    { title: "Sauparnika Backwater Cruise", duration: "Half Day", groupSize: "2 to 8 People", difficulty: "Easy", description: "Private boat through the backwaters. Mangroves, kingfishers, paddy fields. No engine noise." },
    { title: "Kaup Lighthouse Sunset", duration: "2 Hours", groupSize: "2 to 8 People", difficulty: "Easy", description: "Climb the lighthouse. Watch the light come on. Chai on the beach as the sky turns." },
    { title: "Fishing Village Walk", duration: "3 Hours", groupSize: "2 to 6 People", difficulty: "Easy", description: "Net-menders, boat builders, fish-drying racks. A meal cooked on a wood fire." },
    { title: "Coastal Food Trail", duration: "Full Day", groupSize: "2 to 6 People", difficulty: "Easy", description: "5 AM fish market to a banana-leaf home lunch to a 70-year-old eatery that has never changed its menu." },
  ],
  itineraries: [
    { label: "Half Day", plan: "Malpe harbour at 4:30 AM. Fish auction. Breakfast. Boat to St. Mary's Island. Return by noon." },
    { label: "One Day", plan: "Dawn at Malpe. St. Mary's Island. Seafood home lunch. Kaup Lighthouse. Sunset at Delta Point." },
    { label: "Weekend", plan: "Day 1: Malpe, St. Mary's, fishing village, seafood dinner. Day 2: Backwaters, temples, Kaup sunset." },
    { label: "Three Days", plan: "Day 1: Malpe and St. Mary's. Day 2: Backwaters and temples. Day 3: Kaup, Delta Point, food trail." },
  ],
  culture: "The Tulu coast does not perform its culture for visitors. Yakshagana, Bhoota Kola, and Kambala exist nowhere else on earth. None of them are staged for tourists. They are the spiritual infrastructure of a living civilisation.",
  bestTime: [
    { season: "October to February", note: "Peak season. Calm sea, active fishing, clear skies. Yakshagana season begins in November." },
    { season: "March to May", note: "Quieter coast. Good for temples and cultural experiences. Sea breeze softens the heat." },
    { season: "June to September", note: "Monsoon. Boat trips stop but the coast transforms. Wild sea, intense green, atmospheric temples." },
  ],
  tips: [
    "Set your alarm for 4:30 AM if you want the fish auction at its best. By 7 AM it's over.",
    "Boat trips to St. Mary's Island are weather-dependent. Confirm the evening before.",
    "The best seafood on this coast is not in restaurants. It's in home kitchens. Ask your Samvada host to arrange a home meal.",
    "Carry cash. The fish auction, the boat operators, the village eateries. None of them take cards.",
    "Dress modestly at temples. Shoulders and knees covered. Footwear off at the entrance, always.",
  ],
  stats: [
    { number: "320 km", label: "Of Coastline" },
    { number: "88M yrs", label: "St. Mary's Basalt Age" },
    { number: "1901", label: "Kaup Lighthouse Built" },
    { number: "2,000+", label: "Years of Tulu Culture" },
  ],
  cinematicQuotes: [
    { image: imgQuoteBg, quote: "The sea does not reward those who are too anxious, too greedy, or too impatient. One should lie empty, open, choiceless as a beach, waiting for a gift from the sea.", author: "Anne Morrow Lindbergh" },
    { image: imgCuisine, quote: "The cure for anything is salt water. Sweat, tears, or the sea.", author: "Isak Dinesen" },
  ],
  gallery: [
    { src: imgMalpe, alt: "Fishing boats at Malpe harbour at dawn" },
    { src: imgStMarys, alt: "St. Mary's Island basalt columns" },
    { src: imgKaup, alt: "Kaup Lighthouse at golden hour" },
    { src: imgDelta, alt: "Delta Point where river meets the sea" },
  ],
  faqs: [
    { q: "How do I get to Coastal Karnataka from Bengaluru?", a: "Udupi is approximately 400 km from Bengaluru, about 6 to 7 hours by road or overnight by train. Mangaluru has a domestic airport with direct flights from Bengaluru, Mumbai, and other major cities." },
    { q: "Is it safe to swim at the beaches?", a: "Most beaches on this coast have strong undertows and are not safe for casual swimming. Malpe Beach has a designated swimming zone. Always ask locals before entering the water." },
    { q: "Can I visit St. Mary's Island year-round?", a: "Boat services operate from October to May. During the monsoon the sea is too rough for the crossing. The island is at its most beautiful in the early morning light of the winter months." },
    { q: "What language do people speak here?", a: "Tulu is the primary language. One of the oldest Dravidian languages, spoken by around 2 million people and found almost nowhere outside this coastal belt. Kannada and Konkani are also widely spoken." },
    { q: "What makes Samvada's coastal experience different?", a: "We take you behind the scenes: the fish auction before sunrise, the home kitchen, the village shrine, the fishing boat. These are not tourist attractions. They are the real life of the coast, and we have the relationships to take you there." },
  ],
};

// ── Beach stop card for the carousel ──────────────────────────────────────────
function BeachStop({ image, name, tagline, badge }: { image: string; name: string; tagline: string; badge: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group relative flex-shrink-0 w-72 overflow-hidden rounded-2xl"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <span className="inline-block rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em]" style={{ background: C }}>{badge}</span>
        <h3 className="mt-2 text-lg font-black leading-tight" style={{ fontFamily: "Fraunces, serif" }}>{name}</h3>
        <p className="mt-1 text-xs text-white/75">{tagline}</p>
      </div>
    </motion.div>
  );
}

function CoastalKarnataka() {
  const gallery = data.gallery;

  const beachStops = [
    { image: imgFishing, name: "Fishing Economy", tagline: "The auction starts before the sun does.", badge: "Dawn" },
    { image: imgStMarys, name: "St. Mary's Island", tagline: "88 million years of geology in one boat ride.", badge: "Geological Wonder" },
    { image: imgKaup, name: "Kaup Lighthouse", tagline: "Built 1901. Still the best sunset seat on the coast.", badge: "Landmark" },
    { image: imgDelta, name: "Delta Point", tagline: "Where the river gives itself to the sea.", badge: "Hidden Gem" },
    { image: imgBackwaters, name: "Backwaters & Temples", tagline: "Mangroves, kingfishers, and sacred shores.", badge: "Slow Travel" },
    { image: imgTemples, name: "Coastal Temples", tagline: "Sacred sites woven into the daily life of the coast.", badge: "Sacred" },
  ];

  return (
    <div>
      {/* 1 — Hero */}
      <PageHero data={data} />

      {/* 2 — Stats bar */}
      <section className="bg-[#0B192C] py-10">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {data.stats!.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="text-center">
                <div className="text-3xl font-black md:text-4xl" style={{ color: C, fontFamily: "Fraunces, serif" }}>{s.number}</div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Story: image-left / image-right alternating */}
      <section className="bg-[#F9F9FB] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8 space-y-20">
          {/* Para 1 — image left */}
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={imgFishing} alt="Fishing economy at Malpe harbour" className="h-full w-full object-cover" />
            </motion.div>
            <div>
              <SectionLabel text="The Coast" />
              <SectionTitle>Where the fishing economy still runs the show.</SectionTitle>
              <p className="mt-6 text-base leading-relaxed text-[#0B192C]/75">{data.about[0]}</p>
              <ul className="mt-5 space-y-2">
                {data.whyVisit.map((w, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#0B192C]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: C }} />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Para 2 — image right */}
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="md:order-1 order-2">
              <SectionLabel text="The Land Behind the Shore" />
              <SectionTitle>Backwaters, temples, and two thousand years of Tulu culture.</SectionTitle>
              <p className="mt-6 text-base leading-relaxed text-[#0B192C]/75">{data.about[1]}</p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-[4/5] overflow-hidden rounded-2xl md:order-2 order-1">
              <img src={imgBackwaters} alt="Udupi backwaters" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 — Beach Carousel (horizontal scroll) */}
      <section className="bg-white py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <SectionLabel text="The Coastal Route" />
              <SectionTitle>Six stops. One unforgettable shore.</SectionTitle>
            </div>
            <Link to="/contact" className="hidden md:inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C }}>
              Plan the Route <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="flex gap-5 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
            {beachStops.map((stop, i) => (
              <BeachStop key={i} {...stop} />
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Cinematic quote */}
      <section className="px-6 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <ImageBannerWithQuote
            image={data.cinematicQuotes![0].image}
            quote={data.cinematicQuotes![0].quote}
            author={data.cinematicQuotes![0].author}
          />
        </div>
      </section>

      {/* 6 — Experiences: 3-col cards */}
      <section className="bg-[#F9F9FB] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-14 text-center">
            <SectionLabel text="Signature Experiences" />
            <SectionTitle center>Curated moments you won't find anywhere else.</SectionTitle>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.experiences.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.07 }} className="rounded-2xl border border-[#0B192C]/10 bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B192C]/5 px-3 py-1 text-[11px] font-semibold text-[#0B192C]/70">
                    <Clock className="h-3 w-3" /> {e.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B192C]/5 px-3 py-1 text-[11px] font-semibold text-[#0B192C]/70">
                    <Users className="h-3 w-3" /> {e.groupSize}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0B192C]/65">{e.description}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C }}>
                  Book Now <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Best Time + Tips split */}
      <section className="bg-[#0B192C] py-20 md:py-28 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <SectionLabel text="Best Time to Visit" invert />
              <SectionTitle invert>Every season tells a different story.</SectionTitle>
              <div className="mt-8 space-y-4">
                {data.bestTime.map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-stretch overflow-hidden rounded-xl border border-white/10">
                    <div className="w-1 shrink-0" style={{ background: C }} />
                    <div className="p-5">
                      <div className="text-sm font-black text-white">{b.season}</div>
                      <p className="mt-1 text-sm text-white/60">{b.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel text="Before You Go" invert />
              <SectionTitle invert>A few things worth knowing.</SectionTitle>
              <ul className="mt-8 space-y-4">
                {data.tips.map((tip, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: C }} />
                    {tip}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — FAQ + CTA */}
      <PageFAQ faqs={data.faqs} />
      <PageCTA />
    </div>
  );
}
