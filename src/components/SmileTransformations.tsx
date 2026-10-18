import React from 'react';
import { TRANSFORMATIONS, CLINIC_INFO } from '../data/clinicData.ts';

interface SmileTransformationsProps {
  onOpenBooking: () => void;
  onNavigateGallery?: () => void;
}

export const SmileTransformations: React.FC<SmileTransformationsProps> = ({
  onNavigateGallery,
}) => {
  const getIconForCase = (id: string) => {
    switch (id) {
      case 'bleaching':
        return 'auto_awesome';
      case 'implant':
        return 'dentistry';
      case 'composite-smile':
        return 'brush';
      default:
        return 'dentistry';
    }
  };

  return (
    <section className="bg-[#f2f4f6]/50" id="transformations">
      {/* ================= MOBILE SMILE TRANSFORMATIONS (< md) ================= */}
      <div className="md:hidden px-4 py-6">
        <div className="text-right mb-4">
          <div className="inline-flex items-center gap-1.5 text-[#004ac6] text-xs font-bold mb-1">
            <span className="material-symbols-outlined text-[18px]">auto_fix_high</span>
            <span>نتایج درمانی و تحول لبخند</span>
          </div>
          <h2 className="text-xl text-[#191c1e] font-bold leading-tight">
            نمونه درمان‌های انجام شده
          </h2>
          <p className="text-sm text-[#434655] mt-1">
            تغییرات واقعی لبخند مراجعین کلینیک دکتر شمس پور
          </p>
        </div>

        {/* Before/After Cards Grid for Mobile */}
        <div className="space-y-4">
          {TRANSFORMATIONS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 rounded-2xl border border-[#c3c6d7]/30 shadow-xs text-right"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[2/1] w-full mb-3 bg-[#eceef0]">
                <img
                  src={item.mobileImage}
                  alt={item.mobileTitle}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-2 flex justify-between px-3 text-[11px] font-bold text-white drop-shadow">
                  <span className="bg-black/60 px-2 py-0.5 rounded">قبل درمان</span>
                  <span className="bg-[#004ac6]/90 px-2 py-0.5 rounded">بعد درمان</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[#191c1e]">{item.mobileTitle}</h3>
                  <p className="text-[11px] text-[#434655]">{item.mobileSubtitle}</p>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="px-3 py-1.5 rounded-full bg-[#004ac6]/10 text-[#004ac6] text-xs font-bold hover:bg-[#004ac6]/20"
                >
                  رزرو
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          {onNavigateGallery ? (
            <button
              type="button"
              onClick={onNavigateGallery}
              className="inline-flex items-center gap-1.5 text-[#004ac6] text-sm font-bold hover:underline cursor-pointer"
            >
              <span>مشاهده گالری کامل نمونه درمان‌ها و لبخند</span>
              <span className="material-symbols-outlined text-sm rotate-180">arrow_back</span>
            </button>
          ) : (
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="inline-flex items-center gap-1.5 text-[#004ac6] text-sm font-bold hover:underline"
            >
              <span>مشاهده تمامی موارد و مشاوره حضوری در پاکدشت</span>
              <span className="material-symbols-outlined text-sm">arrow_left</span>
            </a>
          )}
        </div>
      </div>

      {/* ================= DESKTOP SMILE TRANSFORMATIONS (>= md) ================= */}
      <div className="hidden md:block py-16">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 text-right">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dbe1ff] text-[#004ac6] text-xs font-semibold mb-3">
                <span>نتایج درمان و رضایت مراجعین</span>
              </div>
              <h2 className="text-[2.25rem] font-bold text-[#191c1e] leading-[1.25]">
                تحول لبخند در کلینیک پارمیس
              </h2>
              <p className="text-base text-[#565e74] mt-2">
                مشاهده بخشی از نتایج درمانی، ترمیمی و زیبایی بیماران با راهنمایی دقیق پزشکی
              </p>
            </div>

            {onNavigateGallery ? (
              <button
                type="button"
                onClick={onNavigateGallery}
                className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-[#004ac6] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#003ea8] transition-all cursor-pointer shadow-sm active:scale-95"
              >
                <span>مشاهده گالری کامل و مقایسه قبل و بعد</span>
                <span className="material-symbols-outlined text-[18px] rotate-180">arrow_back</span>
              </button>
            ) : (
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="mt-4 md:mt-0 inline-flex items-center gap-2 border border-[#004ac6] text-[#004ac6] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#dbe1ff]/20 transition-colors"
              >
                <span>دریافت نوبت معاینه و ویزیت لبخند</span>
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              </a>
            )}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {TRANSFORMATIONS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xs border border-[#c3c6d7]/30 flex flex-col group hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 inset-x-3 flex justify-between">
                    <span className="bg-[#2d3133]/80 text-[#eff1f3] text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                      {item.beforeLabel}
                    </span>
                    <span className="bg-[#004ac6]/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                      {item.afterLabel}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between text-right">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#dbe1ff]/40 text-[#004ac6] flex items-center justify-center shrink-0">
                      <span
                        className={`material-symbols-outlined text-[20px] ${
                          item.id === 'implant' ? 'material-symbols-fill' : ''
                        }`}
                      >
                        {getIconForCase(item.id)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#191c1e]">{item.title}</h3>
                      <p className="text-sm text-[#565e74]">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
