import React, { useState, useEffect } from 'react';
import { ARTICLES, ArticleItem, CLINIC_INFO } from '../data/clinicData.ts';

interface ArticleDetailPageProps {
  articleId?: string;
  onNavigateHome: () => void;
  onNavigateBlog: () => void;
  onSelectArticle: (id: string) => void;
  onOpenBooking: (preselectedService?: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({
  articleId = 'featured-composite-vs-laminate',
  onNavigateHome,
  onNavigateBlog,
  onSelectArticle,
  onOpenBooking,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTocSection, setActiveTocSection] = useState<string>('introduction');

  // Comment submission form state
  const [commentName, setCommentName] = useState('');
  const [commentPhone, setCommentPhone] = useState('');
  const [commentMessage, setCommentMessage] = useState('');
  const [submittedComments, setSubmittedComments] = useState<
    Array<{ id: string; name: string; date: string; text: string; role?: string }>
  >([]);

  // Find the selected article or default to first
  const currentArticle =
    ARTICLES.find((a) => a.id === articleId) ||
    ARTICLES.find((a) => a.id === 'featured-composite-vs-laminate') ||
    ARTICLES[0];

  const isCompositeVsLaminate =
    currentArticle.id === 'featured-composite-vs-laminate' ||
    currentArticle.title.includes('کامپوزیت') ||
    currentArticle.categorySlug === 'cosmetic';

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleToggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    showToast(isBookmarked ? 'مقاله از نشان‌شده‌ها حذف شد' : 'مقاله با موفقیت نشان شد');
  };

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('لینک مقاله با موفقیت کپی شد');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: currentArticle.title,
          text: currentArticle.summary,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      handleCopyLink();
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentName.trim() || !commentMessage.trim()) return;
    const newComment = {
      id: Date.now().toString(),
      name: commentName.trim(),
      date: 'لحظاتی پیش',
      text: commentMessage.trim(),
      role: 'مراجع وبسایت',
    };
    setSubmittedComments([newComment, ...submittedComments]);
    setCommentName('');
    setCommentPhone('');
    setCommentMessage('');
    showToast('پرسش شما با موفقیت ثبت شد و پس از بررسی توسط دکتر شمس‌پور منتشر خواهد شد');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTocSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Scroll spy for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'introduction',
        'comparison-table',
        'clinical-cases',
        'candidacy',
        'faq-section',
        'comments-section',
      ];
      const scrollPos = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTocSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter other articles for the related section
  const relatedArticles = ARTICLES.filter((a) => a.id !== currentArticle.id).slice(0, 3);
  const popularArticles = ARTICLES.filter((a) => a.id !== currentArticle.id).slice(0, 3);

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen pb-16 selection:bg-[#dbe1ff] selection:text-[#004ac6]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#191c1e] text-white px-5 py-3 rounded-full shadow-2xl text-xs sm:text-sm font-bold flex items-center gap-2 border border-white/10 animate-bounce">
          <span className="material-symbols-outlined text-emerald-400 text-lg">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ================= MAIN CONTAINER ================= */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 text-right dir-rtl">
        {/* 1. BREADCRUMB NAVIGATION */}
        <nav
          aria-label="مسیر راهنما"
          className="flex items-center gap-2 text-xs sm:text-sm text-[#565e74] mb-6 flex-wrap"
        >
          <button
            type="button"
            onClick={onNavigateHome}
            className="hover:text-[#004ac6] transition-colors flex items-center gap-1 cursor-pointer font-medium"
          >
            <span className="material-symbols-outlined text-base">home</span>
            <span>صفحه اصلی</span>
          </button>
          <span className="material-symbols-outlined text-xs text-[#c3c6d7]">chevron_left</span>
          <button
            type="button"
            onClick={onNavigateBlog}
            className="hover:text-[#004ac6] transition-colors cursor-pointer font-medium"
          >
            مقالات سلامت دهان
          </button>
          <span className="material-symbols-outlined text-xs text-[#c3c6d7]">chevron_left</span>
          <button
            type="button"
            onClick={onNavigateBlog}
            className="hover:text-[#004ac6] transition-colors cursor-pointer font-medium"
          >
            {currentArticle.category}
          </button>
          <span className="material-symbols-outlined text-xs text-[#c3c6d7]">chevron_left</span>
          <span className="text-[#191c1e] font-semibold truncate max-w-xs sm:max-w-md">
            {currentArticle.title}
          </span>
        </nav>

        {/* 2. ARTICLE HEADER */}
        <header className="mb-6 sm:mb-8">
          {/* Eyebrow Badges */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#dae2fd] text-[#004ac6] text-xs font-bold rounded-full">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              <span>{currentArticle.category}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#eceef0] text-[#434655] text-xs font-semibold rounded-full">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span>تأییدیه علمی دکتر شمس‌پور</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[#565e74] text-xs font-medium">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>کلینیک پارمیس، پاکدشت</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#191c1e] leading-snug sm:leading-tight max-w-5xl mb-5">
            {currentArticle.title}
          </h1>

          {/* Meta Bar & Social Sharing Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-y border-[#c3c6d7]/30 text-[#565e74] text-xs sm:text-sm">
            {/* Author & Publication Data */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#004ac6] shrink-0 bg-[#eceef0] shadow-xs">
                  <img
                    src={CLINIC_INFO.doctorImage}
                    alt={CLINIC_INFO.doctorName}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="font-bold text-[#191c1e] block">
                    {currentArticle.author || CLINIC_INFO.doctorName}
                  </span>
                  <span className="text-[11px] text-[#565e74]">
                    {currentArticle.authorRole || 'جراح و دندان‌پزشک در پاکدشت'}
                  </span>
                </div>
              </div>

              <span className="text-[#c3c6d7] hidden sm:inline">•</span>
              <div className="flex items-center gap-1 text-[11px] sm:text-xs">
                <span className="material-symbols-outlined text-base">calendar_today</span>
                <span>{currentArticle.date || '۱۵ اردیبهشت ۱۴۰۳'}</span>
              </div>

              <span className="text-[#c3c6d7] hidden sm:inline">•</span>
              <div className="flex items-center gap-1 text-[11px] sm:text-xs">
                <span className="material-symbols-outlined text-base">schedule</span>
                <span>{currentArticle.readTime}</span>
              </div>

              <span className="text-[#c3c6d7] hidden md:inline">•</span>
              <div className="hidden md:flex items-center gap-1 text-xs">
                <span className="material-symbols-outlined text-base">visibility</span>
                <span>۱,۴۲۰ بازدید</span>
              </div>

              <span className="text-[#c3c6d7] hidden md:inline">•</span>
              <div className="hidden md:flex items-center gap-1 text-xs">
                <span className="material-symbols-outlined text-base">chat_bubble_outline</span>
                <span>۱۸ نظر</span>
              </div>
            </div>

            {/* Social Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={handleToggleBookmark}
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'bg-[#dbe1ff] text-[#004ac6]'
                    : 'hover:bg-[#dbe1ff]/30 text-[#565e74] hover:text-[#004ac6]'
                }`}
                title={isBookmarked ? 'نشان شده' : 'نشان کردن مقاله'}
              >
                <span
                  className={`material-symbols-outlined text-lg ${
                    isBookmarked ? 'material-symbols-fill' : ''
                  }`}
                >
                  bookmark
                </span>
              </button>

              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  currentArticle.title + ' ' + window.location.href
                )}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-emerald-50 text-[#565e74] hover:text-emerald-600 transition-colors"
                title="اشتراک‌گذاری در واتساپ"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
              </a>

              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(
                  window.location.href
                )}&text=${encodeURIComponent(currentArticle.title)}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full hover:bg-sky-50 text-[#565e74] hover:text-sky-600 transition-colors"
                title="اشتراک‌گذاری در تلگرام"
              >
                <span className="material-symbols-outlined text-lg">send</span>
              </a>

              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#eceef0] hover:bg-[#e0e3e5] text-[#434655] text-xs font-semibold transition-colors cursor-pointer"
                title="کپی لینک مقاله"
              >
                <span className="material-symbols-outlined text-sm">content_copy</span>
                <span>کپی لینک</span>
              </button>
            </div>
          </div>
        </header>

        {/* 3. HERO ARTICLE IMAGE */}
        <div className="relative w-full h-[260px] sm:h-[380px] md:h-[460px] rounded-3xl overflow-hidden mb-8 sm:mb-10 shadow-md bg-[#f2f4f6] border border-[#c3c6d7]/30">
          <img
            src={
              currentArticle.image ||
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDMqapcf1kk9tqM74BZqV7k5gViVJ4iQcsyd9UkXWJXXdEZbdFjCw9QGUecA4xedUU7HlNpC9KOj9givjZQ-7ESi1TYN12B9NwrUtvztyMH5K8ceR8RL_2yqmmLrK9Qi-VbNIEpyT1DZDkjIGEgXq9dKSPyytAZDg1ZBz-I5qStNSa6-Nhar3Y6FEjr9BKHtlXBSq82TOPO5ypdP5zi-VtTfnohvIxBrEMHCXv5hk95RWy_V0lM7NTr'
            }
            alt={currentArticle.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191c1e]/85 via-black/20 to-transparent" />
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 left-4 sm:left-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="inline-block bg-[#004ac6] text-white text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-xs">
                تکنولوژی دیجیتال لبخند در پاکدشت
              </span>
              <p className="text-xs sm:text-sm text-slate-100 max-w-2xl leading-relaxed">
                مقایسه تخصصی متریال‌های لومینیرز، ایمکس، و نانوکامپوزیت‌های ژاپنی و سوئیسی تحت نظر مستقیم دکتر شمس‌پور
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[11px] font-medium self-start sm:self-auto shrink-0">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
              <span>تصویر آرشیوی کلینیک پارمیس</span>
            </div>
          </div>
        </div>

        {/* 4. TWO-COLUMN LAYOUT: MAIN CONTENT (8 COLS) + STICKY SIDEBAR (4 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= MAIN CONTENT BODY (8 COLS) ================= */}
          <article className="lg:col-span-8 flex flex-col gap-8">
            {/* 5. KEY TAKEAWAYS (خلاصه اجرایی و نکات کلیدی در یک نگاه) */}
            <section className="bg-white border border-[#004ac6]/20 rounded-3xl p-5 sm:p-7 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-2 h-full bg-[#004ac6]" />
              <div className="flex items-center gap-2.5 text-[#004ac6] mb-3">
                <span className="material-symbols-outlined text-2xl">insights</span>
                <h2 className="text-base sm:text-xl font-bold text-[#191c1e]">
                  خلاصه اجرایی و نکات کلیدی در یک نگاه
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#565e74] mb-4">
                اگر زمان محدودی برای مطالعه دارید، مهم‌ترین تفاوت‌های کلیدی بین ونیر کامپوزیت و لمینت سرامیکی را در ۴ اصل زیر مرور فرمایید:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {/* 1 */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#f2f4f6] border border-[#c3c6d7]/30">
                  <div className="w-8 h-8 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-[#191c1e] block mb-1">
                      میزان تراش مینای دندان
                    </strong>
                    <p className="text-[11px] sm:text-xs text-[#565e74] leading-relaxed">
                      در کامپوزیت تراش دندان معمولاً صفر یا بسیار اندک است؛ در لمینت حدود ۰.۳ تا ۰.۷ میلی‌متر از مینا تراش می‌خورد.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#f2f4f6] border border-[#c3c6d7]/30">
                  <div className="w-8 h-8 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">verified</span>
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-[#191c1e] block mb-1">
                      طول عمر و استحکام
                    </strong>
                    <p className="text-[11px] sm:text-xs text-[#565e74] leading-relaxed">
                      لمینت‌های پرسلن و ایمکس بین ۱۰ تا ۱۵ سال ماندگاری دارند، در حالی که کامپوزیت میانگین ۴ تا ۷ سال عمر مفید دارد.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#f2f4f6] border border-[#c3c6d7]/30">
                  <div className="w-8 h-8 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">water_drop</span>
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-[#191c1e] block mb-1">
                      مقاومت به لکه و زردی
                    </strong>
                    <p className="text-[11px] sm:text-xs text-[#565e74] leading-relaxed">
                      سرامیک کاملاً صیقلی و غیرقابل نفوذ است (ضد لک چای و قهوه)؛ کامپوزیت نیازمند پالیش دوره‌ای سالانه است.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#f2f4f6] border border-[#c3c6d7]/30">
                  <div className="w-8 h-8 rounded-full bg-[#004ac6]/10 text-[#004ac6] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-lg">alarm</span>
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-[#191c1e] block mb-1">
                      مدت زمان و هزینه
                    </strong>
                    <p className="text-[11px] sm:text-xs text-[#565e74] leading-relaxed">
                      کامپوزیت مستقیم در یک جلسه توسط دندان‌پزشک اجرا شده و ارزان‌تر است؛ لمینت دو مرحله‌ای و با کار لابراتوار است.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* INTRODUCTION */}
            <section
              id="introduction"
              className="bg-white p-5 sm:p-8 rounded-3xl shadow-xs border border-[#c3c6d7]/30"
            >
              <h2 className="text-lg sm:text-2xl font-bold text-[#191c1e] mb-4 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#004ac6] rounded-full inline-block" />
                <span>مقدمه: چرا انتخاب میان کامپوزیت و لمینت تا این حد سرنوشت‌ساز است؟</span>
              </h2>
              <div className="text-sm sm:text-base text-[#565e74] space-y-4 text-justify leading-relaxed">
                <p>
                  اصلاح طرح لبخند امروزه فراتر از یک درمان صرفاً تزئینی است؛ داشتن دندان‌هایی منظم، درخشان و هماهنگ با خط لبخند، اعتمادبه‌نفس فردی و اجتماعی را دگرگون می‌سازد. در این میان، متداول‌ترین سوالی که مراجعین کلینیک پارمیس در پاکدشت از ما می‌پرسند این است:{' '}
                  <span className="text-[#004ac6] font-bold">
                    «آیا برای دندان‌های من ونیر کامپوزیت بهتر است یا لمینت سرامیکی؟»
                  </span>
                </p>
                <p>
                  پاسخ به این سوال هرگز برای همه افراد یکسان نیست. هر یک از این دو تکنیک زیبایی دارای ساختار مادی، روش پیاده‌سازی، هزینه و از همه مهم‌تر «میزان دستکاری بافت مینای دندان» متفاوتی هستند. انتخاب اشتباه می‌تواند منجر به التهاب لثه، بوی نامطبوع دهان یا پشیمانی ناشی از تراش غیرضروری دندان‌ها شود. در این نوشتار، بدون جانبداری و بر پایه شواهد دندان‌پزشکی نوین به این مقایسه می‌پردازیم.
                </p>
                {currentArticle.content && currentArticle.content.length > 0 && (
                  <div className="space-y-3 pt-2">
                    {currentArticle.content.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* 7. DETAILED COMPARISON TABLE (جدول مقایسه‌ای جامع) */}
            <section
              id="comparison-table"
              className="bg-white p-5 sm:p-8 rounded-3xl shadow-xs border border-[#c3c6d7]/30"
            >
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-[#191c1e] flex items-center gap-2">
                    <span className="w-2.5 h-6 bg-[#004ac6] rounded-full inline-block" />
                    <span>جدول مقایسه جامع: ونیر کامپوزیت در برابر لمینت سرامیکی</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#565e74] mt-1">
                    ارزیابی فنی تمامی پارامترهای زیبایی، طول عمر و اقتصادی
                  </p>
                </div>
                <span className="px-3 py-1 bg-[#004ac6]/10 text-[#004ac6] text-xs font-bold rounded-full">
                  معیارهای بالینی ۱۴۰۳
                </span>
              </div>

              {/* Desktop Table View */}
              <div className="overflow-x-auto rounded-2xl border border-[#c3c6d7]/30">
                <table className="w-full text-right border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#f2f4f6] text-[#191c1e] border-b border-[#c3c6d7]/30">
                      <th className="p-3.5 font-bold">معیار بالینی / پارامتر</th>
                      <th className="p-3.5 font-bold text-[#004ac6]">ونیر کامپوزیت مستقیم (Composite)</th>
                      <th className="p-3.5 font-bold text-[#00569c]">لمینت سرامیکی پرسلن (Porcelain Veneer)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#c3c6d7]/20 text-[#434655]">
                    <tr className="hover:bg-[#f7f9fb] transition-colors">
                      <td className="p-3.5 font-bold text-[#191c1e]">میزان تراش دندان</td>
                      <td className="p-3.5">بسیار جزئی یا بدون هیچ‌گونه تراش مینا (Non-Prep)</td>
                      <td className="p-3.5">تراش کنترل‌شده مینا به میزان ۰.۳ تا ۰.۷ میلی‌متر</td>
                    </tr>
                    <tr className="hover:bg-[#f7f9fb] transition-colors bg-[#fdfdfe]">
                      <td className="p-3.5 font-bold text-[#191c1e]">طول عمر مفید میانگین</td>
                      <td className="p-3.5">۴ الی ۷ سال (نیازمند مراقبت مداوم)</td>
                      <td className="p-3.5 font-bold text-[#004ac6]">۱۰ الی ۱۵ سال (دوام فوق‌العاده بالا)</td>
                    </tr>
                    <tr className="hover:bg-[#f7f9fb] transition-colors">
                      <td className="p-3.5 font-bold text-[#191c1e]">تغییر رنگ و لکه‌پذیری</td>
                      <td className="p-3.5">امکان زرد شدن تدریجی در اثر قهوه، چای و سیگار</td>
                      <td className="p-3.5 text-[#004ac6] font-semibold">کاملاً مقاوم در برابر رنگ‌پذیری و زردی</td>
                    </tr>
                    <tr className="hover:bg-[#f7f9fb] transition-colors bg-[#fdfdfe]">
                      <td className="p-3.5 font-bold text-[#191c1e]">شفافیت و ظاهر طبیعی</td>
                      <td className="p-3.5">طبیعی، اما مات‌تر از سرامیک طبیعی دندان</td>
                      <td className="p-3.5">فوق‌العاده طبیعی با انعکاس نور مشابه مینای زنده</td>
                    </tr>
                    <tr className="hover:bg-[#f7f9fb] transition-colors">
                      <td className="p-3.5 font-bold text-[#191c1e]">قابلیت ترمیم در صورت لب‌پریدگی</td>
                      <td className="p-3.5 text-[#004ac6] font-semibold">بسیار آسان و سریع در مطب در عرض ۱۰ دقیقه</td>
                      <td className="p-3.5">امکان ترمیم ندارد و باید قطعه تعویض شود</td>
                    </tr>
                    <tr className="hover:bg-[#f7f9fb] transition-colors bg-[#fdfdfe]">
                      <td className="p-3.5 font-bold text-[#191c1e]">تعداد جلسات درمان</td>
                      <td className="p-3.5 font-bold">تنها ۱ جلسه (درمان فوری یک‌روزه)</td>
                      <td className="p-3.5">۲ الی ۳ جلسه (شامل قالب‌گیری دیجیتال و لابراتوار)</td>
                    </tr>
                    <tr className="hover:bg-[#f7f9fb] transition-colors">
                      <td className="p-3.5 font-bold text-[#191c1e]">هزینه و بودجه لازم</td>
                      <td className="p-3.5 text-[#004ac6] font-bold">بسیار اقتصادی‌تر (حدود یک‌سوم لمینت)</td>
                      <td className="p-3.5">سرمایه‌گذاری با ارزش ماندگار، بالاتر به دلیل کار لابراتوار</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 8. DOCTOR'S SPECIAL QUOTE CALLOUT BOX */}
            <section className="bg-gradient-to-l from-[#004ac6]/10 via-[#004ac6]/5 to-white border-r-4 border-[#004ac6] rounded-3xl p-6 sm:p-7 relative shadow-xs">
              <span className="material-symbols-outlined text-[#004ac6]/20 text-7xl absolute left-4 bottom-2 pointer-events-none">
                format_quote
              </span>
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-[#004ac6] text-2xl">medical_services</span>
                <span className="text-sm font-bold text-[#004ac6]">
                  دیدگاه بالینی دکتر انوشیروان شمس‌پور
                </span>
              </div>
              <blockquote className="text-sm sm:text-base text-[#191c1e] font-semibold leading-relaxed mb-4 text-justify">
                «هدف ما در کلینیک پارمیس پاکدشت، حفظ حداکثری ساختار بیولوژیک دندان بیمار است. اگر فردی دندان‌های سالم با نامرتبی بسیار جزئی داشته باشد، هرگز تراش لمینت را در اولویت قرار نمی‌دهیم و کامپوزیت لایه‌ای محافظه‌کارانه‌ترین راهکار است. اما برای افرادی با تغییر رنگ‌های شدید دارویی یا سایش شدید دندانی، استحکام و براقیت سرامیک ای‌مکس غیرقابل جایگزین است.»
              </blockquote>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#565e74] gap-2">
                <span>جراح و دندان‌پزشک زیبایی • پاکدشت، مجتمع پزشکی راستین</span>
                <span className="bg-white px-3 py-1 rounded-full border border-[#c3c6d7]/30 text-[#004ac6] font-bold">
                  نظام پزشکی: ۱۲۸۹۴۰ (ثبت رسمی)
                </span>
              </div>
            </section>

            {/* 9. BEFORE & AFTER CLINICAL GALLERY */}
            <section
              id="clinical-cases"
              className="bg-white p-5 sm:p-8 rounded-3xl shadow-xs border border-[#c3c6d7]/30"
            >
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-[#191c1e] flex items-center gap-2">
                    <span className="w-2.5 h-6 bg-[#004ac6] rounded-full inline-block" />
                    <span>نمونه کیس‌های بالینی قبل و بعد درمان در پاکدشت</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-[#565e74] mt-1">
                    بررسی نتایج واقعی مراجعین در کلینیک دندان‌پزشکی پارمیس
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="text-[#004ac6] text-xs sm:text-sm font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>مشاهده تمامی نمونه‌کارها</span>
                  <span className="material-symbols-outlined text-sm rotate-180">arrow_back</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Case 1: Composite */}
                <div className="bg-[#f2f4f6] rounded-2xl overflow-hidden border border-[#c3c6d7]/30 flex flex-col">
                  <div className="relative h-52 sm:h-56 bg-[#eceef0]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvQFZPJzMq7eGuwFjgLIEfQWADmjCrYWZKIUuCEkHPcV7WPSc-6TEDFKdYpdJKs3n3dO6e9Imhj5MBzRf78CAU5RhT4jGm0mw_VSsHoWP93nIoBx5vA8i3oTvHzbGsWAdsI1KROdtiQ5jCpAVN1Vp92RhnpjtuvXcONFNBssRQmDVN-oYdD6fjrV3rn01_CoKivKtkZbaARxDvJ3CfqnZ9mwos2vkrik0QHLvbn8kzmS5PMl90iC7S"
                      alt="ونیر نانوکامپوزیت فک بالا قبل و بعد"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-black/75 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      قبل از درمان
                    </div>
                    <div className="absolute top-3 left-3 bg-[#004ac6] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      بعد از درمان
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-[#191c1e] text-sm sm:text-base">
                          ونیر نانوکامپوزیت فک بالا (۸ واحد)
                        </span>
                        <span className="text-xs text-[#004ac6] font-bold bg-white px-2 py-0.5 rounded-full border border-[#004ac6]/20">
                          تک جلسه
                        </span>
                      </div>
                      <p className="text-xs text-[#565e74] mb-3 leading-relaxed">
                        بیمار خانم ۲۷ ساله با دیاستم (فاصله بین دندانی) سنترال‌ها، بدون هیچ‌گونه تراش مینای دندان و با متریال توکویاما ژاپن.
                      </p>
                    </div>
                    <div className="text-[11px] text-[#565e74] border-t border-[#c3c6d7]/30 pt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-emerald-600">check</span>
                      <span>انجام شده توسط دکتر انوشیروان شمس‌پور</span>
                    </div>
                  </div>
                </div>

                {/* Case 2: Porcelain Veneers */}
                <div className="bg-[#f2f4f6] rounded-2xl overflow-hidden border border-[#c3c6d7]/30 flex flex-col">
                  <div className="relative h-52 sm:h-56 bg-[#eceef0]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4ZSeo-x6JQH9n63t8DJAnaGVg7yTX6Xn19QviT7T4kwnHS2PUyYkqgSSu--W6DzGrBDxsu6QTgoEoHTxp_qt-NBfX7yelba8Z2Kx65hZNacMOqoJODzun82SlkTGpWkvdNbBcLjYpbijUj3iT_fzYMVUvsbPqckG-FRL0EtcQb6eQHlUnnX46Nep9dzd8wk9iK65JwvZWXd9WIlLei2BEzzkqdndILmmzR0QfzwknfXDs-JujdtdW"
                      alt="لمینت سرامیکی پرسلن قبل و بعد"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-black/75 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                      قبل از درمان
                    </div>
                    <div className="absolute top-3 left-3 bg-[#00569c] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                      بعد از درمان
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-[#191c1e] text-sm sm:text-base">
                          لمینت سرامیکی پرسلن E-Max (۱۰ واحد)
                        </span>
                        <span className="text-xs text-[#00569c] font-bold bg-white px-2 py-0.5 rounded-full border border-[#00569c]/20">
                          ۲ جلسه لابراتواری
                        </span>
                      </div>
                      <p className="text-xs text-[#565e74] mb-3 leading-relaxed">
                        بیمار آقای ۳۸ ساله با تغییر رنگ شدید ناشی از فلوروزیس و ساییدگی لبه‌های انسیزال، با اسکن دیجیتال سه‌بعدی.
                      </p>
                    </div>
                    <div className="text-[11px] text-[#565e74] border-t border-[#c3c6d7]/30 pt-2 flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm text-emerald-600">check</span>
                      <span>طراحی دیجیتال در کلینیک پارمیس پاکدشت</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 10. CANDIDACY: WHO IS SUITABLE FOR WHAT? */}
            <section
              id="candidacy"
              className="bg-white p-5 sm:p-8 rounded-3xl shadow-xs border border-[#c3c6d7]/30"
            >
              <h2 className="text-lg sm:text-2xl font-bold text-[#191c1e] mb-6 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#004ac6] rounded-full inline-block" />
                <span>چه کسانی کاندیدای کامپوزیت و چه کسانی کاندیدای لمینت هستند؟</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {/* Composite candidates */}
                <div className="p-5 rounded-2xl bg-[#f2f4f6] border border-[#004ac6]/20">
                  <div className="flex items-center gap-2 text-[#004ac6] font-bold text-sm sm:text-base mb-3">
                    <span className="material-symbols-outlined text-xl">person_check</span>
                    <span>ونیر کامپوزیت برای شما ایده‌آل است اگر:</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#565e74]">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-base shrink-0 mt-0.5">
                        done
                      </span>
                      <span>سن شما زیر ۲۰ سال است و نمی‌خواهید به هیچ عنوان مینای دندان دست بخورد.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-base shrink-0 mt-0.5">
                        done
                      </span>
                      <span>به‌دنبال اصلاح فوری طرح لبخند در یک جلسه برای یک رویداد خاص (مانند عروسی یا سفر) هستید.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-base shrink-0 mt-0.5">
                        done
                      </span>
                      <span>نقص‌های دندانی شما در حد شکستگی‌های جزئی، لب‌پریدگی یا بستن فاصله‌های اندک است.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-base shrink-0 mt-0.5">
                        done
                      </span>
                      <span>بودجه اقتصادی‌تری را در مقایسه با هزینه‌های پرسلن مدنظر دارید.</span>
                    </li>
                  </ul>
                </div>

                {/* Ceramic laminate candidates */}
                <div className="p-5 rounded-2xl bg-[#f2f4f6] border border-[#00569c]/20">
                  <div className="flex items-center gap-2 text-[#00569c] font-bold text-sm sm:text-base mb-3">
                    <span className="material-symbols-outlined text-xl">verified_user</span>
                    <span>لمینت سرامیکی برای شما ایده‌آل است اگر:</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-[#565e74]">
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#00569c] text-base shrink-0 mt-0.5">
                        done
                      </span>
                      <span>تغییر رنگ‌های خاکستری تیره یا زرد عمیق دارید که با بلیچینگ برطرف نمی‌شود.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#00569c] text-base shrink-0 mt-0.5">
                        done
                      </span>
                      <span>قهوه و چای فراوان مصرف می‌کنید و ثبات مادام‌العمر درخشندگی برایتان اولویت دارد.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#00569c] text-base shrink-0 mt-0.5">
                        done
                      </span>
                      <span>به‌دنبال ماندگاری بالا (بیش از ۱۰ سال) هستید و مایلید درمان دائمی‌تری دریافت کنید.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[#00569c] text-base shrink-0 mt-0.5">
                        done
                      </span>
                      <span>سایش و نامتقارنی‌های وسیع در لبه دندان‌ها نیازمند طراحی قوس لبخند است.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 11. FAQ ACCORDION SECTION */}
            <section
              id="faq-section"
              className="bg-white p-5 sm:p-8 rounded-3xl shadow-xs border border-[#c3c6d7]/30"
            >
              <h2 className="text-lg sm:text-2xl font-bold text-[#191c1e] mb-6 flex items-center gap-2">
                <span className="w-2.5 h-6 bg-[#004ac6] rounded-full inline-block" />
                <span>سوالات متداول مراجعین درباره تراش، درد و مراقبت‌ها</span>
              </h2>

              <div className="space-y-3">
                {/* FAQ 1 */}
                <div className="p-4 bg-[#f2f4f6] rounded-2xl border border-[#c3c6d7]/30 transition-all">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === 0 ? null : 0)}
                    className="w-full flex items-center justify-between cursor-pointer font-bold text-[#191c1e] text-xs sm:text-sm text-right"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-lg">
                        help_outline
                      </span>
                      <span>آیا تراش دندان برای لمینت سرامیکی باعث پوسیدگی بعدی دندان می‌شود؟</span>
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#565e74] transition-transform ${
                        openFaqIndex === 0 ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaqIndex === 0 && (
                    <div className="pt-3 text-xs sm:text-sm text-[#565e74] leading-relaxed border-t border-[#c3c6d7]/20 mt-3">
                      خیر؛ در روش‌های مدرن دندان‌پزشکی دیجیتال که در کلینیک پارمیس استفاده می‌شود، میزان تراش تنها در لایه خارجی مینای دندان (حدود نیم میلی‌متر) است و به عاج دندان آسیبی نمی‌رسد. همچنین اتصال لمینت با چسب‌های بسیار مقاوم رزینی انجام می‌شود که دندان را کاملاً مهروموم کرده و از نفوذ باکتری‌ها و پوسیدگی ممانعت می‌نماید.
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="p-4 bg-[#f2f4f6] rounded-2xl border border-[#c3c6d7]/30 transition-all">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === 1 ? null : 1)}
                    className="w-full flex items-center justify-between cursor-pointer font-bold text-[#191c1e] text-xs sm:text-sm text-right"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-lg">
                        help_outline
                      </span>
                      <span>آیا انجام ونیر کامپوزیت یا لمینت درد دارد و نیاز به تزریق بی‌حسی هست؟</span>
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#565e74] transition-transform ${
                        openFaqIndex === 1 ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaqIndex === 1 && (
                    <div className="pt-3 text-xs sm:text-sm text-[#565e74] leading-relaxed border-t border-[#c3c6d7]/20 mt-3">
                      درمان ونیر کامپوزیت در اکثر موارد بدون نیاز به بی‌حسی و کاملاً بدون درد صورت می‌گیرد، زیرا تراشی رخ نمی‌دهد. برای لمینت سرامیکی نیز به جهت راحتی مطلق بیمار در جلسه آماده‌سازی مینا، بی‌حسی موضعی سبک تزریق می‌گردد تا کوچک‌ترین حس ناخوشایندی ایجاد نشود.
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="p-4 bg-[#f2f4f6] rounded-2xl border border-[#c3c6d7]/30 transition-all">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === 2 ? null : 2)}
                    className="w-full flex items-center justify-between cursor-pointer font-bold text-[#191c1e] text-xs sm:text-sm text-right"
                  >
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-lg">
                        help_outline
                      </span>
                      <span>اگر کامپوزیت دچار لب‌پریدگی شود چاره چیست؟</span>
                    </span>
                    <span
                      className={`material-symbols-outlined text-[#565e74] transition-transform ${
                        openFaqIndex === 2 ? 'rotate-180' : ''
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaqIndex === 2 && (
                    <div className="pt-3 text-xs sm:text-sm text-[#565e74] leading-relaxed border-t border-[#c3c6d7]/20 mt-3">
                      یکی از بزرگ‌ترین مزیت‌های ونیر کامپوزیت قابلیت ترمیم‌پذیری آسان آن است. در صورتی که بر اثر گاز زدن جسم سخت لب‌پریدگی رخ دهد، دکتر شمس‌پور در یک جلسه کوتاه ۱۵ دقیقه‌ای بدون نیاز به تعویض کل ونیر، همان بخش را با مواد همرنگ ترمیم و پولیش می‌کنند.
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* 12. ARTICLE TAGS */}
            <div className="flex items-center gap-2 flex-wrap pt-1">
              <span className="text-xs sm:text-sm text-[#565e74] font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-base">sell</span>
                <span>برچسب‌ها:</span>
              </span>
              {(currentArticle.tags && currentArticle.tags.length > 0
                ? currentArticle.tags
                : ['کامپوزیت_دندان', 'لمینت_سرامیکی', 'طرح_لبخند', 'دندانپزشکی_پاکدشت', 'دکتر_انوشیروان_شمس_پور']
              ).map((tag, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={onNavigateBlog}
                  className="px-3 py-1 bg-[#eceef0] hover:bg-[#dbe1ff] hover:text-[#004ac6] transition-colors text-xs text-[#434655] rounded-full border border-[#c3c6d7]/20 cursor-pointer"
                >
                  #{tag.replace(/^#/, '')}
                </button>
              ))}
            </div>

            {/* 13. COMMENTS & USER QUESTIONS SECTION */}
            <section
              id="comments-section"
              className="bg-white p-5 sm:p-8 rounded-3xl shadow-xs border border-[#c3c6d7]/30"
            >
              <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
                <h2 className="text-lg sm:text-2xl font-bold text-[#191c1e] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#004ac6] text-2xl">forum</span>
                  <span>دیدگاه‌ها و پرسش‌های بیماران ({18 + submittedComments.length} نظر)</span>
                </h2>
                <span className="text-xs text-[#004ac6] font-bold bg-[#dbe1ff]/60 px-3 py-1 rounded-full">
                  پاسخ‌گویی مستقیم توسط دکتر شمس‌پور
                </span>
              </div>

              {/* Question Submission Form */}
              <form
                onSubmit={handleCommentSubmit}
                className="bg-[#f2f4f6] p-4 sm:p-5 rounded-2xl border border-[#c3c6d7]/30 mb-8"
              >
                <h3 className="font-bold text-[#191c1e] text-xs sm:text-sm mb-1.5">
                  طرح سوال از دکتر انوشیروان شمس‌پور درباره طرح لبخند
                </h3>
                <p className="text-xs text-[#565e74] mb-4">
                  می‌توانید شرایط دندانی خود را بنویسید تا روش درمانی مناسب به شما پیشنهاد شود.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <input
                    value={commentName}
                    onChange={(e) => setCommentName(e.target.value)}
                    className="w-full bg-white border border-[#c3c6d7]/40 rounded-full px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#004ac6]"
                    placeholder="نام و نام خانوادگی *"
                    required
                    type="text"
                  />
                  <input
                    value={commentPhone}
                    onChange={(e) => setCommentPhone(e.target.value)}
                    className="w-full bg-white border border-[#c3c6d7]/40 rounded-full px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#004ac6] text-right"
                    dir="ltr"
                    placeholder="شماره تماس (اختیاری جهت هماهنگی)"
                    type="tel"
                  />
                </div>
                <textarea
                  value={commentMessage}
                  onChange={(e) => setCommentMessage(e.target.value)}
                  className="w-full bg-white border border-[#c3c6d7]/40 rounded-2xl p-3 sm:p-4 text-xs sm:text-sm focus:outline-none focus:border-[#004ac6] mb-3"
                  placeholder="متن پرسش یا شرح وضعیت دندان‌هایتان... *"
                  required
                  rows={3}
                />
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-[#565e74] flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span>شماره تماس شما نمایش داده نخواهد شد.</span>
                  </span>
                  <button
                    className="w-full sm:w-auto bg-[#004ac6] hover:bg-[#2563eb] text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-xs transition-all active:scale-95 cursor-pointer"
                    type="submit"
                  >
                    ارسال دیدگاه و سوال
                  </button>
                </div>
              </form>

              {/* Newly submitted comments */}
              {submittedComments.map((c) => (
                <div key={c.id} className="border-b border-[#c3c6d7]/20 pb-5 mb-5 animate-fadeIn">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#dbe1ff] text-[#004ac6] font-bold flex items-center justify-center text-xs">
                        {c.name.slice(0, 1)}
                      </div>
                      <div>
                        <span className="font-bold text-[#191c1e] text-xs sm:text-sm">{c.name}</span>
                        <span className="text-[10px] text-[#565e74] block">{c.date}</span>
                      </div>
                    </div>
                    <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-medium">
                      در انتظار تایید پزشک
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#434655] pr-10 leading-relaxed">{c.text}</p>
                </div>
              ))}

              {/* Existing Comments Thread */}
              <div className="space-y-6">
                {/* Comment 1 + Doctor Reply */}
                <div className="border-b border-[#c3c6d7]/20 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#dae2fd] text-[#004ac6] font-bold flex items-center justify-center text-xs">
                        م.ر
                      </div>
                      <div>
                        <span className="font-bold text-[#191c1e] text-xs sm:text-sm">
                          مهدی رحمانی (مراجع پاکدشت)
                        </span>
                        <span className="text-[11px] text-[#565e74] block">۲ روز قبل</span>
                      </div>
                    </div>
                    <span className="text-[11px] bg-[#eceef0] px-2.5 py-0.5 rounded-full text-[#565e74] font-medium">
                      بیمار کلینیک
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#565e74] pr-11 text-justify mb-3 leading-relaxed">
                    سلام و وقت بخیر دکتر عزیز. من ۲ دندان جلو فاصله‌دار دارم و بقیه دندان‌هایم مرتب هستند. آیا پیشنهاد می‌کنید فقط همان ۲ دندان را کامپوزیت کنم یا باید کل ۶ دندان فک بالا کار شود؟
                  </p>
                  {/* Nested Doctor Reply */}
                  <div className="mr-6 sm:mr-10 bg-[#004ac6]/5 border-r-2 border-[#004ac6] rounded-2xl p-4 mt-3">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-full bg-[#004ac6] text-white flex items-center justify-center shadow-xs">
                        <span className="material-symbols-outlined text-sm">verified</span>
                      </div>
                      <div>
                        <span className="font-bold text-[#004ac6] text-xs sm:text-sm">
                          پاسخ دکتر انوشیروان شمس‌پور
                        </span>
                        <span className="text-[10px] text-[#565e74] mr-2">جراح و دندان‌پزشک</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#434655] leading-relaxed text-justify">
                      درود بر شما جناب رحمانی. در صورتی که فرم و رنگ طبیعی دندان‌های کناری زیبا باشد، هیچ الزامی به پوشش تمام دندان‌ها نیست و با ونیر کامپوزیت لیرینگ صرفاً روی همان ۲ دندان سنترال می‌توان با تطبیق دقیق رنگ (Color Matching) فاصله را در یک جلسه بدون تراش بست. جهت معاینه دقیق‌تر می‌توانید به مجتمع پزشکی راستین مراجعه فرمایید.
                    </p>
                  </div>
                </div>

                {/* Comment 2 */}
                <div className="border-b border-[#c3c6d7]/20 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-[#dae2fd] text-[#004ac6] font-bold flex items-center justify-center text-xs">
                        س.م
                      </div>
                      <div>
                        <span className="font-bold text-[#191c1e] text-xs sm:text-sm">سارا محمدی</span>
                        <span className="text-[11px] text-[#565e74] block">۴ روز قبل</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-[#565e74] pr-11 text-justify leading-relaxed">
                    ممنون از توضیحات عالی و منصفانه‌تان. خیلی از دندانپزشک‌ها اصرار به لمینت سرامیکی دارند ولی نکته تراش مینا برای من بسیار مهم بود. حتما برای ویزیت حضوری در پاکدشت وقت رزرو خواهم کرد.
                  </p>
                </div>
              </div>
            </section>
          </article>

          {/* ================= 6. STICKY SIDEBAR (4 COLS) ================= */}
          <aside className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
            {/* A. Table of Contents (فهرست عناوین با نشانگر) */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-xs border border-[#c3c6d7]/30">
              <div className="flex items-center gap-2 text-[#004ac6] font-bold text-base mb-4 pb-2 border-b border-[#c3c6d7]/20">
                <span className="material-symbols-outlined">format_list_numbered_rtl</span>
                <h3>فهرست مطالب این مقاله</h3>
              </div>
              <nav className="space-y-1.5 text-xs sm:text-sm">
                <button
                  type="button"
                  onClick={() => scrollToSection('introduction')}
                  className={`w-full flex items-center gap-2 py-2 px-3 rounded-xl transition-colors text-right cursor-pointer ${
                    activeTocSection === 'introduction'
                      ? 'bg-[#004ac6]/10 text-[#004ac6] font-bold'
                      : 'hover:bg-[#f2f4f6] text-[#565e74]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      activeTocSection === 'introduction' ? 'bg-[#004ac6]' : 'bg-[#c3c6d7]'
                    }`}
                  />
                  <span>مقدمه: چرایی اهمیت انتخاب صحیح</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('comparison-table')}
                  className={`w-full flex items-center gap-2 py-2 px-3 rounded-xl transition-colors text-right cursor-pointer ${
                    activeTocSection === 'comparison-table'
                      ? 'bg-[#004ac6]/10 text-[#004ac6] font-bold'
                      : 'hover:bg-[#f2f4f6] text-[#565e74]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      activeTocSection === 'comparison-table' ? 'bg-[#004ac6]' : 'bg-[#c3c6d7]'
                    }`}
                  />
                  <span>جدول مقایسه جامع پارامترها</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('clinical-cases')}
                  className={`w-full flex items-center gap-2 py-2 px-3 rounded-xl transition-colors text-right cursor-pointer ${
                    activeTocSection === 'clinical-cases'
                      ? 'bg-[#004ac6]/10 text-[#004ac6] font-bold'
                      : 'hover:bg-[#f2f4f6] text-[#565e74]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      activeTocSection === 'clinical-cases' ? 'bg-[#004ac6]' : 'bg-[#c3c6d7]'
                    }`}
                  />
                  <span>کیس‌های بالینی قبل و بعد پاکدشت</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('candidacy')}
                  className={`w-full flex items-center gap-2 py-2 px-3 rounded-xl transition-colors text-right cursor-pointer ${
                    activeTocSection === 'candidacy'
                      ? 'bg-[#004ac6]/10 text-[#004ac6] font-bold'
                      : 'hover:bg-[#f2f4f6] text-[#565e74]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      activeTocSection === 'candidacy' ? 'bg-[#004ac6]' : 'bg-[#c3c6d7]'
                    }`}
                  />
                  <span>شما کاندید کدام روش هستید؟</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('faq-section')}
                  className={`w-full flex items-center gap-2 py-2 px-3 rounded-xl transition-colors text-right cursor-pointer ${
                    activeTocSection === 'faq-section'
                      ? 'bg-[#004ac6]/10 text-[#004ac6] font-bold'
                      : 'hover:bg-[#f2f4f6] text-[#565e74]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      activeTocSection === 'faq-section' ? 'bg-[#004ac6]' : 'bg-[#c3c6d7]'
                    }`}
                  />
                  <span>پاسخ به سوالات متداول مراجعین</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('comments-section')}
                  className={`w-full flex items-center gap-2 py-2 px-3 rounded-xl transition-colors text-right cursor-pointer ${
                    activeTocSection === 'comments-section'
                      ? 'bg-[#004ac6]/10 text-[#004ac6] font-bold'
                      : 'hover:bg-[#f2f4f6] text-[#565e74]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      activeTocSection === 'comments-section' ? 'bg-[#004ac6]' : 'bg-[#c3c6d7]'
                    }`}
                  />
                  <span>دیدگاه‌ها و پرسش و پاسخ</span>
                </button>
              </nav>
            </div>

            {/* B. Quick Appointment Booking Card (پاکدشت و تلفن مستقیم) */}
            <div className="bg-gradient-to-br from-[#004ac6] to-[#2563eb] text-white p-6 rounded-3xl shadow-md relative overflow-hidden text-right">
              <div className="absolute -right-10 -top-10 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-2xl">calendar_month</span>
                <span className="text-[11px] font-bold tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
                  نوبت‌دهی آنلاین
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2">
                مشاوره حضوری طرح لبخند با دکتر شمس‌پور
              </h3>
              <p className="text-xs text-blue-100 mb-5 leading-relaxed">
                معاینه و آنالیز رایگان قوس لبخند در کلینیک پارمیس (پاکدشت، مجتمع پزشکی راستین).
              </p>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full bg-white text-[#004ac6] hover:bg-blue-50 py-3 rounded-full text-center font-bold flex items-center justify-center gap-2 shadow-sm transition-transform active:scale-[0.98] mb-3 text-xs sm:text-sm"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                <span>تماس مستقیم: {CLINIC_INFO.phoneCompact}</span>
              </a>
              <div className="flex items-center justify-center gap-1.5 text-blue-100 text-xs text-center">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span>پاسخگویی همه‌روزه از ساعت ۱۶ الی ۲۱</span>
              </div>
            </div>

            {/* C. Author Doctor Profile Card */}
            <div className="bg-white p-6 rounded-3xl shadow-xs border border-[#c3c6d7]/30 flex flex-col items-center text-center">
              <div className="relative mb-3">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#dae2fd] shadow-md bg-[#eceef0]">
                  <img
                    src={CLINIC_INFO.doctorImage}
                    alt={CLINIC_INFO.doctorName}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute bottom-0 right-1 bg-[#004ac6] text-white p-1 rounded-full text-xs flex items-center justify-center shadow-xs">
                  <span className="material-symbols-outlined text-sm">verified</span>
                </span>
              </div>
              <h4 className="font-bold text-[#191c1e] text-base mb-1">
                {CLINIC_INFO.doctorName}
              </h4>
              <p className="text-[#004ac6] text-xs font-bold mb-3">
                {CLINIC_INFO.doctorRole}
              </p>
              <p className="text-xs text-[#565e74] leading-relaxed mb-4 text-justify">
                دارای بورد تخصصی و سال‌ها تجربه در ارائه درمان‌های پیشرفته ایمپلنت، اصلاح لبخند دیجیتال و پروتزهای دندانی در شهرستان پاکدشت.
              </p>
              <div className="w-full bg-[#f2f4f6] rounded-2xl p-3 flex justify-around text-center mb-4 border border-[#c3c6d7]/30">
                <div>
                  <span className="block font-bold text-[#191c1e] text-sm">+۱۴</span>
                  <span className="text-[11px] text-[#565e74]">سال تجربه</span>
                </div>
                <div className="border-r border-[#c3c6d7]/30" />
                <div>
                  <span className="block font-bold text-[#191c1e] text-sm">+۳,۵۰۰</span>
                  <span className="text-[11px] text-[#565e74]">لبخند موفق</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onNavigateHome}
                className="w-full py-2.5 rounded-full border border-[#004ac6] text-[#004ac6] hover:bg-[#004ac6]/5 text-xs font-bold transition-colors cursor-pointer"
              >
                مشاهده رزومه و سوابق پزشک
              </button>
            </div>

            {/* D. Popular Related Articles in Smile Design */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-xs border border-[#c3c6d7]/30">
              <h3 className="font-bold text-[#191c1e] text-sm sm:text-base mb-4 pb-2 border-b border-[#c3c6d7]/20 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#004ac6]">trending_up</span>
                <span>پرطرفدارترین مقالات لبخند</span>
              </h3>
              <div className="space-y-4">
                {popularArticles.map((pop) => (
                  <div
                    key={pop.id}
                    onClick={() => {
                      onSelectArticle(pop.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex gap-3 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#eceef0] overflow-hidden shrink-0">
                      <img
                        src={pop.image}
                        alt={pop.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h5 className="text-xs font-bold text-[#191c1e] group-hover:text-[#004ac6] transition-colors line-clamp-2 leading-snug">
                        {pop.title}
                      </h5>
                      <span className="text-[10px] text-[#565e74] mt-1 block">
                        {pop.readTime}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* 14. RELATED ARTICLES (۳ کارت استاندارد) */}
        <section className="mt-14 sm:mt-16 pt-10 border-t border-[#c3c6d7]/30">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[#004ac6] text-xs font-bold block mb-1">بیشتر بخوانید</span>
              <h2 className="text-lg sm:text-2xl font-bold text-[#191c1e]">
                مقالات مرتبط با دندان‌پزشکی زیبایی
              </h2>
            </div>
            <button
              type="button"
              onClick={onNavigateBlog}
              className="text-[#004ac6] font-bold text-xs sm:text-sm flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>مشاهده همه مقالات</span>
              <span className="material-symbols-outlined text-base rotate-180">arrow_back</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  onSelectArticle(rel.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-[#c3c6d7]/30 flex flex-col group hover:-translate-y-1 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="relative h-48 bg-[#eceef0] overflow-hidden">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#004ac6] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-2xs">
                    {rel.category}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-[#565e74] block mb-1.5">
                      {rel.date || '۲۰ فروردین ۱۴۰۳'} • زمان: {rel.readTime}
                    </span>
                    <h3 className="font-bold text-[#191c1e] text-sm group-hover:text-[#004ac6] transition-colors mb-2 leading-snug line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-[#565e74] line-clamp-2 leading-relaxed">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#c3c6d7]/20 flex items-center justify-between text-xs text-[#004ac6] font-bold">
                    <span>مطالعه مقاله</span>
                    <span className="material-symbols-outlined text-sm rotate-180">arrow_back</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 15. CLINIC VISIT CALL TO ACTION BANNER (PAKDASHT) */}
        <section className="mt-14 sm:mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-[#c3c6d7]/30 shadow-sm relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#dae2fd] text-[#004ac6] rounded-full text-xs font-bold mb-3">
              <span className="material-symbols-outlined text-sm">pin_drop</span>
              <span>مرکز تخصصی دندان‌پزشکی در پاکدشت</span>
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#191c1e] mb-3">
              آماده لبخندی بی‌نقص و مطمئن هستید؟
            </h2>
            <p className="text-xs sm:text-base text-[#565e74] leading-relaxed mb-4">
              برای معاینه بالینی، ارزیابی ضخامت مینای دندان و دریافت برآورد شفاف هزینه‌ها، همین امروز با کلینیک پارمیس (دکتر انوشیروان شمس‌پور) تماس بگیرید یا نوبت حضوری خود را در پاکدشت هماهنگ نمایید.
            </p>
            <div className="flex items-center gap-4 text-xs text-[#434655] flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#004ac6] text-base">verified</span>
                <span>تجهیزات دیجیتال مدرن</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#004ac6] text-base">verified</span>
                <span>متریال درجه یک اصل سوئیس و ژاپن</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#004ac6] text-base">verified</span>
                <span>طرف قرارداد بیمه‌ها</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`tel:${CLINIC_INFO.phone2}`}
              className="bg-[#004ac6] text-white hover:bg-[#2563eb] transition-all px-8 py-3.5 rounded-full text-center font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md active:scale-95"
            >
              <span className="material-symbols-outlined text-lg">call</span>
              <span>تماس با مطب: {CLINIC_INFO.phoneCompact2}</span>
            </a>
            <button
              type="button"
              onClick={onNavigateHome}
              className="bg-[#f2f4f6] hover:bg-[#e0e3e5] text-[#191c1e] transition-colors px-8 py-3.5 rounded-full text-center font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-[#c3c6d7]/30 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">directions</span>
              <span>مسیریابی به مجتمع پزشکی راستین</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
