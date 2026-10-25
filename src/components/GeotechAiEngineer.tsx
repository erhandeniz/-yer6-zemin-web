"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, Sparkles, User, ArrowRight, Phone, MessageSquare, ShieldCheck, RefreshCw } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  recommendation?: {
    method: string;
    diameterCm: number;
    depthM: number;
    countEst: number;
    reason: string;
    calcUrl: string;
  };
}

const QUICK_PROMPTS = [
  "Sıvılaşma riski (SPT N < 10) için hangi yöntem?",
  "Mevcut bina altında temel güçlendirme nasıl yapılır?",
  "Jet Grout mu yoksa DSM mi daha ekonomik?",
  "TBDY 2018 ZE zemin sınıfında zorunlu yöntemler neler?",
  "2026 Jet Grout ve Fore Kazık metre maliyetleri ne kadar?"
];

function getTimeString(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export function GeotechAiEngineer() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-1",
      sender: "bot",
      text: "Merhaba! Ben YER6 Geoteknik Yapay Zekâ Baş Mühendisiyim. Sahadaki zemin etüdü verilerinizi (SPT darbe sayısı, zemin sınıfı, yeraltı suyu derinliği veya bina yükü) yazın; projeniz için teknik ve maliyet açısından en doğru zemin iyileştirme yöntemini anında analiz edeyim.",
      timestamp: getTimeString()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: getTimeString()
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = generateGeotechResponse(query);
      setMessages((prev) => [...prev, response]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <section className="mb-12 rounded-[2rem] border border-gold-300/40 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-5 shadow-2xl backdrop-blur-md sm:p-8">
      {/* Üst Bilgi Başlığı */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3.5">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-gold-300/50 bg-gold-400/10 text-gold-200 shadow-[0_0_15px_rgba(226,181,76,0.2)]">
            <Bot className="h-6 w-6" />
            <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white sm:text-xl">YER6 AI Geoteknik Mühendisi</h2>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                Canlı Danışman
              </span>
            </div>
            <p className="text-xs text-white/60">
              TBDY 2018, TS EN 12716 ve Eurocode 7 standartlarıyla sahanıza özel yöntem seçimi ve metraj analizi.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phone.href}
            className="hidden items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/80 transition hover:border-gold-300/40 hover:text-gold-200 sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-gold-200" />
            Baş Mühendisi Ara
          </a>
          <a
            href="https://ai.yer6zemin.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-gold-300/50 bg-gold-300/15 px-3.5 py-1.5 text-xs font-semibold text-gold-200 shadow-[0_0_12px_rgba(226,181,76,0.2)] transition hover:bg-gold-300/25"
          >
            <Sparkles className="h-3.5 w-3.5" />
            YER6 AI Portal →
          </a>
        </div>
      </div>

      {/* Hızlı Soru Hapları */}
      <div className="mt-4 flex flex-wrap items-center gap-2 pb-2">
        <span className="text-[11px] font-medium text-white/40">Hızlı Sorular:</span>
        {QUICK_PROMPTS.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(prompt)}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/75 transition hover:border-gold-300/40 hover:bg-gold-300/10 hover:text-gold-100"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Mesaj Akışı Kutusu */}
      <div className="mt-3 max-h-[380px] min-h-[220px] space-y-4 overflow-y-auto rounded-2xl border border-white/10 bg-black/40 p-4 sm:p-5">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border ${
                msg.sender === "user"
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-gold-300/50 bg-gold-400/15 text-gold-200"
              }`}
            >
              {msg.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
            </div>

            <div
              className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed sm:text-sm ${
                msg.sender === "user"
                  ? "bg-gold-400/20 text-white border border-gold-300/30"
                  : "bg-white/[0.05] text-white/90 border border-white/10"
              }`}
            >
              <div className="whitespace-pre-line leading-6">{msg.text}</div>

              {/* Mühendislik Ön Metraj Tavsiyesi Varsa */}
              {msg.recommendation && (
                <div className="mt-4 rounded-xl border border-gold-300/30 bg-gold-300/[0.08] p-3 text-xs text-white">
                  <div className="flex items-center gap-1.5 font-semibold text-gold-200">
                    <ShieldCheck className="h-4 w-4" />
                    Saha İmalat ve Ön Metraj Önerisi
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-white/80 sm:grid-cols-4">
                    <div className="rounded-lg bg-black/30 p-2">
                      <span className="block text-[10px] text-white/50">Önerilen Yöntem</span>
                      <strong className="text-white">{msg.recommendation.method}</strong>
                    </div>
                    <div className="rounded-lg bg-black/30 p-2">
                      <span className="block text-[10px] text-white/50">Kolon Çapı</span>
                      <strong className="text-white">{msg.recommendation.diameterCm} cm</strong>
                    </div>
                    <div className="rounded-lg bg-black/30 p-2">
                      <span className="block text-[10px] text-white/50">İyileştirme Boyu</span>
                      <strong className="text-white">{msg.recommendation.depthM} m</strong>
                    </div>
                    <div className="rounded-lg bg-black/30 p-2">
                      <span className="block text-[10px] text-white/50">Tahmini Adet</span>
                      <strong className="text-white">{msg.recommendation.countEst} adet</strong>
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] text-white/70">{msg.recommendation.reason}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Link
                      href={msg.recommendation.calcUrl}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-gold-300/40 bg-gold-300/20 px-3 py-1.5 text-xs font-semibold text-gold-200 hover:bg-gold-300/30"
                    >
                      Bu Parametrelerle Hesaplayıcıyı Aç →
                    </Link>
                  </div>
                </div>
              )}

              <span className="mt-1 block text-right text-[10px] text-white/30">{msg.timestamp}</span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-gold-300/50 bg-gold-400/15 text-gold-200">
              <Bot className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-1.5 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-xs text-white/60">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-300" style={{ animationDelay: "0ms" }} />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-300" style={{ animationDelay: "150ms" }} />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gold-300" style={{ animationDelay: "300ms" }} />
              <span className="ml-2 font-mono text-[11px]">Geoteknik standartlar taranıyor...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Mesaj Giriş Alanı */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="mt-3 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Örn: 'Arsamda SPT N: 7 çıktı, yeraltı suyu 2.5m, sıvılaşma riski var, ne yapmalıyım?'"
          className="flex-1 rounded-xl border border-white/15 bg-white/[0.05] px-4 py-3 text-xs text-white placeholder-white/40 outline-none transition focus:border-gold-300 focus:bg-white/[0.08] sm:text-sm"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="flex h-11 items-center justify-center gap-2 rounded-xl border border-gold-300/40 bg-gold-300/20 px-5 text-xs font-semibold text-gold-200 transition hover:bg-gold-300/30 disabled:opacity-40 sm:text-sm"
        >
          <Send className="h-4 w-4" />
          <span className="hidden sm:inline">Sor</span>
        </button>
      </form>
    </section>
  );
}

