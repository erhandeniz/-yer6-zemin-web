/** Shared test fixture: a realistic YER6 jet-grout proposal. */

import type { ProposalContent } from "./domain/types";

export function sampleContent(overrides: Partial<ProposalContent> = {}): ProposalContent {
  const base: ProposalContent = {
    offerNumber: "YER6-2026-0001",
    revision: 0,
    status: "draft",
    kind: "unit_price",
    pricing: "unit_per_meter",
    currency: "TRY",
    locale: "tr",
    offerDate: "2026-07-15",
    validityDays: 30,
    customer: {
      companyName: "Şahin İnşaat Taahhüt San. ve Tic. A.Ş.",
      contactName: "Müh. Ayşe Yıldırım",
      contactEmail: "ayse@sahininsaat.com.tr"
    },
    projectName: "Gölbaşı Lojistik Deposu Zemin Güçlendirme",
    projectLocation: "Gölbaşı / Ankara",
    subject: "Jet grout yöntemi ile zemin iyileştirme için birim fiyatlı teklif.",
    scopeOfWork: "12 m derinliğe kadar Ø60 cm jet grout kolon imalatı ve kalite kontrol deneyleri.",
    technicalMethod: "Tek akışkanlı jet grout, 400 bar enjeksiyon basıncı.",
    discountRatePct: 10,
    vatMode: "excluded",
    vatRatePct: 20,
    mobilizationInfo: "Mobilizasyon 7 iş günüdür.",
    workDuration: "25 iş günü",
    estimatedProductionDuration: "60-80 m/gün",
    paymentTerms: "%30 avans, %60 hakediş, %10 kabul sonrası.",
    inclusions: ["Jet grout imalatı", "Çimento ve malzeme", "Kalite kontrol deneyleri"],
    exclusions: ["Elektrik ve su temini", "KDV"],
    engineeringAssumptions: ["Sondaj raporuna uygun zemin profili", "YASS -3.5 m"],
    commercialConditions: ["Teklif 30 gün geçerlidir."],
    customerResponsibilities: ["Saha teslimi"],
    yer6Responsibilities: ["İmalat ve kalite kontrol"],
    items: [
      {
        description: "Jet grout kolon imalatı Ø60 cm",
        quantity: 1000,
        unit: "m",
        unitPrice: 1250,
        quantityOrigin: "measured",
        category: "jet_grout"
      },
      {
        description: "Mobilizasyon ve demobilizasyon",
        quantity: 1,
        unit: "adet",
        unitPrice: 225000,
        quantityOrigin: "assumed",
        category: "mobilization"
      },
      {
        description: "UCS deneyi",
        quantity: 12,
        unit: "adet",
        unitPrice: 1800,
        quantityOrigin: "estimated",
        optional: true,
        category: "test"
      },
      {
        description: "İç işçilik ekibi",
        quantity: 15,
        unit: "gün",
        unitPrice: 6000,
        quantityOrigin: "assumed",
        audience: "internal"
      }
    ],
    internalCost: {
      labor: 180000,
      machinery: 220000,
      fuel: 60000,
      material: 310000,
      transport: 45000,
      mobilization: 120000,
      testing: 15000,
      wasteFactorPct: 5,
      riskAllowancePct: 8,
      overheadPct: 10,
      targetMarginPct: 22
    }
  };
  return { ...base, ...overrides };
}
