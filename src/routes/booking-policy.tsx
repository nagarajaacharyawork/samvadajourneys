import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CreditCard, RefreshCw, Users, AlertCircle, Clock, Shield } from "lucide-react";

export const Route = createFileRoute("/booking-policy")({
  head: () => ({
    meta: [
      { title: "Booking Policy — Samvada Journeys" },
      { name: "description", content: "Samvada Journeys booking policy — deposits, cancellations, refunds, group bookings, and what happens when plans change." },
      { property: "og:title", content: "Booking Policy — Samvada Journeys" },
      { property: "og:description", content: "Clear, fair booking terms for all Samvada Journeys experiences and trips." },
      { property: "og:url", content: "https://www.samvadajourneys.in/booking-policy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.samvadajourneys.in/booking-policy" }],
  }),
  component: BookingPolicyPage,
});

const C = "#D96B43";
const OCEAN = "#0B192C";

const sections = [
  {
    id: "confirmation",
    icon: Clock,
    label: "Booking Confirmation",
    title: "How a booking becomes confirmed.",
    points: [
      "A booking is confirmed only after we have received your deposit and sent you a written confirmation by email.",
      "Until you receive that confirmation, your dates are not held. We recommend completing payment promptly after agreeing on a plan.",
      "Your confirmation email will include the full itinerary, meeting point, guide contact, packing list, and emergency numbers.",
      "If you do not receive a confirmation within 24 hours of making payment, contact us immediately at hello@samvadajourneys.in.",
    ],
  },
  {
    id: "deposits",
    icon: CreditCard,
    label: "Deposits & Payments",
    title: "Simple, transparent payment terms.",
    points: [
      "A 30% deposit is required to confirm your booking. The remaining 70% is due seven days before the trip start date.",
      "For bookings made within seven days of the trip, full payment is required at the time of booking.",
      "We accept UPI, bank transfer (NEFT/IMPS/RTGS), and major credit and debit cards. Payment details are provided with your booking confirmation.",
      "All prices are in Indian Rupees and inclusive of GST unless otherwise stated.",
      "International payments are accepted via bank transfer. Currency conversion is handled by your bank at the prevailing rate.",
    ],
  },
  {
    id: "cancellations",
    icon: RefreshCw,
    label: "Cancellations & Refunds",
    title: "What happens when plans change.",
    points: [
      "Cancellations made 14 or more days before the trip start date: full refund of the deposit.",
      "Cancellations made 7 to 13 days before the trip start date: 50% refund of the deposit.",
      "Cancellations made within 7 days of the trip start date: no refund. We will always try to reschedule where possible.",
      "The balance payment (70%) is fully refundable if cancelled 14 or more days before the trip. Within 14 days, the balance is non-refundable.",
      "To cancel, email us at hello@samvadajourneys.in with your booking reference. Cancellations are effective from the date we receive your email.",
      "We strongly recommend travel insurance that covers trip cancellation. We can suggest providers on request.",
    ],
  },
  {
    id: "samvada-cancels",
    icon: AlertCircle,
    label: "If We Cancel",
    title: "Our commitment when circumstances change.",
    points: [
      "In the rare event that Samvada needs to cancel a trip — due to severe weather, safety concerns, or circumstances beyond our control — you will receive a full refund of all payments made.",
      "We will notify you as early as possible and offer the option to reschedule at no additional cost.",
      "We monitor weather and safety conditions actively and will always prioritise your safety over the trip proceeding.",
      "Force majeure events (natural disasters, government restrictions, civil unrest) are handled on a case-by-case basis. We will always work to find a fair resolution.",
    ],
  },
  {
    id: "groups",
    icon: Users,
    label: "Group Bookings",
    title: "Booking for multiple people.",
    points: [
      "For groups of six or more, a 40% deposit is required to confirm the booking.",
      "One person may book on behalf of a group. That person is responsible for collecting payments from other group members and is the primary contact for the booking.",
      "If the group size reduces after confirmation, the per-person price may increase. We will notify you of any price adjustment before it takes effect.",
      "Corporate and team bookings have separate terms. Please contact us directly for corporate retreat pricing and cancellation policies.",
      "Private group bookings (where you have taken all available spots) are non-transferable to other dates without prior agreement.",
    ],
  },
  {
    id: "changes",
    icon: Shield,
    label: "Changes & Amendments",
    title: "Adjusting your booking after confirmation.",
    points: [
      "Date changes are subject to availability and must be requested at least seven days before the original trip date.",
      "One date change per booking is free of charge. Subsequent changes may incur an administrative fee of ₹500.",
      "Changes to group size, itinerary, or accommodation are handled on a case-by-case basis. Contact us as early as possible.",
      "We reserve the right to make minor adjustments to itineraries due to weather, local conditions, or safety considerations. We will always notify you in advance where possible.",
    ],
  },
];

function BookingPolicyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-16" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
            <span className="h-px w-8 bg-white/30" />
            Booking Policy
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h1
            className="mx-auto max-w-3xl text-balance text-5xl leading-[1.05] tracking-tight text-white md:text-6xl"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Clear terms.{" "}
            <em className="italic font-light">No surprises.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-white/65">
            We believe in straightforward, fair booking terms. Everything you need to know about deposits, cancellations, and what happens when plans change.
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

      {/* Policy sections */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-16 md:py-20 ${i % 2 === 0 ? "bg-[#F9F9FB]" : "bg-white"}`}
        >
          <div className="mx-auto max-w-4xl px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl"
                  style={{ background: `color-mix(in oklab, ${C} 12%, transparent)`, color: C }}
                >
                  <s.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.32em] mb-1" style={{ color: C }}>
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
              <ul className="space-y-3">
                {s.points.map((point, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.04 }}
                    className="flex items-start gap-4 rounded-xl border border-[#0B192C]/8 bg-white p-4"
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: C }} />
                    <p className="text-sm leading-relaxed text-[#0B192C]/75">{point}</p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 md:py-28" style={{ background: OCEAN }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.45em] text-white/60">
            <span className="h-px w-8 bg-white/30" />
            Ready to Book?
            <span className="h-px w-8 bg-white/30" />
          </div>
          <h2
            className="text-balance text-4xl leading-[1.1] tracking-tight text-white md:text-5xl"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            Questions about a booking?{" "}
            <em className="italic font-light">Just ask.</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/65">
            A real person will reply within 12 hours. No bots, no automated responses.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="border border-white/40 bg-white/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.28em] text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B192C]"
            >
              Contact Us
            </Link>
            <Link
              to="/faqs"
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em] text-white/70 hover:text-white"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
