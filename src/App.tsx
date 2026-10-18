import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ValueProps } from './components/ValueProps.tsx';
import { AdvancedCare } from './components/AdvancedCare.tsx';
import { SmileTransformations } from './components/SmileTransformations.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { CostCalculatorSection } from './components/CostCalculatorSection.tsx';
import { DoctorSection } from './components/DoctorSection.tsx';
import { ArticlesSection } from './components/ArticlesSection.tsx';
import { FaqAndContact } from './components/FaqAndContact.tsx';
import { CtaBanner } from './components/CtaBanner.tsx';
import { Footer } from './components/Footer.tsx';
import { AppointmentModal } from './components/AppointmentModal.tsx';
import { ServicesPage } from './components/ServicesPage.tsx';
import { AboutPage } from './components/AboutPage.tsx';
import { BlogPage } from './components/BlogPage.tsx';
import { DentalMotionGuide, DentalEyeGuideDivider } from './components/DentalMotionGuide.tsx';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'services' | 'about' | 'blog'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam === 'services') return 'services';
      if (pageParam === 'about') return 'about';
      if (pageParam === 'blog') return 'blog';
    }
    return 'home';
  });
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isCostModalOpen, setIsCostModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (activePage === 'services') {
      url.searchParams.set('page', 'services');
    } else if (activePage === 'about') {
      url.searchParams.set('page', 'about');
    } else if (activePage === 'blog') {
      url.searchParams.set('page', 'blog');
    } else {
      url.searchParams.delete('page');
    }
    window.history.replaceState({}, '', url.toString());
  }, [activePage]);

  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedService(serviceId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col font-sans selection:bg-[#dbe1ff] selection:text-[#004ac6]">
      {/* Interactive Scroll-Linked Dental Eye-Guide & Progress System */}
      <DentalMotionGuide activePage={activePage} />

      {/* Top Header / App Bar */}
      <Navbar
        activePage={activePage}
        onSelectPage={(page) => setActivePage(page)}
        onOpenBooking={() => handleOpenBooking()}
        onOpenCostCalculator={() => setIsCostModalOpen(true)}
      />

      {activePage === 'home' ? (
        <main className="flex-grow">
          {/* 1. Hero Section */}
          <Hero
            onOpenBooking={() => handleOpenBooking()}
            onNavigateServices={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

          {/* 2. Quick Value Propositions Bar */}
          <ValueProps />

          <DentalEyeGuideDivider
            label="تکنولوژی و تجهیزات استریل"
            icon="biotech"
          />

          {/* 3. Advanced Care & Technologies */}
          <AdvancedCare onOpenBooking={() => handleOpenBooking()} />

          <DentalEyeGuideDivider
            label="نمونه درمان‌های قبل و بعد"
            icon="auto_awesome"
          />

          {/* 4. Smile Transformations (Before / After) */}
          <SmileTransformations onOpenBooking={() => handleOpenBooking('cosmetic-composite')} />

          <DentalEyeGuideDivider
            label="خدمات تخصصی دندان‌پزشکی"
            icon="dentistry"
          />

          {/* 5. Complete Services Grid */}
          <ServicesSection onOpenBooking={(sId) => handleOpenBooking(sId)} />

          <DentalEyeGuideDivider
            label="آشنایی با دکتر انوشیروان شمسپور"
            icon="verified_user"
          />

          {/* 6. Doctor & Clinic Introduction */}
          <DoctorSection onOpenBooking={() => handleOpenBooking()} />

          <DentalEyeGuideDivider
            label="مجله آموزشی سلامت دهان"
            icon="menu_book"
          />

          {/* 7. Educational Articles / Oral Health Blog */}
          <ArticlesSection
            onNavigateBlog={() => {
              setActivePage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenBooking={(sId) => handleOpenBooking(sId)}
          />

          <DentalEyeGuideDivider
            label="پرسش‌های متداول و آدرس مطب"
            icon="location_on"
          />

          {/* 8 & 9. FAQs & Clinic Location / Routing */}
          <FaqAndContact />

          {/* 10. Call to Action Banner */}
          <CtaBanner onOpenBooking={() => handleOpenBooking()} />
        </main>
      ) : activePage === 'services' ? (
        <main className="flex-grow">
          <ServicesPage
            onOpenBooking={(sId) => handleOpenBooking(sId)}
            onNavigateHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      ) : activePage === 'about' ? (
        <main className="flex-grow">
          <AboutPage
            onOpenBooking={(sId) => handleOpenBooking(sId)}
            onNavigateServices={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      ) : (
        <main className="flex-grow">
          <BlogPage
            onOpenBooking={(sId) => handleOpenBooking(sId)}
            onNavigateHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {/* Footer */}
      <Footer onSelectPage={(page) => setActivePage(page)} />

      {/* Interactive Treatment Cost Estimator Modal */}
      <CostCalculatorSection
        isOpen={isCostModalOpen}
        onClose={() => setIsCostModalOpen(false)}
        onOpenBooking={(name) => handleOpenBooking(name)}
      />

      {/* Interactive Appointment Booking Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedServiceId={preselectedService}
      />
    </div>
  );
}
