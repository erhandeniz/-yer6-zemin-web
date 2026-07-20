// YER6 canlı döviz kuru katmanı.
// Türkiye inşaat/geoteknik maliyetinin en oynak sürücüsü döviz kurudur; mazot,
// ithal çelik ve makine yedekleri kura bağlıdır. Bu modül, PDF/teklif üretilirken
// güncel USD/TRY ve EUR/TRY değerlerini ANAHTARSIZ ve ücretsiz bir kaynaktan çeker.
// Ağ hatası, CORS veya kaynak kesintisinde sessizce baseline (katalog tarihindeki)
// kura düşer; hesap asla patlamaz, yalnızca "canlı değil" işaretlenir.

export interface FxRates {
  usdTry: number;
  eurTry: number;
  /** Kurun canlı mı yoksa katalog baseline'ı mı olduğunu belirtir. */
  live: boolean;
  /** Kaynak adı (PDF'te şeffaflık için gösterilir). */
  source: string;
  /** Kaynağın son güncelleme zamanı (ISO/serbest metin). */
  asOf: string;
}

// Katalog hazırlanırken (Temmuz 2026) geçerli baseline kur. costEngine bununla
// aynı değerleri kullanır; canlı kur alınamazsa fiyatlar bu temele göre çıkar.
export const BASELINE_FX: FxRates = {
  usdTry: 47.18,
  eurTry: 53.7,
  live: false,
  source: "YER6 katalog baseline (2026-07)",
  asOf: "2026-07",
};

const FETCH_TIMEOUT_MS = 6000;

async function fetchJson(url: string): Promise<Record<string, unknown>> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: controller.signal, cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as Record<string, unknown>;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Canlı USD/TRY ve EUR/TRY döndürür. İki ücretsiz/anahtarsız kaynak sırayla denenir;
 * ikisi de başarısız olursa BASELINE_FX döner (live:false). Hiçbir zaman throw etmez.
 */
export async function fetchLiveFx(): Promise<FxRates> {
  // 1) open.er-api.com — USD tabanlı, CORS açık, anahtarsız.
  try {
    const j = await fetchJson("https://open.er-api.com/v6/latest/USD");
    const rates = j.rates as Record<string, number> | undefined;
    const usdTry = rates?.TRY;
    const eurPerUsd = rates?.EUR;
    if (usdTry && eurPerUsd && isFinite(usdTry) && isFinite(eurPerUsd)) {
      const asOf = (j.time_last_update_utc as string) || new Date().toISOString();
      return {
        usdTry,
        eurTry: usdTry / eurPerUsd, // TRY/USD ÷ EUR/USD = TRY/EUR
        live: true,
        source: "open.er-api.com",
        asOf,
      };
    }
  } catch {
    // sıradaki kaynağa geç
  }

  // 2) frankfurter.app — ECB tabanlı yedek (EUR bazlı).
  try {
    const j = await fetchJson("https://api.frankfurter.app/latest?from=USD&to=TRY,EUR");
    const rates = j.rates as Record<string, number> | undefined;
    const usdTry = rates?.TRY;
    const eurPerUsd = rates?.EUR;
    if (usdTry && eurPerUsd && isFinite(usdTry) && isFinite(eurPerUsd)) {
      const asOf = (j.date as string) || new Date().toISOString();
      return {
        usdTry,
        eurTry: usdTry / eurPerUsd,
        live: true,
        source: "frankfurter.app (ECB)",
        asOf,
      };
    }
  } catch {
    // baseline'a düş
  }

  return { ...BASELINE_FX };
}
