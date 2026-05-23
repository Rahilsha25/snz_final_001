import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, GraduationCap } from "lucide-react";
import { Button } from "../ui/button";
import { navLinks, siteInfo } from "../../mock/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-brand-teal flex items-center justify-center group-hover:rotate-6 transition-transform">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-lg tracking-tight text-[#0f5e54]">SNZ Education</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-stone-500">Study Abroad &middot; Anand</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.path}
              to={l.path}
              end={l.path === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#0f5e54] text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${siteInfo.phoneRaw}`} className="flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-[#0f5e54]">
            <Phone className="w-4 h-4" /> {siteInfo.phone}
          </a>
          <Link to="/contact">
            <Button className="rounded-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-5">
              Get Started
            </Button>
          </Link>
        </div>

        <button className="lg:hidden p-2 rounded-lg hover:bg-stone-100" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-stone-200">
          <div className="px-5 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.path}
                to={l.path}
                end={l.path === "/"}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg text-sm font-medium ${isActive ? "bg-[#0f5e54] text-white" : "text-stone-700 hover:bg-stone-100"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact">
              <Button className="mt-2 w-full rounded-full bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
