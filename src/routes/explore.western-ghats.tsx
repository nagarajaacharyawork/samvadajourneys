import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { C, OCEAN, PageCTA, PageFAQ, PageHero, SectionLabel, SectionTitle, type DestinationData } from "@/components/site/DestinationPage";
import { ImageBannerWithQuote } from "@/components/site/DestinationPageEnhancements";
import heroImg from "@/assets/imgi_9_673840a46b26f4521bcc7a7a_Kodachadri Hills 3.webp";
import img1 from "@/assets/imgi_34_67456fb9ed1002405e16426a_DJI_0925-Enhanced-NR copy.webp";
import img2 from "@/assets/imgi_48_67cd956958e2299374d3d90b_Nature-p-1080.webp";
import wgQuote from "@/assets/westernghat-quote.jpg";
import img3 from "@/assets/imgi_4_67cd949f03e3822d94252b8b_spri.webp";
import img4 from "@/assets/imgi_13_675ffeed8edd871379a0092d_DJI_0519-Enhanced-NR copy.webp";

export const Route = createFileRoute("/explore/western-ghats")({
  head: () => ({
    meta: [
      { title: "Western Ghats — Samvada Journeys" },
      { name: "description", content: "Trek through ancient forests, discover hidden waterfalls, and walk the coffee plantations of the Western Ghats with Samvada Journeys." },
      { property: "og:title", content: "Western Ghats — Samvada Journeys" },
      { property: "og:description", content: "Trek through ancient forests, discover hidden waterfalls, and walk the coffee plantations of the Western Ghats." },
      { property: "og:url", content: "https://www.samvadajourneys.in/explore/western-ghats" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/explore/western-ghats" }],
  }),
  component: WesternGhats,
});

const data: DestinationData = {
  slug: "western-ghats",
  heroImage: heroImg,
  heroTitle: "Western Ghats",
  heroSubtitle: "Older than the Himalayas. Wilder than anything you've imagined.",
  eyebrow: "Explore",
  about: [
    "The Western Ghats are 1,600 kilometres old and among the eight biodiversity hotspots on earth. Standing inside a shola forest at 6 AM, watching mist move between ancient trees, that statistic becomes real.",
    "These are not sharp, photogenic peaks. They are rounded, forested, and deeply quiet. Terraced with coffee and cardamom, threaded by rivers that eventually find the sea.",
  ],
  whyVisit: [
    "UNESCO World Heritage Site. One of only eight biodiversity hotspots on the planet.",
    "Over 500 bird species recorded in the Karnataka Ghats. A birder's life list destination.",
    "Jog Falls: 253 metres of freefall, one of the highest plunge waterfalls in India.",
    "Kodachadri summit at 1,343 m. A trek through shola forest with views to the Arabian Sea.",
    "Working coffee estates where you can trace the journey from cherry to cup.",
    "Agumbe: the world's best location to observe the king cobra in the wild.",
  ],
  attractions: [
    { name: "Kodachadri Peak", description: "1,343 m summit through shola forest. Clear days reveal an unbroken view to the Arabian Sea.", bestTime: "Oct to Feb", badge: "Trek Highlight" },
    { name: "Agumbe Rainforest", description: "7,000 mm of annual rainfall. The world's best location to observe the king cobra in the wild.", bestTime: "Oct to May", badge: "Wildlife" },
    { name: "Jog Falls", description: "253 metres of freefall in four streams. At monsoon peak, the roar carries two kilometres.", bestTime: "Aug to Nov", badge: "Natural Wonder" },
    { name: "Chikmagalur Coffee Country", description: "India's first coffee hills. Walking a plantation at harvest is a full sensory experience.", bestTime: "Oct to Jan", badge: "Plantation Trail" },
    { name: "Bhadra Wildlife Sanctuary", description: "492 sq km of moist forest. Tigers, leopards, wild dogs, gaur, and 250+ bird species.", bestTime: "Oct to May", badge: "Safari Country" },
    { name: "Kudremukh National Park", description: "1,894 m peak through pristine shola-grassland. Source of three major rivers.", bestTime: "Oct to Feb", badge: "Shola Forest" },
  ],
  experiences: [
    { title: "Shola Forest Trek", duration: "Full Day", groupSize: "2 to 8 People", difficulty: "Moderate", description: "Old-growth forest with a naturalist. Animal tracks, medicinal plants, endemic birds, and the silence of a forest never logged." },
    { title: "Hidden Waterfall Expedition", duration: "Full Day", groupSize: "2 to 6 People", difficulty: "Moderate", description: "A trek to unmarked falls the tourist maps don't show. Wild swim, lunch on a rock above the water." },
    { title: "Coffee Estate Morning", duration: "Half Day", groupSize: "2 to 10 People", difficulty: "Easy", description: "From nursery to pulping shed with the grower. The full story of the cup, from cherry to cup." },
    { title: "Kodachadri Sunrise Trek", duration: "2 Days", groupSize: "2 to 8 People", difficulty: "Challenging", description: "Night camp in the forest. Summit arrival timed for the moment the mist lifts and the hills reveal themselves." },
    { title: "Endemic Bird Walk", duration: "Half Day", groupSize: "2 to 6 People", difficulty: "Easy", description: "Early morning with a specialist guide. Malabar trogon, Sri Lanka frogmouth. Birds found nowhere else on earth." },
    { title: "Forest Camp", duration: "2 Days", groupSize: "2 to 8 People", difficulty: "Moderate", description: "One night in the forest. Campfire cooking, night sounds, dawn walk with a naturalist." },
  ],
  itineraries: [
    { label: "Half Day", plan: "Coffee estate walk. Nursery to pulping shed. Tasting. Return by noon." },
    { label: "One Day", plan: "Dawn birding. Plantation tour. Waterfall trek with packed lunch. Hilltop sunset." },
    { label: "Weekend", plan: "Day 1: Plantation walk, estate dinner. Day 2: Forest trek, hidden waterfall, campfire." },
    { label: "Three Days", plan: "Day 1: Coffee trail. Day 2: Forest trek and waterfall. Day 3: Kodachadri sunrise, Bhadra safari." },
  ],
  culture: "The Malnad region has its own cuisine, architecture, and festival calendar, all shaped by the forest. The Kodava people of Kodagu carry a warrior culture entirely their own. The knowledge our naturalists share comes from a lifetime in this forest, not a field guide.",
  bestTime: [
    { season: "October to February", note: "Clear skies, cool temperatures, coffee harvest in full swing. Best for trekking and birding." },
    { season: "March to May", note: "Drier and warmer. Animals come to water. Easier wildlife sightings." },
    { season: "June to September", note: "Monsoon. Jog Falls at its peak. Forest turns impossibly green. Trekking limited." },
  ],
  tips: [
    "Start treks before 6 AM. The forest is most alive in the first two hours after dawn.",
    "Carry a rain jacket even in the dry season. The Ghats generate their own weather.",
    "Leeches are common from June to November. Wear full-length trousers and tuck them into your socks.",
    "Wildlife sightings are never guaranteed. Come with patience. The forest rewards those who move slowly.",
    "The best coffee in the Ghats is in the estate kitchens. Boiled with chicory, served in a steel tumbler.",
  ],
  stats: [
    { number: "1,600 km", label: "Length of the Ghats" },
    { number: "500+", label: "Bird Species" },
    { number: "253 m", label: "Jog Falls Drop" },
    { number: "1,343 m", label: "Kodachadri Summit" },
  ],
  cinematicQuotes: [
    { image: img1, quote: "In every walk with nature, one receives far more than he seeks.", author: "John Muir" },
    { image: wgQuote, quote: "The forest is not a resource for us. It is life itself. It is the only teacher we have ever had.", author: "Sunderlal Bahuguna" },
  ],
  gallery: [
    { src: img1, alt: "Aerial view of the Western Ghats" },
    { src: img2, alt: "Forest canopy and mist" },
    { src: img3, alt: "Sunrise over the hills" },
    { src: img4, alt: "Ghats landscape from above" },
  ],
  faqs: [
    { q: "Do I need to be an experienced trekker?", a: "Not at all. We offer experiences for every fitness level, from gentle plantation walks to the more demanding Kodachadri summit trek. We'll match the experience to your ability and pace." },
    { q: "Is the wildlife dangerous?", a: "The Ghats are home to elephants, leopards, and king cobras. All our forest experiences are led by experienced naturalists who know how to move safely in this environment." },
    { q: "What should I pack?", a: "Light, breathable clothing in neutral colours. A warm layer for evenings. Sturdy walking shoes. A rain jacket. Sunscreen, insect repellent, and a torch for early morning starts." },
    { q: "Can I visit the coffee estates during harvest?", a: "Yes, and we strongly recommend it. The main harvest runs from October to January. You can pick coffee cherries alongside the estate workers and taste coffee that was on the tree 48 hours ago." },
    { q: "What is a shola forest?", a: "Shola forests are a rare type of tropical montane forest found only in the higher elevations of the Western Ghats. Dense, stunted trees, a thick canopy, and an extraordinary diversity of endemic species." },
  ],
};

// Difficulty badge colour
function difficultyColor(d: string) {
  if (d === "Challenging") return "#D96B43";
  if (d === "Moderate") return "#2A5C43";
  return "#0B192C";
}

function WesternGhats() {
  const gallery = data.gallery;

  return (
    <div>
      {/* 1 — Hero */}
      <PageHero data={data} />

      {/* 2 — Stats on solid colour background */}
      <section className="relative h-64 md:h-80 overflow-hidden bg-[#0B192C]">
        <div className="flex h-full items-center justify-center">
          <div className="grid grid-cols-2 gap-8 px-6 md:grid-cols-4 md:gap-16">
            {data.stats!.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
                <div className="text-3xl font-black md:text-4xl" style={{ color: C, fontFamily: "Fraunces, serif" }}>{s.number}</div>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Editorial story: text-only, wide columns */}
      <section className="bg-[#F9F9FB] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-16 md:grid-cols-[1fr_2fr] items-start">
            <div className="md:sticky md:top-24">
              <SectionLabel text="The Destination" />
              <SectionTitle>Ancient. Alive. Unhurried.</SectionTitle>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C }}>
                Plan Your Trek <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="space-y-5">
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-base leading-[1.9] text-[#0B192C]/75">
                {data.about[0]}
              </motion.p>
              <ul className="space-y-2 pt-2">
                {data.whyVisit.map((w, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 text-sm text-[#0B192C]/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: C }} />
                    {w}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Large scenic image with quote */}
      <section className="px-6 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <ImageBannerWithQuote
            image={data.cinematicQuotes![0].image}
            quote={data.cinematicQuotes![0].quote}
            author={data.cinematicQuotes![0].author}
          />
        </div>
      </section>

      {/* 5 — Experiences: 2-col, text-heavy, no images */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-14">
            <SectionLabel text="Signature Experiences" />
            <SectionTitle>Six ways to go deeper into the forest.</SectionTitle>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {data.experiences.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.07 }} className="border-l-2 pl-6" style={{ borderColor: i % 2 === 0 ? C : "#0B192C" }}>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0B192C]/50">{e.duration}</span>
                  <span className="text-[#0B192C]/30">·</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#0B192C]/50">{e.groupSize}</span>
                  <span className="text-[#0B192C]/30">·</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: difficultyColor(e.difficulty!) }}>{e.difficulty}</span>
                </div>
                <h3 className="text-xl font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0B192C]/65">{e.description}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C }}>
                  Book <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Second scenic image */}
      <section className="px-6 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <ImageBannerWithQuote
            image={data.cinematicQuotes![1].image}
            quote={data.cinematicQuotes![1].quote}
            author={data.cinematicQuotes![1].author}
          />
        </div>
      </section>

      {/* 7 — Itinerary timeline + Best Time side by side */}
      <section className="bg-[#0B192C] py-24 md:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Timeline */}
            <div>
              <SectionLabel text="Suggested Itineraries" invert />
              <SectionTitle invert>How long do you have?</SectionTitle>
              <div className="mt-10 space-y-0">
                {data.itineraries.map((it, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-white" style={{ background: C }}>{i + 1}</div>
                      {i < data.itineraries.length - 1 && <div className="w-px flex-1 my-1 bg-white/15" />}
                    </div>
                    <div className="pb-8">
                      <div className="text-[10px] font-bold uppercase tracking-[0.32em] mb-1" style={{ color: C }}>{it.label}</div>
                      <p className="text-sm leading-relaxed text-white/70">{it.plan}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            {/* Best Time */}
            <div>
              <SectionLabel text="Best Time to Visit" invert />
              <SectionTitle invert>Every season, a different forest.</SectionTitle>
              <div className="mt-10 space-y-4">
                {data.bestTime.map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-stretch overflow-hidden rounded-xl border border-white/10">
                    <div className="w-1 shrink-0" style={{ background: C }} />
                    <div className="p-5">
                      <div className="text-sm font-black text-white">{b.season}</div>
                      <p className="mt-1 text-sm text-white/60">{b.note}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10">
                <SectionLabel text="Before You Go" invert />
                <ul className="mt-4 space-y-3">
                  {data.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/65">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: C }} />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
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
