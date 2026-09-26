import React from 'react';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';

interface SpicyCTAProps {
  onOrderNow: () => void;
}

export const SpicyCTA: React.FC<SpicyCTAProps> = ({ onOrderNow }) => {
  return (
    <section className="py-16 md:py-20 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Background ambient decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D62828]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold tracking-wider uppercase text-red-300 mb-4 border border-white/10">
              <Flame className="w-3.5 h-3.5 text-[#D62828] fill-[#D62828]" />
              HOT & FRESH DELIVERY
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-['Outfit'] mb-4 leading-tight">
              CRAVING SOMETHING <br />
              <span className="text-[#D62828]">SPICY?</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 mb-8 max-w-xl leading-relaxed">
              Order your favorite pepper soup fresh from our kitchen. Prepared with rich native herbs, tender meats, and fiery peppers.
            </p>

            <button
              onClick={onOrderNow}
              className="px-8 py-3.5 bg-[#D62828] hover:bg-[#B71C1C] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md shadow-lg transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              ORDER NOW
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Right Decorative Pepper Soup Bowl with Steam */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-64 sm:w-80 aspect-square">
              {/* Subtle back circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-[#D62828]/20 border border-white/10 -z-0 scale-105" />

              {/* Steam Visual Layers */}
              <div className="absolute -top-6 left-1/3 pointer-events-none z-20 flex gap-4">
                <div className="w-1.5 h-12 bg-gradient-to-t from-white/70 to-transparent rounded-full filter blur-[1px] animate-steam-1" />
                <div className="w-2 h-14 bg-gradient-to-t from-white/50 to-transparent rounded-full filter blur-[1px] animate-steam-2" />
                <div className="w-1.5 h-10 bg-gradient-to-t from-white/60 to-transparent rounded-full filter blur-[1px] animate-steam-3" />
              </div>

              {/* Bowl Visual */}
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-2xl relative z-10 group">
                <img
                  src="/src/assets/images/cooking_pot_broth_1790423350009.jpg"
                  alt="Simmering hot Nigerian pepper soup bowl"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
