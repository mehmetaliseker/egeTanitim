import { useEffect, useState } from 'react';
import useSecondData from "../../hooks/useData";


function SecondSection() {

  const { secondData, loading, error } = useSecondData();

  if (loading) {
    return <div className="pt-60 text-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="pt-60 text-center text-red-500">Hata: {error}</div>;
  }

  return (
    <div className="h-160 py-5 px-4 w-full pt-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {secondData.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-justify py-10">
            <img
              src={item.image}
              alt={item.title}
              className="w-auto h-[300px] object-cover rounded shadow-xl"
            />
            <h3 className="text-center font-semibold pt-4">{item.title}</h3>
            <br />
            <p className="text-sm text-gray-800 w-[90%]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondSection;