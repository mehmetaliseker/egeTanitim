function AboutUs() {
  return (
    <>
      <h3 className="text-center text-gray-700 font-semibold text-2xl mt-40">Hakkımızda</h3><br />
      <div className="w-[100%] h-130 mx-100 justify-center mx-auto mb-40">
        <div className="flex gap-5 justify-center items-center">
          <div className="flex flex-col items-end">
            <img
              src="../public/hakkimizda2.jpg"
              alt="Görsel 1"
              className="w-[300px] h-[300px] object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="../public/hakkimizda1.jpg"
              alt="Görsel 2"
              className="w-[300px] h-[300px] object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="flex flex-col items-start">
            <img
              src="../public/hakkimizda3.jpg"
              alt="Görsel 3"
              className="w-[300px] h-[300px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
        <div className="w-full flex justify-center px-4">
          <p className="mt-8 text-center text-gray-800  text-sm max-w-4xl">
            EÜ Rektörlüğü ve Üniversitenin Kampüs dışında yer alan Bornova'daki çeşitli birimlerinin yanı sıra, 
            Konak'ta Atatürk Kültür Merkezi, Çeşme ve Ödemiş'te yüksek okulları, Tire, Bergama, Bayındır, Ödemiş, 
            Aliağa ve Urla'da meslek yüksek okulları, Urla, Menemen, Mordoğan, Çiğli, Özdere'de uygulama ve eğitim merkezleri, 
            Çeşme'de Ege Üniversitesi Çeşme Eğitim ve Dinlenme Tesisleri, Kurudağ da Rasathanesi vardir. Bu tesislere ek olarak İzmir Özdere'de 
            hem öğrencileri hem personelin faydalandığı Yaz Kampı bulunmaktadır. Bu olanaklarla Ege Üniversitesi eğitim, bilim, sağlık, 
            sosyal ve kültürel alanlarda hem öğrencilere hem de topluma hizmet vermektedir.
          </p>
        </div>

      </div>    
    </>

  );
}

export default AboutUs;