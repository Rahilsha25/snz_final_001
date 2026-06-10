import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Quote, Play, X, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import PageHero from "../components/layout/PageHero";
import { photoTestimonials, videoTestimonials, siteInfo } from "../mock/data";

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [tab, setTab] = useState("all");

  return (
    <main>
      <PageHero
        eyebrow="Success Stories"
        title="Real students,"
        accent="real victories."
        description="Hear from our students who turned their study-abroad dreams into reality with SNZ Education."
        breadcrumbs={["Testimonials"]}
      />

      {/* Tabs */}
      <section className="pb-6">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="inline-flex bg-white border border-stone-200 rounded-full p-1.5">
            {[
              { k: "all", l: "All Stories" },
              { k: "photo", l: "Photo Reviews" },
              { k: "video", l: "Video Stories" },
            ].map((t) => (
              <button
                key={t.k}
                onClick={() => setTab(t.k)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  tab === t.k ? "bg-[#0f5e54] text-white" : "text-stone-700 hover:bg-stone-100"
                }`}
              >
                {t.l}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      {(tab === "all" || tab === "video") && (
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Video Stories</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-stone-900 leading-tight">Hear it directly from our students</h2>
              </div>
              <span className="text-sm text-stone-500">Tap any card to play the video</span>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {videoTestimonials.map((v) => (
                <button
                  key={v.name}
                  onClick={() => setActiveVideo(v)}
                  className="group text-left bg-white rounded-3xl border border-stone-200 overflow-hidden card-lift"
                >
                  <div className="relative aspect-video bg-stone-900 overflow-hidden">
                    <img src={v.thumbnail} alt={v.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-[#0f5e54] ml-0.5 fill-[#0f5e54]" />
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400 text-stone-900 text-[10px] font-bold uppercase tracking-widest">
                      {v.tag}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-stone-900">{v.name}</h3>
                    <p className="mt-1.5 text-sm text-stone-600 leading-relaxed line-clamp-2">{v.summary}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Photo testimonials */}
      {(tab === "all" || tab === "photo") && (
        <section className="py-10 lg:py-14 bg-brand-soft">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Photo Reviews</span>
                <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-stone-900 leading-tight">Loved by students worldwide</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {photoTestimonials.map((t) => (
                <div key={t.name} className="bg-white border border-stone-200 rounded-3xl p-6 card-lift relative">
                  <Quote className="absolute top-5 right-5 w-7 h-7 text-stone-100" />
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-700 leading-relaxed text-[14px]">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 mt-5 pt-5 border-t border-stone-100">
                    <div className="relative">
                      <img src={t.photo} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      {t.country && t.country !== "in" && (
                        <img src={`https://flagcdn.com/w40/${t.country}.png`} alt={t.country} className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full ring-2 ring-white object-cover" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-stone-900 truncate">{t.name}</div>
                      <div className="text-xs text-stone-500">{t.tag}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="bg-[#0f5e54] text-white rounded-[2rem] p-10 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-extrabold">Be our next <span className="text-amber-300">success story</span></h2>
              <p className="mt-4 text-emerald-100/90 max-w-xl mx-auto">Join hundreds of students who trusted SNZ Education with their global ambitions.</p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact"><Button className="rounded-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold h-12 px-7">Talk to an Expert <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                <a href={siteInfo.whatsapp} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#0f5e54] h-12 px-7 font-semibold"><MessageCircle className="mr-2 w-4 h-4" /> Contact on WhatsApp</Button></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur flex items-center justify-center p-4" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActiveVideo(null)} className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center" aria-label="close">
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video rounded-2xl overflow-hidden bg-black">
              <iframe
                title={activeVideo.name}
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="mt-3 text-white">
              <div className="font-bold">{activeVideo.name}</div>
              <div className="text-sm text-white/70">{activeVideo.tag}</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
