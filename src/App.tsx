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
import { ServicesPage } from './components/ServicesPage.tsx';
import { AboutPage } from './components/AboutPage.tsx';
import { BlogPage } from './components/BlogPage.tsx';
import { ArticleDetailPage } from './components/ArticleDetailPage.tsx';
import { SmileGalleryPage } from './components/SmileGalleryPage.tsx';
import { ContactPage } from './components/ContactPage.tsx';
import { DentalMotionGuide, DentalEyeGuideDivider } from './components/DentalMotionGuide.tsx';
import { CLINIC_INFO } from './data/clinicData.ts';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'services' | 'about' | 'blog' | 'article' | 'gallery' | 'contact'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam === 'services') return 'services';
      if (pageParam === 'about') return 'about';
      if (pageParam === 'blog') return 'blog';
      if (pageParam === 'article') return 'article';
      if (pageParam === 'gallery') return 'gallery';
      if (pageParam === 'contact') return 'contact';
    }
    return 'home';
  });
  const [selectedArticleId, setSelectedArticleId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('id') || params.get('articleId') || 'featured-composite-vs-laminate';
    }
    return 'featured-composite-vs-laminate';
  });
  const [isCostModalOpen, setIsCostModalOpen] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (activePage === 'services') {
      url.searchParams.set('page', 'services');
      url.searchParams.delete('id');
    } else if (activePage === 'about') {
      url.searchParams.set('page', 'about');
      url.searchParams.delete('id');
    } else if (activePage === 'blog') {
      url.searchParams.set('page', 'blog');
      url.searchParams.delete('id');
    } else if (activePage === 'article') {
      url.searchParams.set('page', 'article');
      if (selectedArticleId) url.searchParams.set('id', selectedArticleId);
    } else if (activePage === 'gallery') {
      url.searchParams.set('page', 'gallery');
      url.searchParams.delete('id');
    } else if (activePage === 'contact') {
      url.searchParams.set('page', 'contact');
      url.searchParams.delete('id');
    } else {
      url.searchParams.delete('page');
      url.searchParams.delete('id');
    }
    window.history.replaceState({}, '', url.toString());
  }, [activePage, selectedArticleId]);

  const handleOpenBooking = (_serviceId?: string) => {
    window.location.href = `tel:${CLINIC_INFO.phone}`;
  };

  const handleSelectArticle = (artId: string) => {
    setSelectedArticleId(artId);
    setActivePage('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          <SmileTransformations
            onOpenBooking={() => handleOpenBooking('cosmetic-composite')}
            onNavigateGallery={() => {
              setActivePage('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />

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
            onSelectArticle={handleSelectArticle}
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
      ) : activePage === 'article' ? (
        <main className="flex-grow">
          <ArticleDetailPage
            articleId={selectedArticleId}
            onNavigateHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateBlog={() => {
              setActivePage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectArticle={handleSelectArticle}
            onOpenBooking={(sId) => handleOpenBooking(sId)}
          />
        </main>
      ) : activePage === 'gallery' ? (
        <main className="flex-grow">
          <SmileGalleryPage
            onOpenBooking={(sId) => handleOpenBooking(sId)}
            onNavigateHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateBlog={() => {
              setActivePage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      ) : activePage === 'contact' ? (
        <main className="flex-grow">
          <ContactPage
            onNavigateHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateServices={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateGallery={() => {
              setActivePage('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateBlog={() => {
              setActivePage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      ) : (
        <main className="flex-grow">
          <BlogPage
            onOpenBooking={() => handleOpenBooking()}
            onNavigateHome={() => {
              setActivePage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectArticle={handleSelectArticle}
          />
        </main>
      )}

      {/* Footer */}
      <Footer onSelectPage={(page) => setActivePage(page)} />

      {/* Interactive Treatment Cost Estimator Modal */}
      <CostCalculatorSection
        isOpen={isCostModalOpen}
        onClose={() => setIsCostModalOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
