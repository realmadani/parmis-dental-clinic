import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData.ts';

interface SmileGalleryPageProps {
  onOpenBooking: (preselectedService?: string) => void;
  onNavigateHome: () => void;
  onNavigateServices?: () => void;
  onNavigateBlog?: () => void;
}

// -------------------------------------------------------------
// Interactive Reusable Before/After Comparison Slider Component
// -------------------------------------------------------------
interface ComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  heightClass?: string;
  aspectClass?: string;
  alt: string;
  accentColor?: string;
}

const ComparisonSlider: React.FC<ComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'قبل از درمان',
  afterLabel = 'پایان درمان',
  heightClass = 'h-52 sm:h-56',
  aspectClass,
  alt,
  accentColor = '#004ac6',
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-[#eceef0] select-none ${
        aspectClass ? aspectClass : heightClass
      } w-full group shadow-inner`}
      dir="ltr"
    >
      {/* 1. Base Layer: BEFORE Image (Full width background) */}
      <img
        src={beforeImage}
        alt={`${alt} - قبل از درمان`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />

      {/* 2. Top Layer: AFTER Image (Clipped from left 0% to sliderPos%) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
          WebkitClipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
        }}
      >
        <img
          src={afterImage}
          alt={`${alt} - بعد از درمان`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />
      </div>

      {/* 3. Divider Line & Circular Handle */}
      <div
        className="absolute top-0 bottom-0 pointer-events-none z-10 -translate-x-1/2 flex items-center justify-center transition-transform"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Line */}
        <div className="w-0.5 h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)]" />

        {/* Circular Thumb Handle */}
        <div
          className="absolute w-8 h-8 sm:w-9 sm:h-9 rounded-full text-white shadow-xl border-2 border-white flex items-center justify-center transform active:scale-95 transition-transform"
          style={{ backgroundColor: accentColor }}
        >
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* 4. Overlay Labels */}
      {/* Left Badge: After Treatment */}
      <span
        className="absolute bottom-2.5 left-2.5 text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md pointer-events-none z-10 shadow-xs"
        style={{ backgroundColor: `${accentColor}E6` }}
      >
        {afterLabel}
      </span>

      {/* Right Badge: Before Treatment */}
      <span className="absolute bottom-2.5 right-2.5 bg-[#2d3133]/90 text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-md pointer-events-none z-10 shadow-xs">
        {beforeLabel}
      </span>

      {/* Swipe Hint Pill */}
      <div className="absolute top-2.5 right-2.5 bg-black/50 text-white/95 text-[10px] px-2.5 py-0.5 rounded-full pointer-events-none backdrop-blur-sm flex items-center gap-1 z-10 font-medium">
        <span className="material-symbols-outlined text-[13px]">swipe</span>
        <span>لمس و کشیدن</span>
      </div>

      {/* 5. Invisible Range Slider Input for Drag/Touch Event */}
      <input
        type="range"
        min="0"
        max="100"
        step="0.1"
        value={sliderPos}
        aria-label="لغزنده مقایسه قبل و بعد"
        onChange={(e) => setSliderPos(parseFloat(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 z-20 m-0 cursor-ew-resize"
      />
    </div>
  );
};

// -------------------------------------------------------------
// Clinical Cases Database
// -------------------------------------------------------------
interface ClinicalCase {
  id: string;
  caseNumber: string;
  category: 'composite' | 'laminate' | 'implant' | 'gummy' | 'bleaching' | 'rehabilitation';
  categoryLabel: string;
  icon: string;
  accentColor: string;
  title: string;
  patientInfo: string;
  duration: string;
  description: string;
  guaranteeText: string;
  afterBadge: string;
  beforeImage: string;
  afterImage: string;
  serviceBookingId: string;
}

const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 'case-composite-diastema',
    caseNumber: 'کیس #۲۱۴',
    category: 'composite',
    categoryLabel: 'کامپوزیت نانو سرامیک',
    icon: 'auto_fix_high',
    accentColor: '#004ac6',
    title: 'بستن دیاستم فک بالا و لایه‌بندی نانو در ۱ جلسه',
    patientInfo: 'خانم ۲۷ ساله • پاکدشت',
    duration: 'تک‌جلسه (۲ ساعت و نیم)',
    description: 'بستن فاصله بین دندان‌های پیشین با تکنیک لایه‌بندی چندرنگ Tokuyama ژاپن بدون هیچ‌گونه تراش بافت سالم مینا.',
    guaranteeText: 'بدون بی‌حسی و بدون درد',
    afterBadge: 'بعد از ۱ جلسه',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXeHC0SAZprmuRhdCiYr54eWhHF_mki8Zb7YUh6MjeFg-cxRPIRcNoq9F18SOx7gM1XK7NwLi4rkke1UoAktdiI8uj8zYXQINfqgf8l39LNWe8i0Pq91TkmMMukqtCOdXycIrfSGFuOhJRJrVVBNAtaB2HazziEu6th9VRmCt2s-bSFDimg9USXZOn5s0dG1XIUUd5BrH2XtM-TfDU5lc6PL4baIcLGJEWNYChm_Ht6RvpoBIE0IRO',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmYMn9_xpu996h3jWqIBaCBzlD-0adrq2CB44mP18Fz3UcIMqT0UGXXNFgm55d-0MWGzTjdQ8YdxPmblckF0aOJS3MKvDOSsRJqQ73jbEixJ1eH1QjEVSKp0bKgpGjW84TjTVJcI6UAd-v8bO7rgjA0y_9_YngT3VhWt5A1kRpzQNrmf3qvlzxW6Oa2sk6mqwpejTMHdbUaHhKz2rsaRuxLBQVd558J4WdwIUw7HLC-KF6msVy_8bE',
    serviceBookingId: 'cosmetic-composite',
  },
  {
    id: 'case-laminate-emax',
    caseNumber: 'کیس #۳۰۸',
    category: 'laminate',
    categoryLabel: 'پرسلن لمینت E-Max',
    icon: 'diamond',
    accentColor: '#004ac6',
    title: 'اصلاح بدرنگی تتراسایکلین و فرم دندان‌ها',
    patientInfo: 'آقای ۳۴ ساله • پاکدشت',
    duration: '۸ واحد قدامی (۲ جلسه)',
    description: 'طراحی لبخند متناسب با میمیک چهره با لمینت سرامیکی شیشه‌ای ایماکس سوئیس و اصلاح خط لبخند متقارن با حداقل تراش.',
    guaranteeText: 'ضمانت کتبی ۱۰ ساله',
    afterBadge: 'بعد از لمینت سرامیکی',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoM0lnD2KgyH9xirf2MUV1NDYbaxrKUYqKgKJZ6QHZNJjtZUyXu5buX7q4WDJITId0NmOGHnMrJcF6jBpmD-V7wHCW5Mg4HExQVsoD87DcDEqd56-HqAKFV1PItVPJbUrK1Q9gAIpuc7BKRS5tsxodK9vhSFOXSCeJvCYxwEC9Ryp_Y-01uXghJwk5LaYUBAEw99Tm9LkkeNSvVpwhdH3kJg0xwskrNI7SZYXlm9bt2nOhT6jLnZ_C',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzxW9EZdYXhDHL5IULw_ATMDiWeFPlECj3Ui3RKW5xiD3VWwE7XgyE8R_YnZa-q9DYNstSqS_881-H_X-e7YjsAqmacdAvnOawjlMvT_4ZUHqYvsjgJBTijOGKq4r39jM0wmX8WV2jX5l7qj52FJzqHeBuJ69cOzsvVlcX6cFeu6pG8hrq39H_r7NjZsqASksaPR0IUSvKQi463OUTA6Mk5D3NQflwTmsjWof-xrfB_EnEkDBMiP_P',
    serviceBookingId: 'cosmetic-composite',
  },
  {
    id: 'case-digital-implant',
    caseNumber: 'کیس #۴۵۵',
    category: 'implant',
    categoryLabel: 'ایمپلنت دیجیتال',
    icon: 'dentistry',
    accentColor: '#00569c',
    title: 'کاشت فوری ایمپلنت و روکش زیرکونیا',
    patientInfo: 'آقای ۴۸ ساله • قیام‌دشت',
    duration: 'جراحی بدون بخیه (Flapless)',
    description: 'استفاده از سرجیکال گاید اختصاصی سه‌بعدی، پایه تیتانیومی اشترومن سوئیس و تحویل روکش تمام‌سرامیک بدون تورم و بدون درد.',
    guaranteeText: 'پایه اشترومن با ضمانت مادام‌العمر',
    afterBadge: 'بعد از کاشت و روکش',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByP-3e29b5Zayma0foQQ9FWc804xowE7cSwcPMVHH7mh0GPAFD45dHhI75CZs8eH5TviDI0wYdHMY_WbccEPqRmBeX9piiSXsUVubUTNg_WWE1DeweAUDSi481VNIzwy6d6FhoudOejk1QVOFYGITgGmoaocI-L6TLd8Gy8KbOtDnXKdIIQQKGJX_UODUl-aRgk2ZXrFCmWDpGSABzMumi_mAy2B59AbBZHwHM-rill-kke8Nkiqou',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMsO07WVVr0Yy8aIvr-0ozAm_TdGXXhwNh_fadtN7K7VjNlTVW7DPWTyamnlELdwcLXpSwXLQlb3DDNnX33_lbDaUIK3xn-bbQSgL368NynL9-kEzOxLqcL2njHV2kTnFu3Hl1LtNxqHqSCNaN-wFrWBhs3pfrS_CmC94k7vSmCl3vjbf3WOsS5JMkAfS8wJCksiTrcgsSm_dPrgzbAt2QBPXTHRVPxLa-Wmeq6_XwZez9pdA08VOW',
    serviceBookingId: 'dental-implants',
  },
  {
    id: 'case-gummy-smile',
    caseNumber: 'کیس #۱۹۲',
    category: 'gummy',
    categoryLabel: 'اصلاح لبخند لثه‌ای',
    icon: 'flare',
    accentColor: '#004ac6',
    title: 'جراحی ژنژیوکتومی و تعادل ارتفاع تاج دندان',
    patientInfo: 'خانم ۲۳ ساله • پاکدشت',
    duration: 'لیزر دیود + ۶ واحد ونیر',
    description: 'کاهش نمایش اضافه لثه هنگام خندیدن با لیزر بدون خونریزی و نصب ۶ واحد ونیر سرامیکی فوق‌نازک جهت کشیده‌تر شدن دندان‌ها.',
    guaranteeText: 'بهبودی بلافاصله پس از جراحی',
    afterBadge: 'بعد از لیفت و ونیر',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWVWMdAm0nvK0lblD53JphFFc-AtERBD1BA8ZP9AJPCo9-gQBZQRRlUutA3COxXEaYiC_gyPknYo3URKG8_FsQuZEZnV1Muxx60JP9ZRVgRQsSNk5ZPIHovfdw4sNLyX_2ov4d_64rLALyhNa_hTCUcSFd0ZEFMyE5MNwW15ZDzP7gtduFL-BvS3VMNVIiSDCpFCuFnHZBYl7I-_vGgMS6aXqypjigoA0kNoLw0mUPD9wJQnnTH2Jd',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC03F-CCzZ-RT0wJ52ZNXhoyuHW6j6Xgf8f9A2M9zMchf_0cZx99NRkrvDs1PJuIzVxb2RM9Nb-XuyoIFA-V-xj8sk4_yuJC2UvohS2yzoc2bbRNdJhYNTLo-X514Q9OvCh-ayAWaSNFcyKWj6NWo0FGGiy0TzKtuTVVTUo6V6bClEFgzZWJQApzqBkmdGdGb_4T1CHzzw9Ktqq9yJCUf6v4aQMcmuWQ2UvdbZfwwiilbCEuJ1SR18r',
    serviceBookingId: 'cosmetic-composite',
  },
  {
    id: 'case-bleaching-office',
    caseNumber: 'کیس #۱۱۷',
    category: 'bleaching',
    categoryLabel: 'بلیچینگ تخصصی مطب',
    icon: 'light_mode',
    accentColor: '#004ac6',
    title: 'روشن‌سازی ۴ درجه‌ای مینای دندان',
    patientInfo: 'خانم ۲۹ ساله • ورامین',
    duration: 'آفیس + هوم در ۴۵ دقیقه',
    description: 'انجام بلیچینگ هوم و آفیس توأم با ژل اولترادنت آمریکا همراه با محافظ ژل لثه، بدون کمترین حساسیت حرارتی یا درد پس از درمان.',
    guaranteeText: 'نتیجه پایدار با تری اختصاصی شبانه',
    afterBadge: 'بعد از سفیدسازی',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxt1-43rKkC2yNX8MzHuwKVW29APrmZ-hWmu8iS8-atQkr1caYTC5rTuiSbcSC_zEV8l2i72s7eDhlXKZX4Yita8mUxzbMsCpK75JSHOL9dN4vTpocIjt4myP_PZkgduIp4hQ3FD01s2nSlNJbpFv2tnkaxSd8ETXLpUZWuzx6EHXU3Ydd1MkA2fce-0YILYWfURxg0HEetXNXK_2o4SLSGiyZgBL-Li7Y8W46ZBzEal6yVjfXrsDz',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPHB-CjF_xDVQO_gN5Bt-HJmaMHC883jkF0mvD_q7imuy56lzYzQqLt_rdTUSX-FTTkyz9b3ecWMipbjEDMgzYYESgygWVSP6XFxyE4nLEWXWbUaJhz2HWVsPBB4jruzOI0os6CzW_D030nDmfDnRjRA-bF_sxD6BTTQsuQpOieevWqrs4ZZYO77BAjlvV9VPnX5h8NMuzpgg1vnulj9ixOPhsd_yCm9Vi-FLL9pgNznXx4WRCAucw',
    serviceBookingId: 'teeth-whitening',
  },
  {
    id: 'case-full-arch',
    caseNumber: 'کیس #۵۶۰',
    category: 'rehabilitation',
    categoryLabel: 'بازسازی کامل فک بالا',
    icon: 'health_and_safety',
    accentColor: '#00569c',
    title: 'بریج تمام سرامیک زیرکونیوم و بازسازی فانکشنال',
    patientInfo: 'آقای ۵۹ ساله • پاکدشت',
    duration: 'بریج زیرکونیا و ایمپلنت',
    description: 'بازیابی ارتفاع عمودی صورت، اکلوژن صحیح و جویدن آسان با استفاده از زیرکونیای یکپارچه تراش‌خورده با میلینگ دیجیتال CAD/CAM.',
    guaranteeText: 'استحکام فوق‌العاده ۱۲۰۰ مگاپاسکال',
    afterBadge: 'بعد از بازسازی فک با زیرکونیا',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAp0FFidKRPxAMCNJ4LgxTHNYIZsbSSYpIbDZ2bGKG8x3WpogTVLq9AlFLNBooxoguzN8DThbUZWnjN0BVonxy4uBCdHxLk71PUOXXzOUhnFTTjXmj_MVb1VR6Hb-fz1gXjWqbLhgkQjGphIEvbXzwMKaBAh5HI9M7xyCvEs1ATCfqAycg0iG7WYxNwX4vO9JVb-vCgWajcdv5AQZ0HE3mWtc7OfQBC8hntqzTk8oC0F53W_Vatw1nA',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkn0QlSAerPw6f7Tfk28ykl6V7T-feKrwfJpOClfsQdetSwGH4gFJ1v3Lrn-cTKdviPVxs149FeRUZDbx804zZOLVXcDOLSCQIWRokkn2MjVH-v3denQOQJ_Ahz-zS7IUg2ruTwo9iUBCnLBhQqky3tyP8I4bzUpELI_76TzWEoPFiEQsuyEOIPx0oZSAZ8cS_7IRBoH3qYBswM5k-QV9vg534hZK2OWm1DkyxZyyzweZh0I63k1Wu',
    serviceBookingId: 'dental-implants',
  },
];

// Extra cases for "Load more"
const EXTRA_CASES: ClinicalCase[] = [
  {
    id: 'case-extra-1',
    caseNumber: 'کیس #۶۱۰۴',
    category: 'composite',
    categoryLabel: 'کامپوزیت نانو سرامیک',
    icon: 'auto_fix_high',
    accentColor: '#004ac6',
    title: 'اصلاح عدم تقارن لبه‌های قدامی و خط لبخند',
    patientInfo: 'خانم ۳۱ ساله • پاکدشت',
    duration: '۶ واحد فک بالا • ۲ ساعت',
    description: 'ترمیم کامپوزیتی بدون تراش با رنگ سوپر بلیچ طبیعی و انعکاس شفاف لبه‌های اینسیزال.',
    guaranteeText: 'پولیش دوره‌ای رایگان',
    afterBadge: 'پایان درمان',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLq7K0WycCfDfTZOLw5guJ_QEib142TaLSMSgp-NW3EzX6nduY24vAT7kYK_rcaBt0vAU0e-3b0hZa5VrfWG69b4gOHdkCqUVcEqYVJZokYZ2MdtZTEABY9quE6uFzRvs3WxbgbGKQr6eimwChL8cR-UUIK6zYfd6t-Ku0_Uc6bldhtm3Wa6UlNkMW14IQaxrGtTuUzlKdU4idFyjdk8y2HAjHgxFModnf0EmQg4rHoTgpt__57tUB',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiG0rD46U7aSt7daTtv1UeC6DE-Gw7SOCPqBEhmK0kiM116JIZsVZUkpgoLo5M2mgRKdoYriPRetmYWp-Q73VQsvLWd_EBhT50mfGYwbTvEWAobVRFMtj-mSbfLJVO03RDJ_qN7x2mvJzUgS2kTYMSM0K6YfjeSuOnoSAj9zGMFBtJykCWF9GzDMTvg_Sh_OsyjO3Q_wbkrFr8AL3HY6DaHRRIXuyQRyASnm8PArgxCb6XSf0L3tyI',
    serviceBookingId: 'cosmetic-composite',
  },
  {
    id: 'case-extra-2',
    caseNumber: 'کیس #۷۱۸۹',
    category: 'laminate',
    categoryLabel: 'لمینت پرسلن E-Max',
    icon: 'diamond',
    accentColor: '#004ac6',
    title: 'بازسازی لبخند با ۱۰ واحد لمینت کادکام آلمانی',
    patientInfo: 'آقای ۴۱ ساله • پاکدشت',
    duration: '۲ جلسه کاری در ۹ روز',
    description: 'تراش میکرومتری ۰.۳ میلیمتر با تطابق کامل انحنای لب‌ها و ضمانت‌نامه مکتوب ۱۰ ساله.',
    guaranteeText: 'ضمانت کتبی ۱۰ ساله',
    afterBadge: 'پایان درمان',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkjoWRsrzBSWd0x5bRnu6e_YeSScVVukFac7m5naWA7V7gN3EebgTRPBJ6cQizmKyJaTfKsEVv0i9RaN0Bv9xo7Cspk21ZKQPSoVku1by0P7ockBIPSvDTBMJz85bhqJXNmkop-F1YvdEwRGvDlXdfVTYvA918cIloW0QAMQw-81Cg9EmOeFcb7k7QVtoqY6HUN6fzgpO6Vzaae1VbOTuExE4VheywQZnd7VntfAlat4-Es8_ag73b',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFfYE4agYQDUohoK5hV8sh6AtT01cnZaVzDGBtmMHldPnBJW7a2No9wwezoPL3CwDs902WLbYSiys9FKMTzFmIavB2uJjbhPvyFM6hBLDgnlyBfENRklyAYzY_aVKyJbqoyzlWpohu1b2o1SSFJ4bcztpZBHx4cY53aOKqE1ybjFRfYGA2AvkKWkbaWg8udPP60JkyUO2LhJ8BBqfqbKnmtv0f9qPzSp0R-FtEn0uLmfd8CmP0hztZ',
    serviceBookingId: 'cosmetic-composite',
  },
];

// Patient Testimonial Data
const TESTIMONIALS = [
  {
    id: 'review-1',
    name: 'خانم سمیرا امینی',
    location: 'از پاکدشت • درمان ونیر کامپوزیت ۶ واحد',
    duration: '۰۲:۱۵ دقیقه',
    quote: '«اصلاً باورم نمی‌شد توی خود پاکدشت چنین درمان ظریف و بدون نقصی انجام بشه؛ کامپوزیت‌ها اصلاً برآمده نیستند و لبخندم کاملاً طبیعی شده.»',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHXVlrWjerzdg9GR5Kxk6SaS90QnME770P9okJcfUGbZUyMJEtzshnF7-qkOBqOuDEharY0TULdtUb-PU_542x-kyN39qNewyLLRJ2tgBqbmS_cj9O6mWXgiNS6bKiqpUwAhs1bCRccwjdjX0lYgr_xc91QfX8rkxObfASrpfM45aHTTP2fyKY3K6Yf5xTJo9040r-fDiyx89dMv_78HI1cxjpFcGBZmHHFCVsM-N7-mV9MxmN9mBS',
  },
  {
    id: 'review-2',
    name: 'آقای بهرام شریفی',
    location: 'از قیام‌دشت • کاشت ۳ واحد ایمپلنت اشترومن',
    duration: '۰۱:۴۵ دقیقه',
    quote: '«بدون درد و خونریزی جراحی شد. حتی یک قرص مسکن هم بعد جراحی نیاز نداشتم. پیگیری‌های بعد از جراحی پرسنل دکتر شمس پور واقعاً ستودنی بود.»',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-vtFpkkgpG_BNePdiQjnPGCI66VeehG493AfLCpA_kYC5YYuK9dwnMTExDqa1JdoXUY2_lRPfZNmAJrsNkoOAwpl2AFWOdCYjmMjHZsAr4Aex79ANEsOW-QacVZXu6P8PPqQjbD2_ucAXuM84yP8w0jYxEsypWrF71_ddrchsTGQsC9UwK-SiIz6cS9JlTkKVZ9CG3RVcNkXBR2nVJtMezT74CktyZslsjhmG703SP0UfM7Ki2VDe',
  },
  {
    id: 'review-3',
    name: 'خانم دکتر نادری',
    location: 'از ورامین • ۸ واحد لمینت سرامیکی فک بالا',
    duration: '۰۱:۲۰ دقیقه',
    quote: '«دقت میکرومتری در تراش و رنگ کاملاً طبیعی لبه‌ها باعث شد همکارانم متوجه لمینت بودن دندان‌ها نشوند؛ دندان‌ها برجسته نشدند و آناتومی لبه‌ها بی‌نظیره.»',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlozcxYiqvvl6FW7fb5u5XwwPwEU2_aSiPhGIGvKdmrFgIM8XKe8qWoLevZi9ZbN-Yj_90iR9A0ymHaG2T_L7jjLaKtk7JdoLgFV0TbEOV1a794eJDrkpKu2Npj9fiwSoI_tLAB_a0iHLvlERO_1TvqQhlnh2MwG1yIRoKVmO-9cfs6HLiPalu56PV9p7xXdNBkJPCCa-hlkoxKkuSPmevbbZ6m6JtkRnGbsgedW_gR6SduGdMBQ_y',
  },
];

export const SmileGalleryPage: React.FC<SmileGalleryPageProps> = ({
  onOpenBooking,
  onNavigateHome,
  onNavigateServices,
  onNavigateBlog,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeVideoModal, setActiveVideoModal] = useState<string | null>(null);

  // Filter cases based on category
  const visibleCases = (isExpanded ? [...CLINICAL_CASES, ...EXTRA_CASES] : CLINICAL_CASES).filter(
    (c) => selectedCategory === 'all' || c.category === selectedCategory
  );

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen selection:bg-[#dbe1ff] selection:text-[#004ac6]">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 bg-gradient-to-b from-[#004ac6]/10 via-[#f7f9fb] to-[#f7f9fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Right Column: Text & Metrics */}
            <div className="lg:col-span-7 space-y-5 text-right">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 bg-[#dae2fd]/70 text-[#004ac6] px-3.5 py-1.5 rounded-full border border-[#004ac6]/15 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#004ac6] animate-pulse" />
                <span className="text-xs sm:text-sm font-bold">
                  مستندات واقعی کلینیک پارمیس • مجتمع پزشکی راستین پاکدشت
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#191c1e] leading-tight tracking-tight">
                گالری مستند و واقعی <br className="hidden sm:inline" />
                <span className="text-[#004ac6] drop-shadow-xs">لبخندهای دگرگون‌شده</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#565e74] leading-relaxed max-w-2xl text-justify">
                هر لبخند یک شاهکار پزشکی منحصربه‌فرد است. تمامی نمونه‌های زیر بدون فیلتر و روتوش فتوشاپ، توسط دکتر انوشیروان شمس پور با پیشرفته‌ترین تکنولوژی‌های اسکن سه‌بعدی و متریال درجه‌یک سوییسی و آلمانی درمان شده‌اند. می‌توانید لغزنده را به چپ و راست بکشید تا نتیجه تغییر را با جزئیات مقایسه کنید.
              </p>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#cases-grid"
                  className="bg-[#004ac6] hover:bg-[#003ea8] text-white px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>مشاهده پرونده‌ها و مقایسه‌ها</span>
                  <span className="material-symbols-outlined text-lg">arrow_downward</span>
                </a>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="border border-[#c3c6d7] bg-white hover:bg-[#004ac6]/5 text-[#004ac6] px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-xs active:scale-95"
                >
                  <span className="material-symbols-outlined text-lg">call</span>
                  <span>مشاوره ویزیت رایگان: {CLINIC_INFO.phoneCompact}</span>
                </a>
              </div>

              {/* Trust Verification Metrics (4x Grid) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#c3c6d7]/40">
                <div className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/30 text-center shadow-xs">
                  <div className="text-lg sm:text-xl font-black text-[#004ac6]">+۴,۰۰۰</div>
                  <div className="text-xs text-[#565e74] font-medium mt-0.5">طراحی لبخند موفق</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/30 text-center shadow-xs">
                  <div className="text-lg sm:text-xl font-black text-[#004ac6]">۹۹.۴٪</div>
                  <div className="text-xs text-[#565e74] font-medium mt-0.5">رضایت مراجعین پاکدشت</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/30 text-center shadow-xs">
                  <div className="text-lg sm:text-xl font-black text-[#00569c]">CAD/CAM</div>
                  <div className="text-xs text-[#565e74] font-medium mt-0.5">اسکن و تراش دیجیتال</div>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-[#c3c6d7]/30 text-center shadow-xs">
                  <div className="text-lg sm:text-xl font-black text-[#00569c]">۱۰ ساله</div>
                  <div className="text-xs text-[#565e74] font-medium mt-0.5">ضمانت اصالت متریال</div>
                </div>
              </div>
            </div>

            {/* Left Column: Hero Featured Card (Desktop Anchor) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Glow */}
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#004ac6]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative bg-white rounded-3xl p-4 sm:p-5 shadow-xl border border-[#004ac6]/20">
                  <div className="relative rounded-2xl overflow-hidden h-72 sm:h-84 bg-[#eceef0]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9IOcy7S7dxAxm2-5P261mSvnBAVLG3Om-maCCHtYzBuz6leLuV1PwxstWlzPV6LGJ0a9rflTBfsIMTSkAmvumYhJMOY5sivlEikShJmpXCxb_8H0lvjjGGaOGb7pBOsqSDHFlyaw663RSwJGTbMlkrP8JimiQsUEKKScYZXRJq4D9sA464cBAnmjMYoem9blqoEJY4xPEHvxTOCdMcTEoZB1-axAi-d6NCPp_d3HrbbOhEadoMD_M"
                      alt="اصلاح طرح لبخند دکتر شمس پور پاکدشت"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-3 inset-x-3 bg-[#191c1e]/85 backdrop-blur-md text-white p-3 rounded-xl flex items-center justify-between shadow-lg">
                      <div className="text-right">
                        <p className="text-xs sm:text-sm font-bold">اصلاح جامع ۸ واحد لمینت سرامیکی</p>
                        <p className="text-[11px] text-white/80">کیس خانم م. رضایی • مراجع از پاکدشت</p>
                      </div>
                      <span className="bg-[#004ac6] text-white text-[11px] px-2.5 py-1 rounded-full font-bold shadow-xs">
                        قبل / بعد
                      </span>
                    </div>
                  </div>

                  <div className="mt-3.5 flex items-center justify-between px-2 text-xs text-[#565e74]">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#004ac6] text-lg">verified</span>
                      <span className="font-bold text-[#191c1e]">دکتر انوشیروان شمس پور</span>
                    </div>
                    <span className="text-[11px]">عضو انجمن دندانپزشکان ترمیمی ایران</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. HORIZONTAL SCROLLABLE FILTER CHIPS ================= */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-y border-[#c3c6d7]/30 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar py-0.5">
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedCategory === 'all'
                    ? 'bg-[#004ac6] text-white shadow-sm'
                    : 'bg-[#f2f4f6] text-[#434655] hover:bg-[#e6e8ea]'
                }`}
              >
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span>همه درمان‌ها (۲۸)</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('composite')}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'composite'
                    ? 'bg-[#004ac6] text-white shadow-sm'
                    : 'bg-white border border-[#c3c6d7]/40 text-[#434655] hover:bg-[#f2f4f6]'
                }`}
              >
                کامپوزیت ونیر نانوسرامیک
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('laminate')}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'laminate'
                    ? 'bg-[#004ac6] text-white shadow-sm'
                    : 'bg-white border border-[#c3c6d7]/40 text-[#434655] hover:bg-[#f2f4f6]'
                }`}
              >
                لمینت پرسلن E-Max
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('implant')}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'implant'
                    ? 'bg-[#004ac6] text-white shadow-sm'
                    : 'bg-white border border-[#c3c6d7]/40 text-[#434655] hover:bg-[#f2f4f6]'
                }`}
              >
                ایمپلنت دیجیتال
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('gummy')}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'gummy'
                    ? 'bg-[#004ac6] text-white shadow-sm'
                    : 'bg-white border border-[#c3c6d7]/40 text-[#434655] hover:bg-[#f2f4f6]'
                }`}
              >
                اصلاح لبخند لثه‌ای
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('bleaching')}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'bleaching'
                    ? 'bg-[#004ac6] text-white shadow-sm'
                    : 'bg-white border border-[#c3c6d7]/40 text-[#434655] hover:bg-[#f2f4f6]'
                }`}
              >
                بلیچینگ تخصصی
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('rehabilitation')}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === 'rehabilitation'
                    ? 'bg-[#004ac6] text-white shadow-sm'
                    : 'bg-white border border-[#c3c6d7]/40 text-[#434655] hover:bg-[#f2f4f6]'
                }`}
              >
                روکش زیرکونیا و بازسازی
              </button>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-xs text-[#565e74] shrink-0 font-medium pl-2">
              <span className="material-symbols-outlined text-[#004ac6] text-base">filter_list</span>
              <span>فیلتر بر اساس متریال و تکنیک</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. FEATURED CASE STUDY (HERO BEFORE/AFTER SHOWCASE) ================= */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <span className="text-[#004ac6] font-bold text-xs sm:text-sm bg-[#004ac6]/10 px-4 py-1.5 rounded-full inline-block">
            بررسی موردی تحلیلی (Featured Case)
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#191c1e]">
            مقایسه میکروسکوپی و خطی قبل و بعد درمان
          </h2>
          <p className="text-xs sm:text-sm text-[#565e74]">
            اسلایدر زیر را به چپ و راست بکشید تا نتیجه مهندسی بیومیمتیک لبخند و تطابق رنگ را به صورت دقیق مشاهده نمایید.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 sm:p-8 border border-[#004ac6]/20 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Before/After Touch Slider */}
            <div className="lg:col-span-7">
              <ComparisonSlider
                beforeImage="https://lh3.googleusercontent.com/aida-public/AB6AXuAzscmxMVvRDumERwuQX9KQ0_FszxLb082SDq_Tu6AlXaMPfjHAh73Uya8SwZFgprEWcYrxbUi8VzG00mgd-MfjwysASpb9of6RKpcr1ktG020DfdylwyGRJYctKzXMt4_CjF9fvTYFvslguYFmCbMF25J9rkty0mFLcnOpl3_5Z8ZSjJ3OObXugVUdZrE7pvbM0-BXx-_ydgDQg37caBnpA-Z0I3B8jdewHLmLQbXUtlTEdMgfCrFR"
                afterImage="https://lh3.googleusercontent.com/aida-public/AB6AXuD5Jd9Qc0GvRp1Jid5KGDm5Qh5Zs4u0Ki8ElujSFK2Q1LHfEXRZBaKN6HEufX2bGIjyemMeqTlr1TwJ2MHA9jm1IY1sF73IC5h0f15yHTE-gdRilaOAPWr073HFfmjGxAPGggqpCTBYPslIJ3psCBEeN6INpQDFYY65yKbldQCmH4BXN9HbB_iyhy13Vo1OpJrOxukMQH9yfC1LjsWyPHKOQqqLicv7Bv_xn1rOvaBLo_M3FetKp6kT"
                alt="کیس منتخب ۸ واحد لمینت سرامیکی پرسلن E-Max"
                beforeLabel="وضعیت اولیه (قبل)"
                afterLabel="بعد از درمان (E-Max)"
                heightClass="h-64 sm:h-80 md:h-96"
              />
              <div className="flex items-center justify-center gap-2 text-xs text-[#565e74] mt-3">
                <span className="material-symbols-outlined text-[#004ac6] text-base">drag_indicator</span>
                <span>اسلایدر را به چپ و راست بکشید تا نتیجه را مقایسه کنید</span>
              </div>
            </div>

            {/* Clinical Case File Data */}
            <div className="lg:col-span-5 space-y-4 text-right">
              <div className="flex items-center justify-between border-b border-[#c3c6d7]/40 pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#004ac6] text-2xl">clinical_notes</span>
                  <h3 className="text-base sm:text-lg font-bold text-[#191c1e]">
                    پرونده بالینی شماره #۸۹۲۴
                  </h3>
                </div>
                <span className="bg-[#004ac6]/10 text-[#004ac6] text-xs font-bold px-3 py-1 rounded-full">
                  ۸ واحد فک بالا
                </span>
              </div>

              {/* Specs Checklist */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 bg-[#f7f9fb] p-3 rounded-2xl border border-[#c3c6d7]/30">
                  <span className="material-symbols-outlined text-[#ba1a1a] text-xl mt-0.5 shrink-0">
                    report_problem
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#191c1e]">چالش اولیه مراجع:</h4>
                    <p className="text-xs text-[#565e74] mt-0.5 leading-relaxed">
                      سایش شدید دندانی ناشی از دندان‌قروچه، بدرنگی ژنتیکی مقاوم به بلیچینگ و نامنظمی لبه‌های اینسیزال.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#f7f9fb] p-3 rounded-2xl border border-[#c3c6d7]/30">
                  <span className="material-symbols-outlined text-[#004ac6] text-xl mt-0.5 shrink-0">
                    healing
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#191c1e]">پلن درمانی دکتر شمس پور:</h4>
                    <p className="text-xs text-[#565e74] mt-0.5 leading-relaxed">
                      طراحی لبخند دیجیتال (DSD)، جراحی افزایش طول تاج ملایم با لیزر دیود و لمینت سرامیکی پرسلن E-Max آلمانی.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-right">
                  <div className="bg-[#f7f9fb] p-3 rounded-2xl border border-[#c3c6d7]/30">
                    <span className="text-[11px] text-[#565e74] block">طول دوره درمان:</span>
                    <span className="text-xs font-bold text-[#191c1e]">۲ جلسه در طی ۹ روز در مطب پاکدشت</span>
                  </div>
                  <div className="bg-[#f7f9fb] p-3 rounded-2xl border border-[#c3c6d7]/30">
                    <span className="text-[11px] text-[#565e74] block">میزان تراش دندان:</span>
                    <span className="text-xs font-bold text-[#191c1e]">حداقلی (Micro-Prep 0.3mm)</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="bg-[#004ac6] hover:bg-[#003ea8] text-white px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-95"
                >
                  <span className="material-symbols-outlined text-lg">call</span>
                  <span>تماس جهت طرح درمان مشابه</span>
                </a>
                <span className="text-xs text-[#565e74] flex items-center justify-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-emerald-600 text-lg">check_circle</span>
                  <span>رضایت کامل ثبت‌شده</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. CLINICAL CASE GRID (6 Detailed Patient Cards) ================= */}
      <section className="py-12 bg-[#f2f4f6]/60 border-y border-[#c3c6d7]/30" id="cases-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-3 text-right">
            <div>
              <div className="inline-flex items-center gap-2 text-[#004ac6] font-bold text-xs mb-1.5">
                <span className="material-symbols-outlined text-base">collections_bookmark</span>
                <span>بانک پرونده‌های تصویری کلینیک پارمیس</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold text-[#191c1e]">
                منتخب درمان‌های زیبایی و بازسازی دهان
              </h2>
            </div>
            <p className="text-[#565e74] text-xs sm:text-sm max-w-md">
              هر کارت شامل اسلایدر تعاملی قبل و بعد، متریال مصرفی و تکنیک تخصصی اجرا شده در مطب پاکدشت است (لغزنده را جابجا کنید).
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleCases.map((c) => (
              <article
                key={c.id}
                className="bg-white rounded-3xl p-4 sm:p-5 shadow-xs border border-[#c3c6d7]/40 hover:shadow-md transition-all flex flex-col justify-between text-right group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${c.accentColor}15`,
                        color: c.accentColor,
                      }}
                    >
                      <span className="material-symbols-outlined text-[15px]">{c.icon}</span>
                      <span>{c.categoryLabel}</span>
                    </span>
                    <span className="text-xs text-[#737686] font-medium">{c.caseNumber}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#191c1e] mb-2 leading-snug">
                    {c.title}
                  </h3>

                  {/* Interactive Before/After Slider */}
                  <div className="mb-3">
                    <ComparisonSlider
                      beforeImage={c.beforeImage}
                      afterImage={c.afterImage}
                      alt={c.title}
                      beforeLabel="قبل"
                      afterLabel={c.afterBadge}
                      heightClass="h-48 sm:h-52"
                      accentColor={c.accentColor}
                    />
                  </div>

                  <p className="text-xs text-[#565e74] leading-relaxed mb-3 text-justify">
                    {c.description}
                  </p>
                </div>

                {/* Footer specs & Actions */}
                <div className="pt-3 border-t border-[#c3c6d7]/30 flex items-center justify-between text-xs text-[#565e74]">
                  <span>{c.duration}</span>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="text-[#004ac6] hover:text-[#003ea8] font-bold flex items-center gap-1 cursor-pointer active:scale-95"
                  >
                    <span>تماس جهت این درمان</span>
                    <span className="material-symbols-outlined text-sm rotate-180">arrow_back</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-8 sm:mt-12 text-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white border-2 border-[#004ac6]/30 text-[#004ac6] hover:bg-[#004ac6]/5 rounded-full text-xs sm:text-sm font-bold shadow-xs hover:shadow transition-all cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-lg">
                {isExpanded ? 'expand_less' : 'expand_more'}
              </span>
              <span>
                {isExpanded
                  ? 'بستن موارد تکمیلی'
                  : 'مشاهده موارد بیشتر از گالری پاکدشت (موارد بالینی بیشتر)'}
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= 5. VIDEO REVIEWS / PATIENT TESTIMONIALS ================= */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2">
          <span className="text-[#004ac6] font-bold text-xs sm:text-sm bg-[#004ac6]/10 px-3.5 py-1 rounded-full">
            تجربه صمیمانه بیماران
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#191c1e]">
            روایت مراجعین از پاکدشت و شرق تهران
          </h2>
          <p className="text-xs sm:text-sm text-[#565e74]">
            مستندات ویدیویی از لحظه دیدن لبخند در آینه بعد از اتمام درمان در کلینیک پارمیس
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-4 sm:p-5 border border-[#c3c6d7]/30 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-right"
            >
              <div>
                {/* Video Preview Thumbnail */}
                <div
                  onClick={() => setActiveVideoModal(t.name)}
                  className="relative rounded-2xl overflow-hidden aspect-video bg-[#191c1e] group mb-3 cursor-pointer select-none"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-[#004ac6] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">play_arrow</span>
                    </div>
                  </div>
                  <span className="absolute bottom-2 left-2 bg-black/75 text-white text-[11px] px-2 py-0.5 rounded font-medium backdrop-blur-xs">
                    {t.duration}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#191c1e]">{t.name}</h3>
                <span className="text-xs text-[#565e74] block mt-0.5">{t.location}</span>
                <p className="text-xs text-[#434655] mt-2.5 leading-relaxed text-justify">
                  {t.quote}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#c3c6d7]/30 flex items-center justify-between text-[11px] text-[#004ac6] font-semibold">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  <span>تأیید رضایت بالینی</span>
                </span>
                <button
                  type="button"
                  onClick={() => setActiveVideoModal(t.name)}
                  className="hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>مشاهده ویدیو</span>
                  <span className="material-symbols-outlined text-xs rotate-180">arrow_back</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Lightbox Modal */}
        {activeVideoModal && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 text-right relative shadow-2xl animate-in fade-in zoom-in-95">
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-4 left-4 p-2 rounded-full hover:bg-[#f2f4f6] text-[#565e74] cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              <div className="flex items-center gap-2 mb-4 text-[#004ac6]">
                <span className="material-symbols-outlined text-2xl">movie</span>
                <h4 className="font-bold text-base text-[#191c1e]">
                  روایت تصویری مراجع: {activeVideoModal}
                </h4>
              </div>

              <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#191c1e] mb-4 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <span className="material-symbols-outlined text-4xl text-[#004ac6] mb-2 animate-pulse">
                    play_circle
                  </span>
                  <p className="text-xs font-semibold">
                    پخش مستند ویدیویی رضایت بیمار در کلینیک پارمیس پاکدشت
                  </p>
                  <p className="text-[11px] text-white/70 mt-1">
                    جهت مشاهده آلبوم کامل ویدیویی می‌توانید به کلینیک مراجعه فرمایید.
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setActiveVideoModal(null)}
                  className="px-5 py-2.5 rounded-full bg-[#f2f4f6] text-[#191c1e] text-xs font-bold hover:bg-[#e6e8ea] cursor-pointer"
                >
                  بستن پنجره
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  onClick={() => setActiveVideoModal(null)}
                  className="px-5 py-2.5 rounded-full bg-[#004ac6] text-white text-xs font-bold hover:bg-[#003ea8] cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-sm">call</span>
                  <span>تماس جهت نوبت مشاوره</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* ================= 6. CLINICAL PHOTOGRAPHY INTEGRITY (TRANSPARENCY MANIFESTO) ================= */}
      <section className="py-12 bg-white border-y border-[#c3c6d7]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#004ac6]/5 rounded-3xl p-6 sm:p-10 border border-[#004ac6]/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-3 text-right">
                <span className="text-[#004ac6] font-bold text-xs sm:text-sm flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">photo_camera</span>
                  <span>استاندارد عکاسی کلینیکال و ثبت سند</span>
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-[#191c1e]">
                  تعهد شفافیت: بدون روتوش، بدون خطای دید
                </h2>
                <p className="text-xs sm:text-sm text-[#565e74] leading-relaxed text-justify">
                  ما باور داریم که اعتماد بیماران ارزشمندترین دارایی ماست. به همین دلیل در ثبت تصاویر نمونه کارهای مطب دکتر شمس پور به ۴ اصل سخت‌گیرانه پایبندیم.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-right">
                <div className="bg-white p-4 rounded-2xl border border-[#c3c6d7]/30 shadow-xs flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#004ac6]/10 flex items-center justify-center text-[#004ac6] shrink-0">
                    <span className="material-symbols-outlined text-xl">hide_image</span>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#191c1e]">بدون ادیت نرم‌افزاری</h3>
                    <p className="text-xs text-[#565e74] mt-1 leading-relaxed">
                      هیچ‌گونه سفیدکردن غیرواقعی، حذف لکه یا دستکاری خط لثه در فتوشاپ انجام نمی‌شود.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#c3c6d7]/30 shadow-xs flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#004ac6]/10 flex items-center justify-center text-[#004ac6] shrink-0">
                    <span className="material-symbols-outlined text-xl">wb_sunny</span>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#191c1e]">نور استاندارد ۵۵۰۰K پزشکی</h3>
                    <p className="text-xs text-[#565e74] mt-1 leading-relaxed">
                      عکاسی ماکرو با فلاش رینگی پزشکی کالیبره‌شده برای بازتاب دقیق‌ترین رنگ طبیعی مینا.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#c3c6d7]/30 shadow-xs flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#004ac6]/10 flex items-center justify-center text-[#004ac6] shrink-0">
                    <span className="material-symbols-outlined text-xl">lens_blur</span>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#191c1e]">نمایش بافت طبیعی لبه دندان</h3>
                    <p className="text-xs text-[#565e74] mt-1 leading-relaxed">
                      ثبت شفافیت شیشه‌ای لبه دندان‌ها به منظور اثبات ظرافت کار لابراتواری و پالیش نهایی.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#c3c6d7]/30 shadow-xs flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#004ac6]/10 flex items-center justify-center text-[#004ac6] shrink-0">
                    <span className="material-symbols-outlined text-xl">lock</span>
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#191c1e]">حفظ حریم خصوصی چهره</h3>
                    <p className="text-xs text-[#565e74] mt-1 leading-relaxed">
                      تمامی تصاویر و ویدیوها با رضایت‌نامه کتبی مراجعین گرامی منتشر گردیده است.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. FOUR STEPS TO AN IDEAL SMILE ================= */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <span className="text-[#004ac6] font-bold text-xs sm:text-sm bg-[#004ac6]/10 px-3.5 py-1 rounded-full">
            مسیر خلق لبخند اختصاصی
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#191c1e]">
            ۴ گام تا داشتن لبخندی درخشان در کلینیک پارمیس
          </h2>
          <p className="text-xs sm:text-sm text-[#565e74]">
            روند دقیق، علمی و بدون ابهام از اولین جلسه ویزیت تا تحویل نهایی در مطب پاکدشت
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Step 1 */}
          <div className="bg-white p-5 rounded-3xl border border-[#c3c6d7]/30 shadow-xs relative flex flex-col justify-between">
            <div>
              <span className="w-10 h-10 rounded-2xl bg-[#004ac6] text-white flex items-center justify-center font-black text-sm mb-4 shadow-sm">
                ۱
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#191c1e] mb-2">
                اسکن ۳بعدی و آنالیز صورت
              </h3>
              <p className="text-xs text-[#565e74] leading-relaxed">
                بررسی دقیق تناسب دندان‌ها با انحنای لب و زوایای صورت با اینتراورال اسکنر دیجیتال بدون خفگی قالب‌گیری سنتی.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-5 rounded-3xl border border-[#c3c6d7]/30 shadow-xs relative flex flex-col justify-between">
            <div>
              <span className="w-10 h-10 rounded-2xl bg-[#004ac6] text-white flex items-center justify-center font-black text-sm mb-4 shadow-sm">
                ۲
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#191c1e] mb-2">
                ماک‌آپ موقت و پیش‌نمایش در دهان
              </h3>
              <p className="text-xs text-[#565e74] leading-relaxed">
                امکان مشاهده و تایید فرم و رنگ نهایی دندان‌ها در دهان پیش از هرگونه اقدام درمانی یا تراش میکرومتری.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-5 rounded-3xl border border-[#c3c6d7]/30 shadow-xs relative flex flex-col justify-between">
            <div>
              <span className="w-10 h-10 rounded-2xl bg-[#004ac6] text-white flex items-center justify-center font-black text-sm mb-4 shadow-sm">
                ۳
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#191c1e] mb-2">
                اجرای ظریف با متریال اورجینال
              </h3>
              <p className="text-xs text-[#565e74] leading-relaxed">
                تراش میکروسکوپی مینیمال یا کامپوزیت لایه‌ای با پایش مداوم اکلوژن فکی، ایزولاسیون کامل رابردم و متریال ژاپنی و سوئیسی.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-5 rounded-3xl border border-[#c3c6d7]/30 shadow-xs relative flex flex-col justify-between">
            <div>
              <span className="w-10 h-10 rounded-2xl bg-[#004ac6] text-white flex items-center justify-center font-black text-sm mb-4 shadow-sm">
                ۴
              </span>
              <h3 className="text-sm sm:text-base font-bold text-[#191c1e] mb-2">
                صدور گارانتی کتبی و چکاپ‌ها
              </h3>
              <p className="text-xs text-[#565e74] leading-relaxed">
                جلسات کنترل دوره‌ای، پولیش سالانه و ارائه کارت ضمانت مکتوب ماندگاری متریال در مجتمع پزشکی راستین پاکدشت.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="py-12 sm:py-16 bg-[#f2f4f6]/60 border-t border-[#c3c6d7]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="text-center mb-8 sm:mb-12 space-y-2">
            <span className="text-[#004ac6] font-bold text-xs sm:text-sm bg-[#004ac6]/10 px-3.5 py-1 rounded-full">
              پاسخ‌های دکتر انوشیروان شمس پور به سوالات شما
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-[#191c1e]">
              پرسش‌های پرتکرار مراجعین
            </h2>
          </div>

          <div className="space-y-3.5">
            <details className="bg-white rounded-2xl p-4 sm:p-5 border border-[#c3c6d7]/30 group shadow-xs">
              <summary className="list-none flex items-center justify-between font-bold text-xs sm:text-sm text-[#191c1e] cursor-pointer select-none">
                <span>آیا این نمونه‌ها تماماً متعلق به مراجعین مطب پاکدشت است؟</span>
                <span className="material-symbols-outlined text-[#004ac6] transition-transform duration-200 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="text-xs text-[#565e74] mt-3 pt-3 border-t border-[#c3c6d7]/20 leading-relaxed text-justify">
                بله، صد درصد تصاویر و ویدیوهای بارگذاری شده در این وب‌سایت، پرونده‌های بالینی واقعی بیماران تحت درمان دکتر انوشیروان شمس پور در مطب پاکدشت (مجتمع راستین) است و مراجعین محترم در جلسه مشاوره حضوری می‌توانند آلبوم جامع این درمان‌ها را مشاهده فرمایند.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-4 sm:p-5 border border-[#c3c6d7]/30 group shadow-xs">
              <summary className="list-none flex items-center justify-between font-bold text-xs sm:text-sm text-[#191c1e] cursor-pointer select-none">
                <span>طول عمر لمینت سرامیکی و کامپوزیت چقدر است؟</span>
                <span className="material-symbols-outlined text-[#004ac6] transition-transform duration-200 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="text-xs text-[#565e74] mt-3 pt-3 border-t border-[#c3c6d7]/20 leading-relaxed text-justify">
                لمینت‌های سرامیکی E-Max آلمانی در صورت رعایت بهداشت فردی و مراجعات دوره‌ای، طول عمری بین ۱۵ الی ۲۰ سال همراه با ضمانت کتبی ۱۰ ساله دارند. ونیرهای کامپوزیت ژاپنی و سویسی نیز بین ۵ الی ۸ سال دوام دارند و سالی یک‌بار نیاز به پالیش سبک خواهند داشت.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-4 sm:p-5 border border-[#c3c6d7]/30 group shadow-xs">
              <summary className="list-none flex items-center justify-between font-bold text-xs sm:text-sm text-[#191c1e] cursor-pointer select-none">
                <span>آیا برای نصب لمینت، دندان‌ها تراش زیادی می‌خورند؟</span>
                <span className="material-symbols-outlined text-[#004ac6] transition-transform duration-200 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="text-xs text-[#565e74] mt-3 pt-3 border-t border-[#c3c6d7]/20 leading-relaxed text-justify">
                خیر؛ در متد پیشرفته Micro-Prep که در این مرکز به کار گرفته می‌شود، تراش سطحی در حد ۰.۳ تا ۰.۵ میلی‌متر و صرفاً در لایه مینا انجام می‌پذیرد. همچنین در درمان ونیر کامپوزیت در ۹۰٪ موارد هیچ‌گونه تراشی انجام نمی‌شود.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-4 sm:p-5 border border-[#c3c6d7]/30 group shadow-xs">
              <summary className="list-none flex items-center justify-between font-bold text-xs sm:text-sm text-[#191c1e] cursor-pointer select-none">
                <span>چگونه می‌توانم از طرح درمان و هزینه تخمینی کیس خودم مطلع شوم؟</span>
                <span className="material-symbols-outlined text-[#004ac6] transition-transform duration-200 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <p className="text-xs text-[#565e74] mt-3 pt-3 border-t border-[#c3c6d7]/20 leading-relaxed text-justify">
                شما می‌توانید با تماس با شماره‌های ۰۲۱۳۶۰۴۸۵۸۱ یا ۰۲۱۳۶۰۴۸۵۸۲، یک نوبت مشاوره و آنالیز اولیه هماهنگ فرمایید تا پس از معاینه دقیق دندان‌ها، پلان درمان و برآورد شفاف هزینه‌ها در اختیارتان قرار گیرد.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= 9. DIRECT CONVERSION CTA BANNER ================= */}
      <section className="py-12 sm:py-16 bg-gradient-to-l from-[#004ac6] to-[#2563eb] text-white relative overflow-hidden">
        {/* Background Dental Deco */}
        <span className="material-symbols-outlined absolute -bottom-8 -left-8 text-[140px] text-white/10 pointer-events-none select-none">
          dentistry
        </span>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-right">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                مشاوره حضوری و اسکن دیجیتال در پاکدشت
              </span>
              <h2 className="text-xl sm:text-3xl font-extrabold leading-tight">
                آماده‌اید لبخند رویایی خود را تجربه کنید؟
              </h2>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                یک جلسه مشاوره و تصویربرداری تشخیصی در کلینیک پارمیس با دکتر انوشیروان شمس پور رزرو کنید و طرح لبخند ایده‌آل خود را قبل از درمان بر روی مانیتور ببینید.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <a
                href={`tel:${CLINIC_INFO.phone2}`}
                className="bg-white text-[#004ac6] hover:bg-[#f2f4f6] px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                <span>تماس مستقیم: {CLINIC_INFO.phoneCompact2}</span>
              </a>
              <a
                href="https://wa.me/989120802253"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white/10 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                <span>مشاوره و هماهنگی در واتساپ</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
