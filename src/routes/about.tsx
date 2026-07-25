import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Camera, Compass, HeartHandshake, Shield, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About & Partner With Us — Samvada Journeys" },
      { name: "description", content: "The story behind Samvada Journeys and how homestays, cafés, and local operators can partner with us." },
      { property: "og:title", content: "About & Partner With Us — Samvada Journeys" },
      { property: "og:description", content: "Community-driven, entrepreneur-led experiential travel across India." },
    ],
  }),
  component: AboutPage,
});

const whyUs = [
  { icon: Compass, title: "Curated Experiences", body: "Every journey handcrafted, not templated." },
  { icon: Users, title: "Local Experts", body: "Hosts who were born here — not hired to sound like it." },
  { icon: Shield, title: "Safe & Well-Planned", body: "Vetted stays, licensed transport, 24/7 on-ground support." },
  { icon: Sparkles, title: "Authentic Culture", body: "Real Tulu, real Yakshagana, real filter kaapi." },
  { icon: HeartHandshake, title: "Community-Driven", body: "Fair pay to every host. No exploitation. Ever." },
  { icon: Camera, title: "Professional Photography", body: "Come home with photos that actually look like you." },
];

const partnerTypes = [
  "Homestays", "Resorts", "Cafés", "Restaurants", "Adventure Operators", "Local Entrepreneurs", "Cultural Performers", "Tourism Partners",
];

function AboutPage() {
  const [form, setForm] = useState({ type: partnerTypes[0], business: "", contact: "", phone: "", email: "", proposal: "" });
  return (
    <div>
      <section className="pt-32 pb-16" style={{ background: "var(--brand-sand)" }}>
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:px-8">
          <SectionHeading eyebrow="Our Story" title={<>We started Samvada to fix the way India is travelled.</>}>
            We were tired of ticking boxes. Tired of watching the real India — the one where filter kaapi is made by hand and stories are told at 4 AM — get flattened into another tour bus stop. So we built something different: entrepreneur-led, community-first, uncompromisingly local.
          </SectionHeading>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-foreground/10 bg-card p-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Mission</div>
            <p className="mt-4 text-xl font-medium leading-relaxed">
              To connect every curious traveler with the person, place, and story behind the postcard — and to make sure the local benefits more than the outsider.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-foreground/10 pt-6">
              {[["120+", "Local Hosts"], ["18", "Districts"], ["100%", "Fair Pay"]].map(([n, l]) => (
                <div key={l as string}>
                  <div className="text-2xl font-black">{n}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading eyebrow="Why Travel With Us" title={<>Six reasons travelers keep coming back.</>} align="center" />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="rounded-3xl border border-foreground/10 bg-card p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: "color-mix(in oklab, var(--brand-emerald) 12%, transparent)", color: "var(--brand-emerald)" }}>
                  <f.icon className="h-5 w-5" />
                </span>
                <div className="mt-5 text-lg font-bold">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ background: "var(--brand-ocean)", color: "#F7F4EF" }}>
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-terracotta)" }} />
              Partner With Us
            </div>
            <h2 className="mt-5 text-balance text-4xl font-black leading-[1.05] md:text-5xl">Let's build the new way to travel India — together.</h2>
            <p className="mt-5 text-base leading-relaxed opacity-85">
              Whether you run a homestay in Coorg, a fisherman's café in Malpe, or a cultural troupe in coastal Karnataka — we'd love to work with you.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {partnerTypes.map((p) => (
                <span key={p} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold">{p}</span>
              ))}
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Application received", { description: "Our partnerships team will reach out within 48 hours." });
              setForm({ type: partnerTypes[0], business: "", contact: "", phone: "", email: "", proposal: "" });
            }}
            className="rounded-3xl bg-white/5 p-6 backdrop-blur border border-white/10 md:p-8"
          >
            <label className="block text-xs font-semibold uppercase tracking-widest opacity-80">Partner Type</label>
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none">
              {partnerTypes.map((p) => <option key={p} className="text-foreground">{p}</option>)}
            </select>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Input label="Business Name" value={form.business} onChange={(v) => setForm({ ...form, business: v })} />
              <Input label="Contact Person" value={form.contact} onChange={(v) => setForm({ ...form, contact: v })} />
              <Input label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />
              <Input label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
            </div>
            <label className="mt-4 block text-xs font-semibold uppercase tracking-widest opacity-80">Proposal Details</label>
            <textarea required rows={4} value={form.proposal} onChange={(e) => setForm({ ...form, proposal: e.target.value })} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none" placeholder="Tell us about your business and what you'd like to co-create…" />
            <button type="submit" className="mt-5 w-full rounded-full py-3 text-sm font-semibold text-white" style={{ background: "var(--brand-terracotta)" }}>
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Input({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest opacity-80">{label}</label>
      <input required type={type} value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none" />
    </div>
  );
}