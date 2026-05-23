import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Laptop, MessageCircle, BadgeCheck, Users, ClipboardCheck, TrendingUp, ArrowRight, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import PageHero from "../components/layout/PageHero";
import CTASection from "../components/home/CTASection";
import { coachingPrograms, coachingBenefits, coachingSteps, siteInfo } from "../mock/data";

const progIcons = { BookOpen, Laptop, MessageCircle };
const benIcons = { BadgeCheck, Users, ClipboardCheck, TrendingUp };

export default function EnglishCoaching() {
  return (
    <main>
      <PageHero
        eyebrow="English Proficiency Coaching"
        title="Learn. Score."
        accent="Succeed."
        description="Master IELTS, PTE, and Spoken English with expert coaching tailored to your goals."
        breadcrumbs={["English Coaching"]}
      />

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-br from-[#f0f9f6] to-amber-50 border border-stone-200 p-8 flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0f5e54] text-white flex items-center justify-center"><BookOpen className="w-6 h-6" /></div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-amber-600 font-bold">Coaching</div>
                  <div className="font-bold text-stone-900">IELTS &middot; PTE &middot; Spoken English</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[{ n: "7+", l: "Target Band" }, { n: "70+", l: "PTE Score" }, { n: "1:1", l: "Feedback" }, { n: "100%", l: "Practice" }].map((s) => (
                  <div key={s.l} className="bg-white rounded-2xl p-4 border border-stone-200">
                    <div className="text-2xl font-extrabold text-[#0f5e54]">{s.n}</div>
                    <div className="text-[11px] text-stone-500 uppercase tracking-wider mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="text-xs text-stone-500">Small batches &middot; Mock tests &middot; Strategy sessions</div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Why English Matters</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold mt-3 text-stone-900 leading-tight">Your gateway to international universities</h2>
            <p className="mt-5 text-stone-600 leading-relaxed">English proficiency is the gateway to international universities. At SNZ Education, our experienced trainers build your skills from the ground up &mdash; pronunciation, grammar, fluency, and test strategy.</p>
            <p className="mt-4 text-stone-600 leading-relaxed">Whether you are preparing for IELTS, PTE, or simply want to speak English with confidence, our personalized coaching programs are designed to help you achieve measurable progress and your target band score.</p>
            <p className="mt-4 text-stone-600 leading-relaxed">Small batches, mock tests, individual feedback, and proven strategies &mdash; everything you need to walk into the exam room ready to win.</p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 lg:py-20 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Our Coaching Programs</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 leading-tight max-w-2xl">Choose the program that <span className="text-[#0f5e54]">matches your goals</span></h2>
            <p className="mt-4 text-stone-600">Exam preparation or everyday fluency &mdash; we have a tailored path for you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {coachingPrograms.map((p, i) => {
              const Icon = progIcons[p.icon];
              return (
                <div key={p.title} className={`rounded-3xl p-7 card-lift ${i === 1 ? "bg-[#0f5e54] text-white" : "bg-white border border-stone-200"}`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 ${i === 1 ? "bg-amber-400 text-stone-900" : "bg-amber-100 text-amber-700"}`}>{p.tag}</div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${i === 1 ? "bg-white/10 text-amber-300" : "bg-[#f0f9f6] text-[#0f5e54]"}`}><Icon className="w-7 h-7" /></div>
                  <h3 className="text-2xl font-bold">{p.title}</h3>
                  <p className={`mt-3 text-sm leading-relaxed ${i === 1 ? "text-emerald-100" : "text-stone-600"}`}>{p.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className={`flex items-center gap-2 text-sm ${i === 1 ? "text-emerald-100" : "text-stone-700"}`}>
                        <Check className={`w-4 h-4 ${i === 1 ? "text-amber-300" : "text-[#0f5e54]"}`} /> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">What You Get</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 leading-tight">What you get with <span className="text-[#0f5e54]">SNZ Coaching</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coachingBenefits.map((b) => {
              const Icon = benIcons[b.icon];
              return (
                <div key={b.title} className="bg-white border border-stone-200 rounded-3xl p-6 card-lift hover:border-[#0f5e54]">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4"><Icon className="w-6 h-6" /></div>
                  <h3 className="font-bold text-stone-900">{b.title}</h3>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Our Process</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 leading-tight">How our <span className="text-[#0f5e54]">coaching works</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {coachingSteps.map((s, i) => (
              <div key={s.num} className="relative bg-white rounded-3xl p-7 border border-stone-200 card-lift">
                <div className="w-12 h-12 rounded-2xl bg-[#0f5e54] text-white flex items-center justify-center font-extrabold text-lg">{s.num}</div>
                <h3 className="mt-5 text-lg font-bold text-stone-900">{s.title}</h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">{s.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-12 -right-2.5 w-5 h-0.5 bg-stone-300" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="bg-white border border-stone-200 rounded-[2rem] p-10 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-stone-900">Ready to achieve your <span className="text-[#0f5e54]">target score?</span></h2>
            <p className="mt-4 text-stone-600 max-w-xl mx-auto">Book a free counseling session and start your journey to English proficiency today.</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact"><Button className="rounded-full bg-[#0f5e54] hover:bg-[#0a473f] text-white h-12 px-7 font-semibold">Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={siteInfo.whatsapp} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-full border-stone-300 h-12 px-6 font-semibold hover:border-[#0f5e54] hover:text-[#0f5e54]">Contact us on WhatsApp</Button></a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
