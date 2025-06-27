import { useEffect, useState } from 'react';

function AboutUs() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/aboutUsIcerik.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.json();
      })
      .then((jsonData) => {
        setAboutData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div className="text-red-500">Hata: {error}</div>;
  }

  if (!aboutData) {
    return null;
  }

  return (
    <>
      <h3 className="text-center text-gray-700 font-semibold text-2xl pt-60">
        {aboutData.title}
      </h3>
      <div className="w-full h-130 flex flex-col items-center px-4 gap-8">
        <div className="flex gap-5 justify-center items-center">
          {aboutData.images.map((image, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index === 0 ? 'items-end' : index === 1 ? 'items-center' : 'items-start'
              }`}
            >
              <img
                src={image}
                alt={`Görsel ${index + 1}`}
                className="w-[300px] h-[300px] object-cover rounded-xl shadow-md"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center px-4">
          <p className="text-center text-gray-800 text-sm max-w-4xl">
            {aboutData.paragraph}
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
