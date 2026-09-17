import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * ═══════════════════════════════════════════════════════════════════════
 * PROOF & MOMENTS GALLERY TEMPLATE
 * 
 * Instructions for adding your real photos:
 * 1. Place your photo files into the public folder (e.g., /public/gallery/...)
 * 2. In the array below, simply set:
 *    - src: "/gallery/your-photo-name.jpg" (or .png / .webp)
 *    - category: 'famous' | 'clients' | 'reviews'
 * 
 * Categories available:
 * - 'famous'  : Photos with famous people, celebrities, or notable personalities
 * - 'clients' : Photos on set with clients, shoots, and business partners
 * - 'reviews' : Screenshots of client WhatsApp chats, DMs, or written reviews
 * ═══════════════════════════════════════════════════════════════════════
 */
const PROOF_GALLERY_IMAGES = [
  // ── FAMOUS PEOPLE & VIPS ─────────────────────────────────────────
  {
    id: 1,
    category: 'famous',
    src: '/proof-person-4.jpg',
    alt: 'Outdoor collaboration with creator',
    positionClass: 'object-[25%_center]',
  },
  {
    id: 2,
    category: 'famous',
    src: '/proof-person-1.jpg',
    alt: 'Moments with notable personalities',
  },
  {
    id: 3,
    category: 'famous',
    src: '/proof-person-5.jpg',
    alt: 'Brand partnership at Rythu Badi',
  },
  {
    id: 4,
    category: 'clients',
    src: '/proof-person-2.jpg',
    alt: 'VIP shoot and collaboration',
  },
  {
    id: 5,
    category: 'clients',
    src: '/proof-person-6.jpg',
    alt: 'Client discussion on balcony',
  },
  {
    id: 6,
    category: 'clients',
    src: '/proof-person-3.jpg',
    alt: 'Notable creators on set',
  },
];

