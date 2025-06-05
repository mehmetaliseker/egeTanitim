import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const myos = [
  {
    name: 'Aliağa MYO',
    description: 'Sanayi bölgesine yakınlığıyla dikkat çeken okul, uygulamalı eğitimleriyle öne çıkar.',
    image: '../public/aliagaMYO.jpg' 
  },
  {
    name: 'Atatürk Sağlık Hizmetleri MYO',
    description: '12 farklı alanda sağlık personeli yetiştiren okul, sosyal sorumluluk projeleriyle de öne çıkar.',
    image: '../public/ataturkMYO.jpg'
  },
  {
    name: 'Bayındır MYO',
    description: 'Bölgesel kalkınmaya katkı sağlayan programlarıyla tanınır.',
    image: '../public/bayindirMYO.jpg'
  },
  {
    name: 'Bergama MYO',
    description: '31 yıllık geçmişiyle binlerce mezun veren okul, inovasyona ve teknolojiye önem verir.',
    image: '../public/bergamaMYO.jpg'
  },
  {
    name: 'Ege MYO',
    description: 'Sanayinin ihtiyaçlarına yönelik programlarıyla, mezunlarına geniş iş olanakları sunan köklü bir yüksekokuldur. ',
    image: '../public/egeMYO.jpg'
  },
  {
    name: 'Emel Akın MYO',
    description: 'Tekstil ve moda alanında uluslararası etkinliklerle adından söz ettirir.',
    image: '../public/emelakinMYO.jpg'
  },
  {
    name: 'Havacılık MYO',
    description: 'Havacılık hizmetleri alanında kaliteli eğitim sunan birimdir.',
    image: '../public/havacilikMYO.jpg'
  },
  {
    name: 'Ödemiş MYO',
    description: 'Tarım ve hayvancılık alanlarında uygulamalı eğitimler sunar.',
    image: '../public/odemisMYO.jpg'
  },
  {
    name: 'Siber Güvenlik MYO',
    description: 'Dijital güvenlik alanında uzmanlaşmış programlarıyla, sektöre nitelikli elemanlar kazandırır.',
    image: '../public/siberMYO.jpg'
  },
  {
    name: 'Tire Kutsan MYO',
    description: 'Üniversite-sanayi işbirliğiyle dikkat çeken okul, öğrenci odaklı etkinlikleriyle bilinir.',
    image: '../public/tireMYO.jpg'
  },
  {
    name: 'Urla Denizcilik MYO',
    description: 'Denizcilik alanında uzmanlaşmış programlarıyla sektöre nitelikli elemanlar yetiştirir.',
    image: '../public/urlaMYO.jpg'
  }
];

function Myo() {
  return (
    <>
      <Navbar />

        <div className="mt-28 px-8">
            <h1 className="text-3xl font-bold mb-6 italic text-center">Meslek Yüksekokulları</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {myos.map((myo, index) => (
                <div key={index} className="bg-white shadow-md p-4 rounded-lg border border-gray-200 cursor-pointer">
                <img src={myo.image} alt={myo.name} className="w-full h-70 object-center rounded mb-4 " /> {/*  blur-xs olabilir belki hoverla duzeltilir, h sabitlenip resimler kotu durmasına karsın esit boyut elde edilebilir */}
                
                <h2 className="text-xl font-semibold mb-2">{myo.name}</h2>
                <p className="text-gray-700">{myo.description}</p>
                </div>
            ))}
            </div>
        </div>
        <div className='my-10'></div>
      <Footer />
    </>
  );
}

export default Myo;