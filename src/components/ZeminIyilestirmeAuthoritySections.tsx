import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export function ZeminIyilestirmeAuthoritySections() {
  return (
    <div className="space-y-10">
      {/* BÖLÜM A: Yapı Tipolojisi ve Temel Sistemine Göre Zemin İyileştirme Mühendisliği */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Yapı Tipolojisi ve Temel Sistemine Göre Zemin İyileştirme Tasarımı
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Zemin iyileştirme mühendisliğinde her üst yapı türü, temel tabanına farklı büyüklükte ve karakterde gerilmeler aktarır. Bir konut bloğunun statik radye temel basıncı ile bir rüzgar türbininin dinamik devrilme momenti veya bir lojistik deponun geniş yayılı döşeme yükü aynı geoteknik yaklaşımla çözülemez. YER6 Geoteknik, projenin üst yapı statik modelini (SAP2000, ETABS) zemin sonlu elemanlar modeliyle (Plaxis 2D/3D) birleştirerek yapı tipolojisine özgü optimum zemin iyileştirme mimarisini kurgular:
        </p>

        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-gold-200">
              1. Yüksek Katlı Konut, Rezidans ve Karma Kullanımlı Kule Projeleri
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/70">
              Çok katlı betonarme yapılarda temel taban basıncı genellikle 150 kPa ile 450 kPa aralığında değişir ve asansör/merdiven çekirdek perdelerinin altında yüksek gerilme konsantrasyonları oluşur. Bu yapılarda en kritik geoteknik sınır durumu, toplam oturmadan ziyade bina aks uçları arasındaki <strong>farklı oturma (diferansiyel oturma)</strong> ve <strong>açısal çarpılma (angular distortion, β = δ / L)</strong> değeridir. Eurocode 7 ve TBDY 2018 kriterlerine göre betonarme çerçeveli ve perdeli yapılarda mimari çatlakların önlenmesi için açısal çarpılma sınırı 1/500, yapısal hasar sınırı ise 1/150 mertebesinde tutulmalıdır.
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              YER6 Geoteknik, yüksek katlı yapıların radye temelleri altında üniform bir kolon ızgarası yerine <strong>değişken rijitlikli zemin iyileştirme (variable stiffness ground improvement)</strong> prensibini uygular. Çekirdek perde ve ağır kolon akslarının altında <Link href="/services/jet-grout/" className="text-gold-200 hover:underline font-medium">Jet Grout</Link> veya <Link href="/services/dsm/" className="text-gold-200 hover:underline font-medium">Deep Soil Mixing (DSM)</Link> kolon aralıkları sıklaştırılırken (örneğin 1.40 m × 1.40 m karesel dizilim), daha az yük alan otopark ve baza bölgelerinde kolon aralıkları optimize edilir (örneğin 2.00 m × 2.00 m). Radye temel ile iyileştirme kolonları arasına serilen 30 ila 50 cm kalınlığındaki iyi derecelenmiş kırmataş <strong>yük transfer platformu (LTP - Load Transfer Platform)</strong> sayesinde zımbalamaya (punching shear) karşı tam güvenlik sağlanır ve temel kesitindeki donatı tonajı düşürülür.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-gold-200">
              2. Ağır Sanayi Tesisleri, Çelik Fabrika Yapıları ve Lojistik Depolar
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/70">
              Organize sanayi bölgelerinde (OSB) inşa edilen prefabrik veya çelik konstrüksiyon fabrikalar ile yüksek irtifalı otomatik depolama (AS/RS) lojistik merkezlerinde iki ayrı yükleme rejimi söz konusudur: tekil kolon temellerinden gelen noktasal yükler ve saha betonu (endüstriyel zemin döşemesi) üzerine etkiyen 50 kN/m² ila 150 kN/m² mertebesindeki ağır yayılı raf/istif yükleri. Geleneksel kazıklı temellerle on binlerce metrekarelik fabrika döşemesini taşımak ekonomik açıdan imkânsızdır.
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Bu tip geniş tabanlı endüstriyel sahalarda YER6 Geoteknik; zemin profilinin ince dane oranına göre <Link href="/services/dsm/" className="text-gold-200 hover:underline font-medium">DSM Zemin İyileştirme</Link>, <Link href="/services/tas-kolon/" className="text-gold-200 hover:underline font-medium">Vibro-Taş Kolon</Link> veya <strong>Rijit İnklüzyon (Controlled Modulus Columns - CMC)</strong> sistemlerini çift eksenli geogrid donatılı granüler şiltelerle entegre eder. Kolon başlıkları üzerinde oluşan kemerlenme etkisi (soil arching mechanism) sayesinde döşeme yükünün %70 ila %85&apos;i doğrudan rijit/yarı-rijit zemin kolonlarına aktarılır. Böylece forklift ve otonom robotların (AGV) çalıştığı hassas endüstriyel zeminlerde milimetrik düzlük (FF/FL yüzey toleransları) uzun yıllar boyunca korunur.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-gold-200">
              3. Enerji Santralleri, Akaryakıt/Kimya Tank Çiftlikleri, Silolar ve Rüzgar Türbinleri (RES)
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/70">
              Çelik depolama tankları ve tarımsal/endüstriyel silolar, dolum ve boşaltım döngüleri sırasında zemine tekrarlı (siklik) ve çok yüksek düşey gerilmeler uygular. Esnek tabanlı çelik tanklarda merkez ile çevre duvarı (shell) arasındaki aşırı oturma farkı veya çevre duvarı boyunca oluşan düzlem dışı ovalleşme oturmaları, tank taban saclarının yırtılmasına ve felaket boyutunda sızıntılara yol açar. Benzer şekilde, 120–160 metre kule yüksekliğine sahip rüzgar türbini (RES) temellerinde rüzgar ve deprem yüklerinden kaynaklanan devasa devrilme momentleri, temel altında dinamik dönme rijitliğinin (rotational stiffness) çok yüksek olmasını zorunlu kılar.
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Tank ve silo temellerinde YER6; yanal zemin kaçışını (lateral squeezing) önleyen çevre kuşaklama (confinement ring) Jet Grout/DSM perdeleri ile merkezde oturma ve sıvılaşma sönümleyici sık taş kolon veya DSM ızgaralarını birlikte projelendirir. Rüzgar türbini temellerinde ise dairesel radye altında konsantrik halkalar halinde yerleştirilen yüksek dayanımlı Jet Grout/DSM kolonları veya <Link href="/services/fore-kazik/" className="text-gold-200 hover:underline font-medium">Fore Kazık</Link> gruplarıyla dinamik yatak katsayısı şartname değerlerinin üzerine çıkarılır.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-gold-200">
              4. Otoyol, Hızlı Tren (YHT) Dolguları, Liman Rıhtımları ve Köprü Yaklaşım Dolguları
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/70">
              Yumuşak alüvyal vadiler veya denizel killer üzerine inşa edilen yüksek karayolu/demiryolu dolgularında en büyük iki tehlike; zamana yayılan birincil/ikincil konsolidasyon oturmaları ve dolgu şevinin toptan göçme (dairesel kayma) riskidir. Özellikle kazıklı köprü kenarayakları (abutment) ile arkadaki toprak dolgu arasındaki geçiş bölgesinde oluşan oturma farkı, sürücüler ve trenler için tehlikeli &quot;köprü başı eşik (bump at the end of the bridge)&quot; problemine neden olur.
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Proje takviminin izin verdiği geniş altyapı koridorlarında <strong>Prefabrike Düşey Drenler (PVD / Wick Drain) + Ön Yükleme (Sürşarj)</strong> kombinasyonu ile 15 yılda gerçekleşecek konsolidasyon oturması 3 ila 6 ay içinde sahada tamamlatılır. İmalat süresinin kısıtlı olduğu hızlı tren hatları ve köprü yaklaşım dolgularında ise kademeli boylara sahip DSM veya taş kolonlarla yumuşak geçiş zonu (transition zone) teşkil edilerek oturma sıfırlanır.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-gold-200">
              5. Kentsel Dönüşüm, Bitişik Nizam Parseller ve Mevcut Binaların Temel Altı Güçlendirmesi
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/70">
              Büyükşehirlerin merkez ilçelerinde yürütülen kentsel dönüşüm projelerinde ve mevcut hasarlı/oturmuş binaların kurtarılmasında, ağır dinamik darbe veya yüksek titreşim üreten yöntemler komşu yapıların yığma/betonarme taşıyıcı sistemine zarar vereceği için kesinlikle uygulanamaz. Dar sokaklar, basık bodrum katları (2.20 m – 3.00 m tavan yüksekliği) ve komşu temellerin parsel sınırına sıfır olması özel ekipman ve reoloji yönetimi gerektirir.
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              YER6 Geoteknik bu sahalarda; elektrikli/kompakt paletli delgi üniteleriyle <Link href="/services/bina-alti-jet-grout/" className="text-gold-200 hover:underline font-medium">Bina Altı Jet Grout</Link>, <Link href="/services/mini-kazik/" className="text-gold-200 hover:underline font-medium">Mini Kazık (Mikrokazık)</Link> ve düşük basınçlı permeasyon/kompansasyon enjeksiyonu uygular. Komşu temellerin altında zemin kabarması (heave) veya boşalma olmaması için kuyu ağzı pasa dönüşü (spoil return) saniye saniye izlenir ve optik total station / tiltmetre sensörleriyle komşu binalar 7/24 denetim altında tutulur.
            </p>
          </div>
        </div>
      </div>

      {/* BÖLÜM B: TBDY 2018 Zemin Sınıfları ve Arazi Deneylerinden Tasarıma Geçiş */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          TBDY 2018 Yerel Zemin Sınıfları (ZA–ZF) ve Arazi Deneylerinden Tasarıma Geçiş
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Türkiye Bina Deprem Yönetmeliği (TBDY 2018) Bölüm 16, üst yapı deprem kuvvetlerinin ve temel tasarımının doğrudan üst 30 metrelik zemin profilinin ortalama kayma dalgası hızına (Vs30), standart penetrasyon darbe sayısına (N60) ve drenajsız kayma mukavemetine (cu) göre belirlenmesini şart koşar. Doğru zemin iyileştirme projesi, sondaj kuyu loglarının ve arazi (in-situ) deneylerinin doğru okunmasıyla başlar:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-black/40">
          <table className="w-full text-left text-xs text-white/80">
            <thead className="border-b border-white/10 bg-white/10 text-white font-semibold">
              <tr>
                <th className="p-3.5">TBDY 2018 Sınıfı</th>
                <th className="p-3.5">Zemin Grubu Tanımı</th>
                <th className="p-3.5">Vs30 / N60 / cu Sınırları</th>
                <th className="p-3.5">Geoteknik Risk Profili</th>
                <th className="p-3.5">YER6 Mühendislik ve İyileştirme Yaklaşımı</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">ZA ve ZB</td>
                <td className="p-3.5">Sağlam, Sert ve Az Ayrışmış Kayalar</td>
                <td className="p-3.5">Vs30 &gt; 760 m/s</td>
                <td className="p-3.5">Taşıma gücü yüksek; karstik boşluk veya süreksizlik aynası riski</td>
                <td className="p-3.5">Derin kazılarda zemin çivisi, püskürtme beton, kaya ankrajı; karstik zonlarda kontak/dolgu enjeksiyonu</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">ZC</td>
                <td className="p-3.5">Çok Sıkı Kum/Çakıl ve Çok Katı Kil</td>
                <td className="p-3.5">Vs30: 360–760 m/s | N60 &gt; 50 | cu &gt; 250 kPa</td>
                <td className="p-3.5">Ağır kule yüklerinde lokal oturma ve derin kazı yanal stabilitesi</td>
                <td className="p-3.5">Derin bodrum kazılarında fore kazıklı/ankrajlı iksa; yüksek kulelerde lokal radye altı rijitleştirme</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">ZD</td>
                <td className="p-3.5">Orta Sıkı–Sıkı Kum/Çakıl veya Katı Kil</td>
                <td className="p-3.5">Vs30: 180–360 m/s | N60: 15–50 | cu: 70–250 kPa</td>
                <td className="p-3.5">Konsolidasyon oturması, diferansiyel dönme, yeraltı suyu altında kum merceklerinde kısmi sıvılaşma</td>
                <td className="p-3.5">Taşıma gücü ve oturma kontrolü için DSM, Jet Grout veya Taş Kolon ızgaraları; tam boy karot ve plaka yükleme doğrulaması</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">ZE</td>
                <td className="p-3.5">Gevşek Kum veya Yumuşak Kil Tabakaları</td>
                <td className="p-3.5">Vs30 &lt; 180 m/s | N60 &lt; 15 | cu &lt; 70 kPa</td>
                <td className="p-3.5">Yüksek deprem büyütmesi, aşırı toplam/farklı oturma, zemin yenilmesi (bearing capacity failure)</td>
                <td className="p-3.5">Yüzeysel temel tek başına uygun değildir: Sık aralıklı Jet Grout / DSM kolonları, Rijit İnklüzyon + LTP veya Kazıklı Radye Temel</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">ZF</td>
                <td className="p-3.5">Sıvılaşabilir, Turbalı, Organik ve Yüksek Plastisiteli Killer</td>
                <td className="p-3.5">Sahaya özel deprem davranış analizi zorunlu (PI &gt; 50, H &gt; 3 m yumuşak kil/kum)</td>
                <td className="p-3.5">Depremde sıvılaşma, yanal yayılma (lateral spreading), zemin kaybı ve aşırı göçme oturması</td>
                <td className="p-3.5">Zorunlu Zemin İyileştirmesi: Hücresel (Kafes/Grid) DSM veya Jet Grout duvarları, Taş Kolon + Düşey Dren hibrit sistemleri ve sağlam tabakaya soketli derin temeller</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-base">
              SPT, CPTu ve Presiyometre Verilerinin Tasarımdaki Rolü
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Yalnızca SPT darbe sayısına bakılarak güvenli zemin iyileştirme tasarımı yapılamaz. İnce tabakalı alüvyonlarda boşluk suyu basıncı ölçümlü koni penetrasyon testi (CPTu), 2 cm aralıklarla kesintisiz uç direnci (qc) ve çevre sürtünmesi (fs) verisi sağlayarak sıvılaşabilir ince kum/silt bantlarını milimetrik yakalar. Menard Presiyometre deneyi (PMT) ise zemin içinde yatay genleşme modülünü (EM) ve limit basıncı (pL) doğrudan yerinde ölçerek Jet Grout, DSM ve Taş Kolon sonrası oturma hesaplarının gerçek saha rijitliğiyle kalibre edilmesini sağlar.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-base">
              İyileştirme Sonrası Sismik Hız (MASW) ve CPT Doğrulaması
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Zemin iyileştirme imalatı tamamlandıktan sonra zeminin geoteknik parametrelerindeki artış yalnızca teorik kabullerle bırakılmaz. İmalat öncesinde ve sonrasında aynı koordinatlarda yapılan CPT/SPT sondajları ve Çok Kanallı Yüzey Dalgası Analizi (MASW) ölçümleriyle kompozit zeminin eşdeğer kayma dalgası hızının (Vs) ve kayma modülünün (Gmax = ρ · Vs²) proje hedef değerlerine ulaştığı belgelenir.
            </p>
          </div>
        </div>
      </div>

      {/* BÖLÜM C: Türkiye Bölgesel Zemin Karakteristikleri ve Saha Çözümlerimiz */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Türkiye&apos;nin Bölgesel Zemin Karakteristikleri ve Sahaya Özel İyileştirme Çözümleri
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Türkiye; Kuzey Anadolu Fay Hattı (KAF), Doğu Anadolu Fay Hattı (DAF) ve Batı Anadolu Graben Sistemi üzerinde yer alan, genç alüvyal ovalar ve kıyı deltalarıyla çevrili karmaşık bir jeolojik yapıya sahiptir. YER6 Geoteknik, 81 ilde yürüttüğü saha operasyonlarından edindiği bölgesel zemin hafızasıyla her coğrafyanın yerel zemin problemine özgü mühendislik reçeteleri uygular:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              1. Marmara Havzası (İstanbul, Kocaeli, Sakarya, Bursa, Tekirdağ, Yalova)
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              <Link href="/sehirler/istanbul-zemin-guclendirme" className="text-gold-200 hover:underline">İstanbul</Link> Haliç, Ayamama Deresi, Küçükçekmece–Avcılar–Büyükçekmece hattı ve Tuzla kıyı şeridi ile <Link href="/sehirler/kocaeli-zemin-guclendirme" className="text-gold-200 hover:underline">Kocaeli</Link> İzmit Körfezi, Adapazarı Ovası ve <Link href="/sehirler/bursa-zemin-guclendirme" className="text-gold-200 hover:underline">Bursa</Link> Nilüfer/Osmangazi alüvyonları; yeraltı su seviyesi yüzeye çok yakın (1.0–3.0 m), sıvılaşma potansiyeli yüksek gevşek siltli kumlardan ve yumuşak denizel/gölsel killerden oluşur. Bu bölgelerde sıvılaşma kaynaklı yanal yayılmayı ve temel göçmesini önlemek için hücresel (grid) DSM/Jet Grout panelleri, Vibro-Taş Kolonlar ve derin kazılarda su sızdırmaz kesişen kazık / Jet Grout perdeleri birincil çözümdür.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              2. Ege Havzası ve Graben Ovaları (İzmir, Manisa, Aydın, Denizli, Muğla)
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              <Link href="/sehirler/izmir-zemin-guclendirme" className="text-gold-200 hover:underline">İzmir</Link> Bayraklı, Karşıyaka, Bostanlı, Mavişehir, Alsancak ve Çiğli kıyı ovaları; 30 ila 60 metre derinliğe inen yüksek plastisiteli yumuşak denizel killer ve bunların arasına kama şeklinde giren sıvılaşabilir kum mercekleriyle karakterizedir. Yüksek sismik zemin büyütmesi gösteren bu profilde; derin yüksek katlı yapılarda ana kayaya soketli <Link href="/services/fore-kazik/" className="text-gold-200 hover:underline">Fore Kazık</Link> + çevresel diyafram/Jet Grout iksa sistemleri, orta katlı ve endüstriyel yapılarda ise çift milli DSM kuleleriyle teşkil edilen zemin-çimento kolonları uygulanmaktadır.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              3. İç Anadolu (Ankara, Eskişehir, Konya, Kayseri, Sivas)
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              <Link href="/sehirler/ankara-zemin-guclendirme" className="text-gold-200 hover:underline">Ankara</Link> genelinde (Çankaya, Yenimahalle, İvedik, Etimesgut, Sincan, Gölbaşı) yaygın olan <strong>Ankara Kili</strong>; smektit grubu kil mineralleri içeren, su muhtevası değiştiğinde yüksek şişme basıncı (swelling pressure) ve büzülme üreten aşırı konsolide fisürlü bir kildir. Ayrıca Çubuk, Hatip ve İncesu derelerinin alüvyal yataklarında gevşek kum-çakıl istifleri yer alır. Ankara kilinde açılan derin kazılarda fisür aynaları boyunca ani kama kaymalarını önlemek için öngermeli <Link href="/services/ankraj/" className="text-gold-200 hover:underline">Zemin Ankrajı</Link> ve fore kazıklı iksa; alüvyal parsellerde ise Jet Grout ve DSM kolonları tercih edilir.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              4. Akdeniz, Çukurova ve Deprem Bölgesi (Hatay, Adana, Mersin, Kahramanmaraş, Malatya, Gaziantep)
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              6 Şubat depremlerinde en ağır zemin yenilmelerinin gözlemlendiği <Link href="/sehirler/hatay-zemin-guclendirme" className="text-gold-200 hover:underline">Hatay</Link> (Antakya, İskenderun, Arsuz, Defne), Kahramanmaraş (Türkoğlu, Elbistan), Malatya, Adıyaman Gölbaşı ve Adana Çukurova deltası; Asi, Ceyhan ve Seyhan nehirlerinin taşıdığı suya doygun genç kum-silt çökellerinden oluşur. YER6 Geoteknik bu bölgedeki kalıcı deprem konutları ve kamu yatırımlarında yüksek torklu Bauer ve Soilmec makine parkuruyla muhafaza borulu (casingli) fore kazık, yüksek basınçlı Jet Grout ve DSM uygulamalarını aktif olarak yürütmektedir.
            </p>
          </div>
        </div>
      </div>

      {/* BÖLÜM D: 12 Zemin İyileştirme Yönteminin Saha Operasyon ve Uygulama Şartnamesi */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          12 Zemin İyileştirme Yönteminin Saha Operasyon ve Uygulama Rehberi
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Bir zemin iyileştirme projesinin başarısı, seçilen yöntemin saha uygulama disiplinine ve ilgili Avrupa (EN) / Amerikan (FHWA, ASTM) normlarına harfiyen uyulmasına bağlıdır. YER6 Geoteknik bünyesinde uygulanan 12 temel zemin iyileştirme ve güçlendirme teknolojisinin saha uygulama kriterleri şunlardır:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">1. Jet Grouting (TS EN 12716 — JG1, JG2, JG3)</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Delgi tiji ucundaki monitörden 400–600 bar basınçla ve 200–300 m/s hızla püskürtülen çimento şerbeti (JG1), şerbet+hava zarfı (JG2) veya su+hava+şerbet (JG3) ile zemin dokusu yerinde parçalanarak 60 cm ila 250 cm çapında <strong>soilcrete</strong> kolonları üretilir. Taze kolonların birbirini bozmaması için sahada zorunlu olarak <strong>şaşırtmalı (primer–sekonder dama tahtası)</strong> imalat sırası takip edilir ve kuyu ağzından kesintisiz pasa (spoil) dönüşü kontrol edilir.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">2. Deep Soil Mixing — DSM (TS EN 14679 — Islak ve Kuru Yöntem)</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Tek veya çift milli (twin-shaft) karıştırma kuleleriyle zemine indirilen çok kademeli kesici-karıştırıcı bıçaklar (paddles), zemini örselemeden mekanik olarak doğrarken 5–20 bar düşük basınçla çimento şerbeti enjekte eder. Bıçak Dönüş Sayısı (BRN ≥ 300–400 devir/m) dijital otomasyonla sabit tutularak yüksek homojenlikte kolonlar veya sıvılaşma önleyici kesişen <strong>DSM hücresel kafes panelleri</strong> oluşturulur. Jet Grout&apos;a kıyasla pasa (atık çamur) hacmi %60–80 daha azdır.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">3. Vibro-Taş Kolon (TS EN 14731 — Wet Top-Feed &amp; Dry Bottom-Feed)</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Eksantrik ağırlıklı derin vibratör (vibroflot) ile zeminde açılan boşluğa 20–75 mm veya 15–45 mm gradasyonlu temiz kırmataş (açısal bazalt/kalker agrega) kademeli olarak beslenir ve 50 cm&apos;lik 리ftler halinde radyal yönde sıkıştırılır. Killi/siltli zeminlerde taşıma gücünü artırıp oturmayı Priebe kriterlerine göre azaltırken, sıvılaşabilir kumlu zeminlerde deprem anında aşırı boşluk suyu basıncını anında tahliye eden yüksek geçirgenlikli düşey dren görevi üstlenir.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">4. Vibro-Kompaksiyon (Vibroflotation)</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              İnce dane oranı %10&apos;un altında (tercihen FC ≤ %5) olan temiz gevşek kum ve çakıl çökellerinde, herhangi bir bağlayıcı veya çimento kullanmadan doğrudan derin vibratörün yatay santrifüj titreşim enerjisiyle zemin danelerinin yeniden dizilerek sıkıştırılmasıdır. Gevşek kumların rölatif sıkılığı (Dr) %35–40 seviyelerinden %75–85 seviyelerine çıkarılarak sıvılaşma riski kalıcı olarak ortadan kaldırılır.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">5. Rijit İnklüzyonlar (CMC — Controlled Modulus Columns)</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Özel deplasman burgusu (displacement auger) ile toprağı dışarı çıkarmadan yanlara doğru sıkıştırarak delgi yapan ve burgu çekilirken merkezden C16/20 veya C20/25 kıvamlı harç/beton basılarak oluşturulan Ø30–Ø50 cm çaplı donatısız rijit kolonlardır. Sıfır hafriyat pasası üretmesi ve günde 400–600 metreye varan imalat hızıyla geniş lojistik depolar, otoyol dolguları ve arıtma tesisleri altında üstün ekonomi sağlar.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">6. Prefabrike Düşey Dren (PVD / Wick Drain — TS EN 15237)</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Kalın ve suya doygun normal konsolide yumuşak kil tabakalarında, düşey yönde onlarca metre olan drenaj yolunu yatayda 1.0–1.5 metreye düşürmek amacıyla çelik mandrel ile zemine çakılan jeokompozit şerit drenlerdir. Üzerine serilen drenaj battaniyesi ve kademeli <strong>sürşarj (ön yükleme) dolgusu</strong> (veya vakum konsolidasyonu) ile kilin birincil konsolidasyon oturmasının %90&apos;ı inşaat başlamadan önce birkaç ay içinde tamamlatılır.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">7. Derin Dinamik Kompaksiyon (DDC) ve Hızlı Dinamik Kompaksiyon (RIC)</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Geniş liman dolguları, sanayi parselleri ve heterojen kaya/moloz dolgularında 10 ila 30 ton ağırlığındaki çelik tokmakların paletli vinçlerle 15–25 metre yükseklikten belirli bir grid (Faz 1 birincil, Faz 2 ikincil, Faz 3 ütüleme pası) düzeninde serbest düşürülmesidir. Üretilen yüksek enerjili Rayleigh ve P/S dalgaları 8 ila 12 metre derinliğe kadar makro boşlukları kapatır. Şehir içi daha sığ (3–6 m) sahalarda ise dakikada 30–40 darbe vuran hidrolik <strong>Hızlı Dinamik Kompaksiyon (RIC)</strong> kullanılır.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">8. Permeasyon (Emdirme) ve Mikro-Çimento Enjeksiyonu (TS EN 12715)</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Zeminin mevcut tane iskeletini kırmadan ve hacimsel yer değiştirme yaratmadan, düşük enjeksiyon basınçlarıyla tane arası boşlukların doldurulmasıdır. Kaba kum ve çakıllarda standart Portland çimentosu süspansiyonları, ince-orta kumlarda d95 &lt; 10 mikron <strong>ultrafine mikro-çimento</strong>, siltli kumlarda ise düşük viskoziteli silikat jelleri veya akrilat/poliüretan reçineleri kullanılarak hem kohezyon kazanımı hem de tam su sızdırmazlığı elde edilir.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">9. Kompaksiyon Enjeksiyonu (Compaction Grouting)</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Çökme (slump) değeri 25–50 mm&apos;nin altında olan çok koyu kıvamlı (düşük mobiliteye sahip) harcın zemin içine basılarak zemin gözeneklerine sızmadan genişleyen küresel bir <strong>enjeksiyon ampulü (bulb)</strong> oluşturmasıdır. Genişleyen harç kütlesi çevresindeki gevşek kumu ve dolguyu radyal yönde sıkıştırır. Özellikle mevcut bina temelleri altında oturma düzeltme ve karstik/maden boşluklarının doldurulmasında benzersiz kontrol sunar.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">10. Kompansasyon (Çatlatma / TAM) Enjeksiyonu</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Tünel açma (TBM / NATM) veya derin kazı çalışmaları sırasında mevcut tarihi yapıların ve binaların altında oluşabilecek milimetrik oturmaları anında telafi etmek (kompanse etmek) için uygulanır. Bina temeli ile tünel tavanı arasına yerleştirilen <strong>manşonlu borular (TAM - Tube à Manchette)</strong> içerisinden çift packer ile tekrarlı ve kontrollü hidrolik çatlatma enjeksiyonu yapılarak yapı anlık lazer/prizma okumalarıyla milimetrik olarak dengede tutulur.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">11. Kireç ve Çimento ile Kütle Zemin Stabilizasyonu</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Yüksek plastisiteli, şişme potansiyeli yüksek ve doğal su muhtevası optimum değerin çok üzerinde olan killi/siltli üstyapı tabanlarında (otoyol, havalimanı pisti, fabrika saha betonu altı) sönmemiş kalsiyum oksit (CaO) veya çimento bağlayıcının güçlü <strong>zemin stabilizatör (recycler)</strong> makineleriyle 30–50 cm derinlikte harmanlanmasıdır. Katyon değişimi ve puzolanik reaksiyonlarla plastisite indisi (PI) hızla düşürülür, CBR taşıma oranı 5–10 kat artırılır.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">12. Hibrit Zemin İyileştirme ve Derin Temel Kombinasyonları</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Karmaşık jeolojik profillerde tek bir yöntem yerine iki yöntemin mühendislik sinerjisi kullanılır: örneğin derin taşıma gücü için <Link href="/services/fore-kazik/" className="text-gold-200 hover:underline">Fore Kazık</Link> uygulanırken üst 10 metredeki sıvılaşabilir kumda kazıklara gelecek yanal deprem yüklerini (kinematik etkileşimi) sönümlemek için kazıklar arasına <strong>Jet Grout / DSM ızgarası veya Taş Kolon</strong> teşkil edilmesi, modern deprem mühendisliğinin en güvenli çözüm modelidir.
            </p>
          </div>
        </div>
      </div>

      {/* BÖLÜM E: 3 Aşamalı Şantiye Kalite Güvence (QA/QC) ve Kabul Protokolü */}
      <div className="rounded-[2rem] border border-gold-300/25 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          YER6 3 Aşamalı Şantiye Kalite Güvence (QA/QC) ve Resmi Kabul Protokolü
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Zemin iyileştirme imalatları yerin metrelerce altında gerçekleştiği için, imalat kalitesinin gözle kontrolü tek başına mümkün değildir. YER6 Geoteknik; yapı denetim kuruluşları, üniversite geoteknik kürsüleri, belediyeler ve uluslararası müşavirlik firmalarının (FIDIC) kabul kriterlerine %100 uyumlu <strong>3 Aşamalı Kalite Güvence Sistemi</strong> uygular:
        </p>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <span className="inline-block rounded-full bg-gold-300/20 px-3 py-1 text-xs font-bold text-gold-200">
              AŞAMA 1 — İMALAT ÖNCESİ
            </span>
            <h3 className="mt-3 font-semibold text-white text-base">
              Kalibrasyon ve Saha Deneme Kolonları (Trial Columns)
            </h3>
            <ul className="mt-3 space-y-2 text-xs leading-6 text-white/70">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-1 text-gold-200" />
                <span>Yeraltı suyu sülfat (SO4), klorür ve pH analizlerine göre doğru çimento tipinin (CEM I 42.5 R veya sülfata dayanıklı CEM III/B) seçimi.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-1 text-gold-200" />
                <span>Seri imalata başlamadan önce sahanın zeminini temsil eden bölgede farklı basınç, çekme hızı ve su/çimento oranlarıyla <strong>en az 3 adet Deneme Kolonu</strong> imalatı.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-1 text-gold-200" />
                <span>Deneme kolonlarının çevresinin ekskavatörle açılarak <strong>fiili kolon çapının (D)</strong> şerit metre ve kumpasla yerinde ölçülüp tutanak altına alınması.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <span className="inline-block rounded-full bg-gold-300/20 px-3 py-1 text-xs font-bold text-gold-200">
              AŞAMA 2 — İMALAT ESNASI
            </span>
            <h3 className="mt-3 font-semibold text-white text-base">
              Dijital Otomasyon (MWD) ve Reolojik Kontrol
            </h3>
            <ul className="mt-3 space-y-2 text-xs leading-6 text-white/70">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-1 text-gold-200" />
                <span>Her bir kolonun koordinatı (RTK-GPS), delgi derinliği, kule eğimi (&lt;%1), enjeksiyon basıncı (bar), anlık debi (lt/dk), rotasyon (RPM) ve çekme hızının (cm/dk) dijital <strong>Data-Logger</strong> ile kaydedilmesi.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-1 text-gold-200" />
                <span>Mikser santralinde her vardiyada <strong>Çamur Terazisi (Mud Balance)</strong> ile şerbet özgül ağırlığının (1.50–1.60 g/cm³) ve Marsh Hunisi akışkanlığının ölçülmesi.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-1 text-gold-200" />
                <span>Taze kolon içerisinden <strong>ıslak numune alıcı (wet grab sampler)</strong> ile farklı derinliklerden numune alınarak küp/silindir kalıplara dökülmesi.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <span className="inline-block rounded-full bg-gold-300/20 px-3 py-1 text-xs font-bold text-gold-200">
              AŞAMA 3 — İMALAT SONRASI
            </span>
            <h3 className="mt-3 font-semibold text-white text-base">
              Karot (UCS), Plaka Yükleme ve Bütünlük Testleri
            </h3>
            <ul className="mt-3 space-y-2 text-xs leading-6 text-white/70">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-1 text-gold-200" />
                <span>Prizini tamamlayan kolonlardan (14 ve 28. günlerde) çift/üç tüplü elmas karotiyerle tam boy karot alınması, <strong>TCR/RQD</strong> süreklilik kontrolü ve akredite laboratuvarda <strong>UCS tek eksenli basınç kırılma deneyi</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-1 text-gold-200" />
                <span>Kolon başlıkları üzerinde proje yükünün 1.5 ila 2.0 katına kadar <strong>Statik Kolon / Plaka Yükleme Deneyi (ASTM D1194 / D1143)</strong> yapılarak yük-oturma eğrisinin doğrulanması.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 mt-1 text-gold-200" />
                <span>PIT (Pile Integrity Test - ASTM D5882) sonik bütünlük testleri ve kolonlar arası zeminde iyileştirme sonrası kontrol CPT/SPT/MASW ölçümleri.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BÖLÜM F: Şantiye Hazırlığı, Çalışma Platformu ve Sözleşme/Metraj Yönetimi */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Şantiye Çalışma Platformu, İş Güvenliği ve Sözleşme/Metraj Mühendisliği
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Zemin iyileştirme projelerinde işveren ve ana müteahhitlerin iş programı gecikmesi yaşamaması ve bütçe aşımıyla karşılaşmaması için saha hazırlığı ile sözleşme birim fiyat kurgusunun baştan doğru yapılması şarttır:
        </p>

        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              1. Ağır Geoteknik Makineler İçin Çalışma Platformu (Working Platform — BR 470 Standardı)
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Fore kazık, DSM ve Jet Grout makineleri 25 ila 85 ton çalışma ağırlığına ve yüksek ağırlık merkezine sahip paletli iş makineleridir. Zayıf, balçık veya yağışla yumuşamış kazı tabanına doğrudan indirilen makinelerde palet batması ve kule devrilmesi riski oluşur. Bu nedenle imalat öncesinde kazı tabanına geotekstil ayırıcı keçe serilmeli ve üzerine 40 ila 70 cm kalınlığında sıkıştırılmış tüvenan kırmataş <strong>çalışma platformu (working platform)</strong> teşkil edilmelidir. Ayrıca Jet Grout imalatında kuyu ağzından çıkan çimento-zemin pasasının (spoil) kontrollü toplanması ve priz aldıktan sonra ekskavatörle yüklenip döküm sahasına nakledilmesi için saha içinde dinlendirme havuzları ve drenaj kanalları planlanır.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              2. İhale Keşif Özeti ve Birim Fiyat (Hakediş) Kalemlerinin Şeffaf Kurgulanması
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Zemin iyileştirme sözleşmelerinde hem işvereni hem de geoteknik yükleniciyi koruyan en sağlıklı model, <strong>Ayrıştırılmış Birim Fiyat (Unit Rate)</strong> modelidir. İhale keşif cetvelinde; (1) Mobilizasyon ve Demobilizasyon (götürü kalem), (2) İmalat Delgi ve Enjeksiyon/Karıştırma Metretülü (fiili kuyu tutanaklarıyla ölçülen net imalat boyu, m), (3) Bağlayıcı / Çimento Tonajı (kantar fişleri ve silo irsaliyeleriyle doğrulanan tonaj, ton) ve (4) Kalite Kontrol Testleri (deneme kolonu, karot alımı, plaka/kazık yükleme deneyi, PIT testi adetleri) ayrı kalemler halinde tanımlanmalıdır. Bu şeffaf yapı sayesinde, yerel karstik boşluk veya mercek nedeniyle çimento sarfiyatının değiştiği noktalarda ne müteahhit malzeme kısmak zorunda kalır ne de işveren belirsizlik riski için fahiş götürü fiyat öder.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              3. Zemin İyileştirme Firmaları Seçiminde 8 Altın Kriter (Yatırımcı Denetim Listesi)
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Türkiye&apos;de <strong>zemin iyileştirme firmaları</strong> arasında teklif toplarken yalnızca &quot;1 metre fiyatı&quot; üzerinden karşılaştırma yapmak yanıltıcıdır. Teklif veren firmalarda mutlaka şu 8 kriter sorgulanmalıdır: (1) Firmanın kendi özmal makine parkı (Soilmec, Bauer, Casagrande, Metax, Tecniwell) ve yedek pompa kapasitesi var mı? (2) Teklif edilen birim fiyata metresinde kaç kg çimento (örneğin Ø80 cm kolon için 300–400 kg/m) dahil edilmiş? (3) Kuyu başı boş delgi (empty bore) nasıl fiyatlandırılıyor? (4) Makine üzerinde anlık basınç, debi ve derinlik çıktısı veren dijital Data-Logger mevcut mu? (5) Şantiyede tam zamanlı Jeoloji ve İnşaat/Geoteknik Mühendisi bulunduruluyor mu? (6) 400–600 bar yüksek basınç hortumlarında çift emniyet zinciri (whip-check) ve acil durdurma (E-Stop) İSG standartları uygulanıyor mu? (7) İmalat sonrası UCS karot ve yükleme testlerini kapsayan resmi Geoteknik Sonuç ve Kabul Raporu teslim ediliyor mu? (8) Benzer zemin sınıfında (ZE/ZF) tamamlanmış referans projeleri kanıtlanabilir mi?
            </p>
          </div>
        </div>
      </div>

      {/* BÖLÜM G: Zemin İyileştirme Projelerinde 5 Adımlı Mühendislik Hesap ve Sayısal Modelleme Metodolojisi */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Zemin İyileştirme Tasarımında 5 Adımlı Mühendislik Hesap ve FEM Modelleme Metodolojisi
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Profesyonel zemin iyileştirme mühendisliği, ampirik tahminlerle değil; analitik mekanik denklemler ve 2B/3B Sonlu Elemanlar Yöntemi (FEM — Plaxis 2D/3D, Rocscience Settle3, DeepEX) analizlerinin birbirini doğrulamasıyla yürütülür. YER6 Geoteknik Tasarım Ofisi her projede aşağıdaki 5 adımlı hesap protokolünü uygular:
        </p>

        <div className="mt-6 space-y-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              Adım 1: Geoteknik İdealizasyon ve Karakteristik Parametre Seçimi (Eurocode 7 &amp; TBDY 2018)
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Sondaj kuyularından elde edilen SPT, CPTu, Presiyometre ve üç eksenli (UU/CU/CD) laboratuvar deney sonuçları istatistiksel olarak değerlendirilerek her tabaka için ihtiyatlı <strong>karakteristik zemin parametreleri</strong> (efektif kohezyon c&apos;k, efektif içsel sürtünme açısı φ&apos;k, drenajsız kayma mukavemeti cu,k, odometre modülü Eoed ve sekant deformasyon modülü E50) belirlenir. TBDY 2018 Bölüm 16.4 uyarınca karakteristik dayanımlar ilgili güvenlik/dayanım katsayılarına (γR) bölünerek tasarım dayanımları (Rd) elde edilir.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              Adım 2: İyileştirme Öncesi Sınır Durum Tahkikleri (Taşıma Gücü, Oturma ve Sıvılaşma)
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Üst yapıdan gelen statik (G + Q) ve depremli (G + Q + E) temel taban basınçları altında mevcut doğal zeminin üç temel sınır durumu kontrol edilir: (1) <strong>Taşıma Gücü Tahkiki:</strong> Vesic ve Hansen genel taşıma gücü denklemleriyle sınır taşıma kapasitesi hesaplanır; tasarım basıncının güvenli taşıma gücünü aştığı (qnet &gt; qd) derinlikler tespit edilir. (2) <strong>Konsolidasyon ve Elastik Oturma Tahkiki:</strong> Boussinesq gerilme dağılımı ve Terzaghi 1 boyutlu konsolidasyon teorisiyle (aşırı konsolidasyon oranı OCR, sıkışma indisi Cc ve yeniden sıkışma indisi Cr kullanılarak) toplam ve farklı oturmalar hesaplanır. (3) <strong>Sıvılaşma ve Yanal Yayılma Tahkiki:</strong> Tasarım depremi (DD-2, 475 yıl dönüş periyodu) yer ivmesi (SDS) altında her derinlikte çevrimsel gerilme oranı (CSR) ile çevrimsel direnç oranı (CRR7.5) karşılaştırılır; güvenlik katsayısı FL &lt; 1.10 olan tüm katmanlar iyileştirme zonuna dahil edilir.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              Adım 3: Alan Değiştirme Oranı (as) ve Kolon Izgara Geometrisi Optimizasyonu
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              İhtiyaç duyulan taşıma gücü artışı ve oturma azalım oranına göre kolon çapı (D) ve eksenler arası mesafe (s) seçilerek <strong>Alan Değiştirme Oranı (Area Replacement Ratio, as = Ac / A)</strong> hesaplanır. Karesel ızgara diziliminde birim hücre alanı A = s² olup alan değiştirme oranı <strong>as = (π / 4) · (D / s)² ≈ 0.785 · (D / s)²</strong> formülüyle bulunur. Eşkenar üçgen (şaşırtmalı / altıgen) dizilimde ise birim hücre alanı A = (√3 / 2) · s² olduğundan alan değiştirme oranı <strong>as = (π / 2√3) · (D / s)² ≈ 0.907 · (D / s)²</strong> değerine ulaşır. Eşkenar üçgen dizilim, aynı aks aralığında %15.5 daha yüksek alan kapsama oranı ve daha üniform radyal drenaj mesafesi sağladığı için sıvılaşma önleme projelerinde öncelikle tercih edilir.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              Adım 4: Kompozit Zemin Eşdeğer Modülü (Eeq) ve Kolon Yapısal/Geoteknik Kapasite Tahkiki
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Rijit ve yarı-rijit kolonlu (Jet Grout, DSM, CMC) sistemlerde temel yükü, kolonların ve çevre zeminin rijitlikleri oranında paylaşılır. Kompozit masifin eşdeğer elastisite modülü <strong>Eeq = Ec · as + Es · (1 - as)</strong> bağıntısıyla modellenir (burada Ec kolon elastisite modülü olup soilcrete için genellikle Ec = 300 · qu ila 500 · qu aralığındadır; Es ise doğal zeminin deformasyon modülüdür). Tasarımda her bir kolon hem <strong>geoteknik kapasite</strong> (çevre sürtünmesi Qs + uç direnci Qb) hem de <strong>yapısal iç ezilme kapasitesi</strong> (Qstr = Ac · fcd) açısından tahkik edilir; iki değerden küçük olanı kolonun güvenli çalışma yükünü belirler.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              Adım 5: Plaxis 2D/3D Sonlu Elemanlar (FEM) ve Dinamik Zaman Tanım Alanında Doğrulama
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Analitik hesaplarla boyutlandırılan zemin iyileştirme sistemi, Plaxis 2D ve Plaxis 3D yazılımlarında <strong>Hardening Soil with Small-Strain Stiffness (HSsmall)</strong> bünye modeli kullanılarak simüle edilir. Kolon-zemin ara yüzeylerinde (interface elemanları, Rinter = 0.65–0.85) sıyrılma ve zımbalama davranışları, grup etkisi, kademeli kazı-inşaat adımları ve deprem yüklemesi altındaki kinematik eğilme momentleri kontrol edilir. Böylece radye temel altına verilecek <strong>eşdeğer yatak katsayısı (ks, kN/m³)</strong> haritası statik proje müellifine milimetrik doğrulukla teslim edilir.
            </p>
          </div>
        </div>
      </div>

      {/* BÖLÜM H: Yük Transfer Platformu (LTP) ve Geogrid Kemerlenme Mühendisliği */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Yük Transfer Platformu (LTP) ve Geosentetik (Geogrid) Kemerlenme Mühendisliği (BS 8006-1 &amp; EBGEO)
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Zemin iyileştirme kolonları (Jet Grout, DSM, Taş Kolon, CMC) imal edildikten sonra radye temel veya saha betonu doğrudan kolon kafalarının üzerine dökülmez; araya mutlaka mühendislik kriterlerine göre boyutlandırılmış granüler bir <strong>Yük Transfer Platformu (LTP — Load Transfer Platform)</strong> teşkil edilir. İngiliz BS 8006-1 ve Alman EBGEO şartnamelerine göre tasarlanan bu tabakanın 4 hayati mühendislik görevi vardır:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              1. Toprak Kemerlenmesi (Soil Arching) ile Yükün Kolonlara Aktarımı
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              İyi derecelenmiş, yüksek içsel sürtünme açısına sahip (φ&apos; ≥ 40°–45°) sıkıştırılmış kırmataş tabaka içerisinde Hewlett &amp; Randolph kemerlenme mekanizması gelişir. Kolonlar arasındaki yumuşak zemin milimetrik olarak esnediğinde, kırmataş taneleri birbirine kenetlenerek doğal bir kubbe (kemer) oluşturur ve üst yapıdan gelen yayılı yükün %75 ila %90&apos;ını doğrudan rijit kolon başlıklarına yönlendirir.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              2. Zımbalama (Punching Shear) ve Noktasal Gerilme Yığılmasının Önlenmesi
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Rijit kolonların doğrudan betonarme radye temele temas etmesi durumunda, kolon başlıklarında aşırı noktasal reaksiyon kuvvetleri (hard spots) ve zımbalama kesme gerilmeleri oluşur. 30 cm ila 60 cm kalınlığında (%98 Modifiye Proctor sıkılığında) serilen LTP yastık tabakası, gerilmeyi üniform yayarak radye temel kalınlığından ve donatıdan büyük tasarruf sağlar.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              3. Geogrid Donatıların Gerilmiş Membran Etkisi (Tensioned Membrane)
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              LTP tabakası içerisine 1 veya 2 katman halinde serilen yüksek modüllü çift eksenli/üç eksenli <strong>polipropilen veya polyester geogridler</strong> (çekme mukavemeti 40 kN/m – 200 kN/m), kolonlar arasındaki düşey yükü çekme kuvvetine dönüştürerek kolon başlıklarına asar. Özellikle lojistik depo döşemeleri, hızlı tren dolguları ve tank temellerinde diferansiyel oturmayı sıfıra indirir.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">
              4. Sismik Enerji Sönümleme ve Drenaj Battaniyesi İşlevi
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Sıvılaşabilir zeminlerde taş kolon veya PVD düşey drenlerden deprem anında yukarı doğru yükselen basınçlı boşluk suyu, temel altında sıkışıp kaldığında kaldırma kuvveti (uplift) yaratır. Yüksek permeabiliteli temiz kırmataş LTP tabakası, yatay bir <strong>drenaj battaniyesi (drainage blanket)</strong> görevi görerek yükselen suyu hızla sönümler ve ayrıca yarı-izolatör etkisiyle deprem kayma dalgalarını filtreler.
            </p>
          </div>
        </div>
      </div>

      {/* BÖLÜM I: Sahada En Sık Yapılan 10 Kritik Zemin İyileştirme Hatası ve YER6 Önlemleri */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Sahada En Sık Yapılan 10 Kritik Zemin İyileştirme Hatası ve YER6 Mühendislik Önlemleri
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Deneyimsiz ekipler tarafından yürütülen zemin iyileştirme uygulamalarında yapılan saha hataları; telafisi çok güç temel oturmalarına, komşu bina hasarlarına ve kabul testlerinin reddedilmesine yol açar. YER6 Geoteknik&apos;in sıfır hata protokolüyle önlediği 10 kritik şantiye kusuru şunlardır:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-sm">
              1. Kuyu Ağzı Pasa (Spoil) Çıkışı Kesildiği Halde Enjeksiyona Devam Edilmesi
            </h3>
            <p className="mt-1.5 text-xs leading-6 text-white/65">
              <strong className="text-gold-200">Tehlike:</strong> Kuyu içi basıncın 400 bar mertebesine fırlayarak zemini yatay çatlatması (hidro-fraktür) ve bitişik binanın temelini kaldırıp çatlatması. <strong className="text-gold-200">YER6 Önlemi:</strong> Pasa dönüşü kesildiği saniye enjeksiyon durdurulur, tij yukarı çekilip düşük basınçlı suyla annulus kanalı açılmadan yüksek basınca geçilmez.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-sm">
              2. Taze Kolon Priz Almadan Hemen Yanındaki Kolonun İmal Edilmesi
            </h3>
            <p className="mt-1.5 text-xs leading-6 text-white/65">
              <strong className="text-gold-200">Tehlike:</strong> Yüksek basınçlı jetin yandaki henüz sıvı/taze kolonu yıkayarak homojenliği bozması ve kuyu göçmesi. <strong className="text-gold-200">YER6 Önlemi:</strong> Zorunlu Primer–Sekonder (dama tahtası) imalat sekansı uygulanır; komşu kolonlar arasında en az 2 kolon mesafe veya 24–48 saat priz süresi bırakılır.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-sm">
              3. Su/Çimento (W/C) Oranının Kontrolsüz Artırılması (Şerbetin Sulandırılması)
            </h3>
            <p className="mt-1.5 text-xs leading-6 text-white/65">
              <strong className="text-gold-200">Tehlike:</strong> Çimento tasarrufu veya kolay pompalama amacıyla W/C oranının 1.5+ yapılması sonucu aşırı su kusma (bleeding), kolon üstünde boşluk ve UCS dayanımının 1 MPa altına düşmesi. <strong className="text-gold-200">YER6 Önlemi:</strong> Otomatik tartımlı mikser ve her saat başı Mud Balance yoğunluk (1.52–1.60 g/cm³) denetimi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-sm">
              4. Yeraltı Suyu Sülfat ve Kimyasal Analizinin Yapılmaması
            </h3>
            <p className="mt-1.5 text-xs leading-6 text-white/65">
              <strong className="text-gold-200">Tehlike:</strong> Sülfatlı veya deniz suyu girişimli zeminlerde standart CEM I çimentosunun ettringit reaksiyonuyla genleşip 2 yıl içinde kolonları içeriden parçalaması. <strong className="text-gold-200">YER6 Önlemi:</strong> Sülfatlı sahalarda sülfata dayanıklı (SR) veya yüksek fırın cüruflu CEM III/B çimento kullanımı.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-sm">
              5. Organik ve Turbalı (Peat) Killerde Standart Karışım Uygulanması
            </h3>
            <p className="mt-1.5 text-xs leading-6 text-white/65">
              <strong className="text-gold-200">Tehlike:</strong> Organik asitlerin (humik asit) ve düşük pH değerinin çimento hidratasyonunu kilitleyerek kolonun aylarca sertleşmemesi. <strong className="text-gold-200">YER6 Önlemi:</strong> Organik içerikli ZF zeminlerde yüksek dozajlı kompozit bağlayıcı veya kılıflı rijit inklüzyon/kazık alternatifine geçiş.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-sm">
              6. Sabit Olmayan Çekme Hızı (Lifting Speed) Nedeniyle Kolon Boğulması (Necking)
            </h3>
            <p className="mt-1.5 text-xs leading-6 text-white/65">
              <strong className="text-gold-200">Tehlike:</strong> Operatörün sert kil merceklerinde tiji hızlı çekmesi sonucu kolon çapının 80 cm&apos;den 35 cm&apos;ye düşmesi ve kesitin orada kırılması. <strong className="text-gold-200">YER6 Önlemi:</strong> Hidrolik kulelerde otomatik kademeli çekme hızı ve BRN (Bıçak Dönüş Sayısı) kilitlemesi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-sm">
              7. Çok Yumuşak Killerde (cu &lt; 15 kPa) Sargısız Taş Kolon Yapılması
            </h3>
            <p className="mt-1.5 text-xs leading-6 text-white/65">
              <strong className="text-gold-200">Tehlike:</strong> Çevre kilin yanal çevreleme basıncı (confinement) sağlayamaması nedeniyle taş kolonun yük altında yanlara doğru şişerek (bulging) göçmesi. <strong className="text-gold-200">YER6 Önlemi:</strong> cu &lt; 15 kPa zeminlerde geotekstil kılıflı taş kolon (GEC) veya çimento bağlayıcılı DSM/Jet Grout uygulaması.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-sm">
              8. Kolon Başlık Kırım ve Tesviyesinin (Trimming) İhmal Edilmesi
            </h3>
            <p className="mt-1.5 text-xs leading-6 text-white/65">
              <strong className="text-gold-200">Tehlike:</strong> Kolonun en üst 50 cm&apos;lik kısmında toplanan çamurlu ve düşük dayanımlı kabuk (sludge zone) temizlenmeden üzerine temel yapılması sonucu ani oturma. <strong className="text-gold-200">YER6 Önlemi:</strong> İmalat kotunun proje çalışma kotundan yukarıda bitirilmesi ve kazı sonrası sağlam kolon çekirdeğine kadar başlık tıraşlaması.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-sm">
              9. Yüksek Hızlı Yeraltı Suyu Akışında Şerbet Yıkanması (Washout)
            </h3>
            <p className="mt-1.5 text-xs leading-6 text-white/65">
              <strong className="text-gold-200">Tehlike:</strong> Çakıllı alüvyonlarda veya nehir kenarlarında hızla akan yeraltı suyunun taze çimento şerbetini priz almadan yıkayıp götürmesi. <strong className="text-gold-200">YER6 Önlemi:</strong> Tiksotropik bentonit ve priz hızlandırıcı sodyum silikat katkılı anti-washout reçete tasarımı.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white text-sm">
              10. Saha Deneme Kolonu Yapılmadan Seri İmalata Geçilmesi
            </h3>
            <p className="mt-1.5 text-xs leading-6 text-white/65">
              <strong className="text-gold-200">Tehlike:</strong> Zemin etüt raporundaki teorik kabullerle binlerce metre kolon imal edilip sonradan çapın veya dayanımın tutmadığının anlaşılması. <strong className="text-gold-200">YER6 Önlemi:</strong> Her şantiyede seri üretim öncesi zorunlu deneme kolonu (trial column) kazısı ve parametre kalibrasyonu.
            </p>
          </div>
        </div>
      </div>

      {/* BÖLÜM J: Sürdürülebilir Yeşil Geoteknik, Karbon Ayak İzi (ESG / LEED) ve Ekonomik Fizibilite */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Yeşil Geoteknik (ESG), Karbon Ayak İzi Azaltımı ve Derin Temellere Göre Maliyet Avantajı
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Günümüzde uluslararası finans kuruluşları (IFC, EBRD, Dünya Bankası), kurumsal sanayi yatırımcıları ve LEED / BREEAM yeşil bina sertifikasyon süreçleri, temel ve zemin mühendisliği aşamasında <strong>Gömülü Karbon (Embodied Carbon — kg CO2e)</strong> ve hafriyat atığı minimizasyonunu zorunlu tutmaktadır. Zemin iyileştirme yöntemleri, geleneksel derin kazı-dolgu (zemin değişimi) ve ağır kazıklı temellere kıyasla hem çevresel hem de finansal açıdan çarpıcı üstünlükler sunar:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-black/40">
          <table className="w-full text-left text-xs text-white/80">
            <thead className="border-b border-white/10 bg-white/10 text-white font-semibold">
              <tr>
                <th className="p-3.5">Karşılaştırma Kriteri</th>
                <th className="p-3.5">Derin Kazı &amp; Zemin Değişimi</th>
                <th className="p-3.5">Geleneksel Kazıklı Temel</th>
                <th className="p-3.5">YER6 Zemin İyileştirme (DSM / Taş Kolon / Jet Grout)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">Maliyet ve Bütçe</td>
                <td className="p-3.5">Derin iksa, su tahliyesi ve binlerce kamyon nakliye nedeniyle çok yüksek</td>
                <td className="p-3.5">Yüksek beton (C30/37) ve donatı çeliği (B420C) tonajı nedeniyle yüksek</td>
                <td className="p-3.5">%30 ila %55 daha ekonomik; mevcut zemin agrega olarak yerinde değerlendirilir</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">İmalat Süresi</td>
                <td className="p-3.5">Kazı, nakliye ve tabaka tabaka sıkıştırma nedeniyle yavaş</td>
                <td className="p-3.5">Demir kafes hazırlığı ve beton dökümü nedeniyle orta hızda (60–100 m/gün)</td>
                <td className="p-3.5">Çok yüksek üretim hızı (makine başına 250 ila 500 m/gün seri imalat)</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">Karbon Ayak İzi (CO2)</td>
                <td className="p-3.5">Yoğun kamyon trafiği ve doğal taş ocağı tüketimi nedeniyle çok yüksek</td>
                <td className="p-3.5">Çelik ve yüksek dozajlı hazır beton üretimi nedeniyle yüksek</td>
                <td className="p-3.5">%40–65 daha düşük karbon salımı (özellikle Taş Kolon ve CEM III cüruflu DSM&apos;de)</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">Radye Temel Kesiti</td>
                <td className="p-3.5">Kalın dolgu üzerinde orta kalınlıkta radye gerektirir</td>
                <td className="p-3.5">Kazık başlıklarında yüksek zımbalama ve eğilme momenti nedeniyle kalın radye</td>
                <td className="p-3.5">LTP şiltesi sayesinde üniform yatak katsayısı; radye beton ve demirinde %20–30 tasarruf</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* BÖLÜM K: YER6 Geoteknik Makine Parkuru ve Saha Operasyon Kapasitesi */}
      <div className="rounded-[2rem] border border-gold-300/30 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          YER6 Geoteknik Makine Parkuru, Otomasyon Altyapısı ve Operasyonel Gücü
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Zemin iyileştirme projelerinde tasarım ne kadar kusursuz olursa olsun, sahadaki imalat kalitesini belirleyen nihai unsur makine parkının mekanik torku, yüksek basınç pompa kapasitesi ve operatör-mühendis tecrübesidir. YER6 Geoteknik, Türkiye genelinde eş zamanlı çoklu şantiye yürütebilen geniş makine filosuna sahiptir:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">Yüksek Basınçlı Jet Grout Santralleri</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Soilmec SM-14, Casagrande ve Comacchio modüler delgi kuleleri; 400–600 bar çalışma basıncına ve 450 lt/dk debiye sahip Soilmec 5T-400J, Metax ve Tecniwell tripleks pompa üniteleri; tam otomatik gravimetrik kolloidal mikserler ve 60–100 tonluk çimento siloları.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">DSM ve Ağır Rotary Delgi Kuleleri</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Bauer BG 45 (461 kNm tork) ve Bauer BG 28 H (277 kNm tork) ağır hizmet rotary kuleleri; tek ve çift milli (twin-shaft) Deep Soil Mixing karıştırma ataşmanları, gerçek zamanlı BRN, tork ve debi kayıt bilgisayarları.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-gold-200 text-base">Dar Alan, Bina Altı ve İksa Üniteleri</h3>
            <p className="mt-2 text-xs leading-6 text-white/70">
              Mevcut binaların bodrum katlarında (2.20 m tavan yüksekliği) ve dar şehir içi parsellerde çalışabilen kompakt paletli mini kazık / ankraj / bina altı jet grout makineleri, hidrolik öngerme krikoları ve saha test (PIT, yükleme) ekipmanları.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="text-xs text-white/60">
            Projenizin sondaj loglarını (SPT/CPT) ve mimari/statik vaziyet planını iletin; 24 saat içinde ön geoteknik değerlendirme ve metraj çalışmasını ücretsiz paylaşalım.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/equipment-fleet"
              className="rounded-full border border-gold-300/40 bg-white/5 px-4 py-2 text-xs font-semibold text-gold-200 transition hover:bg-white/10"
            >
              Makine Parkurunu İncele &rarr;
            </Link>
            <Link
              href="/kalite-kontrol-saha-testleri"
              className="rounded-full border border-gold-300/40 bg-white/5 px-4 py-2 text-xs font-semibold text-gold-200 transition hover:bg-white/10"
            >
              Kalite Kontrol &amp; Saha Testleri &rarr;
            </Link>
          </div>
        </div>
      </div>


      {/* BÖLÜM L: Uluslararası Standartlara Göre Zemin İyileştirme Tolerans ve Şartname Kabul Sınırları */}
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Uluslararası Standartlara Göre Zemin İyileştirme İmalat Toleransları ve Kabul Kriterleri
        </h2>
        <p className="mt-3 text-sm leading-7 text-white/70">
          Bir zemin iyileştirme projesinde müşavirlik, yapı denetim ve idare kabullerinin sorunsuz tamamlanması için imalatların Avrupa Normları (TS EN 12716 Jet Grout, TS EN 14679 DSM, TS EN 14731 Vibro-Taş Kolon, TS EN 1536 Fore Kazık, TS EN 14199 Mikrokazık) ve TBDY 2018 Bölüm 16 sınır değerleri içinde kalması zorunludur. YER6 Geoteknik şantiyelerinde uygulanan resmi kalite kabul ve tolerans matrisi aşağıdadır:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-white/10 bg-black/40">
          <table className="w-full text-left text-xs text-white/80">
            <thead className="border-b border-white/10 bg-white/10 text-white font-semibold">
              <tr>
                <th className="p-3.5">Denetim Parametresi</th>
                <th className="p-3.5">İlgili Standart / Norm</th>
                <th className="p-3.5">İzin Verilen Şantiye Toleransı</th>
                <th className="p-3.5">Ölçüm Yöntemi ve Sıklığı</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">Planda Aks (Merkez) Kayması</td>
                <td className="p-3.5">TS EN 12716 / TS EN 14679</td>
                <td className="p-3.5">Tekil kolonlarda ≤ 50–75 mm; kesişen perdelerde ≤ 25–40 mm</td>
                <td className="p-3.5">Her kolonda Total Station / RTK-GPS aplikasyonu</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">Düşeylik (İnklinasyon) Sapması</td>
                <td className="p-3.5">TS EN 12716 / TS EN 1536</td>
                <td className="p-3.5">Düşey kolonlarda ≤ %1.0 – %1.5 (20 m derinlikte maks. 20–30 cm)</td>
                <td className="p-3.5">Her kolonda kule üzeri çift eksenli dijital eğimölçer (inclinometer)</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">Fiili Kolon Çapı (D)</td>
                <td className="p-3.5">TS EN 12716 / TS EN 14679</td>
                <td className="p-3.5">Proje tasarım çapından küçük olamaz (Dfiili ≥ Dtasarım)</td>
                <td className="p-3.5">İmalat öncesi en az 3 adet Deneme Kolonu kazısı ve çap ölçümü</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">Şerbet Özgül Ağırlığı (Yoğunluk)</td>
                <td className="p-3.5">ASTM D4380 / API RP 13B</td>
                <td className="p-3.5">W/C = 1.0 için 1.51 ± 0.03 g/cm³; W/C = 0.8 için 1.60 ± 0.03 g/cm³</td>
                <td className="p-3.5">Her vardiyada en az 4 kez Çamur Terazisi (Mud Balance) testi</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">Şerbet Viskozitesi ve Su Kusma</td>
                <td className="p-3.5">ASTM C940 / TS EN 445</td>
                <td className="p-3.5">Marsh hunisi: 32–45 sn; 2 saatlik su kusma (bleeding) ≤ %2.0</td>
                <td className="p-3.5">Her vardiyada Marsh hunisi ve 1000 ml dereceli silindir deneyi</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">DSM Bıçak Dönüş Sayısı (BRN)</td>
                <td className="p-3.5">TS EN 14679 / FHWA-HRT-13-046</td>
                <td className="p-3.5">Killi/siltli zeminlerde BRN ≥ 350 devir/m; kumlarda BRN ≥ 250 devir/m</td>
                <td className="p-3.5">Her kolonda MWD otomasyon bilgisayarı çıktısı</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">28 Günlük UCS Basınç Dayanımı</td>
                <td className="p-3.5">ASTM D2166 / TS EN 13286-41</td>
                <td className="p-3.5">Killi zeminlerde 1.5–4.0 MPa; kum-çakıllı zeminlerde 5.0–15.0 MPa</td>
                <td className="p-3.5">Her 500–1000 m imalatta tam boy PQ/HQ karot ve laboratuvar kırım testi</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-gold-200">Kolon / Plaka Yükleme Deneyi</td>
                <td className="p-3.5">ASTM D1194 / ASTM D1143</td>
                <td className="p-3.5">1.5 × Qservis yükünde oturma ve 2.0 × Qservis göçmeme kriteri</td>
                <td className="p-3.5">Kolon sayısının %1–2&apos;si oranında (her şantiyede min. 2–3 adet) saha yükleme testi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-4 text-sm leading-7 text-white/70">
          <p>
            <strong>Zemin İyileştirme Raporlama ve Resmi Teslim Dosyası (As-Built Dossier):</strong> YER6 Geoteknik, saha imalatları tamamlandığında işverene, müellif geoteknik mühendisine ve ilgili belediye/yapı denetim makamlarına eksiksiz bir <strong>Geoteknik İmalat Sonu (As-Built) Kabul Dosyası</strong> teslim eder. Bu dosyada; imal edilen tüm kolonların numaralandırılmış vaziyet planı, her bir kolona ait başlangıç-bitiş saatleri, delgi derinliği, harcanan net çimento/kırmataş miktarı, dijital Data-Logger grafik çıktıları, çimento fabrika kalite (CE/TSE) belgeleri, taze şerbet yoğunluk tutanakları, tam boy karot sandığı fotoğrafları, akredite laboratuvar UCS basınç dayanımı raporları, PIT süreklilik sinyalleri ve statik plaka/kolon yükleme deneyi yük-deplasman eğrileri ıslak imzalı olarak yer alır.
          </p>
          <p>
            Bu bütüncül mühendislik disiplini sayesinde yatırımcılar ve ana müteahhitler; yapı ruhsatı, iş bitirme, banka/sigorta denetimi ve uluslararası müşavirlik onay süreçlerini sıfır pürüzle tamamlar. Teorik denklemler, sıvılaşma tetiklenme formülleri ve ISSMGE karar ağacı matrisinin tüm matematiksel türevleri için <Link href="/knowledge/zemin-iyilestirme-yontemleri/" className="text-gold-200 hover:underline font-medium">Zemin İyileştirme Yöntemleri, ISSMGE Karar Ağacı ve Sıvılaşma Tasarım Rehberi</Link> ile <Link href="/knowledge/yer-alti-zemin-iyilestirme/" className="text-gold-200 hover:underline font-medium">Yer Altı Zemin İyileştirme Rehberi</Link> yayınlarımızı da inceleyebilirsiniz.
          </p>
        </div>
      </div>

    </div>
  );
}
