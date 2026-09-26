import React, { useState } from 'react';
import { ALL_MENU_ITEMS, MenuItem } from '../data/restaurantData';
import { Flame, Sparkles } from 'lucide-react';

interface SpecialtiesMenuProps {
  onSelectItem: (item: MenuItem) => void;
}

type CategoryType = 'soups' | 'meals' | 'drinks' | 'specials';

export const SpecialtiesMenu: React.FC<SpecialtiesMenuProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('soups');

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'soups', label: 'Pepper Soups' },
    { id: 'meals', label: 'Meals' },
    { id: 'drinks', label: 'Drinks' },
    { id: 'specials', label: 'Specials' },
  ];

  const filteredItems = ALL_MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="specialties" className="py-20 bg-[#FDFBF7] border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D62828] mb-2 inline-block">
            OUR SPECIALTIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B132B] tracking-tight font-['Outfit'] mb-4">
            MORE THAN JUST PEPPER SOUP
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Explore our selection of delicious local and continental dishes, made with fresh ingredients and traditional flavors.
          </p>
        </div>

        {/* Category Tabs (Segmented Button Controls) */}
        <div className="flex justify-center mb-12 overflow-x-auto py-2">
          <div className="inline-flex items-center gap-1.5 p-1.5 bg-neutral-200/70 rounded-xl border border-neutral-300/60 shadow-xs">
            {categories.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 whitespace-nowrap active:scale-95 ${
                    isActive
                      ? 'bg-[#0B132B] text-white shadow-sm'
                      : 'text-neutral-700 hover:text-[#0B132B] hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Grid: 3-col Desktop, 2-col Tablet, 1-col Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-[#D62828]/40 transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                {/* Optional Badge */}
                {item.badge && (
                  <div className="absolute top-3 left-3 bg-[#D62828] text-white text-[11px] font-bold px-2.5 py-1 rounded shadow uppercase tracking-wider">
                    {item.badge}
                  </div>
                )}

                {/* Spicy Indicator if applicable */}
                {item.spicyLevel && item.spicyLevel > 1 && (
                  <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-1 rounded flex items-center gap-1">
                    <Flame className="w-3 h-3 text-[#D62828] fill-[#D62828]" />
                    <span>Spicy</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-bold text-lg text-[#0B132B] mb-2 font-['Outfit'] group-hover:text-[#D62828] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row: Red Price + Order Button */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
                      Price
                    </span>
                    <span className="text-xl font-extrabold text-[#D62828] font-['Outfit'] tracking-tight">
                      {item.formattedPrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className="px-5 py-2.5 bg-[#0B132B] hover:bg-[#D62828] text-white text-xs font-bold tracking-wider uppercase rounded-md transition-colors duration-200 shadow-xs active:scale-95"
                  >
                    ORDER NOW
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
