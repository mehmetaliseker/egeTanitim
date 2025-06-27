import { useState, useEffect } from "react";

function Tarihce() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/tarihceIcerik.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.json();
      })
      .then((jsonData) => {
        setData(jsonData[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="pt-40 text-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="pt-40 text-center text-red-500">Hata: {error}</div>;
  }

  if (!data) return null;

  return (
    <div className="flex flex-col items-center gap-10 pt-40">
      <div className="flex justify-evenly items-center w-full px-14">
        <img
          src={data.image}
          alt="eskiege"
          className="w-140 h-70 rounded shadow-2xl"
        />
        <h1 className="text-2xl font-bold">{data.title}</h1>
      </div>

      <div className="max-w-6xl cursor-default text-[rgba(25,25,25,0.9)] px-10">
        <p className="text-sm text-gray-800 leading-relaxed text-justify">
          {data.paragraph}
        </p>
      </div>
    </div>
  );
}

export default Tarihce;
