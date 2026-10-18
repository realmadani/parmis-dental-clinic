import React from 'react';
import { SERVICES, MOBILE_SERVICES_ORDER, CLINIC_INFO } from '../data/clinicData.ts';

interface ServicesSectionProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  const mobileServices = MOBILE_SERVICES_ORDER.map(
    (id) => SERVICES.find((s) => s.id === id) || SERVICES[0]
  );

  return (
    <section id="services">
      {/* ================= MOBILE 2-COLUMN BENTO GRID (< md) ================= */}
      <div className="md:hidden px-4 py-6">
        <div className="text-right mb-4">
          <span className="text-xs text-[#004ac6] font-bold">خدمات درمانی و زیبایی</span>
          <h2 className="text-xl text-[#191c1e] font-bold mt-1">تخصص‌های کلینیک پارمیس</h2>
          <p className="text-sm text-[#434655]">
            ارائه کلیه اقدامات درمانی تحت یک سقف در مجتمع پزشکی راستین
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-right">
          {mobileServices.map((service) => (
            <div
              key={service.id}
              className="dental-card-interactive p-3.5 bg-white rounded-2xl border border-[#c3c6d7]/30 flex flex-col justify-between hover:border-[#004ac6]/40 transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[22px]">
                    {service.mobileIconName}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#191c1e]">{service.mobileTitle}</h3>
                <p className="text-[11px] text-[#434655] mt-1 leading-snug">
                  {service.mobileDesc}
                </p>
              </div>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="text-[#004ac6] text-[11px] font-bold mt-3 inline-flex items-center gap-1 group"
              >
                <span>{service.mobileCtaText}</span>
                <span className="material-symbols-outlined text-xs group-hover:-translate-x-1 transition-transform">
                  arrow_back
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP 3-COLUMN SERVICES GRID (>= md) ================= */}
      <div className="hidden md:block py-16 lg:py-24">
        <div className="w-full max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dbe1ff] text-[#004ac6] text-xs font-semibold mb-3">
              <span className="material-symbols-outlined text-[15px] animate-dental-sparkle">
                dentistry
              </span>
              <span>طیف کامل خدمات دندان‌پزشکی پارمیس</span>
            </div>
            <h2 className="text-[2.25rem] font-bold text-[#191c1e] mb-4 leading-[1.25]">
              خدمات درمانی و زیبایی در پاکدشت
            </h2>
            <p className="text-[1.125rem] text-[#565e74] leading-[1.7]">
              کلیه درمان‌های ترمیمی، زیبایی و جراحی دهان و دندان با بهترین تجهیزات و با رعایت کامل
              استانداردهای پزشکی در فضایی آرام انجام می‌پذیرد.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="dental-card-interactive bg-white p-8 rounded-3xl border border-[#c3c6d7]/30 shadow-xs hover:-translate-y-1.5 hover:border-[#004ac6]/35 hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-right group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#dbe1ff]/50 text-[#004ac6] flex items-center justify-center mb-6 group-hover:bg-[#004ac6] group-hover:text-white transition-colors">
                    <span
                      className={`material-symbols-outlined text-[30px] ${
                        service.id === 'root-canal' ? 'material-symbols-fill' : ''
                      }`}
                    >
                      {service.iconName}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#191c1e] mb-3">{service.title}</h3>
                  <p className="text-base text-[#565e74] leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="inline-flex items-center gap-2 text-[#004ac6] font-bold text-sm hover:underline mt-auto"
                >
                  <span>مشاوره و وقت ویزیت: {CLINIC_INFO.phoneCompact}</span>
                  <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
                    arrow_back
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
