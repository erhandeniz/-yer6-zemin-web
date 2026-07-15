/**
 * Approved YER6 corporate identity for proposal output (section A).
 *
 * Sourced from the live marketing site configuration
 * (src/lib/siteConfig.ts) and the YER6 AI brand tokens (gold on dark). No new
 * visual identity is invented. Values here are the single source of truth for
 * the default template; admin template overrides layer on top.
 */

import type { Audience, Locale } from "../domain/types";
import type { RGB } from "../pdf/pdf-document";

export const YER6_IDENTITY = {
  legalName: "YER6 Zemin Güçlendirme Geoteknik Mühendislik",
  shortName: "YER6",
  wordmark: "YER6",
  wordmarkAccent: "ZEMIN",
  phone: "+90 532 378 06 91",
  email: "info@yer6zemin.com.tr",
  website: "www.yer6zemin.com.tr",
  aiPortal: "ai.yer6zemin.com.tr",
  address: {
    line1: "Karşıyaka, Şht. Ali Gaffar Okan Cd. 42-A",
    line2: "06830 Gölbaşı / Ankara"
  }
} as const;

/** Brand palette (RGB 0..255), derived from the approved gold-on-dark theme. */
export const BRAND = {
  gold: [198, 154, 51] as RGB, // print-safe gold (hsl(43 70% 59%) darkened for paper)
  goldSoft: [232, 214, 168] as RGB,
  ink: [26, 24, 20] as RGB,
  dark: [21, 18, 11] as RGB,
  text: [33, 33, 33] as RGB,
  muted: [110, 110, 110] as RGB,
  hairline: [214, 210, 200] as RGB,
  zebra: [246, 244, 238] as RGB,
  headerFill: [21, 18, 11] as RGB,
  tableHead: [238, 233, 222] as RGB,
  white: [255, 255, 255] as RGB,
  danger: [150, 40, 40] as RGB
} as const;

type LabelKey =
  | "proposal"
  | "internalCostAnalysis"
  | "offerNo"
  | "revision"
  | "status"
  | "date"
  | "validity"
  | "validityDays"
  | "customer"
  | "contact"
  | "project"
  | "location"
  | "subject"
  | "scope"
  | "method"
  | "no"
  | "description"
  | "origin"
  | "qty"
  | "unit"
  | "unitPrice"
  | "lineTotal"
  | "optional"
  | "subtotal"
  | "optionalTotal"
  | "discount"
  | "netSubtotal"
  | "vat"
  | "vatBase"
  | "grandTotal"
  | "writtenTotal"
  | "mobilization"
  | "workDuration"
  | "productionDuration"
  | "paymentTerms"
  | "inclusions"
  | "exclusions"
  | "assumptions"
  | "commercialConditions"
  | "customerResp"
  | "yer6Resp"
  | "revisionNote"
  | "signature"
  | "stamp"
  | "authorizedFor"
  | "confidentialClient"
  | "confidentialInternal"
  | "page"
  | "of"
  | "createdAt"
  | "internalCostBreakdown"
  | "cost"
  | "margin"
  | "targetMargin"
  | "minSalePrice"
  | "riskAllowance"
  | "overhead"
  | "wasteFactor"
  | "currency"
  | "originMeasured"
  | "originAssumed"
  | "originProvisional"
  | "originEstimated";

