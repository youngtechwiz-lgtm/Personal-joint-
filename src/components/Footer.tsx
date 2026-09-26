import React from 'react';
import { Flame, Instagram, Facebook, MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B132B] text-neutral-300 pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#D62828] flex items-center justify-center text-white shadow-sm">
                <Flame className="w-5 h-5 fill-white text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-wider text-white font-['Outfit'] leading-tight">
                  PERSONAL JOINT
                </span>
                <span className="text-[10px] tracking-widest font-semibold text-neutral-400">
                  PEPPER SOUP & MORE
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-sm">
              {RESTAURANT_INFO.subTagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D62828] text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D62828] text-white flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_INFO.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#D62828] text-white flex items-center justify-center transition-colors"
              >
                <span className="text-xs font-bold">TT</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-5 font-['Outfit']">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#home');
                  }}
                  className="hover:text-[#D62828] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#popular-menu"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#popular-menu');
                  }}
                  className="hover:text-[#D62828] transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#about');
                  }}
                  className="hover:text-[#D62828] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#gallery');
                  }}
                  className="hover:text-[#D62828] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#reviews');
                  }}
                  className="hover:text-[#D62828] transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#contact');
                  }}
                  className="hover:text-[#D62828] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-5 font-['Outfit']">
              CONTACT US
            </h4>
            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D62828] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D62828] shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:text-white transition-colors">
                  {RESTAURANT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D62828] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D62828] shrink-0" />
                <span>{RESTAURANT_INFO.openingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Personal Joint. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-200 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>·</span>
            <span className="hover:text-neutral-200 transition-colors cursor-pointer">
              Terms & Conditions
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D62828] text-white flex items-center justify-center transition-colors shrink-0"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
