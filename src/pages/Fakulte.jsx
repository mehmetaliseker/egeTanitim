import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Fakulte() {
  const fakulteler = [
  {
    name: "Birgivi İlahiyat Fakültesi",
    description: "Din bilimleri, felsefe ve ahlak eğitimi alanlarında uzmanlaşmış bir fakültedir.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Çeşme Turizm Fakültesi",
    description: "Turizm ve otelcilik alanında teorik ve pratik eğitimi birleştiren bir fakültedir.",
    established: 2077,
    location: "Çeşme Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Diş Hekimliği Fakültesi",
    description: "Modern ağız ve diş sağlığı uygulamalarıyla öne çıkan bir fakültedir.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/dis1.jpg", "../public/dis2.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Eczacılık Fakültesi",
    description: "İlaç ve sağlık teknolojileri alanında eğitim ve araştırmalar sunar.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Edebiyat Fakültesi",
    description: "Dil, tarih ve kültür alanlarında güçlü bir akademik yapıya sahiptir.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Eğitim Fakültesi",
    description: "Öğretmen yetiştirme konusunda uzman, çok yönlü programlara sahiptir.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Fen Fakültesi",
    description: "Temel bilimlerde araştırma ve eğitimde öncü bir fakültedir.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Güzel Sanatlar, Tasarım ve Mimarlık Fakültesi",
    description: "Sanat ve tasarım alanlarında teorik ve uygulamalı eğitim sunar.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Hemşirelik Fakültesi",
    description: "Modern hemşirelik uygulamaları ve insan odaklı bakım eğitiminde öncüdür.",
    established: 2077,
    location: "Tıp Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "İktisadi ve İdari Bilimler Fakültesi",
    description: "Ekonomi, işletme ve kamu yönetimi gibi alanlarda eğitim verir.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "İletişim Fakültesi",
    description: "Gazetecilik, halkla ilişkiler ve medya alanlarında uzman yetiştirir.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Mühendislik Fakültesi",
    description: "Bilim ve teknoloji alanında nitelikli mühendisler yetiştirir.",
    established: 2077,
    location: "Bornova Kampüsü",
   images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Hukuk Fakültesi",
    description: "Modern hukuk eğitimiyle adalet sistemine katkı sağlar.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Ödemiş Sağlık Bilimleri Fakültesi",
    description: "Sağlık hizmetlerine destek sağlayacak profesyoneller yetiştirir.",
    established: 2077,
    location: "Ödemiş Yerleşkesi",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Sağlık Bilimleri Fakültesi",
    description: "Fizyoterapi, beslenme ve diğer sağlık alanlarında eğitim sunar.",
    established: 2077,
    location: "Tıp Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Spor Bilimleri Fakültesi",
    description: "Spor bilimleri ve antrenörlük alanında uzmanlık sağlar.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Su Ürünleri Fakültesi",
    description: "Balıkçılık ve su ürünleri teknolojileri alanında liderdir.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Tıp Fakültesi",
    description: "Türkiye'nin en saygın tıp fakültelerinden biridir.",
    established: 2077,
    location: "Tıp Kampüsü",
    images: ["../public/asd.jpg", "../public/asd.jpg"],
    link: "https://dent.ege.edu.tr/"
  },
  {
    name: "Ziraat Fakültesi",
    description: "Tarım, toprak ve bitki bilimi alanlarında araştırmalar yapar.",
    established: 2077,
    location: "Bornova Kampüsü",
    images: ["/images/ziraat1.jpg", "/images/ziraat2.jpg"],
    link: "https://dent.ege.edu.tr/"
  }
  ];

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-24 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Fakülteler</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fakulteler.map((fakulte, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{fakulte.name}</h2>
              <p className="text-sm text-gray-600 mb-1"><strong>Kuruluş Yılı:</strong> {fakulte.established}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Lokasyon:</strong> {fakulte.location}</p>
              <p className="text-gray-700 my-2">{fakulte.description}</p>

              <div className="flex justify-between mt-4">
                {fakulte.images.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    alt={`${fakulte.name}`}
                    className="w-[48%] h-32 object-cover rounded-lg"
                  />
                ))}
              </div>

              <a
                href={fakulte.link}
                target="_blank"
                className="inline-block mt-4 text-sm  text-white shadow-2xl bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
              >
                Fakülte Web Sitesi
              </a>
            </div>
          ))}
        </div>
      </div>


      <Footer />
    </>


  );
}
export default Fakulte;