export default function TrustProofSection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const photos = PROOF_GALLERY_IMAGES;

  // Lightbox handlers
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
    }
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <section id="proof" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden section-tone-dark bg-gradient-to-b from-[#060D24] via-[#081332] to-[#060D24]">
      
      {/* ── TOP & BOTTOM LUMINOUS GLOW DIVIDERS ── */}
      <div className="absolute top-0 inset-x-0 nova-gradient-divider-glow" />
      <div className="absolute bottom-0 inset-x-0 nova-gradient-divider" />

      {/* ── CINEMATIC VIP STUDIO SPOTLIGHT EFFECT ── */}
      {/* 1. Overhead Wide Conical Gradient Light Cone */}
      <div 
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-[850px] max-w-[120vw] h-[550px] pointer-events-none mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse 65% 55% at 50% 0%, rgba(56, 189, 248, 0.28) 0%, rgba(37, 99, 235, 0.14) 40%, rgba(99, 102, 241, 0.06) 65%, transparent 80%)',
          filter: 'blur(55px)',
        }}
        aria-hidden="true"
      />

      {/* 2. Direct Stage Spotlight Beam radiating downward on title */}
      <div 
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[480px] h-[360px] pointer-events-none opacity-30 mix-blend-screen"
        style={{
          background: 'conic-gradient(from 180deg at 50% 0%, transparent 38%, rgba(56, 189, 248, 0.4) 46%, rgba(255, 255, 255, 0.7) 50%, rgba(56, 189, 248, 0.4) 54%, transparent 62%)',
          filter: 'blur(30px)',
        }}
        aria-hidden="true"
      />

      {/* ── ATMOSPHERIC COSMIC NEBULA GLOW & FLOATING BOKEH ORBS ── */}
      {/* Left Electric Sapphire & Indigo Floating Orb */}
      <div 
        className="absolute top-1/3 -left-36 w-[560px] h-[560px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[130px] pointer-events-none animate-orb-float" 
        aria-hidden="true"
      />

      {/* Right Vibrant Sky-Blue & Cyan Luminous Pool */}
      <div 
        className="absolute bottom-1/4 -right-36 w-[560px] h-[560px] bg-gradient-to-bl from-sky-400/15 via-blue-500/10 to-transparent rounded-full blur-[130px] pointer-events-none animate-pulse-glow" 
        aria-hidden="true"
      />

      {/* Center Gallery Floor Ambient Glow Pool */}
      <div 
        className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-w-[95vw] h-[450px] bg-blue-500/[0.05] rounded-full blur-[150px] pointer-events-none" 
        aria-hidden="true"
      />

      {/* ── SUBTLE TWINKLING COSMIC STARLIGHT PARTICLES ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[
          { top: '10%', left: '12%', size: 16, delay: '0s', dur: '4s', opacity: 0.5 },
          { top: '18%', right: '14%', size: 20, delay: '1.2s', dur: '4.5s', opacity: 0.6 },
          { top: '42%', left: '6%', size: 14, delay: '2.3s', dur: '3.8s', opacity: 0.4 },
          { top: '65%', right: '8%', size: 18, delay: '0.7s', dur: '5s', opacity: 0.55 },
          { top: '85%', left: '18%', size: 12, delay: '1.9s', dur: '3.6s', opacity: 0.45 },
          { top: '30%', right: '5%', size: 14, delay: '2.8s', dur: '4.2s', opacity: 0.4 },
          { top: '78%', left: '48%', size: 14, delay: '3.1s', dur: '4.8s', opacity: 0.35 },
        ].map((star, idx) => (
          <div
            key={idx}
            className="absolute animate-pulse"
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              animationDelay: star.delay,
              animationDuration: star.dur,
              opacity: star.opacity,
            }}
          >
            <svg
              width={star.size}
              height={star.size}
              viewBox="0 0 24 24"
              fill="none"
              className="text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.75)]"
            >
              <path
                d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
                fill="currentColor"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* ── LUXURY EDITORIAL GHOST WATERMARK ── */}
      <div
        className="nova-ghost-text select-none pointer-events-none"
        style={{
          fontSize: '15vw',
          top: '6%',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: 0.025,
          letterSpacing: '0.16em',
        }}
        aria-hidden="true"
      >
        RECOGNITION
      </div>

      {/* ── REFINED CORNER DOT MATRIX ACCENTS ── */}
      <div className="absolute top-0 right-0 w-44 h-44 corner-dots opacity-25 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-44 h-44 corner-dots-left opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── SECTION HEADING & SUBHEADING ONLY ──────────────────── */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#5E8FFF] text-xs font-mono tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            MOMENTS & RECOGNITION
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-[1.12] mb-4">
            Moments with <span className="text-gradient-accent">Notable Personalities</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Capturing real moments, collaborations, and interactions with prominent creators and personalities.
          </p>
        </motion.div>

        {/* ── PURE IMAGE GALLERY (NO BELOW TEXTS) ─────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 perspective-1000">
          {photos.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1], 
                delay: (index % 4) * 0.12 
              }}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer bg-[#0A1638] border border-blue-500/20 hover:border-blue-400/60 shadow-lg hover:shadow-[0_12px_30px_rgba(15,32,76,0.6)] transition-all duration-300 parallax-card-hover"
            >
              {/* Photo */}
              <img
                src={item.src}
                alt={item.alt || 'Gallery photo'}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${item.positionClass || 'object-center'}`}
                loading="lazy"
              />

              {/* Subtle hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D24]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
                <div className="w-10 h-10 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-md backdrop-blur-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty fallback if no images */}
        {photos.length === 0 && (
          <div className="text-center py-16 text-slate-400 text-sm font-sans">
            No photos added yet.
          </div>
        )}

      </div>

      {/* ── LIGHTBOX MODAL (FOR VIEWING FULL PHOTOS & CHAT SCREENSHOTS) ── */}
      {lightboxIndex !== null && photos[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#04091A]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          {photos.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Current Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex items-center justify-center rounded-2xl overflow-hidden border border-blue-500/30 bg-[#0A1638] shadow-2xl"
          >
            <img
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl"
            />
          </div>

          {/* Next Button */}
          {photos.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}

    </section>
  );
}
