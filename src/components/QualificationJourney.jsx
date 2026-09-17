import React from 'react';
import { Users, Building2, Utensils, Home, Stethoscope, Rocket, Gem } from 'lucide-react';

const CLIENT_OPTIONS = [
  {
    name: 'Local Businesses',
    desc: 'Retail shops, commercial stores & showrooms',
    icon: Building2,
    emoji: '🏪',
  },
  {
    name: 'Restaurants',
    desc: 'Cafes, food brands & fine dining spaces',
    icon: Utensils,
    emoji: '🍽️',
  },
  {
    name: 'Real Estate',
    desc: 'Builders, architects & property developments',
    icon: Home,
    emoji: '🏛️',
  },
  {
    name: 'Hospitals, Clinics & Doctors',
    desc: 'Healthcare centers, specialists & clinics',
    icon: Stethoscope,
    emoji: '🩺',
  },
  {
    name: 'Startups & Tech Founders',
    desc: 'Growing companies & founder personal brands',
    icon: Rocket,
    emoji: '🚀',
  },
  {
    name: 'Lifestyle Brands',
    desc: 'Fashion, jewelry, wellness & luxury products',
    icon: Gem,
    emoji: '💎',
  },
];

export default function QualificationJourney() {
  return (
    <section id="clients" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden section-tone-dark">

      {/* Top glowing gradient divider */}
      <div className="absolute top-0 inset-x-0 nova-gradient-divider" />

      {/* Premium corner dot matrix accents */}
      <div className="absolute top-0 right-0 w-36 h-36 corner-dots opacity-35 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 corner-dots-left opacity-25 pointer-events-none" />

      {/* Ambient background glow orb — subtle without glare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-gradient-to-r from-blue-600/6 via-sky-500/4 to-transparent rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />

      {/* Ghost watermark text */}
      <div className="nova-ghost-text" style={{ fontSize: '16vw', bottom: '-2vw', right: '-1vw' }}>
        NOVA
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Cinema Container Card */}
        <div className="cinema-card p-5 sm:p-12 overflow-hidden">
          <div className="specular-line" />

          <div className="relative z-10">
            {/* Header with simple, clear wording */}
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-sky-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
                <Users className="w-3.5 h-3.5 text-sky-400" />
                WHO WE WORK WITH
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white leading-snug mb-3">
                Businesses We <span className="text-gradient-accent">Work With</span>
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                We make high-quality video content and manage social media for businesses that want to reach more people, build trust, and gain more customers.
              </p>
            </div>

            {/* 6 Category Options — Clean 3x2 Grid on Mobile & Desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5">
              {CLIENT_OPTIONS.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="group relative rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0F204C] to-[#0A1638] hover:from-[#13285E] hover:to-[#0D1C44] border border-blue-500/20 hover:border-blue-400/40 p-3 sm:p-6 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-2 sm:gap-4 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.4)] hover:shadow-[0_14px_30px_-5px_rgba(0,0,0,0.5),0_0_12px_rgba(37,99,235,0.12)] hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="specular-line" />

                    {/* Icon / Emoji badge */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-lg sm:text-xl shrink-0 group-hover:scale-110 group-hover:bg-blue-500/25 transition-all shadow-sm">
                      <span>{item.emoji}</span>
                    </div>

                    <div className="min-w-0 flex-1 w-full flex flex-col items-center sm:items-start">
                      <div className="flex w-full items-center justify-center sm:justify-between gap-1 sm:gap-2 mb-1">
                        <h4 className="text-[11px] sm:text-lg font-bold font-heading text-white group-hover:text-sky-200 transition-colors leading-tight sm:leading-snug">
                          {item.name}
                        </h4>
                        <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-sky-400 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all shrink-0" />
                      </div>
                      <p className="text-[9px] sm:text-sm text-slate-300 leading-[1.3] sm:leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
