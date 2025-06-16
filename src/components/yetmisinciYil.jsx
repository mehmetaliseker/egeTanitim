import { useState } from 'react';

function YetmisinciYil() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-2/5 right-0 z-20 flex items-center">

        {/* acilirmenu */}
        <div
          className={`bg-white shadow-lg h-65 mt-85 w-80 p-4 flex items-center rounded-lg absolute right-0 transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-2">Ege Üniversitesi 70. Yıl</h2>
            <iframe
              width="250"
              height="150"
              src="https://www.youtube.com/embed/iSi8arkTmXY?si=s80CQIUrC0laCZHh"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p className="text-gray-700 text-sm">
              Ege Üniversitesi 70 yıldır eğitim ve araştırmada öncü olmaya devam ediyor.
            </p>
          </div>
        </div>

        {/* buton */}
        <div
          className="bg-blue-600 rounded-l-full shadow-lg pr-4 p-1 flex items-center cursor-pointer hover:bg-blue-700 transition-all duration-300"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <img
            src="/70yil.png"
            alt="70. Yıl İkonu"
            className="w-[65px] h-[65px] rounded-full transition-transform duration-300"
          />
        </div>

      </div>
    </>
  );
}

export default YetmisinciYil;
