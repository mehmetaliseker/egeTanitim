import { Link } from 'react-router-dom';

function LandingPage() {
    return (

        <>
            <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-300 to-blue-50 py-10">


                <h1 className="text-4xl font-bold text-center text-gray-600 pb-10">
                    WEB TASARIM FİNAL PROJESİ
                </h1>


                <div className="flex flex-col md:flex-row w-11/12 h-full gap-10">


                    <Link
                        to="/home"
                        className="w-full md:w-1/2 flex hover:scale-103 flex-col justify-between items-center bg-white  hover:shadow-2xl transition duration-300 rounded-2xl p-8"
                    >
                        <h2 className="text-3xl font-bold pb-8 text-gray-600 text-center">
                            Ege Üniversitesi Tanıtım Sitesi
                        </h2>
                        <img
                            src="/homeImg/egeMainSlider3.jpg"
                            alt="Ege Üniversitesi"
                            className="w-full h-64 object-cover rounded-xl "
                        />
                        <p className="text-md pt-5 text-center leading-relaxed text-gray-700 tracking-wide text-justify">
                            Ege Üniversitesi, 1955 yılında İzmir’de kurulmuş köklü bir devlet üniversitesidir. Bornova’daki ana yerleşkesi; modern laboratuvarlar, zengin kütüphane, sosyal ve kültürel olanaklarla donatılmıştır. 19 fakültesiyle tıptan mühendisliğe, sanattan tarıma birçok alanda eğitim verir.
                            Üniversite, bilimsel araştırmalara ve uluslararası iş birliklerine büyük önem verirken; çevreye duyarlı, çağdaş ve sosyal bireyler yetiştirmeyi hedefler. Öğrenciler, akademik gelişimlerinin yanı sıra sosyal kulüpler, spor ve kültürel etkinliklerle zengin bir üniversite yaşamı yaşar.
                            <br /><br />
                            Ana tanıtım sayfasına gitmek için tıklayın.
                        </p>
                    </Link>

                    <a
                        href="/anasayfa/index1.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full hover:scale-103  md:w-1/2 flex flex-col justify-between items-center  bg-white hover:shadow-2xl transition duration-300 rounded-2xl p-8"
                    >
                        <h2 className="text-3xl font-bold text-gray-600 pb-4 text-center">
                            Tire Kutsan MYO Tanıtım Sitesi
                        </h2>
                        <img
                            src="/galeri/tire.kutsan.myo.arkaplan.jpg"
                            alt="Tire Kutsan MYO"
                            className="w-full h-64 object-cover rounded-xl "
                        />
                        <p className="text-md pt-5 text-center leading-relaxed text-gray-700 tracking-wide text-justify">
                            Tire Kutsan Meslek Yüksekokulu, 1992 yılında İzmir’in Tire ilçesinde kurulmuş ve Ege Üniversitesi’ne bağlı bir MYO’dur. Uygulamalı eğitime odaklanan okul, iş dünyasıyla güçlü bağları sayesinde öğrencilerine sektörel deneyim kazandırır.
                            Muhasebe, dış ticaret, büro yönetimi gibi alanlarda eğitim verir. Donanımlı derslikleri, teknik altyapısı ve deneyimli akademik kadrosuyla, mezunlarını iş yaşamına hazır şekilde yetiştirir. Sakin kampüs ortamı ve sosyal etkinliklerle öğrenciler dengeli bir eğitim süreci yaşar.
                            <br /><br />
                            Özel tanıtım sayfasına ulaşmak için tıklayın.
                        </p>
                    </a>
                </div>
            </div>
        </>

    );
}

export default LandingPage;
