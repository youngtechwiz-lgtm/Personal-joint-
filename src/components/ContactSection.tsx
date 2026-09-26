import React from 'react';
import { Phone, MessageSquare, Mail, MapPin, Clock, Navigation } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D62828] mb-2 inline-block">
            FIND US
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B132B] tracking-tight font-['Outfit'] mb-3">
            VISIT PERSONAL JOINT
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Dine in with us in Lekki or place an order for fast, piping-hot delivery anywhere across Lagos.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Phone */}
          <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D62828] flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#0B132B] font-['Outfit'] mb-1">
              Phone Number
            </h3>
            <p className="text-xs text-neutral-500 mb-3">Call for table reservations & orders</p>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="text-sm font-bold text-[#D62828] hover:underline"
            >
              {RESTAURANT_INFO.phone}
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#0B132B] font-['Outfit'] mb-1">
              WhatsApp Orders
            </h3>
            <p className="text-xs text-neutral-500 mb-3">Direct order chat with our kitchen</p>
            <a
              href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
                "Hello Personal Joint, I would like to place an order."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-emerald-600 hover:underline"
            >
              {RESTAURANT_INFO.whatsapp}
            </a>
          </div>

          {/* Card 3: Location */}
          <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0B132B] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#0B132B]" />
            </div>
            <h3 className="font-bold text-base text-[#0B132B] font-['Outfit'] mb-1">
              Our Location
            </h3>
            <p className="text-xs text-neutral-500 mb-3">Lekki Phase 1, Lagos</p>
            <span className="text-xs font-semibold text-neutral-700 leading-tight">
              {RESTAURANT_INFO.address}
            </span>
          </div>

          {/* Card 4: Hours */}
          <div className="bg-[#FDFBF7] p-6 rounded-2xl border border-neutral-200/80 shadow-xs flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#0B132B] font-['Outfit'] mb-1">
              Opening Hours
            </h3>
            <p className="text-xs text-neutral-500 mb-3">Serving hot pepper soup daily</p>
            <span className="text-xs font-bold text-[#0B132B]">
              {RESTAURANT_INFO.openingHours}
            </span>
          </div>

        </div>

        {/* 3 Explicit Action Buttons as specified in wireframe & instructions */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href={`tel:${RESTAURANT_INFO.phoneRaw}`}
            className="px-7 py-3.5 bg-[#0B132B] hover:bg-[#1C2541] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md shadow transition-all duration-200 flex items-center gap-2 active:scale-95"
          >
            <Phone className="w-4 h-4 text-[#D62828]" />
            CALL NOW
          </a>

          <a
            href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
              "Hello Personal Joint, I would like to place an order from your menu."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md shadow transition-all duration-200 flex items-center gap-2 active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            WHATSAPP US
          </a>

          <a
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 bg-transparent border-2 border-[#0B132B] text-[#0B132B] hover:bg-[#0B132B] hover:text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md transition-all duration-200 flex items-center gap-2 active:scale-95"
          >
            <Navigation className="w-4 h-4 text-[#D62828]" />
            GET DIRECTIONS
          </a>
        </div>

      </div>
    </section>
  );
};
