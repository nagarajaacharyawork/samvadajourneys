import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { C, OCEAN, PageCTA, PageFAQ, PageHero, SectionLabel, SectionTitle, type DestinationData } from "@/components/site/DestinationPage";
import { ImageBannerWithQuote } from "@/components/site/DestinationPageEnhancements";
import heroImg from "@/assets/HeritageTrails.jpg";
import img1 from "@/assets/imgi_25_6772135f6e792f9e5aad99f0_471489661_512039215186411_7174681571825144467_n.webp";
import img2 from "@/assets/imgi_14_675fffd94726e2249fcad7a1_DSC03674.webp";
import img3 from "@/assets/imgi_20_67737f871ccf77fed3275d35_469479383_17892428070108648_6886044078070230829_n.webp";
import img4 from "@/assets/imgi_12_675ffe1e96ccefdef53fff51_IMG_1101-Enhanced-NR.webp";

export const Route = createFileRoute("/explore/heritage-trails")({
  head: () => ({
    meta: [
      { title: "Heritage Trails — Samvada Journeys" },
      { name: "description", content: "Walk through Karnataka's living heritage. Ancient temples, Jain monuments, sacred towns, and the stories that have shaped this land for centuries." },
      { property: "og:title", content: "Heritage Trails — Samvada Journeys" },
      { property: "og:description", content: "Walk through Karnataka's living heritage. Ancient temples, Jain monuments, sacred towns, and the stories that have shaped this land for centuries." },
      { property: "og:url", content: "https://www.samvadajourneys.in/explore/heritage-trails" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/explore/heritage-trails" }],
  }),
  component: HeritageTrails,
});

const data: DestinationData = {
  slug: "heritage-trails",
  heroImage: heroImg,
  heroTitle: "Heritage Trails",
  heroSubtitle: "Seven hundred years of unbroken tradition. Still happening. Right now.",
  eyebrow: "Explore",
  about: [
    "The morning puja at the Udupi Krishna Matha begins at 6 AM, as it has every day since the 13th century. The priest can trace his lineage back twenty-two generations to Madhvacharya. This is not a museum. This is Tuesday.",
  ],
  whyVisit: [
    "The Udupi Krishna Matha: a living tradition of scholarship and ritual unbroken since the 13th century.",
    "Moodabidri's Thousand-Pillar Basadi. 1,000 pillars, not one identical. A masterpiece of medieval stone carving.",
    "The Karkala Gomateshwara: a 13-metre monolithic statue carved from a single granite rock in 1432.",
    "Kateel Durgaparameshwari Temple. Set on a river island, surrounded by water on all sides.",
    "Yakshagana: an all-night dance-drama in gold costumes, performed in village courtyards since the 16th century.",
    "Living artisan traditions. Stone carvers, bronze casters, and traditional weavers still working in family workshops.",
  ],
  attractions: [
    { name: "Udupi Krishna Matha", description: "Founded 13th century. Seven hundred years of unbroken scholarship, music, and ritual.", bestTime: "Oct to Feb", badge: "Living Heritage" },
    { name: "Moodabidri Jain Basadis", description: "Eighteen temples within walking distance. The Thousand-Pillar Basadi. Every pillar uniquely carved.", bestTime: "Oct to Mar", badge: "Jain Heritage" },
    { name: "Karkala Gomateshwara", description: "13-metre monolithic statue of Bahubali, carved from a single granite rock in 1432.", bestTime: "Oct to Feb", badge: "Monolithic Marvel" },
    { name: "Kateel Durgaparameshwari", description: "Temple on a river island. Water on all sides, forest behind. Extraordinary at festival time.", bestTime: "Oct to Feb", badge: "Sacred Island" },
    { name: "Varanga Jain Temple", description: "Ancient temples around a sacred tank. The reflection at dawn is one of the coast's finest sights.", bestTime: "Oct to Mar", badge: "Hidden Treasure" },
    { name: "Moodabidri Artisan Quarter", description: "Family workshops casting bronze lamps and carving stone for active religious use.", bestTime: "Year Round", badge: "Living Craft" },
  ],
  experiences: [
    { title: "Krishna Matha Scholar Walk", duration: "Half Day", groupSize: "2 to 6 People", difficulty: "Easy", description: "Morning puja at 6 AM, old town lanes, and breakfast at a traditional eatery with a heritage scholar." },
    { title: "Moodabidri Jain Circuit", duration: "Full Day", groupSize: "2 to 8 People", difficulty: "Easy", description: "Thousand-Pillar Basadi with an architectural historian. Bronze workshops. Lunch with a Jain family." },
    { title: "Stone Carving Architecture Trail", duration: "Full Day", groupSize: "2 to 8 People", difficulty: "Easy", description: "Tulu-style temples to Jain basadis. A journey through the coast's architectural heritage." },
    { title: "Artisan Workshop Immersion", duration: "Half Day", groupSize: "2 to 6 People", difficulty: "Easy", description: "A morning with a stone carver, bronze caster, or traditional weaver. Techniques passed down for generations." },
    { title: "Yakshagana Night Performance", duration: "Evening", groupSize: "2 to 12 People", difficulty: "Easy", description: "Begins after 9 PM. Gold costumes, chest-felt percussion, Mahabharata stories performed through the night." },
    { title: "Sacred Heritage Circuit", duration: "2 Days", groupSize: "2 to 8 People", difficulty: "Easy", description: "Krishna Matha, Moodabidri basadis, Karkala Gomateshwara, and Kateel island temple in two days." },
  ],
  itineraries: [
    { label: "Half Day", plan: "6 AM puja at Krishna Matha. Old town walk. Breakfast. Artisan quarter. Return by noon." },
    { label: "One Day", plan: "Krishna Matha morning. Moodabidri Thousand-Pillar Basadi. Local lunch. Kateel temple at sunset." },
    { label: "Weekend", plan: "Day 1: Udupi heritage walk, Yakshagana evening. Day 2: Moodabidri, Karkala, Varanga." },
    { label: "Three Days", plan: "Day 1: Udupi. Day 2: Moodabidri and Karkala. Day 3: Varanga, Kateel, artisan immersion." },
  ],
  culture: "Yakshagana has been performed in village courtyards since the 16th century. The Bhoota Kola rituals, where a possessed performer channels a local spirit and delivers verdicts on community disputes, are not staged for visitors. They are the spiritual infrastructure of a living civilisation.",
  bestTime: [
    { season: "October to February", note: "Best months. Full temple festival calendar. Yakshagana season from November." },
    { season: "March to May", note: "Yakshagana continues. Good for temples and workshops. Fewer visitors." },
    { season: "June to September", note: "Monsoon. Outdoor activities limited. Temples are atmospheric in the rain." },
  ],
  tips: [
    "The morning puja at the Krishna Matha begins at 6 AM. Arrive by 5:45 AM to find a good position.",
    "Dress modestly for all temple visits. Shoulders and knees covered, footwear removed at the entrance.",
    "Photography inside temples is often restricted. Always ask before raising your camera.",
    "Yakshagana performances begin after 9 PM and run through the night. Bring a light jacket. The nights are cool.",
    "The artisan workshops in Moodabidri are family businesses. A purchase, however small, is a meaningful act of support.",
  ],
  stats: [
    { number: "700+", label: "Years of Krishna Matha Tradition" },
    { number: "1,000", label: "Unique Pillars at Moodabidri" },
    { number: "13 m", label: "Karkala Gomateshwara" },
    { number: "18", label: "Jain Basadis in Moodabidri" },
  ],
  cinematicQuotes: [
    { image: img1, quote: "A people without the knowledge of their past history, origin and culture is like a tree without roots.", author: "Marcus Garvey" },
    { image: img3, quote: "Heritage is not what we inherit from the past. It is what we choose to pass on.", author: "Attributed to various" },
  ],
  gallery: [
    { src: img1, alt: "Traditional Kambala buffalo race" },
    { src: img2, alt: "Ancient temple architecture" },
    { src: img3, alt: "Coastal Karnataka cultural traditions" },
    { src: img4, alt: "Heritage experience" },
  ],
  faqs: [
    { q: "Do I need to be religious to enjoy the heritage trails?", a: "Not at all. The temples and sacred sites of this region are extraordinary as architecture, as history, and as living community spaces. You don't need to share the faith to appreciate the culture." },
    { q: "Can I attend a Yakshagana performance?", a: "Yes. The Yakshagana season runs from November to May. We arrange front seats and a backstage meeting with the artists after the performance." },
    { q: "What is the Paryaya festival?", a: "The Paryaya is a biennial ceremony at the Udupi Krishna Matha in which the administration of the temple passes from one monastery to another. It is one of the most important religious events in Karnataka. The next Paryaya is in January 2028." },
    { q: "Are the artisan workshops open to visitors?", a: "Most are, with prior arrangement. We have relationships with several master craftspeople in Moodabidri who are happy to welcome visitors and explain their work." },
  ],
};

// Heritage landmark timeline card
function LandmarkRow({ index, name, description, badge, bestTime }: { index: number; name: string; description: string; badge: string; bestTime: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="grid gap-6 md:grid-cols-[80px_1fr_auto] items-start border-b border-[#0B192C]/8 pb-8 last:border-0 last:pb-0"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-black text-white" style={{ background: OCEAN, borderColor: C }}>
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="inline-block rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white" style={{ background: C }}>{badge}</span>
        </div>
        <h3 className="text-xl font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>{name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#0B192C]/65">{description}</p>
      </div>
      <div className="text-right">
        <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B192C]/40">Best Time</div>
        <div className="mt-1 text-sm font-semibold text-[#0B192C]">{bestTime}</div>
      </div>
    </motion.div>
  );
}

function HeritageTrails() {
  const gallery = data.gallery;

  return (
    <div>
      {/* 1 — Hero */}
      <PageHero data={data} />

      {/* 2 — Intro: 2-col with stats */}
      <section className="bg-[#F9F9FB] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-16 md:grid-cols-2 items-start">
            <div>
              <SectionLabel text="The Heritage" />
              <SectionTitle>Not preserved. Practised.</SectionTitle>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {data.stats!.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="rounded-2xl border border-[#0B192C]/10 bg-white p-5">
                    <div className="text-2xl font-black" style={{ color: C, fontFamily: "Fraunces, serif" }}>{s.number}</div>
                    <p className="mt-1 text-xs font-semibold text-[#0B192C]/60">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-base leading-[1.85] text-[#0B192C]/75">
                {data.about[0]}
              </motion.p>
              <ul className="space-y-2 pt-1">
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

      {/* 3 — Heritage Landmarks: vertical timeline list */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 md:px-8">
          <div className="mb-14 text-center">
            <SectionLabel text="Heritage Landmarks" />
            <SectionTitle center>Six sites. Centuries of stories.</SectionTitle>
          </div>
          <div className="space-y-8">
            {data.attractions.map((a, i) => (
              <LandmarkRow key={i} index={i} name={a.name} description={a.description} badge={a.badge!} bestTime={a.bestTime!} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — Cinematic quote */}
      <section className="px-6 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <ImageBannerWithQuote
            image={data.cinematicQuotes![0].image}
            quote={data.cinematicQuotes![0].quote}
            author={data.cinematicQuotes![0].author}
          />
        </div>
      </section>

      {/* 5 — Experiences: clean 2-col list */}
      <section className="bg-[#F9F9FB] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-14">
            <SectionLabel text="Curated Experiences" />
            <SectionTitle>How we take you inside the heritage.</SectionTitle>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {data.experiences.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.07 }} className="rounded-2xl border border-[#0B192C]/10 bg-white p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B192C]/5 px-3 py-1 text-[11px] font-semibold text-[#0B192C]/70">
                    <Clock className="h-3 w-3" /> {e.duration}
                  </span>
                </div>
                <h3 className="text-lg font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#0B192C]/65">{e.description}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C }}>
                  Book <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — Culture + image split */}
      <section className="bg-[#0B192C] py-24 md:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <SectionLabel text="Living Culture" invert />
              <SectionTitle invert>The heritage of this region is not something that happened in the past.</SectionTitle>
              <p className="mt-6 text-base leading-relaxed text-white/70">{data.culture}</p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={gallery[0].src} alt="Heritage culture" className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7 — Best Time: minimal 3-col */}
      <section className="bg-[#F9F9FB] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mb-10 text-center">
            <SectionLabel text="Best Time to Visit" />
            <SectionTitle center>Every season, a different kind of heritage.</SectionTitle>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {data.bestTime.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="overflow-hidden rounded-2xl border border-[#0B192C]/10 bg-white">
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
