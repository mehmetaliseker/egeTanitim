function Cards() {
  //yapay zeka adamdir2
  const cards = [
    { title: "Başarılarımız", img: "../public/kupa1.jpg", link: "https://ege.edu.tr/tr-0/anasayfa.html" },
    { title: "Misyon ve Vizyon", img: "../public/visionMisison.jpg", link: "https://ege.edu.tr/tr-0/anasayfa.html" },
    { title: "Erasmus Programları", img: "../public/erasmus.jpg", link: "https://ege.edu.tr/tr-0/anasayfa.html" },
    { title: "Öğrenci Hayatı", img: "../public/hayat.jpg", link: "https://ege.edu.tr/tr-0/anasayfa.html" },
    { title: "Kariyer Olanakları", img: "../public/kariyer.jpg", link: "https://ege.edu.tr/tr-0/anasayfa.html" },
    { title: "Spor ve Kültürel Etkinlikler", img: "../public/havuz.jpg", link: "https://ege.edu.tr/tr-0/anasayfa.html" },
  ];

  return (
    <>
    <div className="w-full flex justify-center mt-10">
      <div className="grid grid-cols-3 gap-10">
        {cards.map((card, index) => (
          <a
            key={index}
            href={card.link}
            target="_blank"
            className="w-[300px] h-[350px] bg-gray-300 rounded-xl shadow-xl overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300"
          >
            <div className="h-2/3 w-full">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-1/3 w-full flex items-center justify-center">
              <p className="text-black font-medium italic text-center">{card.title}</p>
            </div>
          </a>
        ))}
      </div>
    </div>    
    </>

  );
}

export default Cards;