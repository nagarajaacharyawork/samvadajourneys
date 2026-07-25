import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { experiences } from "@/lib/site-data";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title: "Experiences — Samvada Journeys" },
      { name: "description", content: "Seven curated ways to see India — from coastal explorer trails to coffee estate stays and corporate retreats." },
      { property: "og:title", content: "Experiences — Samvada Journeys" },
      { property: "og:description", content: "Coastal, heritage, food, waterfall, sunrise, coffee, and corporate journeys, curated with locals." },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  const [enquiry, setEnquiry] = useState<string | null>(null);
  return (
    <div>
      <section className="relative pt-32 pb-16" style={{ background: "var(--brand-sand)" }}>
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <SectionHeading eyebrow="Our Experiences" title={<>Seven doorways into hidden India.</>}>
            Every experience is designed hand-in-hand with the locals who live it. No scripts. No filler. Just the real thing.
          </SectionHeading>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map((e, i) => (
              <motion.article
                key={e.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
                className="group grid overflow-hidden rounded-3xl border border-foreground/10 bg-card md:grid-cols-[1fr_1.1fr]"
              >
                <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
                  <img src={e.image} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110" />
                </div>
                <div className="flex flex-col p-6 md:p-8">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-foreground/5 px-3 py-1 text-[11px] font-semibold text-foreground/80">
                      <Clock className="h-3 w-3" /> {e.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-foreground/5 px-3 py-1 text-[11px] font-semibold text-foreground/80">
                      <Users className="h-3 w-3" /> {e.group}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black md:text-3xl">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{e.tagline}</p>
                  <ul className="mt-5 space-y-2">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--brand-terracotta)" }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      setEnquiry(e.title);
                      toast.success("Enquiry started", { description: `Tell us your dates for ${e.title} — we'll pre-fill the rest.` });
                    }}
                    className="mt-auto inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 pt-2.5 text-sm font-semibold text-primary-foreground shadow-lg"
                    style={{ background: "var(--brand-terracotta)", marginTop: "1.5rem" }}
                  >
                    Enquire Now <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}