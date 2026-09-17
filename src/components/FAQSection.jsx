import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  { q: 'How does full social media management with WTS Nova work?', a: 'WTS Nova takes complete ownership of your digital presence. We develop a targeted growth strategy, design premium content, edit engaging reels, craft compelling captions, research viral hashtags, and manage daily posting so your profile grows on autopilot.' },
  { q: 'I am too busy to create content. Can you help?', a: 'Absolutely! Our service is built specifically for busy founders and business owners. You simply provide raw ideas, basic footage, or product details, and our expert team transforms them into polished, high-performing social media assets that attract your ideal customers.' },
  { q: 'Which platforms do you manage and grow?', a: 'We specialize in scaling brands on Instagram and Facebook. From optimizing your profile bio to executing consistent, data-driven daily posting strategies, we ensure your brand stands out and captures attention in a crowded market.' },
  { q: 'Where are you based and who do you work with?', a: 'We are proudly based in Nalgonda, Telangana. We partner with ambitious businesses, local brands, and founders across Nalgonda, Hyderabad, and surrounding regions to rapidly scale their online reach and revenue.' },
  { q: 'How do I get started with WTS Nova?', a: 'Getting started is simple! Reach out to us via WhatsApp to book a free discovery call. We will audit your current social media presence and outline a custom growth plan tailored directly to your business goals.' }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section id="faq" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden section-tone-dark border-t border-blue-500/20">

      {/* Top glowing gradient divider */}
      <div className="absolute top-0 inset-x-0 nova-gradient-divider" />

      {/* Premium corner dot matrix accents */}
      <div className="absolute top-0 right-0 w-36 h-36 corner-dots opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-36 h-36 corner-dots-left opacity-30 pointer-events-none" />

      {/* Ambient background subtle lighting — minimal bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-r from-blue-600/5 via-sky-400/4 to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      {/* Ghost */}
      <div className="nova-ghost-text" style={{ fontSize: '14vw', top: '-2vw', right: '-1vw' }}>FAQ</div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
            MANAGEMENT INSIGHTS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading leading-[1.15] pb-1">
            <span className="text-white">Frequently Asked </span>
            <span className="text-gradient-accent">Questions.</span>
          </h2>
          <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Everything you need to know about outsourcing your social media growth to WTS Nova.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`cinema-card overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-sky-400/40 shadow-[0_12px_32px_rgba(0,0,0,0.85),0_0_12px_rgba(37,99,235,0.1)]' : ''
                }`}
              >
                <div className="specular-line" />

                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-4 sm:px-8 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 pr-2 min-w-0">
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-mono font-bold text-[10px] sm:text-xs shrink-0 transition-all ${
                        isOpen
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-white/[0.05] text-sky-300 border border-blue-500/20'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="font-heading font-bold text-sm sm:text-lg text-white leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-blue-500/20 border-sky-400/40 text-sky-300'
                        : 'bg-white/[0.05] border-white/10 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-8 pb-4 sm:pb-6 border-t border-blue-500/20 animate-in fade-in duration-200">
                    <div className="pt-3 sm:pt-4 flex gap-3 sm:gap-4">
                      <div className="w-0.5 self-stretch shrink-0 ml-1 bg-gradient-to-b from-sky-400 to-transparent" />
                      <p className="text-slate-200 text-xs sm:text-base leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
