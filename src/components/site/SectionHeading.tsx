import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/70">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand-terracotta)" }} />
          {eyebrow}
        </div>
      )}
      <h2 className="text-balance text-4xl font-black leading-[1.05] md:text-5xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{children}</p>}
    </motion.div>
  );
}