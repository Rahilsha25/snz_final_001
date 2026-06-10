import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, ArrowRight, Check, Award, Heart, Globe2, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import PageHero from "../components/layout/PageHero";
import CTASection from "../components/home/CTASection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import { founders, milestones, aboutFeatures, siteInfo } from "../mock/data";
import { Compass, Trophy } from "lucide-react";

const aboutIcons = [Compass, Trophy, Globe2];

export default function AboutUs() {
  return (
    <main>
      <PageHero
        eyebrow="About SNZ Education"
        title="Guiding dreams."
        accent="Building futures."
        description="From our office in Anand, Gujarat, we have helped hundreds of students step into global classrooms with confidence."
        breadcrumbs={["About Us"]}
      />

      {/* Story */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Our Story</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold mt-3 text-stone-900 leading-tight">
              One-stop solution for your <span className="text-[#0f5e54]">study abroad dream</span>
            </h2>
            <p className="mt-5 text-stone-600 leading-relaxed">
              SNZ Education guides students in studying abroad across top destinations like the USA, UK, Canada, Australia, New Zealand, Europe, and Dubai. As a complete one-stop solution, we handle everything from your first consultation to final enrollment.
            </p>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Our expert team stays updated on the latest immigration rules and academic requirements to provide you with tailored, accurate advice. Through personalized counseling, we ensure you are confident and fully prepared to start your international education journey.
            </p>
            <div className="mt-8 flex gap-3 flex-wrap">
              <Link to="/contact"><Button className="rounded-full bg-[#0f5e54] hover:bg-[#0a473f] text-white h-12 px-6 font-semibold">Talk to an Expert <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              <a href={siteInfo.whatsapp} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-full border-stone-300 hover:border-[#0f5e54] hover:text-[#0f5e54] h-12 px-6 font-semibold">WhatsApp Us</Button></a>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-5">
            {aboutFeatures.map((f, i) => {
              const Icon = aboutIcons[i];
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

      {/* Leadership */}
      <section className="py-16 lg:py-24 bg-brand-soft relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Leadership Team</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 leading-tight">
              Meet our <span className="text-[#0f5e54]">founders</span>
            </h2>
            <p className="mt-4 text-stone-600">The visionary minds behind SNZ Education &mdash; dedicated mentors who treat your dreams as their own.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((f, i) => (
              <div key={f.name} className="group bg-white rounded-[2rem] p-7 lg:p-8 border border-stone-200 card-lift overflow-hidden relative">
                <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full ${i === 0 ? "bg-amber-100" : "bg-emerald-100"} group-hover:scale-110 transition-transform"`} />
                <div className="relative grid grid-cols-3 gap-5 items-start">
                  <div className="col-span-1">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100">
                      <img src={f.photo} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute bottom-2 left-2 right-2 flex gap-1">
                        <a href={f.socials.linkedin} className="flex-1 bg-white/95 hover:bg-white rounded-lg py-1.5 flex items-center justify-center text-[#0f5e54]">
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
                        <a href={`mailto:${f.socials.email}`} className="flex-1 bg-white/95 hover:bg-white rounded-lg py-1.5 flex items-center justify-center text-[#0f5e54]">
                          <Mail className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase tracking-widest mb-3">
                      <Sparkles className="w-3 h-3" /> {f.role}
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 leading-tight">{f.name}</h3>
                    <p className="mt-3 text-sm text-stone-600 leading-relaxed">{f.bio}</p>
                    <ul className="mt-4 space-y-2">
                      {f.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-[#0f5e54] shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-[2rem] p-8 lg:p-10 bg-[#0f5e54] text-white relative overflow-hidden">
            <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 text-stone-900 flex items-center justify-center"><Heart className="w-6 h-6" /></div>
              <h3 className="text-3xl font-extrabold mt-5">Our Mission</h3>
              <p className="mt-4 text-emerald-100/90 leading-relaxed">To empower every student in our community with honest counselling, expert coaching, and end-to-end visa support &mdash; making global education accessible, simple, and successful.</p>
            </div>
          </div>
          <div className="rounded-[2rem] p-8 lg:p-10 bg-white border border-stone-200 relative overflow-hidden">
            <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-emerald-100 blur-3xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-[#f0f9f6] text-[#0f5e54] flex items-center justify-center"><Award className="w-6 h-6" /></div>
              <h3 className="text-3xl font-extrabold mt-5 text-stone-900">Our Values</h3>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {[{ k: "Trust", v: "Treat student aspirations with utmost responsibility." }, { k: "Honesty", v: "Be transparent in every counselling session." }, { k: "Quality", v: "Well-executed plans, never shortcuts." }, { k: "Care", v: "Personalized one-to-one mentorship." }].map((x) => (
                  <div key={x.k}>
                    <div className="text-sm font-bold text-[#0f5e54]">{x.k}</div>
                    <div className="text-xs text-stone-600 mt-1 leading-relaxed">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones timeline */}
      <section className="py-16 lg:py-20 bg-brand-soft">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Our Journey</span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mt-3 text-stone-900 leading-tight">Milestones that <span className="text-[#0f5e54]">shaped us</span></h2>
          </div>
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {milestones.map((m, i) => (
              <div key={m.year} className="relative bg-white rounded-3xl p-6 border border-stone-200 card-lift">
                <div className="inline-flex px-3 py-1 rounded-full bg-[#0f5e54] text-white text-xs font-extrabold">{m.year}</div>
                <h3 className="mt-4 text-lg font-bold text-stone-900">{m.title}</h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">{m.desc}</p>
                {i < 3 && <div className="hidden lg:block absolute top-9 -right-2.5 w-5 h-0.5 bg-stone-300" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection />
      <CTASection />
    </main>
  );
}
