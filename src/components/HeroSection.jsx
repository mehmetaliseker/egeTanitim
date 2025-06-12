import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function HeroSection() {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute top-1/2 z-20 cursor-pointer bg-[rgba(0,0,0,0.7)] p-[10px] rounded-full -translate-y-1/2 left-[15px]" onClick={onClick}>
        <FaArrowLeft size={30} color="white" />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="absolute top-1/2 z-20 cursor-pointer bg-[rgba(0,0,0,0.7)] p-[10px] rounded-full -translate-y-1/2 right-[15px]" onClick={onClick}>
        <FaArrowRight size={30} color="white" />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    "../public/egeMainSlider5.jpg",
    "../public/egeMainSlider3.jpg",
    "../public/egeMainSlider2.jpg",
  ];

  return (
    <>
    <div className="mt-[75px] ">
      <div style={{ width: "100%", position: "relative",}} className='sliderBackground'>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{ width: "100vw", height: "400px", objectFit: "cover", filter: "drop-shadow(5px 5px 10px grey)" }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="m-[3em_8em_5em_8em] drop-shadow-[7px_7px_5px_grey] rounded-[20px] cursor-default text-[rgba(25,25,25,0.9)]">
        <h2 className="text-center text-gray-800 italic font-semibold text-2xl mb-4">Genel Tanıtım</h2>
        <p className="text-sm leading-relaxed text-gray-700 tracking-wide text-justify">
          Ege Üniversitesi, 1955 yılında Türkiye'nin batısında, güzellikleriyle ünlü İzmir şehrinde kurulmuş, köklü bir devlet üniversitesidir. 
          Eğitimde kaliteyi, araştırmada yeniliği ve topluma hizmeti ilke edinmiş olan üniversitemiz, her yıl binlerce öğrenciye ev sahipliği yapmaktadır.
          Doğayla iç içe, geniş ve modern kampüsü; çağdaş eğitim olanakları; aktif öğrenci kulüpleri ve sosyal etkinlikleriyle Ege Üniversitesi, 
          yalnızca bir eğitim kurumu değil, aynı zamanda bir yaşam alanıdır. 
          Fakültelerden araştırma merkezlerine, kütüphanelerden spor tesislerine kadar 
          her alanda donanımlı yapısıyla öğrencilerine çok yönlü bir gelişim imkânı sunar.
          Ulusal ve uluslararası düzeyde yürütülen bilimsel projeleri, 
          Erasmus gibi değişim programlarıyla dünya üniversiteleriyle kurduğu iş birlikleri ve alanında uzman akademik kadrosu sayesinde, 
          Ege Üniversitesi öğrencilerini yalnızca bugüne değil, geleceğe de hazırlar. <br />
          <a href="https://ege.edu.tr/tr-0/anasayfa.html" target="_blank">
            <button className="bg-blue-600 text-sm border-none mt-5 rounded-[5px] px-[14px] py-[8px] text-white hover:bg-blue-700 transition">Daha Fazlası...</button>
          </a>
        </p>
        
      </div>      
    </div>


    </>
  );
}

export default HeroSection;