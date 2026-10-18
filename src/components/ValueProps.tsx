import React from 'react';
import { VALUE_PROPOSITIONS } from '../data/clinicData.ts';

export const ValueProps: React.FC = () => {
  const mobileProps = [
    {
      icon: 'favorite',
      title: 'اولویت راحتی بیمار',
      desc: 'محیطی آرام‌بخش و درمان بدون استرس و اضطراب پزشکی.',
    },
    {
      icon: 'psychology',
      title: 'مهارت و تخصص بالا',
      desc: 'تجربه گسترده دکتر شمس پور در جراحی‌های پیچیده و ایمپلنت.',
    },
    {
      icon: 'payments',
      title: 'شفافیت کامل هزینه‌ها',
      desc: 'تعرفه منصفانه و ارائه فاکتور رسمی معتبر بیمه‌های تکمیلی.',
    },
    {
      icon: 'pin_drop',
      title: 'موقعیت عالی در پاکدشت',
      desc: 'دسترسی آسان در مجتمع پزشکی راستین با جای پارک مناسب.',
    },
  ];

  return (
    <section className="bg-[#f2f4f6]/60 border-y border-[#c3c6d7]/20">
      {/* ================= MOBILE HORIZONTAL SCROLL (< md) ================= */}
      <div className="md:hidden py-4">
        <div className="px-4 mb-2 flex items-center justify-between">
          <span className="text-sm text-[#004ac6] font-bold flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px] animate-dental-sparkle">
              dentistry
            </span>
            <span>چرا کلینیک دندان‌پزشکی پارمیس؟</span>
          </span>
          <span className="text-[11px] text-[#434655] flex items-center gap-1">
            <span>استاندارد درمانی برتر</span>
            <span className="material-symbols-outlined text-[14px] text-[#004ac6] animate-pulse">
              swipe_left
            </span>
          </span>
        </div>

        <div className="flex gap-3 overflow-x-auto no-scrollbar px-4 py-1">
          {mobileProps.map((item, idx) => (
            <div
              key={idx}
              className="dental-card-interactive min-w-[210px] bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex flex-col gap-2 shrink-0 text-right"
            >
              <div className="w-8 h-8 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              </div>
              <div>
                <h4 className="text-sm text-[#191c1e] font-bold">{item.title}</h4>
                <p className="text-[11px] text-[#434655] mt-1 leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP 5-CARD GRID (>= md) ================= */}
      <div className="hidden md:block py-10">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
            {VALUE_PROPOSITIONS.map((item, idx) => (
              <div
                key={idx}
                className="dental-card-interactive bg-white p-5 rounded-2xl shadow-xs border border-[#c3c6d7]/20 flex flex-col items-center text-center transition-all hover:-translate-y-1.5 hover:border-[#004ac6]/30 hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-[#dbe1ff]/40 text-[#004ac6] flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <h3 className="text-sm font-bold text-[#191c1e] mb-1">{item.title}</h3>
                <p className="text-sm text-[#565e74]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
