import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

const C = "#D96B43";

// Image + Text Alternating Section
export function ImageTextSection({
  image,
  title,
  text,
  imagePosition = "left",
}: {
  image: string;
  title: string;
  text: string;
  imagePosition?: "left" | "right";
}) {
  const imageCol = (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="aspect-[4/5] overflow-hidden rounded-2xl"
    >
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </motion.div>
  );

  const textCol = (
    <div className="flex flex-col justify-center">
      {title && (
        <h3 className="text-3xl font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
          {title}
        </h3>
      )}
      <p className={`${title ? "mt-4" : ""} text-base leading-relaxed text-[#0B192C]/75`}>{text}</p>
    </div>
  );

  return (
    <div className="grid gap-8 md:grid-cols-2 items-center">
      {imagePosition === "left" ? (
        <>
          {imageCol}
          {textCol}
        </>
      ) : (
        <>
          {textCol}
          {imageCol}
        </>
      )}
    </div>
  );
}

// Full-width Image Banner with Quote
export function ImageBannerWithQuote({ image, quote, author }: { image: string; quote: string; author: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative h-96 w-full overflow-hidden rounded-2xl"
    >
      <img src={image} alt="Banner" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
        <p className="max-w-2xl text-2xl italic leading-relaxed" style={{ fontFamily: "Fraunces, serif" }}>
          "{quote}"
        </p>
        <p className="mt-4 text-sm text-white/70">— {author}</p>
      </div>
    </motion.div>
  );
}

