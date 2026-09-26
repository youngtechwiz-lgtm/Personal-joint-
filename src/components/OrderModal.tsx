import React, { useState } from 'react';
import { X, MessageSquare, Phone, Flame, Check } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

interface OrderModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ item, isOpen, onClose }) => {
  const [spicePreference, setSpicePreference] = useState<'Mild' | 'Medium' | 'Extra Hot'>('Medium');
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!isOpen) return null;

  const itemName = item ? item.name : 'Pepper Soup Order';
  const itemPrice = item ? item.price : 4000;
  const totalPrice = itemPrice * quantity;
  const formattedTotal = `₦${totalPrice.toLocaleString()}`;

  const whatsappMessage = item
    ? `Hello Personal Joint! 🍲 I would like to place an order:%0A%0A*Item:* ${itemName}%0A*Quantity:* ${quantity}%0A*Spice Level:* ${spicePreference}%0A*Total:* ${formattedTotal}${
        specialInstructions ? `%0A*Special Note:* ${encodeURIComponent(specialInstructions)}` : ''
      }%0A%0APlease confirm availability and delivery time.`
    : `Hello Personal Joint! 🍲 I would like to make an inquiry and place an order from your menu.`;

  const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappRaw}?text=${whatsappMessage}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-neutral-200 text-left relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0B132B] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#D62828] flex items-center justify-center text-white">
              <Flame className="w-4 h-4 fill-white text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base font-['Outfit'] leading-tight">
                Quick Order
              </h3>
              <p className="text-[11px] text-neutral-400">Personal Joint Lekki</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D62828] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {item ? (
            <div className="flex gap-4 items-center pb-5 border-b border-neutral-100 mb-5">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-neutral-200 bg-neutral-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm sm:text-base text-[#0B132B] truncate font-['Outfit']">
                  {item.name}
                </h4>
                <p className="text-xs text-neutral-500 line-clamp-1 mt-0.5">{item.description}</p>
                <span className="text-sm font-extrabold text-[#D62828] mt-1 block">
                  {item.formattedPrice}
                </span>
              </div>
            </div>
          ) : (
            <div className="pb-4 mb-4 border-b border-neutral-100">
              <p className="text-sm text-neutral-700">
                Order directly from our kitchen via WhatsApp or Phone call. Freshly prepared to order!
              </p>
            </div>
          )}

          {/* Spice Level Selector */}
          {item && (
            <div className="mb-5">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-2">
                Select Spice Level
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Mild', 'Medium', 'Extra Hot'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setSpicePreference(lvl)}
                    className={`py-2 px-3 text-xs font-bold rounded-lg border text-center transition-all ${
                      spicePreference === lvl
                        ? 'bg-[#0B132B] text-white border-[#0B132B]'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          {item && (
            <div className="flex items-center justify-between mb-5 bg-neutral-50 p-3 rounded-xl border border-neutral-200">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-700">
                Quantity
              </span>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-md bg-white border border-neutral-300 font-bold text-neutral-700 hover:bg-neutral-100"
                >
                  -
                </button>
                <span className="font-extrabold text-sm text-[#0B132B] w-5 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-md bg-white border border-neutral-300 font-bold text-neutral-700 hover:bg-neutral-100"
                >
                  +
                </button>
              </div>
            </div>
          )}

          {/* Special Instructions */}
          <div className="mb-6">
            <label className="text-xs font-bold uppercase tracking-wider text-neutral-700 block mb-1.5">
              Special Request (Optional)
            </label>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Extra scent leaves, pack in delivery container"
              className="w-full px-3 py-2 text-xs border border-neutral-200 rounded-lg focus:outline-none focus:border-[#D62828]"
            />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-lg shadow flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              ORDER ON WHATSAPP ({formattedTotal})
            </a>

            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D62828]" />
              CALL TO ORDER ({RESTAURANT_INFO.phone})
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
