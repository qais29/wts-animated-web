import React, { useState } from 'react';
import { X, Calculator, MessageSquare, MapPin, Film, Sparkles, CheckCircle2 } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  const [reelCount, setReelCount] = useState(5);
  const [location, setLocation] = useState('Nalgonda');
  const [includePublishing, setIncludePublishing] = useState(true);
  const [includeDrone, setIncludeDrone] = useState(true);
  const [brandType, setBrandType] = useState('Restaurant & Hospitality');

  if (!isOpen) return null;

  // Calculation logic
  const baseReelRate = 1800;
  const publishingManagementFee = includePublishing ? 1500 : 0;
  const droneCost = includeDrone ? 1500 : 0;
  const travelCost = location === 'Nalgonda' ? 0 : 1000;
  const calculatedTotal = Math.round(reelCount * baseReelRate + publishingManagementFee + droneCost + travelCost);

  const whatsappMessage = `Hi Shaik Abdul Wahab! I built a social media production estimate for my brand (${brandType}).\n- Monthly Reels: ${reelCount}\n- Filming Base: ${location}\n- Daily Publishing & Strategy: ${includePublishing ? 'Yes' : 'No'}\n- 4K Drone Passes: ${includeDrone ? 'Yes' : 'No'}\n- Estimated Package: ₹${calculatedTotal.toLocaleString('en-IN')}\n\nCan we schedule a production call?`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg cinema-card !rounded-2xl p-6 sm:p-8 overflow-hidden max-h-[92vh] overflow-y-auto text-white shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-sky-500/30">
        
        <div className="specular-line" />
        <div className="hud-corner-tl" />
        <div className="hud-corner-tr" />
        <div className="hud-corner-bl" />
        <div className="hud-corner-br" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/15 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-colors z-20"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="cinema-glass-pill mb-3 w-fit">
          <Calculator className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-[11px] font-mono tracking-wider font-semibold text-sky-300">
            CINEMA PRODUCTION ESTIMATOR
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
          Configure Your Production Package
        </h3>
        <p className="text-xs text-slate-300 mt-1 mb-6">
          Tailor on-location filming, 4K aerial passes, and monthly Instagram management.
        </p>

        <div className="space-y-5">
          {/* Brand Type */}
          <div>
            <label className="block text-[11px] font-mono font-bold text-sky-300 uppercase tracking-wider mb-2">
              Business Category
            </label>
            <select
              value={brandType}
              onChange={(e) => setBrandType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#060D24] border border-white/15 text-sm text-slate-100 focus:outline-none focus:border-sky-400 transition-colors"
            >
              <option value="Restaurant & Hospitality" className="bg-[#060D24] text-white">Restaurant & Hospitality</option>
              <option value="Founder / Doctor Personal Brand" className="bg-[#060D24] text-white">Founder / Doctor Personal Brand</option>
              <option value="Real Estate & Architecture" className="bg-[#060D24] text-white">Real Estate & Architecture</option>
              <option value="Retail & Local Business" className="bg-[#060D24] text-white">Retail & Local Storefront</option>
              <option value="Corporate Enterprise" className="bg-[#060D24] text-white">Corporate Enterprise</option>
            </select>
          </div>

          {/* Reel Count Slider */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
            <div className="flex justify-between items-center mb-3">
              <label className="text-[11px] font-mono font-bold text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-sky-400" />
                <span>Monthly 4K Cinema Reels</span>
              </label>
              <span className="text-sm font-extrabold font-mono text-cyan-300 px-2.5 py-0.5 rounded bg-cyan-400/10 border border-cyan-400/20">
                {reelCount} {reelCount === 1 ? 'Reel' : 'Reels'}
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="12"
              value={reelCount}
              onChange={(e) => setReelCount(parseInt(e.target.value))}
              className="w-full accent-sky-400 bg-white/10 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-2 font-mono">
              <span>1 Reel (Trial)</span>
              <span>5 Reels (Optimal)</span>
              <span>12 Reels (Daily Velocity)</span>
            </div>
          </div>

          {/* Shoot Location */}
          <div>
            <label className="block text-[11px] font-mono font-bold text-sky-300 uppercase tracking-wider mb-2">
              Filming Base Location
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setLocation('Nalgonda')}
                className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                  location === 'Nalgonda' 
                    ? 'bg-blue-600/30 border-sky-400 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.2)]' 
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Nalgonda Base</span>
              </button>
              <button
                type="button"
                onClick={() => setLocation('Hyderabad / Telangana')}
                className={`py-3 px-4 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-2 ${
                  location === 'Hyderabad / Telangana' 
                    ? 'bg-blue-600/30 border-sky-400 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.2)]' 
                    : 'bg-white/[0.03] border-white/10 text-slate-300 hover:text-white'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Hyderabad / Travel</span>
              </button>
            </div>
          </div>

          {/* Included Features */}
          <div className="space-y-2.5 pt-1">
            <label className="block text-[11px] font-mono font-bold text-sky-300 uppercase tracking-wider">
              Add-on Capabilities
            </label>
            <label className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer hover:border-sky-400/40 transition-colors">
              <span className="text-xs text-slate-200 font-medium">Daily Captions, Hashtags & Instagram Publishing</span>
              <input
                type="checkbox"
                checked={includePublishing}
                onChange={(e) => setIncludePublishing(e.target.checked)}
                className="w-4 h-4 accent-sky-400 rounded cursor-pointer"
              />
            </label>
            <label className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10 cursor-pointer hover:border-sky-400/40 transition-colors">
              <span className="text-xs text-slate-200 font-medium">4K Aerial FPV Drone Passes</span>
              <input
                type="checkbox"
                checked={includeDrone}
                onChange={(e) => setIncludeDrone(e.target.checked)}
                className="w-4 h-4 accent-sky-400 rounded cursor-pointer"
              />
            </label>
          </div>

          {/* Total & Send to WhatsApp */}
          <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#0c1b40] to-[#060D24] border border-sky-400/30 shadow-[0_0_25px_rgba(56,189,248,0.15)]">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-wider">
                Estimated Monthly Package
              </span>
              <span className="text-3xl font-extrabold font-mono text-white">
                ₹{calculatedTotal.toLocaleString('en-IN')}
              </span>
            </div>

            <a
              href={`https://wa.me/917989578194?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 hover:from-blue-500 hover:to-sky-400 text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all hover:scale-[1.01] active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Estimate to Shaik Abdul Wahab</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
