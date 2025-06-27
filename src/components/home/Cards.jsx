import { useEffect, useState } from "react";
import CustomModal from "../custom/CustomModal";

function Cards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    fetch('/data/cards.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.json();
      })
      .then((jsonData) => {
        setCards(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openModal = (card) => {
    setSelectedCard(card);
    setModalIsOpen(true);
  };
  const closeModal = () => setModalIsOpen(false);

  if (loading) {
    return <div className="text-center pt-40">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="text-center pt-40 text-red-500">Hata: {error}</div>;
  }

  return (
    <>
      <div className="w-full flex justify-center pt-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => openModal(card)}
              className="w-[300px] h-[350px] bg-gray-300/50 rounded-xl shadow-xl overflow-hidden flex flex-col hover:scale-105 transition duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-2/3 w-full object-cover"
              />
              <div className="h-1/3 w-full flex items-center justify-center">
                <p className="text-black font-medium italic text-center">{card.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <CustomModal isOpen={modalIsOpen} onClose={closeModal} data={selectedCard} />
    </>
  );
}

export default Cards;