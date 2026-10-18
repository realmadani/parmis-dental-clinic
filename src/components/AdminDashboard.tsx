import React from 'react';
import { CLINIC_INFO } from '../data/clinicData.ts';

interface AdminDashboardProps {
  onLogout: () => void;
  onReturnHome: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onLogout,
  onReturnHome,
}) => {
  return (
    <div
      className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col justify-between relative overflow-x-hidden selection:bg-blue-100 selection:text-blue-700 font-sans"
      dir="rtl"
    >
      {/* Background decoration */}
      <div className="fixed inset-0 bg-gradient-to-tr from-blue-50/60 via-white to-slate-100 -z-20"></div>
      <div className="fixed top-[-10%] right-[-5%] w-[480px] h-[480px] bg-blue-200/35 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-5%] w-[420px] h-[420px] bg-sky-200/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Header */}
      <header className="w-full max-w-6xl mx-auto px-6 py-5 flex items-center justify-between z-10 border-b border-slate-200/60">
        <div
          className="flex items-center gap-3 cursor-pointer group"
          onClick={onReturnHome}
        >
          <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform">
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              dentistry
            </span>
          </div>
          <div className="flex flex-col text-right">
            <span className="font-bold text-base sm:text-lg text-slate-900 leading-snug tracking-tight">
              {CLINIC_INFO.fullName}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {CLINIC_INFO.doctorName}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onReturnHome}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-blue-600 border border-slate-200/80 shadow-sm transition-all text-xs sm:text-sm font-semibold cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">
            arrow_forward
          </span>
          <span>بازگشت به وب‌سایت اصلی</span>
        </button>
      </header>

      {/* Main Content: Under Construction Notice */}
      <main className="w-full flex-1 flex items-center justify-center px-4 py-12 z-10">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl shadow-blue-500/5 border border-slate-100 p-8 sm:p-12 text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto ring-8 ring-blue-50/50 shadow-inner">
            <span className="material-symbols-outlined text-4xl">
              construction
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              داشبورد در دست ساخت می‌باشد
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
              پنل مدیریت و پیشخوان اختصاصی کلینیک دندان‌پزشکی پارمیس در حال توسعه و آپدیت زیرساخت‌ها می‌باشد.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onReturnHome}
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-sm transition-colors shadow-md shadow-blue-600/20"
            >
              مشاهده وب‌سایت کلینیک
            </button>
            <button
              onClick={onLogout}
              className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-600 font-bold rounded-2xl text-sm transition-colors border border-slate-200/80"
            >
              خروج از سیستم
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-6 py-4 text-center border-t border-slate-200/60 z-10">
        <p className="text-xs text-slate-500">
          تمامی حقوق محفوظ است © {CLINIC_INFO.fullName} • {CLINIC_INFO.doctorName}
        </p>
      </footer>
    </div>
  );
};
