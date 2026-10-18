import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData.ts';

interface ServicesPageProps {
  onOpenBooking: (serviceId?: string) => void;
  onNavigateHome: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [openMobileFaq, setOpenMobileFaq] = useState<number | null>(null);
  const [openDesktopFaq, setOpenDesktopFaq] = useState<number | null>(0);

  const handleMobileFilterClick = (cat: string) => {
    setActiveFilter(cat);
    if (cat === 'implant') {
      document.getElementById('implant-highlight')?.scrollIntoView({ behavior: 'smooth' });
    } else if (cat === 'beauty') {
      document.getElementById('mobile-cosmetic-services')?.scrollIntoView({ behavior: 'smooth' });
    } else if (cat === 'therapy') {
      document.getElementById('mobile-restorative-services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mobileFaqs = [
    {
      q: 'آیا درمان ونیر کامپوزیت باعث تراش دندان می‌شود؟',
      a: 'خیر، در روش ونیر کامپوزیت مدرن در کلینیک دکتر شمسپور، در ۹۰ درصد موارد هیچ‌گونه تراش یا آسیب به مینای طبیعی دندان وارد نمی‌شود و کار به‌صورت محافظه‌کارانه انجام می‌پذیرد.',
    },
    {
      q: 'شرایط پرداخت هزینه ایمپلنت و خدمات زیبایی چیست؟',
      a: 'برای راحتی حال همشهریان محترم در پاکدشت، امکان پرداخت مرحله‌ای و اقساطی برای درمان‌های ایمپلنت و کامپوزیت‌های فول‌فک فراهم شده است.',
    },
    {
      q: 'ماندگاری بلیچینگ (سفیدکردن دندان) چقدر است؟',
      a: 'ماندگاری بلیچینگ بین ۱ تا ۲ سال است که بسته به میزان مصرف چای، قهوه، دخانیات و رعایت بهداشت دهان و دندان می‌تواند طولانی‌تر باشد.',
    },
  ];

  const desktopFaqs = [
    {
      q: 'تفاوت اصلی لمینت سرامیکی با ونیر کامپوزیت چیست؟',
      a: 'لمینت سرامیکی در لابراتوار ساخته می‌شود، ماندگاری بالای ۱۵ سال دارد و به هیچ وجه دچار تغییر رنگ یا لکه نمی‌شود. در مقابل، ونیر کامپوزیت مستقیماً در مطب طی یک جلسه روی دندان کار می‌شود، نیاز به تراش ندارد و هزینه مناسب‌تری دارد اما نیازمند پولیش دوره‌ای سالیانه است.',
    },
    {
      q: 'آیا درمان‌های دندان‌پزشکی در کلینیک پارمیس با درد همراه است؟',
      a: 'خیر؛ در کلینیک دکتر شمسپور از بی‌حسی‌های مدرن با pH خنثی و سوزن‌های فوق‌العاده نازک استفاده می‌شود تا ورود مایع بی‌حسی نیز احساس نشود. برای بیماران با استرس بالا، تکنیک‌های آرام‌بخشی روانشناختی و بی‌حسی مرحله‌ای انجام می‌گیرد.',
    },
    {
      q: 'شرایط پرداخت هزینه و تعرفه‌های خدمات در پاکدشت چگونه است؟',
      a: 'تمامی هزینه‌ها در جلسه اول معاینه به‌صورت مکتوب و شفاف به شما اعلام می‌گردد. برای درمان‌های جامع نظیر ایمپلنت چندواحدی، ارتودنسی یا اصلاح کامل لبخند با کامپوزیت و لمینت، امکان پرداخت اقساطی در طول دوره درمان برای مراجعین محترم پاکدشت فراهم است.',
    },
    {
      q: 'چگونه می‌توانم برای مشاوره اولیه یا ویزیت نوبت رزرو کنم؟',
      a: 'کافی است با شماره‌های مستقیم مطب ۰۲۱۳۶۰۴۸۵۸۱ و ۰۲۱۳۶۰۴۸۵۸۲ تماس حاصل فرمایید. همکاران پذیرش نزدیک‌ترین زمان خالی متناسب با برنامه شما در مجتمع پزشکی راستین پاکدشت را هماهنگ خواهند کرد.',
    },
  ];

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]">
      {/* ================= MOBILE SERVICES PAGE (< md) ================= */}
      <div className="md:hidden text-right">
        {/* 1. HERO SECTION */}
        <section className="px-4 pt-5 pb-6">
          {/* Eyebrow Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#dae2fd]/60 text-[#004ac6] rounded-full mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#004ac6] animate-ping" />
            <span className="text-xs font-bold">مجتمع پزشکی راستین • پاکدشت</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[1.75rem] text-[#191c1e] tracking-tight leading-tight font-extrabold mb-2.5">
            خدمات تخصصی درمان و <span className="text-[#2563eb]">اصلاح طرح لبخند</span>
          </h1>
          <p className="text-base text-[#434655] leading-relaxed mb-4">
            ارائه پیشرفته‌ترین خدمات دندانپزشکی در پاکدشت توسط دکتر انوشیروان شمس‌پور با دستگاه‌های
            مدرن، بدون استرس و درد.
          </p>

          {/* Key Medical Highlights Matrix (3 Pills) */}
          <div className="grid grid-cols-3 gap-2 mb-5">
            <div className="dental-card-interactive bg-white p-2.5 rounded-2xl border border-[#c3c6d7]/30 text-center flex flex-col items-center justify-center shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#dae2fd]/40 text-[#004ac6] flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-lg animate-dental-sparkle">
                  auto_fix_high
                </span>
              </div>
              <span className="text-xs font-bold text-[#191c1e]">طراحی لبخند DSD</span>
            </div>

            <div className="dental-card-interactive bg-white p-2.5 rounded-2xl border border-[#c3c6d7]/30 text-center flex flex-col items-center justify-center shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#dae2fd]/40 text-[#004ac6] flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-lg">verified</span>
              </div>
              <span className="text-xs font-bold text-[#191c1e]">متریال سوییسی/آلمانی</span>
            </div>

            <div className="dental-card-interactive bg-white p-2.5 rounded-2xl border border-[#c3c6d7]/30 text-center flex flex-col items-center justify-center shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#dae2fd]/40 text-[#004ac6] flex items-center justify-center mb-1">
                <span className="material-symbols-outlined text-lg">sentiment_satisfied</span>
              </div>
              <span className="text-xs font-bold text-[#191c1e]">بی‌حسی و بدون درد</span>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#c3c6d7]/20 bg-white">
            <img
              className="w-full h-52 object-cover"
              alt="کلینیک مجهز پارمیس پاکدشت"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmYcBWwWaOzpte_5kZ_nxUSzodcA6Ga7ky7TigikbTWuG00PFUpxHoCH81dodPZuQ2MV6xrOJEzBTMy0jP4qi3uWcVnCYycXyHipMTckmdLWesmsndbNbhE6jtOBzRIbAwBA6FvJ7qPx2B-hnsGC1h4rqoP90LFR7ZL9Dw0_4rwyjAIPOIxkZrCz7wHMEmuSOdapC99VOpmdh5XLv_yPPirmf7Ubqt7aAWSkaUB5lAJEMqGqquZlC-"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d3133]/80 via-transparent to-transparent flex flex-col justify-end p-4">
              <span className="text-white text-sm font-bold">
                محیط آرام، استریل و بدون اضطراب
              </span>
              <span className="text-[#e0e3e5] text-sm">کلینیک مجهز پارمیس پاکدشت</span>
            </div>
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs animate-dental-float">
              <span className="material-symbols-fill material-symbols-outlined text-[#004ac6] text-sm animate-dental-sparkle">
                star
              </span>
              <span className="text-xs font-bold text-[#191c1e]">رضایت ۹۹٪ مراجعین</span>
            </div>
          </div>
        </section>

        {/* 2. CATEGORY FILTER TABS (HORIZONTAL SCROLL) */}
        <section className="sticky top-[56px] sm:top-[62px] z-30 bg-[#f7f9fb]/98 backdrop-blur-md pt-5 pb-4 px-4 sm:px-6 border-b border-[#c3c6d7]/30 shadow-xs transition-all">
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar whitespace-nowrap py-1">
            <button
              type="button"
              onClick={() => handleMobileFilterClick('all')}
              className={`px-4 py-1.5 rounded-full text-xs transition-colors flex items-center gap-1.5 ${
                activeFilter === 'all'
                  ? 'bg-[#004ac6] text-white font-bold shadow-xs'
                  : 'bg-white text-[#434655] border border-[#c3c6d7]/40 font-medium'
              }`}
            >
              <span className="material-symbols-outlined text-sm">tune</span>
              <span>همه خدمات</span>
            </button>

            <button
              type="button"
              onClick={() => handleMobileFilterClick('beauty')}
              className={`px-4 py-1.5 rounded-full text-xs transition-colors flex items-center gap-1.5 ${
                activeFilter === 'beauty'
                  ? 'bg-[#004ac6] text-white font-bold shadow-xs'
                  : 'bg-white text-[#434655] border border-[#c3c6d7]/40 font-medium'
              }`}
            >
              <span className="material-symbols-outlined text-sm">sentiment_very_satisfied</span>
              <span>زیبایی و لبخند</span>
            </button>

            <button
              type="button"
              onClick={() => handleMobileFilterClick('implant')}
              className={`px-4 py-1.5 rounded-full text-xs transition-colors flex items-center gap-1.5 ${
                activeFilter === 'implant'
                  ? 'bg-[#004ac6] text-white font-bold shadow-xs'
                  : 'bg-white text-[#434655] border border-[#c3c6d7]/40 font-medium'
              }`}
            >
              <span className="material-symbols-outlined text-sm">dentistry</span>
              <span>ایمپلنت و جراحی</span>
            </button>

            <button
              type="button"
              onClick={() => handleMobileFilterClick('therapy')}
              className={`px-4 py-1.5 rounded-full text-xs transition-colors flex items-center gap-1.5 ${
                activeFilter === 'therapy'
                  ? 'bg-[#004ac6] text-white font-bold shadow-xs'
                  : 'bg-white text-[#434655] border border-[#c3c6d7]/40 font-medium'
              }`}
            >
              <span className="material-symbols-outlined text-sm">healing</span>
              <span>درمانی و عصب‌کشی</span>
            </button>
          </div>
        </section>

        {/* 3. FEATURED PROMINENT IMPLANT CARD */}
        <section className="px-4 py-4" id="implant-highlight">
          <div className="bg-gradient-to-br from-[#004ac6] via-[#2563eb] to-[#00569c] text-white p-5 rounded-3xl shadow-lg relative overflow-hidden">
            <div className="absolute -left-6 -bottom-6 w-32 h-32 rounded-full bg-white/10 pointer-events-none" />
            <div className="flex justify-between items-start mb-3">
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
                <span className="material-symbols-fill material-symbols-outlined text-sm">
                  stars
                </span>
                <span>کاشت تخصصی و بادوام</span>
              </span>
              <span className="text-xs bg-[#dae2fd] text-[#00174b] px-2.5 py-0.5 rounded-full font-bold">
                ضمانت کتبی
              </span>
            </div>

            <h2 className="text-xl font-bold mb-1.5">
              ایمپلنت دندان با سیستم‌های سوئیسی و کره‌ای
            </h2>
            <p className="text-sm text-white/90 mb-4 leading-relaxed">
              جایگزینی دائمی دندان‌های از دست رفته با روش بارگذاری فوری و بدون درد همراه با بازسازی و
              پودر استخوان.
            </p>

            <div className="grid grid-cols-2 gap-2 mb-4 bg-white/10 p-3 rounded-2xl backdrop-blur-xs text-xs">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#b4c5ff] text-base">
                  check_circle
                </span>
                <span>کاشت فوری یک‌روزه</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#b4c5ff] text-base">
                  check_circle
                </span>
                <span>سازگاری ۱۰۰٪ با بافت فک</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#b4c5ff] text-base">
                  check_circle
                </span>
                <span>بدون احساس درد و خونریزی</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#b4c5ff] text-base">
                  check_circle
                </span>
                <span>امکان پرداخت اقساطی</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="flex-1 bg-white text-[#004ac6] py-2.5 rounded-full text-center text-sm font-bold shadow-md hover:bg-[#e6e8ea] transition-colors active:scale-95 duration-150"
              >
                رزرو ویزیت و اسکن رایگان
              </a>
            </div>
          </div>
        </section>

        {/* 4. COSMETIC & SMILE DESIGN SECTION */}
        <section className="px-4 py-4" id="mobile-cosmetic-services">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-xs text-[#004ac6] font-bold">دندانپزشکی زیبایی</span>
              <h2 className="text-xl font-bold text-[#191c1e]">اصلاح طرح لبخند هالیوودی</h2>
            </div>
            <span className="material-symbols-outlined text-[#004ac6] text-2xl">
              auto_fix_high
            </span>
          </div>

          {/* Cosmetic Cards Grid (Stacked for Mobile) */}
          <div className="space-y-3.5">
            {/* Card 1: کامپوزیت ونیر */}
            <div className="bg-white rounded-2xl p-4 border border-[#c3c6d7]/30 shadow-xs flex flex-col gap-3">
              <div className="flex gap-3">
                <img
                  className="w-24 h-24 rounded-2xl object-cover shrink-0"
                  alt="ونیر کامپوزیت لایه‌ای"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Cls8ndyoJQ958L6DWc2pyJUw4OQdGOv5_TtKlzg2ClInSC-1FtxuBoDx_Z_czPaOXJ2zY-yreTQzJy8GxkNmMXMDFNCse2iAgAoPScRAxQKKlSQBpB3mW2XsL7lKQxROhiNk3Cvac3NoU8U9ld891GuwnkU2dRQmrTwN77-PDoVmw3wRHIhBAS0RYEu7QEbx67c6lI1R9eT5-v_9-8LYOlXKk1zEZhTMtjnl4gjfKxDjR6BcYGlH"
                />
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[#191c1e] text-base">ونیر کامپوزیت لایه‌ای</h3>
                      <span className="text-xs bg-[#dae2fd] text-[#004ac6] font-bold px-2 py-0.5 rounded-full">
                        ۱ جلسه
                      </span>
                    </div>
                    <p className="text-sm text-[#434655] line-clamp-2 mt-1">
                      فرم‌دهی و سفیدی طبیعی دندان با کامپوزیت‌های برند Tokuyama و IPS بدون تراش بافت
                      سالم دندان.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#565e74] mt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-[#004ac6]">
                        schedule
                      </span>
                      ماندگاری: ۵ تا ۷ سال
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-[#004ac6]">
                        verified
                      </span>
                      پولیش نانو
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-[#c3c6d7]/20 flex items-center justify-between">
                <span className="text-sm text-[#191c1e] font-semibold">
                  مشاوره انتخاب رنگ و تناژ
                </span>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="text-[#004ac6] text-xs font-bold flex items-center gap-1 hover:underline"
                >
                  <span>درخواست مشاوره</span>
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </a>
              </div>
            </div>

            {/* Card 2: لمینت سرامیکی */}
            <div className="bg-white rounded-2xl p-4 border border-[#c3c6d7]/30 shadow-xs flex flex-col gap-3">
              <div className="flex gap-3">
                <img
                  className="w-24 h-24 rounded-2xl object-cover shrink-0"
                  alt="لمینت سرامیکی پرسلین E-max"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJW3Osvn9zhZ0Xi60RRmGEN-hgHBedOHW5Jkh-hkpBdXjE9NPPgej15Aa_ObQoHpGi34mbkpelvsUaR27yM6SxWIQEpfT-irWc3JP6hWvOiRHkVuocJC9Dvxd2mkYHHQ8AvZfkQeWFNQz3Lsn5vLWw9199tkTvGAusmyI8cwoN0AHbWIRCp_ImnOWd6O_7Y7-W_BcxR__67AtLZ6OeM1ZofgaEIXiiNU59y5zFAGU_g_ASl6osXgYr"
                />
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[#191c1e] text-base">
                        لمینت سرامیکی پرسلین E-max
                      </h3>
                      <span className="text-xs bg-[#d4e3ff] text-[#00569c] font-bold px-2 py-0.5 rounded-full">
                        فوق‌العاده بادوام
                      </span>
                    </div>
                    <p className="text-sm text-[#434655] line-clamp-2 mt-1">
                      شفافیت خیره‌کننده، عدم رنگ‌پذیری و مقاومت بالا ساخته شده با فناوری کدکم
                      (CAD/CAM).
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#565e74] mt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-[#004ac6]">
                        schedule
                      </span>
                      ماندگاری: بالای ۱۵ سال
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-[#004ac6]">
                        palette
                      </span>
                      ضد لک
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-[#c3c6d7]/20 flex items-center justify-between">
                <span className="text-sm text-[#191c1e] font-semibold">قالب‌گیری دیجیتال دقیق</span>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="text-[#004ac6] text-xs font-bold flex items-center gap-1 hover:underline"
                >
                  <span>استعلام قیمت و شرایط</span>
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </a>
              </div>
            </div>

            {/* Card 3: بلیچینگ و سفیدکردن دندان */}
            <div className="bg-white rounded-2xl p-4 border border-[#c3c6d7]/30 shadow-xs flex flex-col gap-3">
              <div className="flex gap-3">
                <img
                  className="w-24 h-24 rounded-2xl object-cover shrink-0"
                  alt="بلیچینگ آفیس"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQdKsne2FmqtqnadFNoMC2Uawl4pEoCKhy4CGOWNTuZ3ZgokHw-5B36F8AdsvZAjq82U0ZSmt0GizDMaukErEvPHI_aOopV9ydc97KL-VMA7VQ3yOUwnm6-D1upRcVDKpp6wEYWIjVxatsNZIXFdO14xIrjaZPkV_64GnbfDhU1V4aq7Rwp8s5QhCcjOo28e4PCUYpeB_3iIYsO0IoRv34rabS796IF8xJjgjErA4x7ZP8GnPprZLp"
                />
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-[#191c1e] text-base">
                        بلیچینگ آفیس (سفید کردن مطب)
                      </h3>
                      <span className="text-xs bg-[#eceef0] text-[#434655] font-bold px-2 py-0.5 rounded-full">
                        روشن‌سازی ۳ الی ۵ درجه
                      </span>
                    </div>
                    <p className="text-sm text-[#434655] line-clamp-2 mt-1">
                      سفید کردن تخصصی دندان‌ها با اشعه و ژل‌های ضد حساسیت در کمتر از یک ساعت.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#565e74] mt-1">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-[#004ac6]">
                        flash_on
                      </span>
                      سریع و موثر
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs text-[#004ac6]">
                        shield
                      </span>
                      بدون آسیب مینا
                    </span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-[#c3c6d7]/20 flex items-center justify-between">
                <span className="text-sm text-[#191c1e] font-semibold">
                  همراه با تری بلیچینگ خانگی
                </span>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="text-[#004ac6] text-xs font-bold flex items-center gap-1 hover:underline"
                >
                  <span>رزرو جلسه سفیدکردن</span>
                  <span className="material-symbols-outlined text-sm">arrow_back</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. GENERAL & RESTORATIVE DENTAL SERVICES */}
        <section
          className="px-4 py-4 bg-[#f2f4f6]/60 rounded-xl my-4"
          id="mobile-restorative-services"
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-xs text-[#004ac6] font-bold">خدمات سلامت و درمان</span>
              <h2 className="text-xl font-bold text-[#191c1e]">درمان ریشه، ترمیم و جراحی</h2>
            </div>
            <span className="material-symbols-outlined text-[#004ac6] text-2xl">
              medical_services
            </span>
          </div>

          {/* Bento-style 2-column list */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#dae2fd]/50 text-[#004ac6] flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-xl">healing</span>
                </div>
                <h4 className="text-sm font-bold text-[#191c1e] mb-1">عصب‌کشی تخصصی (اندو)</h4>
                <p className="text-[#434655] text-xs line-clamp-3">
                  پاکسازی ریشه با موتور روتاری دیجیتال و اپکس فایندر با کمترین احساس درد.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#004ac6] mt-2">
                ۱ تا ۲ جلسه درمانی
              </span>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#dae2fd]/50 text-[#004ac6] flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-xl">view_in_ar</span>
                </div>
                <h4 className="text-sm font-bold text-[#191c1e] mb-1">روکش زیرکونیا و سرامیک</h4>
                <p className="text-[#434655] text-xs line-clamp-3">
                  استحکام فوق‌العاده بالا بدون سیاهی لبه لثه، منطبق بر رنگ طبیعی دندان.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#004ac6] mt-2">
                بسیار مقاوم و همرنگ
              </span>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#dae2fd]/50 text-[#004ac6] flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-xl">clean_hands</span>
                </div>
                <h4 className="text-sm font-bold text-[#191c1e] mb-1">جرم‌گیری و بروساژ</h4>
                <p className="text-[#434655] text-xs line-clamp-3">
                  حذف پلاک و جرم‌های زیر لثه با دستگاه اولتراسونیک جهت رفع بوی دهان و التهاب.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#004ac6] mt-2">سلامت ۱۰۰٪ لثه</span>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-full bg-[#dae2fd]/50 text-[#004ac6] flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-xl">emergency</span>
                </div>
                <h4 className="text-sm font-bold text-[#191c1e] mb-1">جراحی دندان عقل نهفته</h4>
                <p className="text-[#434655] text-xs line-clamp-3">
                  خروج آسان و دقیق دندان‌های عقل زاویه‌دار و نهفته بدون آسیب به عصب فکی.
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#004ac6] mt-2">ترمیم سریع بافت</span>
            </div>
          </div>
        </section>

        {/* 6. BEFORE & AFTER SMILE SHOWCASE */}
        <section className="px-4 py-4">
          <div className="text-center mb-4">
            <span className="text-xs text-[#004ac6] font-bold">نتایج درمان مراجعین</span>
            <h2 className="text-xl font-bold text-[#191c1e]">گالری تغییر لبخند و رضایت</h2>
          </div>

          <div className="space-y-4">
            {/* Transformation Item 1 */}
            <div className="bg-white rounded-2xl p-3.5 border border-[#c3c6d7]/30 shadow-xs">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    className="w-full h-32 object-cover"
                    alt="قبل از درمان لمینت"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCi0EEkdWlkk1RkfkxDc75cYQ8cU9-GFSSdEinzc7Z_eea_MChXSKONHxdgH5iNCQvtd3Qo6EQmlcrRKhlL-6FwUVqdnqgS3sMTW5igYiM2DV3Kzmjletx4UxUezjgtXi1h150d1G65x3nb2dLAdX73T3CYxPlMPTDXFVMJZudj8MuviYPvRbygALAvjPXuY2LUr9OhFaVf7lGO3SsSJYfaSe3GkVDDUue1-SxlJx60ol2VvTORaav"
                  />
                  <span className="absolute bottom-1.5 right-1.5 bg-[#2d3133]/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    قبل
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    className="w-full h-32 object-cover"
                    alt="بعد از درمان لمینت"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWcxTk2cbZXT2sDQAKwyKa4dhbQC4iYyqergLp5JwduAfSEMzv33bunZgGvFcSq1LavOpDZMoqM_rVAfpSnfDcuo-uUETFlBXd2llJBk5c8h_nQ5xD1hKK6JoGdzzv0NKH_VaMoyBPmHpOyOw2fduutymPM5lr6fdN9EDaonItaDlgf9EtPG_iBzrZPbSm6I78T6s0jw7J-56zIU-NnWLD9UeRdPfgEviPJcnigylK2urSe4gB6rRG"
                  />
                  <span className="absolute bottom-1.5 right-1.5 bg-[#004ac6] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    بعد درمان
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs px-1">
                <span className="font-bold text-[#191c1e]">
                  ۸ واحد لمینت سرامیکی پرسلین E-max
                </span>
                <span className="text-[#565e74]">مراجع محترم از پاکدشت</span>
              </div>
            </div>

            {/* Transformation Item 2 */}
            <div className="bg-white rounded-2xl p-3.5 border border-[#c3c6d7]/30 shadow-xs">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    className="w-full h-32 object-cover"
                    alt="قبل از کاشت ایمپلنت"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdIfhL3gLmkXCAq60aBi9vn69Lo0OI13Y227sXwW7zeYo-AcGPzheYHmvXsQkY-xmciXIRvqU0r-PhAq8zSh7l8_kprKCpvxNmKOiX5EJLZCGRsnFp9uAGsJ0EhDqpB9OzWpSNjFrSShEmFJLtm2Ek4gdT41rGKuM2YCZW98kdiN00Vi8eIZz4DOim5DzFTXeMQa1Htf4PhN4vsLbnSwqiVlZlchKbeOzn0_PzzvL9SwucRgepmTml"
                  />
                  <span className="absolute bottom-1.5 right-1.5 bg-[#2d3133]/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    قبل
                  </span>
                </div>
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    className="w-full h-32 object-cover"
                    alt="بعد از کاشت ایمپلنت"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV3Nb88K1mUlmGXpqR9HkTvAMD_Lm6zxBZggkzW6BfBXUNBXu8Vk5dm698EZplrBsnO2A27V9leouOvJOOrW-W_JSo4X0eMJjHj_qq0R3Aj1rPmtWzxoXgGFPFUsmg6nGgHmwnyld0lC_UR0fmF3hhSHMTGoKv1IwMgQ1MTdZQx2lgiMTfjTGTn0lVRHUVyFVMYV1pbwHPT1sA53LqJQUQAga2HwcJ_AECYgwSytt9MB9_EZSQnqGf"
                  />
                  <span className="absolute bottom-1.5 right-1.5 bg-[#004ac6] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    بعد درمان
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs px-1">
                <span className="font-bold text-[#191c1e]">
                  کاشت ایمپلنت فوری همراه با روکش تمام سرامیک
                </span>
                <span className="text-[#565e74]">طول درمان: ۲ ماه</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. TREATMENT STEPS (JOURNEY FOR MOBILE) */}
        <section className="px-4 py-4">
          <div className="bg-white rounded-2xl p-4 border border-[#c3c6d7]/20 shadow-xs">
            <h3 className="text-xl font-bold text-[#191c1e] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#004ac6]">route</span>
              <span>مراحل مراجعه و درمان در مطب پارمیس</span>
            </h3>

            <div className="space-y-3 relative before:absolute before:top-3 before:bottom-3 before:right-4 before:w-0.5 before:bg-[#dae2fd]">
              <div className="flex items-start gap-3 relative">
                <div className="w-8 h-8 rounded-full bg-[#004ac6] text-white font-bold text-xs flex items-center justify-center z-10 shrink-0 shadow-xs">
                  ۱
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#191c1e]">ویزیت، معاینه و مشاوره</h4>
                  <p className="text-[#434655] text-xs">
                    بررسی دقیق دندان‌ها، عکسبرداری و تعیین دقیق طرح درمان مناسب بودجه شما.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 relative">
                <div className="w-8 h-8 rounded-full bg-[#004ac6] text-white font-bold text-xs flex items-center justify-center z-10 shrink-0 shadow-xs">
                  ۲
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#191c1e]">
                    شبیه‌سازی و انتخاب رنگ دندان
                  </h4>
                  <p className="text-[#434655] text-xs">
                    دیدن نتیجه کار قبل از شروع و هماهنگی فرم و سفیدی بر اساس فرم چهره شما.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 relative">
                <div className="w-8 h-8 rounded-full bg-[#004ac6] text-white font-bold text-xs flex items-center justify-center z-10 shrink-0 shadow-xs">
                  ۳
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#191c1e]">اجرای درمان بدون درد</h4>
                  <p className="text-[#434655] text-xs">
                    انجام مراحل کار توسط دکتر شمس‌پور با بی‌حسی کامل و تجهیزات استریل یکبار مصرف.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 relative">
                <div className="w-8 h-8 rounded-full bg-[#004ac6] text-white font-bold text-xs flex items-center justify-center z-10 shrink-0 shadow-xs">
                  ۴
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#191c1e]">پشتیبانی و چکاپ‌های دوره‌ای</h4>
                  <p className="text-[#434655] text-xs">
                    گارانتی درمان و مراجعات رایگان بعدی جهت کنترل سلامت لثه و پولیش دوره‌ای.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. DOCTOR PROFILE CARD */}
        <section className="px-4 py-4">
          <div className="bg-white rounded-2xl p-4 border border-[#c3c6d7]/30 shadow-xs flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                className="w-20 h-20 rounded-full object-cover border-2 border-[#2563eb] shadow-xs"
                alt="دکتر انوشیروان شمس‌پور"
                src={CLINIC_INFO.doctorImage}
              />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-[#191c1e]">دکتر انوشیروان شمس‌پور</h3>
                <span className="text-sm text-[#004ac6] font-semibold">جراح - دندانپزشک</span>
                <span className="text-xs text-[#565e74]">عضو سازمان نظام پزشکی کشور</span>
              </div>
            </div>
            <p className="text-sm text-[#434655] leading-relaxed">
              با سال‌ها تجربه درخشان در زمینه جراحی دندان، کاشت ایمپلنت و دندانپزشکی ترمیمی و زیبایی
              در پاکدشت با تعهد به سلامت پایدار دهان و دندان بیماران.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 border-t border-[#c3c6d7]/20">
              <span className="bg-[#eceef0] px-2.5 py-1 rounded-full text-[11px] font-bold text-[#434655]">
                مجهز به رادیوگرافی دیجیتال RVG
              </span>
              <span className="bg-[#eceef0] px-2.5 py-1 rounded-full text-[11px] font-bold text-[#434655]">
                دستگاه اتوکلاو کلاس B بیمارستانی
              </span>
              <span className="bg-[#eceef0] px-2.5 py-1 rounded-full text-[11px] font-bold text-[#434655]">
                محیط اختصاصی کودکان و بزرگسالان
              </span>
            </div>
          </div>
        </section>

        {/* 9. FAQ ACCORDION */}
        <section className="px-4 py-4">
          <div className="text-center mb-3">
            <span className="text-xs text-[#004ac6] font-bold">پاسخ به ابهامات شما</span>
            <h2 className="text-xl font-bold text-[#191c1e]">سوالات متداول مراجعین</h2>
          </div>

          <div className="space-y-2.5">
            {mobileFaqs.map((faq, idx) => {
              const isOpen = openMobileFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#c3c6d7]/30 overflow-hidden shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenMobileFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-3.5 text-right text-sm font-bold text-[#191c1e]"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`material-symbols-outlined text-[#004ac6] text-xl transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-3.5 pb-3.5 text-[#434655] text-xs leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 10. LOCATION & CONTACT QUICK CARD */}
        <section className="px-4 py-4">
          <div className="bg-white rounded-2xl p-4 border border-[#c3c6d7]/30 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-[#004ac6]">location_on</span>
              <h3 className="text-xl font-bold text-[#191c1e]">
                آدرس و اطلاعات دسترسی کلینیک
              </h3>
            </div>
            <p className="text-sm text-[#434655] mb-3">
              پاکدشت، مجتمع پزشکی راستین، طبقه دندانپزشکی پارمیس (دکتر انوشیروان شمسپور)
            </p>

            {/* Simulated Map / Location Preview */}
            <div className="relative rounded-2xl overflow-hidden mb-3 border border-[#c3c6d7]/20 h-36 bg-[#eceef0]">
              <img
                className="w-full h-full object-cover"
                alt="پاکدشت، مجتمع پزشکی راستین"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo_eNj0205uzg3HAbJRgYsLoEp5HF0Vzc8fBbUyalDcPllL9JwWrnxzVG5E2018okWfJ_kKJKd17lGi-SsDgdp57nzezf670DaOkAEMVFRXlK2TAAoMYftlnVVE7Jrah3kwfq3wr1Zc17SUvfbmwwvfwAemoysdEI-w_tC2wJl4aSxm3f1hMJJIADodJadNixT7DBqR5jiXiMVlhjZxh1kiQhLl00elp-Q3y7rIK-AFKnI9zGV9whx"
              />
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-2 bg-white text-[#004ac6] text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-sm">directions</span>
                <span>مسیریابی در نشان / بلد</span>
              </a>
            </div>

            {/* Working Hours & Direct Call Box */}
            <div className="space-y-2 text-xs bg-[#f2f4f6] p-3 rounded-2xl mb-3">
              <div className="flex justify-between items-center">
                <span className="text-[#565e74] font-medium">ساعات کاری مطب:</span>
                <span className="font-bold text-[#191c1e]">شنبه تا پنجشنبه: ۹:۰۰ الی ۲۱:۰۰</span>
              </div>
              <div className="flex justify-between items-start">
                <span className="text-[#565e74] font-medium">شماره تماس مستقیم:</span>
                <div className="font-bold text-[#004ac6] text-sm space-y-0.5 text-left dir-ltr">
                  <div className="block">۰۲۱۳۶۰۴۸۵۸۱</div>
                  <div className="block">۰۲۱۳۶۰۴۸۵۸۲</div>
                </div>
              </div>
            </div>

            <a
              href={`tel:${CLINIC_INFO.phone2}`}
              className="w-full bg-[#2563eb] text-white py-3 rounded-full flex items-center justify-center gap-2 text-sm font-bold shadow-md active:scale-95 duration-150"
            >
              <span className="material-symbols-outlined">call</span>
              <span>تماس و رزرو وقت ویزیت ({CLINIC_INFO.phoneCompact2})</span>
            </a>
          </div>
        </section>
      </div>

      {/* ================= DESKTOP SERVICES PAGE (>= md) ================= */}
      <div className="hidden md:block text-right">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-16 bg-gradient-to-b from-[#f7f9fb] via-[#f2f4f6]/50 to-[#f7f9fb]">
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#dbe1ff]/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-4 w-72 h-72 bg-[#dae2fd]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6">
            {/* Eyebrow Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#004ac6]/10 text-[#004ac6] border border-[#004ac6]/20 text-sm font-bold">
                <span className="material-symbols-outlined text-lg">verified</span>
                <span>مجتمع پزشکی راستین • پاکدشت | تحت نظارت دکتر انوشیروان شمسپور</span>
              </div>
            </div>

            {/* Main Headline & Subtitle */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h1 className="text-4xl lg:text-[3.5rem] font-extrabold text-[#191c1e] tracking-tight mb-4 leading-[1.15]">
                خدمات تخصصی <span className="text-[#2563eb]">درمان و زیبایی</span> دندان‌پزشکی
              </h1>
              <p className="text-[1.125rem] text-[#565e74] leading-relaxed">
                ارائه مدرن‌ترین رویکردهای درمان دهان و دندان، اصلاح حرفه‌ای طرح لبخند و جراحی
                ایمپلنت دیجیتال، با استفاده از مرغوب‌ترین متریال‌های سوئیسی و آلمانی در محیطی کاملاً
                آرام، بهداشتی و بدون استرس.
              </p>
            </div>

            {/* Quick Category Navigation Pill Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mb-12 p-1.5 bg-white rounded-full shadow-xs border border-[#c3c6d7]/40">
              <button
                type="button"
                className="px-5 py-2.5 rounded-full bg-[#2563eb] text-white font-bold text-sm shadow-xs transition-all"
              >
                همه خدمات
              </button>
              <a
                href="#cosmetic"
                className="px-5 py-2.5 rounded-full text-[#565e74] hover:text-[#004ac6] hover:bg-[#f2f4f6] font-bold text-sm transition-colors"
              >
                دندان‌پزشکی زیبایی
              </a>
              <a
                href="#restorative"
                className="px-5 py-2.5 rounded-full text-[#565e74] hover:text-[#004ac6] hover:bg-[#f2f4f6] font-bold text-sm transition-colors"
              >
                درمان و ترمیمی
              </a>
              <a
                href="#implant"
                className="px-5 py-2.5 rounded-full text-[#565e74] hover:text-[#004ac6] hover:bg-[#f2f4f6] font-bold text-sm transition-colors"
              >
                جراحی و ایمپلنت
              </a>
              <a
                href="#journey"
                className="px-5 py-2.5 rounded-full text-[#565e74] hover:text-[#004ac6] hover:bg-[#f2f4f6] font-bold text-sm transition-colors"
              >
                مراحل درمان
              </a>
              <a
                href="#faq"
                className="px-5 py-2.5 rounded-full text-[#565e74] hover:text-[#004ac6] hover:bg-[#f2f4f6] font-bold text-sm transition-colors"
              >
                پرسش‌های متداول
              </a>
            </div>

            {/* Hero Visual Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Main Image Presentation */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#f2f4f6]">
                  <img
                    className="w-full h-[420px] object-cover"
                    alt="زیبایی طبیعی و لبخندی بااعتمادبه‌نفس"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS9hSXkgxMX8uaMA9w7QpL-yYzRu_lfBxIIAgB4iU68D84zJlyf-85q0DU3HblZB9FZXK_LOSqstiHweqbqW_UYqfC_5e9b6IruGo3XK0x9qlfit_LEOKowiXh7vl8Kc6sckJyIviY0neYn3H7Cl2Y2SXHUPhWTL-xbf4gnjjovnlQhDuiPdh6HAWKTPn6aEqwpDVhVG69qu-nifllqSN0P6t2Rm1ZLCpVkPSJYdxlrJleJrHwJlhN"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d3133]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 right-6 left-6 text-white flex items-center justify-between">
                    <div>
                      <p className="text-xl font-bold">زیبایی طبیعی و لبخندی بااعتمادبه‌نفس</p>
                      <p className="text-sm opacity-90 mt-1">
                        تضمین ظرافت، شفافیت مینای طبیعی و سلامت کامل بافت لثه
                      </p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/40 text-xs font-semibold">
                      تکنولوژی ۲۰۲۴
                    </div>
                  </div>
                </div>

                {/* Floating Badge Top Left */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-[#c3c6d7]/30 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#d4e3ff] text-[#004ac6] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">health_and_safety</span>
                  </div>
                  <div>
                    <p className="text-sm text-[#191c1e] font-bold">۱۰۰٪ استریلیزاسیون دیجیتال</p>
                    <p className="text-sm text-[#565e74]">اتوکلاو کلاس B و پکینگ استاندارد</p>
                  </div>
                </div>
              </div>

              {/* 3 Feature Stat Cards on the Left */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 shadow-xs hover:-translate-y-1 transition-transform">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl">auto_awesome</span>
                    </div>
                    <div>
                      <h2 className="text-xl text-[#191c1e] font-bold mb-1">
                        طراحی دیجیتال لبخند (DSD)
                      </h2>
                      <p className="text-base text-[#565e74] leading-relaxed">
                        مشاهده فرم و نتیجه نهایی لبخند قبل از شروع هرگونه تراش یا کار درمانی، متناسب
                        با هارمونی اجزای چهره شما.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 shadow-xs hover:-translate-y-1 transition-transform">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#00569c]/10 text-[#00569c] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl">biotech</span>
                    </div>
                    <div>
                      <h2 className="text-xl text-[#191c1e] font-bold mb-1">
                        متریال‌های درجه‌یک جهانی
                      </h2>
                      <p className="text-base text-[#565e74] leading-relaxed">
                        به‌کارگیری کامپوزیت‌های نانوهیبرید ژاپنی (توکویاما، گرادیو) و پرسلین‌های
                        سرامیکی آلمانی (ایماکس و زیرکونیا).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 shadow-xs hover:-translate-y-1 transition-transform">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#dae2fd] text-[#5c647a] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-2xl">
                        sentiment_satisfied
                      </span>
                    </div>
                    <div>
                      <h2 className="text-xl text-[#191c1e] font-bold mb-1">
                        درمان بدون درد و اضطراب
                      </h2>
                      <p className="text-base text-[#565e74] leading-relaxed">
                        تکنیک‌های نوین بی‌حسی کامپیوتری و محیط روان‌شناختی آرام برای تجربه درمانی
                        کاملاً راحت و لذت‌بخش.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: دندان‌پزشکی زیبایی (Cosmetic Dentistry) */}
        <section className="py-16 bg-white border-t border-[#c3c6d7]/20" id="cosmetic">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004ac6]/10 text-[#004ac6] text-xs font-semibold mb-3">
                  <span className="material-symbols-outlined text-base">flare</span>
                  <span>بخش ویژه زیبایی و اصلاح فرم</span>
                </div>
                <h2 className="text-[2.25rem] text-[#191c1e] font-bold leading-[1.25]">
                  خدمات دندان‌پزشکی زیبایی و طرح لبخند
                </h2>
                <p className="text-base text-[#565e74] mt-2 max-w-2xl">
                  اصلاح فرم، رنگ، قرینگی و فواصل دندان‌ها با کمترین تهاجم به بافت طبیعی دندان زیر
                  نظر مستقیم دکتر انوشیروان شمسپور
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="inline-flex items-center gap-2 text-[#004ac6] font-bold text-sm hover:underline"
                >
                  <span>دریافت مشاوره تخصصی زیبایی</span>
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                </a>
              </div>
            </div>

            {/* Grid of 4 Cosmetic Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Cosmetic 1 */}
              <div className="bg-[#f7f9fb] rounded-2xl p-6 border border-[#c3c6d7]/40 flex flex-col justify-between hover:-translate-y-1 transition-all">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#2563eb]/10 text-[#2563eb] flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-3xl">arrow_back_ios_new</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">ونیر کامپوزیت لایه‌ای</h3>
                  <p className="text-sm text-[#565e74] mb-6 leading-relaxed">
                    اصلاح رنگ و بدشکلی دندان در ۱ جلسه بدون نیاز به تراش یا حداقل سایش مینا، با
                    کامپوزیت‌های نانوذرّه‌ای آلمانی و سوئیسی.
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-[#c3c6d7]/30 mb-6 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          schedule
                        </span>
                        طول درمان:
                      </span>
                      <span className="font-semibold text-[#191c1e]">۱ الی ۲ جلسه</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          verified_user
                        </span>
                        میزان ماندگاری:
                      </span>
                      <span className="font-semibold text-[#191c1e]">۵ الی ۷ سال</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          healing
                        </span>
                        تراش دندان:
                      </span>
                      <span className="font-semibold text-[#004ac6]">بدون تراش (Non-Prep)</span>
                    </div>
                  </div>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full text-center py-2.5 rounded-full bg-[#004ac6]/10 hover:bg-[#004ac6] hover:text-white text-[#004ac6] font-bold text-sm transition-all"
                >
                  درخواست مشاوره کامپوزیت
                </a>
              </div>

              {/* Cosmetic 2 */}
              <div className="bg-[#f7f9fb] rounded-2xl p-6 border-2 border-[#004ac6]/20 relative flex flex-col justify-between hover:-translate-y-1 transition-all">
                <div className="absolute -top-3 left-4 bg-[#004ac6] text-white text-[10px] font-bold px-3 py-0.5 rounded-full">
                  محبوب‌ترین درمان
                </div>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#004ac6]/15 text-[#004ac6] flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-3xl">diamond</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                    لمینت سرامیکی (پرسلین)
                  </h3>
                  <p className="text-sm text-[#565e74] mb-6 leading-relaxed">
                    پوسته‌های سرامیکی فوق‌العاده نازک و مقاوم (E-Max) با شفافیت آینه‌ای، بدون تغییر
                    رنگ در طول زمان و انطباق بی‌نظیر.
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-[#c3c6d7]/30 mb-6 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          schedule
                        </span>
                        طول درمان:
                      </span>
                      <span className="font-semibold text-[#191c1e]">۲ الی ۳ جلسه</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          verified_user
                        </span>
                        میزان ماندگاری:
                      </span>
                      <span className="font-semibold text-[#191c1e]">۱۰ الی ۱۵ سال+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          palette
                        </span>
                        ثبات رنگ:
                      </span>
                      <span className="font-semibold text-[#004ac6]">۱۰۰٪ دائمی و ضدلکه</span>
                    </div>
                  </div>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full text-center py-2.5 rounded-full bg-[#004ac6] text-white font-bold text-sm shadow-xs hover:scale-[1.02] transition-all"
                >
                  درخواست مشاوره لمینت
                </a>
              </div>

              {/* Cosmetic 3 */}
              <div className="bg-[#f7f9fb] rounded-2xl p-6 border border-[#c3c6d7]/40 flex flex-col justify-between hover:-translate-y-1 transition-all">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#00569c]/10 text-[#00569c] flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-3xl">light_mode</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">بلیچینگ و سفید کردن</h3>
                  <p className="text-sm text-[#565e74] mb-6 leading-relaxed">
                    روشن کردن رنگ طبیعی دندان‌ها تا چند درجه با ژل‌های استاندارد و دستگاه لایت آفیس
                    در کلینیک بدون آسیب به مینای دندان.
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-[#c3c6d7]/30 mb-6 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          schedule
                        </span>
                        طول درمان:
                      </span>
                      <span className="font-semibold text-[#191c1e]">تنها ۴۵ دقیقه</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          verified_user
                        </span>
                        میزان ماندگاری:
                      </span>
                      <span className="font-semibold text-[#191c1e]">۱ الی ۲ سال</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          speed
                        </span>
                        تغییر رنگ:
                      </span>
                      <span className="font-semibold text-[#004ac6]">۳ تا ۸ درجه شفاف‌تر</span>
                    </div>
                  </div>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full text-center py-2.5 rounded-full bg-[#004ac6]/10 hover:bg-[#004ac6] hover:text-white text-[#004ac6] font-bold text-sm transition-all"
                >
                  درخواست مشاوره بلیچینگ
                </a>
              </div>

              {/* Cosmetic 4 */}
              <div className="bg-[#f7f9fb] rounded-2xl p-6 border border-[#c3c6d7]/40 flex flex-col justify-between hover:-translate-y-1 transition-all">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#dae2fd] text-[#5c647a] flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-3xl">shape_line</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">بستن دیاستم و فرم لبه</h3>
                  <p className="text-sm text-[#565e74] mb-6 leading-relaxed">
                    ترمیم لب‌پریدگی‌ها، بستن فواصل بین دندان‌های قدامی و کانتورینگ لثه و دندان برای
                    برقراری توازن متقارن لبخند.
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-[#c3c6d7]/30 mb-6 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          schedule
                        </span>
                        طول درمان:
                      </span>
                      <span className="font-semibold text-[#191c1e]">یک جلسه کوتاه</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          verified_user
                        </span>
                        میزان ماندگاری:
                      </span>
                      <span className="font-semibold text-[#191c1e]">طولانی‌مدت</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#565e74] flex items-center gap-1">
                        <span className="material-symbols-outlined text-base text-[#737686]">
                          straighten
                        </span>
                        تکنیک:
                      </span>
                      <span className="font-semibold text-[#004ac6]">باندینگ زیبایی</span>
                    </div>
                  </div>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full text-center py-2.5 rounded-full bg-[#004ac6]/10 hover:bg-[#004ac6] hover:text-white text-[#004ac6] font-bold text-sm transition-all"
                >
                  درخواست مشاوره دیاستم
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: خدمات درمانی، ترمیمی و اندودانتیکس */}
        <section className="py-16 bg-[#f7f9fb]" id="restorative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00569c]/10 text-[#00569c] text-xs font-semibold mb-3">
                <span className="material-symbols-outlined text-base">medical_services</span>
                <span>سلامت، عملکرد و نگهداری دندان طبیعی</span>
              </div>
              <h2 className="text-[2.25rem] text-[#191c1e] font-bold leading-[1.25]">
                خدمات درمانی، ترمیمی و اندودانتیکس
              </h2>
              <p className="text-base text-[#565e74] mt-2">
                اولویت نخست کلینیک پارمیس در پاکدشت، حفظ ساختار طبیعی دندان با بالاترین استاندارد
                ارزیابی رادیوگرافی و کنترل عفونت است.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 shadow-xs hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">
                      precision_manufacturing
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#191c1e]">عصب‌کشی با روتاری</h3>
                    <span className="text-sm text-[#565e74]">درمان ریشه بدون درد</span>
                  </div>
                </div>
                <p className="text-base text-[#565e74] mb-4 leading-relaxed">
                  پاکسازی دقیق کانال‌های ریشه با دستگاه اندوروتاری و اپکس‌لوکیتور دیجیتال جهت تعیین
                  اندازه میکرومتری کانال، همراه با پانسمان‌های ضدعفونی‌کننده تخصصی.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-[#434655]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">
                      check_circle
                    </span>
                    <span>کاهش زمان جلسه درمان و احساس راحتی کامل فک</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">
                      check_circle
                    </span>
                    <span>مهروموم سه بعدی کانال‌ها برای جلوگیری از عود مجدد</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-[#c3c6d7]/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#00569c] bg-[#d4e3ff]/30 px-3 py-1 rounded-full">
                    درمان ریشه ۱ تا ۴ کانال
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-sm font-bold text-[#004ac6] hover:underline"
                  >
                    اطلاعات بیشتر
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 shadow-xs hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">contrast</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#191c1e]">ترمیم با مواد همرنگ دندان</h3>
                    <span className="text-sm text-[#565e74]">حذف کامل آمالگام تیره</span>
                  </div>
                </div>
                <p className="text-base text-[#565e74] mb-4 leading-relaxed">
                  برداشت پوسیدگی‌ها و پر کردن با کامپوزیت‌های نانوهیبرید مستحکم که پیوند
                  میکرومکانیکی با ساختار دندان تشکیل داده و از شکستگی دیواره‌ها پیشگیری می‌کنند.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-[#434655]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">
                      check_circle
                    </span>
                    <span>تطابق رنگ کاملاً طبیعی با دندان‌های مجاور</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">
                      check_circle
                    </span>
                    <span>استحکام مکانیکی بسیار بالا در دندان‌های خلفی آسیا</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-[#c3c6d7]/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#00569c] bg-[#d4e3ff]/30 px-3 py-1 rounded-full">
                    مواد نانوسرامیک آلمانی
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-sm font-bold text-[#004ac6] hover:underline"
                  >
                    اطلاعات بیشتر
                  </a>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 shadow-xs hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">clean_hands</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#191c1e]">جرم‌گیری و بروساژ عمیق</h3>
                    <span className="text-sm text-[#565e74]">پیشگیری از تحلیل لثه و استخوان</span>
                  </div>
                </div>
                <p className="text-base text-[#565e74] mb-4 leading-relaxed">
                  زدودن پلاک‌های باکتریایی میکروبی زیر و بالای لثه با دستگاه اولتراسونیک پیه‌زو بدون
                  وارد شدن ذره‌ای آسیب به مینا، همراه با پولیش سطوح دندانی.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-[#434655]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">
                      check_circle
                    </span>
                    <span>رفع قطعی بوی نامطبوع دهان و خونریزی لثه هنگام مسواک</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">
                      check_circle
                    </span>
                    <span>بروساژ با خمیرهای براق‌کننده تخصصی مینا</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-[#c3c6d7]/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#00569c] bg-[#d4e3ff]/30 px-3 py-1 rounded-full">
                    دستگاه التراسونیک بدون لرزش
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-sm font-bold text-[#004ac6] hover:underline"
                  >
                    اطلاعات بیشتر
                  </a>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 shadow-xs hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">shield</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#191c1e]">روکش زیرکونیا و سرامیکی</h3>
                    <span className="text-sm text-[#565e74]">پوشش دندان‌های عصب‌کشی‌شده</span>
                  </div>
                </div>
                <p className="text-base text-[#565e74] mb-4 leading-relaxed">
                  ساخت پروتزهای دقیق با اسکنرهای سه‌بعدی بدون استفاده از فلز، با عدم ایجاد هاله
                  تیرگی در لبه لثه و بالاترین تطابق با بافت بیولوژیک فک.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-[#434655]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">
                      check_circle
                    </span>
                    <span>تحمل فشارهای سنگین جویدن در دندان‌های عقبی</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">
                      check_circle
                    </span>
                    <span>طراحی با نرم‌افزارهای CAD/CAM کامپیوتری</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-[#c3c6d7]/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#00569c] bg-[#d4e3ff]/30 px-3 py-1 rounded-full">
                    زیرکونیای چندلایه‌ای High Translucent
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-sm font-bold text-[#004ac6] hover:underline"
                  >
                    اطلاعات بیشتر
                  </a>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 shadow-xs hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">medical_information</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#191c1e]">جراحی دندان عقل نهفته</h3>
                    <span className="text-sm text-[#565e74]">خارج کردن ایمن با رادیوگرافی</span>
                  </div>
                </div>
                <p className="text-base text-[#565e74] mb-4 leading-relaxed">
                  جراحی کم‌تهاجمی دندان‌های عقل نهفته و نیمه‌نهفته با بررسی فاصله از عصب فک پایین،
                  بدون تورم و درد شدید با پیگیری‌های مراقبتی کامل بعد از جراحی.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-[#434655]">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">
                      check_circle
                    </span>
                    <span>پیشگیری از به هم ریختگی ردیف دندان‌های ارتودنسی‌شده</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">
                      check_circle
                    </span>
                    <span>بخیه با نخ‌های بهداشتی جاذب یا غیرقابل‌جذب مرغوب</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-[#c3c6d7]/20 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#00569c] bg-[#d4e3ff]/30 px-3 py-1 rounded-full">
                    تکنیک محافظت از عصب فک
                  </span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-sm font-bold text-[#004ac6] hover:underline"
                  >
                    اطلاعات بیشتر
                  </a>
                </div>
              </div>

              {/* Card 6: Promo */}
              <div className="bg-gradient-to-br from-[#2563eb] to-[#004ac6] p-6 rounded-2xl text-white flex flex-col justify-between shadow-md">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold mb-4">
                    <span className="material-symbols-outlined text-sm">alarm</span>
                    <span>ویزیت و چکاپ دوره‌ای</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">آیا نیاز به معاینه حضوری دارید؟</h3>
                  <p className="text-base opacity-90 leading-relaxed mb-6">
                    جهت ارزیابی اولیه، گرفتن عکس تشخیصی و دریافت برآورد کامل هزینه‌ها، هم‌اکنون با
                    منشی کلینیک پارمیس در پاکدشت تماس بگیرید.
                  </p>
                </div>
                <div className="space-y-3">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-white text-[#004ac6] font-bold text-sm shadow-md hover:bg-[#f2f4f6] transition-colors"
                  >
                    <span className="material-symbols-outlined">phone_in_talk</span>
                    <span>تماس مستقیم: {CLINIC_INFO.phoneCompact}</span>
                  </a>
                  <p className="text-center text-sm opacity-80">پاکدشت، مجتمع پزشکی راستین</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: ایمپلنت و کاشت دیجیتال */}
        <section className="py-16 bg-white relative overflow-hidden" id="implant">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-[#f2f4f6]/70 rounded-3xl p-8 lg:p-12 border border-[#c3c6d7]/30 relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#004ac6]/10 text-[#004ac6] text-xs font-semibold mb-4">
                    <span className="material-symbols-outlined text-base">stars</span>
                    <span>کاشت تخصصی ایمپلنت در پاکدشت</span>
                  </div>
                  <h2 className="text-[2.25rem] text-[#191c1e] font-bold mb-4 leading-[1.25]">
                    ایمپلنت دیجیتال و کاشت فوری دندان؛ جایگزینی همیشگی
                  </h2>
                  <p className="text-[1.125rem] text-[#565e74] leading-relaxed mb-6">
                    با استفاده از سیستم‌های ایمپلنت معتبر سوییسی (اشترومن، اس‌آی‌سی) و کره‌ای مرغوب
                    تحت نظر دکتر شمسپور، دندان از دست رفته خود را بدون درد، با حداقل خونریزی و با
                    بالاترین درصد موفقیت پیوند استخوانی جایگزین کنید.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#c3c6d7]/20">
                      <span className="material-symbols-outlined text-[#004ac6] text-2xl">
                        task_alt
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#191c1e]">بارگذاری فوری</h4>
                        <p className="text-sm text-[#565e74]">
                          تحویل روکش موقت در کوتاه‌ترین زمان
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#c3c6d7]/20">
                      <span className="material-symbols-outlined text-[#004ac6] text-2xl">
                        task_alt
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#191c1e]">جراحی با گاید جراحی</h4>
                        <p className="text-sm text-[#565e74]">
                          زاویه‌گذاری میکرومتری بدون برش وسیع
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#c3c6d7]/20">
                      <span className="material-symbols-outlined text-[#004ac6] text-2xl">
                        task_alt
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#191c1e]">
                          پیوند پودر استخوان و سینوس‌لیفت
                        </h4>
                        <p className="text-sm text-[#565e74]">
                          بازسازی حجم استخوان تحلیل‌رفته
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#c3c6d7]/20">
                      <span className="material-symbols-outlined text-[#004ac6] text-2xl">
                        task_alt
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[#191c1e]">ضمانت اصالت فیکسچر</h4>
                        <p className="text-sm text-[#565e74]">
                          ارائه شناسنامه و سرتیفیکیت معتبر
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="px-6 py-3 rounded-full bg-[#2563eb] hover:bg-[#004ac6] text-white font-bold text-sm shadow-xs transition-all flex items-center gap-2"
                    >
                      <span className="material-symbols-outlined">call</span>
                      <span>مشاوره و ارزیابی سی‌تی‌اسکن (CBCT)</span>
                    </a>
                    <span className="text-sm text-[#565e74]">
                      امکان شرایط پرداخت مرحله‌ای برای بیماران گرامی
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white relative">
                    <img
                      className="w-full h-96 object-cover"
                      alt="بخش جراحی مجهز کلینیک پارمیس"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKrSgjql8rQcv4RpNnfwiyScrKVDXboKzRM8s46NNk6CUSJyMzttK1piNpxJ7LvMiPma4D9S1oI_701T0QOHVjb_7eppM26KWUqIbnMRylAfXytkFHHuT8viiGJvpHpdNswei0yDvY_bjz5g93Z5pieOZfZoXvZrPZqDTPIxD_oA5UEgcGC6WZOA17Yy_Te2zR2aGIRQVLEXR2aTypHuT4jVasZGIrImiqO8pwmx-wFJWBjSiI5K3u"
                    />
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-[#c3c6d7]/30 text-[#191c1e]">
                      <p className="text-sm font-bold">بخش جراحی مجهز کلینیک پارمیس</p>
                      <p className="text-sm text-[#565e74]">پاکدشت • مجتمع پزشکی راستین</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: فرآیند ۴ مرحله‌ای درمان */}
        <section className="py-16 bg-[#f7f9fb]" id="journey">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004ac6]/10 text-[#004ac6] text-xs font-semibold mb-3">
                <span className="material-symbols-outlined text-base">route</span>
                <span>مسیر شفاف درمان</span>
              </div>
              <h2 className="text-[2.25rem] text-[#191c1e] font-bold leading-[1.25]">
                مراحل مراجعه و انجام خدمات در کلینیک پارمیس
              </h2>
              <p className="text-base text-[#565e74] mt-2">
                ما فرآیند درمان را از نخستین تماس تا چکاپ‌های سالیانه به شکلی منسجم، شفاف و بدون
                معطلی طراحی کرده‌ایم.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 relative flex flex-col hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#004ac6] text-white text-xl font-bold flex items-center justify-center mb-4">
                  ۱
                </div>
                <h3 className="text-xl font-bold text-[#191c1e] mb-2">معاینه و ارزیابی دیجیتال</h3>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  بررسی دقیق بالینی توسط دکتر شمسپور همراه با عکس‌برداری دیجیتال داخل‌دهانی، ثبت
                  تاریخچه دندانی و بررسی سلامت عمومی بافت‌ها.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 relative flex flex-col hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#004ac6] text-white text-xl font-bold flex items-center justify-center mb-4">
                  ۲
                </div>
                <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                  طرح درمان و شفافیت هزینه
                </h3>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  تنظیم نقشه درمانی گام‌به‌گام با اولویت‌بندی رفع درد و پوسیدگی‌ها، برآورد دقیق
                  تعرفه‌ها و تعیین جلسات بر اساس زمان آزاد بیمار.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 relative flex flex-col hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#004ac6] text-white text-xl font-bold flex items-center justify-center mb-4">
                  ۳
                </div>
                <h3 className="text-xl font-bold text-[#191c1e] mb-2">اجرای درمان بدون درد</h3>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  انجام درمان با جدیدترین متدهای بی‌حسی موضعی در محیطی کاملاً آرام‌بخش و رعایت تمام
                  ضوابط استریلیزاسیون استاندارد بیمارستانی.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#c3c6d7]/30 relative flex flex-col hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-full bg-[#004ac6] text-white text-xl font-bold flex items-center justify-center mb-4">
                  ۴
                </div>
                <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                  پیگیری و چکاپ‌های دوره‌ای
                </h3>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  پشتیبانی مداوم پس از اتمام کار، ارائه آموزش‌های مراقبت بهداشتی خانگی و یادآوری
                  دوره‌ای جلسات پولیش و چکاپ رایگان.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: گالری قبل و بعد نمونه‌کارها */}
        <section className="py-16 bg-white border-t border-[#c3c6d7]/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004ac6]/10 text-[#004ac6] text-xs font-semibold mb-3">
                  <span className="material-symbols-outlined text-base">photo_camera</span>
                  <span>نتایج ملموس درمانی</span>
                </div>
                <h2 className="text-[2.25rem] text-[#191c1e] font-bold leading-[1.25]">
                  نمونه درمان‌ها و اصلاح طرح لبخند
                </h2>
                <p className="text-base text-[#565e74] mt-2">
                  مشاهده تغییرات واقعی مراجعین کلینیک دندان‌پزشکی پارمیس در پاکدشت
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <span className="text-xs font-semibold text-[#565e74] bg-[#f2f4f6] px-4 py-2 rounded-full">
                  تمامی موارد توسط دکتر انوشیروان شمسپور درمان شده‌اند
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Case 1 */}
              <div className="bg-[#f7f9fb] rounded-2xl overflow-hidden border border-[#c3c6d7]/30 shadow-xs">
                <div className="relative h-64 bg-[#eceef0]">
                  <img
                    className="w-full h-full object-cover"
                    alt="لمینت سرامیکی ۸ واحد فک بالا"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCioVjJJbB0DFi3SgkPXEaBTf930azAPoIw1Ju5twRjN1YFHVmKYbtj2Rv_qdMT8h_d72VpnS-ax1Y2KQ4Kd9TDfrUppg6mBkzWlsIGylxESl6Je9kW4fjvoeEoHr7bpxAa71BWpRqfONNOBanzkk8I9s0beiz520cWc3oPz_WwxneLTTTTZf2c7a3oErEDinJjx2K0Hj0-6R9cHb5fuO-mTwkbCsL0-6nzH6kUEJqvKPvwZNOZL_T"
                  />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-xs text-[#191c1e] text-xs font-bold px-2.5 py-1 rounded-full">
                    قبل و بعد
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-[#191c1e] mb-1">
                    لمینت سرامیکی ۸ واحد فک بالا
                  </h4>
                  <p className="text-sm text-[#565e74] mb-3">
                    اصلاح به هم ریختگی، رفع زردی ژنتیکی و ایجاد تقارن لبخند هالیوودی
                  </p>
                  <div className="flex items-center justify-between text-sm text-[#004ac6] pt-3 border-t border-[#c3c6d7]/20">
                    <span>مدت درمان: ۲ جلسه</span>
                    <span className="font-bold">ماندگاری دائمی</span>
                  </div>
                </div>
              </div>

              {/* Case 2 */}
              <div className="bg-[#f7f9fb] rounded-2xl overflow-hidden border border-[#c3c6d7]/30 shadow-xs">
                <div className="relative h-64 bg-[#eceef0]">
                  <img
                    className="w-full h-full object-cover"
                    alt="ونیر کامپوزیت و بستن فاصله دیاستم"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrgklw83ZmNVYqt8R2hr5E8kATtmxJWfSv4I-OwmgTKkQ6b8pKRT4j4hwtaW5mwgU9_wZL-DTAtNwmQYpyVB02SLZktCa8MYz3TZUcN_O6AoUREIELY7q74RaOuGzVgfWuQWicEtb0fH-NOmL2PcHf2xZqwRoGuf-RUqvGjj8XnmIzdOkl2mTntycVVhhC5JaxI-EndZXiBNqqTcI5tGMHAztxSWDsRRq2eikmFSEDZ9-BpnmwY1aJ"
                  />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-xs text-[#191c1e] text-xs font-bold px-2.5 py-1 rounded-full">
                    قبل و بعد
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-[#191c1e] mb-1">
                    ونیر کامپوزیت و بستن فاصله دیاستم
                  </h4>
                  <p className="text-sm text-[#565e74] mb-3">
                    ترمیم لب‌پریدگی دندان‌های پیشین بدون هیچ‌گونه تراش بافت مینا
                  </p>
                  <div className="flex items-center justify-between text-sm text-[#004ac6] pt-3 border-t border-[#c3c6d7]/20">
                    <span>مدت درمان: ۱ جلسه</span>
                    <span className="font-bold">بدون تراش</span>
                  </div>
                </div>
              </div>

              {/* Case 3 */}
              <div className="bg-[#f7f9fb] rounded-2xl overflow-hidden border border-[#c3c6d7]/30 shadow-xs">
                <div className="relative h-64 bg-[#eceef0]">
                  <img
                    className="w-full h-full object-cover"
                    alt="کاشت ایمپلنت فوری همراه با روکش زیرکونیا"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYC5blPJSl6zXH9hFFf8ceNH_EgJDcY_6PcfJYX3ENM1zBRF69OU_QmTcAZuvHXDdR_5qI4YAx1kzM9yKrKjxt420cnFys1kU0QBOOx4tycE-6HM5HqzlA9euQHELcWHbLezR9OGv3Xfb03U0HYcBMR2F7UeQJA7srwqCVaL4KEgBZLVF8r_pKm50ljVP1YTAPGwnOobNhcBHmVcNNjjWeggm1rPuRu8l1D1FQrigOyvSjkhbOJwtY"
                  />
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-xs text-[#191c1e] text-xs font-bold px-2.5 py-1 rounded-full">
                    قبل و بعد
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="text-xl font-bold text-[#191c1e] mb-1">
                    کاشت ایمپلنت فوری همراه با روکش زیرکونیا
                  </h4>
                  <p className="text-sm text-[#565e74] mb-3">
                    جایگزینی دندان شکسته قدامی با روکش تمام‌سرامیک هماهنگ با دندان‌های طبیعی
                  </p>
                  <div className="flex items-center justify-between text-sm text-[#004ac6] pt-3 border-t border-[#c3c6d7]/20">
                    <span>ایمپلنت سوئیسی</span>
                    <span className="font-bold">تحویل فوری</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: سوالات متداول مراجعین */}
        <section className="py-16 bg-[#f7f9fb]" id="faq">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004ac6]/10 text-[#004ac6] text-xs font-semibold mb-3">
                <span className="material-symbols-outlined text-base">help</span>
                <span>پاسخ به ابهامات پرتکرار</span>
              </div>
              <h2 className="text-[2.25rem] text-[#191c1e] font-bold leading-[1.25]">
                پرسش‌های متداول درباره خدمات درمان و زیبایی
              </h2>
              <p className="text-base text-[#565e74] mt-2">
                اگر پاسخ سوال خود را نیافتید، با شماره کلینیک تماس بگیرید تا کارشناسان ما شما را
                راهنمایی کنند.
              </p>
            </div>

            <div className="space-y-4">
              {desktopFaqs.map((faq, idx) => {
                const isOpen = openDesktopFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-[#c3c6d7]/30 shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenDesktopFaq(isOpen ? null : idx)}
                      className="w-full text-xl font-bold text-[#191c1e] flex items-center justify-between cursor-pointer text-right"
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`material-symbols-outlined text-[#004ac6] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    {isOpen && (
                      <p className="text-base text-[#565e74] mt-3 leading-relaxed">{faq.a}</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 7: بنر نهایی فراخوان نوبت‌دهی */}
        <section className="py-14 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-r from-[#004ac6] via-[#2563eb] to-[#196fc0] rounded-3xl p-8 lg:p-12 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10 max-w-2xl text-right">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-4">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span>پاکدشت، مجتمع پزشکی راستین • طبقه اختصاصی پارمیس</span>
                </div>
                <h2 className="text-[2.25rem] font-extrabold mb-3 leading-tight">
                  لبخندی بی‌نقص، سالم و درخشان را با اطمینان تجربه کنید
                </h2>
                <p className="text-[1.125rem] opacity-90 leading-relaxed">
                  جهت مشاوره تلفنی رایگان با تیم تخصصی دکتر انوشیروان شمسپور و رزرو وقت ویزیت،
                  هم‌اکنون با ما در تماس باشید.
                </p>
              </div>
              <div className="relative z-10 flex items-center gap-4 shrink-0">
                <a
                  href={`tel:${CLINIC_INFO.phone2}`}
                  className="px-8 py-4 rounded-full bg-white hover:bg-[#f2f4f6] text-[#004ac6] text-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                >
                  <span className="material-symbols-outlined text-2xl">call</span>
                  <span>تماس: {CLINIC_INFO.phoneCompact2}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
