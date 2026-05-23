import React from "react";
import { Compass, Trophy, Globe2 } from "lucide-react";
import { aboutFeatures } from "../../mock/data";

const icons = { Compass, Trophy, Globe2 };
const mapIcons = ["Compass", "Trophy", "Globe2"];

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">About SNZ Education</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 leading-tight">
            One-stop solution for your <span className="text-[#0f5e54]">study abroad dream</span>
          </h2>
          <p className="mt-5 text-stone-600 leading-relaxed">
            SNZ Education guides students in studying abroad across top destinations like the USA, UK, Canada, Australia, New Zealand, Europe, and Dubai. As a complete one-stop solution, we handle everything from your first consultation to final enrollment.
          </p>
          <p className="mt-4 text-stone-600 leading-relaxed">
            Our expert team stays updated on the latest immigration rules and academic requirements to provide you with tailored, accurate advice. Through personalized counseling, we ensure you are confident and fully prepared to start your international education journey.
          </p>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-1 gap-5">
          {aboutFeatures.map((f, i) => {
            const Icon = icons[mapIcons[i]];
            return (
              <div key={f.title} className="group bg-white border border-stone-200 rounded-3xl p-6 flex gap-5 items-start card-lift hover:border-[#0f5e54]">
                <div className="w-14 h-14 rounded-2xl bg-[#f0f9f6] flex items-center justify-center text-[#0f5e54] group-hover:bg-[#0f5e54] group-hover:text-white transition-colors shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">{f.desc}</p>
                </div>
                <div className="ml-auto text-3xl font-extrabold text-stone-200 group-hover:text-amber-500 transition-colors">0{i + 1}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
