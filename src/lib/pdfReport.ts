import { generateReportNo, type Estimate } from "@/lib/costEngine";

/**
 * YER6 KURUMSAL PDF RAPORU — ortak üretici
 *
 * Yüzen hesap makinesindeki (FloatingCalculator) rapor tasarımının birebir
 * aynısını üretir: altın şerit, koyu başlık bandı, logo, rapor no tablosu,
 * numaralı bölümler, kalem kalem maliyet dökümü, KDV, imza ve tam iletişim
 * bilgileriyle footer.
 *
 * TÜRKÇE KARAKTER: jsPDF varsayılan fontu (Helvetica) "ı ş ğ ç ö ü" harflerini
 * bozar. Bu yüzden Roboto TTF gömülür. Font yüklenemezse bozuk PDF üretmek
 * yerine işlem durdurulur ve kullanıcı bilgilendirilir.
 */

let cachedFonts: { regular: string; bold: string } | null = null;
let fontLoadFailed = false;

const GOLD: [number, number, number] = [212, 175, 55];
const DARK: [number, number, number] = [15, 15, 15];
const INK: [number, number, number] = [20, 20, 20];

const COMPANY = "YER6 ZEMİN GÜÇLENDİRME JEOTEKNİK MÜHENDİSLİK LTD. ŞTİ.";
const ADDRESS = "Şht. Ali Gaffar Okan Cad. No:42-A Gölbaşı / ANKARA";
const CONTACT = "T: +90 532 378 06 91   •   info@yer6zemin.com.tr   •   www.yer6zemin.com.tr";

async function loadFonts(): Promise<boolean> {
  if (cachedFonts) return true;
  if (fontLoadFailed) return false;
  try {
    const fetchFont = async (path: string) => {
      const res = await fetch(path);
      if (!res.ok) throw new Error(`Font HTTP ${res.status}: ${path}`);
      const buffer = await res.arrayBuffer();
      let binary = "";
      const bytes = new Uint8Array(buffer);
      for (let i = 0; i < bytes.byteLength; i += 1) binary += String.fromCharCode(bytes[i]);
      return btoa(binary);
    };
    const [regular, bold] = await Promise.all([
      fetchFont("/fonts/Roboto-Regular.ttf"),
      fetchFont("/fonts/Roboto-Bold.ttf")
    ]);
    cachedFonts = { regular, bold };
    return true;
  } catch (error) {
    console.error("Font yuklenemedi:", error);
    fontLoadFailed = true;
    return false;
  }
}

export type ReportParams = {
  /** Rapor alt başlığı — ör. "Jet Grout Maliyet ve Metraj Hesaplama" */
  toolTitle: string;
  /** Yöntem etiketi — ör. "JET GROUT" */
  methodLabel: string;
  /** Girdi satırları: [etiket, değer] */
  inputs: [string, string][];
  /** Metraj satırları: [tanım, miktar] */
  quantities: [string, string][];
  estimate: Estimate;
  /** Dosya adında kullanılacak kısa ad */
  fileKey: string;
};

const fmt = (n: number, d = 0) =>
  n.toLocaleString("tr-TR", { minimumFractionDigits: d, maximumFractionDigits: d });

/**
 * Raporu üretir ve indirir. Font yüklenemezse false döner (çağıran uyarır).
 */