// Premium Destination Card
export function DestinationCard({
  image,
  name,
  description,
  bestTime,
  badge,
}: {
  image: string;
  name: string;
  description: string;
  bestTime: string;
  badge: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-2xl border border-[#0B192C]/10 bg-white"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-200">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B192C]">
            {badge}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
          {name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#0B192C]/70">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold text-[#0B192C]/60">Best: {bestTime}</span>
          <Link to="/contact" className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: C }}>
            Learn More <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// Premium Experience Card
export function ExperienceCard({
  image,
  title,
  duration,
  groupSize,
  difficulty,
  summary,
}: {
  image: string;
  title: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  summary: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-[#0B192C]/10 bg-white"
    >
      <div className="aspect-video overflow-hidden bg-gray-200">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
          {title}
        </h3>
        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-[#0B192C]/10 pt-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B192C]/60">Duration</div>
            <div className="mt-1 text-sm font-semibold text-[#0B192C]">{duration}</div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B192C]/60">Group Size</div>
            <div className="mt-1 text-sm font-semibold text-[#0B192C]">{groupSize}</div>
          </div>
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0B192C]/60">Difficulty</div>
            <div className="mt-1 text-sm font-semibold text-[#0B192C]">{difficulty}</div>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-[#0B192C]/70">{summary}</p>
        <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C }}>
          Book Experience <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.div>
  );
}

// Masonry Gallery
export function MasonryGallery({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
      {images.map((img, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: (i % 4) * 0.05 }}
          className={`group overflow-hidden rounded-2xl ${i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
        >
          <div className={`${i % 5 === 0 ? "aspect-square" : "aspect-[4/5]"} overflow-hidden bg-gray-200`}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Visual Timeline
export function VisualTimeline({
  itineraries,
}: {
  itineraries: { label: string; plan: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {itineraries.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="relative"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30" style={{ background: C }}>
                <span className="text-xs font-bold">{i + 1}</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.32em]">{it.label}</div>
            </div>
            <p className="text-sm leading-relaxed text-white/75">{it.plan}</p>
          </div>
          {i < itineraries.length - 1 && (
            <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-white/20 lg:block" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

// Statistics Section
export function StatisticsSection({
  stats,
}: {
  stats: { number: string; label: string }[];
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="text-center"
        >
          <div className="text-4xl font-black md:text-5xl" style={{ color: C, fontFamily: "Fraunces, serif" }}>
            {stat.number}
          </div>
          <p className="mt-2 text-sm font-semibold text-[#0B192C]/70">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

// Horizontal Scrolling Section
export function HorizontalScrollSection({
  title,
  cards,
}: {
  title: string;
  cards: { image: string; name: string; description: string }[];
}) {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
        {title}
      </h3>
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex-shrink-0 w-80 overflow-hidden rounded-2xl border border-[#0B192C]/10 bg-white"
          >
            <div className="aspect-video overflow-hidden bg-gray-200">
              <img src={card.image} alt={card.name} className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <h4 className="font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
                {card.name}
              </h4>
              <p className="mt-2 text-sm text-[#0B192C]/70">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Traveller Story Card
export function TravellerStoryCard({
  image,
  name,
  destination,
  story,
}: {
  image: string;
  name: string;
  destination: string;
  story: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-[#0B192C]/10 bg-white"
    >
      <div className="aspect-square overflow-hidden bg-gray-200">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <div className="text-sm font-bold text-[#0B192C]">{name}</div>
        <div className="mt-1 text-xs text-[#0B192C]/60">Visited {destination}</div>
        <p className="mt-4 text-sm leading-relaxed text-[#0B192C]/75">{story}</p>
      </div>
    </motion.div>
  );
}

// Bottom Section: Instagram Gallery
export function InstagramGallerySection({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div>
      <div className="mb-8 text-center">
        <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.45em] text-[#0B192C]/60">Follow Us</div>
        <h3 className="text-3xl font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
          @SamvadaJourneys
        </h3>
      </div>
      <div className="grid gap-3 md:grid-cols-4 lg:grid-cols-6">
        {images.slice(0, 6).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group aspect-square overflow-hidden rounded-lg"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Bottom Section: Popular Experiences
export function PopularExperiencesSection({
  experiences,
}: {
  experiences: { title: string; duration: string; image: string }[];
}) {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
        Popular Experiences
      </h3>
      <div className="grid gap-6 md:grid-cols-3">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="group overflow-hidden rounded-2xl border border-[#0B192C]/10 bg-white"
          >
            <div className="aspect-video overflow-hidden bg-gray-200">
              <img src={exp.image} alt={exp.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h4 className="font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
                {exp.title}
              </h4>
              <div className="mt-3 flex items-center gap-2 text-xs text-[#0B192C]/60">
                <Clock className="h-3 w-3" />
                {exp.duration}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Bottom Section: Nearby Destinations
export function NearbyDestinationsSection({
  destinations,
}: {
  destinations: { name: string; image: string; distance: string }[];
}) {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
        Nearby Destinations
      </h3>
      <div className="grid gap-6 md:grid-cols-3">
        {destinations.map((dest, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="group overflow-hidden rounded-2xl border border-[#0B192C]/10 bg-white"
          >
            <div className="aspect-[4/3] overflow-hidden bg-gray-200">
              <img src={dest.image} alt={dest.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h4 className="font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
                {dest.name}
              </h4>
              <p className="mt-2 text-xs text-[#0B192C]/60">{dest.distance}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Bottom Section: Latest Stories
export function LatestStoriesSection({
  stories,
}: {
  stories: { title: string; excerpt: string; image: string; date: string }[];
}) {
  return (
    <div>
      <h3 className="mb-8 text-3xl font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
        Latest Stories
      </h3>
      <div className="grid gap-6 md:grid-cols-3">
        {stories.map((story, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="overflow-hidden rounded-2xl border border-[#0B192C]/10 bg-white"
          >
            <div className="aspect-video overflow-hidden bg-gray-200">
              <img src={story.image} alt={story.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <div className="text-xs text-[#0B192C]/60">{story.date}</div>
              <h4 className="mt-2 font-black text-[#0B192C]" style={{ fontFamily: "Fraunces, serif" }}>
                {story.title}
              </h4>
              <p className="mt-2 text-sm text-[#0B192C]/70">{story.excerpt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
