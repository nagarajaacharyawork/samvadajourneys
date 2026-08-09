import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { C, OCEAN, PageCTA, PageFAQ, PageHero, SectionLabel, SectionTitle, type DestinationData } from "@/components/site/DestinationPage";
import { ImageBannerWithQuote } from "@/components/site/DestinationPageEnhancements";
import heroImg from "@/assets/Hidden Villages.jpeg";
import img1 from "@/assets/imgi_22_677216968747c3a89492ff89_Moode Idli  kotte Kadubu.webp";
import img2 from "@/assets/imgi_12_675ffe1e96ccefdef53fff51_IMG_1101-Enhanced-NR.webp";
import img3 from "@/assets/imgi_25_6772135f6e792f9e5aad99f0_471489661_512039215186411_7174681571825144467_n.webp";
import img4 from "@/assets/imgi_14_675fffd94726e2249fcad7a1_DSC03674.webp";

export const Route = createFileRoute("/explore/hidden-villages")({
  head: () => ({
    meta: [
      { title: "Hidden Villages — Samvada Journeys" },
      { name: "description", content: "Discover the villages beyond the tourist trail. Traditional life, local artisans, village cuisine, and the quiet rhythms of rural coastal Karnataka." },
    ],
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
    "Sumitra has been making Moode Idli since 4 AM. She wraps rice batter in screw pine leaves and stacks them over a wood fire. She has done this every morning for forty years. She is not doing it for tourists.",
  ],
  whyVisit: [
    "Moode Idli and Kotte Kadubu. Village breakfast dishes that no restaurant in the world can replicate.",
    "Paddy farming traditions unchanged for centuries, still practised by hand in flooded fields.",
    "Handloom weaving on traditional pit looms. Fabrics made for local use, not export.",
    "Spice gardens where pepper, cardamom, and areca palm grow together in a living pantry.",
    "Homestay hospitality that is genuine, not commercial. Meals cooked on wood fire, evenings on the veranda.",
    "Direct economic contribution to communities that benefit from thoughtful, small-scale tourism.",
  ],
  attractions: [
    { name: "Paddy Village Walks", description: "Flooded terraces that mirror the sky, worked by hand from planting to harvest.", bestTime: "Jun to Feb", badge: "Agricultural Heritage" },
    { name: "Fishing Community Life", description: "Boat-building yards, net-mending circles, fish-drying racks. An economy organised around the sea.", bestTime: "Oct to Feb", badge: "Living Economy" },
    { name: "Handloom Weaving Villages", description: "Traditional pit looms producing fabrics sold locally and used in temple rituals.", bestTime: "Year Round", badge: "Textile Tradition" },
    { name: "Spice Garden Trails", description: "Pepper, cardamom, turmeric, ginger. A walk through a working spice garden with the farmer.", bestTime: "Oct to Feb", badge: "Spice Country" },
    { name: "Village Sacred Geography", description: "Shrines, sacred trees, and ritual spaces that map the spiritual life of each community.", bestTime: "Year Round", badge: "Sacred Spaces" },
    { name: "Traditional Village Kitchens", description: "Wood-fired stoves, stone grinders, clay pots. Recipes that exist nowhere in writing.", bestTime: "Year Round", badge: "Culinary Heritage" },
  ],
  experiences: [
    { title: "Village Morning Walk", duration: "3 Hours", groupSize: "2 to 6 People", difficulty: "Easy", description: "Paddy fields at dawn, the crossroads shrine, the elder on the veranda. A conversation with a place." },
    { title: "Farm Immersion", duration: "Half Day", groupSize: "2 to 6 People", difficulty: "Easy", description: "A morning on a working paddy, coconut, or spice farm. Plant, weed, carry. Leave with a different understanding of food." },
    { title: "Village Kitchen Session", duration: "Half Day", groupSize: "2 to 6 People", difficulty: "Easy", description: "Moode Idli in screw pine leaves, Kotte Kadubu in jackfruit leaves, fish curry in a clay pot on stone-ground coconut." },
    { title: "Craft Workshop", duration: "Half Day", groupSize: "2 to 6 People", difficulty: "Easy", description: "Weaver, potter, or coir worker. Make something with your hands. The object you take home will mean more than anything you could buy." },
    { title: "Village Homestay", duration: "1 to 2 Nights", groupSize: "2 to 4 People", difficulty: "Easy", description: "Wood-fire meals, veranda evenings, mornings before sunrise. Living at the pace of the family." },
    { title: "Cultural Evening", duration: "3 Hours", groupSize: "2 to 12 People", difficulty: "Easy", description: "Bhoota Kola observed from a respectful distance, Yakshagana in a village courtyard, or a fire with the elders." },
  ],
  itineraries: [
    { label: "Half Day", plan: "Village walk. Traditional kitchen. Moode Idli breakfast with the family. Paddy fields. Return by noon." },
    { label: "One Day", plan: "Farm experience. Village walk. Cooking session. Home lunch. Craft workshop. Spice garden." },
    { label: "Weekend", plan: "Day 1: Village walk, farm, veranda dinner. Day 2: Cooking, craft workshop, cultural evening." },
    { label: "Three Days", plan: "Day 1: Village and farm. Day 2: Cooking, craft, spice garden. Day 3: Fishing village, sacred walk, cultural evening." },
  ],
  culture: "The culture of these villages lives in food, festivals, and the sacred. The elders carry knowledge of land, sea, and plants accumulated over generations, passed on through practice and story, never written down. Samvada's work is, in part, about making sure it doesn't disappear.",
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
    { number: "4 AM", label: "When the Kitchen Starts" },
    { number: "3 Gen", label: "Average Recipe Age" },
    { number: "100%", label: "Direct to Community" },
  ],
  cinematicQuotes: [
    { image: img1, quote: "To know a cuisine is to know a people. To cook with them is to become, briefly, one of them.", author: "Attributed to various" },
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
    { q: "What is Moode Idli?", a: "Moode Idli is a traditional coastal Karnataka breakfast. Rice batter fermented overnight and steamed inside screw pine leaves, which give it a distinctive flavour and aroma. You cannot find it in restaurants. It exists only in village kitchens." },
    { q: "How does Samvada ensure that village tourism benefits the community?", a: "We pay our village hosts directly and fairly. No intermediaries, no commission structures. We work with communities to ensure that the tourism we bring is on their terms and at a scale they are comfortable with." },
    { q: "Can I participate in a Bhoota Kola ritual?", a: "Bhoota Kola rituals are community events, not tourist performances. In some cases, visitors are welcome to observe from a respectful distance. We always check with the community before making any arrangements." },
  ],
};

function HiddenVillages() {
  const gallery = data.gallery;

  return (
    <div>
      {/* 1 — Hero */}
      <PageHero data={data} />

      {/* 2 — Opening story: full-width editorial, image right */}
      <section className="bg-[#F9F9FB] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-16 md:grid-cols-[3fr_2fr] items-start">
            <div>
              <SectionLabel text="The Story" />
              <SectionTitle>A guest, not a tourist. The difference is everything.</SectionTitle>
              <div className="mt-8 space-y-5">
                <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-base leading-[1.9] text-[#0B192C]/75">
                  {data.about[0]}
                </motion.p>
                <ul className="space-y-2">
                  {data.whyVisit.map((w, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3 text-sm text-[#0B192C]/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: C }} />
                      {w}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-4 md:pt-16">
              <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-[3/4] overflow-hidden rounded-2xl">
                <img src={gallery[0].src} alt="Village kitchen" className="h-full w-full object-cover" />
              </motion.div>
              {/* Stats as minimal text list */}
              <div className="grid grid-cols-2 gap-3">
                {data.stats!.map((s, i) => (
                  <div key={i} className="rounded-xl border border-[#0B192C]/10 bg-white p-4 text-center">
                    <div className="text-xl font-black" style={{ color: C, fontFamily: "Fraunces, serif" }}>{s.number}</div>
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
