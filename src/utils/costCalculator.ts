/**
 * Dental services cost estimation and calculation utilities
 * for Parmis Dental Clinic (دندان‌پزشکی پارمیس)
 */

export interface DentalTreatmentOption {
  id: string;
  name: string;
  category: 'cosmetic' | 'implant' | 'endodontics' | 'pediatric' | 'general';
  unit: string;
  basePricePerUnitTomans: number;
  minUnits: number;
  maxUnits: number;
  defaultUnits: number;
  sessionsEstimate: number;
  durationMinutesPerSession: number;
  description: string;
}

export const DENTAL_TREATMENTS: DentalTreatmentOption[] = [
  {
    id: 'composite-veneer',
    name: 'کامپوزیت ونیر نانوسرامیک',
    category: 'cosmetic',
    unit: 'دندان',
    basePricePerUnitTomans: 2200000,
    minUnits: 1,
    maxUnits: 16,
    defaultUnits: 8,
    sessionsEstimate: 1,
    durationMinutesPerSession: 180,
    description: 'اصلاح طرح لبخند و فرم‌دهی دندان‌ها با متریال باکیفیت ژاپنی و آلمانی',
  },
  {
    id: 'ceramic-laminate',
    name: 'لمینت سرامیکی (E-max)',
    category: 'cosmetic',
    unit: 'دندان',
    basePricePerUnitTomans: 5500000,
    minUnits: 1,
    maxUnits: 16,
    defaultUnits: 8,
    sessionsEstimate: 2,
    durationMinutesPerSession: 90,
    description: 'لمینت مقاوم و شفاف با ظاهری طبیعی و ماندگاری بالای ۱۰ سال',
  },
  {
    id: 'dental-implant',
    name: 'ایمپلنت و کاشت تخصصی',
    category: 'implant',
    unit: 'واحد',
    basePricePerUnitTomans: 11000000,
    minUnits: 1,
    maxUnits: 12,
    defaultUnits: 1,
    sessionsEstimate: 3,
    durationMinutesPerSession: 60,
    description: 'فیکسچر سوئیسی/کره‌ای به همراه روکش تمام‌سرامیک زیرکونیا',
  },
  {
    id: 'root-canal-molar',
    name: 'درمان ریشه (عصب‌کشی دندان آسیاب)',
    category: 'endodontics',
    unit: 'دندان',
    basePricePerUnitTomans: 2800000,
    minUnits: 1,
    maxUnits: 4,
    defaultUnits: 1,
    sessionsEstimate: 1,
    durationMinutesPerSession: 60,
    description: 'درمان با دستگاه روتاری دیجیتال و پاکسازی کامل کانال‌های عفونی',
  },
  {
    id: 'bleaching-office',
    name: 'بلیچینگ مطب (هر دو فک)',
    category: 'cosmetic',
    unit: 'پکیج',
    basePricePerUnitTomans: 3500000,
    minUnits: 1,
    maxUnits: 1,
    defaultUnits: 1,
    sessionsEstimate: 1,
    durationMinutesPerSession: 60,
    description: 'سفیدکردن فوری با ژل فعال شونده تحت نور تخصصی بدون آسیب به مینا',
  },
  {
    id: 'scaling-polishing',
    name: 'جرم‌گیری اولتراسونیک و بروساژ',
    category: 'general',
    unit: 'هر دو فک',
    basePricePerUnitTomans: 900000,
    minUnits: 1,
    maxUnits: 1,
    defaultUnits: 1,
    sessionsEstimate: 1,
    durationMinutesPerSession: 40,
    description: 'حذف کامل پلاک و جرم‌های میکروبی و صیقلی‌سازی سطوح دندان',
  },
  {
    id: 'pediatric-fluoride',
    name: 'فلورایدتراپی و فیشورسیلانت اطفال',
    category: 'pediatric',
    unit: 'دندان',
    basePricePerUnitTomans: 650000,
    minUnits: 1,
    maxUnits: 8,
    defaultUnits: 4,
    sessionsEstimate: 1,
    durationMinutesPerSession: 30,
    description: 'شیاربندی و پوشش محافظتی جهت پیشگیری قطعی از پوسیدگی دندان کودکان',
  },
];

export interface CalculationInput {
  treatmentId: string;
  quantity: number;
  hasSupplementaryInsurance?: boolean;
  supplementaryCoveragePercentage?: number; // e.g., 30 for 30%
}

export interface CalculationResult {
  treatmentName: string;
  unit: string;
  quantity: number;
  unitPriceTomans: number;
  rawTotalTomans: number;
  insuranceDiscountTomans: number;
  finalPayableTomans: number;
  estimatedSessions: number;
  totalEstimatedMinutes: number;
}

export function calculateTreatmentEstimate(input: CalculationInput): CalculationResult {
  const treatment = DENTAL_TREATMENTS.find((t) => t.id === input.treatmentId);
  if (!treatment) {
    throw new Error(`درمان مورد نظر یافت نشد: ${input.treatmentId}`);
  }

  const quantity = Math.max(treatment.minUnits, Math.min(input.quantity, treatment.maxUnits));
  const rawTotal = treatment.basePricePerUnitTomans * quantity;

  let insuranceDiscount = 0;
  if (input.hasSupplementaryInsurance) {
    const coverage = Math.min(100, Math.max(0, input.supplementaryCoveragePercentage ?? 30));
    insuranceDiscount = Math.round(rawTotal * (coverage / 100));
  }

  const finalPayable = Math.max(0, rawTotal - insuranceDiscount);
  const estimatedSessions = quantity > 4 && treatment.sessionsEstimate === 1 ? 2 : treatment.sessionsEstimate;
  const totalMinutes = treatment.durationMinutesPerSession * (quantity > 1 && treatment.category === 'cosmetic' ? Math.ceil(quantity / 4) : 1);

  return {
    treatmentName: treatment.name,
    unit: treatment.unit,
    quantity,
    unitPriceTomans: treatment.basePricePerUnitTomans,
    rawTotalTomans: rawTotal,
    insuranceDiscountTomans: insuranceDiscount,
    finalPayableTomans: finalPayable,
    estimatedSessions,
    totalEstimatedMinutes: totalMinutes,
  };
}

export function formatPersianTomans(amount: number): string {
  return new Intl.NumberFormat('fa-IR').format(amount) + ' تومان';
}

export function formatPersianNumber(val: number): string {
  return new Intl.NumberFormat('fa-IR').format(val);
}
