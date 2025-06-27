import { useEffect, useState } from "react";

function Istatistik() {
  const [istatistikData, setIstatistikData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/istatistikIcerik.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.json();
      })
      .then((jsonData) => {
        setIstatistikData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="pt-60 text-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="pt-60 text-center text-red-500">Hata: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center gap-10 pt-60">
      <div className="w-full flex justify-center gap-20 flex-wrap">
        {istatistikData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-40 gap-2"
          >
            <img src={item.image} alt={item.text} className="w-30 h-30" />
            <div className="font-medium">{item.text}</div>
          </div>
        ))}
      </div>

      <h1 className="text-center text-3xl font-bold italic">
        EGELİ OLMAK AYRICALIKTIR!
      </h1>
    </div>
  );
}

export default Istatistik;
