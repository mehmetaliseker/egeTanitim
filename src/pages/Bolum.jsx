import { useRef, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kategoriler from '../data/kategoriler.json';

function Bolum() {

  // kategoriler.json dosyasindan bolumleri aldim

  // const kategoriler = {
  //   "Mühendislik Fakültesi": [
  //     { name: "Bilgisayar Mühendisliği (İngilizce)", desc: "Yapay zeka, yazılım ve sistem tasarımı eğitimleri." },
  //     { name: "Elektrik‑Elektronik Mühendisliği (İngilizce)", desc: "Elektronik ve enerji sistemleri üzerinde çalışır." },
  //     { name: "İnşaat Mühendisliği (İngilizce)", desc: "Yapı, altyapı projeleri tasarım ve yönetimi." },
  //     { name: "Makine Mühendisliği (İngilizce)", desc: "Makine sistemleri ve üretim mühendisliği." },
  //     { name: "Kimya Mühendisliği (İngilizce)", desc: "Proses, malzeme ve kimyasal üretim mühendisliği." },
  //     { name: "Gıda Mühendisliği (İngilizce)", desc: "Gıda üretim teknolojileri ve güvenliği." },
  //     { name: "Biyomühendislik (İngilizce)", desc: "Biyolojik sistemlerin mühendislik çözümleri." },
  //     { name: "Deri Mühendisliği (İngilizce)", desc: "Deri işleme ve süreç teknolojileri." },
  //     { name: "Tekstil Mühendisliği (İngilizce)", desc: "Tekstil teknolojisi ve üretim sistemleri." }
  //   ],
  //   "Edebiyat Fakültesi": [
  //     { name: "Alman Dili ve Edebiyatı (Almanca)", desc: "Alman dili ve edebiyatı eğitimi." },
  //     { name: "Almanca Mütercim‑Tercümanlık", desc: "Almanca çeviri ve dilbilim." },
  //     { name: "Amerikan Kültürü ve Edebiyatı (İngilizce)", desc: "ABD edebiyatı ve kültürü." },
  //     { name: "İngiliz Dili ve Edebiyatı (İngilizce)", desc: "İngiliz dili edebiyatı dersleri." },
  //     { name: "İngilizce Mütercim‑Tercümanlık", desc: "İngilizce çeviri-nosyon eğitimi." },
  //     { name: "Klasik Arkeoloji", desc: "Antik dönem arkeolojik araştırmalar." },
  //     { name: "Protohistorya ve Ön Asya Arkeolojisi", desc: "Tarih öncesi uygarlıkların incelemesi." },
  //     { name: "Coğrafya", desc: "Dünya sistemleri, beşeri ve fiziksel coğrafya." },
  //     { name: "Felsefe", desc: "Temel filozofik düşünceler ve yaklaşımlar." },
  //     { name: "Felsefe (KKTC Uyruklu)", desc: "KKTC öğrencilerine yönelik felsefe programı." },
  //     { name: "Psikoloji", desc: "Davranışsal ve zihinsel süreçlerin incelenmesi." },
  //     { name: "Sanat Tarihi", desc: "Sanat eserlerinin tarihi ve eleştirisi." },
  //     { name: "Sosyoloji", desc: "Toplumsal yapı ve etkileşimler." },
  //     { name: "Tarih", desc: "Tarihsel dönemleri ve olayları analiz eder." },
  //     { name: "Tarih (KKTC Uyruklu)", desc: "KKTC öğrencileri için tarih genişletilmiş programı." },
  //     { name: "Türk Dili ve Edebiyatı", desc: "Türk edebiyat tarihine odaklanır." }
  //   ],
  //   "Fen Fakültesi": [
  //     { name: "Astronomi ve Uzay Bilimleri", desc: "Evrensel süreçler ve gök cisimlerini inceler." },
  //     { name: "Biyokimya", desc: "Canlıların moleküler yapısını analiz eder." },
  //     { name: "Biyokimya (KKTC Uyruklu)", desc: "KKTC öğrencilerine yönelik program." },
  //     { name: "Biyoloji", desc: "Canlı organizmaların yapısı ve işleyişi." },
  //     { name: "Fizik", desc: "Doğa olaylarını temel fiziğe dayalı inceler." },
  //     { name: "İstatistik", desc: "Veri analizi ve olasılıksal modeller oluşturur." },
  //     { name: "Matematik", desc: "Teorik ve uygulamalı matematik konuları." },
  //     { name: "Kimya", desc: "Maddenin yapısı ve reaksiyonları." }
  //   ],
  //   "Eğitim Fakültesi": [
  //     { name: "Bilgisayar ve Öğretim Teknolojileri Öğretmenliği", desc: "Eğitim teknolojileri öğretimi." },
  //     { name: "Fen Bilgisi Öğretmenliği", desc: "Fen eğitimi öğretmenliği." },
  //     { name: "Okul Öncesi Öğretmenliği", desc: "Erken çocukluk dönemi eğitimi." },
  //     { name: "Özel Eğitim Öğretmenliği", desc: "İhtiyacı olan bireylerin eğitimi." },
  //     { name: "Rehberlik ve Psikolojik Danışmanlık", desc: "Okullarda rehberlik hizmetleri." },
  //     { name: "Sınıf Öğretmenliği", desc: "İlkokul düzeyinde genel öğretmenlik." },
  //     { name: "Sosyal Bilgiler Öğretmenliği", desc: "Tarih, coğrafya öğretimi." },
  //     { name: "Türkçe Öğretmenliği", desc: "Türk dili eğitimi." }
  //   ],
  //   "Birgivi İlahiyat Fakültesi": [
  //     { name: "İlahiyat", desc: "Temel din bilimleri alanında eğitim verir." },
  //     { name: "İlahiyat (M.T.O.K.)", desc: "Arap dünyası öğrencileri için özel program." }
  //   ],
  //   "İletişim Fakültesi": [
  //     { name: "Gazetecilik", desc: "Haber medya üretimi ve gazetecilik." },
  //     { name: "Halkla İlişkiler ve Tanıtım", desc: "Kurumsal iletişim ve halkla ilişkiler." },
  //     { name: "Radyo, Televizyon ve Sinema", desc: "Medya yapımı ve film eğitimi." },
  //     { name: "Reklamcılık", desc: "Reklam planlama ve kampanya yönetimi." }
  //   ],
  //   "İktisadi ve İdari Bilimler Fakültesi": [
  //     { name: "İktisat", desc: "Ekonomi teorisi ve piyasalar." },
  //     { name: "İşletme", desc: "Şirket yönetimi ve organizasyon." },
  //     { name: "Uluslararası İlişkiler", desc: "Küresel siyaset ve diplomasi." },
  //     { name: "Maliye", desc: "Kamu finansmanı ve vergi politikaları." }
  //   ],
  //   "Sağlık Bilimleri Fakültesi": [
  //     { name: "Beslenme ve Diyetetik", desc: "Sağlıklı beslenme danışmanlığı." },
  //     { name: "Ebelik", desc: "Doğum ve kadın sağlığı." },
  //     { name: "Fizyoterapi ve Rehabilitasyon", desc: "Hareket sistemi tedavisi." },
  //     { name: "Hemşirelik", desc: "Hastaya bakım ve sağlık hizmeti." },
  //     { name: "Odyoloji", desc: "İşitme ve denge bozukluklarının incelenmesi." }
  //   ],
  //   "Eczacılık Fakültesi": [
  //     { name: "Eczacılık", desc: "İlaç geliştirme ve kullanımı." }
  //   ],
  //   "Diş Hekimliği Fakültesi": [
  //     { name: "Diş Hekimliği", desc: "Diş sağlığı ve tedavi uygulamaları." }
  //   ],
  //   "Tıp Fakültesi": [
  //     { name: "Tıp", desc: "Hekimlik mesleğine hazırlık eğitimi." }
  //   ],
  //   "Ziraat Fakültesi": [
  //     { name: "Bahçe Bitkileri", desc: "Meyve ve sebze üretim teknolojisi." },
  //     { name: "Bitki Koruma", desc: "Bitki hastalıkları ve zararlılarla mücadele." },
  //     { name: "Peyzaj Mimarlığı", desc: "Dış mekan tasarımı ve planlaması." },
  //     { name: "Süt Teknolojisi", desc: "Süt üretim ve ürün teknolojileri." },
  //     { name: "Tarım Ekonomisi", desc: "Tarım işletmelerinin finans yönetimi." },
  //     { name: "Tarım Makineleri ve Teknolojileri Mühendisliği", desc: "Tarım teknolojisi ve ekipmanları." },
  //     { name: "Tarımsal Yapılar ve Sulama", desc: "Sulama sistemleri ve yapı teknolojileri." },
  //     { name: "Tarla Bitkileri", desc: "Tahıl, baklagil üretimi." },
  //     { name: "Toprak Bilimi ve Bitki Besleme", desc: "Toprak verimliliği ve gübreleme." },
  //     { name: "Zootekni", desc: "Hayvan besleme ve yetiştiriciliği." }
  //   ],
  //   "Su Ürünleri Fakültesi": [
  //     { name: "Su Ürünleri Mühendisliği", desc: "Balıkçılık ve su ürünleri teknolojisi." }
  //   ],
  //   "Güzel Sanatlar, Tasarım ve Mimarlık Fakültesi": [
  //     { name: "Görsel İletişim Tasarımı", desc: "Grafik ve multimedya tasarım." },
  //     { name: "Moda Tasarımı", desc: "Kıyafet ve moda yaratımı." }
  //   ],
  //   "Spor Bilimleri Fakültesi": [
  //     { name: "Beden Eğitimi ve Spor Öğretimi", desc: "Spor öğretmenliği." },
  //     { name: "Hareket ve Antrenman Bilimleri", desc: "Spor performans analizi." },
  //     { name: "Spor Sağlık Bilimleri", desc: "Spor yaralanmaları ve sağlık." }
  //   ]
  // };

  const [containerHeight, setContainerHeight] = useState(0);
  const slideRefs = useRef([]);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: index => {
      if (slideRefs.current[index]) {
        const height = slideRefs.current[index].offsetHeight;
        setContainerHeight(height);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (slideRefs.current[0]) {
        setContainerHeight(slideRefs.current[0].offsetHeight);
      }
    }, 50);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-y-hidden">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-3xl font-bold mb-10 text-center">Bölümler</h1>

        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="fixed left-1/5 top-1/2 transform -translate-y-1/2 text-3xl text-blue-500 hover:text-blue-800 z-10"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={() => sliderRef.current.slickNext()}
          className="fixed right-1/5 top-1/2 transform -translate-y-1/2 text-3xl text-blue-500 hover:text-blue-800 z-10"
        >
          <FaArrowRight />
        </button>

        <div
          className="transition-all duration-500 w-full max-w-4xl relative"
          style={{
            height: `${containerHeight}px`,
          }}
        >
          <Slider ref={sliderRef} {...settings}>
            {Object.entries(kategoriler).map(([kategori, bolumler], i) => (
              <div
                key={i}
                className="p-4 rounded-xl px-6"
                ref={(el) => (slideRefs.current[i] = el)}
              >
                <h2 className="text-2xl border-b pb-2 font-semibold mb-4 text-center text-blue-700">
                  {kategori}
                </h2>
                {bolumler.map((dept, j) => (
                  <div
                    key={j}
                    className="mb-4 border-b pb-2 transform transition-transform duration-300 hover:scale-105 hover:bg-blue-50 p-2 group"
                  >
                    <h3 className="text-xl font-semibold group-hover:text-blue-700">
                      {dept.name}
                    </h3>
                    <p className="text-gray-600 transition-opacity duration-300 mt-2">
                      {dept.desc}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* footer koyunca sayfa boyutuyla ilgili sorun oluyor */}
      <Footer />
    </div>
  );
}

export default Bolum;
