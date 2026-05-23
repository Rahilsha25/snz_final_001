import React from "react";
import { Link } from "react-router-dom";
import { MessagesSquare, School, FileText, Stamp, Mic, Luggage, ArrowRight, Globe2 } from "lucide-react";
import { Button } from "../components/ui/button";
import PageHero from "../components/layout/PageHero";
import { destinations, visaSupport, visaSteps, whyChoose, siteInfo } from "../mock/data";
import { Users, Target, Award, ShieldCheck } from "lucide-react";

const supportIcons = { MessagesSquare, School, FileText, Stamp, Mic, Luggage };
const whyIcons = { Users, Target, Award, ShieldCheck };

export default function StudentVisa() {
  return (
    <main>
      <PageHero
        eyebrow="Student Visa Services"
        title="Your Visa,"
        accent="Our Mission."
        description="End-to-end guidance from counseling to your dream university - wherever you want to study."
        breadcrumbs={["Student Visa"]}
      />

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">The SNZ Promise</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold mt-3 text-stone-900 leading-tight">Going abroad made <span className="text-[#0f5e54]">simple</span></h2>
            <p className="mt-5 text-stone-600 leading-relaxed">Going abroad to study is one of the biggest decisions of your life &mdash; and the visa process can feel overwhelming. SNZ Education makes it simple. From shortlisting universities to packing your bags, our expert counselors stand with you at every step.</p>
            <p className="mt-4 text-stone-600 leading-relaxed">We stay updated with the latest immigration rules across the USA, UK, Canada, Australia, New Zealand, Europe, and Dubai. Every application is reviewed by experts to maximize your chances of approval.</p>
            <p className="mt-4 text-stone-600 leading-relaxed">Transparent counseling. Honest advice. Personalized support. That is the SNZ promise.</p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] bg-gradient-to-br from-[#0f5e54] to-[#14857a] text-white p-8 overflow-hidden">
              <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-amber-400/30 blur-3xl" />
              <div className="relative">
                <Globe2 className="w-10 h-10 text-amber-300" />
                <div className="mt-4 text-3xl font-extrabold leading-tight">7+ Countries.<br />Endless Opportunities.</div>
                <div className="mt-6 grid grid-cols-4 gap-2">
                  {destinations.filter(d => d.code !== "globe").map((d) => (
                    <div key={d.code} className="aspect-square rounded-xl overflow-hidden ring-2 ring-white/20">
                      <img src={`https://flagcdn.com/w160/${d.code}.png`} alt={d.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="mt-7 grid grid-cols-3 gap-2 text-center">
                  <div><div className="text-2xl font-extrabold text-amber-300">98%</div><div className="text-[10px] uppercase tracking-wider text-emerald-100">Approvals</div></div>
                  <div><div className="text-2xl font-extrabold text-amber-300">500+</div><div className="text-[10px] uppercase tracking-wider text-emerald-100">Visas</div></div>
                  <div><div className="text-2xl font-extrabold text-amber-300">10+</div><div className="text-[10px] uppercase tracking-wider text-emerald-100">Years</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-16 lg:py-20 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Top Study Destinations</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 leading-tight max-w-3xl">Explore world-class <span className="text-[#0f5e54]">education globally</span></h2>
            <p className="mt-4 text-stone-600 max-w-2xl">Explore world-class education across our most popular destinations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destinations.map((d) => (
              <div key={d.name} className="bg-white rounded-3xl border border-stone-200 overflow-hidden card-lift">
                <div className="aspect-[5/3] relative overflow-hidden bg-stone-100">
                  {d.code === "globe" ? (
                    <div className="w-full h-full bg-gradient-to-br from-[#0f5e54] to-[#14857a] flex items-center justify-center text-white text-3xl font-extrabold">+</div>
                  ) : (
                    <img src={`https://flagcdn.com/w640/${d.code}.png`} alt={d.name} className="w-full h-full object-cover" />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-stone-900">{d.name}</h3>
                  <p className="text-xs text-stone-500 mt-2 leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Support */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">End-to-End Visa Support</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 leading-tight">From your first dream to your <span className="text-[#0f5e54]">first day on campus</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visaSupport.map((s, i) => {
              const Icon = supportIcons[s.icon];
              return (
                <div key={s.title} className="bg-white border border-stone-200 rounded-3xl p-7 card-lift hover:border-[#0f5e54] relative">
                  <div className="absolute top-5 right-5 text-3xl font-extrabold text-stone-100">0{i + 1}</div>
                  <div className="w-12 h-12 rounded-2xl bg-[#f0f9f6] text-[#0f5e54] flex items-center justify-center mb-5"><Icon className="w-6 h-6" /></div>
                  <h3 className="text-xl font-bold text-stone-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-16 lg:py-20 bg-[#0a3b35] text-white relative overflow-hidden">
        <div className="absolute -top-32 -left-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Our 5-Step Process</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 leading-tight">A clear roadmap to your <span className="text-amber-400">global future</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {visaSteps.map((s, i) => (
              <div key={s.num} className="relative bg-white/5 backdrop-blur rounded-3xl p-6 border border-white/10">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-stone-900 flex items-center justify-center font-extrabold text-lg">{s.num}</div>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-emerald-100/80 leading-relaxed">{s.desc}</p>
                {i < 4 && <div className="hidden lg:block absolute top-12 -right-2.5 w-5 h-0.5 bg-amber-400/40" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Why Choose SNZ Education</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 leading-tight">Trusted by aspiring <span className="text-[#0f5e54]">global students</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((f) => {
              const Icon = whyIcons[f.icon];
              return (
                <div key={f.title} className="bg-white border border-stone-200 rounded-3xl p-6 card-lift hover:border-[#0f5e54]">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4"><Icon className="w-6 h-6" /></div>
                  <h3 className="font-bold text-stone-900">{f.title}</h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="bg-white border border-stone-200 rounded-[2rem] p-10 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-900">Ready to <span className="text-[#0f5e54]">study abroad?</span></h2>
            <p className="mt-4 text-stone-600 max-w-xl mx-auto">Book a free 1-on-1 counseling session and let&rsquo;s turn your study abroad dream into a plan.</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact"><Button className="rounded-full bg-[#0f5e54] hover:bg-[#0a473f] text-white h-12 px-7 font-semibold">Book Free Counseling <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={siteInfo.whatsapp} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-full border-stone-300 h-12 px-6 font-semibold hover:border-[#0f5e54] hover:text-[#0f5e54]">Contact us on WhatsApp</Button></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
