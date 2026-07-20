"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, X, ChevronRight, Download, Activity, Zap, HardHat, Hammer, MountainSnow, BotMessageSquare, ArrowLeft, Loader2 } from "lucide-react";

type CalcMode = "jet-grout" | "fore-kazik" | "dsm" | "ankraj" | "mini-kazik" | null;
type Complexity = "quick" | "advanced";
type Step = "selection" | "input" | "chat";

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

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStep("selection");
      setMode(null);
      setTypedText("");
    }
  };

  const handleModeSelect = (selectedMode: CalcMode) => {
    setMode(selectedMode);
    setStep("input");
  };

  const calculateResults = () => {
    if (!mode) return null;
    
    // Shared variables
    const r = diameter / 2;
    const singleVolume = Math.PI * r * r * depth;
    const totalVolume = singleVolume * count * (complexity === "advanced" ? factor : 1.1);
    const totalLength = depth * count;
    
    // Rig days (Assuming average daily meterage)
    const dailyMeters = mode === "jet-grout" ? 300 : mode === "dsm" ? 400 : mode === "ankraj" ? 150 : 80;
    const rigDays = Math.ceil(totalLength / dailyMeters);
    
    // CO2 (Rough estimate kg CO2 per unit)
    const co2PerUnit = mode === "jet-grout" ? 250 : mode === "fore-kazik" ? 350 : 150; 
    const totalCO2 = Math.round((totalVolume * co2PerUnit) / 1000); // Tons of CO2

    // Estimated Pricing Logic (TL per meter)
    let unitPrice = 1000; 
    if (mode === "fore-kazik") unitPrice = 3500;
    if (mode === "jet-grout") unitPrice = 1200;
    if (mode === "dsm") unitPrice = 1500;
    if (mode === "ankraj") unitPrice = 1800;
    if (mode === "mini-kazik") unitPrice = 2000;

    const baseCost = totalLength * unitPrice * (complexity === "advanced" ? factor : 1.1);
    
    // Malzemeli + Iscilik (Turnkey)
    const minCost = Math.round(baseCost * 0.9);
    const maxCost = Math.round(baseCost * 1.2);
    
    // Sadece Iscilik (~35% of total for geotech)
    const minLaborCost = Math.round(minCost * 0.35);
    const maxLaborCost = Math.round(maxCost * 0.35);

    const formatPrice = (val: number) => {
      if (val >= 1000000) return (val / 1000000).toFixed(2) + " Milyon ₺";
      return Math.round(val).toLocaleString("tr-TR") + " ₺";
    };

    const priceText = `${formatPrice(minCost)} - ${formatPrice(maxCost)}`;
    const laborPriceText = `${formatPrice(minLaborCost)} - ${formatPrice(maxLaborCost)}`;

    switch (mode) {
      case "fore-kazik":
      case "mini-kazik":
        return {
          metric1: { label: "Toplam Beton (m³)", value: totalVolume },
          metric2: { label: "Demir (Ton)", value: (totalVolume * 120) / 1000 },
          metric3: { label: "Şantiye (Gün)", value: rigDays },
          metric4: { label: "CO2 İzi (Ton)", value: totalCO2 },
          price: { label: "Tahmini Bütçe (TL)", value: priceText, laborValue: laborPriceText }
        };
      case "jet-grout":
      case "dsm":
        const dosage = complexity === "advanced" && soilType === "soft" ? 450 : 350;
        return {
          metric1: { label: "Çimento (Ton)", value: (totalLength * dosage) / 1000 },
          metric2: { label: "Delgi (m)", value: totalLength },
          metric3: { label: "Şantiye (Gün)", value: rigDays },
          metric4: { label: "CO2 İzi (Ton)", value: totalCO2 },
          price: { label: "Tahmini Bütçe (TL)", value: priceText, laborValue: laborPriceText }
        };
      case "ankraj":
        return {
          metric1: { label: "Halat (m)", value: totalLength * 4 },
          metric2: { label: "Delgi (m)", value: totalLength },
          metric3: { label: "Şantiye (Gün)", value: rigDays },
          metric4: { label: "Enjeksiyon (m³)", value: totalLength * 0.05 },
          price: { label: "Tahmini Bütçe (TL)", value: priceText, laborValue: laborPriceText }
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
    text += `\n💰 Türkiye'deki güncel müteahhitlik verileri baz alındığında tahmini bütçe aralıkları şu şekildedir:`;
    text += `\n- **Sadece İşçilik (Makine & Ekipman):** ${results.price.laborValue}`;
    text += `\n- **Malzemeli + İşçilik (Anahtar Teslim):** ${results.price.value}`;
    
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

  const generatePDF = async () => {
    try {
      const { jsPDF } = await import("jspdf");
      const autoTable = (await import("jspdf-autotable")).default;

      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.width;
      
      // Top accent bar (Gold)
      doc.setFillColor(212, 175, 55);
      doc.rect(0, 0, pageWidth, 4, "F");

      // HEADER
      // Left side
      doc.setFont("helvetica", "bold");
      doc.setFontSize(28);
      doc.setTextColor(30, 30, 30);
      doc.text("YER6", 14, 20);
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.setTextColor(212, 175, 55); // Gold
      doc.text("ZEMIN GUCLENDIRME . JEOTEKNIK MUHENDISLIK", 14, 26);
      
      // Right side
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(30, 30, 30);
      doc.text("GROUND INTELLIGENCE", pageWidth - 14, 16, { align: "right" });
      
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text("Jet Grout . Fore Kazik . Zemin Guclendirme . Jeoteknik Tasarim", pageWidth - 14, 21, { align: "right" });
      doc.text("www.yer6zemin.com.tr", pageWidth - 14, 26, { align: "right" });

      // Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.setTextColor(20, 20, 20);
      doc.text("YAPAY ZEKA ON METRAJ ANALIZI", 14, 45);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`${mode?.toUpperCase().replace("-", " ")} Yontemi ile Zemin Guclendirme`, 14, 52);

      // Info Table (Black Header)
      const today = new Date().toLocaleDateString("tr-TR");
      const reportNo = `Y6-AI-${Math.floor(Math.random() * 10000)}`;

      autoTable(doc, {
        startY: 60,
        head: [["RAPOR NO", "TARIH", "OLUSTURAN", "MUHATAP"]],
        body: [[reportNo, today, "YER6 AI Muhendis", "Sayin Ilgili"]],
        theme: 'grid',
        headStyles: { fillColor: [20, 20, 20], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 9 },
        bodyStyles: { textColor: [40, 40, 40], fontSize: 10, fontStyle: "bold" },
        styles: { cellPadding: 4 }
      });

      let finalY = (doc as any).lastAutoTable.finalY || 80;

      // Section 01: PROJE PARAMETRELERI
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(212, 175, 55);
      doc.text("01", 14, finalY + 15);
      doc.setTextColor(20, 20, 20);
      doc.text("PROJE PARAMETRELERI", 22, finalY + 15);

      const inputData = [
        ["Imalat Yontemi", mode?.toUpperCase().replace("-", " ") || ""],
        ["Proje Capi (m)", diameter.toString()],
        ["Uygulama Boyu (m)", depth.toString()],
        ["Toplam Adet", count.toString()]
      ];
      
      if (complexity === "advanced") {
        inputData.push(["Muhendislik Katsayisi", factor.toString()]);
        if (mode === "jet-grout" || mode === "dsm") {
           inputData.push(["Zemin Karakteri", soilType === "soft" ? "Yumusak (Kil/Silt)" : "Sert (Kum/Cakil)"]);
        }
      }

      autoTable(doc, {
        startY: finalY + 20,
        body: inputData,
        theme: 'plain',
        bodyStyles: { textColor: [60, 60, 60], fontSize: 10 },
        columnStyles: { 0: { fontStyle: "bold", cellWidth: 60 } },
        styles: { cellPadding: 2 }
      });

      finalY = (doc as any).lastAutoTable.finalY || finalY + 40;

      // Section 02: METRAJ VE BUTCE
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(212, 175, 55);
      doc.text("02", 14, finalY + 15);
      doc.setTextColor(20, 20, 20);
      doc.text("METRAJ VE TAHMINI BUTCE", 22, finalY + 15);

      // Clean up text for ASCII compatibility in jsPDF
      const sanitize = (str: string) => str.replace(/İ/g, 'I').replace(/ı/g, 'i').replace(/Ş/g, 'S').replace(/ş/g, 's').replace(/Ğ/g, 'G').replace(/ğ/g, 'g').replace(/Ç/g, 'C').replace(/ç/g, 'c').replace(/Ö/g, 'O').replace(/ö/g, 'o').replace(/Ü/g, 'U').replace(/ü/g, 'u');

      const resultData = [
        [sanitize(results?.metric1.label || ""), Math.round(results?.metric1.value || 0).toLocaleString("tr-TR"), "-"],
        [sanitize(results?.metric2.label || ""), Math.round(results?.metric2.value || 0).toLocaleString("tr-TR"), "-"],
        [sanitize(results?.metric3.label || ""), Math.round(results?.metric3.value || 0).toLocaleString("tr-TR"), "-"],
        ["Tahmini Karbon Ayak Izi (CO2)", Math.round(results?.metric4.value || 0).toLocaleString("tr-TR") + " Ton", "-"],
      ];

      autoTable(doc, {
        startY: finalY + 20,
        head: [["IMALAT TANIMI", "MIKTAR", "TAHMINI BUTCE"]],
        body: resultData,
        theme: 'grid',
        headStyles: { fillColor: [20, 20, 20], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 9 },
        bodyStyles: { textColor: [40, 40, 40], fontSize: 10 },
        styles: { cellPadding: 4 }
      });

      finalY = (doc as any).lastAutoTable.finalY || finalY + 60;

      // Budget Total Row
      autoTable(doc, {
        startY: finalY,
        body: [
          ["SADECE ISCILIK BUTCE ARALIGI", results?.price.laborValue.replace(/₺/g, "TL") || ""],
          ["MALZEMELI (ANAHTAR TESLIM) BUTCE ARALIGI", results?.price.value.replace(/₺/g, "TL") || ""]
        ],
        theme: 'grid',
        bodyStyles: { fillColor: [245, 235, 200], textColor: [20, 20, 20], fontStyle: "bold", fontSize: 11 },
        columnStyles: { 0: { halign: "right" }, 1: { halign: "right", cellWidth: 70 } },
        styles: { cellPadding: 4 }
      });

      finalY = (doc as any).lastAutoTable.finalY || finalY + 15;

      // Section 03: NOTLAR
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.setTextColor(212, 175, 55);
      doc.text("03", 14, finalY + 15);
      doc.setTextColor(20, 20, 20);
      doc.text("NOTLAR", 22, finalY + 15);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      const notes = [
        ". Bu analiz, YER6 Zemin Guclendirme Yapay Zeka Asistani tarafindan girilen parametrelere gore otomatik olusturulmustur.",
        ". Kesin miktar, metraj ve fiyatlandirma ancak saha etudu ve mimari projeler incelendikten sonra uzman muhendis kadromuz tarafindan sunulacaktir.",
        ". Isbu belge resmi bir fiyat teklifi niteligi tasimaz, on fizibilite ve butce planlamasi icin referans amaclidir."
      ];
      
      let noteY = finalY + 25;
      notes.forEach(note => {
        const splitNote = doc.splitTextToSize(note, 180);
        doc.text(splitNote, 14, noteY);
        noteY += splitNote.length * 5;
      });

      // Sign-off
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(40, 40, 40);
      doc.text("Saygilarimizla,", 14, noteY + 10);
      doc.setFont("helvetica", "bold");
      doc.text("YER6 ZEMIN GUCLENDIRME JEOTEKNIK MUHENDISLIK LTD. STI.", 14, noteY + 17);

      // Footer
      const pageHeight = doc.internal.pageSize.height;
      doc.setDrawColor(200, 200, 200);
      doc.line(14, pageHeight - 20, pageWidth - 14, pageHeight - 20);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8);
      doc.setTextColor(120, 120, 120);
      doc.text("YER6 ZEMIN GUCLENDIRME JEOTEKNIK MUHENDISLIK LTD. STI. . Sht. Ali Gaffar Okan Cad. No:42-A Golbasi / ANKARA", 14, pageHeight - 14);
      doc.text("T: +90 532 378 06 91   .   info@yer6zemin.com.tr   .   www.yer6zemin.com.tr", 14, pageHeight - 9);

      doc.save(`YER6_AI_Metraj_${mode}.pdf`);
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

                      <AnimatePresence>
                        {!isTyping && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            className="mt-2 flex justify-end"
                          >
                            <button
                              onClick={generatePDF}
                              className="group relative flex items-center gap-2 rounded-xl bg-gold-300/10 border border-gold-300/30 px-4 py-2.5 text-xs font-semibold text-gold-300 hover:bg-gold-300 hover:text-obsidian transition-all shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]"
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
