import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, Flame, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenOrderModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'popular-menu', 'about', 'gallery', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Menu', href: '#popular-menu', id: 'popular-menu' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B132B]/95 backdrop-blur-md shadow-md py-3 border-b border-white/10 text-white'
          : 'bg-[#FDFBF7]/90 backdrop-blur-md py-4 border-b border-neutral-200/70 text-[#0B132B]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Icon */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('#home');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#D62828] flex items-center justify-center text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <Flame className="w-5 h-5 fill-white text-white" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-extrabold text-base sm:text-lg tracking-wider transition-colors font-['Outfit'] leading-tight ${
                  isScrolled ? 'text-white' : 'text-[#0B132B]'
                }`}
              >
                PERSONAL JOINT
              </span>
              <span
                className={`text-[10px] tracking-widest font-semibold ${
                  isScrolled ? 'text-neutral-300' : 'text-neutral-500'
                }`}
              >
                PEPPER SOUP & MORE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`text-sm font-semibold transition-colors duration-150 py-1 relative ${
                    isActive
                      ? 'text-[#D62828]'
                      : isScrolled
                      ? 'text-neutral-200 hover:text-white'
                      : 'text-neutral-700 hover:text-[#0B132B]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D62828] rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Primary Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSearch}
              aria-label="Search menu"
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'text-neutral-300 hover:text-white hover:bg-white/10'
                  : 'text-neutral-700 hover:text-[#0B132B] hover:bg-neutral-100'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenOrderModal}
              aria-label="Order or view cart"
              className={`p-2 rounded-full transition-colors relative ${
                isScrolled
                  ? 'text-neutral-300 hover:text-white hover:bg-white/10'
                  : 'text-neutral-700 hover:text-[#0B132B] hover:bg-neutral-100'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#D62828]" />
            </button>

            <button
              onClick={() => scrollTo('#order-cta')}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide uppercase text-white bg-[#D62828] hover:bg-[#B71C1C] rounded-md shadow-sm transition-all duration-200 hover:shadow whitespace-nowrap active:scale-95"
            >
              ORDER NOW
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className={`p-1.5 rounded-full ${
                isScrolled ? 'text-white' : 'text-[#0B132B]'
              }`}
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => scrollTo('#order-cta')}
              className="px-3 py-1.5 text-xs font-bold uppercase text-white bg-[#D62828] rounded-md"
            >
              ORDER
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={`p-1.5 rounded-md ${
                isScrolled ? 'text-white' : 'text-[#0B132B]'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B132B] text-white border-t border-white/10 px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`text-base font-semibold py-2 transition-colors border-b border-white/5 flex items-center justify-between ${
                  activeSection === link.id ? 'text-[#D62828]' : 'text-neutral-200'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <span className="w-2 h-2 rounded-full bg-[#D62828]" />}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenOrderModal();
                }}
                className="w-full py-3 text-center text-sm font-bold tracking-wider uppercase text-white bg-[#D62828] rounded-md shadow"
              >
                ORDER NOW
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full py-2.5 text-center text-xs font-semibold text-neutral-300 bg-white/10 rounded-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D62828]" />
                Call {RESTAURANT_INFO.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
