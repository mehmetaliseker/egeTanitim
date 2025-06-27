import { useRef, useEffect, useState } from "react";
import BaseSlider from "../custom/BaseSlick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useHeroData from "../../hooks/useData";

function HeroSection() {
  const sliderRef = useRef(null);

const { heroData,loading,error } = useHeroData();

  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  if (loading) {
    return <div className="pt-[75px] text-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="pt-[75px] text-center text-red-500">Hata: {error}</div>;
  }

  return (
    <div className="pt-[75px] relative w-full">

      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute left-3 top-2/6 -translate-y-1/2 z-10 bg-black/80 hover:cursor-pointer hover:bg-black/70 p-3 rounded-full text-white transition"
      >
        <FaArrowLeft size={24} />
      </button>

      <BaseSlider settings={settings} sliderRef={sliderRef}>
        {heroData.images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] object-cover shadow-2xl"
            />
          </div>
        ))}
      </BaseSlider>

      <button
        onClick={() => sliderRef.current.slickNext()}
        className="absolute right-4 top-2/6 -translate-y-1/2 z-10 bg-black/80 hover:cursor-pointer hover:bg-black/70 p-3 rounded-full text-white transition"
      >
        <FaArrowRight size={24} />
      </button>

      <div className="px-24 py-12 max-w-8xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-4 text-gray-900">Genel Tanıtım</h2>
        <p className="leading-relaxed text-justify text-gray-700 mb-6 text-md tracking-wide">
          {heroData.paragraph}
        </p>
        <a
          href="https://ege.edu.tr/tr-0/anasayfa.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition hover:scale-105"
        >
          Daha Fazlası…
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