const TR: Record<LabelKey, string> = {
  proposal: "TİCARİ TEKLİF",
  internalCostAnalysis: "İÇ MALİYET ANALİZİ",
  offerNo: "Teklif No",
  revision: "Revizyon",
  status: "Durum",
  date: "Teklif Tarihi",
  validity: "Geçerlilik",
  validityDays: "gün",
  customer: "Müşteri",
  contact: "Yetkili",
  project: "Proje",
  location: "Yer",
  subject: "Konu",
  scope: "İşin Kapsamı",
  method: "Teknik Yöntem",
  no: "No",
  description: "Açıklama",
  origin: "Kaynak",
  qty: "Miktar",
  unit: "Birim",
  unitPrice: "Birim Fiyat",
  lineTotal: "Tutar",
  optional: "Opsiyonel",
  subtotal: "Ara Toplam",
  optionalTotal: "Opsiyonel Kalemler Toplamı",
  discount: "İskonto",
  netSubtotal: "Net Ara Toplam",
  vat: "KDV",
  vatBase: "KDV Matrahı",
  grandTotal: "GENEL TOPLAM",
  writtenTotal: "Yazı ile",
  mobilization: "Mobilizasyon",
  workDuration: "İş Süresi",
  productionDuration: "Tahmini Üretim Süresi",
  paymentTerms: "Ödeme Koşulları",
  inclusions: "Fiyata Dahil Olanlar",
  exclusions: "Fiyata Dahil Olmayanlar",
  assumptions: "Mühendislik Varsayımları",
  commercialConditions: "Ticari Koşullar",
  customerResp: "Müşteri Sorumlulukları",
  yer6Resp: "YER6 Sorumlulukları",
  revisionNote: "Revizyon Notu",
  signature: "Yetkili İmza",
  stamp: "Kaşe",
  authorizedFor: "YER6 adına",
  confidentialClient: "Bu teklif gizlidir ve yalnızca muhatabına yöneliktir.",
  confidentialInternal: "İÇ KULLANIM — GİZLİ. Müşteriye gönderilmez.",
  page: "Sayfa",
  of: "/",
  createdAt: "Belge Oluşturma",
  internalCostBreakdown: "Maliyet Kırılımı",
  cost: "Maliyet",
  margin: "Marj",
  targetMargin: "Hedef Marj",
  minSalePrice: "Asgari Satış Fiyatı",
  riskAllowance: "Risk Payı",
  overhead: "Genel Gider",
  wasteFactor: "Fire Oranı",
  currency: "Para Birimi",
  originMeasured: "Ölçülü",
  originAssumed: "Varsayılan",
  originProvisional: "Geçici",
  originEstimated: "Tahmini"
};

const EN: Record<LabelKey, string> = {
  proposal: "COMMERCIAL PROPOSAL",
  internalCostAnalysis: "INTERNAL COST ANALYSIS",
  offerNo: "Offer No",
  revision: "Revision",
  status: "Status",
  date: "Offer Date",
  validity: "Validity",
  validityDays: "days",
  customer: "Customer",
  contact: "Contact",
  project: "Project",
  location: "Location",
  subject: "Subject",
  scope: "Scope of Work",
  method: "Technical Method",
  no: "No",
  description: "Description",
  origin: "Origin",
  qty: "Qty",
  unit: "Unit",
  unitPrice: "Unit Price",
  lineTotal: "Amount",
  optional: "Optional",
  subtotal: "Subtotal",
  optionalTotal: "Optional Items Total",
  discount: "Discount",
  netSubtotal: "Net Subtotal",
  vat: "VAT",
  vatBase: "VAT Base",
  grandTotal: "GRAND TOTAL",
  writtenTotal: "In words",
  mobilization: "Mobilization",
  workDuration: "Work Duration",
  productionDuration: "Estimated Production Duration",
  paymentTerms: "Payment Terms",
  inclusions: "Inclusions",
  exclusions: "Exclusions",
  assumptions: "Engineering Assumptions",
  commercialConditions: "Commercial Conditions",
  customerResp: "Customer Responsibilities",
  yer6Resp: "YER6 Responsibilities",
  revisionNote: "Revision Note",
  signature: "Authorized Signature",
  stamp: "Stamp",
  authorizedFor: "For YER6",
  confidentialClient: "This proposal is confidential and intended solely for the addressee.",
  confidentialInternal: "INTERNAL USE — CONFIDENTIAL. Not for the customer.",
  page: "Page",
  of: "/",
  createdAt: "Document Created",
  internalCostBreakdown: "Cost Breakdown",
  cost: "Cost",
  margin: "Margin",
  targetMargin: "Target Margin",
  minSalePrice: "Minimum Sale Price",
  riskAllowance: "Risk Allowance",
  overhead: "Overhead",
  wasteFactor: "Waste Factor",
  currency: "Currency",
  originMeasured: "Measured",
  originAssumed: "Assumed",
  originProvisional: "Provisional",
  originEstimated: "Estimated"
};

