import React from 'react';
import { Video, Sparkles, Camera, TrendingUp, Layers, Film } from 'lucide-react';

const MARQUEE_ITEMS = [
  { text: 'FULL-SUITE SOCIAL MANAGEMENT', icon: Video, highlight: false },
  { text: 'LOCAL BRAND SCALER', icon: Sparkles, highlight: true },
  { text: 'SOCIAL MEDIA MANAGEMENT & GROWTH AGENCY', icon: TrendingUp, highlight: true },
  { text: 'CONTENT CREATION', icon: Camera, highlight: false },
  { text: 'EDITING', icon: Film, highlight: false },
  { text: 'STRATEGIES & IMPLEMENTATION', icon: Layers, highlight: true },
];

export default function MarqueeTicker() {
  const repeatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="relative z-30 py-3 sm:py-7 bg-white border-y border-slate-200/90 overflow-hidden shadow-[0_6px_30px_rgba(0,0,0,0.18)]">

      <div className="flex w-max animate-marquee space-x-10 sm:space-x-14 items-center">
        {repeatedItems.map((item, idx) => {
          const Icon = item.icon;
          const isBlue = idx % 2 === 1;
          return (
            <div key={idx} className="flex items-center gap-4 group cursor-default">
              <span className={`text-xs sm:text-sm font-sans font-extrabold uppercase tracking-wider flex items-center gap-2.5 transition-colors ${
                isBlue 
                  ? 'text-blue-700 font-extrabold' 
                  : 'text-slate-900 font-extrabold group-hover:text-blue-600'
              }`}>
                <Icon className={`w-4 h-4 ${isBlue ? 'text-blue-600' : 'text-slate-900'}`} />
                {item.text}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600/40" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
