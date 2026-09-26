import React from 'react';
import { POPULAR_PEPPER_SOUPS, MenuItem } from '../data/restaurantData';
import { ArrowDown, Flame, Utensils } from 'lucide-react';

interface PopularMenuProps {
  onSelectItem: (item: MenuItem) => void;
  onViewFullMenu: () => void;
}

export const PopularMenu: React.FC<PopularMenuProps> = ({ onSelectItem, onViewFullMenu }) => {
  return (
    <section id="popular-menu" className="py-20 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D62828] mb-2 inline-block">
            OUR MENU
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight font-['Outfit'] mb-4">
            POPULAR PEPPER SOUPS
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Choose from our signature pepper soups, prepared with the freshest ingredients and traditional recipes.
          </p>
        </div>

        {/* 5-Column Responsive Cards matching wireframe layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {POPULAR_PEPPER_SOUPS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FDFBF7] rounded-xl border border-neutral-200/80 p-5 flex flex-col items-center text-center group hover:shadow-md hover:border-[#D62828]/40 transition-all duration-200"
            >
              {/* Circular Bowl Image Container */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4 border-2 border-white shadow-sm bg-neutral-100 relative group-hover:scale-105 transition-transform duration-300">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Title & Description */}
              <h3 className="font-bold text-base text-[#0B132B] mb-1.5 font-['Outfit'] line-clamp-1 group-hover:text-[#D62828] transition-colors">
                {item.name}
              </h3>

              <p className="text-xs text-neutral-500 line-clamp-2 mb-3 leading-relaxed">
                {item.description}
              </p>

              {/* Price in Rich Red */}
              <div className="mt-auto mb-4">
                <span className="text-lg font-extrabold text-[#D62828] tracking-tight">
                  {item.formattedPrice}
                </span>
              </div>

              {/* Order Button */}
              <button
                onClick={() => onSelectItem(item)}
                className="w-full py-2 px-3 text-xs font-bold tracking-wider uppercase text-white bg-[#0B132B] hover:bg-[#D62828] rounded-md transition-colors duration-200"
              >
                ORDER NOW
              </button>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center">
          <button
            onClick={onViewFullMenu}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md shadow transition-all duration-200 group active:scale-95"
          >
            VIEW FULL MENU
            <ArrowDown className="w-4 h-4 text-[#D62828] group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
