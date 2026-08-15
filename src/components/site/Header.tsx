import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  {
    label: "Explore",
    to: "/",
    submenu: [
      { label: "Coastal Karnataka", to: "/explore/coastal-karnataka" },
      { label: "Western Ghats", to: "/explore/western-ghats" },
      { label: "Heritage Trails", to: "/explore/heritage-trails" },
      { label: "Hidden Villages", to: "/explore/hidden-villages" },
    ],
  },
  {
    label: "Experience",
    to: "/experiences",
    submenu: [
      { label: "Food Trails", to: "/experiences#food-trails" },
      { label: "Heritage Walks", to: "/experiences#heritage-walks" },
      { label: "Waterfall Treks", to: "/experiences#waterfall-treks" },
      { label: "Coffee Estates", to: "/experiences#coffee-estates" },
      { label: "Sunrise & Sunset", to: "/experiences#sunrise-sunset" },
      { label: "Corporate Retreats", to: "/experiences#corporate-retreats" },
    ],
  },
  {
    label: "Trips",
    to: "/trips",
    submenu: [
      { label: "Weekend Explorer", to: "/trips?cat=Weekend+Explorer" },
      { label: "Food Trails", to: "/trips?cat=Food+Trails" },
      { label: "Waterfall Treks", to: "/trips?cat=Waterfall+Treks" },
      { label: "Heritage Walks", to: "/trips?cat=Heritage+Walks" },
      { label: "Coffee Estates", to: "/trips?cat=Coffee+Estates" },
      { label: "Festival Special", to: "/trips?cat=Festival+Special" },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = !isHome || scrolled
    ? "backdrop-blur-md bg-[#0B192C]/95 border-b border-white/10"
    : "bg-transparent border-b border-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#0B192C] ring-1 ring-white/20">
            <img src="/samvada-logo-mark.png" alt="Samvada Journeys logo" className="h-9 w-9 rounded-full object-cover" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-black tracking-[0.18em] text-white">
              SAMVADA
            </span>
            <span className="block truncate text-[10px] font-semibold tracking-[0.32em] text-white/70">
              JOURNEYS
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.submenu && setOpen(item.label)}
              onMouseLeave={() => setOpen(null)}
            >
              <Link
                to={item.to}
                className="inline-flex items-center gap-1 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-white/85 transition-colors hover:text-white"
              >
                {item.label}
                {item.submenu && <ChevronDown className="h-3 w-3 opacity-60" />}
              </Link>
              <AnimatePresence>
                {item.submenu && open === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
                  >
                    <div className="min-w-64 rounded-xl bg-[#F7F4EF] p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.to}
                          className="block rounded-lg px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0B192C]/80 transition-colors hover:bg-[#0B192C] hover:text-white"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link
            to="/contact"
            className="rounded-none border border-white/30 bg-[#0B192C] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-[#0B192C]"
          >
            Plan Your Trip
          </Link>
        </div>

        <button
          onClick={() => setMobile((v) => !v)}
          className="lg:hidden grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20"
          aria-label="Menu"
        >
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-[#0B192C] border-t border-white/10"
          >
            <div className="flex flex-col p-4">
              {nav.map((item) =>
                item.submenu ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white/85 hover:bg-white/10"
                    >
                      {item.label}
                      <ChevronDown className={`h-3 w-3 opacity-60 transition-transform ${mobileOpen === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {mobileOpen === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-4"
                        >
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              onClick={() => { setMobile(false); setMobileOpen(null); }}
                              className="block rounded-lg px-4 py-2.5 text-xs font-semibold tracking-[0.18em] text-white/70 hover:bg-white/10 hover:text-white"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMobile(false)}
                    className="rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white/85 hover:bg-white/10"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                onClick={() => setMobile(false)}
                className="mt-3 border border-white/30 px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.22em] text-white"
              >
                Plan Your Trip
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}