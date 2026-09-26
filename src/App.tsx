/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PopularMenu } from './components/PopularMenu';
import { FreshIngredients } from './components/FreshIngredients';
import { ExperienceSection } from './components/ExperienceSection';
import { CustomerFavorites } from './components/CustomerFavorites';
import { SpicyCTA } from './components/SpicyCTA';
import { AboutSection } from './components/AboutSection';
import { SpecialtiesMenu } from './components/SpecialtiesMenu';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { OrderCTA } from './components/OrderCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { SearchModal } from './components/SearchModal';
import { MenuItem } from './data/restaurantData';

export default function App() {
  const [selectedItemForOrder, setSelectedItemForOrder] = useState<MenuItem | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleOpenOrderModal = (item?: MenuItem) => {
    setSelectedItemForOrder(item || null);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedItemForOrder(null);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A202C] antialiased selection:bg-[#D62828] selection:text-white">
      {/* 1. Sticky Header */}
      <Header
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenOrderModal={() => handleOpenOrderModal()}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onOrderNow={() => handleOpenOrderModal()}
          onViewMenu={() => scrollToSection('popular-menu')}
        />

        {/* 3. Popular Pepper Soups */}
        <PopularMenu
          onSelectItem={(item) => handleOpenOrderModal(item)}
          onViewFullMenu={() => scrollToSection('specialties')}
        />

        {/* 4. Fresh Ingredients */}
        <FreshIngredients
          onOurStory={() => scrollToSection('about')}
        />

        {/* 5. Restaurant Experience */}
        <ExperienceSection />

        {/* 6. Customer Favorites (Testimonials 1) */}
        <CustomerFavorites />

        {/* 7. Craving Something Spicy CTA */}
        <SpicyCTA
          onOrderNow={() => handleOpenOrderModal()}
        />

        {/* 8. About Personal Joint */}
        <AboutSection
          onLearnMore={() => scrollToSection('contact')}
        />

        {/* 9. Specialties / Full Menu with Category Tabs */}
        <SpecialtiesMenu
          onSelectItem={(item) => handleOpenOrderModal(item)}
        />

        {/* 10. Why Choose Us */}
        <WhyChooseUs />

        {/* 11. Gallery with Lightbox */}
        <GallerySection />

        {/* 12. Reviews Section (Section 17) */}
        <ReviewsSection />

        {/* 13. Order CTA with Phone Mockup (Section 18) */}
        <OrderCTA
          onOrderNow={() => handleOpenOrderModal()}
        />

        {/* 14. Contact Section (Section 19) */}
        <ContactSection />
      </main>

      {/* 15. Footer (Section 20) */}
      <Footer />

      {/* Modals & Dialogs */}
      <OrderModal
        item={selectedItemForOrder}
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectItem={(item) => handleOpenOrderModal(item)}
      />
    </div>
  );
}
