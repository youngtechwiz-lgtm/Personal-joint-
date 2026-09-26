import React from 'react';
import { Sparkles, ArrowRight, Leaf } from 'lucide-react';

interface FreshIngredientsProps {
  onOurStory: () => void;
}

export const FreshIngredients: React.FC<FreshIngredientsProps> = ({ onOurStory }) => {
  return (
    <section className="py-20 bg-[#FDFBF7] overflow-hidden border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Small Food / Ingredient Icon */}
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#D62828] mb-6 shadow-xs">
              <Leaf className="w-6 h-6 text-[#D62828]" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight font-['Outfit'] leading-tight mb-6">
              FRESH INGREDIENTS, <br />
              <span className="text-[#D62828]">GREAT TASTE</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              We use only the freshest meats, natural spices, and carefully selected ingredients to give you the best pepper soup experience.
            </p>

            {/* Our Story Button */}
            <button
              onClick={onOurStory}
              className="px-8 py-3.5 bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md shadow transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              OUR STORY
              <ArrowRight className="w-4 h-4 text-[#D62828]" />
            </button>
          </div>

          {/* Right Column Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-neutral-900 aspect-[4/3] group">
              <img
                src="/src/assets/images/soup_ingredients_1790423328141.jpg"
                alt="Fresh authentic Nigerian pepper soup ingredients, scent leaves, uda pods, calabash nutmeg, and ginger"
                className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-neutral-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B132B] uppercase tracking-wide">
                    Natural Native Spices
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-600">
                    Scent leaves, Ehuru (Calabash nutmeg), Uda pods & Fresh ginger
                  </p>
                </div>
                <span className="text-xs font-extrabold text-[#D62828] bg-red-50 px-2.5 py-1 rounded">
                  100% Organic
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
