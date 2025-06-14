import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from "react";
import CustomModal from "../components/CustomModal";
import myos from '../data/myos'; 



// const myos = [
//   {
//     name: 'Aliağa MYO',
//     description: 'Sanayi bölgesine yakınlığıyla dikkat çeken okul, uygulamalı eğitimleriyle öne çıkar.',
//     image: '../public/aliagaMYO.jpg',
//     link: 'https://aliaga.ege.edu.tr/'
//   },
//   {
//     name: 'Atatürk Sağlık Hizmetleri MYO',
//     description: '12 farklı alanda sağlık personeli yetiştiren okul, sosyal sorumluluk projeleriyle de öne çıkar.',
//     image: '../public/ataturkMYO.jpg',
//     link: 'https://egeatasaglik.ege.edu.tr/'
//   },
//   {
//     name: 'Bayındır MYO',
//     description: 'Bölgesel kalkınmaya katkı sağlayan programlarıyla tanınır.',
//     image: '../public/bayindirMYO.jpg',
//     link: 'https://bayindirmyo.ege.edu.tr/'
//   },
//   {
//     name: 'Bergama MYO',
//     description: '31 yıllık geçmişiyle binlerce mezun veren okul, inovasyona ve teknolojiye önem verir.',
//     image: '../public/bergamaMYO.jpg',
//     link: 'https://bergamamyo.ege.edu.tr/'
//   },
//   {
//     name: 'Ege MYO',
//     description: 'Sanayinin ihtiyaçlarına yönelik programlarıyla, mezunlarına geniş iş olanakları sunan köklü bir yüksekokuldur. ',
//     image: '../public/egeMYO.jpg',
//     link: 'https://egemyo.ege.edu.tr/'
//   },
//   {
//     name: 'Emel Akın MYO',
//     description: 'Tekstil ve moda alanında uluslararası etkinliklerle adından söz ettirir.',
//     image: '../public/emelakinMYO.jpg',
//     link: 'https://eamyo.ege.edu.tr/'
//   },
//   {
//     name: 'Havacılık MYO',
//     description: 'Havacılık hizmetleri alanında kaliteli eğitim sunan birimdir.',
//     image: '../public/havacilikMYO.jpg',
//     link: 'https://havacilikmyo.ege.edu.tr/'
//   },
//   {
//     name: 'Ödemiş MYO',
//     description: 'Tarım ve hayvancılık alanlarında uygulamalı eğitimler sunar.',
//     image: '../public/odemisMYO.jpg',
//     link: 'https://odemismyo.ege.edu.tr/'
//   },
//   {
//     name: 'Siber Güvenlik MYO',
//     description: 'Dijital güvenlik alanında uzmanlaşmış programlarıyla, sektöre nitelikli elemanlar kazandırır.',
//     image: '../public/siberMYO.jpg',
//     link: 'https://sgmyo.ege.edu.tr/'
//   },
//   {
//     name: 'Tire Kutsan MYO',
//     description: 'Üniversite-sanayi işbirliğiyle dikkat çeken okul, öğrenci odaklı etkinlikleriyle bilinir.',
//     image: '../public/tireMYO.jpg',
//     link: 'https://tkmyo.ege.edu.tr/'
//   },
//   {
//     name: 'Urla Denizcilik MYO',
//     description: 'Denizcilik alanında uzmanlaşmış programlarıyla sektöre nitelikli elemanlar yetiştirir.',
//     image: '../public/urlaMYO.jpg',
//     link: 'https://udmyo.ege.edu.tr/'
//   }
// ];

function Myo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMyo, setSelectedMyo] = useState(null);

  const openModal = (myo) => {
    setSelectedMyo(myo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMyo(null);
  };

  return (
    <>
      <Navbar />

      <div className="my-32 px-8">
        <h1 className="text-3xl font-bold mb-12 text-center">Meslek Yüksekokulları</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myos.map((myo, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative group h-60 overflow-hidden">
                <img
                  src={myo.image}
                  alt={myo.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
                />
                <button
                  onClick={() => openModal(myo)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                >
                  <span className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">
                    Daha Fazlası..
                  </span>
                </button>
              </div>

              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{myo.name}</h2>
                <p className="text-gray-700">{myo.description || myo.longDescription}</p>

              </div>
            </div>
          ))}
        </div>
      </div>


      <Footer className='mt-10' />

      <CustomModal isOpen={modalIsOpen} onClose={closeModal} data={selectedMyo} />
    </>
  );
}

export default Myo;
