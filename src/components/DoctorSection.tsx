import React from 'react';
import { CLINIC_INFO } from '../data/clinicData.ts';

interface DoctorSectionProps {
  onOpenBooking: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = () => {
  return (
    <section className="bg-[#f2f4f6]/70" id="about">
      {/* ================= MOBILE DOCTOR PROFILE (< md) ================= */}
      <div className="md:hidden px-4 py-6">
        <div className="bg-white rounded-2xl p-4 border border-[#c3c6d7]/30 shadow-xs text-right">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#004ac6] shrink-0 shadow-xs">
              <img
                src={CLINIC_INFO.mobileDoctorAvatar}
                alt={CLINIC_INFO.doctorName}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <span className="text-xs text-[#004ac6] font-bold">پزشک معالج و موسس کلینیک</span>
              <h2 className="text-xl font-bold text-[#191c1e]">{CLINIC_INFO.doctorName}</h2>
              <p className="text-[11px] text-[#434655]">جراح - دندان‌پزشک | پاکدشت</p>
            </div>
          </div>

          <p className="text-sm text-[#434655] leading-relaxed mb-4">
            دکتر انوشیروان شمسپور با سال‌ها تجربه بالینی درخشان و بهره‌گیری از پروتکل‌های درمانی
            مدرن، اصل کاری خود را بر پایه{' '}
            <strong className="text-[#191c1e] font-semibold">
              «صداقت در تشخیص و اولویت حفظ حداکثری دندان طبیعی بیمار»
            </strong>{' '}
            بنا نهاده است. کلیه مراحل درمانی در محیطی استریل، آرام و مجهز به جدیدترین فناوری‌های
            تشخیصی روز انجام می‌شود.
          </p>

          {/* Doctor Credentials (2-col) */}
          <div className="grid grid-cols-2 gap-2 text-right mb-4">
            <div className="p-2.5 rounded-xl bg-[#f2f4f6] border border-[#c3c6d7]/20">
              <span className="text-[#004ac6] text-[11px] font-bold block mb-0.5">
                سابقه درخشان
              </span>
              <span className="text-sm font-bold text-[#191c1e]">بیش از ۱۰ سال تجربه</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#f2f4f6] border border-[#c3c6d7]/20">
              <span className="text-[#004ac6] text-[11px] font-bold block mb-0.5">
                رضایت بیماران
              </span>
              <span className="text-sm font-bold text-[#191c1e]">+۵,۰۰۰ درمان موفق</span>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-[#dbe1ff]/30 border border-[#004ac6]/20 text-[#00174b]">
            <span className="material-symbols-outlined text-[#004ac6] text-[22px]">
              location_city
            </span>
            <span className="text-[11px] font-medium leading-tight">
              مطب فعال: پاکدشت، مجتمع پزشکی راستین، طبقه دوم
            </span>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP DOCTOR PROFILE (>= md) ================= */}
      <div className="hidden md:block py-16">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#c3c6d7]/30 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-square bg-[#eceef0]">
                  <img
                    src={CLINIC_INFO.doctorImage}
                    alt={CLINIC_INFO.doctorName}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#004ac6] text-white py-2 px-5 rounded-full text-xs font-semibold shadow">
                  پزشک متعهد و باسابقه
                </div>
              </div>

              <div className="lg:col-span-7 text-right">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dbe1ff] text-[#004ac6] text-xs font-semibold mb-3">
                  <span>مسئول فنی و سرپرست درمان</span>
                </div>

                <h2 className="text-[2.25rem] font-bold text-[#191c1e] mb-2 leading-[1.25]">
                  {CLINIC_INFO.doctorName}
                </h2>

                <p className="text-sm font-bold text-[#004ac6] mb-6">
                  کلینیک دندان‌پزشکی پارمیس • پاکدشت
                </p>

                <div className="space-y-4 text-base text-[#565e74] leading-relaxed mb-8">
                  <p>
                    دکتر انوشیروان شمسپور با سال‌ها تجربه عملی موفق در حوزه دندان‌پزشکی ترمیمی،
                    زیبایی و درمان‌های تخصصی دهان، با هدف ارتقای سلامت دهان و دندان شهروندان محترم
                    شهرستان پاکدشت و جنوب‌شرق استان تهران به ارائه خدمات تخصصی می‌پردازد.
                  </p>
                  <p>
                    در کلینیک دندان‌پزشکی پارمیس واقع در مجتمع پزشکی راستین، اولویت بنیادین ما حفظ
                    دندان‌های طبیعی بیمار، کاهش استرس مراجعه، و ارائه راهکارهای درمانی شفاف با
                    متریال دارای تاییدیه وزارت بهداشت است.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#c3c6d7]/30">
                  <div className="flex items-center gap-2 text-[#191c1e]">
                    <span className="material-symbols-outlined text-[#004ac6] text-[22px]">
                      domain
                    </span>
                    <span className="text-sm">{CLINIC_INFO.shortAddress}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#191c1e]">
                    <span className="material-symbols-outlined text-[#004ac6] text-[22px]">
                      phone_in_talk
                    </span>
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="text-sm font-bold hover:text-[#004ac6]"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
