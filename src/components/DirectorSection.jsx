import React, { useState, useEffect, useRef } from 'react';
import { MapPin, MessageSquare, ArrowUpRight, CheckCircle2, Sparkles, Phone, Instagram, Flame, TrendingUp, Video, Layers } from 'lucide-react';
import MagneticButton from './MagneticButton';
import TiltCard from './TiltCard';

const FOUNDER_METRICS = [
  { numericValue: 6, suffix: ' Years', label: 'Content Experience', sub: 'Shooting, editing & visual storytelling' },
  { numericValue: 24, suffix: 'K+', label: 'Instagram Followers', sub: '@vibesbywahab creator community' },
  { numericValue: 8, suffix: '+', label: 'Brand Retainers', sub: 'End-to-end active page management' },
  { numericValue: 1000, suffix: '+', label: 'Promotions Delivered', sub: 'Over 3 years across Telangana & AP' },
];

function AnimatedCounter({ numericValue, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let startTimestamp = null;
          const duration = 1800; // 1.8s count-up duration

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            // Cubic ease-out for smooth deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            
            const currentVal = Math.floor(easeProgress * numericValue);
            setCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(numericValue);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <span ref={ref} className="inline-block">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function FounderSection() {
  return (
    <section id="founder" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden section-tone-dark">

      {/* Top glowing gradient divider */}
      <div className="absolute top-0 inset-x-0 nova-gradient-divider" />

      {/* Premium corner dot matrix accents */}
      <div className="absolute top-0 left-0 w-36 h-36 corner-dots-left opacity-35 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-36 h-36 corner-dots opacity-25 pointer-events-none" />

      {/* Ambient background subtle lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/6 via-sky-400/4 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Ghost decoration */}
      <div className="nova-ghost-text" style={{ fontSize: '16vw', top: '-2vw', right: '-2vw' }}>
        FOUNDER
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-[#5E8FFF] text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            ABOUT THE FOUNDER
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading leading-[1.12] text-white tracking-tight mb-3">
            Shaik Abdul Wahab
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 text-xs sm:text-sm font-medium text-sky-400 mt-3 sm:mt-2 px-4">
            <span className="text-center">Founder & Content Creator, WTS Nova</span>
            <span className="hidden sm:block text-blue-500">•</span>
            <div className="flex items-center justify-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="text-center">Nalgonda & Hyderabad, Telangana</span>
            </div>
          </div>
        </div>

        {/* ── FOUNDER MAIN SHOWCASE CARD WITH MILAN COMPAIN 3D TILT & SPECULAR LIGHTING ── */}
        <TiltCard
          maxTilt={3.5}
          glowColor="rgba(56, 189, 248, 0.16)"
          className="rounded-3xl bg-gradient-to-br from-[#0F204C] to-[#0A1638] border border-blue-500/25 p-4 sm:p-8 lg:p-12 mb-10 shadow-[0_20px_50px_rgba(4,9,26,0.6)] parallax-card-hover"
        >
          <div className="specular-line" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">

            {/* ── LEFT COLUMN: EDITORIAL FOUNDER PORTRAIT ───────────── */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-blue-400/30 bg-[#050B1C] shadow-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] group">
                
                {/* Founder Photo */}
                <img
                  src="/founder.jpg"
                  alt="Shaik Abdul Wahab - Founder, WTS Nova"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top Badge: Verified Founder */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono font-bold text-sky-300 uppercase tracking-wider shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    FOUNDER
                  </span>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: NARRATIVE, CAPABILITIES & ACTIONS ───── */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              <div className="mb-6 sm:mb-8 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-mono font-bold tracking-widest mb-3">
                  <Flame className="w-3.5 h-3.5 text-sky-400" />
                  FOUNDER & INFLUENCER
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white leading-[1.18]">
                  Turning Brands Into{' '}
                  <span className="text-gradient-accent">Digital Market Leaders</span>
                </h3>

                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans mt-3">
                  Shaik Abdul Wahab is the founder and lead strategist of WTS Nova — a premier social media management and growth agency based in Telangana. With deep expertise in algorithmic growth, viral content strategy, and digital branding, he helps busy founders and local businesses build a magnetic online presence that scales revenue on autopilot.
                </p>
              </div>

              {/* 4 Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-blue-500/20 hover:border-blue-400/40 transition-all hover:translate-y-[-2px]">
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center text-sky-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-white font-sans">End-to-End Management</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    Growth strategy, content design, caption writing & daily optimized publishing.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-blue-500/20 hover:border-blue-400/40 transition-all hover:translate-y-[-2px]">
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center text-sky-400">
                      <Video className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-white font-sans">High-Retention Content</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    Hook-driven editing, viral formats, and data-backed audience retention.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-blue-500/20 hover:border-blue-400/40 transition-all hover:translate-y-[-2px]">
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center text-sky-400">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-white font-sans">Brand Positioning</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    Elevating your business from a generic profile into an authoritative industry leader.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-blue-500/20 hover:border-blue-400/40 transition-all hover:translate-y-[-2px]">
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-6 h-6 rounded-md bg-blue-500/20 flex items-center justify-center text-sky-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-white font-sans">Growth Partnerships</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    Dedicated monthly retainers ensuring consistent, stress-free brand scaling.
                  </p>
                </div>

              </div>

              {/* Direct CTAs with Magnetic Effect */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-blue-500/20">
                <MagneticButton strength={0.25}>
                  <a
                    href="https://wa.me/917989578194?text=Hi%20Wahab!%20I'd%20like%20to%20talk%20about%20WTS%20Nova%20content%20management."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,0,0,0.5),0_0_12px_rgba(37,99,235,0.3)] transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Wahab</span>
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.25}>
                  <a
                    href="tel:917989578194"
                    className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20 transition-all backdrop-blur-md"
                  >
                    <Phone className="w-4 h-4 text-sky-400" />
                    <span>Call +91 7989 578 194</span>
                  </a>
                </MagneticButton>
              </div>

            </div>

          </div>
        </TiltCard>

        {/* ── 4 EXPERIENCE METRIC CARDS ────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FOUNDER_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#0F204C] to-[#0A1638] border border-blue-500/20 flex flex-col justify-start hover:border-blue-400/40 hover:from-[#13285E] hover:to-[#0D1C44] shadow-[0_10px_24px_-6px_rgba(0,0,0,0.4)] transition-all duration-300 group"
            >
              <div className="w-8 h-1 rounded-full bg-sky-400/60 group-hover:bg-sky-400 mb-3 transition-colors" />
              
              <div className="text-3xl sm:text-4xl font-extrabold font-sans text-white mb-2 tracking-tight">
                <AnimatedCounter numericValue={metric.numericValue} suffix={metric.suffix} />
              </div>

              <div className="text-sm sm:text-[15px] font-bold font-sans text-white mb-1 leading-snug">
                {metric.label}
              </div>

              <div className="text-xs font-sans text-slate-300 leading-relaxed font-normal">
                {metric.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
