import { useState } from "react";

function YetmisinciYil() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`fixed bottom-1/8 right-0 z-20 transition-transform duration-500 flex items-start ${isOpen ? "-translate-x-0" : "translate-x-80"
        }`}
    >

      <div
        className="bg-blue-600 rounded-l-full shadow-lg p-1 pr-4 cursor-pointer hover:bg-blue-700 transition-all"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img
          src="/homeImg/70yil.png"
          alt="70. Yıl İkonu"
          className="w-[65px] h-[65px] rounded-full"
        />
      </div>

      <div className="bg-blue-500/10 backdrop-blur-md shadow-2xl w-80 p-4 rounded-es-2xl">
        <h2 className="text-xl font-bold text-blue-700 pb-2">
          Ege Üniversitesi 70. Yıl
        </h2>
        <iframe
          width="100%"
          height="150"
          src="https://www.youtube.com/embed/iSi8arkTmXY?si=kxMYp9G_3LT4sXfQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-presentation"
        ></iframe>
        <p className="text-gray-700 text-sm pt-2">
          Ege Üniversitesi 70 yıldır eğitim ve araştırmada öncü olmaya devam
          ediyor.
        </p>
      </div>

    </div>
  );
}

export default YetmisinciYil;
