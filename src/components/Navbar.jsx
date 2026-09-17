import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'How It Works', href: '#problem-solution' },
    { label: 'Services', href: '#services-overview' },
    { label: 'Who We Work With', href: '#clients' },
    { label: 'Proof & Reviews', href: '#proof' },
    { label: 'About', href: '#founder' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      {/* Absolute Navbar Overlay (floats over the hero canvas) */}
      <header className="absolute top-0 inset-x-0 z-50 pt-5 px-5 sm:px-8 pointer-events-none">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between w-full pointer-events-auto">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center transition-transform hover:scale-[1.02]">
            <img
              src="/logo-light.png"
              alt="WTS NOVA Logo"
              className="h-8 sm:h-9 md:h-10 w-auto object-contain"
            />
          </a>

          {/* Right side: Nav links + Let's Talk */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Nav Pill Container */}
            <nav className="flex items-center gap-1.5 px-2 py-1.5 rounded-full bg-[#050B15]/40 border border-white/10 backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-1.5 rounded-full text-xs font-sans font-bold tracking-wide text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Let's Talk Button */}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full bg-slate-200 hover:bg-white text-black font-sans font-extrabold text-[13px] tracking-wide transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95 inline-flex items-center justify-center"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#060D24]/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col md:hidden">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-sans font-bold text-slate-300 hover:text-white border-b border-white/10 pb-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-8">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-full bg-white text-black font-sans font-extrabold text-sm flex items-center justify-center text-center"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </>
  );
}
