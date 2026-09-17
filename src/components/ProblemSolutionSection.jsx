import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  AlertTriangle,
  Eye,
  GitFork,
  Sparkles,
  Rocket,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Layers,
  Flame,
  Zap,
  Activity,
  Cpu,
  Clock,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Video,
  Share2,
  Target
} from 'lucide-react';
import MagneticButton from './MagneticButton';

/* ─── 6 NARRATIVE STAGES (Proper Original Stages & Texts) ─── */
const STORY_STAGES = [
  {
    id: 'reality',
    step: '01',
    badge: 'THE REALITY',
    title: 'You are busy running your business.',
    subtext: 'You spend all your time serving clients, making sales, and managing daily work.',
    metric: 'MAIN FOCUS',
    metricSub: 'Your business needs 100% of your time.',
    icon: Building2,
    accent: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.35)',
    gradient: 'from-sky-500 to-blue-600',
    bgTone: '#071536',
    nodes: [
      { label: 'OPERATIONS', sub: 'Active', icon: Cpu, angle: 0 },
      { label: 'CLIENTS', sub: 'High Priority', icon: CheckCircle2, angle: 120 },
      { label: 'SALES', sub: 'Revenue Core', icon: TrendingUp, angle: 240 },
    ]
  },
  {
    id: 'problem',
    step: '02',
    badge: 'THE PROBLEM',
    title: 'Creating content takes too much time.',
    subtext: 'Thinking of ideas, shooting videos, and editing reels takes 20+ hours every week.',
    metric: 'TOO MUCH WORK',
    metricSub: 'It takes hours away from your real business.',
    icon: AlertTriangle,
    accent: '#F59E0B',
    glow: 'rgba(245, 158, 11, 0.35)',
    gradient: 'from-amber-500 to-red-500',
    bgTone: '#1F1206',
    chaoticCards: [
      { title: 'Script Block', desc: 'No content ideas', color: '#EF4444', x: 140, y: 110, delay: 0 },
      { title: '4-Hour Edits', desc: 'Editing takes long', color: '#F97316', x: 500, y: 120, delay: 0.2 },
      { title: 'Zero Reach', desc: 'Low view counts', color: '#F59E0B', x: 160, y: 360, delay: 0.4 },
      { title: 'Inconsistent', desc: 'Posting rarely', color: '#EF4444', x: 490, y: 370, delay: 0.6 },
    ]
  },
  {
    id: 'matters',
    step: '03',
    badge: 'WHY IT MATTERS',
    title: 'Clients check your page before buying.',
    subtext: 'People look at your Instagram to see if your business is active and trustworthy.',
    metric: 'BUILDING TRUST',
    metricSub: 'Customers trust brands they see online.',
    icon: Eye,
    accent: '#60A5FA',
    glow: 'rgba(96, 165, 250, 0.35)',
    gradient: 'from-blue-500 to-indigo-500',
    bgTone: '#0A183D',
    radarMetrics: [
      { label: 'BRAND TRUST', val: '94%', icon: ShieldCheck, color: '#38BDF8' },
      { label: 'VISIBILITY', val: '10x', icon: Target, color: '#60A5FA' },
      { label: 'ORGANIC LEADS', val: '+340%', icon: Activity, color: '#818CF8' }
    ]
  },
  {
    id: 'better-way',
    step: '04',
    badge: 'THE BETTER WAY',
    title: "Don't do all the work yourself.",
    subtext: 'You focus on running your business, while a dedicated team handles your social media.',
    metric: 'WORK SMART',
    metricSub: 'Keep running your business while we handle social media.',
    icon: GitFork,
    accent: '#818CF8',
    glow: 'rgba(129, 140, 248, 0.35)',
    gradient: 'from-indigo-500 to-purple-500',
    bgTone: '#101038',
  },
  {
    id: 'nova-solution',
    step: '05',
    badge: 'WTS NOVA SOLUTION',
    title: 'Complete Social Media Management.',
    subtext: 'We handle your strategy, content creation, video production, and daily page management.',
    metric: '100% DONE FOR YOU',
    metricSub: 'Strategy, content creation, and account management.',
    icon: Sparkles,
    accent: '#38BDF8',
    glow: 'rgba(56, 189, 248, 0.45)',
    gradient: 'from-sky-400 via-blue-500 to-cyan-300',
    bgTone: '#06173D',
    deliverables: [
      { title: 'Content Creation', icon: Video },
      { title: 'Social Media Strategy', icon: Zap },
      { title: 'Social Media Management', icon: Share2 },
      { title: 'Reels & Video Editing', icon: Activity }
    ]
  },
  {
    id: 'payoff',
    step: '06',
    badge: 'THE RESULT',
    title: 'You focus on sales. We grow your page.',
    subtext: 'More customers find you online while you get 20+ hours of your time back.',
    metric: 'MORE CUSTOMERS',
    metricSub: 'Get new clients and save your time.',
    cta: "Start Growing Your Brand",
    ctaLink: "https://wa.me/917989578194?text=Hi%20Wahab!%20I'd%20like%20to%20discuss%20WTS%20Nova%20social%20media%20management.",
    icon: Rocket,
    accent: '#38BDF8',
    bgTone: '#041B44',
  },
];

