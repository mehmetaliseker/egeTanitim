import { useRef, useState, useEffect } from "react";
import BaseSlider from "../custom/BaseSlick";
import NavigationButton from "./bolumNavButton";
import BolumTable from "./bolumTable";

function BolumSlider() {
  const sliderRef = useRef(null);
  const slideRefs = useRef([]);
  const [containerHeight, setContainerHeight] = useState(0);

  const [kategoriler, setKategoriler] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index) => {
      if (slideRefs.current[index]) {
        setContainerHeight(slideRefs.current[index].offsetHeight);
      }
    },
  };

  useEffect(() => {
    fetch("/data/kategoriler.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.json();
      })
      .then((jsonData) => {
        setKategoriler(jsonData);
        setLoading(false);

        // İlk slide yüklendiğinde yükseklik ayarla
        setTimeout(() => {
          if (slideRefs.current[0]) {
            setContainerHeight(slideRefs.current[0].offsetHeight);
          }
        }, 50);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center pt-40">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="text-center pt-40 text-red-500">Hata: {error}</div>;
  }

  return (
    <div className="relative w-full max-w-4xl">
      <NavigationButton
        direction="left"
        onClick={() => sliderRef.current.slickPrev()}
      />
      <NavigationButton
        direction="right"
        onClick={() => sliderRef.current.slickNext()}
      />

      <div
        className="transition-all duration-500 w-full relative"
        style={{ height: `${containerHeight}px` }}
      >
        <BaseSlider settings={settings} sliderRef={sliderRef}>
          {Object.entries(kategoriler).map(([kategori, bolumler], i) => (
            <div
              key={i}
              className="p-4 rounded-xl px-6"
              ref={(el) => (slideRefs.current[i] = el)}
            >
              <h2 className="text-2xl border-b pb-2 font-semibold text-center text-blue-700">
                {kategori}
              </h2>
              {bolumler.length > 0 && <BolumTable bolumler={bolumler} />}
            </div>
          ))}
        </BaseSlider>
      </div>
    </div>
  );
}

export default BolumSlider;