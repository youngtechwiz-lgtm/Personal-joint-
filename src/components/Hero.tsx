import React from 'react';
import { Sparkles, UtensilsCrossed, Clock, CheckCircle2, Flame, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOrderNow: () => void;
  onViewMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOrderNow, onViewMenu }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FDFBF7]">
      {/* Subtle background ambient glow */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neutral-200/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-bold tracking-wider uppercase text-neutral-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#D62828] animate-pulse" />
              AUTHENTIC PEPPER SOUP
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0B132B] tracking-tight leading-[1.08] font-['Outfit'] mb-6 text-balance">
              REAL PEPPER SOUP. <br className="hidden sm:inline" />
              <span className="text-[#D62828]">PURE SATISFACTION.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
              Fresh ingredients, bold spices, and traditional recipes — bringing the true taste of pepper soup to your table.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onViewMenu}
                className="px-7 py-3.5 bg-[#0B132B] hover:bg-[#1C2541] text-white text-sm font-bold tracking-wide uppercase rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
              >
                VIEW MENU
                <ArrowRight className="w-4 h-4 text-[#D62828]" />
              </button>

              <button
                onClick={onOrderNow}
                className="px-7 py-3.5 bg-transparent border-2 border-[#D62828] text-[#D62828] hover:bg-[#D62828] hover:text-white text-sm font-bold tracking-wide uppercase rounded-md transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
              >
                ORDER NOW
              </button>
            </div>

            {/* Three Benefits Row */}
            <div className="pt-6 border-t border-neutral-200/80 w-full grid grid-cols-3 gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#D62828]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800 leading-tight">
                  Fresh Ingredients
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-[#D62828]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800 leading-tight">
                  Authentic Taste
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#D62828]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-neutral-800 leading-tight">
                  Fast & Reliable
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Presentation */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Decorative background shape mimicking wireframe organic backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200/80 via-neutral-100 to-red-100/50 rounded-3xl transform rotate-1 scale-102 -z-0" />
              
              {/* Steam Visual Layers */}
              <div className="absolute -top-10 left-1/4 pointer-events-none z-20 flex gap-6">
                <div className="w-1.5 h-16 bg-gradient-to-t from-white/70 to-transparent rounded-full filter blur-[1px] animate-steam-1" />
                <div className="w-2 h-20 bg-gradient-to-t from-white/60 to-transparent rounded-full filter blur-[1px] animate-steam-2" />
                <div className="w-1.5 h-14 bg-gradient-to-t from-white/70 to-transparent rounded-full filter blur-[1px] animate-steam-3" />
              </div>

              {/* Main Bowl Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 aspect-[4/3] group">
                <img
                  src="/src/assets/images/hero_pepper_soup_1790423300944.jpg"
                  alt="Authentic steaming Nigerian Goat Meat Pepper Soup in a rustic ceramic bowl with fresh herbs and scotch bonnet peppers"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle vignette scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating caption chip */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B132B]/85 backdrop-blur-md text-white px-4 py-2.5 rounded-lg flex items-center justify-between border border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D62828] animate-ping" />
                    <span className="text-xs font-bold tracking-wide uppercase">Signature Pepper Soup</span>
                  </div>
                  <span className="text-xs font-extrabold text-[#D62828] bg-white/10 px-2 py-0.5 rounded">
                    ₦4,000
                  </span>
                </div>
              </div>

              {/* Small decorative floating herbs badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 z-20 bg-white rounded-xl shadow-lg border border-neutral-100 p-3.5 items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#D62828]/10 text-[#D62828] flex items-center justify-center font-bold">
                  ♨️
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-900">Served Steaming Hot</p>
                  <p className="text-[11px] text-neutral-500">Fresh scent leaf & local spices</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
