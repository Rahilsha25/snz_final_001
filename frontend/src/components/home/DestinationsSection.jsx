import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { destinations } from "../../mock/data";

export default function DestinationsSection() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-40 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="flex items-center justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Top Destinations</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 leading-tight max-w-2xl">
              Choose your <span className="text-[#0f5e54]">dream destination</span>
            </h2>
          </div>
          <Link to="/student-visa" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0f5e54] hover:text-amber-600">
            View all destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((d) => (
            <Link to="/student-visa" key={d.name} className="group bg-white rounded-3xl border border-stone-200 overflow-hidden card-lift hover:border-[#0f5e54]">
              <div className="aspect-[5/4] relative overflow-hidden bg-stone-100">
                {d.code === "globe" ? (
                  <div className="w-full h-full bg-gradient-to-br from-[#0f5e54] to-[#14857a] flex items-center justify-center text-white text-4xl font-extrabold">
                    +
                  </div>
                ) : (
                  <img
                    src={`https://flagcdn.com/w640/${d.code}.png`}
                    alt={d.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 text-[10px] font-bold uppercase tracking-wider text-stone-700">
                  Study Visa
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-stone-900 group-hover:text-[#0f5e54] transition-colors">{d.name}</h3>
                <p className="text-xs text-stone-500 mt-1.5 leading-relaxed line-clamp-2">{d.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f5e54] group-hover:text-amber-600">
                  Explore <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
