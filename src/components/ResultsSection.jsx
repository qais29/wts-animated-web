import React from 'react';
import { Award, Zap, Globe, TrendingUp, Sparkles } from 'lucide-react';

const STATS = [
  {
    value: '12+',
    label: 'Local Businesses Managed',
    description: 'We help retail shops, restaurants, doctors, and brands in Hyderabad and Nalgonda grow online.',
    dotColor: '#38BDF8',
    badge: 'Hyderabad & Nalgonda',
    icon: Globe,
    emoji: '🏪'
  },
  {
    value: '8.4x',
    label: 'Higher Reach & Views',
    description: 'Our clients get thousands of reel views, new followers, and direct messages from interested customers.',
    dotColor: '#60A5FA',
    badge: 'More Views & Customers',
    icon: TrendingUp,
    emoji: '📈'
  },
  {
    value: '20+',
    label: 'High-Quality Video Styles',
    description: 'Professional camera setup, clear lighting, trending audio, and pro editing made specifically for Instagram.',
    dotColor: '#0066FF',
    badge: 'Pro Video Shoots',
    icon: Zap,
    emoji: '⚡'
  },
  {
    value: '98%',
    label: 'Happy & Active Clients',
    description: 'Our client partners stay with us month after month because their social media keeps growing.',
    dotColor: '#93C5FD',
    badge: 'Long-Term Growth',
    icon: Award,
    emoji: '🏆'
  }
];

export default function ResultsSection() {
  return (
    <section id="results" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden section-tone-dark border-y border-blue-500/20">
      
      {/* Top glowing gradient divider */}
      <div className="absolute top-0 inset-x-0 nova-gradient-divider" />

      {/* Premium corner dot matrix accents */}
      <div className="absolute top-0 right-0 w-36 h-36 corner-dots opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 corner-dots-left opacity-30 pointer-events-none" />

      {/* Background ambient subtle lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-blue-600/6 via-sky-400/4 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-gradient-to-tr from-sky-500/5 via-blue-700/4 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── HEADER ── */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            PROVEN IMPACT & METRICS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading tracking-tight leading-[1.15] pb-1">
            <span className="text-white">OUR </span>
            <span className="text-gradient-accent">RESULTS</span>
          </h2>
        </div>

        {/* ── 4 STAT CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="cinema-card p-7 sm:p-8 flex flex-col justify-between overflow-hidden group"
              >
                <div className="specular-line" />

                <div>
                  {/* Stat Value & Dot Indicator */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight leading-none group-hover:text-sky-200 transition-colors">
                      {stat.value}
                    </div>
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse mt-2"
                      style={{
                        backgroundColor: stat.dotColor,
                        boxShadow: `0 0 6px ${stat.dotColor}`
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white mb-2.5">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 mt-6 border-t border-blue-500/20 flex items-center justify-between text-xs font-mono text-sky-300/90">
                  <span className="flex items-center gap-1.5">
                    <span className="text-sm">{stat.emoji}</span>
                    <span>{stat.badge}</span>
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-sky-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
