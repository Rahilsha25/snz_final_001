import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast } from "../hooks/use-toast";
import PageHero from "../components/layout/PageHero";
import { siteInfo } from "../mock/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", mobile: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.message) {
      toast({ title: "Please fill all fields", description: "Name, Mobile and Message are required." });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "Our team will reach out to you shortly." });
      setForm({ name: "", mobile: "", message: "" });
    }, 900);
  };

  const cards = [
    { icon: Mail, label: "Email", value: siteInfo.email, href: `mailto:${siteInfo.email}` },
    { icon: Phone, label: "Phone", value: siteInfo.phone, href: `tel:${siteInfo.phoneRaw}` },
    { icon: MapPin, label: "Address", value: siteInfo.address },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title="We're here to help"
        accent="on your journey"
        description="Have questions about studying abroad, visa processes, or IELTS/PTE coaching? Reach out to us today."
        breadcrumbs={["Contact"]}
      />

      <section className="pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-[2rem] p-7 lg:p-10">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-stone-900">Send Us a Message</h2>
            <p className="text-stone-500 mt-2 text-sm">Tell us a little about your goals &mdash; we&rsquo;ll get back within 24 hours.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold text-stone-700">Name *</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="mt-2 h-12 rounded-xl border-stone-200 focus-visible:ring-[#0f5e54]" />
              </div>
              <div>
                <Label htmlFor="mobile" className="text-sm font-semibold text-stone-700">Mobile Number *</Label>
                <Input id="mobile" value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} placeholder="+91 9XXXXXXXXX" className="mt-2 h-12 rounded-xl border-stone-200 focus-visible:ring-[#0f5e54]" />
              </div>
              <div>
                <Label htmlFor="message" className="text-sm font-semibold text-stone-700">Message *</Label>
                <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" rows={5} className="mt-2 rounded-xl border-stone-200 focus-visible:ring-[#0f5e54]" />
              </div>
              <Button type="submit" disabled={loading} className="rounded-full bg-[#0f5e54] hover:bg-[#0a473f] text-white h-12 px-7 font-semibold">
                {loading ? "Sending..." : (<><Send className="mr-2 w-4 h-4" /> Send Message</>)}
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:col-span-5 space-y-5">
            {cards.map((c) => (
              <div key={c.label} className="bg-white border border-stone-200 rounded-3xl p-6 flex gap-4 card-lift">
                <div className="w-12 h-12 rounded-2xl bg-[#f0f9f6] text-[#0f5e54] flex items-center justify-center shrink-0"><c.icon className="w-6 h-6" /></div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-amber-600">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="font-semibold text-stone-900 hover:text-[#0f5e54] break-words">{c.value}</a>
                  ) : (
                    <div className="font-semibold text-stone-900 text-sm leading-relaxed">{c.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-[#0f5e54] text-white rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-stone-900 flex items-center justify-center"><Clock className="w-6 h-6" /></div>
                <div className="text-xs font-bold uppercase tracking-widest text-amber-300">Office Hours</div>
              </div>
              <div className="text-sm text-emerald-100">{siteInfo.hours.weekdays}</div>
              <div className="text-sm text-emerald-100 mt-1">{siteInfo.hours.sunday}</div>
            </div>

            <a href={siteInfo.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white rounded-3xl p-6 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center"><MessageCircle className="w-6 h-6" /></div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest">Quickest Reply</div>
                <div className="font-bold">Contact us on WhatsApp</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">Find Us</span>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-stone-900 mt-2">Visit our office in Anand, Gujarat</h2>
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden border border-stone-200 shadow-sm">
            <iframe
              title="SNZ Education on Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent("Madni Park Society, Salatia Rd, Anand, Gujarat 388001")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
