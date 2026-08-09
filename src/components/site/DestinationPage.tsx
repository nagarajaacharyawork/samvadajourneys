import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export type Attraction = { name: string; description: string; image?: string; bestTime?: string; badge?: string };
export type Experience = {
  title: string;
  duration: string;
  description: string;
  image?: string;
  groupSize?: string;
  difficulty?: string;
};
export type Itinerary = { label: string; plan: string };
export type FAQ = { q: string; a: string };

export interface DestinationData {
  slug: string;
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  eyebrow: string;
  about: string[];
  whyVisit: string[];
  attractions: Attraction[];
  experiences: Experience[];
  itineraries: Itinerary[];
  culture: string;
  bestTime: { season: string; note: string }[];
  tips: string[];
  gallery: { src: string; alt: string }[];
  faqs: FAQ[];
  stats?: { number: string; label: string }[];
  testimonials?: { image: string; name: string; destination: string; story: string }[];
  hiddenGems?: { image: string; name: string; description: string }[];
  nearbyDestinations?: { name: string; image: string; distance: string }[];
  latestStories?: { title: string; excerpt: string; image: string; date: string }[];
  cinematicQuotes?: { image: string; quote: string; author: string }[];
}

export const C = "#D96B43";
export const OCEAN = "#0B192C";

export function SectionLabel({ text, invert = false }: { text: string; invert?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] ${invert ? "text-white/60" : "text-[#0B192C]/60"}`}>
      <span className={`h-px w-8 ${invert ? "bg-white/30" : "bg-[#0B192C]/30"}`} />
      {text}
      <span className={`h-px w-8 ${invert ? "bg-white/30" : "bg-[#0B192C]/30"}`} />
    </div>
  );
}

export function SectionTitle({ children, invert = false, center = false }: { children: React.ReactNode; invert?: boolean; center?: boolean }) {
  return (
    <h2
      className={`text-balance text-4xl leading-[1.1] tracking-tight md:text-5xl ${invert ? "text-white" : "text-[#0B192C]"} ${center ? "text-center" : ""}`}
      style={{ fontFamily: "Fraunces, serif" }}
    >
      {children}
    </h2>
  );
}

export function PageHero({ data }: { data: Pick<DestinationData, "heroImage" | "heroTitle" | "heroSubtitle" | "eyebrow"> }) {
  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black">
      <img src={data.heroImage} alt={data.heroTitle} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-4xl">
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/70">
            <span className="h-px w-10 bg-white/40" />
            {data.eyebrow}
            <span className="h-px w-10 bg-white/40" />
          </div>
          <h1 className="text-balance text-5xl font-light leading-[1.05] tracking-tight md:text-7xl" style={{ fontFamily: "Fraunces, serif" }}>
            {data.heroTitle}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base italic text-white/80 md:text-lg" style={{ fontFamily: "Fraunces, serif" }}>
            {data.heroSubtitle}
          </p>
          <div className="mt-10">
            <Link to="/contact" className="border border-white/40 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B192C]">
              Plan Your Journey
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function PageFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="bg-[#F9F9FB] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="mb-12 text-center">
          <SectionLabel text="Frequently Asked Questions" />
          <SectionTitle>Answers to what travellers ask most.</SectionTitle>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-[#0B192C]/10 bg-white">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left">
                <span className="text-sm font-bold text-[#0B192C]">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-[#0B192C]/50 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-6 pb-5 text-sm leading-relaxed text-[#0B192C]/65">{faq.a}</div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PageCTA() {
  return (
    <section className="py-24 md:py-32" style={{ background: OCEAN }}>
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
          <span className="h-px w-8 bg-white/30" />
          Ready to Go
          <span className="h-px w-8 bg-white/30" />
        </div>
        <h2 className="text-balance text-4xl leading-[1.1] tracking-tight text-white md:text-5xl" style={{ fontFamily: "Fraunces, serif" }}>
          Your journey into <em className="italic font-light">real India</em> starts here.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-white/65">
          Tell us when you want to travel and we'll craft something worth remembering. A real person will reply within 12 hours.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="border border-white/40 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B192C]">
            Plan Your Journey
          </Link>
          <Link to="/experiences" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white/70 hover:text-white">
            View All Experiences <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Legacy export — route files that still import DestinationPage will get a no-op wrapper
// Each page now uses its own bespoke component instead
export function DestinationPage(_: { data: DestinationData }) {
  return null;
}
