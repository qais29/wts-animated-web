import React, { useState } from 'react';
import { Plus, X, ArrowUpRight, Film } from 'lucide-react';

const SERVICES_DATA = [
  {
    id: 'social-media-management',
    number: '01',
    title: 'Social Media Management',
    shortDesc: 'We manage your social media from strategy to publishing, keeping your brand consistent, active and worth following.',
    tags: ['Strategy & Publishing', 'Consistent Rollout', 'Active Engagement'],
    waText: 'Hi Wahab! I\'m interested in Social Media Management for my brand.',
    emoji: '📱'
  },
  {
    id: 'content-creation',
    number: '02',
    title: 'Content Creation',
    shortDesc: 'We turn your ideas, stories and expertise into content people actually want to watch, read and share.',
    tags: ['High-Retention Reels', 'Filming & Editing', 'Engaging Media'],
    waText: 'Hi Wahab! I\'d like to discuss Content Creation services with WTS NOVA.',
    emoji: '🎥'
  },
  {
    id: 'social-media-strategy',
    number: '03',
    title: 'Social Media Strategy',
    shortDesc: 'We build a clear content direction around your audience, goals and brand — so you always know what to say, create and post.',
    tags: ['Audience Direction', 'Content Pillars', 'Growth Roadmap'],
    waText: 'Hi Wahab! I want to get a Social Media Strategy for my business.',
    emoji: '🎯'
  },
  {
    id: 'digital-presence',
    number: '04',
    title: 'Digital Presence',
    shortDesc: 'We help shape how your brand shows up online — from its visual presence to the way it communicates with its audience.',
    tags: ['Visual Identity', 'Brand Messaging', 'Profile Setup'],
    waText: 'Hi Wahab! I\'m interested in shaping our Digital Presence with WTS NOVA.',
    emoji: '✨'
  },
  {
    id: 'growth-systems',
    number: '05',
    title: 'Growth Systems',
    shortDesc: 'We build simple systems that make your content more consistent, organised and easier to scale.',
    tags: ['Workflow Templates', 'Content Vault', 'Scalable Rollout'],
    waText: 'Hi Wahab! I\'d like to build Growth Systems for my content.',
    emoji: '⚙️'
  }
];

export default function ServicesSection() {
  const [expandedId, setExpandedId] = useState('social-media-management');

  const toggleAccordion = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="services-overview" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden section-tone-dark">
      
      {/* Top glowing gradient divider */}
      <div className="absolute top-0 inset-x-0 nova-gradient-divider" />

      {/* Premium corner dot matrix accents */}
      <div className="absolute top-0 right-0 w-36 h-36 corner-dots opacity-35 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 corner-dots-left opacity-25 pointer-events-none" />

      {/* Ambient background subtle lighting */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/6 via-sky-500/4 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-sky-500/5 via-blue-700/4 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── SECTION HEADER ── */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase mb-5">
            <Film className="w-3.5 h-3.5 text-sky-400" />
            OUR SERVICES
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading tracking-tight leading-[1.15] mb-4">
            <span className="text-white">Everything your </span>
            <span className="text-gradient-accent">digital presence needs.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mt-2">
            We bring together strategy, content and social media to help brands show up clearly, consistently and with purpose.
          </p>
        </div>

        {/* ── INTERACTIVE ACCORDION ROWS ── */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className={`group rounded-2xl transition-all duration-300 overflow-hidden relative parallax-card-hover ${
                  isExpanded
                    ? 'bg-gradient-to-br from-[#122457] to-[#0B183E] border border-blue-400/40 shadow-[0_12px_28px_-6px_rgba(0,0,0,0.5)]'
                    : 'bg-gradient-to-br from-[#0F204C] to-[#0A1638] border border-blue-500/20 hover:border-blue-400/35 hover:from-[#13285E] hover:to-[#0D1C44]'
                }`}
              >
                <div className="specular-line" />

                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full py-4 sm:py-6 px-4 sm:px-8 flex items-start sm:items-center justify-between text-left gap-3 sm:gap-4 focus:outline-none"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 pr-2">
                    <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 pt-0.5 sm:pt-0">
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-blue-500/15 border border-blue-400/30 text-sky-300 text-[10px] sm:text-xs font-mono font-bold leading-none">
                        {service.number}
                      </span>
                      <span className="text-lg sm:text-2xl leading-none">{service.emoji}</span>
                    </div>
                    <div className="flex items-center flex-wrap gap-2">
                      <h3 className={`text-[17px] sm:text-2xl font-bold font-heading leading-[1.15] sm:leading-snug transition-colors pt-0.5 sm:pt-0 ${
                        isExpanded ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {service.title}
                      </h3>
                      {isExpanded && (
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400 shadow-[0_0_10px_#38BDF8] shrink-0 animate-pulse mt-1 sm:mt-0 hidden sm:inline-block" />
                      )}
                    </div>
                  </div>

                  <div className="flex items-start sm:items-center shrink-0 pt-0.5 sm:pt-0">
                    <div className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-blue-500/30 rotate-180' 
                        : 'bg-blue-500/10 group-hover:bg-blue-500/20 group-hover:scale-110'
                    }`}>
                      {isExpanded ? (
                        <X className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-sky-300" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-blue-300" />
                      )}
                    </div>
                  </div>
                </button>

                {/* ── EXPANDED BODY ── */}
                {isExpanded && (
                  <div className="px-4 sm:px-8 pb-4 sm:pb-6 pt-3 border-t border-blue-500/20 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="space-y-3 max-w-3xl">
                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                        {service.shortDesc}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        {service.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/25 text-sky-300 text-xs font-mono font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
