function Istatistik() {
  return (
    <>
      {/* duzgun seyler kullan */}
      <br /><br /><br /><br /><br />
      {/* <h1 className="text-center text-3xl font-bold italic">Ege Üniversitesi Sayılarla</h1>
      <h3 className="text-center text-xl italic mx-20">
        Öğrenci sayısından akademik kadroya kadar bazı öne çıkan bilgiler:
      </h3> */}
      <div className="w-full flex justify-center gap-20">
        {/* Her istatistik kutusu */}
        <div className="flex flex-col items-center text-center w-40">
          <img src="../public/study.png" alt="" className="w-30 h-30" />
          <div className="mt-2 font-medium">59.000+ Öğrencisiyle</div>
        </div>
        <div className="flex flex-col items-center text-center w-40">
          <img src="../public/training.png" alt="" className="w-30 h-30" />
          <div className="mt-2 font-medium">3.000+ Akademik Kadrosuyla</div>
        </div>
        <div className="flex flex-col items-center text-center w-40">
          <img src="../public/building.png" alt="" className="w-30 h-30" />
          <div className="mt-2 font-medium">19 Fakültesiyle</div>
        </div>
        <div className="flex flex-col items-center text-center w-40">
          <img src="../public/pillar.png" alt="" className="w-30 h-30" />
          <div className="mt-2 font-medium">70 Yıllık Geçmişiyle</div>
        </div>
      </div>
      <br />
      <h1 className='text-center text-3xl bold italic mx-20'>EGELİ OLMAK AYRICALIKTIR!</h1>
      <br /><br />
    </>
  );
}

export default Istatistik;