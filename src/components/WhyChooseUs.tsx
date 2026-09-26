import React from 'react';
import { Flame, Check, ShieldCheck, HeartHandshake, Utensils, Zap } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    { title: '100% Fresh Ingredients', desc: 'Daily sourced prime cuts, fresh herbs and vegetables.' },
    { title: 'Traditional Recipes', desc: 'Authentic ancestral Nigerian spice blends and preparation.' },
    { title: 'Clean & Hygienic', desc: 'Immaculate kitchen standards and sanitary packaging.' },
    { title: 'Friendly Service', desc: 'Warm hospitality that makes you feel right at home.' },
    { title: 'Fast Service', desc: 'Quick piping-hot delivery and responsive dine-in table service.' },
  ];

  return (
    <section className="py-20 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#D62828] mb-6 shadow-xs">
              <Flame className="w-6 h-6 text-[#D62828] fill-[#D62828]" />
            </div>

            <span className="text-xs font-bold tracking-widest uppercase text-[#D62828] mb-2 inline-block">
              WHY CHOOSE US
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight font-['Outfit'] leading-tight mb-6">
              AUTHENTIC TASTE. <br />
              <span className="text-[#D62828]">TRUSTED BY MANY.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6">
              We are not just a restaurant; we are a community built around authentic taste, fresh ingredients and great service. Our customers keep coming back because every bowl delivers the exact rich, comforting flavor they remember.
            </p>

            <div className="p-4 rounded-xl bg-[#FDFBF7] border border-neutral-200 text-xs text-neutral-700 font-medium">
              🌶️ <strong className="text-[#0B132B]">True Pepper Soup Secret:</strong> Zero artificial thickeners. Just natural simmered bone broth, roasted native spices, and real scent leaves.
            </div>
          </div>

          {/* Right Column: 5 Pillars / Trust List matching wireframe */}
          <div className="lg:col-span-6">
            <div className="space-y-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-xl bg-[#FDFBF7] border border-neutral-200/80 hover:border-[#D62828]/50 hover:bg-white transition-all duration-200 flex items-center gap-4 group shadow-xs"
                >
                  {/* Clean bullet indicator */}
                  <div className="w-8 h-8 rounded-full bg-[#0B132B] text-white flex items-center justify-center shrink-0 group-hover:bg-[#D62828] transition-colors">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-base text-[#0B132B] font-['Outfit'] leading-tight group-hover:text-[#D62828] transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
