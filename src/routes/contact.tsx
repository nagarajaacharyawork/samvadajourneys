import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Samvada Journeys" },
      { name: "description", content: "Plan your journey with us. Call, WhatsApp, or send an enquiry — a Samvada host will get back within 12 hours." },
      { property: "og:title", content: "Contact — Samvada Journeys" },
      { property: "og:description", content: "Reach the Samvada Journeys team — call, WhatsApp, or send an enquiry." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", destination: "", date: "", travelers: "2", message: "" });
  return (
    <div>
      <section className="pt-32 pb-16" style={{ background: "var(--brand-sand)" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-terracotta)" }} />
              Say Hello
            </div>
            <h1 className="mt-5 text-balance text-5xl font-black leading-[1.05] md:text-6xl">Let's plan a journey worth remembering.</h1>
            <p className="mt-5 text-lg text-muted-foreground">A real human, usually within 12 hours, will read your message and reply personally.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_1.3fr] md:px-8">
          <div className="space-y-4">
            {[
              { icon: Phone, title: "Call Us", value: "+91 98450 12345", href: "tel:+919845012345" },
              { icon: MessageCircle, title: "WhatsApp", value: "Chat with a host", href: "https://wa.me/919845012345" },
              { icon: Mail, title: "Email", value: "hello@samvadajourneys.in", href: "mailto:hello@samvadajourneys.in" },
              { icon: MapPin, title: "Office", value: "Diana Circle, Udupi, Karnataka 576101" },
              { icon: Instagram, title: "Instagram", value: "@samvadajourneys", href: "https://instagram.com" },
            ].map((c) => {
              const inner = (
                <div className="flex items-start gap-4 rounded-3xl border border-foreground/10 bg-card p-6 transition-colors hover:border-foreground/25">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl" style={{ background: "color-mix(in oklab, var(--brand-terracotta) 12%, transparent)", color: "var(--brand-terracotta)" }}>
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">{c.title}</div>
                    <div className="mt-1 truncate text-base font-semibold">{c.value}</div>
                  </div>
                </div>
              );
              return c.href ? (
                <a key={c.title} href={c.href} target="_blank" rel="noreferrer">{inner}</a>
              ) : (
                <div key={c.title}>{inner}</div>
              );
            })}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message sent!", { description: "A Samvada host will reply within 12 hours." });
              setForm({ name: "", phone: "", email: "", destination: "", date: "", travelers: "2", message: "" });
            }}
            className="rounded-3xl border border-foreground/10 bg-card p-6 md:p-8"
          >
            <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground">Enquiry Form</div>
            <h2 className="mt-2 text-2xl font-black">Tell us about your trip.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />
              <Field label="Email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
              <Field label="Preferred Destination" value={form.destination} onChange={(v) => setForm({ ...form, destination: v })} placeholder="Udupi, Chikmagalur, Coorg…" />
              <Field label="Travel Date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} type="date" />
              <Field label="Travelers" value={form.travelers} onChange={(v) => setForm({ ...form, travelers: v })} type="number" />
            </div>
            <label className="mt-4 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-sm outline-none focus:border-foreground/30" placeholder="Tell us what kind of journey you're dreaming of…" />
            <button type="submit" className="mt-6 w-full rounded-full py-3.5 text-sm font-semibold text-primary-foreground shadow-lg" style={{ background: "var(--brand-terracotta)" }}>
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", placeholder }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input required={type !== "date"} type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-sm outline-none focus:border-foreground/30" />
    </div>
  );
}