import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS_SET_1 } from '../data/restaurantData';

export const CustomerFavorites: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_SET_1.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_SET_1.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 bg-[#FDFBF7] border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D62828] mb-2 inline-block">
            CUSTOMER FAVORITES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight font-['Outfit'] mb-3">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Real people. Real experiences.
          </p>
        </div>

        {/* Desktop 3-Card Grid / Mobile Responsive View */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {TESTIMONIALS_SET_1.map((item, idx) => {
            const isHighlight = idx === 1; // Subtle center card accent
            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                  isHighlight
                    ? 'bg-white border-[#D62828]/30 shadow-md ring-1 ring-[#D62828]/10'
                    : 'bg-white/80 border-neutral-200/80 shadow-xs hover:shadow-sm'
                }`}
              >
                <div>
                  {/* Stars Rating */}
                  <div className="flex items-center gap-1 mb-4 text-[#D62828]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D62828]" />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-base text-neutral-700 leading-relaxed font-normal italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden flex items-center justify-center shrink-0 border border-neutral-300">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B132B] font-['Outfit'] leading-tight">
                      {item.name}
                    </h4>
                    <span className="text-xs text-neutral-500 font-medium">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {TESTIMONIALS_SET_1.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? 'w-8 bg-[#D62828]' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
