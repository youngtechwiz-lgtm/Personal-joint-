import React from 'react';
import { ArrowRight, Heart, Award, Users } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D62828] mb-2 inline-block">
              ABOUT PERSONAL JOINT
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight font-['Outfit'] leading-tight mb-6">
              MORE THAN JUST <br />
              <span className="text-[#D62828]">A MEAL</span>
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed mb-4">
              Personal Joint is a Nigerian food restaurant committed to serving authentic, flavorful meals inspired by traditional recipes and local taste.
            </p>

            <p className="text-base text-neutral-600 leading-relaxed mb-8">
              We bring people together with good food, great vibes, and unforgettable experiences. Whether you're stopping by after work or gathering with family on the weekend, we make you feel right at home.
            </p>

            {/* Core Values Minimal Row */}
            <div className="grid grid-cols-3 gap-4 mb-8 w-full border-y border-neutral-100 py-4">
              <div className="flex flex-col items-start">
                <span className="text-sm font-bold text-[#0B132B] font-['Outfit']">Authentic</span>
                <span className="text-xs text-neutral-500">Ancestral spice blends</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-bold text-[#0B132B] font-['Outfit']">Hygienic</span>
                <span className="text-xs text-neutral-500">Pristine kitchen prep</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-bold text-[#0B132B] font-['Outfit']">Welcoming</span>
                <span className="text-xs text-neutral-500">Great local vibes</span>
              </div>
            </div>

            <button
              onClick={onLearnMore}
              className="px-8 py-3.5 bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md shadow transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              LEARN MORE
              <ArrowRight className="w-4 h-4 text-[#D62828]" />
            </button>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-neutral-900 aspect-[4/3] group">
              <img
                src="/src/assets/images/restaurant_patio_1790423338930.jpg"
                alt="Personal Joint restaurant cozy dining ambience and terrace"
                className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-neutral-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0B132B] uppercase tracking-wide">
                    The Gathering Place
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-600">
                    Where spicy flavors meet vibrant conversations
                  </p>
                </div>
                <span className="text-xs font-bold text-[#D62828] bg-red-50 px-2.5 py-1 rounded">
                  Lagos, NG
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