// Arabic labels (RTL). Rendered with real contextual shaping (arabic-shaper.ts)
// and right-to-left layout. The approved TR/EN originals are always retained by
// the workflow and stored per PDF revision.
const AR: Record<LabelKey, string> = {
  proposal: "عرض تجاري",
  internalCostAnalysis: "تحليل التكلفة الداخلي",
  offerNo: "رقم العرض",
  revision: "المراجعة",
  status: "الحالة",
  date: "تاريخ العرض",
  validity: "الصلاحية",
  validityDays: "يوم",
  customer: "العميل",
  contact: "جهة الاتصال",
  project: "المشروع",
  location: "الموقع",
  subject: "الموضوع",
  scope: "نطاق العمل",
  method: "الطريقة الفنية",
  no: "رقم",
  description: "الوصف",
  origin: "المصدر",
  qty: "الكمية",
  unit: "الوحدة",
  unitPrice: "سعر الوحدة",
  lineTotal: "المبلغ",
  optional: "اختياري",
  subtotal: "المجموع الفرعي",
  optionalTotal: "مجموع البنود الاختيارية",
  discount: "الخصم",
  netSubtotal: "الصافي قبل الضريبة",
  vat: "ضريبة القيمة المضافة",
  vatBase: "وعاء الضريبة",
  grandTotal: "الإجمالي",
  writtenTotal: "المبلغ كتابةً",
  mobilization: "التعبئة",
  workDuration: "مدة العمل",
  productionDuration: "مدة الإنتاج التقديرية",
  paymentTerms: "شروط الدفع",
  inclusions: "يشمل السعر",
  exclusions: "لا يشمل السعر",
  assumptions: "الافتراضات الهندسية",
  commercialConditions: "الشروط التجارية",
  customerResp: "مسؤوليات العميل",
  yer6Resp: "مسؤوليات YER6",
  revisionNote: "ملاحظة المراجعة",
  signature: "التوقيع المعتمد",
  stamp: "الختم",
  authorizedFor: "بالنيابة عن YER6",
  confidentialClient: "هذا العرض سري ومخصص للمرسل إليه فقط.",
  confidentialInternal: "للاستخدام الداخلي — سري. لا يُرسل إلى العميل.",
  page: "صفحة",
  of: "/",
  createdAt: "تاريخ إنشاء المستند",
  internalCostBreakdown: "تفصيل التكلفة",
  cost: "التكلفة",
  margin: "الهامش",
  targetMargin: "الهامش المستهدف",
  minSalePrice: "الحد الأدنى لسعر البيع",
  riskAllowance: "مخصص المخاطر",
  overhead: "المصاريف العامة",
  wasteFactor: "معامل الهدر",
  currency: "العملة",
  originMeasured: "مقيس",
  originAssumed: "مفترض",
  originProvisional: "مؤقت",
  originEstimated: "تقديري"
};

export function labels(locale: Locale): Record<LabelKey, string> {
  if (locale === "en") return EN;
  if (locale === "ar") return AR;
  return TR;
}

export function documentTitle(audience: Audience, locale: Locale): string {
  const l = labels(locale);
  return audience === "internal" ? l.internalCostAnalysis : l.proposal;
}

export function confidentialityNote(audience: Audience, locale: Locale): string {
  const l = labels(locale);
  return audience === "internal" ? l.confidentialInternal : l.confidentialClient;
}
