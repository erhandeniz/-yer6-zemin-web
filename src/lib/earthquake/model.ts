/**
 * YER6 — DEPREM OLAY VERİ MODELİ VE BİRLEŞTİRME (DEDUPLICATION)
 *
 * Aynı deprem AFAD, Kandilli, USGS ve EMSC'de ayrı kayıtlar hâlinde bulunur.
 * Bu modül bunları TEK OLAYA birleştirir ve kaynak farklarını (büyüklük, derinlik,
 * merkez üssü) gizlemeden yan yana gösterir.
 *
 * ASLA YAPILMAZ: sahte olay üretmek, tahmin yapmak, doğrulanmamış kaydı
 * "doğrulandı" göstermek, kaynak farkını tek bir sayıya indirip gizlemek.
 */

export type VerificationStatus = "single-source" | "corroborated" | "revised" | "unverified";

/** Tek bir kurumun bildirdiği ham gözlem. */
export type SourceObservation = {
  sourceId: string;
  /** Kurumun kendi olay kimliği */
  externalId: string;
  /** UTC ISO 8601 */
  originTime: string;
  latitude: number;
  longitude: number;
  /** km */
  depthKm: number;
  magnitude: number;
  /** ML, Mw, mb ... */
  magnitudeType: string;
  place: string;
  sourceUrl: string;
  /** Kaydın kurumda son güncellenme zamanı (varsa) */
  updatedAt?: string;
  /** Bizim veriyi çektiğimiz an */
  retrievedAt: string;
};

/** Birleştirilmiş olay: birden fazla kurumun aynı depremi bildirmesi. */
export type EarthquakeEvent = {
  /** Deterministik kimlik: yuvarlanmış zaman + konum ızgarası */
  id: string;
  /** Görüntülemede kullanılacak birincil gözlem (öncelik: AFAD > Kandilli > EMSC > USGS) */
  primary: SourceObservation;
  observations: SourceObservation[];
  verification: VerificationStatus;
  /** Kaynaklar arasındaki farklar — kullanıcıya şeffaf gösterilir */
  discrepancy: {
    magnitudeMin: number;
    magnitudeMax: number;
    depthMinKm: number;
    depthMaxKm: number;
    /** Merkez üssü kestirimleri arası en büyük mesafe (km) */
    epicenterSpreadKm: number;
  };
  /** Türkiye sınırları içinde/yakınında mı (içerik önceliklendirme için) */
  inTurkey: boolean;
};

/** Türkiye kaynakları önce: kullanıcının birincil ilgi alanı yerel veridir. */
const SOURCE_PRIORITY = ["afad", "kandilli", "emsc", "usgs"];

export function haversineKm(
  aLat: number,
  aLon: number,
  bLat: number,
  bLon: number
): number {
  const R = 6371;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(bLat - aLat);
  const dLon = toRad(bLon - aLon);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(aLat)) * Math.cos(toRad(bLat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

/**
 * İki gözlem aynı deprem mi?
 * Sismolojik pratik: aynı olayın farklı kurum çözümleri arasında tipik olarak
 * < 60 sn zaman ve < 100 km konum farkı bulunur.
 */
export function isSameEvent(a: SourceObservation, b: SourceObservation): boolean {
  const dt = Math.abs(Date.parse(a.originTime) - Date.parse(b.originTime)) / 1000;
  if (Number.isNaN(dt) || dt > 60) return false;
  const dist = haversineKm(a.latitude, a.longitude, b.latitude, b.longitude);
  if (dist > 100) return false;
  // Büyüklük çözümleri farklı olabilir; 1.5 birimden fazla fark ayrı olay sayılır.
  return Math.abs(a.magnitude - b.magnitude) <= 1.5;
}

/** Türkiye kaba sınır kutusu (içerik önceliklendirme amaçlı, hukuki sınır değildir). */
export function isInTurkeyBox(lat: number, lon: number): boolean {
  return lat >= 35.5 && lat <= 42.5 && lon >= 25.5 && lon <= 45.0;
}

function eventId(o: SourceObservation): string {
  const t = Math.round(Date.parse(o.originTime) / 60_000); // dakikaya yuvarla
  const la = Math.round(o.latitude * 10);
  const lo = Math.round(o.longitude * 10);
  return `eq-${t}-${la}-${lo}`;
}

/**
 * Ham gözlemleri olaylara birleştirir. Tekrar eden deprem kaydı üretmez.
 */
export function mergeObservations(observations: SourceObservation[]): EarthquakeEvent[] {
  const groups: SourceObservation[][] = [];

  for (const obs of observations) {
    const group = groups.find((g) => g.some((existing) => isSameEvent(existing, obs)));
    if (group) {
      // Aynı kurumdan aynı olayın tekrarını ekleme (idempotency)
      const already = group.find(
        (g) => g.sourceId === obs.sourceId && g.externalId === obs.externalId
      );
      if (already) {
        // Kurum kaydı revize ettiyse güncelle
        if ((obs.updatedAt ?? "") > (already.updatedAt ?? "")) {
          group[group.indexOf(already)] = obs;
        }
        continue;
      }
      group.push(obs);
    } else {
      groups.push([obs]);
    }
  }

  return groups.map((group) => {
    const sorted = [...group].sort(
      (a, b) => SOURCE_PRIORITY.indexOf(a.sourceId) - SOURCE_PRIORITY.indexOf(b.sourceId)
    );
    const primary = sorted[0];
    const mags = group.map((g) => g.magnitude);
    const depths = group.map((g) => g.depthKm);

    let spread = 0;
    for (let i = 0; i < group.length; i += 1) {
      for (let j = i + 1; j < group.length; j += 1) {
        spread = Math.max(
          spread,
          haversineKm(group[i].latitude, group[i].longitude, group[j].latitude, group[j].longitude)
        );
      }
    }

    const revised = group.some((g) => g.updatedAt && g.updatedAt > g.retrievedAt);
    const verification: VerificationStatus = revised
      ? "revised"
      : group.length > 1
        ? "corroborated"
        : "single-source";

    return {
      id: eventId(primary),
      primary,
      observations: sorted,
      verification,
      discrepancy: {
        magnitudeMin: Math.min(...mags),
        magnitudeMax: Math.max(...mags),
        depthMinKm: Math.min(...depths),
        depthMaxKm: Math.max(...depths),
        epicenterSpreadKm: Math.round(spread * 10) / 10
      },
      inTurkey: isInTurkeyBox(primary.latitude, primary.longitude)
    };
  });
}

/** Yayın için sıralama: en yeni önce; eşitlikte büyüklüğü yüksek olan önce. */
export function sortForDisplay(events: EarthquakeEvent[]): EarthquakeEvent[] {
  return [...events].sort((a, b) => {
    const t = Date.parse(b.primary.originTime) - Date.parse(a.primary.originTime);
    return t !== 0 ? t : b.primary.magnitude - a.primary.magnitude;
  });
}
