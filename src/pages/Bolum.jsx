import { useState } from 'react';
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
    { name: "Makine Mühendisliği", desc: "Makine tasarımı, üretimi ve bakımı alanında eğitim verir." }
  ],
  "Sağlık": [
    { name: "Hemşirelik", desc: "Sağlık sisteminde önemli rol oynayan sağlık personelini yetiştirir." },
    { name: "Eczacılık", desc: "İlaç üretimi, kullanımı ve etkileri üzerine eğitim verir." },
    { name: "Fizyoterapi", desc: "Hareket bozukluklarının tedavisi üzerine eğitim verir." }
  ],
  "İktisat ve İşletme": [
    { name: "İktisat", desc: "Ekonomik teoriler ve uygulamalar hakkında eğitim verir." },
    { name: "İşletme", desc: "Şirket yönetimi ve organizasyon hakkında eğitim verir." }
  ],
  "Fen Edebiyat": [
    { name: "Matematik", desc: "Matematiksel teoriler ve uygulamalar öğretir." },
    { name: "Fizik", desc: "Doğa yasalarını ve fiziksel olayları inceler." }
  ]
};

  const [activeCategory, setActiveCategory] = useState("Mühendislik"); 

  return (

    <>
    <div className="min-h-screen">
    <Navbar />

    <div className="p-8 mt-24 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Bölümler</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {Object.keys(kategoriler).map(kAd => (
          <button
            key={kAd}
            onClick={() => setActiveCategory(kAd)}
            className={`px-4 py-2 cursor-pointer rounded border ${kAd === activeCategory ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'}`}
          >
            {kAd}
          </button>
        ))}
      </div>
      <div>
        {kategoriler[activeCategory].map((dept, index) => (
          <div key={index} className="mb-4 border-b pb-2">
            <h2 className="text-xl font-semibold">{dept.name}</h2>
            <p className="text-gray-600">{dept.desc}</p>
          </div>
        ))}
      </div>
    </div>    
    </div>
    <Footer />

    </>

  );
}

export default Bolum;