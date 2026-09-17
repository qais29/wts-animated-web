import React from 'react';
import { Film, Play, ArrowUpRight, ExternalLink, Sparkles } from 'lucide-react';

const PORTFOLIO_ITEMS = [
  {
    title: 'Ama Butfa Restaurant & Cafe',
    category: 'Hospitality & Commercial',
    image: '/frames/ezgif-frame-040.webp',
    views: '1.2M Views',
    result: 'Viral Local Footfall',
    description: 'Cinematic reel campaign capturing bustling evening ambience, signature dishes, and chef craftsmanship in Nalgonda.'
  },
  {
    title: 'Founder Spotlight: Medical & Personal Brand',
    category: 'Personal Brand & Authority',
    image: '/frames/ezgif-frame-120.webp',
    views: '850K Views',
    result: 'High-Value Inquiries',
    description: 'Authority-building video production establishing doctor expertise and patient trust with pristine lighting.'
  },
  {
    title: 'Retail Showroom Grand Launch',
    category: 'Brand & Promotional Shoots',
    image: '/frames/ezgif-frame-180.webp',
    views: '2.4M Views',
    result: 'Store Sellout',
    description: 'High-energy cinematic teaser and grand launch campaign driving massive first-weekend foot traffic.'
  },
  {
    title: 'Commercial Real Estate & Spaces',
    category: 'Architecture & Drone Cinema',
    image: '/frames/ezgif-frame-220.webp',
    views: '1.8M Views',
    result: 'Premium Inquiries',
    description: 'Fluid 4K camera movements and exterior architectural perspectives highlighting luxury interior craftsmanship.'
  }
];

export default function PortfolioSection() {
  return (
    <section id="work" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden section-tone-dark border-y border-blue-500/20">

      {/* Top glowing gradient divider */}
      <div className="absolute top-0 inset-x-0 nova-gradient-divider" />

      {/* Premium corner dot matrix accents */}
      <div className="absolute top-0 right-0 w-36 h-36 corner-dots opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 corner-dots-left opacity-30 pointer-events-none" />

      {/* Ambient background subtle lighting — minimal glare */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/6 via-sky-400/4 to-transparent rounded-full blur-[130px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-sky-500/5 via-blue-700/4 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Ghost watermark */}
      <div className="nova-ghost-text" style={{ fontSize: '14vw', bottom: '-2vw', left: '-1vw' }}>
        WORK
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
              <Film className="w-3.5 h-3.5 text-sky-400" />
              SELECTED WORK & PRODUCTIONS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading leading-[1.15] pb-1">
              <span className="text-white">Recent Work & </span>
              <span className="text-gradient-accent">Viral Campaigns.</span>
            </h2>
            <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed max-w-lg">
              Real commercial shoots for restaurants, retail, and founders that built recognizable digital presence across Telangana.
            </p>
          </div>

          <a
            href="https://instagram.com/wtsnova"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-sky-300 text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-2 self-start md:self-auto shrink-0 shadow-sm"
          >
            <span>View More on @wtsnova</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <div key={idx} className="cinema-card overflow-hidden flex flex-col group">
              <div className="specular-line" />

              {/* Thumbnail Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#030712]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060D24] via-[#060D24]/20 to-transparent pointer-events-none" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center border border-white/30 shadow-[0_4px_16px_rgba(0,0,0,0.6)] scale-90 group-hover:scale-100 transition-transform duration-300 backdrop-blur-md">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-sky-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Metrics Badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md border border-blue-400/40 text-[10px] font-mono font-bold text-white shadow-md">
                    ⚡ {item.views}
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-slate-300">
                    {item.result}
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug mb-2.5 group-hover:text-sky-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>

                <div className="pt-4 border-t border-blue-500/20 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-semibold text-sky-400 uppercase tracking-wider">
                    DIRECTED BY SHAIK ABDUL WAHAB
                  </span>
                  <a
                    href="https://wa.me/917989578194?text=Hi%20Wahab!%20I%20loved%20the%20portfolio%20reels%20on%20the%20website.%20Can%20we%20do%20something%20similar%20for%20my%20brand?"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-sky-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Request Shoot</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
