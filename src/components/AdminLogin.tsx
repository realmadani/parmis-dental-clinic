import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData.ts';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onReturnHome: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, onReturnHome }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Mobile check
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth < 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobileDevice(isMobile);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const fillTestCredentials = () => {
    setUsername('admin');
    setPassword('123456');
    setErrorMsg(null);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    if (isMobileDevice) {
      setErrorMsg('لطفاً جهت ورود به پنل مدیریت از نسخه دسکتاپ (کامپیوتر یا لپ‌تاپ) استفاده فرمایید.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (username.trim() === 'admin' && password.trim() === '123456') {
        setSuccessMsg('ورود موفقیت‌آمیز بود. در حال انتقال به پیشخوان...');
        setTimeout(() => {
          onLoginSuccess();
        }, 700);
      } else {
        setErrorMsg('نام کاربری یا کلمه عبور وارد شده نادرست است.');
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col justify-between relative overflow-x-hidden selection:bg-blue-100 selection:text-blue-700 font-sans" dir="rtl">
      {/* Ambient background glow & subtle dot pattern */}
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-50/60 via-white to-slate-100 -z-20"></div>
      <div className="fixed inset-0 bg-pattern opacity-40 -z-10 pointer-events-none"></div>
      <div className="fixed top-[-10%] right-[-5%] w-[480px] h-[480px] bg-blue-200/35 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[420px] h-[420px] bg-sky-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Header / Top Navigation */}
      <header className="w-full max-w-6xl mx-auto px-6 py-5 flex items-center justify-between z-10">
        {/* Clinic Brand */}
        <div className="flex items-center gap-3 group cursor-pointer" onClick={onReturnHome}>
          <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>dentistry</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="font-bold text-base sm:text-lg text-slate-900 leading-snug tracking-tight">دندان‌پزشکی پارمیس</span>
            <span className="text-xs text-slate-500 font-medium">دکتر انوشیروان شمس‌پور</span>
          </div>
        </div>

        {/* Return to main website pill */}
        <button
          type="button"
          onClick={onReturnHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-blue-600 border border-slate-200/80 shadow-sm hover:shadow transition-all text-xs sm:text-sm font-semibold backdrop-blur-sm cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">arrow_forward</span>
          <span>بازگشت به وب‌سایت اصلی</span>
        </button>
      </header>

      {/* Central Login Card Container */}
      <main className="w-full flex-1 flex items-center justify-center px-4 py-8 z-10">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-blue-500/5 border border-slate-100 p-8 sm:p-10 text-right transition-all">
          {/* Card Header */}
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 ring-8 ring-blue-50/50 shadow-sm">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>dentistry</span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">ورود به پنل مدیریت</h1>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              کلینیک دندان‌پزشکی پارمیس • دکتر انوشیروان شمس‌پور
              <br />
              <span className="text-slate-400 text-xs">(مجتمع پزشکی راستین، پاکدشت)</span>
            </p>
          </div>

          {/* Mobile Blocking Warning if on mobile */}
          {isMobileDevice && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
              <span className="material-symbols-outlined text-amber-600 text-xl shrink-0 mt-0.5">warning</span>
              <div className="space-y-1">
                <strong className="block font-bold">محدودیت نسخه موبایل</strong>
                <p className="leading-relaxed text-amber-800">
                  جهت دسترسی به داشبورد مدیریتی و ابزارهای پیشرفته، لطفاً با نسخه دسکتاپ (کامپیوتر یا لپ‌تاپ) وارد شوید.
                </p>
              </div>
            </div>
          )}

          {/* Quick Test Credentials Helper Box */}
          <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-3 flex items-center justify-between text-xs text-blue-900 mb-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 text-lg">info</span>
              <span>اطلاعات ورود تستی: <strong className="font-mono text-blue-700 font-bold">admin</strong> / <strong className="font-mono text-blue-700 font-bold">123456</strong></span>
            </div>
            <button
              type="button"
              onClick={fillTestCredentials}
              className="bg-white hover:bg-blue-600 hover:text-white text-blue-600 font-semibold px-2.5 py-1 rounded-lg border border-blue-200/80 shadow-2xs transition-colors text-xs whitespace-nowrap cursor-pointer"
            >
              تکمیل خودکار
            </button>
          </div>

          {/* Error / Success Alerts */}
          {errorMsg && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-center gap-2.5">
              <span className="material-symbols-outlined text-red-500 text-xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
              <span className="font-medium">{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2.5">
              <span className="material-symbols-outlined text-emerald-600 text-xl shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="font-medium">{successMsg}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5" htmlFor="username">
                نام کاربری یا شماره پرسنلی
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-xl">person</span>
                </div>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="مثال: admin"
                  required
                  dir="ltr"
                  className="w-full text-right pr-11 pl-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm text-slate-800 placeholder:text-slate-400 placeholder:text-right"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5" htmlFor="password">
                کلمه عبور امنیتی
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-xl">lock</span>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  dir="ltr"
                  className="w-full text-left pr-11 pl-11 py-3 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm text-slate-800 placeholder:text-slate-400 tracking-wider"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none transition-colors cursor-pointer"
                  title="نمایش/عدم نمایش رمز عبور"
                >
                  <span className="material-symbols-outlined text-xl">{showPassword ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="inline-flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 transition-colors cursor-pointer"
                />
                <span className="text-xs text-slate-600">مرا به خاطر بسپار</span>
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('جهت بازیابی رمز عبور با پشتیبانی فنی تماس بگیرید.'); }} className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                فراموشی رمز عبور؟
              </a>
            </div>

            <button
              type="submit"
              disabled={loading || isMobileDevice}
              className={`w-full mt-2 py-3.5 px-6 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg flex items-center justify-center gap-2 transition-all ${
                isMobileDevice ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-[0.99] shadow-blue-500/25 cursor-pointer'
              }`}
            >
              {loading ? (
                <>
                  <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>
                  <span>در حال اعتبارسنجی...</span>
                </>
              ) : (
                <>
                  <span>ورود به پنل مدیریت</span>
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                </>
              )}
            </button>
          </form>

          {/* Trust Badges */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-600">سرور پایگاه داده فعال است</span>
            </div>
            <div className="flex items-center gap-1 text-slate-400">
              <span className="material-symbols-outlined text-sm text-blue-600">verified_user</span>
              <span>اتصال امن SSL 256-bit</span>
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Brand Footer */}
      <footer className="w-full max-w-6xl mx-auto px-6 py-4 text-center z-10">
        <p className="text-xs text-slate-400 font-medium">
          تمامی حقوق محفوظ است © کلینیک تخصصی دندان‌پزشکی پارمیس • پاکدشت، مجتمع پزشکی راستین
        </p>
      </footer>
    </div>
  );
};
