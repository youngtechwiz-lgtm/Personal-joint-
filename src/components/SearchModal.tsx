import React, { useState, useMemo } from 'react';
import { Search, X, Flame } from 'lucide-react';
import { ALL_MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: MenuItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectItem }) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return ALL_MENU_ITEMS.slice(0, 6);
    const q = query.toLowerCase();
    return ALL_MENU_ITEMS.filter(
      (item) => item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start justify-center p-4 pt-20 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-neutral-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-neutral-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search goat meat, catfish, cow leg, jollof..."
            className="w-full text-sm sm:text-base font-medium text-neutral-800 placeholder-neutral-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-neutral-400 hover:text-neutral-600 text-xs font-semibold px-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-full text-neutral-500 hover:bg-neutral-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 px-2 mb-2">
            {query.trim() ? `Search Results (${filtered.length})` : 'Popular Searches'}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-8 text-neutral-500 text-sm">
              No dishes found matching "{query}". Try "pepper soup" or "goat meat".
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectItem(item);
                  onClose();
                }}
                className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 cursor-pointer transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-neutral-100 border border-neutral-200">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm text-[#0B132B] truncate group-hover:text-[#D62828] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-neutral-500 truncate">{item.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-xs font-extrabold text-[#D62828]">
                    {item.formattedPrice}
                  </span>
                  <span className="block text-[10px] text-neutral-400 uppercase font-semibold">
                    Order
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
