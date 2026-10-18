import React from 'react';
import { CLINIC_INFO } from '../data/clinicData.ts';

interface AboutPageProps {
  onOpenBooking: (serviceId?: string) => void;
  onNavigateServices: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenBooking,
  onNavigateServices,
}) => {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]">
      {/* ================= MOBILE ABOUT DOCTOR PAGE (< md) ================= */}
      <div className="md:hidden pt-5 pb-12 max-w-lg mx-auto px-4 space-y-7 text-right">
        {/* 1. DOCTOR HERO SECTION */}
        <section
          className="bg-white rounded-[2rem] p-5 shadow-xs border border-[#c3c6d7]/20 relative overflow-hidden"
          id="about-mobile"
        >
          {/* Decorative Backdrop glow */}
          <div className="absolute -top-12 -left-12 w-44 h-44 bg-[#dae2fd]/40 rounded-full blur-2xl pointer-events-none" />

          {/* Eyebrow Chip */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004ac6]/10 text-[#004ac6] text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse" />
            <span>پاکدشت • مجتمع پزشکی راستین • طبقه ۲</span>
          </div>

          {/* Doctor Portrait Container */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md mb-4 bg-[#eceef0]">
            <img
              alt="دکتر انوشیروان شمس پور - کلینیک دندانپزشکی پارمیس پاکدشت"
              className="w-full h-full object-cover object-top"
              src={CLINIC_INFO.doctorImage}
            />
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xs border border-white/60 flex items-center gap-1.5">
              <span className="material-symbols-fill material-symbols-outlined text-[#004ac6] text-base">
                verified
              </span>
              <span className="text-[12px] font-bold text-[#191c1e]">
                عضو سازمان نظام پزشکی
              </span>
            </div>
          </div>

          {/* Headline & Introduction */}
          <h1 className="text-[1.75rem] leading-[1.3] font-bold text-[#191c1e] mb-2 tracking-tight">
            دکتر انوشیروان شمس پور
          </h1>
          <p className="text-sm font-bold text-[#004ac6] mb-3">
            تعهد به سلامت دهان و آفرینش لبخند طبیعی در پاکدشت
          </p>
          <p className="text-sm text-[#565e74] leading-relaxed mb-5 text-justify">
            با بیش از یک دهه سابقه بالینی درخشان در ارائه خدمات تخصصی دهان و دندان، رویکرد ما در
            کلینیک پارمیس متکی بر دندان‌پزشکی کم‌تهاجمی (بیومیمتیک)، حفظ حداکثری بافت طبیعی دندان،
            بهره‌گیری از معتبرترین متریال‌های استاندارد اروپا و به صفر رساندن استرس و درد در طول
            درمان است.
          </p>

          {/* Trust Metrics Badges (Grid 2x2) */}
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            <div className="bg-[#f2f4f6] rounded-2xl p-3 text-center border border-[#c3c6d7]/30">
              <div className="text-[#004ac6] font-bold text-xl leading-[1.4]">+۱۰ سال</div>
              <div className="text-[12px] text-[#565e74] font-medium mt-0.5">
                تجربه بالینی مستمر
              </div>
            </div>
            <div className="bg-[#f2f4f6] rounded-2xl p-3 text-center border border-[#c3c6d7]/30">
              <div className="text-[#004ac6] font-bold text-xl leading-[1.4]">+۵۰۰۰</div>
              <div className="text-[12px] text-[#565e74] font-medium mt-0.5">
                مراجع راضی در پاکدشت
              </div>
            </div>
            <div className="bg-[#f2f4f6] rounded-2xl p-3 text-center border border-[#c3c6d7]/30">
              <div className="text-[#00569c] font-bold text-xl leading-[1.4]">کلاس B</div>
              <div className="text-[12px] text-[#565e74] font-medium mt-0.5">
                استریلیزاسیون بیمارستانی
              </div>
            </div>
            <div className="bg-[#f2f4f6] rounded-2xl p-3 text-center border border-[#c3c6d7]/30">
              <div className="text-[#00569c] font-bold text-xl leading-[1.4]">RVG دیجیتال</div>
              <div className="text-[12px] text-[#565e74] font-medium mt-0.5">
                حداقل تابش اشعه X
              </div>
            </div>
          </div>

          {/* Quick Dual CTA */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="flex-1 flex items-center justify-center gap-2 bg-[#004ac6] text-white py-3 px-4 rounded-full text-xs font-bold shadow-md hover:bg-[#003ea8] active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              <span>تماس: {CLINIC_INFO.phoneCompact}</span>
            </a>
            <a
              href="https://wa.me/989120802253"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#dae2fd] text-[#131b2e] py-3 px-4 rounded-full text-xs font-bold border border-[#c3c6d7]/40 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              <span>مشاوره واتساپ</span>
            </a>
          </div>
        </section>

        {/* 2. CLINICAL PHILOSOPHY (Bento / High-Tactile Cards) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#191c1e]">فلسفه درمان و اصول اخلاقی ما</h2>
            <span className="text-xs text-[#004ac6] font-bold">اصول ۴ گانه</span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {/* Principle 1 */}
            <div className="bg-white p-4 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">sentiment_satisfied</span>
              </div>
              <div>
                <h3 className="text-sm text-[#191c1e] font-bold mb-1">درمان بدون درد و تنش</h3>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  به‌کارگیری بی‌حسی‌های عمیق، تزریق دیجیتال با نیدل‌های بسیار ظریف و محیطی معطر و
                  آرام جهت زدودن کامل فوبیای دندانپزشکی.
                </p>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="bg-white p-4 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">format_image_left</span>
              </div>
              <div>
                <h3 className="text-sm text-[#191c1e] font-bold mb-1">
                  حفظ حداکثری دندان طبیعی (Biomimetic)
                </h3>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  هیچ جایگزینی معادل دندان طبیعی خود فرد نیست. تمام تلاش علمی دکتر شمس پور نجات ریشه
                  و تاج با ترمیم‌های نوین است.
                </p>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="bg-white p-4 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">request_quote</span>
              </div>
              <div>
                <h3 className="text-sm text-[#191c1e] font-bold mb-1">
                  شفافیت کامل در هزینه‌ها و معاینه دقیق
                </h3>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  تشریح کامل طرح درمان به همراه صدور برآورد مالی مکتوب پیش از شروع هر مرحله، بدون
                  هیچ‌گونه هزینه پنهان.
                </p>
              </div>
            </div>

            {/* Principle 4 */}
            <div className="bg-white p-4 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
              </div>
              <div>
                <h3 className="text-sm text-[#191c1e] font-bold mb-1">
                  دانش روز و مواد مصرفی درجه یک اروپا
                </h3>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  استفاده انحصاری از کامپوزیت‌های برندهای سوئیسی و آلمانی و تیتانیوم ایمپلنت‌های
                  دارای تاییدیه‌های معتبر CE و FDA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. STERILIZATION & ADVANCED TECHNOLOGY STANDARDS */}
        <section className="bg-white rounded-[2rem] p-5 border border-[#c3c6d7]/20 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[#004ac6] text-2xl">verified_user</span>
            <h2 className="text-xl font-bold text-[#191c1e]">استانداردهای ضدعفونی و تجهیزات</h2>
          </div>
          <p className="text-sm text-[#565e74] mb-4 leading-relaxed">
            امنیت جانی و سلامت مراجعین اولویت اول کلینیک پارمیس پاکدشت است. بخش استریلیزاسیون (CSR)
            تحت پروتکل‌های سه‌گانه نظارتی فعالیت می‌کند:
          </p>

          <div className="space-y-3">
            {/* Tech Item 1 */}
            <div className="flex items-start gap-3 bg-[#f2f4f6] p-3 rounded-2xl">
              <span className="material-symbols-outlined text-[#004ac6] mt-0.5">sanitizer</span>
              <div>
                <h4 className="text-sm text-[#191c1e] font-bold">اتوکلاو تمام اتوماتیک کلاس B</h4>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  دارای چرخه وکیوم پرقدرت برای استریل کامل ادوات متخلخل و سرتوربین‌ها در دمای ۱۳۴
                  درجه سانتی‌گراد.
                </p>
              </div>
            </div>

            {/* Tech Item 2 */}
            <div className="flex items-start gap-3 bg-[#f2f4f6] p-3 rounded-2xl">
              <span className="material-symbols-outlined text-[#004ac6] mt-0.5">radiology</span>
              <div>
                <h4 className="text-sm text-[#191c1e] font-bold">سنسور رادیوگرافی دیجیتال RVG</h4>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  عکس‌برداری فوری پای یونیت با ۸۰٪ تشعشع کمتر نسبت به فیلم‌های سنتی و دقت میلی‌متری
                  در نمایش ریشه‌ها.
                </p>
              </div>
            </div>

            {/* Tech Item 3 */}
            <div className="flex items-start gap-3 bg-[#f2f4f6] p-3 rounded-2xl">
              <span className="material-symbols-outlined text-[#004ac6] mt-0.5">
                medical_information
              </span>
              <div>
                <h4 className="text-sm text-[#191c1e] font-bold">
                  پک‌های استریل یک‌بار مصرف اختصاصی
                </h4>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  بازگشایی بسته‌بندی استریل اینسترومنت‌ها منحصراً در حضور خود بیمار با نشانگر حرارتی
                  معتبر.
                </p>
              </div>
            </div>

            {/* Tech Item 4 */}
            <div className="flex items-start gap-3 bg-[#f2f4f6] p-3 rounded-2xl">
              <span className="material-symbols-outlined text-[#004ac6] mt-0.5">
                video_camera_front
              </span>
              <div>
                <h4 className="text-sm text-[#191c1e] font-bold">دوربین داخل دهانی HD</h4>
                <p className="text-sm text-[#565e74] leading-relaxed">
                  مشاهده زنده وضعیت پوسیدگی‌ها و مراحل درمان روی مانیتور توسط خود مراجع قبل و بعد از
                  پرکردن.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. CLINIC ENVIRONMENT & CSR GALLERY (Mobile Carousel/Snap) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#191c1e]">محیط آرامش‌بخش کلینیک پارمیس</h2>
              <p className="text-[12px] text-[#565e74]">پاکدشت، مجتمع راستین، طبقه ۲</p>
            </div>
            <div className="flex gap-1 text-[#004ac6] items-center">
              <span className="material-symbols-outlined text-sm">swipe_left</span>
              <span className="text-[11px] font-bold">ورق بزنید</span>
            </div>
          </div>

          {/* Horizontal Scrollable Gallery Container */}
          <div className="flex gap-3 overflow-x-auto pb-2 snap-x-mandatory no-scrollbar -mx-4 px-4">
            {/* Slide 1: Waiting Lounge */}
            <div className="min-w-[82%] sm:min-w-[70%] snap-center-child bg-white rounded-[2rem] overflow-hidden border border-[#c3c6d7]/20 shadow-xs flex flex-col">
              <div className="h-44 w-full bg-[#eceef0] relative">
                <img
                  alt="سالن انتظار کلینیک دندانپزشکی پارمیس پاکدشت"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALmeQlbamUji-FUI-rMJsNkbIHcjwrVWpomSNkz8NTHVCytq75PvtlFVZSGeHClm4xZTuHRHwaxnMYeKsZgQPfEFHqpXZf0yLQoQ9qp13Tx8jliPV-ApUy4uMB-GTchFbskcNEVpcRhuSX5RL8kXGoCMiG-86ggwaIL2aktWwWdgHVxdAIU_w50cmO88G_GkfVtJtPFyZn_VMZd-GsLBznkZzoHFnfh57eMEYuBrRK4xhMtt7_sHUk"
                />
                <span className="absolute top-2 right-2 bg-white/90 text-[#191c1e] text-[11px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
                  سالن انتظار
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-sm text-[#191c1e] font-bold">سالن انتظار دلباز و آرام</h3>
                <p className="text-[#565e74] text-[12px] mt-1 leading-relaxed">
                  محیطی صمیمی همراه با سیستم تهویه مطبوع هوا و موسیقی ملایم برای آرامش همراهان.
                </p>
              </div>
            </div>

            {/* Slide 2: Modern Treatment Operatory */}
            <div className="min-w-[82%] sm:min-w-[70%] snap-center-child bg-white rounded-[2rem] overflow-hidden border border-[#c3c6d7]/20 shadow-xs flex flex-col">
              <div className="h-44 w-full bg-[#eceef0] relative">
                <img
                  alt="اتاق درمان و یونیت دندانپزشکی دکتر شمس پور"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQHnM4JJDLmy0AGxwkcUI6Ph0rZyZpoqBLMMPE4MZYf_bVIaPQ6W6zU-Xmw_0F1p94O8r2go-flLLpGH9kuiPYDPwVzVtoPKiAlpapJWB0I0c89Zludn9oMVPjE1rUWzEgNYv-daZpjlEn28N41H9jMBhikgRLY6WLJ_V3dCh6byWHHDVJfTvfE1QPNpyfEBGeqsLHMxWTrYqO1qUhiWFgfZQAVPQAw3EBmPfxcr0VofMl1fzYC2CD"
                />
                <span className="absolute top-2 right-2 bg-white/90 text-[#191c1e] text-[11px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
                  یونیت درمان
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-sm text-[#191c1e] font-bold">یونیت ارگونومیک هوشمند</h3>
                <p className="text-[#565e74] text-[12px] mt-1 leading-relaxed">
                  طراحی فوم حافظه‌دار صندلی بیمار جهت رفع خستگی ستون فقرات حین درمان‌های طولانی.
                </p>
              </div>
            </div>

            {/* Slide 3: CSR Sterilization Center */}
            <div className="min-w-[82%] sm:min-w-[70%] snap-center-child bg-white rounded-[2rem] overflow-hidden border border-[#c3c6d7]/20 shadow-xs flex flex-col">
              <div className="h-44 w-full bg-[#eceef0] relative">
                <img
                  alt="مرکز استریلیزاسیون مکانیزه کلینیک پارمیس"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByCeCxsASLDxYvCSS9yU8mYjwMjW3kMTWD9IiHssipFF0g3mDI0493vJzuZXUtGvxs96iyIcux1kaJ72tiYBdug8fZlQALf8ejC_Yn4QeMvqH9QoaARvNLoxtXsvlX0LTh8id7lSxdBJVDWmzhcQ0qYI-UfrGNr6RBJwwJpWTp7IWCajHYGFb3ZL75PX_HENWzQJqGCPKnDbYwBq0uam_EPBd_gapLV8rk1i2iMYdCeEpLeLRgw7op"
                />
                <span className="absolute top-2 right-2 bg-[#004ac6] text-white text-[11px] font-bold px-2 py-0.5 rounded-full">
                  مرکز CSR
                </span>
              </div>
              <div className="p-3">
                <h3 className="text-sm text-[#191c1e] font-bold">واحد مکانیزه ضدعفونی</h3>
                <p className="text-[#565e74] text-[12px] mt-1 leading-relaxed">
                  جداسازی کامل خط کثیف و خط تمیز مطابق استانداردهای سخت‌گیرانه وزارت بهداشت.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SERVICES SUMMARY (Under Dr. Shamspoor's Direct Supervision) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#191c1e]">خدمات تحت نظارت دکتر شمس پور</h2>
            <span className="text-xs font-semibold text-[#565e74]">مجتمع راستین</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Service Card 1 */}
            <div
              onClick={onNavigateServices}
              className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex flex-col justify-between cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div>
                <div className="w-9 h-9 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-xl">auto_awesome</span>
                </div>
                <h3 className="text-sm text-[#191c1e] font-bold">ونیر کامپوزیت و لمینت</h3>
                <p className="text-[12px] text-[#565e74] mt-1 leading-normal">
                  طراحی لبخند هالیوودی متناسب با فرم چهره و ماندگاری بالا.
                </p>
              </div>
              <div className="mt-2 text-[#004ac6] font-bold text-[11px] flex items-center gap-0.5">
                <span>اطلاعات بیشتر</span>
                <span className="material-symbols-outlined text-xs">arrow_back</span>
              </div>
            </div>

            {/* Service Card 2 */}
            <div
              onClick={onNavigateServices}
              className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex flex-col justify-between cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div>
                <div className="w-9 h-9 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-xl">dentistry</span>
                </div>
                <h3 className="text-sm text-[#191c1e] font-bold">ایمپلنت و کاشت دندان</h3>
                <p className="text-[12px] text-[#565e74] mt-1 leading-normal">
                  جایگزینی ریشه با فیکسچرهای استاندارد مادام‌العمر بدون تحلیل لثه.
                </p>
              </div>
              <div className="mt-2 text-[#004ac6] font-bold text-[11px] flex items-center gap-0.5">
                <span>اطلاعات بیشتر</span>
                <span className="material-symbols-outlined text-xs">arrow_back</span>
              </div>
            </div>

            {/* Service Card 3 */}
            <div
              onClick={onNavigateServices}
              className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex flex-col justify-between cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div>
                <div className="w-9 h-9 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-xl">healing</span>
                </div>
                <h3 className="text-sm text-[#191c1e] font-bold">عصب‌کشی تخصصی (روتاری)</h3>
                <p className="text-[12px] text-[#565e74] mt-1 leading-normal">
                  درمان بدون درد ریشه دندان با فایل‌های چرخشی دقیق در یک جلسه.
                </p>
              </div>
              <div className="mt-2 text-[#004ac6] font-bold text-[11px] flex items-center gap-0.5">
                <span>اطلاعات بیشتر</span>
                <span className="material-symbols-outlined text-xs">arrow_back</span>
              </div>
            </div>

            {/* Service Card 4 */}
            <div
              onClick={onNavigateServices}
              className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/20 shadow-xs flex flex-col justify-between cursor-pointer active:scale-[0.98] transition-transform"
            >
              <div>
                <div className="w-9 h-9 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-xl">child_care</span>
                </div>
                <h3 className="text-sm text-[#191c1e] font-bold">دندانپزشکی ترمیمی و اطفال</h3>
                <p className="text-[12px] text-[#565e74] mt-1 leading-normal">
                  پرکردن همرنگ دندان، فلورایدتراپی و مراقبت دندان‌های شیری با حوصله.
                </p>
              </div>
              <div className="mt-2 text-[#004ac6] font-bold text-[11px] flex items-center gap-0.5">
                <span>اطلاعات بیشتر</span>
                <span className="material-symbols-outlined text-xs">arrow_back</span>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PATIENT TESTIMONIALS (Pakdasht Community Reviews) */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#191c1e]">
                تجربه و نظر همشهریان در پاکدشت
              </h2>
              <p className="text-[12px] text-[#565e74]">نظرات واقعی مراجعین کلینیک پارمیس</p>
            </div>
            <div className="flex items-center gap-0.5 text-amber-500">
              <span className="material-symbols-fill material-symbols-outlined text-sm">star</span>
              <span className="text-xs font-bold text-[#191c1e]">۴.۹</span>
            </div>
          </div>

          <div className="space-y-2.5">
            {/* Review 1 */}
            <div className="bg-white p-4 rounded-2xl border border-[#c3c6d7]/20 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center font-bold text-xs">
                    م.ر
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#191c1e] block">مهدی رضایی</span>
                    <span className="text-[11px] text-[#565e74]">
                      ساکن پاکدشت (مامازند) • کامپوزیت زیبایی
                    </span>
                  </div>
                </div>
                <div className="flex text-amber-400 text-xs">★★★★★</div>
              </div>
              <p className="text-sm text-[#565e74] leading-relaxed">
                «من سال‌ها از دندان‌پزشکی وحشت داشتم، اما صبوری و اخلاق حرفه‌ای دکتر شمس پور واقعاً
                فوق‌العاده بود. برای درمان دندان عصب‌کشی و روکش حتی سرسوزنی درد حس نکردم. محیط
                کلینیک هم فوق‌العاده تمیز و باکلاسه.»
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-4 rounded-2xl border border-[#c3c6d7]/20 shadow-xs">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#00569c]/10 text-[#00569c] flex items-center justify-center font-bold text-xs">
                    س.م
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#191c1e] block">سارا مشفق</span>
                    <span className="text-[11px] text-[#565e74]">
                      ساکن شهرک دانشگاه • کاشت ایمپلنت
                    </span>
                  </div>
                </div>
                <div className="flex text-amber-400 text-xs">★★★★★</div>
              </div>
              <p className="text-sm text-[#565e74] leading-relaxed">
                «برای ایمپلنت دوتا دندونم خیلی تحقیق کرده بودم تا تهران نرم. خوشبختانه کلینیک پارمیس
                توی پاکدشت مجتمع راستین بهترین انتخاب بود؛ رادیوگرافی دقیق خودشون داشتن و همه‌چیز
                کاملا استریل و پک شده بود.»
              </p>
            </div>
          </div>
        </section>

        {/* 7. LOCATION, MAP & CLINIC DETAILS (Pakdasht Rastin Medical Complex) */}
        <section
          className="bg-white rounded-[2rem] p-5 border border-[#c3c6d7]/20 shadow-xs space-y-4"
          id="location-mobile"
        >
          <div className="flex items-center gap-2">
            <span className="material-symbols-fill material-symbols-outlined text-[#004ac6] text-2xl">
              location_on
            </span>
            <div>
              <h2 className="text-xl font-bold text-[#191c1e]">موقعیت و اطلاعات دسترسی</h2>
              <p className="text-[12px] text-[#565e74]">پاکدشت، مجتمع پزشکی راستین</p>
            </div>
          </div>

          {/* Detail Chips */}
          <div className="space-y-2 text-sm text-[#191c1e]">
            <div className="flex items-start gap-2.5 bg-[#f2f4f6] p-3 rounded-2xl">
              <span className="material-symbols-outlined text-[#004ac6] shrink-0 text-lg">
                pin_drop
              </span>
              <span>
                <strong>آدرس:</strong> پاکدشت، بلوار شهدای قمی، میدان علی ابن ابیطالب، ابتدای بلوار علی ابن ابیطالب، مجتمع پزشکی راستین، طبقه دوم، کلینیک دندان‌پزشکی پارمیس
              </span>
            </div>

            <div className="flex items-center gap-2.5 bg-[#f2f4f6] p-3 rounded-2xl">
              <span className="material-symbols-outlined text-[#004ac6] shrink-0 text-lg">
                schedule
              </span>
              <span>
                <strong>ساعات کاری:</strong> همه‌روزه (شنبه تا پنجشنبه) از ساعت ۹:۰۰ الی ۲۱:۰۰
              </span>
            </div>

            <div className="flex items-center justify-between bg-[#f2f4f6] p-3 rounded-2xl">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#004ac6] shrink-0 text-lg">
                  phone_in_talk
                </span>
                <div>
                  <strong className="block mb-0.5">تلفن مستقیم:</strong>
                  <a href="tel:02136048581" className="block font-bold text-[#004ac6] dir-ltr text-right">
                    ۰۲۱۳۶۰۴۸۵۸۱
                  </a>
                  <a href="tel:02136048582" className="block font-bold text-[#004ac6] dir-ltr text-right">
                    ۰۲۱۳۶۰۴۸۵۸۲
                  </a>
                </div>
              </div>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-3 py-1 bg-[#004ac6] text-white rounded-full text-xs font-semibold"
              >
                تماس
              </a>
            </div>
          </div>

          {/* Map Simulation with Direct Routing */}
          <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-[#c3c6d7]/30 shadow-inner">
            <img
              alt="نقشه دسترسی به مجتمع پزشکی راستین پاکدشت"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX-sCLjgp6CiElYppxmaBD1VhNQJhEasfBm6x9xNHFY0h35xyq0eOlG7kes2tOmjQ8zd88WKLtwP-CzWHFevjqo2G4bqn_Ig4d59psxRTL1u-Pn1ITt7jjUvVmujO4ZcgiKz-BNJVscdns-c7Uk_XOFIL_Vni9YeisKiRvKwFBA1mlGmQ7bpG0lYPzha6OVy102vydJMFb2LI-Ojj96Dms9om_iUkkgq6Oaqv8j3KiqaDFNLdbMat5"
            />
            <div className="absolute inset-0 bg-[#004ac6]/10 pointer-events-none" />
            <div className="absolute bottom-2.5 inset-x-2.5 flex gap-2">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-white/95 backdrop-blur-md text-[#191c1e] py-2 rounded-full text-xs font-bold shadow-md hover:bg-[#eceef0] transition-all"
              >
                <span className="material-symbols-outlined text-[#004ac6] text-base">near_me</span>
                <span>مسیریابی در گوگل‌مپ</span>
              </a>
              <a
                href={CLINIC_INFO.neshanUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#2563eb] text-white py-2 rounded-full text-xs font-bold shadow-md active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-base">directions</span>
                <span>مسیریاب نشان</span>
              </a>
            </div>
          </div>
        </section>

        {/* 8. APPOINTMENT RESERVATION ACCORDION CALLOUT */}
        <section
          className="bg-gradient-to-br from-[#2563eb] to-[#004ac6] text-white rounded-[2rem] p-5 shadow-lg relative overflow-hidden"
          id="appointment-mobile"
        >
          <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <h3 className="text-xl font-bold mb-2">رزرو وقت معاینه و مشاوره حضوری</h3>
          <p className="text-sm opacity-90 mb-4 leading-relaxed">
            جهت هماهنگی سریع‌ترین زمان ویزیت توسط دکتر انوشیروان شمس پور، می‌توانید مستقیماً با تلفن
            مطب تماس حاصل فرمایید یا درخواست خود را ثبت کنید.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href={`tel:${CLINIC_INFO.phone2}`}
              className="w-full flex items-center justify-center gap-2 bg-white text-[#004ac6] py-3 rounded-full text-sm font-bold shadow-md active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              <span>تماس فوری: {CLINIC_INFO.phoneDisplay2}</span>
            </a>
          </div>
        </section>
      </div>

      {/* ================= DESKTOP ABOUT DOCTOR PAGE (>= md) ================= */}
      <div className="hidden md:block text-right">
        {/* ==================== HERO SECTION ==================== */}
        <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-white via-[#f7f9fb] to-[#f7f9fb]">
          {/* Subtle Dot Matrix Decorative Vector */}
          <div className="absolute top-12 right-10 w-48 h-48 dot-pattern rounded-full pointer-events-none" />
          <div className="absolute bottom-8 left-16 w-64 h-64 dot-pattern rounded-full pointer-events-none" />

          <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Right Column: Medical Hero Narrative */}
              <div className="lg:col-span-7 flex flex-col items-start gap-5">
                {/* Eyebrow Pill Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#dae2fd]/60 text-[#004ac6] font-semibold text-xs">
                  <span className="w-2 h-2 rounded-full bg-[#004ac6] animate-pulse" />
                  <span>کلینیک تخصصی پارمیس • مجتمع پزشکی راستین پاکدشت</span>
                </div>

                {/* Main Hero Headline */}
                <h1 className="text-[2.25rem] lg:text-[3.5rem] text-[#191c1e] leading-[1.15] font-extrabold">
                  دکتر انوشیروان شمس پور
                  <span className="block text-[#004ac6] mt-1 text-[2.25rem] leading-[1.25] font-bold">
                    تعهد به سلامت دهان و آفرینش لبخند طبیعی در پاکدشت
                  </span>
                </h1>

                {/* Value Description */}
                <p className="text-[1.125rem] text-[#565e74] leading-[1.7] max-w-2xl">
                  سال‌ها تجربه درخشان در ارائه خدمات دندان‌پزشکی با رویکرد بیمارمحور، بهره‌گیری از
                  تجهیزات مدرن دیجیتال و متریال‌های استاندارد جهانی در محیطی صمیمی، آرام و مجهز به
                  سیستم‌های پیشرفته استریلیزاسیون.
                </p>

                {/* Quick Stats Matrix Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full py-2">
                  <div className="bg-white p-3.5 rounded-2xl shadow-xs border border-[#c3c6d7]/30 flex flex-col items-center text-center">
                    <span className="text-xl font-bold text-[#004ac6]">+۱۲ سال</span>
                    <span className="text-xs font-semibold text-[#565e74]">سابقه طبابت بالینی</span>
                  </div>
                  <div className="bg-white p-3.5 rounded-2xl shadow-xs border border-[#c3c6d7]/30 flex flex-col items-center text-center">
                    <span className="text-xl font-bold text-[#004ac6]">+۵۰۰۰</span>
                    <span className="text-xs font-semibold text-[#565e74]">
                      مراجع راضی و درمان موفق
                    </span>
                  </div>
                  <div className="bg-white p-3.5 rounded-2xl shadow-xs border border-[#c3c6d7]/30 flex flex-col items-center text-center">
                    <span className="text-xl font-bold text-[#004ac6]">کلاس B</span>
                    <span className="text-xs font-semibold text-[#565e74]">
                      استریل اتوکلاو اروپایی
                    </span>
                  </div>
                  <div className="bg-white p-3.5 rounded-2xl shadow-xs border border-[#c3c6d7]/30 flex flex-col items-center text-center">
                    <span className="text-xl font-bold text-[#004ac6]">دیجیتال RVG</span>
                    <span className="text-xs font-semibold text-[#565e74]">
                      کمترین دوز تابش اشعه
                    </span>
                  </div>
                </div>

                {/* Conversion Pathways CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#2563eb] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-[#004ac6]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span className="material-symbols-fill material-symbols-outlined">
                      calendar_month
                    </span>
                    <span>رزرو تلفنی نوبت: {CLINIC_INFO.phoneCompact}</span>
                  </a>
                  <a
                    href="#philosophy"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-[#004ac6]/30 text-[#004ac6] font-bold text-sm px-6 py-3.5 rounded-full hover:bg-[#004ac6]/5 transition-all"
                  >
                    <span>آشنایی با متدولوژی درمان</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                  </a>
                </div>

                {/* Trust Sub-badge */}
                <div className="flex items-center gap-3 pt-2 text-[#565e74] text-sm">
                  <span className="flex items-center text-[#004ac6]">
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      verified
                    </span>
                  </span>
                  <span>شماره نظام پزشکی معتبر | عضو پیوسته انجمن دندان‌پزشکان ایران</span>
                </div>
              </div>

              {/* Left Column: Organic Doctor & Clinic Visual Card */}
              <div className="lg:col-span-5 relative flex justify-center">
                {/* Background Organic Aura */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#004ac6]/10 to-[#dae2fd]/50 rounded-3xl filter blur-2xl -z-10" />
                <div className="relative w-full max-w-md bg-white rounded-3xl p-3 shadow-xl border border-[#c3c6d7]/20">
                  {/* Doctor Main Image */}
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-[#f2f4f6]">
                    <img
                      alt="دکتر انوشیروان شمس پور"
                      className="w-full h-full object-cover"
                      src={CLINIC_INFO.doctorImage}
                    />
                    {/* Subtle bottom gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="text-xl font-bold">دکتر انوشیروان شمس پور</span>
                      <span className="text-sm text-[#eeefff] opacity-90">
                        موسس و سرپرست درمان مطب پارمیس پاکدشت
                      </span>
                    </div>
                  </div>

                  {/* Floating Trust Pill: Top Left */}
                  <div className="absolute -top-4 -left-4 bg-white text-[#191c1e] px-4 py-2.5 rounded-2xl shadow-lg border border-[#c3c6d7]/20 flex items-center gap-3 animate-dental-float">
                    <div className="w-9 h-9 rounded-xl bg-[#004ac6]/10 flex items-center justify-center text-[#004ac6]">
                      <span className="material-symbols-fill material-symbols-outlined">
                        shield_person
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#191c1e]">
                        مشاوره تخصصی و صادقانه
                      </div>
                      <div className="text-[11px] text-[#565e74]">
                        حفظ حداکثری بافت طبیعی دندان
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Pill: Bottom Right */}
                  <div className="absolute -bottom-4 -right-4 bg-white text-[#191c1e] px-4 py-2.5 rounded-2xl shadow-lg border border-[#c3c6d7]/20 flex items-center gap-3 animate-dental-float">
                    <div className="w-9 h-9 rounded-xl bg-[#00569c]/10 flex items-center justify-center text-[#00569c] animate-dental-pulse">
                      <span className="material-symbols-fill material-symbols-outlined">
                        health_and_safety
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold text-[#191c1e]">
                        استریلیزاسیون سه‌مرحله‌ای
                      </div>
                      <div className="text-[11px] text-[#565e74]">
                        پک‌های کاملاً استریل یکبارمصرف
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 5 PILLARS QUICK STRIP ==================== */}
        <section className="py-10 bg-white border-y border-[#c3c6d7]/20">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="flex flex-col items-center text-center gap-2 group">
                <div className="w-14 h-14 rounded-2xl bg-[#dae2fd]/50 text-[#004ac6] flex items-center justify-center group-hover:bg-[#004ac6] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">volunteer_activism</span>
                </div>
                <h4 className="text-sm font-bold text-[#191c1e]">اولویت آرامش بیمار</h4>
                <p className="text-sm text-[#565e74]">تزریق آرام و بدون درد با روان‌بخشی محیط</p>
              </div>

              <div className="flex flex-col items-center text-center gap-2 group">
                <div className="w-14 h-14 rounded-2xl bg-[#dae2fd]/50 text-[#004ac6] flex items-center justify-center group-hover:bg-[#004ac6] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">biotech</span>
                </div>
                <h4 className="text-sm font-bold text-[#191c1e]">فناوری دیجیتال مدرن</h4>
                <p className="text-sm text-[#565e74]">رادیوگرافی RVG و دوربین دقیق داخل‌دهانی</p>
              </div>

              <div className="flex flex-col items-center text-center gap-2 group">
                <div className="w-14 h-14 rounded-2xl bg-[#dae2fd]/50 text-[#004ac6] flex items-center justify-center group-hover:bg-[#004ac6] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">verified_user</span>
                </div>
                <h4 className="text-sm font-bold text-[#191c1e]">متریال اورجینال اروپایی</h4>
                <p className="text-sm text-[#565e74]">
                  کامپوزیت‌ها و ایمپلنت‌های معتبر و استاندارد
                </p>
              </div>

              <div className="flex flex-col items-center text-center gap-2 group">
                <div className="w-14 h-14 rounded-2xl bg-[#dae2fd]/50 text-[#004ac6] flex items-center justify-center group-hover:bg-[#004ac6] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">payments</span>
                </div>
                <h4 className="text-sm font-bold text-[#191c1e]">شفافیت کامل در هزینه‌ها</h4>
                <p className="text-sm text-[#565e74]">توضیح کامل پلن درمان قبل از هرگونه اقدام</p>
              </div>

              <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center gap-2 group">
                <div className="w-14 h-14 rounded-2xl bg-[#dae2fd]/50 text-[#004ac6] flex items-center justify-center group-hover:bg-[#004ac6] group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-[28px]">pin_drop</span>
                </div>
                <h4 className="text-sm font-bold text-[#191c1e]">دسترسی آسان در پاکدشت</h4>
                <p className="text-sm text-[#565e74]">مجتمع پزشکی راستین، قلب درمانی شهر</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== BIOGRAPHY & PHILOSOPHY ==================== */}
        <section className="py-16 lg:py-24 bg-[#f7f9fb]" id="philosophy">
          <div className="w-full max-w-7xl mx-auto px-6">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#004ac6] bg-[#004ac6]/10 px-4 py-1.5 rounded-full inline-block mb-3">
                فلسفه پزشکی و طبابت اخلاق‌مدار
              </span>
              <h2 className="text-[2.25rem] leading-[1.25] text-[#191c1e] font-extrabold mb-4">
                نگاه دکتر شمس پور به درمان دندان‌پزشکی: بازسازی طبیعی، نه فقط درمان مقطعی
              </h2>
              <p className="text-base text-[#565e74]">
                در مطب دندان‌پزشکی پارمیس، درمان دندان یک فرآیند استرس‌زا نیست؛ بلکه بازگرداندن
                آسودگی، سلامت پایدار و حس اعتماد‌به‌نفس در لبخند شماست.
              </p>
            </div>

            {/* Bento-style Layout for Story & Principles */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Story / Background Box (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 shadow-xs border border-[#c3c6d7]/30 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#004ac6] text-[32px]">
                      auto_stories
                    </span>
                    <h3 className="text-2xl font-bold text-[#191c1e]">زندگینامه و مسیر حرفه‌ای</h3>
                  </div>

                  <p className="text-base text-[#434655] leading-relaxed">
                    دکتر انوشیروان شمس پور پس از فارغ‌التحصیلی و اتمام دوره‌های تکمیلی، با هدفی روشن
                    فعالیت تخصصی خود را در پاکدشت پایه‌گذاری نمود: ارتقای سطح سلامت دهان و دندان در
                    منطقه و دسترسی آسان همشهریان عزیز به خدمات دندان‌پزشکی مدرن، دقیق و با بالاترین
                    استانداردهای مراقبتی روز کشور.
                  </p>

                  <p className="text-base text-[#434655] leading-relaxed">
                    باور عمیق دکتر شمس پور بر رویکرد{' '}
                    <span className="font-bold text-[#004ac6]">
                      «دندان‌پزشکی محافظه‌کارانه و بیومیمتیک (حداقل مداخله)»
                    </span>{' '}
                    استوار است؛ به این معنا که اولویت اول و بنیادین در مطب پارمیس، حفظ سلامت و
                    نگهداری دندان طبیعی خود بیمار است و تنها در شرایط اضطرار و پس از ارزیابی کامل
                    دیجیتال، روش‌های جایگزین همچون جراحی و ایمپلنت پیشنهاد می‌گردند.
                  </p>

                  {/* Key Checkmarks */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-fill material-symbols-outlined text-[#004ac6] text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="text-sm text-[#191c1e]">
                        حفظ حداکثری مینا و بافت دندانی
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-fill material-symbols-outlined text-[#004ac6] text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="text-sm text-[#191c1e]">
                        استفاده از پروتکل‌های بی‌حسی بدون درد
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-fill material-symbols-outlined text-[#004ac6] text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="text-sm text-[#191c1e]">
                        آموزش گام‌به‌گام و تصویربرداری زنده حین درمان
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-fill material-symbols-outlined text-[#004ac6] text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <span className="text-sm text-[#191c1e]">
                        پیگیری و چک‌آپ‌های دوره‌ای رایگان
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#c3c6d7]/20 flex items-center justify-between">
                  <div className="text-sm text-[#565e74]">
                    مطب پارمیس، مجتمع راستین، طبقه دوم
                  </div>
                  <div className="text-[#004ac6] font-bold text-sm flex items-center gap-1">
                    <span>مشاهده پروانه طبابت</span>
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                </div>
              </div>

              {/* Right Side: 3 Clinical Pillars (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-5">
                <div className="bg-white rounded-3xl p-6 shadow-xs border border-[#c3c6d7]/30 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[26px]">handshake</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#191c1e] mb-1">
                      مشاوره صادقانه و درمان بدون هزینه زائد
                    </h4>
                    <p className="text-sm text-[#565e74] leading-relaxed">
                      پیش از هرگونه مداخله، تمامی گزینه‌های درمانی به‌همراه معایب، مزایا و هزینه‌ها
                      روی مانیتور برای بیمار تشریح شده و تصمیم نهایی با آگاهی کامل بیمار اتخاذ
                      می‌گردد.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-xs border border-[#c3c6d7]/30 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#dae2fd] text-[#004ac6] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[26px]">
                      sentiment_satisfied
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#191c1e] mb-1">
                      رفع اضطراب و تجربه راحت درمان
                    </h4>
                    <p className="text-sm text-[#565e74] leading-relaxed">
                      محیط آرام، موسیقی ملایم، برخورد محترمانه پرسنل و تکنیک‌های نوین تزریق بدون
                      درد، دلهره و استرس معمول دندان‌پزشکی را برای کودکان و بزرگسالان خنثی می‌کند.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 shadow-xs border border-[#c3c6d7]/30 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-[#d4e3ff] text-[#00569c] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[26px]">medical_services</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#191c1e] mb-1">
                      به‌روزرسانی پیوسته تجهیزات و مهارت‌ها
                    </h4>
                    <p className="text-sm text-[#565e74] leading-relaxed">
                      حضور در جدیدترین سمینارهای علمی، به‌کارگیری تجهیزات روتاری و اپکس‌فایندر در
                      عصب‌کشی و بهره‌مندی از باکیفیت‌ترین کامپوزیت‌های سرامیکی آلمانی و ژاپنی.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CLINIC ENVIRONMENT & INFECTION CONTROL ==================== */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Visual Side (5 cols) */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-xl border border-[#c3c6d7]/30 bg-[#f2f4f6] aspect-[4/3]">
                    <img
                      alt="اتاق درمان و استریلیزاسیون کلینیک پارمیس پاکدشت"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB2u--AumKczVQRqVuabV3T2TPxf4Rm0jYLCNvOm4xgTpmhIaErIh6zg2Mj3roxUOOclAn1V7RtjP6t9GhuTv4X2raeVSY587PCK7A8lByPbJihdDHOrKUjxPeE-6yeknOCHGHnex7HRKqk8j-r_1cBI17HFQC7lntnqsi5vXCGvNKq3tln9k1D2JMyetb1-2tRgndWvdqLbdR5qT7rJgjSsTyP4y6Q2SRK76N_8Ay3DIA6KfgDwPr"
                    />
                  </div>
                  {/* Mini Overlay Card */}
                  <div className="absolute -bottom-6 -left-4 sm:left-6 bg-white p-4 rounded-2xl shadow-xl border border-[#c3c6d7]/30 max-w-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center">
                        <span className="material-symbols-fill material-symbols-outlined">
                          sanitizer
                        </span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#191c1e]">
                          استریلیزاسیون ۱۰۰٪ تضمینی
                        </div>
                        <div className="text-[11px] text-[#565e74]">
                          تست‌های بیولوژیک و شیمیایی ماهانه
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content Side (7 cols) */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                <span className="text-xs font-bold text-[#004ac6] bg-[#004ac6]/10 px-4 py-1.5 rounded-full inline-block">
                  استانداردهای بهداشتی و تجهیزات پیشرفته
                </span>
                <h2 className="text-[2.25rem] leading-[1.25] font-extrabold text-[#191c1e]">
                  سلامت و ایمنی شما در کلینیک پارمیس، بالاترین اولویت ماست
                </h2>
                <p className="text-base text-[#565e74] leading-relaxed">
                  ما در مطب دندان‌پزشکی پارمیس واقع در مجتمع پزشکی راستین پاکدشت، سخت‌گیرانه‌ترین
                  استانداردهای کنترل عفونت را به اجرا گذاشته‌ایم تا شما و خانواده محترمتان با خاطری
                  کاملاً آسوده تحت درمان قرار گیرید.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#f7f9fb] border border-[#c3c6d7]/20 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">cleaning_services</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#191c1e]">
                        اتوکلاو کلاس B اروپایی و بسته‌بندی پک وکیوم
                      </h4>
                      <p className="text-sm text-[#565e74] mt-0.5">
                        تمامی ابزارهای غیر یکبارمصرف در پاکت‌های استریل بسته‌بندی شده و دقیقاً مقابل
                        چشمان بیمار باز می‌شوند.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f7f9fb] border border-[#c3c6d7]/20 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">monitor_heart</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#191c1e]">
                        رادیوگرافی دیجیتال (RVG) با وضوح فوق‌العاده
                      </h4>
                      <p className="text-sm text-[#565e74] mt-0.5">
                        ثبت آنی تصاویر دندانی با کاهش ۹۰ درصدی دوز تابش اشعه ایکس نسبت به
                        رادیوگرافی‌های سنتی و فیلمی قدیمی.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#f7f9fb] border border-[#c3c6d7]/20 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">camera_indoor</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#191c1e]">
                        دوربین داخل دهانی و نمایش زنده در مانیتور بیمار
                      </h4>
                      <p className="text-sm text-[#565e74] mt-0.5">
                        شما وضعیت دندان، پوسیدگی‌ها و مراحل درمان خود را به وضوح بر روی مانیتور
                        یونیت مشاهده خواهید کرد.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CLINICAL SERVICES AT A GLANCE ==================== */}
        <section className="py-16 lg:py-24 bg-[#f7f9fb]">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold text-[#004ac6] bg-[#004ac6]/10 px-4 py-1.5 rounded-full inline-block mb-3">
                  طیف خدمات بالینی
                </span>
                <h2 className="text-[2.25rem] leading-[1.25] font-extrabold text-[#191c1e]">
                  خدمات درمانی و زیبایی زیر نظر دکتر شمس پور
                </h2>
              </div>
              <p className="text-base text-[#565e74] max-w-md mt-4 md:mt-0">
                ارائه کلیه اقدامات تخصصی دندان‌پزشکی با پروتکل‌های محافظه‌کارانه و بهترین متریال
                استاندارد.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div
                onClick={onNavigateServices}
                className="bg-white rounded-3xl p-6 shadow-xs border border-[#c3c6d7]/30 flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">dentistry</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                    اصلاح طرح لبخند و زیبایی
                  </h3>
                  <p className="text-sm text-[#565e74] mb-4 leading-relaxed">
                    ونیر کامپوزیت‌های لایه‌ای، بلیچینگ تخصصی مطب (سفیدکردن دندان‌ها) و بستن فواصل
                    دندانی به فرم طبیعی.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#004ac6] flex items-center gap-1">
                  <span>جزئیات درمان</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                </span>
              </div>

              {/* Card 2 */}
              <div
                onClick={onNavigateServices}
                className="bg-white rounded-3xl p-6 shadow-xs border border-[#c3c6d7]/30 flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">
                      precision_manufacturing
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">کاشت دندان و ایمپلنت</h3>
                  <p className="text-sm text-[#565e74] mb-4 leading-relaxed">
                    جایگزینی دندان‌های از دست رفته با ایمپلنت‌های معتبر تیتانیومی و روکش‌های زیرکونیا
                    تمام‌سرامیک مستحکم.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#004ac6] flex items-center gap-1">
                  <span>جزئیات درمان</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                </span>
              </div>

              {/* Card 3 */}
              <div
                onClick={onNavigateServices}
                className="bg-white rounded-3xl p-6 shadow-xs border border-[#c3c6d7]/30 flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">healing</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">درمان ریشه (عصب‌کشی)</h3>
                  <p className="text-sm text-[#565e74] mb-4 leading-relaxed">
                    عصب‌کشی تخصصی و بدون درد با فایل‌های چرخشی روتاری و اپکس‌لوکیتورهای دیجیتال با حفظ
                    دندان طبیعی.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#004ac6] flex items-center gap-1">
                  <span>جزئیات درمان</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                </span>
              </div>

              {/* Card 4 */}
              <div
                onClick={onNavigateServices}
                className="bg-white rounded-3xl p-6 shadow-xs border border-[#c3c6d7]/30 flex flex-col justify-between hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">child_care</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#191c1e] mb-2">
                    دندان‌پزشکی ترمیمی و اطفال
                  </h3>
                  <p className="text-sm text-[#565e74] mb-4 leading-relaxed">
                    ترمیم‌های همرنگ دندان، فلورایدتراپی، شیاربندی (فیشور سیلانت) و ایجاد خاطره‌ای
                    خوشایند برای کودکان.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#004ac6] flex items-center gap-1">
                  <span>جزئیات درمان</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== CLINIC ATMOSPHERE GALLERY ==================== */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#004ac6] bg-[#004ac6]/10 px-4 py-1.5 rounded-full inline-block mb-3">
                فضای مطب پارمیس
              </span>
              <h2 className="text-[2.25rem] leading-[1.25] font-extrabold text-[#191c1e] mb-3">
                محیطی پاکیزه، مدرن و صمیمی برای آرامش شما
              </h2>
              <p className="text-base text-[#565e74]">
                گوشه‌ای از فضای درمانی و پذیرش کلینیک دندان‌پزشکی پارمیس در مجتمع پزشکی راستین
                پاکدشت.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Image 1: Reception & Waiting Room */}
              <div className="rounded-3xl overflow-hidden shadow-xs border border-[#c3c6d7]/30 group relative aspect-[4/3] bg-[#f2f4f6]">
                <img
                  alt="سالن انتظار و پذیرش آرام"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1lEFO-65bVA8EyDCRG6Jh2ZYnKEiwDUBlMk2l7OILvml7WqtB6qp0WFSPcJLkZlUvKx0OduPf1dmOdOOn9twjHknMJYHiexTE7_2YLOaTcAns-0JFGye3KZrEPOlSL0UQMww8DRpkMFzL4VpVDyxqAnuf01Xgh04yHUaHqj9WqMQD3PaPX-fWMm-z8ORAc6lds9PBpma8A8m5c_NVZ1IWTVl9zX9m17gO3rmdBkW8KnmxzGseYC2K"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-sm text-white font-bold">سالن انتظار و پذیرش آرام</span>
                </div>
              </div>

              {/* Image 2: Treatment Operatory */}
              <div className="rounded-3xl overflow-hidden shadow-xs border border-[#c3c6d7]/30 group relative aspect-[4/3] bg-[#f2f4f6]">
                <img
                  alt="اتاق درمان مجهز به یونیت‌های ارگونومیک"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8DDJgyi9j3e1RoDp4EpxNJWIVqen5VYReZLk9BXWoWqJsmgrN24QowygzGKWbJVZ-dmURMoBCE0BEwqEWqdnyMA8zQjwyb21gWEVFsWNtsPmMASz7sA0-_RyI52lm4j9zsLCcdXuBW3p7r17i6r0fc48hwN9lThZi6hPFBB0y5ainsLbhYpPTL4qMzzcY6TXkFTPlsFUi-kbtazjUaeblJahawAplums01sZxdQxHCxw1RurRycJi"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-sm text-white font-bold">
                    اتاق درمان مجهز به یونیت‌های ارگونومیک
                  </span>
                </div>
              </div>

              {/* Image 3: Sterilization CSR */}
              <div className="rounded-3xl overflow-hidden shadow-xs border border-[#c3c6d7]/30 group relative aspect-[4/3] bg-[#f2f4f6]">
                <img
                  alt="بخش CSR و استریلیزاسیون مکانیزه"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVzJSJqadx2vYgNNJVr3K92pazakxiCDNKPNUMWzyL9Hbt0DSgbw3dU37KyNfaf-XBfSYzzqNYbdnN0r4BWBYDXoz9zlPTtqJ_k89hZDQiOV9nSM_EOGHP-Hgc-i4vrgRroxO3OfErGG0idxceDK-EIdk687HXHau8MQEPXhr_IIAQ0khCgh3t3AVW1LrwfYjVPRtWhJg92c5vPiGd3b4XtsjftmrQqMtr7pE14x-833fXk2cYVmHy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-sm text-white font-bold">
                    بخش CSR و استریلیزاسیون مکانیزه
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== PATIENT TESTIMONIALS ==================== */}
        <section className="py-16 lg:py-24 bg-[#f7f9fb]">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#004ac6] bg-[#004ac6]/10 px-4 py-1.5 rounded-full inline-block mb-3">
                تجربه بیماران
              </span>
              <h2 className="text-[2.25rem] leading-[1.25] font-extrabold text-[#191c1e] mb-3">
                روایت مراجعین از درمان در کلینیک پارمیس
              </h2>
              <p className="text-base text-[#565e74]">
                نظرات ثبت‌شده بیماران محترم درباره برخورد حرفه‌ای و درمان‌های دکتر انوشیروان
                شمس پور.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Review 1 */}
              <div className="bg-white p-6 rounded-3xl shadow-xs border border-[#c3c6d7]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#004ac6] mb-4">
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                  </div>
                  <p className="text-base text-[#434655] leading-relaxed mb-6">
                    «همیشه از آمپول بی‌حسی دندان‌پزشکی وحشت داشتم، اما دکتر شمس پور آن‌قدر باحوصله و
                    ماهرانه تزریق را انجام دادند که هیچ دردی حس نکردم. عصب‌کشی دندان آسیاب من بسیار
                    تمیز انجام شد.»
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#c3c6d7]/20">
                  <div className="w-10 h-10 rounded-full bg-[#dae2fd] text-[#004ac6] font-bold flex items-center justify-center">
                    م.ر
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#191c1e]">محسن رضایی</div>
                    <div className="text-[12px] text-[#565e74]">درمان اندودانتیکس و ترمیم</div>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-white p-6 rounded-3xl shadow-xs border border-[#c3c6d7]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#004ac6] mb-4">
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                  </div>
                  <p className="text-base text-[#434655] leading-relaxed mb-6">
                    «برای کامپوزیت دندان‌های جلو به پاکدشت مجتمع راستین آمدم. برخلاف جاهای دیگر که
                    دندان‌ها را زیادی غیرطبیعی و گچی می‌کنند، کار ایشان بی‌نهایت طبیعی و شیک شد.
                    دست‌مریزاد.»
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#c3c6d7]/20">
                  <div className="w-10 h-10 rounded-full bg-[#dae2fd] text-[#004ac6] font-bold flex items-center justify-center">
                    س.ک
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#191c1e]">سارا کریمی</div>
                    <div className="text-[12px] text-[#565e74]">اصلاح لبخند و ونیر کامپوزیت</div>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="bg-white p-6 rounded-3xl shadow-xs border border-[#c3c6d7]/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#004ac6] mb-4">
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                    <span className="material-symbols-fill material-symbols-outlined text-[20px]">
                      star
                    </span>
                  </div>
                  <p className="text-base text-[#434655] leading-relaxed mb-6">
                    «بهداشت فوق‌العاده مطب و خوش‌قولی در زمان نوبت‌دهی واقعاً ستودنی است. پک‌ها
                    استریل جلوی خود بیمار باز می‌شود و آقای دکتر تمام مراحل را با دقت برای من توضیح
                    دادند.»
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-[#c3c6d7]/20">
                  <div className="w-10 h-10 rounded-full bg-[#dae2fd] text-[#004ac6] font-bold flex items-center justify-center">
                    ع.م
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#191c1e]">علی میرزایی</div>
                    <div className="text-[12px] text-[#565e74]">جراحی و ایمپلنت دیجیتال</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== LOCATION, WORKING HOURS & DIRECT CONTACT ==================== */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Contact & Hours Details (6 cols) */}
              <div className="lg:col-span-6 bg-[#f7f9fb] p-8 lg:p-10 rounded-3xl border border-[#c3c6d7]/30 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#004ac6] bg-[#004ac6]/10 px-4 py-1.5 rounded-full inline-block mb-4">
                    اطلاعات دسترسی و نوبت‌دهی
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#191c1e] mb-6">
                    مطب دندان‌پزشکی پارمیس • دکتر انوشیروان شمس پور
                  </h3>

                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[24px]">location_on</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#191c1e]">آدرس کلینیک</h4>
                        <p className="text-base text-[#565e74] mt-1 leading-relaxed">
                          پاکدشت، بلوار شهدای قمی، میدان علی ابن ابیطالب، ابتدای بلوار علی ابن ابیطالب، مجتمع پزشکی راستین، طبقه دوم، کلینیک دندان‌پزشکی پارمیس
                        </p>
                      </div>
                    </div>

                    {/* Phone Direct */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#2563eb] text-white flex items-center justify-center shrink-0">
                        <span className="material-symbols-fill material-symbols-outlined text-[24px]">
                          call
                        </span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#191c1e]">شماره تماس مستقیم</h4>
                        <div className="text-xl font-bold text-[#004ac6] mt-1 space-y-1 dir-ltr text-right">
                          <a className="block hover:underline" href="tel:02136048581">
                            ۰۲۱۳۶۰۴۸۵۸۱
                          </a>
                          <a className="block hover:underline" href="tel:02136048582">
                            ۰۲۱۳۶۰۴۸۵۸۲
                          </a>
                        </div>
                        <span className="text-sm text-[#565e74]">
                          پاسخگویی و هماهنگی نوبت ویزیت
                        </span>
                      </div>
                    </div>

                    {/* Working Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#dae2fd] text-[#004ac6] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[24px]">schedule</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#191c1e]">ساعات کاری و پذیرش</h4>
                        <p className="text-base text-[#565e74] mt-1">
                          شنبه تا پنجشنبه: ۱۰ صبح الی ۲۱ (با تعیین وقت قبلی)
                        </p>
                        <span className="text-sm text-[#565e74]">
                          جمعه‌ها و ایام تعطیل رسمی: پذیرش موارد اورژانسی با هماهنگی تلفنی
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Call CTA */}
                <div className="mt-8 pt-6 border-t border-[#c3c6d7]/20 flex flex-wrap gap-4 items-center">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="flex items-center gap-2 bg-[#2563eb] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[#004ac6] transition-all"
                  >
                    <span className="material-symbols-outlined text-[20px]">call</span>
                    <span>برقراری تماس مستقیم</span>
                  </a>
                  <span className="text-sm text-[#565e74]">پاسخگویی سریع توسط منشی مطب</span>
                </div>
              </div>

              {/* Map & Routing Card (6 cols) */}
              <div className="lg:col-span-6 bg-[#f7f9fb] p-4 rounded-3xl border border-[#c3c6d7]/30 flex flex-col">
                <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-[#e6e8ea]">
                  <img
                    alt="نقشه مجتمع پزشکی راستین پاکدشت"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB46eR0IQlF5wtRFa0UaCzRiEuaHPhc782AKsDtnuzImaR_GsyaZAy0aTmHdTnULJ9J2fvzlC3pG3IVi6BGONR__LzhfN42tLlEOlHxkU8mstUg-mAXCq9eBroGOmwC-rNglqS6MJde07opdTceAXWUHFLUlCnKiUeMCJO_kJdOmAzP0gkYjq1IbuAefJrq3OcHAp5lF1y-L4UgeFkDD70CydNfgxdRhcORg99CfCx6TD8xZFy_uuzU"
                  />
                  {/* Map overlay pin marker */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white px-4 py-2.5 rounded-full shadow-2xl border border-[#004ac6]/20 flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#004ac6] animate-ping" />
                      <span className="text-xs font-bold text-[#191c1e]">
                        مجتمع پزشکی راستین • مطب پارمیس
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                  <div>
                    <div className="text-sm font-bold text-[#191c1e]">
                      مسیریابی آسان و امکانات رفاهی
                    </div>
                    <div className="text-sm text-[#565e74]">
                      فضای مناسب پارک خودرو، آسانسور فعال، داروخانه در مجتمع و امکانات رفاهی کلینیک
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                    <a
                      href={CLINIC_INFO.neshanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#004ac6] text-white font-bold text-xs hover:bg-[#003896] transition-all"
                    >
                      مسیریابی با نشان
                    </a>
                    <a
                      href={CLINIC_INFO.baladUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-all"
                    >
                      مسیریابی با بلد
                    </a>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full border border-[#004ac6] text-[#004ac6] font-bold text-xs hover:bg-[#004ac6]/5 transition-all"
                    >
                      گوگل مپ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== FINAL HIGH-IMPACT CTA STRIP ==================== */}
        <section className="py-12 bg-[#f7f9fb]">
          <div className="w-full max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-r from-[#004ac6] to-[#2563eb] text-white rounded-3xl p-8 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
              {/* Background Vector Shape */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-white/10 pointer-events-none" />

              <div className="space-y-3 text-center lg:text-right relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold">
                  <span className="material-symbols-outlined text-[18px]">favorite</span>
                  <span>مشاوره و ارزیابی اولیه لبخند</span>
                </div>
                <h3 className="text-2xl lg:text-[2.25rem] leading-[1.25] font-extrabold text-white">
                  آماده‌اید لبخند خود را با اطمینان به ما بسپارید؟
                </h3>
                <p className="text-base text-[#eeefff] max-w-xl">
                  جهت رزرو نوبت معاینه، اطلاع از طرح‌های درمان یا دریافت مشاوره با کادر مطب دکتر
                  شمس پور تماس بگیرید.
                </p>
              </div>

              <div className="shrink-0 relative z-10 w-full sm:w-auto flex items-center">
                <a
                  href={`tel:${CLINIC_INFO.phone2}`}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#004ac6] text-xl font-bold px-8 py-4 rounded-full shadow-lg hover:scale-[1.03] transition-all"
                >
                  <span className="material-symbols-fill material-symbols-outlined text-[#004ac6] text-[24px]">
                    call
                  </span>
                  <span>تماس: {CLINIC_INFO.phoneDisplay2}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
