import React, { useState } from 'react';
import { FAQS, MOBILE_FAQS, CLINIC_INFO } from '../data/clinicData.ts';

export const FaqAndContact: React.FC = () => {
  const [openDesktopFaqId, setOpenDesktopFaqId] = useState<string>('faq-1');
  const [openMobileFaqId, setOpenMobileFaqId] = useState<string>('');

  const toggleDesktopFaq = (id: string) => {
    setOpenDesktopFaqId((prev) => (prev === id ? '' : id));
  };

  const toggleMobileFaq = (id: string) => {
    setOpenMobileFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <div id="contact">
      {/* ================= MOBILE FAQS & CONTACT (< md) ================= */}
      <div className="md:hidden">
        {/* 8. Mobile FAQ Section */}
        <section className="px-4 py-6 bg-[#f2f4f6]/50">
          <div className="text-right mb-4">
            <span className="text-xs text-[#004ac6] font-bold">پاسخ به سوالات پرتکرار</span>
            <h2 className="text-xl text-[#191c1e] font-bold">پرسش‌های مراجعین محترم</h2>
          </div>

          <div className="space-y-2 text-right">
            {MOBILE_FAQS.map((faq) => {
              const isOpen = openMobileFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-[#c3c6d7]/30 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleMobileFaq(faq.id)}
                    className="w-full p-3.5 flex items-center justify-between text-right font-bold text-sm text-[#191c1e]"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`material-symbols-outlined text-[#004ac6] text-[20px] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-3.5 text-sm text-[#434655] bg-[#f2f4f6]/30">
                      <p className="pb-3 pt-1 text-[12px] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 9. Mobile Contact, Map & Location */}
        <section className="px-4 py-6">
          <div className="bg-white rounded-2xl p-4 border border-[#c3c6d7]/30 shadow-xs text-right">
            <div className="flex items-center gap-2 text-[#004ac6] mb-1">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
              <span className="text-xs font-bold">آدرس و مسیر دسترسی</span>
            </div>

            <h2 className="text-xl font-bold text-[#191c1e] mb-2">
              کلینیک دندان‌پزشکی در پاکدشت
            </h2>

            <p className="text-sm text-[#434655] mb-4 leading-relaxed">
              پاکدشت، بلوار شهدای قمی، میدان علی ابن ابیطالب، ابتدای بلوار علی ابن ابیطالب، مجتمع پزشکی راستین، طبقه دوم، کلینیک دندان‌پزشکی پارمیس
            </p>

            {/* Simulated Interactive Map Card for Pakdasht */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] w-full mb-3 border border-[#c3c6d7]/30">
              <img
                src={CLINIC_INFO.mobileMapImage}
                alt="نقشه کلینیک دندانپزشکی پارمیس در پاکدشت"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#004ac6]/10 pointer-events-none" />
              <div className="absolute bottom-2.5 right-2.5 left-2.5 bg-white/95 backdrop-blur-md p-2 rounded-lg flex items-center justify-between text-[11px] font-bold shadow-xs">
                <span className="text-[#191c1e] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#004ac6] text-sm">
                    navigation
                  </span>
                  <span>پاکدشت، مجتمع پزشکی راستین</span>
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={CLINIC_INFO.neshanUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#004ac6] hover:underline"
                  >
                    نشان
                  </a>
                  <span className="text-[#c3c6d7]">|</span>
                  <a
                    href={CLINIC_INFO.baladUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline"
                  >
                    بلد
                  </a>
                  <span className="text-[#c3c6d7]">|</span>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-600 hover:underline"
                  >
                    گوگل‌مپ
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Box & Call Trigger */}
            <div className="bg-[#f2f4f6] p-3 rounded-xl border border-[#c3c6d7]/20 space-y-2">
              <div className="flex items-start justify-between text-sm">
                <span className="text-[#434655]">شماره تلفن مستقیم مطب:</span>
                <div className="space-y-1 text-left">
                  <a
                    href="tel:02136048581"
                    className="block text-[#004ac6] font-bold dir-ltr tracking-wider"
                  >
                    ۰۲۱۳۶۰۴۸۵۸۱
                  </a>
                  <a
                    href="tel:02136048582"
                    className="block text-[#004ac6] font-bold dir-ltr tracking-wider"
                  >
                    ۰۲۱۳۶۰۴۸۵۸۲
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#434655]">ساعات پاسخگویی:</span>
                <span className="text-[#191c1e] font-medium">
                  {CLINIC_INFO.mobileWorkingHours}
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ================= DESKTOP FAQS & CONTACT (>= md) ================= */}
      <section className="hidden md:block py-16 bg-[#f2f4f6]/50">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* FAQs Column (7 Cols) */}
            <div className="lg:col-span-7 text-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dbe1ff] text-[#004ac6] text-xs font-semibold mb-3">
                <span>راهنمای بیماران</span>
              </div>
              <h2 className="text-[2.25rem] font-bold text-[#191c1e] mb-6 leading-[1.25]">
                پرسش‌های متداول مراجعین
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq) => {
                  const isOpen = openDesktopFaqId === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="bg-white p-5 rounded-2xl border border-[#c3c6d7]/30"
                    >
                      <button
                        type="button"
                        onClick={() => toggleDesktopFaq(faq.id)}
                        className="w-full flex items-center justify-between cursor-pointer font-semibold text-xl text-[#191c1e] text-right"
                      >
                        <span>{faq.question}</span>
                        <span
                          className={`material-symbols-outlined transition-transform duration-300 text-[#004ac6] ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                      {isOpen && (
                        <p className="text-base text-[#565e74] mt-4 leading-relaxed border-t border-[#c3c6d7]/20 pt-3">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Clinic Location & Contact Card (5 Cols) */}
            <div className="lg:col-span-5 text-right">
              <div className="bg-white p-8 rounded-3xl border border-[#c3c6d7]/30 shadow-xs h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#dbe1ff] text-[#004ac6] flex items-center justify-center mb-6">
                    <span className="material-symbols-fill material-symbols-outlined text-[28px]">
                      location_on
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#191c1e] mb-2">
                    موقعیت مطب و اطلاعات تماس
                  </h3>
                  <p className="text-base text-[#565e74] mb-6">
                    دسترسی سریع و آسان برای مراجعین محترم پاکدشت، شریف‌آباد و حومه
                  </p>

                  {/* Detailed contact facts */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#004ac6] text-[22px] mt-0.5">
                        place
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#191c1e]">آدرس:</p>
                        <p className="text-sm text-[#565e74]">{CLINIC_INFO.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#004ac6] text-[22px] mt-0.5">
                        call
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#191c1e]">
                          شماره تماس مستقیم نوبت‌دهی:
                        </p>
                        <div className="space-y-1 mt-1">
                          <a
                            href="tel:02136048581"
                            className="block text-lg font-bold text-[#004ac6] hover:underline dir-ltr text-right"
                          >
                            ۰۲۱۳۶۰۴۸۵۸۱
                          </a>
                          <a
                            href="tel:02136048582"
                            className="block text-lg font-bold text-[#004ac6] hover:underline dir-ltr text-right"
                          >
                            ۰۲۱۳۶۰۴۸۵۸۲
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#004ac6] text-[22px] mt-0.5">
                        schedule
                      </span>
                      <div>
                        <p className="text-sm font-bold text-[#191c1e]">ساعات پذیرش:</p>
                        <p className="text-sm text-[#565e74]">{CLINIC_INFO.workingHours}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Map Snapshot */}
                <div className="space-y-3">
                  <div className="relative rounded-2xl overflow-hidden border border-[#c3c6d7]/30 aspect-[16/8]">
                    <img
                      src={CLINIC_INFO.mapImage}
                      alt="نقشه موقعیت کلینیک دندان‌پزشکی پارمیس در پاکدشت"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-[#004ac6]/10 hover:bg-[#004ac6]/20 flex items-center justify-center transition-colors"
                    >
                      <span className="bg-white/95 px-4 py-2 rounded-full text-xs font-bold text-[#004ac6] shadow-xs">
                        مشاهده مجتمع پزشکی راستین روی نقشه
                      </span>
                    </a>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href={CLINIC_INFO.neshanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-[#004ac6]/10 hover:bg-[#004ac6] text-[#004ac6] hover:text-white text-xs font-bold text-center transition-all"
                    >
                      مسیریابی نشان
                    </a>
                    <a
                      href={CLINIC_INFO.baladUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-emerald-600/10 hover:bg-emerald-600 text-emerald-700 hover:text-white text-xs font-bold text-center transition-all"
                    >
                      مسیریابی بلد
                    </a>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-rose-600/10 hover:bg-rose-600 text-rose-700 hover:text-white text-xs font-bold text-center transition-all"
                    >
                      گوگل مپ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
