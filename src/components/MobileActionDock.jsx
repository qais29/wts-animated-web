import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export default function MobileActionDock() {
  return (
    <div className="fixed bottom-3 inset-x-3 z-50 lg:hidden pointer-events-none">
      <div className="max-w-md mx-auto cinema-card !rounded-full p-2 flex items-center justify-between gap-2 pointer-events-auto backdrop-blur-xl border border-sky-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        
        {/* WhatsApp Us */}
        <a
          href="https://wa.me/917989578194?text=Hi%20Wahab!%20I'm%20reaching%20out%20to%20build%20our%20brand's%20digital%20identity%20with%20WTS%20Nova."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Call Now */}
        <a
          href="tel:7989578194"
          className="flex-1 py-2.5 px-3.5 rounded-full bg-white/[0.06] border border-white/15 text-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400" />
          <span>Call</span>
        </a>

      </div>
    </div>
  );
}
