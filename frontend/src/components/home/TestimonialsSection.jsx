import React from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../../mock/data";

const colors = ["bg-amber-100 text-amber-700", "bg-emerald-100 text-emerald-700", "bg-rose-100 text-rose-700"];

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Success Stories</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 leading-tight">
            Hear from our <span className="text-[#0f5e54]">happy students</span>
          </h2>
          <p className="mt-4 text-stone-600">Hear from our students who have achieved their dreams with SNZ Education</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={t.name} className="bg-white border border-stone-200 rounded-3xl p-7 card-lift relative">
              <Quote className="absolute top-5 right-5 w-8 h-8 text-stone-100" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-stone-700 leading-relaxed text-[15px]">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-stone-100">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-lg ${colors[i % colors.length]}`}>{t.initial}</div>
                <div>
                  <div className="font-bold text-stone-900">{t.name}</div>
                  <div className="text-xs text-stone-500">{t.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
