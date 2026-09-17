import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Film, Award, Play, Camera, Phone, ShieldCheck, ChevronDown } from 'lucide-react';
import Navbar from './Navbar';

const TOTAL_FRAMES = 240;

const HERO_STAGES = [
  {
    id: 'stage-1',
    title: (
      <div className="flex flex-col gap-0.5 sm:gap-1">
        <span className="font-horizon font-bold uppercase tracking-tight text-white text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-[1.12] block overflow-visible whitespace-nowrap drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          Even great businesses
        </span>
        <span className="font-horizon font-extrabold uppercase tracking-tight text-blue-outline text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-[1.12] block overflow-visible whitespace-nowrap">
          get overlooked online.
        </span>
      </div>
    ),
    subtext: "Quiet businesses stay empty while active competitors win all the attention.",
  },
  {
    id: 'stage-2',
    title: (
      <div className="flex flex-col gap-0.5 sm:gap-1">
        <span className="font-horizon font-bold uppercase tracking-tight text-white text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-[1.12] block overflow-visible whitespace-nowrap drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          We handle social media
        </span>
        <span className="font-horizon font-extrabold uppercase tracking-tight text-blue-outline text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-[1.12] block overflow-visible whitespace-nowrap">
          so you focus on business.
        </span>
      </div>
    ),
    subtext: "We shoot, script, edit, and post daily — 100% done for you.",
    pills: ["📱 Content Creation", "🎯 Script & Edit", "🚀 Page Growth"]
  },
  {
    id: 'stage-3',
    title: (
      <div className="flex flex-col gap-0.5 sm:gap-1">
        <span className="font-horizon font-bold uppercase tracking-tight text-white text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-[1.12] block overflow-visible whitespace-nowrap drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
          Great social media
        </span>
        <span className="font-horizon font-extrabold uppercase tracking-tight text-blue-outline text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-[1.12] block overflow-visible whitespace-nowrap">
          drives real results.
        </span>
      </div>
    ),
    subtext: "Build trust and attract a steady stream of attention to your business.",
    hasCTA: true
  }
];