/**
 * Geoteknik kural motoru — TBDY 2018 ve Eurocode 7 standartlarına göre
 * kullanıcı girdilerini anında analiz ederek teknik tavsiye üretir.
 */
function generateGeotechResponse(query: string): ChatMessage {
  const q = query.toLowerCase();

  // 1. Sıvılaşma / SPT Düşük / Kum
  if (q.includes("sıvılaşma") || q.includes("sivilasma") || q.includes("spt") || q.includes("kum")) {
    return {
      id: `bot-${Date.now()}`,
      sender: "bot",
      text: `Analiz Sonucu (TBDY 2018 Bölüm 16):\n\nSPT N < 15 ve yeraltı suyunun yüzeye yakın olduğu kumlu-siltli zeminlerde deprem anında sıvılaşma riski kaçınılmazdır. Bu profilde en etkin 2 çözüm:\n1. Jet Grouting (TS EN 12716): Yüksek basınçla (350–450 bar) zeminde zemin-çimento kolonları oluşturarak hem sıvılaşmayı önler hem taşıma gücünü 3–5 katına çıkarır.\n2. Taş Kolon (Vibro-Replacement): Drenaj sağlayarak aşırı boşluk suyu basıncını sönümler.\n\nSahanız için ön parametre önerisi oluşturuldu:`,
      timestamp: getTimeString(),
      recommendation: {
        method: "Jet Grout (JG-1/JG-2)",
        diameterCm: 80,
        depthM: 12,
        countEst: 160,
        reason: "Sıvılaşma zonunun altına (sağlam tabakaya) en az 1.5 - 2 metre soketlenerek ızgara geometrisi kurulmalıdır.",
        calcUrl: "/hesaplama/jet-grout-maliyet-hesaplama/?cap=80&boy=12&adet=160"
      }
    };
  }

  // 2. Mevcut Bina Altı / Güçlendirme / Dar Alan
  if (q.includes("bina altı") || q.includes("bina alti") || q.includes("mevcut") || q.includes("dar") || q.includes("bodrum")) {
    return {
      id: `bot-${Date.now()}`,
      sender: "bot",
      text: `Mevcut Yapı Altında Zemin Güçlendirme Analizi:\n\nMevcut binalarda tavan yüksekliği düşük (2.20 - 3.0 m) ve alan dar olduğu için ağır kuleli makineler giremez. YER6 olarak bu sahalarda:\n• Kompakt Mini Jet Grout Delgi Makineleri\n• Dar Alan Mini Kazık (D=25-30 cm)\n• Pakerli Kimyasal/Çimento Enjeksiyonu\n\nuygulamaktayız. Bina taşıyıcı sistemine ve temeline zarar vermeden, titreşimsiz delgiyle oturmalar tamamen durdurulur.`,
      timestamp: getTimeString(),
      recommendation: {
        method: "Kompakt Mini Jet Grout / Mini Kazık",
        diameterCm: 60,
        depthM: 9,
        countEst: 80,
        reason: "Dar alanda hidrolik ünite binanın dışına kurulur, hortumlarla bodrum kata inilerek imalat yapılır.",
        calcUrl: "/hesaplama/jet-grout-maliyet-hesaplama/?cap=60&boy=9&adet=80"
      }
    };
  }

  // 3. Jet Grout mu DSM mi?
  if (q.includes("dsm") || q.includes("deep soil mixing") || (q.includes("jet") && q.includes("fark"))) {
    return {
      id: `bot-${Date.now()}`,
      sender: "bot",
      text: `Jet Grout vs. DSM (Derin Zemin Karıştırma) Karşılaştırması:\n\n• DSM (Deep Soil Mixing): Büyük hacimli yumuşak kil veya siltli zeminlerde en ekonomik çözümdür. Çimento pasa kaybı neredeyse sıfırdır (yerinde mekanik karıştırma). Metreküp maliyeti Jet Grout'tan %25-%35 daha düşüktür.\n• Jet Grout: Sert katmanları delip derinlere inebilen, çakıllı ve değişken zeminlerde yüksek kinetik enerjiyle çalışan sistemdir. Daha yüksek mukavemet (UCS > 5-10 MPa) sağlar.\n\nHangi yöntem? Zemin çakıllıysa veya dar alansa Jet Grout; geniş arazide yumuşak kil ise DSM tercih edilir.`,
      timestamp: getTimeString(),
      recommendation: {
        method: "DSM (Derin Karıştırma)",
        diameterCm: 80,
        depthM: 14,
        countEst: 200,
        reason: "Büyük ölçekli sanayi tesislerinde ve yumuşak killerde DSM ile metraj maliyeti optimize edilir.",
        calcUrl: "/hesaplama/dsm-maliyet-hesaplama/?cap=80&boy=14&adet=200"
      }
    };
  }

  // 4. ZE Zemin / Zemin Sınıfları (TBDY 2018)
  if (q.includes("ze") || q.includes("zf") || q.includes("zemin sınıfı") || q.includes("yönetmelik")) {
    return {
      id: `bot-${Date.now()}`,
      sender: "bot",
      text: `TBDY 2018 Zemin Sınıfları Değerlendirmesi:\n\n• ZE Zemin: Üst 10 metresinde kayma dalgası hızı Vs < 180 m/s olan yumuşak kil veya gevşek kum tabakalarıdır. Bu zeminlerde temel tasarımı öncesi zemin iyileştirme veya kazıklı derin temel yapılması yönetmelik gereği ZORUNLUDUR.\n• ZF Zemin: Sıvılaşabilir zeminler, turbalar ve fay zonlarıdır. Sahaya özel dinamik analiz (zemin büyütmesi hesabı) yapılması şarttır.\n\nYER6 saha tecrübesiyle ZE ve ZF sınıflarında Plaxis 2D/3D FEM analizleri hazırlayarak belediye ve yapı denetim onay süreçlerini eksiksiz yürütür.`,
      timestamp: getTimeString()
    };
  }

  // 5. Fiyat / Maliyet
  if (q.includes("fiyat") || q.includes("maliyet") || q.includes("kaç para") || q.includes("metre fiyatı")) {
    return {
      id: `bot-${Date.now()}`,
      sender: "bot",
      text: `2026 Zemin İyileştirme Birim Maliyet Göstergeleri:\n\n• Jet Grout (D=60-80cm): ~2.600 TL – 3.800 TL / metre (Çimento tüketimi ve delgi sertliğine bağlı)\n• Fore Kazık (D=65-100cm): ~2.200 TL – 4.200 TL / metre (Demir donatı ve beton dahil)\n• DSM (Deep Soil Mixing): ~2.100 TL – 3.100 TL / m³\n• Mini Kazık (D=25-30cm): ~900 TL – 1.600 TL / metre\n\nNet keşif özeti için sayfamızdaki hesaplama aracına arsanızın çap ve boy değerlerini girerek anlık bütçe bandını görebilirsiniz.`,
      timestamp: getTimeString(),
      recommendation: {
        method: "Ön Maliyet Hesaplama Aracı",
        diameterCm: 80,
        depthM: 12,
        countEst: 100,
        reason: "Canlı çimento, mazot ve makine amortismanı dahil 2026 piyasa fiyat analizi.",
        calcUrl: "/hesaplama/jet-grout-maliyet-hesaplama/?cap=80&boy=12&adet=100"
      }
    };
  }

  // Genel Cevap (Fallback)
  return {
    id: `bot-${Date.now()}`,
    sender: "bot",
    text: `Sorunuz geoteknik parametreler çerçevesinde incelendi:\n\nProjenizdeki yapı kat adedi, kolon yükleri ve zemin sondaj logları (özellikle SPT-N darbe sayıları ve yeraltı su tablası derinliği), yöntemin belirlenmesinde birincil etkendir.\n\nSahanızın zemin etüt raporu elinizdeyse, doğrudan YER6 Geoteknik mühendislik ekibimizle paylaşarak ücretsiz keşif ve ön fizibilite raporu alabilirsiniz. İsterseniz aşağıdaki hızlı butonlardan zemin profilinize uygun hesaplamayı hemen başlatabilirsiniz.`,
    timestamp: getTimeString(),
    recommendation: {
      method: "Jet Grout / DSM / Kazık Entegrasyonu",
      diameterCm: 80,
      depthM: 12,
      countEst: 120,
      reason: "Zemin profilinize en uygun yöntem optimizasyonu için hesaplayıcıyı çalıştırın.",
      calcUrl: "/hesaplama/jet-grout-maliyet-hesaplama/?cap=80&boy=12&adet=120"
    }
  };
}
