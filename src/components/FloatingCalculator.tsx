"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, X, ChevronRight, Download, Activity, Zap, HardHat, Hammer, MountainSnow, BotMessageSquare, Sparkles, ArrowLeft } from "lucide-react";

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

    switch (mode) {
      case "fore-kazik":
      case "mini-kazik":
        return {
          metric1: { label: "Toplam Beton (m³)", value: totalVolume },
          metric2: { label: "Demir (Ton)", value: (totalVolume * 120) / 1000 },
          metric3: { label: "Şantiye (Gün)", value: rigDays },
          metric4: { label: "CO2 İzi (Ton)", value: totalCO2 },
        };
      case "jet-grout":
      case "dsm":
        const dosage = complexity === "advanced" && soilType === "soft" ? 450 : 350;
        return {
          metric1: { label: "Çimento (Ton)", value: (totalLength * dosage) / 1000 },
          metric2: { label: "Delgi (m)", value: totalLength },
          metric3: { label: "Şantiye (Gün)", value: rigDays },
          metric4: { label: "CO2 İzi (Ton)", value: totalCO2 },
        };
      case "ankraj":
        return {
          metric1: { label: "Halat (m)", value: totalLength * 4 },
          metric2: { label: "Delgi (m)", value: totalLength },
          metric3: { label: "Şantiye (Gün)", value: rigDays },
          metric4: { label: "Enjeksiyon (m³)", value: totalLength * 0.05 },
        };
      default:
        return null;
    }
  };

  const results = calculateResults();

  const getFullAiMessage = () => {
    if (!mode || !results) return "";
    
    let text = `Merhaba, projenizi inceledim. YER6 Geoteknik Mühendislik standartlarına göre yaptığım ön analizin sonuçları aşağıdadır:\n\n`;
    
    if (mode === "fore-kazik" || mode === "mini-kazik") {
      text += `Seçmiş olduğunuz ${depth} metre derinliğinde, ${diameter}m çapındaki toplam ${count} adet ${mode.replace("-", " ")} imalatı için tahmini olarak ${Math.round(results.metric1.value).toLocaleString("tr-TR")} m³ beton ve ${Math.round(results.metric2.value).toLocaleString("tr-TR")} Ton çelik donatı kullanılacaktır. `;
    } else if (mode === "jet-grout" || mode === "dsm") {
      text += `Tasarlanan ${depth} metre etkin boylu, ${diameter}m çapındaki ${count} kolonluk ${mode.replace("-", " ")} zemin iyileştirme projesi için yaklaşık ${Math.round(results.metric1.value).toLocaleString("tr-TR")} Ton çimento sarfiyatı hesaplanmıştır. Toplam ${Math.round(results.metric2.value).toLocaleString("tr-TR")} metre delgi işlemi gerçekleştirilecektir. `;
    } else if (mode === "ankraj") {
      text += `Planlanan ${depth} metre boyundaki ${count} adet ankraj imalatında tahmini ${Math.round(results.metric1.value).toLocaleString("tr-TR")} metre halat donatısı ve ${Math.round(results.metric4.value).toLocaleString("tr-TR")} m³ basınçlı enjeksiyon kullanılacaktır. `;
    }
    
    text += `Şantiyedeki makine kapasitesi göz önüne alındığında, operasyonun tahmini olarak ${results.metric3.value} gün sürmesi planlanmaktadır. Ayrıca bu imalatın çevreye olası Karbon (CO2) ayak izi etkisi ${results.metric4.value} Ton olarak öngörülmüştür.\n\n`;
    text += `Daha detaylı ve bağlayıcı bir mühendislik/fiyat teklifi için, raporunuzu indirip uzman ekibimizle iletişime geçebilirsiniz.`;
    
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
    }, 20); // Typewriter speed
  };

  const generatePDF = async () => {
    try {
      // Dinamik import: Tarayıcı uyumsuzluklarını ve SSR hatalarını çözer.
      const { jsPDF } = await import("jspdf");
      const autoTable = (await import("jspdf-autotable")).default;

      const doc = new jsPDF();
      
      // Add YER6 Header
      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.setTextColor(212, 175, 55); // Gold color
      doc.text("YER6 ZEMIN GUCLENDIRME", 14, 20);
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text("Geoteknik Muhendislik & Saha Uygulamalari", 14, 28);
      doc.text("Web: www.yer6zemin.com.tr", 14, 34);
      doc.text("Email: info@yer6zemin.com.tr", 14, 40);
      
      // Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.setTextColor(20, 20, 20);
      doc.text(`Yapay Zeka On Metraj Raporu: ${mode?.toUpperCase()}`, 14, 55);
      
      // Input Data
      const inputData = [
        ["Cap (m)", diameter.toString()],
        ["Boy/Derinlik (m)", depth.toString()],
        ["Adet (Kuyu/Kolon)", count.toString()]
      ];
      
      if (complexity === "advanced") {
        inputData.push(["Guvenlik/Fire Katsayisi", factor.toString()]);
        if (mode === "jet-grout" || mode === "dsm") {
           inputData.push(["Zemin Sinifi", soilType === "soft" ? "Yumusak" : "Sert"]);
        }
      }

      autoTable(doc, {
        startY: 62,
        head: [["Parametre", "Kullanici Girdisi"]],
        body: inputData,
        theme: 'grid',
        headStyles: { fillColor: [212, 175, 55] }
      });
      
      // Results
      const finalY = (doc as any).lastAutoTable.finalY || 62;
      
      const resultData = [
        [results?.metric1.label || "", Math.round(results?.metric1.value || 0).toLocaleString("tr-TR")],
        [results?.metric2.label || "", Math.round(results?.metric2.value || 0).toLocaleString("tr-TR")],
        [results?.metric3.label || "", Math.round(results?.metric3.value || 0).toLocaleString("tr-TR")],
        [results?.metric4.label || "", Math.round(results?.metric4.value || 0).toLocaleString("tr-TR")]
      ];

      doc.setFontSize(14);
      doc.setTextColor(20, 20, 20);
      doc.text("Hesaplanan Sonuclar", 14, finalY + 15);

      autoTable(doc, {
        startY: finalY + 20,
        head: [["Metrik", "Miktar"]],
        body: resultData,
        theme: 'grid',
        headStyles: { fillColor: [40, 40, 40] }
      });
      
      const finalY2 = (doc as any).lastAutoTable.finalY || finalY + 20;
      doc.setFontSize(9);
      doc.setTextColor(150, 150, 150);
      doc.text("Not: Bu belge YER6 Zemin Guclendirme yapay zeka asistanı tarafindan", 14, finalY2 + 20);
      doc.text("on bilgi amaciyla uretilmistir. Kesin ve baglayici mühendislik hesabi degildir.", 14, finalY2 + 25);

      doc.save(`YER6_Yapay_Zeka_Raporu_${mode}.pdf`);
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
                    <h3 className="font-semibold text-white">YER6 Asistan</h3>
                    <p className="text-xs text-gold-300">Yapay Zeka Destekli Mühendislik</p>
                  </div>
                </div>
                <button onClick={toggleOpen} className="rounded-full p-2 text-white/50 hover:bg-white/10 hover:text-white transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-5 max-h-[75vh] overflow-y-auto no-scrollbar pb-8">
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
                        <Sparkles className="h-4 w-4" />
                        Yapay Zekaya Analiz Ettir
                      </button>
                    </motion.div>
                  )}

                  {step === "chat" && (
                    <motion.div
                      key="chat"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col gap-5"
                    >
                      <div className="flex items-center gap-2">
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
                        <div className="flex-1 rounded-2xl rounded-tl-none bg-white/5 border border-white/10 p-5 shadow-inner">
                          <p className="text-sm leading-relaxed text-white/90 whitespace-pre-line">
                            {typedText}
                            {isTyping && <span className="inline-block w-2 h-4 ml-1 bg-gold-300 animate-pulse" />}
                          </p>
                        </div>
                      </div>

                      <AnimatePresence>
                        {!isTyping && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="pl-14 pt-2 flex justify-end"
                          >
                            <button
                              onClick={generatePDF}
                              className="group flex items-center gap-2 rounded-xl border border-gold-300/30 bg-gold-300/10 px-5 py-3 text-sm font-semibold text-gold-300 hover:bg-gold-300 hover:text-obsidian transition-colors"
                            >
                              <Download className="h-4 w-4" />
                              Raporu PDF İndir
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
