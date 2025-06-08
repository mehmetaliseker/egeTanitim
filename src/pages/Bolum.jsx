import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Bolum() {
const kategoriler = {
  "Mühendislik": [
    { name: "Bilgisayar Mühendisliği", desc: "Yapay zeka, yazılım, donanım alanlarında eğitim verir." },
    { name: "Elektrik-Elektronik Mühendisliği", desc: "Enerji, elektronik sistemler üzerine uzmanlaşır." },
    { name: "Makine Mühendisliği", desc: "Makine tasarımı, üretimi ve bakımı alanında eğitim verir." },
    { name: "İnşaat Mühendisliği", desc: "Yapıların tasarımı, inşası ve denetimi konularında eğitim verir." },
    { name: "Gıda Mühendisliği", desc: "Gıda üretimi, güvenliği ve teknolojisi üzerine çalışır." }
  ],
  "Sağlık": [
    { name: "Hemşirelik", desc: "Sağlık sisteminde önemli rol oynayan sağlık personelini yetiştirir." },
    { name: "Eczacılık", desc: "İlaç üretimi, kullanımı ve etkileri üzerine eğitim verir." },
    { name: "Fizyoterapi", desc: "Hareket bozukluklarının tedavisi üzerine eğitim verir." },
    { name: "Beslenme ve Diyetetik", desc: "Sağlıklı beslenme ve diyet planlaması konularında uzman yetiştirir." },
    { name: "Tıp", desc: "Hekimlik mesleği için teorik ve pratik eğitim verir." }
  ],
  "İktisat ve İşletme": [
    { name: "İktisat", desc: "Ekonomik teoriler ve uygulamalar hakkında eğitim verir." },
    { name: "İşletme", desc: "Şirket yönetimi ve organizasyon hakkında eğitim verir." },
    { name: "Uluslararası İlişkiler", desc: "Küresel politika ve diplomasi üzerine çalışır." },
    { name: "Maliye", desc: "Kamu harcamaları, bütçe ve vergi sistemleri üzerine eğitim verir." }
  ],
  "Fen Edebiyat": [
    { name: "Matematik", desc: "Matematiksel teoriler ve uygulamalar öğretir." },
    { name: "Fizik", desc: "Doğa yasalarını ve fiziksel olayları inceler." },
    { name: "Kimya", desc: "Maddelerin yapısını, bileşimini ve tepkimelerini inceler." },
    { name: "Biyoloji", desc: "Canlıların yapısı, işleyişi ve evrimi üzerine çalışır." },
    { name: "Türk Dili ve Edebiyatı", desc: "Türk dili ve edebiyatı tarihi üzerine eğitim verir." }
  ],
  "Ziraat Fakültesi": [
    { name: "Tarım Ekonomisi", desc: "Tarım ve ekonomi ilişkisini analiz eder." },
    { name: "Bahçe Bitkileri", desc: "Meyve, sebze ve süs bitkileri yetiştiriciliği üzerine eğitim verir." },
    { name: "Tarla Bitkileri", desc: "Tahıllar, baklagiller ve endüstri bitkileri konularında uzmanlık sunar." },
    { name: "Zootekni", desc: "Hayvan yetiştiriciliği ve ıslahı konularında eğitim verir." }
  ]
};


  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="min-h-screen">
        <Navbar />

        <div className="p-8 mt-24 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-10 text-center">Bölümler</h1>

          <div className="flex justify-between mb-4 items-center">
            <button onClick={() => sliderRef.current.slickPrev()} className="text-2xl text-blue-600 hover:text-blue-800">
              <FaArrowLeft />
            </button>
            <button onClick={() => sliderRef.current.slickNext()} className="text-2xl text-blue-600 hover:text-blue-800">
              <FaArrowRight />
            </button>
          </div>

          <Slider ref={sliderRef} {...settings}>
            {Object.entries(kategoriler).map(([kategori, bolumler], i) => (
              <div key={i} className="p-4 rounded-xl bg-white ">
                <h2 className="text-2xl border-b pb-2 font-semibold mb-4 text-center text-blue-700">{kategori}</h2>
                {bolumler.map((dept, j) => (
                  <div key={j} className="mb-4 border-b pb-2">
                    <h3 className="text-xl font-semibold">{dept.name}</h3>
                    <p className="text-gray-600">{dept.desc}</p>
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Bolum;
