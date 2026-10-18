import React from 'react';
import { CLINIC_INFO } from '../data/clinicData.ts';

interface FooterProps {
  onSelectPage?: (page: 'home' | 'services' | 'about' | 'blog' | 'gallery' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPage }) => {
  const handleLink = (e: React.MouseEvent, page: 'home' | 'services' | 'about' | 'blog' | 'gallery' | 'contact', hash?: string) => {
    if (onSelectPage) {
      e.preventDefault();
      onSelectPage(page);
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 60);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#2d3133] text-[#eff1f3] border-t border-[#737686]/20">
      {/* ================= MOBILE FOOTER (< md) ================= */}
      <div className="md:hidden flex flex-col items-center text-center px-4 py-8 space-y-5">
        <div className="space-y-1">
          <h4 className="text-xl font-bold text-[#eff1f3]">
            {CLINIC_INFO.doctorTitleBrand}
          </h4>
          <p className="text-sm text-[#eff1f3]/80">
            کلینیک تخصصی دندان‌پزشکی پارمیس • پاکدشت
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 text-[#eff1f3]/80 text-xs font-semibold">
          <div className="flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm text-[#b4c5ff]">
              location_on
            </span>
            <span>پاکدشت، مجتمع پزشکی راستین</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm text-[#b4c5ff]">call</span>
              <span>تلفن مطب:</span>
            </div>
            <a href="tel:02136048581" className="text-[#eff1f3] hover:text-[#b4c5ff]">۰۲۱۳۶۰۴۸۵۸۱</a>
            <a href="tel:02136048582" className="text-[#eff1f3] hover:text-[#b4c5ff]">۰۲۱۳۶۰۴۸۵۸۲</a>
          </div>

          <div className="flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm text-[#b4c5ff]">
              dentistry
            </span>
            <span>خدمات ایمپلنت و زیبایی</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm text-[#b4c5ff]">
              schedule
            </span>
            <span>ساعات کاری: ۹ الی ۲۱</span>
          </div>
        </div>

        <p className="text-sm text-[#eff1f3]/60 border-t border-[#c3c6d7]/20 pt-4 w-full">
          © کلیه حقوق مادی و معنوی متعلق به کلینیک دندان‌پزشکی دکتر انوشیروان شمسپور می‌باشد.
        </p>
      </div>

      {/* ================= DESKTOP FOOTER (>= md) ================= */}
      <div className="hidden md:flex w-full max-w-7xl mx-auto px-6 py-14 flex-col gap-8 text-right">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-[#737686]/20">
          {/* Brand Info */}
          <div className="flex flex-col gap-3">
            <div className="text-2xl font-extrabold text-[#eff1f3] flex items-center gap-2">
              <span className="material-symbols-fill material-symbols-outlined text-[28px] text-[#b4c5ff]">
                dentistry
              </span>
              <span>{CLINIC_INFO.name}</span>
            </div>
            <p className="text-sm text-[#c3c6d7] leading-relaxed">
              کلینیک تخصصی دندان‌پزشکی دکتر انوشیروان شمسپور؛ ارائه کلیه خدمات ایمپلنت، زیبایی،
              ارتودنسی و درمان ریشه با بالاترین استانداردهای استریلیزاسیون در پاکدشت.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm text-[#eff1f3] font-bold">خدمات دندان‌پزشکی</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLink(e, 'services')}
                  className="text-[#c3c6d7] hover:text-[#eff1f3] transition-colors text-sm"
                >
                  خدمات ایمپلنت و زیبایی
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLink(e, 'services')}
                  className="text-[#c3c6d7] hover:text-[#eff1f3] transition-colors text-sm"
                >
                  ارتودنسی دیجیتال
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLink(e, 'services')}
                  className="text-[#c3c6d7] hover:text-[#eff1f3] transition-colors text-sm"
                >
                  اصلاح طرح لبخند
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm text-[#eff1f3] font-bold">راهنمای مراجعین</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLink(e, 'about')}
                  className="text-[#c3c6d7] hover:text-[#eff1f3] transition-colors text-sm"
                >
                  درباره دکتر شمسپور
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleLink(e, 'gallery')}
                  className="text-[#c3c6d7] hover:text-[#eff1f3] transition-colors text-sm"
                >
                  نمونه درمان‌ها و لبخند
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={(e) => handleLink(e, 'blog')}
                  className="text-[#c3c6d7] hover:text-[#eff1f3] transition-colors text-sm"
                >
                  مقالات و وبلاگ تخصصی
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLink(e, 'contact')}
                  className="text-[#c3c6d7] hover:text-[#eff1f3] transition-colors text-sm"
                >
                  تماس و مسیریابی
                </a>
              </li>
              <li className="space-y-1">
                <a
                  href="tel:02136048581"
                  className="block text-[#c3c6d7] hover:text-[#eff1f3] transition-colors text-sm"
                >
                  ۰۲۱۳۶۰۴۸۵۸۱
                </a>
                <a
                  href="tel:02136048582"
                  className="block text-[#c3c6d7] hover:text-[#eff1f3] transition-colors text-sm"
                >
                  ۰۲۱۳۶۰۴۸۵۸۲
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Brief */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm text-[#eff1f3] font-bold">نشانی مطب</h4>
            <p className="text-sm text-[#c3c6d7] leading-relaxed">{CLINIC_INFO.shortAddress}</p>
            <div className="mt-2">
              <a
                href={`tel:${CLINIC_INFO.phone2}`}
                className="inline-flex items-center gap-2 bg-[#b4c5ff] text-[#00174b] px-4 py-2 rounded-full text-xs font-bold hover:bg-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>تلفن تماس: {CLINIC_INFO.phoneDisplay2}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="flex items-center justify-between text-sm text-[#c3c6d7] gap-4">
          <p>
            تمامی حقوق محفوظ است © کلینیک تخصصی دندان‌پزشکی پارمیس • دکتر انوشیروان شمسپور | پاکدشت،
            مجتمع پزشکی راستین
          </p>
          <span className="text-xs text-[#b4c5ff] font-medium">سالم و درخشان بخندید</span>
        </div>
      </div>
    </footer>
  );
};
