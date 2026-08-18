import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Samvada Journeys" },
      { name: "description", content: "Frequently asked questions about Samvada Journeys — booking, group sizes, what to expect, safety, and more." },
      { property: "og:title", content: "FAQs — Samvada Journeys" },
      { property: "og:description", content: "Everything you need to know before you travel with Samvada Journeys." },
      { property: "og:url", content: "https://www.samvadajourneys.in/faqs" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/faqs" }],
  }),
  component: FAQsPage,
});

const C = "#D96B43";
const OCEAN = "#0B192C";

const sections = [
  {
    id: "booking",
    label: "Booking & Reservations",
    faqs: [
      { q: "How do I book a trip with Samvada?", a: "Send us an enquiry through the Contact page with your dates, group size, and interests. A Samvada host will reply personally within 12 hours with availability, a rough plan, and pricing. We don't use automated booking systems — every trip starts with a real conversation." },
      { q: "How far in advance should I book?", a: "For weekend trips and day experiences, two to three weeks in advance is usually sufficient. For multi-day journeys, coffee estate stays, and festival specials, we recommend booking four to six weeks ahead. Corporate retreats and large group trips need at least six to eight weeks." },
      { q: "Can I book for a single day or just a few hours?", a: "Yes. Many of our experiences are half-day or full-day. You don't need to book a multi-day package to travel with us. A single morning at the harbour or a three-hour heritage walk is a complete experience in itself." },
      { q: "Do you offer gift bookings?", a: "Yes. We can arrange a gift experience for someone else — a couple's sunrise boat ride, a family village day, or a solo food trail. Contact us with the details and we'll handle the rest." },
    ],
  },
  {
    id: "groups",
    label: "Group Sizes & Customisation",
    faqs: [
      { q: "What is the maximum group size?", a: "Our standard small-group experiences are capped at 12 people. This is deliberate — small groups go places a bus cannot, and the quality of the experience is directly tied to the size of the group. For corporate retreats and private events, we can accommodate larger groups with a customised format." },
      { q: "Can I travel as a solo person?", a: "Absolutely. We welcome solo travellers and can match you to a small group departure where the chemistry is right. We also design solo-specific experiences — see our Solo Travel page for details." },
      { q: "Can I customise an existing itinerary?", a: "Every itinerary we offer is a starting point, not a fixed product. Tell us what you want to change — pace, focus, duration, accommodation level — and we'll rebuild it around your preferences." },
      { q: "Do you cater to specific dietary requirements?", a: "Yes. Coastal Karnataka has an extraordinary range of vegetarian, vegan, and seafood options. Let us know your requirements when you book and we'll ensure every meal is appropriate. We can also accommodate most allergies with advance notice." },
    ],
  },
  {
    id: "experiences",
    label: "What to Expect",
    faqs: [
      { q: "Are your experiences suitable for children?", a: "Many of our experiences are excellent for children — village walks, boat rides, cooking sessions, and farm immersions are all child-friendly. Some treks and late-night cultural events are better suited to older children and adults. We'll advise you on what's appropriate for your family's ages and interests." },
      { q: "Are your experiences suitable for older travellers?", a: "Yes. We design experiences for all fitness levels. Village walks, heritage tours, estate visits, and cooking sessions require no physical exertion. We'll always ask about mobility and fitness when you enquire so we can match the experience to your group." },
      { q: "What languages do your guides speak?", a: "All our guides speak English and Kannada. Most also speak Tulu and Hindi. For village experiences, our guides translate from Tulu and Kannada — the language barrier is rarely an obstacle, and hospitality communicates across all of them." },
      { q: "Will I be with other tourists?", a: "On our small-group departures, yes — you'll be with a small group of like-minded travellers. On private bookings, you'll have the experience entirely to yourselves. We'll always be clear about which format you're booking." },
    ],
  },
  {
    id: "practical",
    label: "Practical Information",
    faqs: [
      { q: "What should I wear?", a: "Light, breathable clothing in neutral colours for most experiences. Covered shoulders and knees for temple visits. Sturdy closed-toe shoes for treks. A light rain jacket is useful year-round in the Ghats. We'll send a specific packing list with your booking confirmation." },
      { q: "Is it safe to travel in coastal Karnataka?", a: "Coastal Karnataka is one of the safer regions in India for travellers. Our guides are vetted, our routes are well-established, and we maintain relationships with local emergency services. Read our Travel Safety page for detailed information on beaches, treks, and weather." },
      { q: "What is the best time of year to visit?", a: "October to February is the most comfortable — cool, dry, and with the full festival calendar active. March to May is warmer but quieter. June to September is monsoon — the landscape is extraordinary but some outdoor activities are limited. Each season has its own character." },
      { q: "Do I need travel insurance?", a: "We strongly recommend comprehensive travel insurance that covers outdoor activities, medical evacuation, and trip cancellation. We can recommend providers if you need guidance." },
    ],
  },
  {
    id: "payments",
    label: "Payments & Cancellations",
    faqs: [
      { q: "How does payment work?", a: "We take a 30% deposit to confirm your booking, with the balance due seven days before the trip. We accept bank transfer, UPI, and major credit cards. Full payment details are provided with your booking confirmation." },
      { q: "What is your cancellation policy?", a: "Cancellations made more than 14 days before the trip receive a full refund of the deposit. Cancellations between 7 and 14 days receive a 50% refund. Cancellations within 7 days are non-refundable, but we will always try to reschedule where possible. See our Booking Policy page for full details." },
      { q: "What happens if Samvada cancels a trip?", a: "In the rare event that we need to cancel — due to weather, safety concerns, or circumstances beyond our control — you will receive a full refund or the option to reschedule at no additional cost." },
      { q: "Can I pay in foreign currency?", a: "Our prices are in Indian Rupees. International bank transfers are accepted and we'll provide the necessary details. Currency conversion is handled by your bank." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-[#0B192C]/10 last:border-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-bold text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>{q}</span>
        <ChevronDown
          className={`mt-0.5 h-5 w-5 shrink-0 transition-transform text-[#0B192C]/40 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-[#0B192C]/65">{a}</p>
      )}
    </motion.div>
  );
}

function FAQsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
            <span className="h-px w-8 bg-white/30" />
            Frequently Asked Questions
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h1
            className="mx-auto max-w-3xl text-balance text-5xl leading-[1.05] tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Everything you need to know{" "}
            <em className="italic font-light">before you go.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/65">
            Can't find what you're looking for? Write to us directly — a real person will reply within 12 hours.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/80 transition-colors hover:bg-white hover:text-[#0B192C]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ sections */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-[#F9F9FB]" : "bg-white"}`}
        >
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <div className="mb-8">
              <div className="text-[10px] font-bold uppercase tracking-[0.32em] mb-2" style={{ color: C }}>
                {s.label}
              </div>
              <h2
                className="text-2xl font-black text-[#0B192C] md:text-3xl"
                style={{ fontFamily: "Fraunces, serif" }}
              >
                {s.label}
              </h2>
            </div>
            <div>
              {s.faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
            <span className="h-px w-8 bg-white/30" />
            Still Have Questions?
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h2
            className="text-balance text-4xl leading-[1.1] tracking-tight text-white md:text-5xl"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Ask us directly.{" "}
            <em className="italic font-light">We reply within 12 hours.</em>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="border border-white/40 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B192C]"
            >
              Get in Touch
            </Link>
            <Link
              to="/booking-policy"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white/70 hover:text-white"
            >
              View Booking Policy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
