import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Star,
  Quote,
  Play,
  X,
  ArrowRight,
  MessageCircle,
  Volume2,
  VolumeX,
  Pause,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import PageHero from "../components/layout/PageHero";
import { photoTestimonials, videoTestimonials, siteInfo } from "../mock/data";

// -------------------- Reels-style card (hover to preview) --------------------
function ReelCard({ item, onOpen }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.muted = true;
      v.play().catch(() => {});
    }
  };
  const handleLeave = () => {
    setHovered(false);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative shrink-0 w-[230px] sm:w-[260px] aspect-[9/16] rounded-3xl overflow-hidden bg-stone-900 text-left card-lift"
    >
      {/* Poster */}
      <img
        src={item.poster}
        alt={item.name}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* Video preview on hover (muted) */}
      <video
        ref={videoRef}
        src={item.videoUrl}
        muted
        playsInline
        loop
        preload="none"
        poster={item.poster}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Top gradient + country chip */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400 text-stone-900 text-[10px] font-bold uppercase tracking-widest">
        {item.tag}
      </div>
      {item.country && (
        <img
          src={`https://flagcdn.com/w80/${item.country}.png`}
          alt={item.country}
          className="absolute top-3 right-3 w-7 h-7 rounded-full ring-2 ring-white object-cover"
        />
      )}

      {/* Play icon center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
          <Play className="w-6 h-6 text-[#0f5e54] ml-0.5 fill-[#0f5e54]" />
        </div>
      </div>

      {/* Bottom gradient + info */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent text-white">
        <div className="font-bold leading-tight">{item.name}</div>
        {item.location && (
          <div className="flex items-center gap-1 text-[11px] text-white/80 mt-0.5">
            <MapPin className="w-3 h-3" /> {item.location}
          </div>
        )}
        <div className="text-[11px] text-white/75 mt-1.5 line-clamp-2 leading-relaxed">
          {item.summary}
        </div>
      </div>
    </button>
  );
}

// -------------------- Vertical modal player --------------------
function ReelModal({ item, list, onChange, onClose }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);

  const idx = list.findIndex((x) => x.name === item.name);
  const prev = () => onChange(list[(idx - 1 + list.length) % list.length]);
  const next = () => onChange(list[(idx + 1) % list.length]);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.muted = muted;
    v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item.videoUrl]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  // Keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
        aria-label="close"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next desktop arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center"
        aria-label="previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center"
        aria-label="next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        className="relative w-full max-w-[400px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-stone-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={item.videoUrl}
          poster={item.poster}
          playsInline
          autoPlay
          controls={false}
          className="w-full h-full object-cover"
          onClick={togglePlay}
        />

        {/* Top info bar */}
        <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              {item.country && (
                <img
                  src={`https://flagcdn.com/w80/${item.country}.png`}
                  alt={item.country}
                  className="w-8 h-8 rounded-full ring-2 ring-white/80 object-cover"
                />
              )}
              <div>
                <div className="font-bold leading-tight text-sm">{item.name}</div>
                <div className="text-[11px] text-white/75">{item.tag}</div>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400 text-stone-900 font-bold uppercase tracking-widest">
              {idx + 1}/{list.length}
            </span>
          </div>
        </div>

        {/* Play/pause overlay */}
        {!playing && (
          <button
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="play"
          >
            <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-xl">
              <Play className="w-9 h-9 text-[#0f5e54] ml-1 fill-[#0f5e54]" />
            </div>
          </button>
        )}

        {/* Bottom controls + caption */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-white">
          <p className="text-sm leading-relaxed mb-3">{item.summary}</p>
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center"
              aria-label={playing ? "pause" : "play"}
            >
              {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
            </button>
            <button
              onClick={toggleMute}
              className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center"
              aria-label={muted ? "unmute" : "mute"}
            >
              {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            <div className="ml-auto flex items-center gap-1 text-[11px] text-white/70">
              {item.location && (
                <>
                  <MapPin className="w-3 h-3" /> {item.location}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile prev/next pill */}
      <div className="md:hidden absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/10 backdrop-blur rounded-full p-1.5">
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="w-9 h-9 rounded-full bg-white/15 text-white flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="w-9 h-9 rounded-full bg-white/15 text-white flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// -------------------- Page --------------------
export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [tab, setTab] = useState("all");
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

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
              { k: "video", l: "Video Reels" },
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

      {/* Vertical Reels */}
      {(tab === "all" || tab === "video") && (
        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                  Student Reels
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-stone-900 leading-tight">
                  Watch their stories
                </h2>
                <p className="text-sm text-stone-500 mt-2">
                  Hover to preview &middot; Tap any reel to watch full screen
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => scrollBy(-1)}
                  className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700"
                  aria-label="scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollBy(1)}
                  className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 flex items-center justify-center text-stone-700"
                  aria-label="scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              ref={scrollerRef}
              className="flex gap-5 overflow-x-auto pb-4 -mx-5 px-5 lg:mx-0 lg:px-0 snap-x snap-mandatory scroll-smooth"
              style={{ scrollbarWidth: "thin" }}
            >
              {videoTestimonials.map((v) => (
                <div key={v.name} className="snap-start">
                  <ReelCard item={v} onOpen={setActiveVideo} />
                </div>
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
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                  Photo Reviews
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold mt-2 text-stone-900 leading-tight">
                  Loved by students worldwide
                </h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {photoTestimonials.map((t) => (
                <div
                  key={t.name}
                  className="bg-white border border-stone-200 rounded-3xl p-6 card-lift relative"
                >
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
                        <img
                          src={`https://flagcdn.com/w40/${t.country}.png`}
                          alt={t.country}
                          className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full ring-2 ring-white object-cover"
                        />
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
              <h2 className="text-3xl lg:text-4xl font-extrabold">
                Be our next <span className="text-amber-300">success story</span>
              </h2>
              <p className="mt-4 text-emerald-100/90 max-w-xl mx-auto">
                Join hundreds of students who trusted SNZ Education with their global ambitions.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact">
                  <Button className="rounded-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold h-12 px-7">
                    Talk to an Expert <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <a href={siteInfo.whatsapp} target="_blank" rel="noreferrer">
                  <Button
                    variant="outline"
                    className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#0f5e54] h-12 px-7 font-semibold"
                  >
                    <MessageCircle className="mr-2 w-4 h-4" /> Contact on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {activeVideo && (
        <ReelModal
          item={activeVideo}
          list={videoTestimonials}
          onChange={setActiveVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </main>
  );
}
