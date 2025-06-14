import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

Modal.setAppElement("#root");

function CustomModal({ isOpen, onClose, data }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`bg-white rounded-xl p-8 w-[90%] max-w-2xl mx-auto relative transition-all duration-500 ease-out shadow-xl`}
      overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
    >
      {data && (
        <>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-red-500"
          >
            <IoCloseOutline />
          </button>

          <img
            src={data.image}
            alt={data.name}
            className="w-full h-64 object-cover rounded-md mb-6"
          />

          <h2 className="text-2xl font-bold mb-4 text-center">{data.name}</h2>

          <p className="text-gray-700 text-justify mb-8">{data.longDescription || data.description}</p>

          {data.link && (
            <div className="flex justify-center">
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition text-lg">
                  {data.buttonText || "Web Sitesine Git"}
                </button>
              </a>
            </div>
          )}
        </>
      )}
    </Modal>
  );
}

export default CustomModal;
