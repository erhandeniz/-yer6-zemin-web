"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, X, ChevronRight, Download, Activity, Zap, HardHat, Hammer, MountainSnow, BotMessageSquare, ArrowLeft, Loader2, Send } from "lucide-react";
import { computeEstimate, generateReportNo, type Estimate, type CalcMode as EngineMode } from "@/lib/costEngine";
import { fetchLiveFx, BASELINE_FX, type FxRates } from "@/lib/fx";

// Canlı YER6 AI ("abi") Worker adresi. Statik export'ta derleme zamanı env ile
// override edilebilir; varsayılan üretim alan adı.
const YER6_AI_URL = (process.env.NEXT_PUBLIC_YER6_AI_URL || "https://ai.yer6zemin.com.tr").replace(/\/$/, "");

type ChatMsg = { role: "user" | "assistant"; content: string };

type CalcMode = "jet-grout" | "fore-kazik" | "dsm" | "ankraj" | "mini-kazik" | null;
type Complexity = "quick" | "advanced";
type Step = "selection" | "input" | "chat";

// Fontlar bir kez indirilip base64 olarak modül düzeyinde cache'lenir; her PDF'te
// tekrar indirip kodlamayı önler (performans) ve tek yükleme noktası sağlar.
let cachedFonts: { regular: string; bold: string } | null = null;
let fontLoadFailed = false;

