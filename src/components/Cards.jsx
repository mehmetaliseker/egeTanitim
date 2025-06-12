import { useState } from "react";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

Modal.setAppElement("#root");

function Cards() {
  const cards = [
    {
      title: "Başarılar ve Ödüller",
      img: "/kupa1.jpg",
      description: "Ege Üniversitesi'nin kazandığı ödüller ve başarı hikâyeleri.",
    },
    {
      title: "Misyon ve Vizyon",
      img: "/visionMisison.jpg",
      description: "Üniversitenin amaçları ve geleceğe yönelik hedefleri.",
    },
    {
      title: "Erasmus Programları",
      img: "/erasmus.jpg",
      description: "Erasmus öğrenci değişim programlarına dair bilgiler.",
    },
    {
      title: "Öğrenci Hayatı",
      img: "/hayat.jpg",
      description: "Kampüs yaşamı, sosyal kulüpler ve öğrenci aktiviteleri.",
    },
    {
      title: "Kariyer Olanakları",
      img: "/kariyer.jpg",
      description: "Mezunlara ve öğrencilere sunulan kariyer imkanları.",
    },
    {
      title: "Spor ve Kültürel Etkinlikler",
      img: "/havuz.jpg",
      description: "Üniversitedeki spor tesisleri ve kültürel organizasyonlar.",
    },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (card) => {
    setSelectedCard(card);
    setModalIsOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalIsOpen(false);
      setSelectedCard(null);
    });
  };

  return (
    <>
      <div className="w-full flex justify-center mt-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => openModal(card)}
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
                <p className="text-black font-medium italic text-center">
                  {card.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={`bg-white rounded-xl p-6 w-125 mx-auto relative transition-all duration-500 ease-out 
              ${isClosing ? "animate-fadeOut" : "animate-fadeIn"
            }`}
          overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          closeTimeoutMS={300}
        >
          {selectedCard && (
            <>
              <button
                onClick={closeModal}
                className="absolute top-2 right-3 text-3xl font-bold text-gray-600 hover:text-red-500"
              >
                <IoCloseOutline />
              </button> <br />
              <img
                src={selectedCard.img}
                alt={selectedCard.title}
                className="w-auto h-auto object-center mx-auto rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{selectedCard.title}</h2>
              <p className="text-gray-700">{selectedCard.description}</p>
            </>
          )}
        </Modal>
      )}
    </>
  );
}

export default Cards;
