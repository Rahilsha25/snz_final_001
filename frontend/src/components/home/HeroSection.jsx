import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, GraduationCap, Plane, BookOpen } from "lucide-react";
import { Button } from "../ui/button";
import { heroBadges } from "../../mock/data";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 dotted-bg opacity-60" />
      <div className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-teal-200/40 blur-3xl" />

      {/* vertical letters */}
      <div className="hidden lg:flex absolute left-3 top-1/2 -translate-y-1/2 flex-col gap-2 text-[10px] text-stone-500 font-bold uppercase">
        {"GO ABROAD".split("").map((c, i) => (
          <span key={i} className="tracking-widest">{c === " " ? "\u2022" : c}</span>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-12 pt-10 pb-20 lg:pt-20 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center relative">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-semibold text-stone-700">From Anand to the World &mdash; your expert guide</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-stone-900">
            Unlock Your <span className="gradient-text">Global Future</span>
          </h1>
          <p className="mt-6 text-lg text-stone-600 max-w-xl leading-relaxed">
            From choosing the right course to moving abroad, our experts guide you every step of the way. Let&rsquo;s turn your big goals into a real plan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link to="/contact">
              <Button className="rounded-full bg-[#0f5e54] hover:bg-[#0a473f] text-white px-7 h-12 text-base font-semibold group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/english-coaching">
              <Button variant="outline" className="rounded-full border-stone-300 hover:border-[#0f5e54] hover:text-[#0f5e54] bg-white px-6 h-12 text-base font-semibold">
                Explore Programs
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["#0f5e54", "#f59e0b", "#d97706", "#14857a"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white shadow" style={{ backgroundColor: c }} />
                ))}
              </div>
              <div className="text-xs text-stone-600"><span className="font-bold text-stone-900">500+</span> students guided</div>
            </div>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              <span className="text-xs font-medium text-stone-700 ml-1">4.9 / 5 rating</span>
            </div>
          </div>
        </div>

        {/* visual side */}
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[5/6] max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f5e54] to-[#14857a] rounded-[2rem] rotate-3" />
            <div className="absolute inset-0 bg-white rounded-[2rem] -rotate-2 shadow-xl overflow-hidden">
              <div className="h-full p-7 flex flex-col justify-between bg-gradient-to-br from-[#f0f9f6] to-white">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#0f5e54]">Visa Approved</div>
                    <div className="text-3xl font-extrabold text-stone-900 mt-1">98%</div>
                    <div className="text-xs text-stone-500">Success rate</div>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <Plane className="w-6 h-6 text-amber-600" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 my-6">
                  <div className="bg-white rounded-2xl border border-stone-200 p-4 card-lift">
                    <BookOpen className="w-5 h-5 text-[#0f5e54] mb-2" />
                    <div className="text-sm font-semibold text-stone-900">IELTS</div>
                    <div className="text-[11px] text-stone-500">7+ band coaching</div>
                  </div>
                  <div className="bg-[#0f5e54] text-white rounded-2xl p-4 card-lift">
                    <GraduationCap className="w-5 h-5 text-amber-300 mb-2" />
                    <div className="text-sm font-semibold">PTE</div>
                    <div className="text-[11px] text-emerald-100">AI-scoring prep</div>
                  </div>
                  <div className="bg-amber-400 text-stone-900 rounded-2xl p-4 card-lift col-span-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold">Top Destinations</div>
                        <div className="text-[11px] opacity-80">USA &middot; UK &middot; Canada &middot; AUS</div>
                      </div>
                      <div className="flex -space-x-2">
                        {["us", "gb", "ca", "au"].map((c) => (
                          <img key={c} src={`https://flagcdn.com/w80/${c}.png`} alt={c} className="w-7 h-7 rounded-full ring-2 ring-amber-400 object-cover" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {heroBadges.map((b) => (
                    <span key={b.label} className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-stone-100 text-stone-700">{b.label}</span>
                  ))}
                </div>
              </div>
            </div>
            {/* floating chip */}
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-xl border border-stone-100 px-4 py-3 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <div className="text-xs font-bold text-stone-900">Counselling</div>
                <div className="text-[10px] text-stone-500">100% Free Session</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
