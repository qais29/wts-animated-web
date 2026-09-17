import React, { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show WhatsApp button only after scrolling past the hero section and trust bar (approx 420vh)
      if (window.scrollY > window.innerHeight * 4.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {/* Tooltip on desktop hover */}
      <div
        className={`hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-[#060D24]/90 backdrop-blur-md border border-white/15 text-slate-200 text-xs font-sans font-semibold shadow-xl transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] mr-2" />
        Chat with us
      </div>

      {/* Floating Round Button */}
      <a
        href="https://wa.me/917989578194?text=Hi%20Wahab!%20I'd%20like%20to%20inquire%20about%20WTS%20Nova%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with WTS Nova on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#22c35e] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_14px_32px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {/* Authentic Official WhatsApp Icon SVG */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.002 2C8.28 2 2 8.28 2 16.002c0 2.656.74 5.218 2.144 7.426L2 30l6.764-2.106a13.94 13.94 0 0 0 7.238 2.016h.006c7.72 0 14-6.28 14-14.002 0-3.742-1.458-7.26-4.108-9.91A13.916 13.916 0 0 0 16.002 2zm0 25.564h-.005a11.58 11.58 0 0 1-5.908-1.614l-.424-.252-4.388 1.368 1.39-4.276-.276-.44A11.565 11.565 0 0 1 4.437 16c0-6.377 5.187-11.564 11.569-11.564 3.09 0 5.995 1.204 8.18 3.39a11.517 11.517 0 0 1 3.383 8.18c0 6.378-5.187 11.558-11.567 11.558zm6.34-8.665c-.348-.174-2.057-1.015-2.376-1.13-.319-.116-.55-.174-.783.174-.232.348-.9 1.13-1.103 1.363-.203.232-.406.26-.754.087-.348-.174-1.47-.542-2.8-1.728a10.45 10.45 0 0 1-1.936-2.408c-.203-.348-.022-.536.152-.71.156-.156.348-.406.522-.61.174-.203.232-.348.348-.58.116-.232.058-.435-.029-.61-.087-.174-.783-1.884-1.073-2.58-.282-.676-.568-.585-.783-.596l-.667-.012c-.232 0-.61.087-.928.435s-1.218 1.19-1.218 2.898 1.246 3.363 1.42 3.595c.174.232 2.454 3.748 5.945 5.255.83.358 1.478.572 1.983.733.834.265 1.593.228 2.193.138.669-.1 2.057-.84 2.347-1.652.29-.812.29-1.508.203-1.653-.087-.145-.319-.232-.667-.406z" />
        </svg>
      </a>
    </div>
  );
}
