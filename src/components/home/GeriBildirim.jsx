import { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import CustomModal from "../custom/CustomModal";

function GeriBildirim() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => {
    setInputValue("");     
    setIsSubmitted(false); 
    setIsOpen(true);       
  };
  const closeModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setIsSubmitted(true);
      setTimeout(() => closeModal(), 1000);
    }
  };


  return (
    <>
      <div className="flex p-10 z-50 items-center gap-3">
        <button onClick={openModal} className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition">
          <FaCommentDots size={24} />
        </button>
        <span className="text-lg font-medium text-gray-700">Web Sitesi Hakkında Görüş Bildir</span>
      </div>

      <CustomModal isOpen={isOpen} onClose={closeModal}>
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-xl font-semibold">Geri Bildirim</h2>
          <p>Web Sitemi nasıl buldunuz?</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Görüşünüzü yazın..."
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full">
              Gönder
            </button>
          </form>
          {isSubmitted && (
            <p className="text-green-600 font-medium">Görüşleriniz için teşekkür ederim!</p>
          )}
        </div>
      </CustomModal>
    </>
  );
}

export default GeriBildirim;
