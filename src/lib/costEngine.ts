// YER6 Geoteknik Maliyet Motoru
// ------------------------------------------------------------------
// Amaç: Fiyatı "metre × sabit ₺" ile değil, gerçek metrajı (beton, çelik,
// çimento, mazot) GÜNCEL birim fiyatlarla çarparak, işçilik + makine + mobilizasyon
// + genel gider + kâr ekleyerek AŞAĞIDAN-YUKARI kurmak. Döviz kuruna duyarlı
// kalemler canlı kurla ölçeklenir. Her rakam izlenebilir bir satır kalemine dayanır.
//
// ŞEFFAFLIK: Birim fiyatlar aşağıda kaynak ve tarihiyle sabittir (PRICE_BOOK_AS_OF).
// Bu bir "canlı emtia beslemesi" değildir — Türkiye'de çimento/beton/mazot için
// güvenilir, anahtarsız canlı API yoktur. Bunun yerine: tarih damgalı, kaynaklı,
// güncellenebilir katalog + CANLI döviz düzeltmesi kullanılır.

import type { FxRates } from "@/lib/fx";
import { BASELINE_FX } from "@/lib/fx";

export const COST_MODEL_VERSION = "yer6-cost-1.0.0";
// Katalog birim fiyatlarının geçerlilik dönemi. Fiyatlar bu tarihte web
// araştırmasıyla doğrulanmıştır (TR piyasası, KDV hariç, ortalama değerler).
export const PRICE_BOOK_AS_OF = "2026-07";

export type CalcMode = "jet-grout" | "fore-kazik" | "dsm" | "ankraj" | "mini-kazik";
export type Complexity = "quick" | "advanced";
export type SoilType = "soft" | "hard";

// FX duyarlılığı: kalemin maliyetinin ne kadarı döviz kuruna bağlı (0=yerel, 1=tam ithal/USD).
// adjusted = base × (1 + sens × (canlıUSDTRY / baselineUSDTRY − 1))
interface PricedUnit {
  price: number; // ₺, KDV hariç, PRICE_BOOK_AS_OF itibarıyla
  fxSensitivity: number; // 0..1
  note: string; // kaynak/açıklama
}

// -------------------- GÜNCEL BİRİM FİYAT KATALOĞU (Temmuz 2026, ₺, KDV hariç) --------------------
export const PRICE_BOOK = {
  readyMixC30_m3: { price: 4050, fxSensitivity: 0.2, note: "Hazır beton C30 (pompa hariç), TR ort." } as PricedUnit,
  concretePump_m3: { price: 300, fxSensitivity: 0.25, note: "Beton pompası + nakliye payı" } as PricedUnit,
  rebar_ton: { price: 29000, fxSensitivity: 0.55, note: "Nervürlü inşaat demiri (KDV hariç), global çelik bağlı" } as PricedUnit,
  cement_ton: { price: 3300, fxSensitivity: 0.2, note: "Dökme CEM 42.5 çimento, TR ort." } as PricedUnit,
  bentonite_ton: { price: 8500, fxSensitivity: 0.5, note: "Sondaj bentoniti" } as PricedUnit,
  strand_m: { price: 120, fxSensitivity: 0.55, note: "Öngerme halatı (0.6\"), metre" } as PricedUnit,
  diesel_lt: { price: 65, fxSensitivity: 0.85, note: "Motorin pompa fiyatı, Brent+kur bağlı" } as PricedUnit,
  laborCrewDay: { price: 12000, fxSensitivity: 0.05, note: "Saha ekibi yevmiyesi (operatör+usta+işçi)" } as PricedUnit,
} as const;

// Makine (delgi/enjeksiyon) günlük bedeli — yakıt hariç (yakıt ayrı hesaplanır), ₺/gün.
const RIG_DAY: Record<CalcMode, PricedUnit> = {
  "jet-grout": { price: 35000, fxSensitivity: 0.35, note: "Jet grout ünitesi günlük (yakıt hariç)" },
  dsm: { price: 40000, fxSensitivity: 0.35, note: "DSM ünitesi günlük (yakıt hariç)" },
  "fore-kazik": { price: 45000, fxSensitivity: 0.35, note: "Fore kazık makinesi günlük (yakıt hariç)" },
  "mini-kazik": { price: 25000, fxSensitivity: 0.35, note: "Mini kazık makinesi günlük (yakıt hariç)" },
  ankraj: { price: 22000, fxSensitivity: 0.35, note: "Ankraj/delgi ünitesi günlük (yakıt hariç)" },
};