export default function ProblemSolutionSection() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Smooth LERP state
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  // Responsive & Motion Checks
  useEffect(() => {
    const checkMotion = () => {
      setPrefersReducedMotion(
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      );
    };
    checkMotion();
    window.addEventListener('resize', checkMotion);
    return () => window.removeEventListener('resize', checkMotion);
  }, []);

  // Scroll listener with friction LERP engine (Mobile & Desktop)
  useEffect(() => {
    if (prefersReducedMotion) return;

    let animId;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const raw = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      targetProgressRef.current = raw;
    };

    const renderLoop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        const frictionFactor = 0.08;
        const maxSpeedPerFrame = 0.025;
        const step = Math.sign(diff) * Math.min(Math.abs(diff * frictionFactor), maxSpeedPerFrame);
        currentProgressRef.current += step;
        setScrollProgress(currentProgressRef.current);
      }
      animId = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animId);
    };
  }, [prefersReducedMotion]);

  // Compute Active Stage (0 to 5)
  const currentStageIndex = useMemo(() => {
    return Math.min(Math.floor(scrollProgress * 5.999), 5);
  }, [scrollProgress]);

  const activeStage = STORY_STAGES[currentStageIndex];

  // Direct Stage Navigation Trigger
  const jumpToStage = (index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable = rect.height - window.innerHeight;
    const targetScroll = scrollTop + (index / 5) * totalScrollable;

    if (window.__lenis) {
      window.__lenis.scrollTo(targetScroll, { duration: 0.8 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const pathTotalLength = 950;
  const strokeOffset = pathTotalLength * (1 - Math.min(scrollProgress * 1.15, 1));
  const t = Math.min(scrollProgress * 1.05, 1);
  const photonX = 50 + t * 600;
  const photonY = 250 + Math.sin(t * Math.PI * 3) * 65;

  return (
    <section
      ref={containerRef}
      id="problem-solution"
      className="relative h-[650vh] sm:h-[720vh] bg-[#060D24] text-slate-100 font-sans !p-0"
    >
      {/* Top Hairline Divider */}
      <div className="absolute top-0 inset-x-0 nova-gradient-divider" />

      {/* STICKY PINNED VIEWPORT (Mobile & Desktop) */}
      <div className="sticky top-0 h-screen min-h-[100dvh] max-h-[100dvh] w-full overflow-hidden flex flex-col justify-between p-3 sm:p-6 xl:p-10 select-none">
        
        {/* Dynamic Background Glow Layer */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-1000"
          style={{
            background: `radial-gradient(circle 650px at 50% 50%, ${activeStage.glow}, transparent 75%)`,
            opacity: 0.65,
          }}
        />

        {/* ── 1. HUD HEADER BAR ── */}
        <div className="relative z-30 flex items-center justify-between w-full max-w-7xl mx-auto pt-1 sm:pt-2">
          
          {/* Active Stage Badge */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-[11px] sm:text-xs font-mono font-bold text-sky-400">
              {activeStage.step}/06
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-semibold text-slate-300 tracking-wider uppercase truncate max-w-[120px] sm:max-w-none">
              {activeStage.badge}
            </span>
          </div>

          {/* Stepper Navigation Pills */}
          <div className="flex items-center gap-1 sm:gap-2 bg-[#04091A]/90 backdrop-blur-xl px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-white/15 shadow-none">
            {STORY_STAGES.map((s, idx) => {
              const isActive = idx === currentStageIndex;
              const isPassed = idx < currentStageIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => jumpToStage(idx)}
                  title={`Stage ${s.step}: ${s.badge}`}
                  className="group relative flex items-center justify-center p-0.5 sm:p-1.5 cursor-pointer transition-all"
                >
                  <span
                    className={`block rounded-full transition-all duration-500 ${
                      isActive
                        ? 'w-3.5 sm:w-7 h-1.5 sm:h-2.5 bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_15px_#38BDF8]'
                        : isPassed
                        ? 'w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-blue-500/80 hover:bg-blue-400'
                        : 'w-1.5 sm:w-2.5 h-1.5 sm:h-2.5 bg-white/20 hover:bg-white/50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Controls & Progress % */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <button
              onClick={() => jumpToStage(Math.max(0, currentStageIndex - 1))}
              disabled={currentStageIndex === 0}
              className="p-1.5 sm:p-2 rounded-full bg-slate-900/80 border border-white/10 hover:border-sky-400/50 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Previous stage"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              onClick={() => jumpToStage(Math.min(5, currentStageIndex + 1))}
              disabled={currentStageIndex === 5}
              className="p-1.5 sm:p-2 rounded-full bg-slate-900/80 border border-white/10 hover:border-sky-400/50 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next stage"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <div className="text-right pl-2 hidden sm:block">
              <span className="text-[10px] font-mono text-slate-400 block tracking-widest uppercase">
                PROGRESS
              </span>
              <span className="text-xs font-mono font-bold text-sky-400">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>
          </div>

        </div>

        {/* ── 2. CENTER EDITORIAL RESPONSIVE CONTAINER ── */}
        <div className="relative w-full max-w-7xl mx-auto flex-1 flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 items-center justify-center my-auto overflow-hidden px-2 sm:px-4">
          
          {/* ── FROSTED GLASS EDITORIAL PANEL (Below design on Mobile, Left Column on Desktop - Shortened Vertically) ── */}
          <div className="order-2 lg:order-1 w-full max-w-xl lg:max-w-none lg:col-span-5 mx-auto relative z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.id}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="px-4 py-3 sm:px-7 sm:py-5 xl:px-8 xl:py-7 rounded-2xl sm:rounded-3xl bg-slate-950/80 backdrop-blur-2xl border border-white/15 shadow-none relative overflow-hidden group"
              >
                {/* Subtle Corner Glow Accent */}
                <div
                  className="absolute -top-20 -left-20 w-40 h-40 sm:w-48 sm:h-48 rounded-full pointer-events-none opacity-40 blur-2xl"
                  style={{ background: activeStage.accent }}
                />

                {/* Stage Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase mb-1 sm:mb-2">
                  <activeStage.icon className="w-3.5 h-3.5 text-sky-400" />
                  <span>{activeStage.badge}</span>
                </div>

                {/* Main Headline */}
                <h3 className="text-xl sm:text-2xl xl:text-3xl font-extrabold font-heading text-white tracking-tight leading-snug mb-1 sm:mb-2">
                  {activeStage.title}
                </h3>

                {/* Narrative Subtext */}
                <p className="text-[11px] sm:text-xs xl:text-sm text-slate-200 leading-snug font-sans mb-2 sm:mb-3">
                  {activeStage.subtext}
                </p>

                {/* Deliverables / Feature Chips for Stage 5 */}
                {activeStage.deliverables && (
                  <div className="grid grid-cols-2 gap-1.5 mb-2 sm:mb-3">
                    {activeStage.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 p-1.5 rounded-lg bg-blue-950/40 border border-blue-400/20 text-[10px] sm:text-xs text-sky-200">
                        <item.icon className="w-3 h-3 text-sky-400 flex-shrink-0" />
                        <span className="font-semibold truncate">{item.title}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Metric Box */}
                <div className="pt-2 sm:pt-3 border-t border-white/15 flex flex-col gap-0.5">
                  <span className="text-[9px] sm:text-[11px] font-mono font-bold text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Zap className="w-2.5 h-2.5 text-sky-400" />
                    {activeStage.metric}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-300 font-sans leading-snug">
                    {activeStage.metricSub}
                  </span>
                </div>

                {/* Stage 6 CTA */}
                {activeStage.cta && (
                  <div className="pt-2 sm:pt-4">
                    <MagneticButton strength={0.3}>
                      <a
                        href={activeStage.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-fit inline-flex py-2.5 sm:py-3 px-5 sm:px-6 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 hover:from-blue-500 hover:to-sky-400 text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(56,189,248,0.35)] transition-all active:scale-95"
                      >
                        <span>{activeStage.cta.replace(' →', '')}</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </a>
                    </MagneticButton>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── HIGH-TECH KINETIC CANVAS (Above box on Mobile, Right Column on Desktop - Enlarged Size) ── */}
          <div className="order-1 lg:order-2 flex lg:col-span-7 relative h-[210px] xs:h-[240px] sm:h-[280px] lg:h-[480px] w-full items-center justify-center pointer-events-none overflow-visible bg-transparent border-none shadow-none -mt-4 sm:mt-0 mb-8 sm:mb-8 lg:mb-0 scale-[1.3] sm:scale-100">
            
            {/* Dynamic SVG Visual Engine */}
            <svg
              viewBox="0 0 700 500"
              className="w-full h-full pointer-events-none overflow-visible max-h-[210px] xs:max-h-[240px] sm:max-h-[280px] lg:max-h-none"
              vectorEffect="non-scaling-stroke"
            >
              <defs>
                {/* Neon Glow Filter - Expanded bounds prevent square clipping */}
                <filter id="pro-spline-glow" x="-300%" y="-300%" width="700%" height="700%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Gradient Lines */}
                <linearGradient id="pro-spline-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#38BDF8" stopOpacity="1" />
                  <stop offset="100%" stopColor="#818CF8" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="pro-chaos-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>

              {/* Spline Guide Path */}
              <path
                d="M 50,250 C 200,120 300,380 350,250 C 400,120 500,380 650,250"
                fill="none"
                stroke="rgba(56, 189, 248, 0.15)"
                strokeWidth="2"
                strokeDasharray="6 6"
              />

              {/* Animated Laser Spine */}
              <path
                d="M 50,250 C 200,120 300,380 350,250 C 400,120 500,380 650,250"
                fill="none"
                stroke="url(#pro-spline-grad)"
                strokeWidth="4"
                filter="url(#pro-spline-glow)"
                style={{
                  strokeDasharray: pathTotalLength,
                  strokeDashoffset: strokeOffset,
                  transition: 'stroke-dashoffset 0.05s linear',
                }}
              />

              {/* Leading Star Photon */}
              <g transform={`translate(${photonX}, ${photonY})`}>
                <circle r="16" fill="rgba(56, 189, 248, 0.3)" className="animate-ping" />
                <circle r="8" fill="#38BDF8" filter="url(#pro-spline-glow)" />
                <circle r="3.5" fill="#FFFFFF" />
              </g>

              {/* ── STAGE 1 VISUAL: ORBITAL CORE ── */}
              {currentStageIndex === 0 && (
                <g transform="translate(350, 250)">
                  {/* Concentric Pulsing Rings */}
                  <circle r="85" fill="none" stroke="rgba(56, 189, 248, 0.2)" strokeWidth="1.5" strokeDasharray="6 6" className="animate-spin" style={{ animationDuration: '28s' }} />
                  <circle r="55" fill="none" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" />
                  <circle r="26" fill="#0A1E4A" stroke="#38BDF8" strokeWidth="3" filter="url(#pro-spline-glow)" />
                  <circle r="10" fill="#FFFFFF" />

                  {/* Orbiting Satellites */}
                  {STORY_STAGES[0].nodes.map((nd, idx) => {
                    const rad = (nd.angle * Math.PI) / 180;
                    const nx = Math.cos(rad) * 110;
                    const ny = Math.sin(rad) * 110;
                    return (
                      <g key={idx} transform={`translate(${nx}, ${ny})`}>
                        <rect x="-45" y="-14" width="90" height="28" rx="14" fill="#040C24" stroke="#38BDF8" strokeWidth="1.5" filter="url(#pro-spline-glow)" />
                        <text textAnchor="middle" y="4" fill="#E0F2FE" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">{nd.label}</text>
                      </g>
                    );
                  })}
                </g>
              )}

              {/* ── STAGE 2 VISUAL: OVERLOAD & CHAOS ── */}
              {currentStageIndex === 1 && (
                <g>
                  {STORY_STAGES[1].chaoticCards.map((card, idx) => (
                    <g key={idx}>
                      <line x1="350" y1="250" x2={card.x} y2={card.y} stroke="url(#pro-chaos-grad)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse" />
                      <g transform={`translate(${card.x}, ${card.y})`}>
                        <rect x="-60" y="-20" width="120" height="40" rx="12" fill="#1C0A0A" stroke={card.color} strokeWidth="1.5" filter="url(#pro-spline-glow)" />
                        <text textAnchor="middle" y="-2" fill="#FCA5A5" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">{card.title}</text>
                        <text textAnchor="middle" y="11" fill="#F87171" fontSize="8" fontFamily="Poppins">{card.desc}</text>
                      </g>
                    </g>
                  ))}
                  <circle cx="350" cy="250" r="32" fill="#2B0A0A" stroke="#EF4444" strokeWidth="2.5" filter="url(#pro-spline-glow)" />
                  <text textAnchor="middle" x="350" y="254" fill="#FCA5A5" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">BURNOUT</text>
                </g>
              )}

              {/* ── STAGE 3 VISUAL: RADAR SCANNER ── */}
              {currentStageIndex === 2 && (
                <g transform="translate(350, 250)">
                  <circle r="70" fill="none" stroke="rgba(96, 165, 250, 0.4)" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: '3s' }} />
                  <circle r="120" fill="none" stroke="rgba(96, 165, 250, 0.25)" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: '5s' }} />
                  <circle r="28" fill="#0C2050" stroke="#60A5FA" strokeWidth="3" filter="url(#pro-spline-glow)" />
                  <circle r="9" fill="#FFFFFF" />

                  <g transform="translate(-130, -75)">
                    <rect x="-40" y="-12" width="80" height="24" rx="12" fill="#0A1838" stroke="#38BDF8" strokeWidth="1" />
                    <text textAnchor="middle" y="4" fill="#93C5FD" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">REACH</text>
                  </g>
                  <g transform="translate(130, -75)">
                    <rect x="-40" y="-12" width="80" height="24" rx="12" fill="#0A1838" stroke="#38BDF8" strokeWidth="1" />
                    <text textAnchor="middle" y="4" fill="#93C5FD" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">TRUST</text>
                  </g>
                  <g transform="translate(0, 130)">
                    <rect x="-45" y="-12" width="90" height="24" rx="12" fill="#0A1838" stroke="#38BDF8" strokeWidth="1" />
                    <text textAnchor="middle" y="4" fill="#93C5FD" fontSize="9" fontFamily="JetBrains Mono" fontWeight="bold">REVENUE</text>
                  </g>
                </g>
              )}

              {/* ── STAGE 4 VISUAL: DUAL TRACK HIGHWAY ── */}
              {currentStageIndex === 3 && (
                <g>
                  <path d="M 80,170 L 620,170" stroke="#38BDF8" strokeWidth="3.5" filter="url(#pro-spline-glow)" strokeDasharray="10 5" />
                  <g transform="translate(350, 170)">
                    <rect x="-120" y="-16" width="240" height="32" rx="16" fill="#0A1E4A" stroke="#38BDF8" strokeWidth="1.5" />
                    <text textAnchor="middle" y="5" fill="#E0F2FE" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">YOUR BUSINESS FOCUS (100%)</text>
                  </g>

                  <path d="M 80,330 L 620,330" stroke="#818CF8" strokeWidth="3.5" filter="url(#pro-spline-glow)" strokeDasharray="10 5" />
                  <g transform="translate(350, 330)">
                    <rect x="-120" y="-16" width="240" height="32" rx="16" fill="#13123E" stroke="#818CF8" strokeWidth="1.5" />
                    <text textAnchor="middle" y="5" fill="#E0E7FF" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">MEDIA CREATIVE ENGINE</text>
                  </g>

                  <circle cx="100" cy="170" r="10" fill="#38BDF8" />
                  <circle cx="100" cy="330" r="10" fill="#818CF8" />
                </g>
              )}

              {/* ── STAGE 5 VISUAL: WTS NOVA PIPELINE ── */}
              {currentStageIndex === 4 && (
                <g>
                  <path d="M 80,140 Q 280,195 350,250" stroke="#2563EB" strokeWidth="3" fill="none" />
                  <path d="M 80,360 Q 280,305 350,250" stroke="#2563EB" strokeWidth="3" fill="none" />
                  <line x1="350" y1="250" x2="630" y2="250" stroke="#38BDF8" strokeWidth="6" filter="url(#pro-spline-glow)" />

                  <g transform="translate(350, 250)">
                    <circle r="36" fill="#040C24" stroke="#38BDF8" strokeWidth="3" filter="url(#pro-spline-glow)" />
                    <circle r="14" fill="#38BDF8" />
                    <circle r="5" fill="#FFFFFF" />
                  </g>

                  <g transform="translate(520, 210)">
                    <rect x="-80" y="-14" width="160" height="28" rx="14" fill="#05153A" stroke="#38BDF8" strokeWidth="1.5" />
                    <text textAnchor="middle" y="4" fill="#38BDF8" fontSize="10" fontFamily="JetBrains Mono" fontWeight="bold">✨ WTS NOVA SYSTEM</text>
                  </g>
                </g>
              )}

              {/* ── STAGE 6 VISUAL: HARMONIC CLIMAX ── */}
              {currentStageIndex === 5 && (
                <g transform="translate(350, 250)">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1="0"
                      x2={Math.cos((angle * Math.PI) / 180) * 150}
                      y2={Math.sin((angle * Math.PI) / 180) * 150}
                      stroke="rgba(56, 189, 248, 0.3)"
                      strokeWidth="2"
                      strokeDasharray="6 4"
                    />
                  ))}
                  
                  <circle r="85" fill="none" stroke="#38BDF8" strokeWidth="2.5" className="animate-spin" style={{ animationDuration: '24s' }} strokeDasharray="8 6" />
                  <circle r="50" fill="rgba(56, 189, 248, 0.2)" stroke="#38BDF8" strokeWidth="3" filter="url(#pro-spline-glow)" />
                  <circle r="24" fill="#38BDF8" />
                  <circle r="9" fill="#FFFFFF" />
                </g>
              )}

            </svg>

          </div>

        </div>

        {/* ── 3. BOTTOM SCRUB TRACKER ── */}
        <div className="relative z-30 w-full max-w-5xl mx-auto pb-1 sm:pb-2">
          <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 rounded-full transition-all duration-75 shadow-[0_0_15px_#38BDF8]"
              style={{ width: `${Math.min(scrollProgress * 100, 100)}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-1 lg:hidden">
            <span>Scroll to direct stages</span>
            <span className="text-sky-400 font-bold">{Math.round(scrollProgress * 100)}%</span>
          </div>
        </div>

      </div>
    </section>
  );
}
