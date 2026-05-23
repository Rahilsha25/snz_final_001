import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, GraduationCap, Plane, MapPinned } from "lucide-react";
import { services } from "../../mock/data";

const iconMap = { GraduationCap, Plane, MapPinned };

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-24 bg-brand-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Our Services</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 max-w-2xl leading-tight">
              Your Study Abroad Partner for <span className="text-[#0f5e54]">all things you need</span>
            </h2>
          </div>
          <p className="text-stone-600 max-w-sm">Tailored programs and end-to-end visa support &mdash; whether you want to crack IELTS, fly to your dream country, or explore the world.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            const isFeatured = i === 1;
            return (
              <div key={s.title} className={`rounded-3xl p-7 card-lift relative overflow-hidden ${isFeatured ? "bg-[#0f5e54] text-white" : "bg-white text-stone-900 border border-stone-200"}`}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 ${isFeatured ? "bg-amber-400 text-stone-900" : "bg-amber-100 text-amber-700"}`}>{s.tag}</div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${isFeatured ? "bg-white/10 text-amber-300" : "bg-[#f0f9f6] text-[#0f5e54]"}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold leading-tight">{s.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${isFeatured ? "text-emerald-100" : "text-stone-600"}`}>{s.desc}</p>
                <Link to={s.path} className={`inline-flex items-center gap-2 mt-6 text-sm font-semibold group ${isFeatured ? "text-amber-300 hover:text-amber-200" : "text-[#0f5e54] hover:text-amber-600"}`}>
                  {s.cta}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