// Günlük ilerleme (m/gün) — şantiye günü hesabı için.
const DAILY_METERS: Record<CalcMode, number> = {
  "jet-grout": 300,
  dsm: 400,
  "fore-kazik": 80,
  "mini-kazik": 120,
  ankraj: 150,
};

// Delgi metresi başına mazot tüketimi (lt/m).
const DIESEL_PER_METER: Record<CalcMode, number> = {
  "jet-grout": 6,
  dsm: 7,
  "fore-kazik": 12,
  "mini-kazik": 7,
  ankraj: 5,
};

// Mobilizasyon/demobilizasyon (kurulum-sökülüm-nakliye), ₺ sabit.
const MOBILIZATION: Record<CalcMode, PricedUnit> = {
  "jet-grout": { price: 120000, fxSensitivity: 0.3, note: "Mobilizasyon-demobilizasyon" },
  dsm: { price: 140000, fxSensitivity: 0.3, note: "Mobilizasyon-demobilizasyon" },
  "fore-kazik": { price: 180000, fxSensitivity: 0.3, note: "Mobilizasyon-demobilizasyon" },
  "mini-kazik": { price: 90000, fxSensitivity: 0.3, note: "Mobilizasyon-demobilizasyon" },
  ankraj: { price: 90000, fxSensitivity: 0.3, note: "Mobilizasyon-demobilizasyon" },
};

// Oranlar
const CONSUMABLES_RATE = 0.06; // sarf/küçük ekipman
const SITE_OVERHEAD_RATE = 0.08; // şantiye genel gideri
const PROFIT_RATE = 0.12; // firma kârı
const CONFIDENCE_BAND = 0.1; // ±%10 belirsizlik bandı
const KDV_RATE = 0.2;

// OTOMATİK ESKALASYON: Katalog tarihinden bu yana geçen her ay için yerel/işçilik
// payına uygulanan TR inşaat maliyet endeksi mertebesinde artış. Böylece "bir kez
// kur, hep güncel kalsın" — kur bağlı pay canlı kurla, yerel pay zamanla otomatik
// güncellenir; katalog elle güncellenmese bile fiyat eskimez.
const MONTHLY_ESCALATION = 0.025; // ~%2.5/ay (TR inşaat maliyet endeksi mertebesi)
const MAX_ESCALATION_MONTHS = 36; // güvenlik tavanı (katalog çok eskirse patlamasın)

/** PRICE_BOOK_AS_OF ("YYYY-MM") tarihinden bugüne geçen tam ay sayısı (0..MAX). */
export function monthsSincePriceBook(now = new Date()): number {
  const [y, m] = PRICE_BOOK_AS_OF.split("-").map((s) => parseInt(s, 10));
  if (!y || !m) return 0;
  const months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
  return Math.min(Math.max(0, months), MAX_ESCALATION_MONTHS);
}

// Birim fiyatı hem canlı kura hem zamana göre otomatik günceller:
//   kur bağlı pay  → canlıUSDTRY / baselineUSDTRY
//   yerel pay      → (1+aylıkEskalasyon)^geçenAy
function autoAdjust(unit: PricedUnit, fx: FxRates, months: number): number {
  const fxRatio = fx.usdTry / BASELINE_FX.usdTry;
  const escalation = Math.pow(1 + MONTHLY_ESCALATION, months);
  const blended = unit.fxSensitivity * fxRatio + (1 - unit.fxSensitivity) * escalation;
  return unit.price * blended;
}

export interface CostInput {
  mode: CalcMode;
  count: number;
  depth: number;
  diameter: number;
  complexity: Complexity;
  soilType: SoilType;
  factor: number; // gelişmiş modda mühendislik/overbreak katsayısı
  fx: FxRates;
}

export interface LineItem {
  name: string;
  qty: number;
  unit: string;
  unitPrice: number; // FX düzeltilmiş ₺
  total: number; // ₺
  group: "malzeme" | "iscilik" | "makine" | "yakit" | "mobilizasyon";
}