export async function generateYer6Report(params: ReportParams): Promise<boolean> {
  const { jsPDF } = await import("jspdf");
  const autoTable = (await import("jspdf-autotable")).default;

  if (!(await loadFonts()) || !cachedFonts) return false;

  const doc = new jsPDF();
  doc.addFileToVFS("Roboto-Regular.ttf", cachedFonts.regular);
  doc.addFileToVFS("Roboto-Bold.ttf", cachedFonts.bold);
  doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
  doc.addFont("Roboto-Bold.ttf", "Roboto", "bold");
  doc.setFont("Roboto", "normal");

  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  const est = params.estimate;

  // ——— Üst altın şerit + koyu başlık bandı ———
  doc.setFillColor(...GOLD);
  doc.rect(0, 0, pageWidth, 4, "F");
  doc.setFillColor(...DARK);
  doc.rect(0, 4, pageWidth, 35, "F");

  // Logo (yüklenemezse metin yedeği)
  try {
    const logo = new Image();
    logo.src = "/apple-icon.png";
    await new Promise((resolve, reject) => {
      logo.onload = resolve;
      logo.onerror = reject;
    });
    doc.addImage(logo, "PNG", 14, 8, 26, 26);
  } catch {
    doc.setFont("Roboto", "bold");
    doc.setFontSize(28);
    doc.setTextColor(...GOLD);
    doc.text("YER6", 14, 26);
  }

  doc.setFont("Roboto", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("YER6", 45, 19);

  doc.setFontSize(9);
  doc.setTextColor(...GOLD);
  doc.text("ZEMİN GÜÇLENDİRME • JEOTEKNİK MÜHENDİSLİK", 45, 26);

  doc.setFont("Roboto", "normal");
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text("GROUND INTELLIGENCE", pageWidth - 14, 19, { align: "right" });
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text("www.yer6zemin.com.tr", pageWidth - 14, 26, { align: "right" });

  // ——— Başlık ———
  doc.setFont("Roboto", "bold");
  doc.setFontSize(16);
  doc.setTextColor(...INK);
  doc.text("YER6 MÜHENDİSLİK FİZİBİLİTE RAPORU", 14, 52);

  doc.setFont("Roboto", "normal");
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(params.toolTitle, 14, 58);

  const today = new Date().toLocaleDateString("tr-TR");
  const reportNo = generateReportNo();

  autoTable(doc, {
    startY: 65,
    head: [["RAPOR NO", "TARİH", "OLUŞTURAN", "MUHATAP"]],
    body: [[reportNo, today, "YER6 Mühendislik Departmanı", "Sayın İlgili"]],
    theme: "grid",
    styles: { font: "Roboto", cellPadding: 3 },
    headStyles: { fillColor: INK, textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8 },
    bodyStyles: { textColor: [40, 40, 40], fontSize: 9, fontStyle: "bold" }
  });

  const lastY = () =>
    (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ?? 80;
  let finalY = lastY();

  const sectionTitle = (no: string, title: string, y: number, offset = 21) => {
    doc.setFont("Roboto", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...GOLD);
    doc.text(no, 14, y);
    doc.setTextColor(...INK);
    doc.text(title, offset, y);
  };

  // ——— 01 PROJE PARAMETRELERİ ———
  sectionTitle("01", "PROJE PARAMETRELERİ", finalY + 12);
  autoTable(doc, {
    startY: finalY + 16,
    body: [["İmalat Yöntemi", params.methodLabel], ...params.inputs],
    theme: "plain",
    styles: { font: "Roboto", cellPadding: 2 },
    bodyStyles: { textColor: [60, 60, 60], fontSize: 9 },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 60 } }
  });
  finalY = lastY();

  // ——— 02 METRAJ VE TAHMİNİ BÜTÇE ———
  sectionTitle("02", "METRAJ VE TAHMİNİ BÜTÇE", finalY + 12);
  autoTable(doc, {
    startY: finalY + 16,
    head: [["İMALAT TANIMI", "MİKTAR"]],
    body: params.quantities,
    theme: "grid",
    styles: { font: "Roboto", cellPadding: 3 },
    headStyles: { fillColor: INK, textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8 },
    bodyStyles: { textColor: [40, 40, 40], fontSize: 9 },
    columnStyles: { 1: { halign: "right" } }
  });
  finalY = lastY();

  autoTable(doc, {
    startY: finalY,
    body: [
      [
        "SADECE İŞÇİLİK BÜTÇE ARALIĞI",
        `${fmt(est.laborMin)} - ${fmt(est.laborMax)} TL`
      ],
      [
        "MALZEMELİ (ANAHTAR TESLİM) BÜTÇE ARALIĞI",
        `${fmt(est.turnkeyMin)} - ${fmt(est.turnkeyMax)} TL`
      ]
    ],
    theme: "grid",
    styles: { font: "Roboto", cellPadding: 3 },
    bodyStyles: { fillColor: [245, 235, 200], textColor: INK, fontStyle: "bold", fontSize: 10 },
    columnStyles: { 0: { halign: "right" }, 1: { halign: "right", cellWidth: 70 } }
  });
  finalY = lastY();

  // ——— 02b MALİYET DÖKÜMÜ ———
  sectionTitle("02b", "MALİYET DÖKÜMÜ (KDV HARİÇ)", finalY + 12, 24);

  doc.setFont("Roboto", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(110, 110, 110);
  const kurEtiket = est.fx.live ? "Canlı kur" : "Kur (baseline)";
  doc.text(
    `${kurEtiket}: 1 USD = ${fmt(est.fx.usdTry, 2)} ₺  •  1 EUR = ${fmt(est.fx.eurTry, 2)} ₺  •  kaynak: ${est.fx.source}`,
    14,
    finalY + 17
  );
  doc.text(
    `Birim fiyat kataloğu: ${est.priceBookAsOf} • otomatik güncelleme (canlı kur + zaman endeksi, +${est.escalationMonths} ay) • model ${est.modelVersion}`,
    14,
    finalY + 21
  );

  autoTable(doc, {
    startY: finalY + 24,
    head: [["KALEM", "MİKTAR", "BİRİM FİYAT (₺)", "TUTAR (₺)"]],
    body: est.lineItems.map((li) => [
      li.name,
      `${fmt(li.qty, li.unit === "ton" || li.unit === "m³" ? 1 : 0)} ${li.unit}`,
      fmt(li.unitPrice),
      fmt(li.total)
    ]),
    theme: "grid",
    styles: { font: "Roboto", cellPadding: 2.5, fontSize: 8 },
    headStyles: { fillColor: INK, textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8 },
    bodyStyles: { textColor: [40, 40, 40] },
    columnStyles: {
      1: { halign: "right" },
      2: { halign: "right" },
      3: { halign: "right", fontStyle: "bold" }
    }
  });
  finalY = lastY();

  const kdv = est.turnkeyPoint * est.kdvRate;
  autoTable(doc, {
    startY: finalY,
    body: [
      ["Doğrudan maliyet + sarf", `${fmt(est.directCost)} ₺`],
      ["Şantiye genel gideri", `${fmt(est.overhead)} ₺`],
      ["Firma kârı", `${fmt(est.profit)} ₺`],
      ["ARA TOPLAM (KDV hariç)", `${fmt(est.turnkeyPoint)} ₺`],
      [`KDV (%${Math.round(est.kdvRate * 100)})`, `${fmt(kdv)} ₺`],
      ["GENEL TOPLAM (KDV dahil)", `${fmt(est.turnkeyPoint + kdv)} ₺`]
    ],
    theme: "plain",
    styles: { font: "Roboto", cellPadding: 2, fontSize: 8.5 },
    columnStyles: {
      0: { halign: "right", cellWidth: 120, textColor: [80, 80, 80] },
      1: { halign: "right", fontStyle: "bold", textColor: INK }
    }
  });
  finalY = lastY();

  // ——— 03 NOTLAR ———
  if (finalY > pageHeight - 70) {
    doc.addPage();
    finalY = 20;
  }
  sectionTitle("03", "NOTLAR", finalY + 12);
  doc.setFont("Roboto", "normal");
  doc.setFontSize(8);
  doc.setTextColor(80, 80, 80);
  const notes = [
    "• Bu analiz, YER6 Mühendislik Departmanı tarafından sağlanan güncel parametrelere göre otomatik oluşturulmuştur.",
    "• Kesin miktar, metraj ve fiyatlandırma ancak saha etüdü ve mimari projeler incelendikten sonra uzman mühendis kadromuz tarafından sunulacaktır.",
    "• İşbu belge resmi bir fiyat teklifi niteliği taşımaz; ön değerlendirme, fizibilite ve bütçe planlaması için referans amaçlıdır.",
    "• Zemin etüdü yapılmadan yöntem ve uygulama kararı verilmemelidir."
  ];
  let noteY = finalY + 18;
  notes.forEach((note) => {
    const lines = doc.splitTextToSize(note, 180);
    doc.text(lines, 14, noteY);
    noteY += lines.length * 4.5;
  });

  if (noteY > pageHeight - 40) {
    doc.addPage();
    noteY = 20;
  }

  // ——— İmza ———
  doc.setFont("Roboto", "normal");
  doc.setFontSize(9);
  doc.setTextColor(40, 40, 40);
  doc.text("Saygılarımızla,", 14, noteY + 10);
  doc.setFont("Roboto", "bold");
  doc.text(COMPANY, 14, noteY + 16);

  // ——— Footer: adres, telefon, e-posta, site ———
  doc.setDrawColor(200, 200, 200);
  doc.line(14, pageHeight - 16, pageWidth - 14, pageHeight - 16);
  doc.setFont("Roboto", "normal");
  doc.setFontSize(7);
  doc.setTextColor(120, 120, 120);
  doc.text(`${COMPANY} • ${ADDRESS}`, 14, pageHeight - 11);
  doc.text(CONTACT, 14, pageHeight - 7);

  const safeKey = params.fileKey.replace(/[^a-z0-9-]/gi, "-");
  doc.save(`YER6_Fizibilite_Raporu_${safeKey}_${reportNo}.pdf`);
  return true;
}
