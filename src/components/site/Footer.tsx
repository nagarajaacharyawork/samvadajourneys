import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, MessageCircle, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ background: "var(--brand-ocean)", color: "#F7F4EF" }}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/samvada-logo.jpeg" alt="Samvada Journeys logo" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <div className="text-lg font-black tracking-tight">SAMVADA</div>
                <div className="text-[10px] font-semibold tracking-[0.28em] opacity-80">JOURNEYS</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-80">
              Your Trusted Guide for Every Journey. Explore India Like a Local, Not Like a Tourist.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/samvadajourneys" },
                { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919845012345" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/samvadajourneys" },
                { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@samvadajourneys" },
                { icon: Twitter, label: "Twitter / X", href: "https://twitter.com/SamvadaJourneys" },
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/samvadajourneys" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Explore",
              links: [
                ["Experiences", "/experiences"],
                ["Upcoming Trips", "/trips"],
                ["Coastal Karnataka", "/explore/coastal-karnataka"],
                ["Western Ghats", "/explore/western-ghats"],
                ["Heritage Trails", "/explore/heritage-trails"],
                ["Hidden Villages", "/explore/hidden-villages"],
                ["Blog & Stories", "/blog"],
              ],
            },
            { title: "Company", links: [["About Us", "/about"], ["Partner With Us", "/about"], ["Contact", "/contact"]] },
            {
              title: "Support",
              links: [
                ["FAQs", "/faqs"],
                ["Booking Policy", "/booking-policy"],
                ["Travel Safety", "/travel-safety"],
                ["Custom Trips", "/custom-trips"],
                ["Get in Touch", "/contact"],
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <div className="text-xs font-bold uppercase tracking-[0.22em] opacity-70">{col.title}</div>
              <ul className="mt-5 space-y-3">
                {col.links.map(([label, to]) => (
                  <li key={label}>
                    <Link to={to as string} className="text-sm opacity-85 hover:opacity-100 hover:underline underline-offset-4">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs opacity-70">© 2026 Samvada Journeys. All Rights Reserved.</p>
          <p className="text-xs opacity-70">Crafted with care in coastal Karnataka.</p>
        </div>
      </div>
    </footer>
  );
}