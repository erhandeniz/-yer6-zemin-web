"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Hammer, Activity } from "lucide-react";

export function QualityShowcase() {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: "/images/kalite/yeni-2-karot.jpg",
      title: "Merkezden Karot Alımı",
      desc: "İmalatı tamamlanmış zemin kolonlarından karot makineleriyle silindirik numuneler alınır; alınan hat boyunca malzeme homojenliği incelenir ve akredite laboratuvarda UCS tek eksenli basınç dayanımı test edilir."
    },
    {
      src: "/images/kalite/yeni-1-inceleme.jpg",
      title: "PIT (Bütünlük) Testi",
      desc: "İmalatı tamamlanan derin temel elemanlarında ve kazıklarda PIT (Pile Integrity Test) cihazlarıyla düşük gerinimli sismik ölçüm yapılır; boy profili ve süreklilik anomalileri saha kayıtlarıyla birlikte değerlendirilir."
    },
    {
      src: "/images/kalite/yeni-3-denetim.jpg",
      title: "Birebir Saha Denetimi",
      desc: "Tasarım kriterlerine uygunluğu doğrulamak için kolon başları kazılarak açığa çıkarılır; proje çapı ile sahadaki fiili kolon geometrisi kontrol edilir."
    }
  ];

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto relative px-4 overflow-hidden">
      
      {/* Siri-like Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,100%)] h-[500px] pointer-events-none overflow-hidden opacity-50">
        <div className={`absolute inset-0 w-full h-full ${isInView ? "animate-[spin_25s_linear_infinite]" : ""}`}>
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px] mix-blend-screen opacity-70" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-400 rounded-full blur-[120px] mix-blend-screen opacity-70" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white rounded-full blur-[100px] mix-blend-screen opacity-50" />
        </div>
      </div>

      <div className="relative bg-black/40 backdrop-blur-3xl border border-white/20 rounded-[2.5rem] p-8 lg:p-14 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Top Highlight Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-gold-200 to-transparent opacity-70" />

        <div className="text-center mb-16 relative z-10">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gold-300/40 bg-black/60 text-gold-100 font-bold text-xs tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(234,179,8,0.2)] relative overflow-hidden group cursor-default"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-200/20 to-transparent -translate-x-full animate-[shimmer_3s_infinite] pointer-events-none" />
            <ShieldCheck className="w-4 h-4 text-gold-200 group-hover:rotate-12 transition-transform duration-500 relative z-10" /> 
            <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Gözle Görülen Kalite
            </span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-light text-white tracking-tight mb-4 drop-shadow-lg">
            Laboratuvar ve <span className="font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">Saha Testlerimiz</span>
          </h2>
          <p className="text-zinc-300 text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Şantiye kalite yönetim planı ve şartname gereklilikleri doğrultusunda; imalat sonrası kolon başları açılarak görsel inceleme yapılır, karot numuneleri alınır ve akredite laboratuvar testleriyle doğrulanmış mühendislik sunulur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-gold-200/50 transition-all duration-500"
            >
              <div className="aspect-[4/5] relative w-full overflow-hidden">
                <img 
                  src={img.src}
                  alt={img.title}
                  width={600}
                  height={750}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{img.title}</h3>
                <p className="text-sm text-zinc-300 leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {img.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-zinc-400 font-medium tracking-wide">
          <div className="flex items-center gap-2"><Hammer className="w-4 h-4 text-gold-200 shrink-0" /> Kolon Çapı Teyidi</div>
          <div className="flex items-center gap-2"><Activity className="w-4 h-4 text-gold-200 shrink-0" /> PIT Testleri</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold-200 shrink-0" /> UCS Basınç Testi</div>
        </div>
        
        <div className="mt-12 flex justify-center relative z-20 px-2">
          <a 
            href="/kalite-kontrol-saha-testleri/"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gold-500/10 px-5 py-3.5 sm:px-8 sm:py-4 text-gold-100 transition-all hover:bg-gold-500/20 hover:scale-105 border border-gold-500/30 max-w-full text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none" />
            <span className="font-semibold text-xs sm:text-sm tracking-wide drop-shadow-md">Tüm Saha ve Laboratuvar Testlerimizi İnceleyin</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gold-200 group-hover:translate-x-1 transition-transform shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
