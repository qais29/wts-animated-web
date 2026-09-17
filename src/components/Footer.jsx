import React from 'react';
import { MapPin, Phone, MessageSquare, ArrowUpRight, Sparkles, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#04091A] nova-dots text-slate-300 py-16 overflow-hidden px-4 sm:px-6 lg:px-8 border-t border-blue-500/20">

      {/* Top glowing gradient divider */}
      <div className="absolute top-0 inset-x-0 nova-gradient-divider-glow" />

      {/* Premium corner dot matrix accents */}
      <div className="absolute top-0 right-0 w-36 h-36 corner-dots opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 corner-dots-left opacity-20 pointer-events-none" />

      {/* Ambient footer background subtle lighting — minimal glare */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/6 via-sky-500/4 to-transparent rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[450px] bg-gradient-to-tl from-blue-700/5 via-sky-600/4 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-900/6 via-sky-500/4 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Primary CTA Banner */}
        <div className="nova-card-hero p-8 sm:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#5E8FFF]/[0.08] rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <div className="nova-label mb-4 w-fit">
              <Sparkles className="w-3 h-3" />
              PRIMARY INVITATION
            </div>
            <h3 className="text-3xl sm:text-5xl font-extrabold font-heading leading-[1.18] sm:leading-[1.15] text-white pb-1 mt-2 mb-3">
              Let's Build Your{' '}
              <span className="text-gradient-accent">Digital Identity.</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              We help businesses, creators and brands build a stronger identity online through content, storytelling, professional production and social media.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto relative z-10">
            <a
              href="https://wa.me/917989578194?text=Hi%20Wahab!%20Let's%20build%20our%20digital%20identity%20with%20WTS%20Nova."
              target="_blank"
              rel="noopener noreferrer"
              className="nova-btn-primary px-7 py-4"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <a href="tel:7989578194" className="nova-btn-ghost px-7 py-4">
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-5 space-y-5">
            <img src="/logo-light.png" alt="WTS Nova Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
            <p className="text-xs sm:text-sm text-slate-200 max-w-sm leading-relaxed">
              WTS Nova is a Social Media Management and Content Creation Agency. We help businesses and busy founders scale online by fully managing their social media presence and driving real growth.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-sky-300 text-xs font-mono">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              NALGONDA & HYDERABAD, TELANGANA
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono font-extrabold text-[#5E8FFF] uppercase tracking-widest">
              ✦ SECTIONS
            </h4>
            <ul className="space-y-3 text-xs">
              {[
                ['#hero', 'Home (Cinema Hero)'],
                ['#about', 'About & Why WTS Nova'],
                ['#services', 'Services (5 Categories)'],
                ['#proof', 'Client Proof & Reviews'],
                ['#founder', 'Founder (Shaik Abdul Wahab)'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-mono font-extrabold text-[#5E8FFF] uppercase tracking-widest">
              ✦ DIRECT CONTACT
            </h4>
            <div className="space-y-2">
              {[
                { href: 'tel:7989578194', icon: <Phone className="w-3.5 h-3.5" />, label: 'Phone: 7989 578 194', cta: 'CALL', ext: false },
                { href: 'https://instagram.com/wtsnova', icon: <Instagram className="w-3.5 h-3.5" />, label: '@wtsnova', cta: null, ext: true },
                { href: 'https://instagram.com/vibesbywahab', icon: <Instagram className="w-3.5 h-3.5" />, label: '@vibesbywahab (Founder)', cta: null, ext: true },
                { href: 'mailto:wtsnova.agency@gmail.com', icon: <Mail className="w-3.5 h-3.5" />, label: 'wtsnova.agency@gmail.com', cta: null, ext: false },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.ext ? '_blank' : undefined}
                  rel={item.ext ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-xl bg-transparent border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.04] hover:-translate-y-0.5 font-medium text-slate-300 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 text-sky-400 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="truncate text-xs">{item.label}</span>
                  </div>
                  {item.cta
                    ? <span className="text-[10px] font-mono text-sky-400 font-bold shrink-0 ml-2">{item.cta}</span>
                    : <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 shrink-0 ml-2 transition-colors" />
                  }
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-slate-400">
          <div>© {new Date().getFullYear()} WTS NOVA. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-1.5">
            <span>LOCATION: NALGONDA, TELANGANA</span>
            <span className="text-[#5E8FFF]/40">★</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
