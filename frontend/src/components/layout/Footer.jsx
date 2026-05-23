import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, GraduationCap } from "lucide-react";
import { siteInfo, navLinks } from "../../mock/data";

export default function Footer() {
  return (
    <footer className="bg-[#0a3b35] text-stone-200 mt-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-stone-900" />
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-lg text-white">SNZ Education</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-amber-300">Study Abroad &middot; Anand</div>
            </div>
          </div>
          <p className="text-sm text-stone-400 leading-relaxed">
            SNZ Education guides students in studying abroad across top destinations like USA, UK, Canada, Australia, New Zealand, Europe, and Dubai.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 hover:text-stone-900 flex items-center justify-center transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-stone-400">
            {navLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-amber-400 transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-stone-400">
            <li><Link to="/english-coaching" className="hover:text-amber-400">IELTS Coaching</Link></li>
            <li><Link to="/english-coaching" className="hover:text-amber-400">PTE Coaching</Link></li>
            <li><Link to="/english-coaching" className="hover:text-amber-400">Spoken English</Link></li>
            <li><Link to="/student-visa" className="hover:text-amber-400">Student Visa</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400">Visitor Visa</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm text-stone-400">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" /><span>{siteInfo.address}</span></li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" /><a href={`mailto:${siteInfo.email}`} className="hover:text-amber-400 break-all">{siteInfo.email}</a></li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-amber-400 shrink-0" /><a href={`tel:${siteInfo.phoneRaw}`} className="hover:text-amber-400">{siteInfo.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-stone-500">
          <span>&copy; {new Date().getFullYear()} SNZ Education. All rights reserved.</span>
          <span>Crafted with care in Anand, Gujarat.</span>
        </div>
      </div>
    </footer>
  );
}