export interface Estimate {
  mode: CalcMode;
  // Metraj (UI metriklerini besler)
  quantities: {
    concreteM3: number;
    steelTon: number;
    cementTon: number;
    dieselLt: number;
    strandM: number;
    groutM3: number;
    drillMeters: number;
    rigDays: number;
    co2Ton: number;
  };
  lineItems: LineItem[];
  // Ara toplamlar
  materials: number;
  labor: number;
  equipment: number;
  fuel: number;
  consumables: number;
  mobilization: number;
  directCost: number; // yukarıdakilerin toplamı
  overhead: number;
  profit: number;
  // Sonuç (KDV hariç, nokta tahmin)
  turnkeyPoint: number; // malzemeli anahtar teslim
  laborOnlyPoint: number; // sadece işçilik+makine (malzeme hariç)
  // ±band aralıkları
  turnkeyMin: number;
  turnkeyMax: number;
  laborMin: number;
  laborMax: number;
  kdvRate: number;
  fx: FxRates;
  priceBookAsOf: string;
  escalationMonths: number;
  modelVersion: string;
}

export function computeEstimate(input: CostInput): Estimate {
  const { mode, count, depth, diameter, complexity, soilType, factor, fx } = input;

  const overbreak = complexity === "advanced" ? factor : 1.1;
  const r = diameter / 2;
  const singleVolume = Math.PI * r * r * depth;
  const totalVolume = singleVolume * count * overbreak;
  const drillMeters = depth * count;
  const rigDays = Math.max(1, Math.ceil(drillMeters / DAILY_METERS[mode]));

  // Canlı kur + zamana bağlı eskalasyonla otomatik güncellenmiş birim fiyatlar
  const months = monthsSincePriceBook();
  const p = {
    concrete: autoAdjust(PRICE_BOOK.readyMixC30_m3, fx, months),
    pump: autoAdjust(PRICE_BOOK.concretePump_m3, fx, months),
    rebar: autoAdjust(PRICE_BOOK.rebar_ton, fx, months),
    cement: autoAdjust(PRICE_BOOK.cement_ton, fx, months),
    strand: autoAdjust(PRICE_BOOK.strand_m, fx, months),
    diesel: autoAdjust(PRICE_BOOK.diesel_lt, fx, months),
    crewDay: autoAdjust(PRICE_BOOK.laborCrewDay, fx, months),
    rigDay: autoAdjust(RIG_DAY[mode], fx, months),
    mob: autoAdjust(MOBILIZATION[mode], fx, months),
  };

  const dieselLt = drillMeters * DIESEL_PER_METER[mode];

  const items: LineItem[] = [];
  let concreteM3 = 0;
  let steelTon = 0;
  let cementTon = 0;
  let strandM = 0;
  let groutM3 = 0;

  // ----- Malzeme metrajı ve kalemleri (moda göre) -----
  if (mode === "fore-kazik" || mode === "mini-kazik") {
    concreteM3 = totalVolume;
    steelTon = (totalVolume * 120) / 1000; // 120 kg/m³ donatı
    items.push({ name: "Hazır beton C30", qty: concreteM3, unit: "m³", unitPrice: p.concrete + p.pump, total: concreteM3 * (p.concrete + p.pump), group: "malzeme" });
    items.push({ name: "Nervürlü çelik donatı", qty: steelTon, unit: "ton", unitPrice: p.rebar, total: steelTon * p.rebar, group: "malzeme" });
  } else if (mode === "jet-grout" || mode === "dsm") {
    const dosage = complexity === "advanced" && soilType === "soft" ? 450 : 350; // kg/m
    cementTon = (drillMeters * dosage) / 1000;
    items.push({ name: "Enjeksiyon çimentosu (CEM 42.5)", qty: cementTon, unit: "ton", unitPrice: p.cement, total: cementTon * p.cement, group: "malzeme" });
  } else if (mode === "ankraj") {
    strandM = drillMeters * 4; // 4 halat/ankraj
    groutM3 = drillMeters * 0.05;
    cementTon = groutM3 * 1.3; // enjeksiyon çimentosu (~1.3 t/m³ şerbet)
    items.push({ name: "Öngerme halatı", qty: strandM, unit: "m", unitPrice: p.strand, total: strandM * p.strand, group: "malzeme" });
    items.push({ name: "Enjeksiyon çimentosu", qty: cementTon, unit: "ton", unitPrice: p.cement, total: cementTon * p.cement, group: "malzeme" });
  }

  // ----- İşçilik, makine, yakıt, mobilizasyon -----
  items.push({ name: "Saha ekibi (işçilik)", qty: rigDays, unit: "gün", unitPrice: p.crewDay, total: rigDays * p.crewDay, group: "iscilik" });
  items.push({ name: "Makine & ekipman", qty: rigDays, unit: "gün", unitPrice: p.rigDay, total: rigDays * p.rigDay, group: "makine" });
  items.push({ name: "Mazot (motorin)", qty: dieselLt, unit: "lt", unitPrice: p.diesel, total: dieselLt * p.diesel, group: "yakit" });
  items.push({ name: "Mobilizasyon-demobilizasyon", qty: 1, unit: "kalem", unitPrice: p.mob, total: p.mob, group: "mobilizasyon" });

  // ----- Toplamlar -----
  const sum = (g: LineItem["group"]) => items.filter((i) => i.group === g).reduce((a, i) => a + i.total, 0);
  const materials = sum("malzeme");
  const labor = sum("iscilik");
  const equipment = sum("makine");
  const fuel = sum("yakit");
  const mobilization = sum("mobilizasyon");

  const preConsumables = materials + labor + equipment + fuel + mobilization;
  const consumables = preConsumables * CONSUMABLES_RATE;
  const directCost = preConsumables + consumables;
  const overhead = directCost * SITE_OVERHEAD_RATE;
  const profit = (directCost + overhead) * PROFIT_RATE;

  const turnkeyPoint = directCost + overhead + profit;

  // Sadece işçilik+makine (malzeme HARİÇ) — orantılı genel gider/kâr ile
  const laborDirect = labor + equipment + fuel + mobilization + (labor + equipment + fuel + mobilization) * CONSUMABLES_RATE;
  const laborOnlyPoint = laborDirect * (1 + SITE_OVERHEAD_RATE) * (1 + PROFIT_RATE);

  // CO2 (daha gerçekçi): çimento ~0.85 t, beton ~0.32 t/m³, çelik ~1.9 t/t
  const co2Ton = Math.round(cementTon * 0.85 + concreteM3 * 0.32 + steelTon * 1.9);

  return {
    mode,
    quantities: { concreteM3, steelTon, cementTon, dieselLt, strandM, groutM3, drillMeters, rigDays, co2Ton },
    lineItems: items,
    materials,
    labor,
    equipment,
    fuel,
    consumables,
    mobilization,
    directCost,
    overhead,
    profit,
    turnkeyPoint,
    laborOnlyPoint,
    turnkeyMin: turnkeyPoint * (1 - CONFIDENCE_BAND),
    turnkeyMax: turnkeyPoint * (1 + CONFIDENCE_BAND),
    laborMin: laborOnlyPoint * (1 - CONFIDENCE_BAND),
    laborMax: laborOnlyPoint * (1 + CONFIDENCE_BAND),
    kdvRate: KDV_RATE,
    fx,
    priceBookAsOf: PRICE_BOOK_AS_OF,
    escalationMonths: months,
    modelVersion: COST_MODEL_VERSION,
  };
}

// Benzersiz, izlenebilir ve sıralanabilir rapor numarası:
// YER6-YYYYMMDD-HHMM-XXXX  (XXXX = crypto rastgele hex; çakışma pratikte imkânsız)
export function generateReportNo(date = new Date()): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  const y = date.getFullYear();
  const stamp = `${y}${pad(date.getMonth() + 1)}${pad(date.getDate())}-${pad(date.getHours())}${pad(date.getMinutes())}`;
  let rand = "";
  try {
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      const buf = new Uint8Array(2);
      crypto.getRandomValues(buf);
      rand = Array.from(buf).map((b) => b.toString(16).padStart(2, "0")).join("").toUpperCase();
    }
  } catch {
    // fallback
  }
  if (!rand) rand = Math.floor(Math.random() * 65536).toString(16).padStart(4, "0").toUpperCase();
  return `YER6-${stamp}-${rand}`;
}
