import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const nextImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevImage = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  const currentItem = selectedItemIndex !== null ? GALLERY_ITEMS[selectedItemIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-[#FDFBF7] border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D62828] mb-2 inline-block">
            GALLERY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight font-['Outfit'] mb-3">
            MOMENTS FROM OUR JOINT
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Take a look at some of our dishes, happy customers and the vibe at Personal Joint.
          </p>
        </div>

        {/* Gallery Grid (3 or 4 columns matching wireframe cards) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden shadow-xs hover:shadow-md cursor-pointer aspect-square bg-neutral-900 border border-neutral-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              {/* Overlay with zoom icon and title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold text-[#D62828] tracking-widest mb-1">
                  {item.category}
                </span>
                <p className="font-bold text-xs sm:text-sm font-['Outfit'] leading-tight line-clamp-1">
                  {item.title}
                </p>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0B132B] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Close image lightbox"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#D62828] text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#D62828] text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#D62828] text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image View */}
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Lightbox Caption */}
            <div className="p-6 bg-[#0B132B] border-t border-white/10 flex items-center justify-between text-white">
              <div>
                <span className="text-xs uppercase font-bold text-[#D62828] tracking-widest block mb-1">
                  {currentItem.category}
                </span>
                <h3 className="text-lg font-bold font-['Outfit']">{currentItem.title}</h3>
                <p className="text-xs text-neutral-400 mt-1">{currentItem.description}</p>
              </div>
              <span className="text-xs font-mono text-neutral-400">
                {(selectedItemIndex ?? 0) + 1} / {GALLERY_ITEMS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
