import React from 'react';
import { Smartphone, ArrowRight, Phone, MessageSquare, Flame } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface OrderCTAProps {
  onOrderNow: () => void;
}

export const OrderCTA: React.FC<OrderCTAProps> = ({ onOrderNow }) => {
  return (
    <section id="order-cta" className="py-20 bg-[#0B132B] text-white relative overflow-hidden">
      {/* Ambient background lights */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-[#D62828]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-10 w-80 h-80 bg-blue-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Modern Phone Mockup showing Personal Joint mobile view */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 bg-neutral-900 rounded-[2.5rem] p-3 shadow-2xl border-4 border-neutral-700/80 ring-1 ring-white/10">
              {/* Dynamic Island / Speaker */}
              <div className="w-24 h-4 bg-black rounded-full mx-auto mb-3" />

              {/* Phone Screen Mockup Content */}
              <div className="bg-[#0B132B] rounded-[2rem] overflow-hidden p-4 border border-white/10 flex flex-col items-center text-center">
                {/* Header in mockup */}
                <div className="flex items-center justify-between w-full pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-[#D62828] flex items-center justify-center">
                      <Flame className="w-3 h-3 text-white fill-white" />
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider font-['Outfit']">
                      PERSONAL JOINT
                    </span>
                  </div>
                  <span className="text-[9px] text-[#D62828] font-bold">OPEN</span>
                </div>

                {/* Mockup Featured Dish */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 shadow-md my-2">
                  <img
                    src="/src/assets/images/hero_pepper_soup_1790423300944.jpg"
                    alt="Phone Mockup Pepper Soup"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="font-extrabold text-xs mt-1 text-white font-['Outfit']">
                  Goat Meat Pepper Soup
                </p>
                <p className="text-[10px] text-neutral-400 mb-2">Authentic traditional spices</p>
                <span className="text-sm font-extrabold text-[#D62828]">₦4,000</span>

                <div className="w-full mt-3 pt-3 border-t border-white/10 flex flex-col gap-1.5">
                  <div className="w-full py-1.5 rounded-lg bg-[#D62828] text-[10px] font-bold uppercase tracking-wider text-white">
                    Order via WhatsApp
                  </div>
                  <div className="w-full py-1.5 rounded-lg bg-white/10 text-[10px] font-semibold text-neutral-300">
                    Call 0801 234 5678
                  </div>
                </div>
              </div>

              {/* Home indicator bar */}
              <div className="w-28 h-1 bg-white/40 rounded-full mx-auto mt-3" />
            </div>
          </div>

          {/* Right: Copy & CTAs matching wireframe */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-bold tracking-widest uppercase text-[#D62828] mb-2 inline-block">
              QUICK ORDERING
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-['Outfit'] leading-tight mb-4">
              ORDER FASTER. <br />
              <span className="text-[#D62828]">EASIER!</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 max-w-xl">
              Discover our menu, choose your favorite meal and place your order with ease. We prepare each bowl to order and deliver steaming hot straight to your doorstep.
            </p>

            {/* Ordering Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={onOrderNow}
                className="px-8 py-3.5 bg-[#D62828] hover:bg-[#B71C1C] text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md shadow-lg transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                ORDER NOW
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${encodeURIComponent(
                  "Hello Personal Joint, I'd like to place an order from your menu!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md shadow transition-all duration-200 flex items-center gap-2 active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                WHATSAPP ORDER
              </a>
            </div>

            {/* App Store / Google Play style badges from wireframe */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 text-xs">
                <span className="font-bold text-white">Instant WhatsApp Ordering</span>
                <span className="text-[#D62828]">●</span>
                <span>Fast Lagos Delivery</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
