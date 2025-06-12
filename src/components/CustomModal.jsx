import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

Modal.setAppElement("#root");

function CustomModal({ isOpen, onClose, data }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={`bg-white rounded-xl p-6 w-125 mx-auto relative transition-all duration-500 ease-out`}
      overlayClassName="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
    >
      {data && (
        <>
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-3xl font-bold text-gray-600 hover:text-red-500"
          >
            <IoCloseOutline />
          </button>
          <br />
          <img
            src={data.image || data.img}
            alt={data.name || data.title}
            className="w-auto h-auto object-center mx-auto rounded-md mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{data.name || data.title}</h2>
          <p className="text-gray-700 mb-4">{data.description}</p>

          {/* linkvarsa */}
          {data.link && (
            <div className="flex justify-center">
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition">
                  Web Sitesine Git
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
