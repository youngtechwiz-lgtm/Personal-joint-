import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS_SET_2 } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="py-20 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Large Quote Motif from wireframe */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D62828] flex items-center justify-center mx-auto mb-3">
            <Quote className="w-6 h-6 fill-[#D62828]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight font-['Outfit'] mb-3">
            WHAT OUR CUSTOMERS SAY
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Real people. Real experiences.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {REVIEWS_SET_2.map((review, index) => (
            <div
              key={review.id}
              className="bg-[#FDFBF7] p-7 rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-[#D62828]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#D62828] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D62828]" />
                  ))}
                </div>

                <p className="text-neutral-700 italic text-base leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-200/60">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-xs bg-neutral-200">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#0B132B] font-['Outfit']">
                    {review.name}
                  </h4>
                  <span className="text-xs text-neutral-500 font-medium">
                    {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {REVIEWS_SET_2.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              aria-label={`Select testimonial slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeSlide === i ? 'w-8 bg-[#D62828]' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
