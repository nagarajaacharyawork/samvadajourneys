import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { C, OCEAN, PageCTA, PageFAQ, PageHero, SectionLabel, SectionTitle, type DestinationData } from "@/components/site/DestinationPage";
import { ImageBannerWithQuote } from "@/components/site/DestinationPageEnhancements";
import heroImg from "@/assets/Hidden Villages.jpeg";
import img1 from "@/assets/imgi_22_677216968747c3a89492ff89_Moode Idli  kotte Kadubu.webp";
import img2 from "@/assets/imgi_12_675ffe1e96ccefdef53fff51_IMG_1101-Enhanced-NR.webp";
import belkalVillage from "@/assets/Belkal village roads.jpg";
import villageRoad from "@/assets/village road.jpeg";
import img3 from "@/assets/imgi_25_6772135f6e792f9e5aad99f0_471489661_512039215186411_7174681571825144467_n.webp";
import img4 from "@/assets/imgi_14_675fffd94726e2249fcad7a1_DSC03674.webp";

export const Route = createFileRoute("/explore/hidden-villages")({
  head: () => ({
    meta: [
      { title: "Hidden Villages — Samvada Journeys" },
      { name: "description", content: "Discover the villages beyond the tourist trail. Traditional life, local artisans, village cuisine, and the quiet rhythms of rural coastal Karnataka." },
      { property: "og:title", content: "Hidden Villages — Samvada Journeys" },
      { property: "og:description", content: "Discover the villages beyond the tourist trail. Traditional life, local artisans, village cuisine, and the quiet rhythms of rural coastal Karnataka." },
      { property: "og:url", content: "https://www.samvadajourneys.in/explore/hidden-villages" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/explore/hidden-villages" }],
  }),
  component: HiddenVillages,
});

const data: DestinationData = {
  slug: "hidden-villages",
  heroImage: heroImg,
  heroTitle: "Hidden Villages",
  heroSubtitle: "The most interesting places are never on the tourist map.",
  eyebrow: "Explore",
  about: [
    "Belkal is not on any tourist map. The road into the village is narrow, flanked by areca palms and paddy fields. In the morning, before the heat arrives, the village moves at a pace that the rest of the world has largely forgotten.",
  ],
  whyVisit: [
    "Belkal village roads lined with areca palms, paddy fields, and the unhurried rhythm of daily rural life.",
    "Morning routines that begin before sunrise — cattle, fields, the first smoke from wood-fired kitchens.",
    "Paddy farming traditions unchanged for centuries, still practised by hand in flooded fields.",
    "Kambala, the traditional buffalo race of the Tulu coast, held in flooded paddy fields each season.",
    "Yakshagana, the all-night classical theatre of coastal Karnataka, performed in village courtyards.",
    "Direct economic contribution to communities that benefit from thoughtful, small-scale tourism.",
  ],
  attractions: [
    { name: "Belkal Village Roads", description: "Narrow lanes through areca groves and paddy fields. The village reveals itself slowly, on foot, at walking pace.", bestTime: "Oct to Feb", badge: "Village Life" },
    { name: "Morning Village Routines", description: "Cattle led to fields, wells drawn, wood fires lit. The daily life of a village before the rest of the world wakes up.", bestTime: "Year Round", badge: "Daily Life" },
    { name: "Paddy Village Walks", description: "Flooded terraces that mirror the sky, worked by hand from planting to harvest.", bestTime: "Jun to Feb", badge: "Agricultural Heritage" },
    { name: "Kambala", description: "The traditional buffalo race of the Tulu coast. Held in flooded paddy fields, it is one of the most visually extraordinary events in rural Karnataka.", bestTime: "Nov to Mar", badge: "Living Tradition" },
    { name: "Yakshagana", description: "Classical theatre performed through the night in village courtyards. Elaborate costumes, mythological stories, and a tradition that has survived for centuries.", bestTime: "Nov to May", badge: "Performing Arts" },
    { name: "Village Sacred Geography", description: "Shrines, sacred trees, and ritual spaces that map the spiritual life of each community.", bestTime: "Year Round", badge: "Sacred Spaces" },
  ],
  experiences: [
    { title: "Belkal Village Morning Walk", duration: "3 Hours", groupSize: "2 to 6 People", difficulty: "Easy", description: "The village road at dawn. Paddy fields, areca groves, the elder on the veranda, the cattle heading out. A conversation with a place that has not changed in generations." },
    { title: "Farm Immersion", duration: "Half Day", groupSize: "2 to 6 People", difficulty: "Easy", description: "A morning on a working paddy, coconut, or spice farm. Plant, weed, carry. Leave with a different understanding of where food comes from." },
    { title: "Kambala Experience", duration: "Half Day", groupSize: "2 to 12 People", difficulty: "Easy", description: "Witness the traditional buffalo race in flooded paddy fields. One of the most visually extraordinary events in rural coastal Karnataka, and almost entirely unknown outside the region." },
    { title: "Yakshagana Evening", duration: "3 to 6 Hours", groupSize: "2 to 12 People", difficulty: "Easy", description: "Watch a Yakshagana performance in a village courtyard. Elaborate costumes, mythological stories, and a theatrical tradition that has been performed through the night for centuries." },
    { title: "Village Homestay", duration: "1 to 2 Nights", groupSize: "2 to 4 People", difficulty: "Easy", description: "Wood-fire meals, veranda evenings, mornings before sunrise. Living at the pace of the family. Local food cooked the way it has always been cooked." },
    { title: "Craft Workshop", duration: "Half Day", groupSize: "2 to 6 People", difficulty: "Easy", description: "Weaver, potter, or coir worker. Make something with your hands. The object you take home will mean more than anything you could buy." },
  ],
  itineraries: [
    { label: "Half Day", plan: "Belkal village road walk. Paddy fields at dawn. Morning routines with the family. Return by noon." },
    { label: "One Day", plan: "Farm experience. Village walk. Home lunch. Craft workshop. Evening Yakshagana performance." },
    { label: "Weekend", plan: "Day 1: Village walk, farm, veranda dinner. Day 2: Kambala experience, craft workshop, cultural evening." },
    { label: "Three Days", plan: "Day 1: Village and farm. Day 2: Kambala and craft. Day 3: Yakshagana performance, sacred walk, village homestay." },
  ],
  culture: "The culture of Belkal and the villages around it lives in the daily routines, the festivals, and the sacred. Kambala and Yakshagana are not performances staged for visitors — they are living traditions that the community practises for itself. The elders carry knowledge of land, seasons, and ritual accumulated over generations, passed on through practice and story, never written down. Samvada's work is, in part, about making sure it doesn't disappear.",
  bestTime: [
    { season: "October to February", note: "Harvest in, cool weather, full festival calendar. Village life at its most active." },
    { season: "March to May", note: "Warm and quiet. Good for cooking and craft. Manageable in the shade of coconut groves." },
    { season: "June to September", note: "Monsoon. Paddy fields planted, landscape intensely green. Atmospheric village experience." },
  ],
  tips: [
    "Always ask before photographing people. A smile and a gesture of respect will almost always be warmly received. But ask first.",
    "Remove your footwear before entering a home or a shrine. This is a basic courtesy that is deeply appreciated.",
    "Eat what you are offered. Village hospitality is expressed through food. Declining is a significant discourtesy.",
    "Bring a small gift when visiting a family — fruit, sweets, or something from your own home.",
    "Move slowly. The value of a village experience is in the details — the sounds, the smells, the small interactions that you miss if you are in a hurry.",
  ],
  stats: [
    { number: "40+", label: "Village Communities" },
    { number: "5 AM", label: "When the Village Wakes" },
    { number: "Nov–Mar", label: "Kambala Season" },
    { number: "100%", label: "Direct to Community" },
  ],
  cinematicQuotes: [
    { image: villageRoad, quote: "The village road is the first story. Walk it slowly enough and the rest reveals itself.", author: "Samvada Journeys" },
    { image: img4, quote: "Hospitality is not a transaction. It is a declaration of shared humanity.", author: "Traditional Tulu proverb" },
  ],
  gallery: [
    { src: img1, alt: "Moode Idli and Kotte Kadubu — traditional village breakfast" },
    { src: img2, alt: "Village life in coastal Karnataka" },
    { src: img3, alt: "Traditional Kambala and village culture" },
    { src: img4, alt: "Village architecture and daily life" },
  ],
  faqs: [
    { q: "Are the villages comfortable for visitors who are not used to rural India?", a: "We work with villages that are accustomed to welcoming guests and can provide a comfortable experience without compromising the authenticity of the visit. We'll brief you fully on what to expect before you go." },
    { q: "Do the families speak English?", a: "Most village families speak Tulu and Kannada. Our guides translate and facilitate the conversation. The language barrier is rarely an obstacle. Hospitality is universal, and a shared meal communicates more than words." },
    { q: "What is Kambala?", a: "Kambala is the traditional buffalo race of the Tulu coast, held in flooded paddy fields between November and March. It is one of the most visually extraordinary events in rural Karnataka and an important part of the cultural calendar of the region." },
    { q: "What is Yakshagana?", a: "Yakshagana is a classical theatre form from coastal Karnataka, performed through the night in village courtyards. Elaborate costumes, mythological stories drawn from the epics, and a tradition that has been practised for centuries. Watching it in a village setting, rather than on a stage, is an entirely different experience." },
    { q: "How does Samvada ensure that village tourism benefits the community?", a: "We pay our village hosts directly and fairly. No intermediaries, no commission structures. We work with communities to ensure that the tourism we bring is on their terms and at a scale they are comfortable with." },
  ],
};

function HiddenVillages() {
  const gallery = data.gallery;

  return (
    <div>
      {/* 1 — Hero */}
      <PageHero data={data} />

      {/* 2 — Opening story: compact two-column */}
      <section className="bg-[#F9F9FB] py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_340px] items-center">
            <div>
              <SectionLabel text="The Story" />
              <SectionTitle>A guest, not a tourist. The difference is everything.</SectionTitle>
              <div className="mt-5 space-y-4">
                <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-base leading-[1.9] text-[#0B192C]/75">
                  {data.about[0]}
                </motion.p>
                <ul className="space-y-1.5">
                  {data.whyVisit.map((w, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 text-sm text-[#0B192C]/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: C }} />
                      {w}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-3">
              <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-[4/3] overflow-hidden rounded-2xl">
                <img src={belkalVillage} alt="Belkal village roads" className="h-full w-full object-cover" />
              </motion.div>
              <div className="grid grid-cols-2 gap-2">
                {data.stats!.map((s, i) => (
                  <div key={i} className="rounded-xl border border-[#0B192C]/10 bg-white p-3 text-center">
                    <div className="text-lg font-black" style={{ color: C, fontFamily: "Fraunces, serif" }}>{s.number}</div>
                    <p className="mt-0.5 text-[10px] font-semibold text-[#0B192C]/55">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — Cinematic quote */}
      <section className="px-6 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <ImageBannerWithQuote
            image={data.cinematicQuotes![0].image}
            quote={data.cinematicQuotes![0].quote}
            author={data.cinematicQuotes![0].author}
          />
        </div>
      </section>

      {/* 4 — Village life: text-only list, no cards */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-12">
            <SectionLabel text="Village Life" />
            <SectionTitle>Six worlds within walking distance of each other.</SectionTitle>
          </div>
          <div className="grid gap-0 md:grid-cols-2">
            {data.attractions.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.06 }}
                className="flex gap-5 border-b border-[#0B192C]/8 py-7 last:border-0 md:odd:pr-10 md:even:pl-10 md:even:border-l"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-black text-white" style={{ background: C }}>
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>{a.name}</h3>
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0B192C]/40">{a.bestTime}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#0B192C]/65">{a.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Experiences: intimate 2-col storytelling */}
      <section className="bg-[#F9F9FB] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-14">
            <SectionLabel text="Experiences" />
            <SectionTitle>Six ways to be a guest, not a visitor.</SectionTitle>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {data.experiences.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.07 }} className="rounded-2xl bg-white border border-[#0B192C]/10 p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B192C]/5 px-3 py-1 text-[11px] font-semibold text-[#0B192C]/70">
                    <Clock className="h-3 w-3" /> {e.duration}
                  </span>
                  <span className="text-[10px] font-semibold text-[#0B192C]/40">{e.groupSize}</span>
                </div>
                <h3 className="text-lg font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>{e.title}</h3>
                <p className="mt-3 text-sm leading-[1.85] text-[#0B192C]/65">{e.description}</p>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C }}>
                  Book <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Culture + second image */}
      <section className="bg-[#0B192C] py-24 md:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={gallery[2].src} alt="Village culture" className="h-full w-full object-cover" />
            </motion.div>
            <div>
              <SectionLabel text="Culture & Community" invert />
              <SectionTitle invert>When that knowledge stops being practised, it disappears.</SectionTitle>
              <p className="mt-6 text-base leading-relaxed text-white/70">{data.culture}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 — Best Time: minimal horizontal */}
      <section className="bg-[#F9F9FB] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <SectionLabel text="When to Visit" />
            <SectionTitle center>Village life has its own seasons.</SectionTitle>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {data.bestTime.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="overflow-hidden rounded-2xl border border-[#0B192C]/10 bg-white">
                <div className="h-1" style={{ background: C }} />
                <div className="p-6">
                  <div className="text-sm font-black text-[#0B192C]">{b.season}</div>
                  <p className="mt-2 text-sm text-[#0B192C]/65">{b.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — FAQ + CTA */}
      <PageFAQ faqs={data.faqs} />
      <PageCTA />
    </div>
  );
}