export function FloatingCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("selection");
  const [mode, setMode] = useState<CalcMode>(null);
  const [complexity, setComplexity] = useState<Complexity>("quick");

  // Universal State
  const [count, setCount] = useState(100);
  const [depth, setDepth] = useState(20);
  const [diameter, setDiameter] = useState(0.8);

  // Advanced State
  const [soilType, setSoilType] = useState<"soft" | "hard">("soft");
  const [factor, setFactor] = useState(1.1); // Overbreak or safety

  // Chat State
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Canlı AI sohbeti (scripted açılış analizinden sonra gerçek danışman)
  const [chatMessages, setChatMessages] = useState<ChatMsg[]>([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  // Canlı döviz kuru — hesaplayıcı açıldığında bir kez çekilir, baseline'a düşer.
  const [fx, setFx] = useState<FxRates>(BASELINE_FX);

  useEffect(() => {
    if (!isOpen) return;
    let active = true;
    fetchLiveFx().then((rates) => {
      if (active) setFx(rates);
    });
    return () => {
      active = false;
    };
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStep("selection");
      setMode(null);
      setTypedText("");
      setChatMessages([]);
      setChatInput("");
    }
  };

  const handleModeSelect = (selectedMode: CalcMode) => {
    setMode(selectedMode);
    setStep("input");
  };

  const formatPrice = (val: number) => {
    if (val >= 1000000) return (val / 1000000).toFixed(2) + " Milyon ₺";
    return Math.round(val).toLocaleString("tr-TR") + " ₺";
  };

  const calculateResults = () => {
    if (!mode) return null;

    // Aşağıdan-yukarı maliyet motoru: metraj × güncel birim fiyat (canlı kur +
    // zamana bağlı eskalasyon) + işçilik + makine + mazot + genel gider + kâr.
    const estimate: Estimate = computeEstimate({
      mode: mode as EngineMode,
      count,
      depth,
      diameter,
      complexity,
      soilType,
      factor,
      fx,
    });

    const q = estimate.quantities;
    const priceText = `${formatPrice(estimate.turnkeyMin)} - ${formatPrice(estimate.turnkeyMax)}`;
    const laborPriceText = `${formatPrice(estimate.laborMin)} - ${formatPrice(estimate.laborMax)}`;
    const price = { label: "Tahmini Bütçe (TL)", value: priceText, laborValue: laborPriceText };

    switch (mode) {
      case "fore-kazik":
      case "mini-kazik":
        return {
          metric1: { label: "Toplam Beton (m³)", value: q.concreteM3 },
          metric2: { label: "Demir (Ton)", value: q.steelTon },
          metric3: { label: "Şantiye (Gün)", value: q.rigDays },
          metric4: { label: "CO2 İzi (Ton)", value: q.co2Ton },
          price,
          estimate,
        };
      case "jet-grout":
      case "dsm":
        return {
          metric1: { label: "Çimento (Ton)", value: q.cementTon },
          metric2: { label: "Delgi (m)", value: q.drillMeters },
          metric3: { label: "Şantiye (Gün)", value: q.rigDays },
          metric4: { label: "CO2 İzi (Ton)", value: q.co2Ton },
          price,
          estimate,
        };
      case "ankraj":
        return {
          metric1: { label: "Halat (m)", value: q.strandM },
          metric2: { label: "Delgi (m)", value: q.drillMeters },
          metric3: { label: "Şantiye (Gün)", value: q.rigDays },
          metric4: { label: "Enjeksiyon (m³)", value: q.groutM3 },
          price,
          estimate,
        };
      default:
        return null;
    }
  };

  const results = calculateResults();

  const getFullAiMessage = () => {
    if (!mode || !results) return "";
    
    let text = `YER6 Yapay Zeka Mühendisi olarak projenizi analiz ettim. Yüksek standartlı kalite politikalarımıza göre çıkardığım sonuçlar:\n\n`;
    
    if (mode === "fore-kazik" || mode === "mini-kazik") {
      text += `Seçmiş olduğunuz ${depth} metre derinliğinde, ${diameter}m çapındaki ${count} adet ${mode.replace("-", " ")} kuyu imalatı için güvenli tolerans paylarıyla birlikte ${Math.round(results.metric1.value).toLocaleString("tr-TR")} m³ beton ve ${Math.round(results.metric2.value).toLocaleString("tr-TR")} Ton çelik donatı kullanılacaktır. `;
    } else if (mode === "jet-grout" || mode === "dsm") {
      text += `Tasarlanan ${depth} metre etkin boylu, ${diameter}m çapındaki ${count} kolonluk ${mode.replace("-", " ")} operasyonu için ideal mühendislik verileriyle ${Math.round(results.metric1.value).toLocaleString("tr-TR")} Ton çimento sarfiyatı hesaplanmıştır. Toplam ${Math.round(results.metric2.value).toLocaleString("tr-TR")} metre delgi işlemi uygulanacaktır. `;
    } else if (mode === "ankraj") {
      text += `Planlanan ${depth} metre boyundaki ${count} adet ankraj destek sisteminde, stabiliteyi sağlamak üzere tahmini ${Math.round(results.metric1.value).toLocaleString("tr-TR")} metre çelik halat ve ${Math.round(results.metric4.value).toLocaleString("tr-TR")} m³ yüksek basınçlı enjeksiyon kullanılacaktır. `;
    }
    
    text += `\n\n🕒 Şantiye çalışma süresi makine parkımıza göre tahmini ${results.metric3.value} gün olarak hesaplanmıştır.`;
    text += `\n💰 YER6 Mühendisleri tarafından yapılan değerlendirmeye göre tahmini bütçe aralıkları şu şekildedir:`;
    text += `\n- **Sadece İşçilik (Makine & Ekipman):** ${results.price.laborValue}`;
    text += `\n- **Malzemeli + İşçilik (Anahtar Teslim):** ${results.price.value}`;
    text += `\n\n⚠️ *Detaylı ve kesin bütçe analizi için lütfen uzman YER6 mühendislerimizle iletişime geçiniz.*`;
    
    return text;
  };

  const startChatAnalysis = () => {
    setStep("chat");
    setTypedText("");
    setIsTyping(true);
    
    const fullText = getFullAiMessage();
    let i = 0;
    
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 15); // Typewriter speed (hızlı)
  };

  // Canlı danışmana gönderilecek proje + maliyet bağlamı (AI'ın uydurmaması için).
  const buildContextPreamble = () => {
    if (!results) return "";
    const e = results.estimate;
    const q = e.quantities;
    return [
      "Sen YER6 Zemin Güçlendirme Geoteknik Mühendislik firmasının uzman AI danışmanısın.",
      "Kısa, net, profesyonel ve dürüst Türkçe yanıt ver. Bilmediğini uydurma; kesin rakam için saha etüdü ve uzman görüşmesi öner.",
      "Aşağıdaki proje ve YER6 maliyet motorunun ürettiği tahmini temel al:",
      `Yöntem: ${mode}`,
      `Parametreler: ${count} adet, ${depth} m boy, ${diameter} m çap, mod: ${complexity}${complexity === "advanced" ? `, katsayı ${factor}, zemin ${soilType}` : ""}`,
      `Metraj: beton ${Math.round(q.concreteM3)} m³, çelik ${q.steelTon.toFixed(1)} t, çimento ${q.cementTon.toFixed(1)} t, delgi ${Math.round(q.drillMeters)} m, mazot ${Math.round(q.dieselLt)} lt, şantiye ${q.rigDays} gün, CO2 ${q.co2Ton} t`,
      `Anahtar teslim (KDV hariç): ${formatPrice(e.turnkeyMin)} - ${formatPrice(e.turnkeyMax)}; sadece işçilik: ${formatPrice(e.laborMin)} - ${formatPrice(e.laborMax)}`,
      `Kur: 1 USD = ${e.fx.usdTry.toFixed(2)} ₺ (${e.fx.live ? "canlı" : "baseline"}), fiyat kataloğu ${e.priceBookAsOf}.`,
      "Bu rakamlar ön tahmindir; kesin teklif saha etüdü sonrası verilir."
    ].join("\n");
  };

  const sendChat = async () => {
    const question = chatInput.trim();
    if (!question || chatLoading || !results) return;
    setChatInput("");
    const history = [...chatMessages, { role: "user", content: question } as ChatMsg];
    setChatMessages([...history, { role: "assistant", content: "" }]);
    setChatLoading(true);

    const setLastAssistant = (content: string) =>
      setChatMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: "assistant", content };
        return copy;
      });

    try {
      const apiMessages: ChatMsg[] = [
        { role: "user" as const, content: buildContextPreamble() },
        { role: "assistant" as const, content: typedText || getFullAiMessage() },
        ...history
      ].slice(-18);

      const res = await fetch(`${YER6_AI_URL}/api/public/estimate-chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: crypto.randomUUID(),
          conversationId: `mkt-${Date.now()}`,
          locale: "tr",
          messages: apiMessages
        })
      });
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let acc = "";
      let gotError = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const parts = buffer.split("\n\n");
        buffer = parts.pop() || "";
        for (const part of parts) {
          const dataLine = part.split("\n").find((l) => l.startsWith("data:"));
          if (!dataLine) continue;
          try {
            const evt = JSON.parse(dataLine.slice(5).trim());
            if (evt.type === "delta" && evt.text) {
              acc += evt.text;
              setLastAssistant(acc);
            } else if (evt.type === "error") {
              gotError = true;
            }
          } catch {
            /* yarım SSE parçası, sonraki turda tamamlanır */
          }
        }
      }

      if (!acc) {
        setLastAssistant(
          gotError
            ? "Canlı danışmana şu an ulaşılamıyor. Kısa süre sonra tekrar deneyebilir ya da WhatsApp hattımızdan yazabilirsiniz."
            : "Yanıt alınamadı, tekrar dener misiniz?"
        );
      }
    } catch {
      setLastAssistant(
        "Canlı danışmana şu an ulaşılamıyor. Parametre analizi ve PDF raporu çalışıyor; detaylı görüşme için WhatsApp hattımıza yazabilirsiniz."
      );
    } finally {
      setChatLoading(false);
    }
  };

  const generatePDF = async () => {
    try {
      const { jsPDF } = await import("jspdf");
      const autoTable = (await import("jspdf-autotable")).default;

      const doc = new jsPDF();

      // Font yükleme — bir kez indir, base64 cache'le, tekrar kullan.
      // KRİTİK: Türkçe fontlar yüklenemezse jsPDF sessizce Helvetica'ya düşüp
      // "ı ş ğ ç ö ü" karakterlerini bozar. Bunu ÖNLEMEK için: font yüklenemezse
      // bozuk PDF üretmek yerine kullanıcıyı bilgilendirip işlemi durduruyoruz.
      if (!cachedFonts && !fontLoadFailed) {
        try {
          const fetchFont = async (fontPath: string) => {
            const res = await fetch(fontPath);
            if (!res.ok) throw new Error(`Font HTTP ${res.status}: ${fontPath}`);
            const buffer = await res.arrayBuffer();
            let binary = "";
            const bytes = new Uint8Array(buffer);
            for (let i = 0; i < bytes.byteLength; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            return btoa(binary);
          };
          const [regular, bold] = await Promise.all([
            fetchFont("/fonts/Roboto-Regular.ttf"),
            fetchFont("/fonts/Roboto-Bold.ttf"),
          ]);
          cachedFonts = { regular, bold };
        } catch (e) {
          console.error("Font yuklenemedi:", e);
          fontLoadFailed = true;
        }
      }

      if (!cachedFonts) {
        alert(
          "Rapor fontları yüklenemediği için PDF oluşturulamadı (Türkçe karakterlerin doğru çıkması için font gereklidir). Lütfen internet bağlantınızı kontrol edip tekrar deneyin."
        );
        return;
      }

      doc.addFileToVFS("Roboto-Regular.ttf", cachedFonts.regular);
      doc.addFileToVFS("Roboto-Bold.ttf", cachedFonts.bold);
      doc.addFont("Roboto-Regular.ttf", "Roboto", "normal");
      doc.addFont("Roboto-Bold.ttf", "Roboto", "bold");
      doc.setFont("Roboto", "normal");

      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      
      // Top accent bar (Gold)
      doc.setFillColor(212, 175, 55);
      doc.rect(0, 0, pageWidth, 4, "F");

      // HEADER BACKGROUND (Dark)
      doc.setFillColor(15, 15, 15);
      doc.rect(0, 4, pageWidth, 35, "F");

      try {
        // Try to load the YER6 logo
        const logoImg = new Image();
        logoImg.src = "/apple-icon.png";
        await new Promise((resolve, reject) => {
          logoImg.onload = resolve;
          logoImg.onerror = reject;
        });
        doc.addImage(logoImg, "PNG", 14, 8, 26, 26);
      } catch (e) {
        // Fallback if image fails to load
        doc.setFont("Roboto", "bold");
        doc.setFontSize(28);
        doc.setTextColor(212, 175, 55);
        doc.text("YER6", 14, 26);
      }

      // HEADER TEXT (Left side next to logo)
      doc.setFont("Roboto", "bold");
      doc.setFontSize(22);
      doc.setTextColor(255, 255, 255);
      doc.text("YER6", 45, 19);
      
      doc.setFont("Roboto", "bold");
      doc.setFontSize(9);
      doc.setTextColor(212, 175, 55); // Gold
      doc.text("ZEMİN GÜÇLENDİRME • JEOTEKNİK MÜHENDİSLİK", 45, 26);
      
      // HEADER TEXT (Right side)
      doc.setFont("Roboto", "normal");
      doc.setFontSize(10);
      doc.setTextColor(255, 255, 255);
      doc.text("GROUND INTELLIGENCE", pageWidth - 14, 19, { align: "right" });
      
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text("www.yer6zemin.com.tr", pageWidth - 14, 26, { align: "right" });

      // Title
      doc.setFont("Roboto", "bold");
      doc.setFontSize(16);
      doc.setTextColor(20, 20, 20);
      doc.text("YER6 MÜHENDİSLİK FİZİBİLİTE RAPORU", 14, 52);
      
      doc.setFont("Roboto", "normal");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`${mode?.toUpperCase().replace("-", " ")} Yöntemi ile Zemin Güçlendirme`, 14, 58);

      // Info Table (Black Header)
      const today = new Date().toLocaleDateString("tr-TR");
      // Benzersiz, izlenebilir, sıralanabilir rapor no (YER6-YYYYMMDD-HHMM-XXXX)
      const reportNo = generateReportNo();

      autoTable(doc, {
        startY: 65,
        head: [["RAPOR NO", "TARİH", "OLUŞTURAN", "MUHATAP"]],
        body: [[reportNo, today, "YER6 Mühendislik Departmanı", "Sayın İlgili"]],
        theme: 'grid',
        styles: { font: "Roboto", cellPadding: 3 },
        headStyles: { fillColor: [20, 20, 20], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8 },
        bodyStyles: { textColor: [40, 40, 40], fontSize: 9, fontStyle: "bold" }
      });

      let finalY = (doc as any).lastAutoTable.finalY || 80;

      // Section 01: PROJE PARAMETRELERI
      doc.setFont("Roboto", "bold");
      doc.setFontSize(11);
      doc.setTextColor(212, 175, 55);
      doc.text("01", 14, finalY + 12);
      doc.setTextColor(20, 20, 20);
      doc.text("PROJE PARAMETRELERİ", 21, finalY + 12);

      const inputData = [
        ["İmalat Yöntemi", mode?.toUpperCase().replace("-", " ") || ""],
        ["Proje Çapı (m)", diameter.toString()],
        ["Uygulama Boyu (m)", depth.toString()],
        ["Toplam Adet", count.toString()]
      ];
      
      if (complexity === "advanced") {
        inputData.push(["Mühendislik Katsayısı", factor.toString()]);
        if (mode === "jet-grout" || mode === "dsm") {
           inputData.push(["Zemin Karakteri", soilType === "soft" ? "Yumuşak (Kil/Silt)" : "Sert (Kum/Çakıl)"]);
        }
      }

      autoTable(doc, {
        startY: finalY + 16,
        body: inputData,
        theme: 'plain',
        styles: { font: "Roboto", cellPadding: 2 },
        bodyStyles: { textColor: [60, 60, 60], fontSize: 9 },
        columnStyles: { 0: { fontStyle: "bold", cellWidth: 60 } }
      });

      finalY = (doc as any).lastAutoTable.finalY || finalY + 35;

      // Section 02: METRAJ VE BUTCE
      doc.setFont("Roboto", "bold");
      doc.setFontSize(11);
      doc.setTextColor(212, 175, 55);
      doc.text("02", 14, finalY + 12);
      doc.setTextColor(20, 20, 20);
      doc.text("METRAJ VE TAHMİNİ BÜTÇE", 21, finalY + 12);

      const resultData = [
        [results?.metric1.label || "", Math.round(results?.metric1.value || 0).toLocaleString("tr-TR"), "-"],
        [results?.metric2.label || "", Math.round(results?.metric2.value || 0).toLocaleString("tr-TR"), "-"],
        [results?.metric3.label || "", Math.round(results?.metric3.value || 0).toLocaleString("tr-TR"), "-"],
        ["Tahmini Karbon Ayak İzi (CO2)", Math.round(results?.metric4.value || 0).toLocaleString("tr-TR") + " Ton", "-"],
      ];

      autoTable(doc, {
        startY: finalY + 16,
        head: [["İMALAT TANIMI", "MİKTAR", "TAHMİNİ BÜTÇE"]],
        body: resultData,
        theme: 'grid',
        styles: { font: "Roboto", cellPadding: 3 },
        headStyles: { fillColor: [20, 20, 20], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8 },
        bodyStyles: { textColor: [40, 40, 40], fontSize: 9 }
      });

      finalY = (doc as any).lastAutoTable.finalY || finalY + 45;

      // Budget Total Row
      autoTable(doc, {
        startY: finalY,
        body: [
          ["SADECE İŞÇİLİK BÜTÇE ARALIĞI", results?.price.laborValue.replace(/₺/g, "TL") || ""],
          ["MALZEMELİ (ANAHTAR TESLİM) BÜTÇE ARALIĞI", results?.price.value.replace(/₺/g, "TL") || ""]
        ],
        theme: 'grid',
        styles: { font: "Roboto", cellPadding: 3 },
        bodyStyles: { fillColor: [245, 235, 200], textColor: [20, 20, 20], fontStyle: "bold", fontSize: 10 },
        columnStyles: { 0: { halign: "right" }, 1: { halign: "right", cellWidth: 70 } }
      });

      finalY = (doc as any).lastAutoTable.finalY || finalY + 15;

      // Section 02b: MALİYET DÖKÜMÜ (şeffaf, kalem kalem, KDV hariç)
      const est = results?.estimate;
      if (est) {
        const fmt = (n: number, d = 0) =>
          n.toLocaleString("tr-TR", { minimumFractionDigits: d, maximumFractionDigits: d });

        doc.setFont("Roboto", "bold");
        doc.setFontSize(11);
        doc.setTextColor(212, 175, 55);
        doc.text("02b", 14, finalY + 12);
        doc.setTextColor(20, 20, 20);
        doc.text("MALİYET DÖKÜMÜ (KDV HARİÇ)", 24, finalY + 12);

        // Canlı kur & katalog şeffaflık satırı
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

        const breakdownRows = est.lineItems.map((li) => [
          li.name,
          `${fmt(li.qty, li.unit === "ton" || li.unit === "m³" ? 1 : 0)} ${li.unit}`,
          fmt(li.unitPrice, 0),
          fmt(li.total, 0),
        ]);

        autoTable(doc, {
          startY: finalY + 24,
          head: [["KALEM", "MİKTAR", "BİRİM FİYAT (₺)", "TUTAR (₺)"]],
          body: breakdownRows,
          theme: "grid",
          styles: { font: "Roboto", cellPadding: 2.5, fontSize: 8 },
          headStyles: { fillColor: [20, 20, 20], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8 },
          bodyStyles: { textColor: [40, 40, 40] },
          columnStyles: {
            1: { halign: "right" },
            2: { halign: "right" },
            3: { halign: "right", fontStyle: "bold" },
          },
        });
        finalY = (doc as any).lastAutoTable.finalY || finalY + 40;

        const kdv = (est.turnkeyPoint) * est.kdvRate;
        autoTable(doc, {
          startY: finalY,
          body: [
            ["Doğrudan maliyet + sarf", fmt(est.directCost, 0) + " ₺"],
            ["Şantiye genel gideri", fmt(est.overhead, 0) + " ₺"],
            ["Firma kârı", fmt(est.profit, 0) + " ₺"],
            ["ARA TOPLAM (KDV hariç)", fmt(est.turnkeyPoint, 0) + " ₺"],
            [`KDV (%${Math.round(est.kdvRate * 100)})`, fmt(kdv, 0) + " ₺"],
            ["GENEL TOPLAM (KDV dahil)", fmt(est.turnkeyPoint + kdv, 0) + " ₺"],
          ],
          theme: "plain",
          styles: { font: "Roboto", cellPadding: 2, fontSize: 8.5 },
          columnStyles: {
            0: { halign: "right", cellWidth: 120, textColor: [80, 80, 80] },
            1: { halign: "right", fontStyle: "bold", textColor: [20, 20, 20] },
          },
        });
        finalY = (doc as any).lastAutoTable.finalY || finalY + 30;
      }

      // Section 03: NOTLAR
      doc.setFont("Roboto", "bold");
      doc.setFontSize(11);
      doc.setTextColor(212, 175, 55);
      doc.text("03", 14, finalY + 12);
      doc.setTextColor(20, 20, 20);
      doc.text("NOTLAR", 21, finalY + 12);

      doc.setFont("Roboto", "normal");
      doc.setFontSize(8);
      doc.setTextColor(80, 80, 80);
      const notes = [
        "• Bu analiz, YER6 Mühendislik Departmanı tarafından sağlanan güncel parametrelere göre otomatik oluşturulmuştur.",
        "• Kesin miktar, metraj ve fiyatlandırma ancak saha etüdü ve mimari projeler incelendikten sonra uzman mühendis kadromuz tarafından sunulacaktır.",
        "• İşbu belge resmi bir fiyat teklifi niteliği taşımaz, ön değerlendirme, fizibilite ve bütçe planlaması için referans amaçlıdır."
      ];
      
      let noteY = finalY + 18;
      notes.forEach(note => {
        const splitNote = doc.splitTextToSize(note, 180);
        doc.text(splitNote, 14, noteY);
        noteY += splitNote.length * 4.5;
      });

      // Footer Check
      if (noteY > pageHeight - 40) {
        doc.addPage();
        noteY = 20;
      }

      // Sign-off
      doc.setFont("Roboto", "normal");
      doc.setFontSize(9);
      doc.setTextColor(40, 40, 40);
      doc.text("Saygılarımızla,", 14, noteY + 10);
      doc.setFont("Roboto", "bold");
      doc.text("YER6 ZEMİN GÜÇLENDİRME JEOTEKNİK MÜHENDİSLİK LTD. ŞTİ.", 14, noteY + 16);

      // Footer
      doc.setDrawColor(200, 200, 200);
      doc.line(14, pageHeight - 16, pageWidth - 14, pageHeight - 16);
      
      doc.setFont("Roboto", "normal");
      doc.setFontSize(7);
      doc.setTextColor(120, 120, 120);
      doc.text("YER6 ZEMİN GÜÇLENDİRME JEOTEKNİK MÜHENDİSLİK LTD. ŞTİ. • Şht. Ali Gaffar Okan Cad. No:42-A Gölbaşı / ANKARA", 14, pageHeight - 11);
      doc.text("T: +90 532 378 06 91   •   info@yer6zemin.com.tr   •   www.yer6zemin.com.tr", 14, pageHeight - 7);

      const safeMode = (mode || "rapor").replace(/[^a-z0-9-]/gi, "-");
      doc.save(`YER6_Fizibilite_Raporu_${safeMode}_${reportNo}.pdf`);
    } catch (error) {
      console.error("PDF olusturulurken hata olustu:", error);
      alert("PDF olusturulurken bir hata olustu. Lutfen tekrar deneyin.");
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="mb-4 w-[380px] sm:w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A0A0A]/85 backdrop-blur-2xl shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-300 text-obsidian shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    <BotMessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">YER6 AI Mühendis</h3>
                    <p className="text-xs text-gold-300">Akıllı Metraj & Bütçe Asistanı</p>
                  </div>
                </div>
                <button onClick={toggleOpen} className="rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-5 max-h-[75vh] overflow-y-auto no-scrollbar pb-8 relative">
                <AnimatePresence mode="wait">
                  {step === "selection" && (
                    <motion.div
                      key="selection"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="grid gap-3"
                    >
                      <p className="text-sm text-white/80 mb-2 font-medium">Merhaba, projeniz için hangi geoteknik imalatı analiz etmek istersiniz?</p>
                      <MethodButton icon={<Zap />} title="Jet Grout" desc="Zemin iyileştirme & sıvılaşma önlemi" onClick={() => handleModeSelect("jet-grout")} />
                      <MethodButton icon={<HardHat />} title="Fore Kazık" desc="Derin temel & ağır yük taşıyıcı" onClick={() => handleModeSelect("fore-kazik")} />
                      <MethodButton icon={<MountainSnow />} title="Deep Soil Mixing (DSM)" desc="Yumuşak killi zemin iyileştirmesi" onClick={() => handleModeSelect("dsm")} />
                      <MethodButton icon={<Hammer />} title="Öngermeli Ankraj" desc="Derin kazı ve iksa sistemleri" onClick={() => handleModeSelect("ankraj")} />
                      <MethodButton icon={<Activity />} title="Mini Kazık" desc="Dar alan ve temel altı güçlendirme" onClick={() => handleModeSelect("mini-kazik")} />
                    </motion.div>
                  )}

                  {step === "input" && mode && (
                    <motion.div
                      key="input"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="flex flex-col gap-6"
                    >
                      <div className="flex items-center gap-2">
                        <button onClick={() => setStep("selection")} className="text-xs text-white/50 hover:text-gold-300 flex items-center gap-1">
                          <ArrowLeft className="h-3 w-3" /> Geri
                        </button>
                        <span className="text-white/30 text-xs">|</span>
                        <span className="text-xs font-semibold text-gold-300 uppercase tracking-wider">{mode.replace("-", " ")}</span>
                      </div>

                      <div className="flex rounded-full bg-white/5 p-1 border border-white/10">
                        <button onClick={() => setComplexity("quick")} className={`flex-1 rounded-full py-1.5 text-xs font-medium transition-colors ${complexity === "quick" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/80"}`}>⚡ Hızlı Metraj</button>
                        <button onClick={() => setComplexity("advanced")} className={`flex-1 rounded-full py-1.5 text-xs font-medium transition-colors ${complexity === "advanced" ? "bg-white/10 text-white" : "text-white/40 hover:text-white/80"}`}>📐 İleri Mühendislik</button>
                      </div>

                      <div className="grid gap-5">
                        <RangeInput label={mode === "ankraj" ? "Delik Çapı (m)" : "Çap (m)"} value={diameter} min={0.1} max={1.5} step={0.05} onChange={setDiameter} />
                        <RangeInput label={mode === "ankraj" ? "Kök Boyu (m)" : "Derinlik/Boy (m)"} value={depth} min={5} max={60} step={1} onChange={setDepth} />
                        <RangeInput label="Adet (Kuyu/Kolon)" value={count} min={10} max={2000} step={10} onChange={setCount} />
                        
                        {complexity === "advanced" && (
                          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="grid gap-5 border-t border-white/10 pt-5">
                             <div className="flex flex-col gap-2">
                              <span className="text-xs font-medium text-white/70">Zemin Sınıfı</span>
                              <div className="flex gap-2">
                                <button onClick={() => setSoilType("soft")} className={`flex-1 rounded-lg py-2.5 text-xs border transition-colors ${soilType === "soft" ? "border-gold-300 bg-gold-300/10 text-gold-300 shadow-[0_0_10px_rgba(212,175,55,0.2)]" : "border-white/10 bg-white/5 text-white/50 hover:bg-white/10"}`}>Yumuşak (Kil/Silt)</button>
                                <button onClick={() => setSoilType("hard")} className={`flex-1 rounded-lg py-2.5 text-xs border transition-colors ${soilType === "hard" ? "border-gold-300 bg-gold-300/10 text-gold-300 shadow-[0_0_10px_rgba(212,175,55,0.2)]" : "border-white/10 bg-white/5 text-white/50 hover:bg-white/10"}`}>Sert (Kum/Çakıl)</button>
                              </div>
                             </div>
                             <RangeInput label="Güvenlik/Fire Katsayısı" value={factor} min={1.0} max={1.5} step={0.05} onChange={setFactor} />
                          </motion.div>
                        )}
                      </div>

                      <button
                        onClick={startChatAnalysis}
                        className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gold-300 py-4 text-sm font-bold text-obsidian shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02] active:scale-95"
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Loader2 className="h-4 w-4 animate-spin hidden group-active:block" />
                        <span className="group-active:hidden">Analizi Başlat</span>
                      </button>
                    </motion.div>
                  )}

                  {step === "chat" && (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col gap-4 relative"
                    >
                      <div className="flex items-center justify-between">
                        <button onClick={() => setStep("input")} className="text-xs text-white/50 hover:text-gold-300 flex items-center gap-1">
                          <ArrowLeft className="h-3 w-3" /> Parametreleri Değiştir
                        </button>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-300 text-obsidian shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                            <BotMessageSquare className="h-5 w-5" />
                          </div>
                        </div>
                        <div className="flex-1 rounded-2xl rounded-tl-none bg-[#111] border border-white/10 p-5 shadow-inner">
                          <div className="text-sm leading-relaxed text-white/90 whitespace-pre-line font-light">
                            {/* Simple Markdown-like bold parser for **text** */}
                            {typedText.split("**").map((text, i) => i % 2 !== 0 ? <strong key={i} className="text-gold-300 font-semibold">{text}</strong> : text)}
                            {isTyping && <span className="inline-block w-2 h-4 ml-1 bg-gold-300 animate-pulse" />}
                          </div>
                        </div>
                      </div>

                      {/* Canlı danışman soru-cevap balonları */}
                      {chatMessages.map((m, i) => (
                        <div key={i} className={`flex gap-4 ${m.role === "user" ? "justify-end" : ""}`}>
                          {m.role === "assistant" && (
                            <div className="flex-shrink-0">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-300 text-obsidian shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                                <BotMessageSquare className="h-5 w-5" />
                              </div>
                            </div>
                          )}
                          <div
                            className={
                              m.role === "user"
                                ? "max-w-[80%] rounded-2xl rounded-tr-none bg-gold-300/15 border border-gold-300/25 p-3 text-sm text-white/90"
                                : "flex-1 rounded-2xl rounded-tl-none bg-[#111] border border-white/10 p-4 text-sm leading-relaxed text-white/90 whitespace-pre-line font-light shadow-inner"
                            }
                          >
                            {m.role === "assistant"
                              ? m.content
                                ? m.content.split("**").map((t, j) => (j % 2 !== 0 ? <strong key={j} className="text-gold-300 font-semibold">{t}</strong> : t))
                                : chatLoading && i === chatMessages.length - 1
                                  ? <span className="inline-flex items-center gap-1 text-white/50"><Loader2 className="h-3.5 w-3.5 animate-spin" /> Danışman yazıyor…</span>
                                  : null
                              : m.content}
                          </div>
                        </div>
                      ))}

                      <AnimatePresence>
                        {!isTyping && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="mt-2 flex flex-col gap-3"
                          >
                            {/* Canlı danışmana soru sor */}
                            <div className="flex items-end gap-2">
                              <textarea
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    sendChat();
                                  }
                                }}
                                rows={1}
                                placeholder="YER6 danışmanına sorun (ör. bu yöntem zeminime uygun mu?)"
                                className="flex-1 resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-gold-300/50 focus:outline-none"
                              />
                              <button
                                onClick={sendChat}
                                disabled={chatLoading || !chatInput.trim()}
                                aria-label="Gönder"
                                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gold-300 text-obsidian transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
                              >
                                {chatLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                              </button>
                            </div>

                            <button
                              onClick={generatePDF}
                              className="group relative flex items-center gap-2 self-end rounded-xl bg-gold-300/10 border border-gold-300/30 px-4 py-2.5 text-xs font-semibold text-gold-300 hover:bg-gold-300 hover:text-obsidian transition-all shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                            >
                              <Download className="h-4 w-4 group-hover:scale-110 transition-transform" />
                              PDF Raporu İndir
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleOpen}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gold-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-transform hover:scale-110 active:scale-95"
        >
          <div className="absolute inset-0 rounded-full bg-gold-300 opacity-20 group-hover:animate-ping" />
          {isOpen ? <X className="h-6 w-6 text-obsidian relative z-10" /> : <Calculator className="h-6 w-6 text-obsidian relative z-10" />}
        </button>
      </div>
    </>
  );
}

function MethodButton({ icon, title, desc, onClick }: { icon: React.ReactNode; title: string; desc: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4 text-left transition-all hover:border-gold-300/50 hover:bg-white/10"
    >
      <div className="flex items-center gap-4">
        <div className="text-white/50 group-hover:text-gold-300 transition-colors">
          {icon}
        </div>
        <div>
          <h4 className="font-semibold text-white group-hover:text-gold-300 transition-colors">{title}</h4>
          <p className="text-xs text-white/50 mt-0.5">{desc}</p>
        </div>
      </div>
      <ChevronRight className="h-4 w-4 text-white/20 group-hover:text-gold-300 transition-colors" />
    </button>
  );
}

function RangeInput({ label, value, min, max, step, onChange }: { label: string; value: number; min: number; max: number; step: number; onChange: (v: number) => void }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-white/70">{label}</span>
        <span className="text-xs font-bold text-gold-300 tabular-nums">{value.toLocaleString("tr-TR")}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-gold-300" />
    </div>
  );
}
