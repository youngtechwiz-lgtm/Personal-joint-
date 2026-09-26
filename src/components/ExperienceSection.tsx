import React, { useState } from 'react';
import { Play, Star, CheckCircle, Clock, Volume2, X } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [isPlayingAmbiance, setIsPlayingAmbiance] = useState(false);

  return (
    <section className="py-20 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Large Restaurant Interior with Circular Play Button */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-neutral-900 aspect-[16/10] sm:aspect-[16/9] group">
              <img
                src="/src/assets/images/restaurant_interior_1790423314921.jpg"
                alt="Personal Joint restaurant warm welcoming dining interior"
                className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/20 transition-colors" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlayingAmbiance(!isPlayingAmbiance)}
                  aria-label="Play restaurant experience video or sound preview"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D62828] text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 group/btn border-4 border-white/80"
                >
                  {isPlayingAmbiance ? (
                    <Volume2 className="w-7 h-7 sm:w-8 sm:h-8 animate-pulse text-white" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5 text-white" />
                  )}
                </button>
              </div>

              {/* Floating Atmosphere Label */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 flex items-center justify-between text-xs">
                <span>The Personal Joint Ambiance</span>
                <span className="text-[#D62828] font-bold">Lekki Phase 1, Lagos</span>
              </div>
            </div>

            {/* Interactive Ambiance Toast/Player */}
            {isPlayingAmbiance && (
              <div className="mt-4 p-4 rounded-xl bg-[#0B132B] text-white text-xs flex items-center justify-between shadow-lg animate-in fade-in duration-200">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-[#D62828] animate-ping" />
                  <div>
                    <p className="font-bold text-sm">Ambiance Preview Active</p>
                    <p className="text-neutral-400">Warm conversation, afrobeats rhythm & kitchen aromas</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsPlayingAmbiance(false)}
                  className="p-1 rounded hover:bg-white/10 text-neutral-300 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Right: Copy & Stats */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D62828] mb-2 inline-block">
              EXPERIENCE
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight font-['Outfit'] leading-tight mb-5">
              A TASTE YOU'LL <br />
              <span className="text-[#D62828]">NEVER FORGET</span>
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed mb-8">
              From our kitchen to your table, every bowl is made with passion, tradition and care. We pride ourselves on authentic spices that awaken your senses.
            </p>

            {/* 3 Metric Cards matching wireframe layout */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full pt-4 border-t border-neutral-100">
              {/* Stat 1 */}
              <div className="bg-[#FDFBF7] p-3 sm:p-4 rounded-xl border border-neutral-200/80 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0B132B] font-['Outfit'] tabular-nums mb-1">
                  100%
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-600 leading-snug">
                  Fresh Ingredients
                </span>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#FDFBF7] p-3 sm:p-4 rounded-xl border border-neutral-200/80 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#D62828] font-['Outfit'] tabular-nums mb-1">
                  4.9★
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-600 leading-snug">
                  Customer Rating
                </span>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#FDFBF7] p-3 sm:p-4 rounded-xl border border-neutral-200/80 text-center">
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0B132B] font-['Outfit'] tabular-nums mb-1">
                  Daily
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-600 leading-snug">
                  Freshly Prepared
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
