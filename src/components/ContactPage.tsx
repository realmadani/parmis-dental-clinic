import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData.ts';

interface ContactPageProps {
  onNavigateHome: () => void;
  onNavigateServices?: () => void;
  onNavigateGallery?: () => void;
  onNavigateBlog?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const FAQS = [
    {
      q: 'نحوه هماهنگی نوبت ویزیت در کلینیک پارمیس به چه صورت است؟',
      a: 'در کلینیک دندان‌پزشکی دکتر انوشیروان شمس‌پور، به منظور احترام به وقت مراجعین عزیز و جلوگیری از هرگونه معطلی در سالن انتظار، نوبت‌دهی آنلاین حذف شده و صرفاً از طریق تماس تلفنی مستقیم با خطوط ویژه ۰۲۱۳۶۰۴۸۵۸۱ و ۰۲۱۳۶۰۴۸۵۸۲ انجام می‌پذیرد تا منشی کلینیک دقیق‌ترین زمان خالی را متناسب با برنامه زمانی شما ثبت و فیکس نماید.',
    },
    {
      q: 'در صورت مواجهه با درد شدید و نیاز به خدمات اورژانسی چه باید کرد؟',
      a: 'بیماران دارای درد حاد دندانی یا تورم، در اولویت تریاژ کلینیک قرار داشته و در همان روز بدون معطلی پذیرش می‌شوند. لطفاً قبل از حرکت با شماره‌های ۰۲۱۳۶۰۴۸۵۸۱ یا ۰۲۱۳۶۰۴۸۵۸۲ تماس حاصل فرمایید تا تمهیدات لازم جهت استقرار فوری بر روی یونیت فراهم گردد.',
    },
    {
      q: 'قرارداد بیمه‌های تکمیلی و ارائه فاکتور رسمی به چه شکل است؟',
      a: 'کلیه فاکتورها، شرح خدمات و گواهی‌های دندان‌پزشکی با مهر رسمی دکتر انوشیروان شمس‌پور به همراه عکس رادیوگرافی قبل و بعد صادر می‌شود تا مراجعین محترم بتوانند ۱۰۰٪ سهم بیمه‌های تکمیلی معتبر (ایران، دانا، آسیا، البرز، آتیه‌سازان و...) را دریافت نمایند.',
    },
    {
      q: 'آیا جلسه اول معاینه و مشاوره زیبایی هزینه دارد؟',
      a: 'خیر؛ جلسه اول معاینه بالینی، بررسی وضعیت دندان‌ها، ارزیابی عکس رادیوگرافی و برآورد طرح درمان کامپوزیت، لمینت یا ایمپلنت در کلینیک پارمیس پاکدشت کاملاً رایگان است.',
    },
    {
      q: 'آیا مجتمع پزشکی راستین دارای آسانسور برای تردد سالمندان و کالسکه است؟',
      a: 'بله، ورودی مجتمع پزشکی راستین کاملاً هم‌سطح خیابان بوده و مجهز به آسانسور استاندارد با ظرفیت مناسب جهت تردد سالمندان، مراجعین با ویلچر یا کالسکه تا درب کلینیک پارمیس در طبقه دوم می‌باشد.',
    },
  ];

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen selection:bg-[#dbe1ff] selection:text-[#004ac6] text-right">
      {/* ================= 1. HERO HEADER SECTION ================= */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 bg-gradient-to-b from-[#004ac6]/10 via-[#f7f9fb] to-[#f7f9fb]">
        {/* Ambient background glow */}
        <div className="absolute -top-20 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-[#004ac6]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-16 w-72 h-72 bg-[#2563eb]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dae2fd]/70 text-[#004ac6] text-xs font-bold shadow-xs border border-[#004ac6]/15">
              <span className="w-2 h-2 rounded-full bg-[#004ac6] animate-pulse" />
              <span>مجتمع پزشکی راستین • مرکز تخصصی پاکدشت</span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#191c1e] leading-tight tracking-tight">
              تماس با ما و دسترسی حضوری به <br className="hidden sm:inline" />
              <span className="text-[#004ac6]">کلینیک دندان‌پزشکی پارمیس</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base text-[#565e74] leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              پذیرای مراجعین گرامی از پاکدشت، فرون‌آباد، قیام‌دشت، شریف‌آباد، مامازند، ورامین و ساکنین شرق استان تهران. تجربه درمانی آرام، مجهز به مدرن‌ترین دستگاه‌های تصویربرداری و ایمپلنت زیر نظر دکتر انوشیروان شمس‌پور.
            </p>

            {/* Mobile Trust Badges Carousel Bar */}
            <div className="flex md:hidden items-center justify-center gap-2 overflow-x-auto py-1 no-scrollbar text-[11px] font-semibold text-[#565e74]">
              <span className="whitespace-nowrap px-3 py-1 rounded-full bg-white border border-[#c3c6d7]/40 flex items-center gap-1 shadow-2xs">
                <span className="material-symbols-outlined text-[15px] text-[#004ac6]">chair</span>
                <span>امکانات رفاهی کلینیک</span>
              </span>
              <span className="whitespace-nowrap px-3 py-1 rounded-full bg-white border border-[#c3c6d7]/40 flex items-center gap-1 shadow-2xs">
                <span className="material-symbols-outlined text-[15px] text-[#004ac6]">elevator</span>
                <span>آسانسور فعال</span>
              </span>
              <span className="whitespace-nowrap px-3 py-1 rounded-full bg-white border border-[#c3c6d7]/40 flex items-center gap-1 shadow-2xs">
                <span className="material-symbols-outlined text-[15px] text-[#004ac6]">local_parking</span>
                <span>فضای مناسب پارک خودرو</span>
              </span>
            </div>
          </div>

          {/* ================= 2. 4 RAPID ACCESS INFO CARDS (Bento Grid) ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-12">
            {/* Card 1: Address */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-xs hover:shadow-md border border-[#c3c6d7]/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#191c1e] mb-2">نشانی دقیق مطب</h3>
                <p className="text-xs sm:text-sm text-[#565e74] leading-relaxed">
                  پاکدشت، بلوار شهدای قمی، میدان علی ابن ابیطالب، ابتدای بلوار علی ابن ابیطالب، <strong className="text-[#191c1e]">مجتمع پزشکی راستین</strong>، طبقه دوم، کلینیک دندان‌پزشکی پارمیس
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f2f4f6] text-xs text-[#004ac6] font-bold flex items-center justify-between">
                <span>طبقه دوم با آسانسور فعال</span>
                <span className="material-symbols-outlined text-sm">elevator</span>
              </div>
            </div>

            {/* Card 2: Direct Phone & WhatsApp */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-xs hover:shadow-md border border-[#c3c6d7]/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#004ac6] text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">phone_in_talk</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#191c1e] mb-2">تلفن و پیام‌رسان</h3>
                <p className="text-xs text-[#565e74] mb-3 leading-relaxed">
                  خط ویژه پذیرش، هماهنگی نوبت و مشاوره رایگان درمان:
                </p>
                <div className="space-y-1.5 font-bold dir-ltr text-right">
                  <a
                    className="text-[#004ac6] hover:text-[#003896] text-base sm:text-lg block transition-colors tracking-wide"
                    href="tel:02136048581"
                  >
                    ۰۲۱۳۶۰۴۸۵۸۱
                  </a>
                  <a
                    className="text-[#004ac6] hover:text-[#003896] text-base sm:text-lg block transition-colors tracking-wide"
                    href="tel:02136048582"
                  >
                    ۰۲۱۳۶۰۴۸۵۸۲
                  </a>
                  <a
                    className="text-emerald-600 hover:text-emerald-700 text-xs sm:text-sm flex items-center justify-end gap-1.5"
                    href="https://wa.me/989120802253"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>۰۹۱۲۰۸۰۲۲۵۳ (پشتیبانی واتساپ)</span>
                    <span className="material-symbols-outlined text-base">chat</span>
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f2f4f6]">
                <a
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#004ac6]/10 text-[#004ac6] hover:bg-[#004ac6] hover:text-white rounded-full text-xs font-bold transition-all active:scale-95"
                  href={`tel:${CLINIC_INFO.phone}`}
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  <span>برقراری تماس فوری تلفنی</span>
                </a>
              </div>
            </div>

            {/* Card 3: Working Hours */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-xs hover:shadow-md border border-[#c3c6d7]/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#00569c]/10 text-[#00569c] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">schedule</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#191c1e] mb-2">ساعات کاری و پذیرش</h3>
                <div className="text-xs text-[#565e74] space-y-2 mt-2">
                  <div className="flex items-center justify-between">
                    <span>شنبه تا چهارشنبه:</span>
                    <span className="font-bold text-[#191c1e] dir-ltr">۹:۰۰ الی ۲۱:۰۰</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>پنج‌شنبه‌ها:</span>
                    <span className="font-bold text-[#191c1e] dir-ltr">۹:۰۰ الی ۱۶:۰۰</span>
                  </div>
                  <div className="flex items-center justify-between text-[#ba1a1a] font-semibold">
                    <span>جمعه‌ها و تعطیلات:</span>
                    <span>فقط اورژانس با هماهنگی</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f2f4f6] flex items-center gap-1.5 text-xs text-[#565e74] font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>پذیرش فعال در شیفت صبح و عصر</span>
              </div>
            </div>

            {/* Card 4: Facilities & Parking Highlights */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-xs hover:shadow-md border border-[#c3c6d7]/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#565e74]/10 text-[#565e74] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-2xl">local_parking</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#191c1e] mb-2">امکانات رفاهی و دسترسی</h3>
                <p className="text-xs sm:text-sm text-[#565e74] leading-relaxed">
                  دارای فضای مناسب جهت پارک خودرو، مجهز به آسانسور فعال، داروخانه مستقر در مجتمع پزشکی راستین و امکانات رفاهی کامل در داخل کلینیک پارمیس جهت آسایش مراجعین.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#f2f4f6] text-xs text-[#565e74] font-semibold flex items-center gap-1">
                <span className="material-symbols-outlined text-[#004ac6] text-sm">verified</span>
                <span>داروخانه در مجتمع و فضای مناسب پارک</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. TWO-COLUMN MAIN WORKSPACE: MAP & PHONE TRIAGE ================= */}
      <section className="py-8 sm:py-12" id="routing-map">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* RIGHT COLUMN (7 Cols): Map & Routing Apps */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white p-5 sm:p-7 rounded-3xl border border-[#c3c6d7]/30 shadow-xs overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <div>
                    <span className="text-xs font-bold text-[#004ac6] tracking-wider uppercase">
                      موقعیت مکانی و ناوبری
                    </span>
                    <h2 className="text-lg sm:text-2xl font-bold text-[#191c1e]">
                      نقشه و دسترسی به کلینیک پارمیس
                    </h2>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#f2f4f6] text-[#565e74] text-xs rounded-full">
                    <span className="material-symbols-outlined text-xs">my_location</span>
                    <span>پاکدشت • مجتمع راستین</span>
                  </div>
                </div>

                {/* Map Mock Frame with Clinic Pin */}
                <div className="relative w-full h-72 sm:h-84 rounded-2xl overflow-hidden border border-[#c3c6d7]/30 bg-[#eceef0] group shadow-inner">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB26LLXiUBSqIdkqn1rrP-Ik1_Z9qNdE0kzG4UKFVu4M238W5P6ExMJ2BOhE7l2bJHJHmOjweVojlh7E-RC8diPoD6-DdVU5FDgD7u_W9kePjna9sWiNL4hNXc0jAndBGR0LJA7X9smbUY95_sTOV2CxkOc8-vAFvIUTy4TV-idEhogfXu5aUA9A-eppPkPYg-Yjy9-3Wbc3q8tKjP7t4LoandF4YaIZF7V59KTyppg7cXLm8uyMzT4"
                    alt="نقشه هوایی و موقعیت کلینیک دندان‌پزشکی پارمیس در پاکدشت"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Animated Clinic Pin Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto">
                    <div className="animate-bounce mb-1">
                      <div className="bg-[#004ac6] text-white px-3.5 py-1.5 rounded-full shadow-xl text-xs font-bold flex items-center gap-1.5 border-2 border-white">
                        <span className="material-symbols-outlined text-sm">dentistry</span>
                        <span>دندان‌پزشکی پارمیس (دکتر شمس‌پور)</span>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-[#004ac6] rounded-full border-2 border-white shadow-md relative">
                      <span className="absolute -inset-1 rounded-full bg-[#004ac6]/40 animate-ping" />
                    </div>
                  </div>

                  {/* Bottom Map Info Tag */}
                  <div className="absolute bottom-3 right-3 left-3 bg-white/95 backdrop-blur-md p-3 rounded-xl flex items-center justify-between text-xs shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-lg">local_hospital</span>
                      <span className="font-bold text-[#191c1e]">مجتمع پزشکی راستین: دارای داروخانه و آسانسور فعال</span>
                    </div>
                    <span className="text-[#565e74]">طبقه دوم • کلینیک پارمیس</span>
                  </div>
                </div>

                {/* Direct Navigation Apps Action Bar */}
                <div className="mt-6">
                  <p className="text-xs font-bold text-[#565e74] mb-3 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-[#004ac6]">directions</span>
                    <span>انتخاب مسیریاب جهت شروع هدایت ماهواره‌ای خودرو یا تاکسی:</span>
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {/* Neshan */}
                    <a
                      href={CLINIC_INFO.neshanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#f2f4f6] hover:bg-[#dbe1ff]/50 hover:border-[#004ac6] text-[#191c1e] font-semibold text-xs transition-all border border-transparent shadow-2xs hover:scale-[1.02] active:scale-95"
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">N</div>
                      <span>مسیریابی با نشان</span>
                    </a>
                    {/* Balad */}
                    <a
                      href={CLINIC_INFO.baladUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#f2f4f6] hover:bg-[#dbe1ff]/50 hover:border-[#004ac6] text-[#191c1e] font-semibold text-xs transition-all border border-transparent shadow-2xs hover:scale-[1.02] active:scale-95"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold">B</div>
                      <span>مسیریابی با بلد</span>
                    </a>
                    {/* Google Maps */}
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#f2f4f6] hover:bg-[#dbe1ff]/50 hover:border-[#004ac6] text-[#191c1e] font-semibold text-xs transition-all border border-transparent shadow-2xs hover:scale-[1.02] active:scale-95"
                    >
                      <span className="material-symbols-outlined text-rose-500 text-base">pin_drop</span>
                      <span>Google Maps</span>
                    </a>
                    {/* Snapp / Tap30 Taxi */}
                    <a
                      href="https://snapp.ir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#f2f4f6] hover:bg-emerald-50 hover:text-emerald-800 text-[#191c1e] font-semibold text-xs transition-all border border-transparent shadow-2xs hover:scale-[1.02] active:scale-95"
                    >
                      <span className="material-symbols-outlined text-emerald-600 text-base">local_taxi</span>
                      <span>اسنپ / تپسی</span>
                    </a>
                  </div>
                </div>

                {/* Driving & Transit Guidance */}
                <div className="mt-6 pt-5 border-t border-[#f2f4f6] space-y-3">
                  <h4 className="text-sm font-bold text-[#191c1e] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#004ac6] text-base">alt_route</span>
                    <span>راهنمای دسترسی از تهران و مناطق اطراف:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#565e74] leading-relaxed">
                    <div className="p-3.5 rounded-2xl bg-[#f2f4f6]/60 border border-[#c3c6d7]/20">
                      <strong className="text-[#191c1e] block mb-1">مسیر خودرو شخصی از تهران (افسریه):</strong>
                      بزرگراه امام رضا (ع)، عبور از سه‌راه خاورشهر و قیام‌دشت، ورود به پاکدشت، بلوار شهدای قمی، میدان علی ابن ابیطالب، ابتدای بلوار علی ابن ابیطالب، مجتمع پزشکی راستین.
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#f2f4f6]/60 border border-[#c3c6d7]/20">
                      <strong className="text-[#191c1e] block mb-1">مسیر با وسایل حمل‌ونقل عمومی:</strong>
                      پایانه تاکسی و اتوبوس مترو خاوران یا سه‌راه افسریه به مقصد پاکدشت، بلوار شهدای قمی، میدان علی ابن ابیطالب، ابتدای بلوار علی ابن ابیطالب.
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Accreditation Banner */}
              <div className="bg-gradient-to-l from-[#004ac6]/10 via-white to-white p-5 rounded-3xl border border-[#c3c6d7]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#dbe1ff] flex items-center justify-center text-[#004ac6] font-bold text-lg shrink-0">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#191c1e]">دکتر انوشیروان شمس‌پور</h4>
                    <p className="text-xs text-[#565e74] mt-0.5">
                      عضو نظام پزشکی • ارائه‌دهنده پیشرفته‌ترین درمان‌های ایمپلنت و زیبایی در پاکدشت
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="px-5 py-2.5 rounded-full bg-[#004ac6] hover:bg-[#003896] text-white text-xs font-bold transition-all shadow-sm active:scale-95 shrink-0 flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  <span>تماس جهت هماهنگی</span>
                </a>
              </div>
            </div>

            {/* LEFT COLUMN (5 Cols): Direct Phone Triage & No-Online-Booking Notice */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#004ac6]/20 shadow-md relative overflow-hidden">
                {/* Floating Accent Badge */}
                <div className="inline-flex items-center gap-1.5 bg-[#004ac6] text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-sm mb-4">
                  <span className="material-symbols-outlined text-sm">support_agent</span>
                  <span>پذیرش و هماهنگی تلفنی مستقیم</span>
                </div>

                <div className="mb-6 space-y-2">
                  <h3 className="text-lg sm:text-xl font-black text-[#191c1e]">
                    راهنمای دریافت نوبت معاینه و ویزیت
                  </h3>
                  <p className="text-xs sm:text-sm text-[#565e74] leading-relaxed text-justify">
                    در این مرکز برای حفظ احترام به زمان شما و پرهیز از تداخل ساعات و معطلی،{' '}
                    <strong className="text-[#004ac6]">نوبت‌دهی آنلاین وجود ندارد</strong> و تمامی نوبت‌ها صرفاً از طریق گفتگوی تلفنی مستقیم با کادر پذیرش هماهنگ می‌شود.
                  </p>
                </div>

                {/* Primary Fast Call Action */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#004ac6]/5 border border-[#004ac6]/15 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#004ac6]">شماره‌های تماس مستقیم پذیرش مطب:</span>
                      <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>پاسخگویی فعال</span>
                      </span>
                    </div>

                    <div className="space-y-2">
                      <a
                        href="tel:02136048581"
                        className="w-full py-3.5 px-6 rounded-2xl bg-[#004ac6] hover:bg-[#003896] text-white font-black text-base sm:text-lg shadow-md shadow-[#004ac6]/20 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                      >
                        <span className="material-symbols-outlined text-2xl">call</span>
                        <span className="tracking-wider">۰۲۱۳۶۰۴۸۵۸۱</span>
                      </a>
                      <a
                        href="tel:02136048582"
                        className="w-full py-3.5 px-6 rounded-2xl bg-[#004ac6] hover:bg-[#003896] text-white font-black text-base sm:text-lg shadow-md shadow-[#004ac6]/20 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95"
                      >
                        <span className="material-symbols-outlined text-2xl">call</span>
                        <span className="tracking-wider">۰۲۱۳۶۰۴۸۵۸۲</span>
                      </a>
                    </div>

                    <p className="text-[11px] text-[#565e74] text-center">
                      شنبه تا چهارشنبه: ۹ الی ۲۱ | پنج‌شنبه‌ها: ۹ الی ۱۶
                    </p>
                  </div>

                  {/* WhatsApp Consult Action */}
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800">
                      <span className="material-symbols-outlined text-xl">chat</span>
                      <h4 className="text-xs sm:text-sm font-bold">ارسال عکس دندان و مشاوره در واتساپ</h4>
                    </div>

                    <p className="text-xs text-emerald-700 leading-relaxed text-justify">
                      می‌توانید عکس لبخند یا رادیوگرافی (OPG) خود را به واتساپ کلینیک ارسال فرمایید تا برآورد اولیه هزینه و نیاز به تعداد جلسات به شما اعلام گردد.
                    </p>

                    <a
                      href="https://wa.me/989120802253"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
                    >
                      <span className="material-symbols-outlined text-base">send</span>
                      <span>ارسال پیام به واتساپ کلینیک: ۰۹۱۲۰۸۰۲۲۵۳</span>
                    </a>
                  </div>

                  {/* Emergency Triage Notice */}
                  <div className="p-3.5 rounded-2xl bg-[#fff2f2] border border-[#ffdad6] text-right flex items-start gap-2.5">
                    <span className="material-symbols-outlined text-[#ba1a1a] text-lg shrink-0 mt-0.5">
                      emergency
                    </span>
                    <div className="text-xs">
                      <strong className="text-[#ba1a1a] block font-bold mb-0.5">
                        موارد اورژانسی و دندان‌درد حاد:
                      </strong>
                      <span className="text-[#434655] leading-relaxed">
                        بیماران دارای درد شدید بدون نوبت قبلی در اولویت پذیرش قرار می‌گیرند. لطفاً قبل از مراجعه سریعاً با ۰۲۱۳۶۰۴۸۵۸۱ یا ۰۲۱۳۶۰۴۸۵۸۲ تماس بگیرید.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#f2f4f6] flex items-center justify-center gap-2 text-[11px] text-[#565e74]">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">verified</span>
                  <span>کلینیک تخصصی دندان‌پزشکی پارمیس • مجتمع پزشکی راستین پاکدشت</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. SPECIAL CARE FOR COMMUTERS & NEIGHBORING CITIES ================= */}
      <section className="py-12 bg-white border-y border-[#c3c6d7]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-bold text-[#004ac6]">تسهیلات بیماران محترم شهرستان‌های همجوار</span>
            <h2 className="text-lg sm:text-2xl font-bold text-[#191c1e] mt-1">
              خدمات ویژه مراجعین شریف‌آباد، قیام‌دشت، فرون‌آباد و ورامین
            </h2>
            <p className="text-xs sm:text-sm text-[#565e74] mt-1">
              برای مراجعینی که از تهران و شهرهای اطراف تشریف می‌آورند تمهیدات ویژه‌ای در نظر گرفته شده است:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#f7f9fb] p-5 sm:p-6 rounded-3xl border border-[#c3c6d7]/30 flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">event_available</span>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-[#191c1e] mb-1">ویزیت و درمان تک‌جلسه‌ای</h3>
                <p className="text-xs text-[#565e74] leading-relaxed">
                  انجام چند درمان همزمان (جرم‌گیری، ترمیم و عصب‌کشی) در یک نوبت تجمیعی جهت جلوگیری از رفت‌وآمد مکرر بین‌شهری.
                </p>
              </div>
            </div>

            <div className="bg-[#f7f9fb] p-5 sm:p-6 rounded-3xl border border-[#c3c6d7]/30 flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#00569c]/10 text-[#00569c] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">chat_paste_go</span>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-[#191c1e] mb-1">مشاوره با عکس قبل از حرکت</h3>
                <p className="text-xs text-[#565e74] leading-relaxed">
                  امکان ارسال عکس رادیوگرافی (OPG) به واتساپ کلینیک و اعلام هزینه تقریبی و نیاز به تعداد جلسات پیش از مراجعه حضوری.
                </p>
              </div>
            </div>

            <div className="bg-[#f7f9fb] p-5 sm:p-6 rounded-3xl border border-[#c3c6d7]/30 flex items-start gap-4 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#565e74]/10 text-[#565e74] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">local_parking</span>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-[#191c1e] mb-1">فضای پارک مناسب و امکانات رفاهی</h3>
                <p className="text-xs text-[#565e74] leading-relaxed">
                  فضای مناسب جهت پارک خودرو در مجاورت ساختمان، داروخانه مستقر در مجتمع راستین، آسانسور فعال و امکانات رفاهی کامل در داخل کلینیک برای همراهان محترم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. CLINIC FAQ ACCORDION SECTION ================= */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-[#004ac6] font-bold text-xs">پاسخ به ابهامات متداول</span>
            <h2 className="text-lg sm:text-2xl font-bold text-[#191c1e] mt-1">
              پرسش‌های پرتکرار مراجعین مطب پاکدشت
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-[#c3c6d7]/30 shadow-xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between text-right font-bold text-xs sm:text-sm text-[#191c1e] cursor-pointer hover:bg-[#f7f9fb]"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-base">help_outline</span>
                      <span>{faq.q}</span>
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#004ac6] text-lg transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 pt-1 text-xs text-[#565e74] border-t border-[#f2f4f6] leading-relaxed text-justify">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= 6. EMERGENCY CALLOUT BANNER ================= */}
      <section className="py-8 bg-gradient-to-l from-[#004ac6] to-[#2563eb] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-right">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">support_agent</span>
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-bold">نیاز به راهنمایی تلفنی فوری دارید؟</h3>
                <p className="text-xs sm:text-sm text-white/90 mt-0.5">
                  کارشناس پذیرش کلینیک پارمیس در ساعات کاری آماده پاسخگویی و ثبت زمان ویزیت شماست.
                </p>
              </div>
            </div>
            <a
              href={`tel:${CLINIC_INFO.phone2}`}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#004ac6] px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm hover:bg-[#f2f4f6] transition-all shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              <span>تماس مستقیم: {CLINIC_INFO.phoneDisplay2}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
