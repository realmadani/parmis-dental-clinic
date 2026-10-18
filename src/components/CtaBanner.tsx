import React from 'react';
import { CLINIC_INFO } from '../data/clinicData.ts';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = () => {
  return (
    <section>
      {/* ================= MOBILE CTA BANNER (< md) ================= */}
      <div className="md:hidden px-4 py-4">
        <div className="bg-[#004ac6] text-white rounded-2xl p-5 text-center shadow-lg shadow-[#004ac6]/20 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
            <span className="material-symbols-outlined text-[26px]">call</span>
          </div>
          <h2 className="text-xl font-bold mb-1.5">آماده شروع تحول لبخندتان هستید؟</h2>
          <p className="text-sm text-white/90 mb-4 max-w-xs mx-auto">
            برای مشاوره تخصصی و رزرو اولین نوبت همین حالا با دکتر شمس پور تماس بگیرید.
          </p>
          <a
            href={`tel:${CLINIC_INFO.phone2}`}
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-white text-[#004ac6] text-sm rounded-full font-bold shadow-md active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-sm">phone_in_talk</span>
            <span>تماس مستقیم فوری: {CLINIC_INFO.phoneCompact2}</span>
          </a>
        </div>
      </div>

      {/* ================= DESKTOP CTA BANNER (>= md) ================= */}
      <div className="hidden md:block py-12">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="bg-[#004ac6] rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-right">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#196fc0]/40 rounded-full blur-2xl pointer-events-none" />
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 hidden sm:flex">
                <span className="material-symbols-fill material-symbols-outlined text-[36px]">
                  calendar_today
                </span>
              </div>
              <div>
                <h2 className="text-[2.25rem] font-bold mb-2 leading-[1.25]">
                  آماده‌اید لبخند رویایی خود را تجربه کنید؟
                </h2>
                <p className="text-[1.125rem] opacity-90">
                  جهت مشاوره و هماهنگی نوبت ویزیت، همین امروز با کلینیک پارمیس تماس بگیرید.
                </p>
              </div>
            </div>

            <div className="relative z-10 shrink-0 w-full md:w-auto">
              <a
                href={`tel:${CLINIC_INFO.phone2}`}
                className="w-full inline-flex items-center justify-center gap-3 bg-white text-[#004ac6] hover:bg-[#dbe1ff] hover:text-[#004ac6] px-8 py-4 rounded-full font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
              >
                <span className="material-symbols-fill material-symbols-outlined text-[24px]">
                  call
                </span>
                <span className="font-bold text-xl">تماس: {CLINIC_INFO.phoneDisplay2}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
