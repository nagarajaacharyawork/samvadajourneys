import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, MapPin, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trips } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/trips")({
  head: () => ({
    meta: [
      { title: "Upcoming Trips — Samvada Journeys" },
      { name: "description", content: "Reserve your seat on our next curated small-group journeys across coastal Karnataka and the Western Ghats." },
      { property: "og:title", content: "Upcoming Trips — Samvada Journeys" },
      { property: "og:description", content: "Weekenders, food trails, waterfall treks, coffee estate stays, festival specials." },
    ],
  }),
  component: TripsPage,
});

const cats = ["All", "Weekend Explorer", "Food Trails", "Waterfall Treks", "Heritage Walks", "Sunrise", "Coffee Estates", "Festival Special"];

function TripsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [reserving, setReserving] = useState<string | null>(null);
  const filtered = trips.filter((t) => (cat === "All" || t.category === cat) && (t.title.toLowerCase().includes(q.toLowerCase()) || t.from.toLowerCase().includes(q.toLowerCase())));

  return (
    <div>
      <section className="pt-32 pb-12" style={{ background: "var(--brand-sand)" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading eyebrow="Upcoming Trips" title={<>Reserve your seat on the next journey.</>}>
            Small groups. Real hosts. Genuine India. Filter by category or search for what you love.
          </SectionHeading>

          <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-foreground/10 bg-card p-4 md:flex-row md:items-center">
            <div className="flex items-center gap-2 flex-1 rounded-xl bg-foreground/5 px-4 py-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search trips or departure city…"
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${cat === c ? "text-white" : "bg-foreground/5 text-foreground/70 hover:bg-foreground/10"}`}
                  style={cat === c ? { background: "var(--brand-ocean)" } : {}}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t, i) => (
              <motion.article
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.45 }}
                className="overflow-hidden rounded-3xl border border-foreground/10 bg-card"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={t.image} alt={t.title} loading="lazy" className="h-full w-full object-cover" />
                  <span className="absolute right-3 top-3 rounded-full px-3 py-1 text-[11px] font-bold text-white" style={{ background: "var(--brand-terracotta)" }}>
                    {t.spots} seats left
                  </span>
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{t.category}</div>
                  <div className="mt-1.5 text-lg font-bold">{t.title}</div>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{t.date}</span>
                    <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{t.from}</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-muted-foreground">From</div>
                      <div className="text-xl font-black">{t.price}</div>
                    </div>
                    <button
                      onClick={() => setReserving(t.id)}
                      className="rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground"
                      style={{ background: "var(--brand-terracotta)" }}
                    >
                      Reserve Seat
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full rounded-2xl border border-dashed border-foreground/15 py-16 text-center text-sm text-muted-foreground">
                No trips match your filters. Try clearing them.
              </div>
            )}
          </div>
        </div>
      </section>

      {reserving && (
        <ReserveModal
          trip={trips.find((t) => t.id === reserving)!}
          onClose={() => setReserving(null)}
          onSubmit={() => {
            setReserving(null);
            toast.success("Seat reserved!", { description: "Our host will call within 12 hours to confirm details." });
          }}
        />
      )}
    </div>
  );
}

function ReserveModal({ trip, onClose, onSubmit }: { trip: (typeof trips)[number]; onClose: () => void; onSubmit: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4" onClick={onClose}>
      <motion.form
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="w-full max-w-md rounded-3xl bg-card p-6 shadow-2xl"
      >
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Reserve Seat</div>
        <div className="mt-1 text-xl font-black">{trip.title}</div>
        <div className="mt-1 text-xs text-muted-foreground">{trip.date} {trip.from}</div>
        <div className="mt-5 grid gap-3">
          <input required placeholder="Your name" className="rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm outline-none focus:border-foreground/30" />
          <input required type="tel" placeholder="Phone number" className="rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm outline-none focus:border-foreground/30" />
          <input required type="email" placeholder="Email" className="rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm outline-none focus:border-foreground/30" />
          <input required type="number" min={1} max={10} defaultValue={2} placeholder="Travelers" className="rounded-xl border border-foreground/10 bg-foreground/5 px-4 py-3 text-sm outline-none focus:border-foreground/30" />
        </div>
        <button type="submit" className="mt-5 w-full rounded-full py-3 text-sm font-semibold text-primary-foreground" style={{ background: "var(--brand-terracotta)" }}>
          Confirm Reservation
        </button>
        <button type="button" onClick={onClose} className="mt-2 w-full rounded-full py-2.5 text-sm font-medium text-muted-foreground">
          Cancel
        </button>
      </motion.form>
    </div>
  );
}