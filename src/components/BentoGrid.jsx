import React from 'react';
import { Camera, Sparkles, Layers, ArrowUpRight, Film, Share2, Users, Zap } from 'lucide-react';

const SERVICE_CATEGORIES = [
  {
    category: 'Social Media',
    tag: 'SOCIAL MEDIA',
    highlight: 'Comprehensive social presence',
    items: ['Social Media Management', 'Content Strategy & Planning', 'Content Publishing & Management'],
    icon: Share2, cols: 'lg:col-span-6', type: 'default'
  },
  {
    category: 'Content & Production',
    tag: 'CONTENT & PRODUCTION',
    highlight: '4K cinema & algorithmic pacing',
    items: ['Reels & Short-Form Content', 'Professional Video Production', 'Video Editing & Post-Production'],
    icon: Camera, cols: 'lg:col-span-6', type: 'default'
  },
  {
    category: 'Brand & Business',
    tag: 'BRAND & BUSINESS',
    highlight: 'Prestige storytelling that converts',
    items: ['Brand Storytelling', 'Business & Brand Promotional Shoots', 'Corporate & Business Content', 'Promotional Campaigns'],
    icon: Film, cols: 'lg:col-span-4', type: 'feature'
  },
  {
    category: 'People & Moments',
    tag: 'PEOPLE & MOMENTS',
    highlight: 'Human connection & milestone reels',
    items: ['Influencer & Personal Brand Content', 'Event & Celebration Content', 'Quick Wedding Reels', 'Travel & Lifestyle Content'],
    icon: Users, cols: 'lg:col-span-4', type: 'default'
  },
  {
    category: 'On-Demand',
    tag: 'ON-DEMAND · FAST TURNAROUND',
    highlight: 'Immediate production response',
    items: ['Quick Reels', 'On-Demand Shoots'],
    icon: Zap, cols: 'lg:col-span-4', type: 'cyan'
  }
];

export default function BentoGrid() {
  return (
    <section id="services" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 nova-section-border overflow-hidden">

      {/* Ghost watermark */}
      <div className="nova-ghost-text" style={{ fontSize: '14vw', top: '-1vw', left: '-1vw' }}>
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="nova-label mb-5 w-fit">
              <Sparkles className="w-3 h-3" />
              WHAT WE DO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading leading-[1.05]">
              <span className="text-white">Complete Creative &</span>
              <br />
              <span className="text-gradient-blue">Content Services.</span>
            </h2>
            <p className="mt-5 text-slate-200 text-sm sm:text-base leading-relaxed max-w-lg">
              From full social media takeover to urgent on-demand shoots. Everything your business needs to stand out online.
            </p>
          </div>

          <a
            href="https://wa.me/917989578194?text=Hi%20Wahab!%20I'd%20like%20to%20inquire%20about%20WTS%20Nova%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="nova-btn-ghost self-start md:self-auto shrink-0"
          >
            <span>Inquire About Services</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            const cardClass =
              cat.type === 'feature' ? 'nova-card-feature' :
              cat.type === 'cyan'    ? 'nova-card-cyan'    :
                                       'nova-card';
            const accentColor = cat.type === 'cyan' ? '#22D3EE' : '#5E8FFF';
            const accentBg = cat.type === 'cyan' ? 'rgba(34,211,238,0.10)' : 'rgba(94,143,255,0.10)';
            const accentBorder = cat.type === 'cyan' ? 'rgba(34,211,238,0.20)' : 'rgba(94,143,255,0.18)';

            return (
              <div
                key={idx}
                className={`${cat.cols} ${cardClass} p-7 sm:p-9 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="nova-label-cyan"
                      style={cat.type !== 'cyan' ? {
                        background: accentBg,
                        borderColor: accentBorder,
                        color: cat.type === 'feature' ? '#B4CCFF' : '#93BBFF'
                      } : {}}
                    >
                      {cat.tag}
                    </div>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border group-hover:scale-110 transition-transform shrink-0"
                      style={{ background: accentBg, borderColor: accentBorder, color: accentColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight mb-2">
                    {cat.category}
                  </h3>

                  <p
                    className="text-xs font-semibold mb-6"
                    style={{ color: cat.type === 'cyan' ? 'rgba(34,211,238,0.7)' : 'rgba(94,143,255,0.7)' }}
                  >
                    {cat.highlight}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {cat.items.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-center gap-3">
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ background: accentColor }}
                        />
                        <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="pt-4 border-t flex items-center justify-between"
                  style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                    WTS NOVA PRODUCTION
                  </span>
                  <a
                    href={`https://wa.me/917989578194?text=Hi%20Wahab!%20I'm%20interested%20in%20${encodeURIComponent(cat.category)}%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    style={{ color: accentColor }}
                  >
                    <span>Book Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
