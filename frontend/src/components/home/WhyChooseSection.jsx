import React from "react";
import { Users, Target, Award, ShieldCheck } from "lucide-react";
import { whyChoose, stats } from "../../mock/data";

const iconMap = { Users, Target, Award, ShieldCheck };

export default function WhyChooseSection() {
  return (
    <section className="py-20 lg:py-24 bg-[#0a3b35] text-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 flex-col gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-400/70">
        {"WHY CHOOSE US".split("").map((c, i) => (
          <span key={i}>{c === " " ? "\u2022" : c}</span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Why Choose SNZ Education</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 leading-tight">
            Trusted partner for your <span className="text-amber-400">global ambitions</span>
          </h2>
          <p className="mt-4 text-emerald-100/80">Expert mentorship, transparent counselling, and proven results across 7+ countries.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyChoose.map((f) => {
            const Icon = iconMap[f.icon];
            return (
              <div key={f.title} className="group bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10 hover:bg-white hover:text-stone-900 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-stone-900 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-emerald-100/80 group-hover:text-stone-600 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-extrabold text-amber-400">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-emerald-100/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