export default function CinematicHero() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [images, setImages] = useState([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Smooth LERP Frame State
  const targetFrameRef = useRef(0);
  const currentRenderFrameRef = useRef(0);
  
  // ...
  // (leaving hooks untouched)


  // Preload frame paths (100% PRESERVED)
  useEffect(() => {
    let isMounted = true;
    const loadedImages = [];
    let count = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const paddedIndex = String(i).padStart(3, '0');
      const img = new Image();
      
      const webpPath = `/frames/ezgif-frame-${paddedIndex}.webp`;
      const jpgPath = `/frames/ezgif-frame-${paddedIndex}.jpg`;

      img.src = webpPath;

      img.onload = () => {
        if (!isMounted) return;
        count++;
        setLoadedCount(count);
        if (count === 1) {
          requestAnimationFrame(() => drawFrame(0));
        }
        if (count === TOTAL_FRAMES) setIsReady(true);
      };

      img.onerror = () => {
        img.onerror = () => {
          if (!isMounted) return;
          count++;
          setLoadedCount(count);
          if (count === 1) {
            requestAnimationFrame(() => drawFrame(0));
          }
          if (count === TOTAL_FRAMES) setIsReady(true);
        };
        img.src = jpgPath;
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);
    return () => { isMounted = false; };
  }, []);

  // Canvas Draw Engine with Smart Kinetic Camera Zoom (100% PRESERVED)
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = images[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    // Cinematic Color Grading & Sharpening Filter
    ctx.filter = 'contrast(1.08) saturate(1.15) brightness(1.05)';

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;

    ctx.clearRect(0, 0, cw, ch);

    const isMobile = cw < 768 * (window.devicePixelRatio || 1);
    const currentFrameVal = currentRenderFrameRef.current || 0;
    const f = currentFrameVal / (TOTAL_FRAMES - 1);

    if (isMobile) {
      const baseScale = Math.max(cw / iw, ch / ih);
      let panRatio = 0.50;

      if (f < 0.15) {
        panRatio = 0.05 + (f / 0.15) * 0.45;
      } else if (f <= 0.75) {
        panRatio = 0.50;
      } else {
        const endProgress = (f - 0.75) / 0.25;
        panRatio = 0.50 + endProgress * 0.15;
      }

      const drawW = iw * baseScale;
      const drawH = ih * baseScale;
      const maxPanX = Math.max(drawW - cw, 0);
      const panX = -maxPanX * Math.min(Math.max(panRatio, 0), 1);
      const panY = (ch - drawH) / 2;

      ctx.save();
      ctx.drawImage(img, panX, panY, drawW, drawH);
      ctx.restore();
    } else {
      let zoomFactor = 1.0;
      if (f < 0.40) {
        zoomFactor = 1.0 + (f / 0.40) * 0.035;
      } else if (f <= 0.75) {
        zoomFactor = 1.035;
      } else {
        zoomFactor = 1.035 - ((f - 0.75) / 0.25) * 0.035;
      }

      const baseScale = Math.max(cw / iw, ch / ih);
      const scale = baseScale * zoomFactor;
      const drawWidth = iw * scale;
      const drawHeight = ih * scale;
      const offsetX = (cw - drawWidth) / 2;
      const offsetY = (ch - drawHeight) / 2;

      ctx.save();
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      ctx.restore();
    }
  };

  // Force initial frame paint as soon as images state changes
  useEffect(() => {
    if (images.length > 0 && images[0]) {
      if (images[0].complete) {
        drawFrame(0);
      } else {
        images[0].onload = () => drawFrame(0);
      }
    }
  }, [images]);

  // Ultra-Smooth Heavy Friction LERP Loop
  const initialFrameDrawnRef = useRef(false);

  useEffect(() => {
    let animId;
    const renderLoop = () => {
      const diff = targetFrameRef.current - currentRenderFrameRef.current;
      
      if (Math.abs(diff) > 0.001 || !initialFrameDrawnRef.current) {
        // Balanced LERP: highly responsive but smooths out scroll jitter perfectly
        const lerpSpeed = 0.18; // Sweet spot for smoothness and stopping power
        currentRenderFrameRef.current += diff * lerpSpeed;
        const frameToDraw = Math.min(
          Math.max(Math.round(currentRenderFrameRef.current), 0),
          TOTAL_FRAMES - 1
        );
        drawFrame(frameToDraw);
        if (images[frameToDraw]?.complete) {
          initialFrameDrawnRef.current = true;
        }
      }

      animId = requestAnimationFrame(renderLoop);
    };

    animId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animId);
  }, [images]);

  // Handle Canvas Resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      // Support up to 3x Retina displays for ultra-crisp resolution
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      const currentFrameVal = Math.min(
        Math.max(Math.round(currentRenderFrameRef.current), 0),
        TOTAL_FRAMES - 1
      );
      drawFrame(currentFrameVal);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [images]);

  // Scroll Scrub Listener
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
      setScrollProgress(progress);

      targetFrameRef.current = Math.min(
        Math.floor(progress * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images]);

  const activeHeroStageIndex = scrollProgress < 0.35 ? 0 : (scrollProgress < 0.70 ? 1 : 2);

  // Stage Transitions
  const getStageStyle = (start, end) => {
    const fadeWindow = 0.035;
    
    let opacity = 0;
    if (start === 0) {
      // Stage 1 (Initial page load) must be 100% visible right from scroll 0.0
      if (scrollProgress <= end) {
        opacity = 1;
      } else if (scrollProgress <= end + fadeWindow) {
        opacity = 1 - (scrollProgress - end) / fadeWindow;
      } else {
        opacity = 0;
      }
    } else {
      if (scrollProgress >= start - fadeWindow && scrollProgress <= end + fadeWindow) {
        if (scrollProgress < start) {
          opacity = (scrollProgress - (start - fadeWindow)) / fadeWindow;
        } else if (scrollProgress <= end) {
          opacity = 1;
        } else {
          opacity = 1 - (scrollProgress - end) / fadeWindow;
        }
      }
    }

    const translateY = scrollProgress < start 
      ? 24 
      : (scrollProgress > end ? -24 : 0);

    const scale = scrollProgress < start 
      ? 0.97 
      : (scrollProgress > end ? 0.98 : 1.0);

    return {
      opacity: Math.max(0, Math.min(1, opacity)),
      transform: `translateY(${translateY}px) scale(${scale})`,
      visibility: opacity <= 0.01 ? 'hidden' : 'visible',
      pointerEvents: opacity > 0.8 ? 'auto' : 'none',
      transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    };
  };

  const progressPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);
  const currentFrameDisplay = Math.min(Math.max(Math.round(scrollProgress * (TOTAL_FRAMES - 1)) + 1, 1), TOTAL_FRAMES);

  return (
    <section 
      ref={containerRef}
      className="relative h-[250vh] sm:h-[500vh] bg-[#060D24] !p-0"
    >

      {/* Asynchronous Cinema Preloader */}
      {!isReady && loadedCount < 15 && (
        <div className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center p-6 transition-opacity duration-700">
          <img src="/logo-light.png" alt="WTS Nova" className="w-40 h-auto object-contain animate-pulse mb-8 drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]" />
          
          <div className="w-56 h-2.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-cyan-300 rounded-full transition-all duration-150 shadow-[0_0_12px_#38BDF8]"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* Sticky Cinema Viewfinder Frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center relative bg-[#060D24] shadow-[0_0_60px_rgba(0,0,0,0.9)]">
        
        {/* Navbar overlay directly inside sticky frame */}
        <Navbar />

        {/* Cinematic Video Ambient Layer behind Canvas */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/cinematic-bg.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        />

        {/* Canvas Engine */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* ── CINEMA VIEWFINDER HUD ACCENTS ── */}
        <div className="hud-corner-tl" />
        <div className="hud-corner-tr" />
        <div className="hud-corner-bl" />
        <div className="hud-corner-br" />



        {/* Timeline Scrub Tracker Right */}
        <div className="absolute right-3 sm:right-6 bottom-12 sm:bottom-10 z-30 flex flex-col items-center gap-2 pointer-events-none">
          <div className="w-2.5 h-20 sm:h-28 bg-black/70 border border-white/20 rounded-full overflow-hidden backdrop-blur-xl p-0.5 shadow-2xl">
            <div 
              className="w-full bg-gradient-to-b from-sky-400 via-blue-600 to-indigo-600 rounded-full transition-all duration-100 shadow-[0_0_10px_#38BDF8]"
              style={{ height: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-sky-300 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>

        {/* Scroll Prompt Cue (Only at 0% scroll) */}
        {scrollProgress < 0.05 && (
          <div className="absolute bottom-6 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 pointer-events-none animate-bounce text-slate-400 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase opacity-75">
            <span>Scroll</span>
            <ChevronDown className="w-3.5 h-3.5 text-sky-400" />
          </div>
        )}

        {/* ── HIGH CONTRAST WHITE & BLUE HERO TEXT (NO BACKGROUND BOX) ── */}
        <div className="absolute bottom-16 left-5 right-5 sm:bottom-14 sm:left-10 sm:right-auto max-w-2xl text-left z-20 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={HERO_STAGES[activeHeroStageIndex].id}
              initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2 sm:gap-3 drop-shadow-[0_6px_30px_rgba(0,0,0,0.98)] pointer-events-auto"
            >
              {(() => {
                const stage = HERO_STAGES[activeHeroStageIndex];
                return (
                  <>
                    <div>
                      {stage.title}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed font-sans max-w-md drop-shadow-[0_2px_10px_rgba(0,0,0,0.98)]">
                      {stage.subtext}
                    </p>

                    {stage.pills && (
                      <div className="pt-0.5 flex flex-wrap items-center gap-1 sm:gap-1.5">
                        {stage.pills.map((pill, i) => (
                          <span key={i} className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/70 backdrop-blur-md border border-sky-400/40 text-sky-300 text-[9px] sm:text-xs font-mono font-medium shadow-sm">
                            {pill}
                          </span>
                        ))}
                      </div>
                    )}

                    {stage.hasCTA && (
                      <div className="pt-1 flex flex-wrap items-center gap-2.5">
                        <a
                          href="https://wa.me/917989578194?text=Hi%20Wahab!%20I%20want%20to%20grow%20our%20social%20media%20page."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 hover:from-blue-500 hover:to-sky-300 text-white font-bold text-xs transition-all shadow-[0_4px_12px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_18px_rgba(56,189,248,0.35)] flex items-center gap-1.5 group active:scale-95 border border-sky-300/30"
                        >
                          <span>WhatsApp Us</span>
                          <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>

                        <a
                          href="tel:+917989578194"
                          className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-black/70 hover:bg-black/90 text-white font-bold text-xs transition-all flex items-center gap-1.5 group active:scale-95 backdrop-blur-md border border-blue-400/40 shadow-lg"
                        >
                          <Phone className="w-3.5 h-3.5 text-sky-400" />
                          <span>Call Direct</span>
                        </a>
                      </div>
                    )}
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
