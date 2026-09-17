import React from 'react';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import Navbar from './components/Navbar';
import CinematicHero from './components/CinematicHero';
import MarqueeTicker from './components/MarqueeTicker';
import ProblemSolutionSection from './components/ProblemSolutionSection';
import ServicesSection from './components/ServicesSection';
import QualificationJourney from './components/QualificationJourney';
import TrustProofSection from './components/TrustProofSection';
import FounderSection from './components/DirectorSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import NovaStarCursor from './components/NovaStarCursor';
import CosmicAuroraBackground from './components/CosmicAuroraBackground';

export default function App() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#060D24] text-slate-100 selection:bg-blue-600/40 selection:text-sky-200 relative font-sans">
        {/* Dynamic Fluid Cosmic Aurora Mesh Background & Mouse Spotlight */}
        <CosmicAuroraBackground />

        {/* Milan Compain-inspired Nova Star Particle Cursor */}
        <NovaStarCursor />

        {/* Subtle high-fashion cinema film grain noise layer */}
        <div className="cinema-noise" aria-hidden="true" />
      {/* Navigation Header moved to CinematicHero for scoped sticky scroll */}

      <main className="relative z-10">
        {/* Section 1: HOME - The Interactive Cinematic Hero */}
        <CinematicHero />

        {/* Section 2: Trust Metrics Marquee Ticker */}
        <MarqueeTicker />

        {/* Continuous Nova Navy Blue Gradient & Grid Container */}
        <div className="relative nova-bg nova-dots nova-gradient-mesh text-slate-100 overflow-x-clip">

          {/* Lightly visible small tech grid overlay */}
          <div className="absolute inset-0 nova-grid-pattern pointer-events-none opacity-20" />

          {/* Section 3: PROBLEM → SOLUTION — Storytelling reality & blueprint */}
          <ProblemSolutionSection />

          {/* Section 4: OUR SERVICES */}
          <ServicesSection />

          {/* Section 6: WHO WE WORK WITH — Target Clients */}
          <QualificationJourney />

          {/* Section 8: PROOF & NETWORK - Clients, Famous People & Written Testimonials */}
          <TrustProofSection />

          {/* Section 9: FOUNDER - Shaik Abdul Wahab & Experience Metrics */}
          <FounderSection />

          {/* Section 12: FAQ Accordion */}
          <FAQSection />
        </div>
      </main>

      {/* Section 13: CONTACT & FOOTER */}
      <Footer />

      {/* Persistent Floating WhatsApp Icon across all sections */}
      <FloatingWhatsApp />
    </div>
    </SmoothScrollProvider>
  );
}
