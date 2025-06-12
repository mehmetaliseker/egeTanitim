function Istatistik() {
  return (
    <>
      <div className="w-full flex justify-center gap-20 mt-60">
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
      <h1 className='text-center text-3xl bold italic mt-10 mx-20 mb-40'>EGELİ OLMAK AYRICALIKTIR!</h1>
    </>
  );
}

export default Istatistik;