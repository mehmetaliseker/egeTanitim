function SecondSection() {

  return (
    <>
      <div className="h-160 py-5 px-4 w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2 ">

          <div className="flex flex-col items-center text-justify my-10">
            <img src="/egeRektor.jpg" alt="Rektör" className="w-[300px] h-[300px] object-cover rounded mb-4"/>

            <h3 className="text-center font-semibold mb-2">PROF. DR. NECDET BUDAK</h3><br />

            <p className="text-sm text-gray-800 w-[90%]">
                Necdet Budak, 1964 yılında Edirne’de doğdu.
                1986 yılında mezun olduğu Ege Üniversitesi Ziraat Fakültesi Tarla Bitkileri Bölümü’nde araştırma görevlisi olarak göreve başladı.
                1988 yılında yine aynı fakültede tohumluk üretimi konusunda yüksek lisansını tamamladı.
                1990-1994 yılları arasında Amerika Birleşik Devletleri’nden kazandığı burs ile Nebraska Üniversitesi’nde Agronomy bölümünde, Bitki Islahı ve Genetiği konusunda doktora derecesini aldı.
                1997 yılında Hollanda hükümeti bursu ile Hollanda’da Tohum Bilimi ve Teknolojisi konusunda çalıştı.
                Ege Üniversitesi Ziraat Fakültesi'nde Profesör unvanını alan Budak, tarım konusunda gerek uluslararası düzeyde, gerekse yurt içinde araştırma makalesi, proje ve kitaptan oluşan toplam 80 adet çalışma yayımladı.
                2002 yılında Edirne’den milletvekili seçildi. 22. dönemde Türkiye Büyük Millet Meclisinde, Avrupa Birliği Kurultayı, Avrupa Birliği Karma Parlamento, Karadeniz Ekonomik İşbirliği, Avrupa Birliği Uyum Komisyonu ile Tarım ve Köy İşleri Komisyonu üyeliği görevlerinde bulundu.
            </p>
          </div>


          <div className="flex flex-col items-center text-justify my-10">
            <img src="../public/egeYerleske.jpg" alt="Ege Üniversitesi Etkinlik" className="w-[550px] h-[300px] object-cover rounded shadow-xl mb-4"/>

            <h3 className="text-center font-semibold mb-2">KAMPÜS YAŞAMI</h3><br />

            <p className="text-sm text-gray-800 w-[90%]">
              Ege Üniversitesi kampüsü, yeşillikler içinde huzurlu ve canlı bir yaşam sunar. Geniş alanlara yayılan kampüs,
              öğrencilerin hem akademik hem sosyal ihtiyaçlarına cevap verir. Kütüphane, spor tesisleri, 
              kafeler ve açık alanlar gün boyu öğrencilerle dolup taşar. Bahar aylarında çimlerde ders çalışan ya da arkadaşlarıyla vakit geçiren
              öğrencilere sıkça rastlanır. Ulaşım açısından merkezi bir konumda yer alması, kampüs yaşamını kolaylaştırır. Öğrenci kulüpleri,
              etkinlikler ve festivaller kampüs hayatına renk katar. Güvenli ve samimi ortamıyla Ege Üniversitesi, öğrencilere aidiyet hissi kazandırır. 
              ğitimle sosyal yaşamın dengeli bir şekilde buluştuğu modern bir üniversite kampüsüdür.
            </p>
          </div>
        </div>
      </div>    
    </>

  );
}

export default SecondSection;