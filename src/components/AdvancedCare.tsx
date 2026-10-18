import React from 'react';
import { CLINIC_INFO } from '../data/clinicData.ts';

interface AdvancedCareProps {
  onOpenBooking: () => void;
}

export const AdvancedCare: React.FC<AdvancedCareProps> = () => {
  return (
    <section id="standards">
      {/* ================= MOBILE ADVANCED CARE (< md) ================= */}
      <div className="md:hidden px-4 py-6 text-right">
        <div className="bg-white rounded-2xl p-4 border border-[#c3c6d7]/30 shadow-xs">
          <div className="flex items-center gap-2 text-[#004ac6] mb-2">
            <span className="material-symbols-outlined text-[20px]">biotech</span>
            <span className="text-xs font-bold">تجهیزات و فناوری نوین</span>
          </div>

          <h2 className="text-xl font-bold text-[#191c1e] mb-2 leading-snug">
            دندان‌پزشکی دیجیتال و مدرن در کلینیک پارمیس
          </h2>

          <p className="text-sm text-[#434655] mb-4 leading-relaxed">
            ما در پاکدشت بالاترین سطوح بهداشتی و نوآوری تجهیزاتی را برای بیماران عزیز به کار گرفته‌ایم
            تا دوره نقاهت به حداقل رسیده و دوام درمان به حداکثر برسد.
          </p>

          {/* Tech image */}
          <div className="relative rounded-xl overflow-hidden mb-4 border border-[#c3c6d7]/20 aspect-[16/10]">
            <img
              src={CLINIC_INFO.mobileOperatoryImage}
              alt="اتاق درمان کلینیک دندان‌پزشکی پارمیس پاکدشت"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-2 right-2 bg-[#191c1e]/85 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs text-[#dbe1ff]">check_circle</span>
              <span>تصویر واقعی مطب</span>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#dae2fd] text-[#004ac6] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[14px] font-bold">check</span>
              </div>
              <p className="text-sm text-[#191c1e]">
                رادیوگرافی دیجیتال با کمترین میزان تابش اشعه
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#dae2fd] text-[#004ac6] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[14px] font-bold">check</span>
              </div>
              <p className="text-sm text-[#191c1e]">
                استفاده اختصاصی از مواد ترمیمی و کامپوزیت‌های برند سوئیسی و آلمانی
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#dae2fd] text-[#004ac6] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[14px] font-bold">check</span>
              </div>
              <p className="text-sm text-[#191c1e]">
                چرخه ضدعفونی مکانیزه و اتوکلاو بیمارستانی کلاس B
              </p>
            </div>
          </div>

          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="mt-4 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#004ac6]/10 text-[#004ac6] text-xs font-bold hover:bg-[#004ac6]/20 active:scale-[0.98] transition-all"
          >
            <span>مشاوره و ارزیابی تشخیصی دندان‌ها</span>
            <span className="material-symbols-outlined text-sm">arrow_back</span>
          </a>
        </div>
      </div>

      {/* ================= DESKTOP ADVANCED CARE (>= md) ================= */}
      <div className="hidden md:block py-16 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Clinic Room Visual with Floating Tag */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={CLINIC_INFO.operatoryImage}
                  alt="اتاق درمان مجهز کلینیک دندان‌پزشکی پارمیس"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
                {/* Floating Clinic Badge Overlay */}
                <div className="absolute bottom-4 right-4 bg-[#004ac6] text-white px-4 py-3 rounded-2xl shadow-md flex items-center gap-3">
                  <span className="material-symbols-outlined text-[28px]">biotech</span>
                  <div className="text-right">
                    <p className="text-xs font-bold">تجهیزات دیجیتال مدرن</p>
                    <p className="text-xs opacity-80">پاکدشت، مجتمع راستین</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Specification */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dbe1ff] text-[#004ac6] text-xs font-semibold mb-4">
                <span>استانداردهای بالای درمانی</span>
              </div>

              <h2 className="text-[2.25rem] font-bold text-[#191c1e] mb-6 leading-[1.25]">
                مراقبت‌های پیشرفته دندان‌پزشکی با استانداردهای نوین
              </h2>

              <p className="text-[1.125rem] text-[#565e74] mb-8 leading-[1.7]">
                در کلینیک دندان‌پزشکی پارمیس، ما فناوری مدرن تشخیصی را با دستان ماهر و باحوصله ترکیب
                کرده‌ایم تا بالاترین درجه رضایت و کمترین میزان ناراحتی را برای شما رقم بزنیم.
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#dbe1ff] flex items-center justify-center text-[#004ac6] mt-1 shrink-0">
                    <span className="material-symbols-fill material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#191c1e]">
                      رادیوگرافی و تصویربرداری دقیق داخل دهانی
                    </h4>
                    <p className="text-sm text-[#565e74]">
                      تشخیص سریع و بدون خطای پوسیدگی‌ها و آسیب‌های ریشه با حداقل اشعه.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#dbe1ff] flex items-center justify-center text-[#004ac6] mt-1 shrink-0">
                    <span className="material-symbols-fill material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#191c1e]">
                      استفاده از مواد دندان‌پزشکی با استانداردهای جهانی
                    </h4>
                    <p className="text-sm text-[#565e74]">
                      استفاده اختصاصی از کامپوزیت‌ها و آلیاژهای برند معتبر با ماندگاری طولانی.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#dbe1ff] flex items-center justify-center text-[#004ac6] mt-1 shrink-0">
                    <span className="material-symbols-fill material-symbols-outlined text-[16px]">
                      check
                    </span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#191c1e]">
                      استریلیزاسیون چندمرحله‌ای اتوکلاو کلاس B
                    </h4>
                    <p className="text-sm text-[#565e74]">
                      رعایت بی‌قید و شرط پروتکل‌های ضدعفونی برای سلامت کامل بیماران و کادر درمان.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="inline-flex items-center gap-2 bg-[#004ac6] hover:bg-[#00569c] text-white px-6 py-3 rounded-full text-sm font-bold transition-colors shadow"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>مشاوره با دکتر انوشیروان شمسپور</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
