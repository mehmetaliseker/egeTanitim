import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';


function Fakulte() {
  const fakulteler = [
    {
      name: "Birgivi İlahiyat Fakültesi",
      description: "İslam ilimleri, din eğitimi ve felsefe alanlarında eğitim verir. Akademik ve etik değerlere önem verir.",
      established: 2018,
      location: "Bornova Kampüsü",
      images: ["/ilahiyat2.jpg", "/ilahiyat1.jpg"],
      link: "https://biif.ege.edu.tr/" 
    },
    {
      name: "Çeşme Turizm Fakültesi",
      description: "Turizm, otelcilik ve gastronomi alanlarında uzmanlaşmıştır. Uygulamalı eğitim ve sektörel iş birlikleriyle dikkat çeker.",
      established: 1998,
      location: "Çeşme Kampüsü",
      images: ["/turizm1.jpg", "/turizm2.jpg"],
      link: "https://turizm.ege.edu.tr/" 
    },
    {
      name: "Diş Hekimliği Fakültesi",
      description: "Modern klinik imkanlarla ağız ve diş sağlığı eğitimi sunar. Hem teorik hem uygulamalı eğitimle öğrencilerini donatır.",
      established: 1968,
      location: "Bornova Kampüsü",
      images: ["/dis1.jpg", "/dis2.jpg"],
      link: "https://dent.ege.edu.tr/" 
    },
    {
      name: "Eczacılık Fakültesi",
      description: "İlaç ve sağlık teknolojileri üzerine eğitim ve araştırmalar yapar. İlaç sektörüne nitelikli eczacılar kazandırır.",
      established: 1975,
      location: "Bornova Kampüsü",
      images: ["/eczacilik1.jpg", "/eczacilik2.jpg"],
      link: "https://eczacilik.ege.edu.tr/" 
    },
    {
      name: "Edebiyat Fakültesi",
      description: "Dil, tarih, edebiyat ve kültür alanlarında geniş bir eğitim yelpazesi sunar. Akademik araştırmalarla öne çıkar.",
      established: 1955,
      location: "Bornova Kampüsü",
      images: ["/edebiyat1.png", "/edebiyat2.jpg"],
      link: "https://edebiyat.ege.edu.tr/" 
    },
    {
      name: "Eğitim Fakültesi",
      description: "Öğretmenlik ve eğitim bilimleri alanında uzmanlar yetiştirir. Teorik ve uygulamalı eğitim programlarına sahiptir.",
      established: 1955,
      location: "Bornova Kampüsü",
      images: ["/egitim1.webp", "/egitim2.webp"],
      link: "https://egitim.ege.edu.tr/" 
    },
    {
      name: "Fen Fakültesi",
      description: "Temel bilimlerde araştırma ve eğitim verir. Fizik, kimya, biyoloji gibi disiplinlerde akademik faaliyet yürütür.",
      established: 1955,
      location: "Bornova Kampüsü",
      images: ["/fen1.jpg", "/fen2.webp"],
      link: "https://fen.ege.edu.tr/" 
    },
    {
      name: "Güzel Sanatlar, Tasarım ve Mimarlık Fakültesi",
      description: "Sanat, tasarım ve mimarlık alanlarında eğitim sunar. Yaratıcı projeler ve uygulamalı çalışmalarla öne çıkar.",
      established: 1992,
      location: "Bornova Kampüsü",
      images: ["/gsmtf1.jpg", "/gsmtf2.jpg"],
      link: "https://gstmf.ege.edu.tr/" 
    },
    {
      name: "Hemşirelik Fakültesi",
      description: "Sağlık sektörüne modern hemşireler kazandırır. Klinik uygulamalar ve etik değerlere önem verir.",
      established: 2018,
      location: "Tıp Kampüsü",
      images: ["/hemsirelik1.jpg", "/hemsirelik2.jpg"],
      link: "https://hemsirelik.ege.edu.tr/" 
    },
    {
      name: "İktisadi ve İdari Bilimler Fakültesi",
      description: "İktisat, işletme, kamu yönetimi gibi alanlarda eğitim verir. Sektöre yönelik teorik ve pratik bilgiler sunar.",
      established: 1955,
      location: "Bornova Kampüsü",
      images: ["/iktisat1.webp", "/iktisat2.jpg"],
      link: "https://iibf.ege.edu.tr/" 
    },
    {
      name: "İletişim Fakültesi",
      description: "Gazetecilik, halkla ilişkiler ve medya alanında eğitim verir. Uygulamalı medya laboratuvarlarıyla desteklenir.",
      established: 1955,
      location: "Bornova Kampüsü",
      images: ["/iletisim1.jpg", "/iletisim2.jpg"],
      link: "https://iletisim.ege.edu.tr/" 
    },
    {
      name: "Mühendislik Fakültesi",
      description: "Bilim ve teknolojiyi birleştiren mühendislik eğitimi sunar. Çok sayıda mühendislik dalında uzman yetiştirir.",
      established: 1955,
      location: "Bornova Kampüsü",
      images: ["/muh1.jpg", "/muh2.jpg"],
      link: "https://muhfak.ege.edu.tr/" 
    },
    // {
    //   name: "Hukuk Fakültesi",
    //   description: "Hukuk eğitimiyle adalet sistemine katkı sağlar. Teorik bilgi yanında uygulamalı hukuk eğitimi de verir.",
    //   established: 1955,
    //   location: "Bornova Kampüsü",
    //   images: ["...", "..."],
    //   link: "https://hukuk.ege.edu.tr/" 
    // },
    {
      name: "Ödemiş Sağlık Bilimleri Fakültesi",
      description: "Sağlık alanında nitelikli personel yetiştirir. Uygulamalı eğitim ve modern altyapıya sahiptir.",
      established: 2018,
      location: "Ödemiş Yerleşkesi",
      images: ["/odemissaglik1.jpg", "/odemissaglik2.jpg"],
      link: "https://odemissbf.ege.edu.tr/" 
    },
    {
      name: "Sağlık Bilimleri Fakültesi",
      description: "Fizyoterapi, beslenme ve diyetetik gibi sağlık dallarında eğitim verir. Sağlık sektörünün ihtiyaçlarına cevap verir.",
      established: 2018,
      location: "Tıp Kampüsü",
      images: ["/saglik1.jpg", "/saglik2.jpg"],
      link: "https://sbf.ege.edu.tr/" 
    },
    {
      name: "Spor Bilimleri Fakültesi",
      description: "Spor eğitimi, antrenörlük ve spor yönetimi alanında uzmanlar yetiştirir. Uygulamalı spor alanlarıyla desteklenir.",
      established: 2018,
      location: "Bornova Kampüsü",
      images: ["/spor1.jpg", "/spor2.jpeg"],
      link: "https://sporbilimleri.ege.edu.tr/" 
    },
    {
      name: "Su Ürünleri Fakültesi",
      description: "Balıkçılık, su ürünleri yetiştiriciliği ve deniz bilimi konularında eğitim verir. Sektöre yönelik araştırmalar yapar.",
      established: 1955,
      location: "Bornova Kampüsü",
      images: ["/su1.jpeg", "/su2.jpeg"],
      link: "https://egefish.ege.edu.tr/" 
    },
    {
      name: "Tıp Fakültesi",
      description: "Türkiye’nin köklü tıp fakültelerinden biridir. Teorik ve uygulamalı tıp eğitimi sunar, araştırmalarıyla öne çıkar.",
      established: 1955,
      location: "Tıp Kampüsü",
      images: ["/tip1.jpg", "/tip2.jpg"],
      link: "https://med.ege.edu.tr/" 
    },
    {
      name: "Ziraat Fakültesi",
      description: "Tarım, hayvancılık, bitki koruma ve gıda teknolojisi alanında eğitim verir. Tarım sektörüne katkı sağlar.",
      established: 1955,
      location: "Bornova Kampüsü",
      images: ["/ziraat1.jpg", "/ziraat2.jpg"],
      link: "https://agr.ege.edu.tr/" 
    }
  ];



  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-24 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Fakülteler</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {fakulteler.map((fakulte, index) => (
            <motion.div
              initial={{ opacity: 0, filter: "blur(1px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false, amount: 0.1 }}
              key={index}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-white shadow-lg rounded-2xl p-4 border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-blue-800 mb-2">{fakulte.name}</h2>
              <p className="text-sm text-gray-600 mb-1"><strong>Kuruluş Yılı:</strong> {fakulte.established}</p>
              <p className="text-sm text-gray-600 mb-1"><strong>Lokasyon:</strong> {fakulte.location}</p>
              <p className="text-gray-700 my-2">{fakulte.description}</p>

              <div className="relative w-full h-32 mt-3 overflow-hidden rounded-lg group">
                <img
                  src={fakulte.images[0]}
                  alt={`${fakulte.name}`}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                />
                <img
                  src={fakulte.images[1]}
                  alt={`${fakulte.name} hover`}
                  className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                />
              </div>

              <a
                href={fakulte.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm text-white mx-13 font-medium shadow-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-4 py-2 rounded-full transition-all duration-300"
              >
                Web Sitesine Git
              </a>


            </motion.div>
          ))}
        </div>

      </div>


      <Footer />
    </>


  );
}
export default Fakulte;