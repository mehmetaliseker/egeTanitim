import { useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

Modal.setAppElement("#root");

function GeriBildirim() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setInputValue("");
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
//   ***
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setIsSubmitted(true);
    }
  };
//   ***
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <>

      <div className="flex m-10 z-50 flex items-center space-x-3">
        <button
          onClick={openModal}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <FaCommentDots size={24} />
        </button>
        <span className="text-lg font-medium text-gray-700">Web Sitesi Hakkında Görüş Bildir</span>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="bg-white rounded-lg p-6 max-w-sm mx-auto mt-40 shadow-lg relative outline-none"
        overlayClassName="fixed inset-0 bg-black/50 flex justify-center items-center"
      >

        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
        >
          <IoCloseOutline size={28} />
        </button>

        <h2 className="text-xl font-semibold text-center mb-2">Geri Bildirim</h2>
        <p className="mb-4 text-center">Web Sitemi nasıl buldunuz?</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Görüşünüzü yazın..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition w-full"
          >
            Gönder
          </button>
        </form>

        {isSubmitted && (
          <p className="text-green-600 font-medium mt-4 text-center">
            Görüşleriniz için teşekkür ederim!
          </p>
        )}
      </Modal>
    </>
  );
}

export default GeriBildirim;
