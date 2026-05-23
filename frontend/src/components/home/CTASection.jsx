import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import { siteInfo } from "../../mock/data";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0f5e54] p-10 lg:p-14">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald-300/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Ready to Begin?</span>
              <h2 className="text-3xl lg:text-5xl font-extrabold text-white mt-3 leading-tight">Ready to Start Your Journey?</h2>
              <p className="mt-4 text-emerald-100/90 max-w-md">Let our expert team guide you towards achieving your academic and career goals. Get personalized advice today.</p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Link to="/contact">
                <Button className="rounded-full bg-amber-400 hover:bg-amber-500 text-stone-900 font-semibold h-12 px-7">
                  Talk to an Expert
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href={siteInfo.whatsapp} target="_blank" rel="noreferrer">
                <Button variant="outline" className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-[#0f5e54] h-12 px-7 font-semibold">
                  <MessageCircle className="mr-2 w-4 h-4" />
                  Contact on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
