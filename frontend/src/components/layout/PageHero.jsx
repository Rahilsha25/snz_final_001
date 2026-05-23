import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function PageHero({ eyebrow, title, accent, description, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-50" />
      <div className="absolute -top-20 -right-32 w-[460px] h-[460px] rounded-full bg-amber-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 w-[460px] h-[460px] rounded-full bg-teal-200/30 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28 relative">
        <nav className="flex items-center gap-1 text-xs text-stone-500 mb-6">
          <Link to="/" className="hover:text-[#0f5e54]">Home</Link>
          {breadcrumbs.map((b, i) => (
            <React.Fragment key={i}>
              <ChevronRight className="w-3 h-3" />
              <span className={i === breadcrumbs.length - 1 ? "text-stone-900 font-semibold" : ""}>{b}</span>
            </React.Fragment>
          ))}
        </nav>
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">{eyebrow}</span>
        <h1 className="text-4xl lg:text-6xl font-extrabold mt-3 leading-[1.05] text-stone-900 max-w-3xl">
          {title} {accent && <span className="gradient-text">{accent}</span>}
        </h1>
        {description && <p className="mt-6 text-lg text-stone-600 max-w-2xl leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}
