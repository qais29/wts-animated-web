import React, { useEffect, useRef } from 'react';

/**
 * CosmicAuroraBackground
 * Provides soft, subtle, organic ambient gradient blooms.
 * Features gentle, seamless top and side light accents with ZERO hard bars or lines.
 */
export default function CosmicAuroraBackground() {
  const spotlightRef = useRef(null);
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const currentPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    // Only track mouse spotlight on fine pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let animId;
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth LERP animation loop for the subtle mouse spotlight
    const updateSpotlight = () => {
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.06;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.06;

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${currentPos.current.x - 300}px, ${currentPos.current.y - 300}px, 0)`;
      }
      animId = requestAnimationFrame(updateSpotlight);
    };

    animId = requestAnimationFrame(updateSpotlight);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* ── 1. GENTLE MOUSE-REACTIVE AMBIENT GLOW ─────────────────────── */}
      <div
        ref={spotlightRef}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full opacity-30 mix-blend-screen transition-opacity duration-700 hidden sm:block will-change-transform"
        style={{
          background: 'radial-gradient(circle 300px at center, rgba(56, 189, 248, 0.16) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 75%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── 2. SOFT, ORGANIC LIVING AURORA BLOOMS (No lines, No bars) ─── */}
      
      {/* Top Center Subtle Halo Glow */}
      <div
        className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[340px] rounded-full opacity-35 mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 20%, rgba(56, 189, 248, 0.22) 0%, rgba(37, 99, 235, 0.10) 50%, transparent 80%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Left Edge: Little and Smooth Cyan Bloom (Softly bleeding in, seamless) */}
      <div
        className="absolute top-[28%] -left-[200px] w-[550px] h-[550px] rounded-full opacity-30 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 45% 50%, rgba(56, 189, 248, 0.24) 0%, rgba(37, 99, 235, 0.10) 55%, transparent 75%)',
          filter: 'blur(90px)',
        }}
      />

      {/* Right Edge: Little and Smooth Ultraviolet Bloom (Softly bleeding in, seamless) */}
      <div
        className="absolute top-[62%] -right-[220px] w-[580px] h-[580px] rounded-full opacity-28 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at 55% 50%, rgba(129, 140, 248, 0.22) 0%, rgba(99, 102, 241, 0.10) 55%, transparent 75%)',
          filter: 'blur(95px)',
        }}
      />

      {/* Subtle Mid-page Ambient Floating Orb */}
      <div
        className="absolute top-[48%] left-[15%] w-[650px] h-[650px] rounded-full opacity-20 mix-blend-screen aurora-blob-3"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.18) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 75%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Lower Center Ambient Blue Pool */}
      <div
        className="absolute -bottom-[160px] left-1/2 -translate-x-1/2 w-[850px] h-[400px] rounded-full opacity-25 mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 80%, rgba(37, 99, 235, 0.25) 0%, rgba(56, 189, 248, 0.10) 50%, transparent 80%)',
          filter: 'blur(80px)',
        }}
      />
    </div>
  );
}
