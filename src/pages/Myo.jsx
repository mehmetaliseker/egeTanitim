import { useState } from "react";
import MyoGrid from "../components/myo/MyoGrid";
import CustomModal from "../components/custom/CustomModal";

function Myo() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMyo, setSelectedMyo] = useState(null);

  const openModal = (myo) => {
    setSelectedMyo(myo);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMyo(null);
  };

  return (
    <div className="py-32 px-8">
      <h1 className="text-3xl font-bold pb-12 text-center">Meslek Yüksekokulları</h1>
      <MyoGrid onOpen={openModal} />
      <CustomModal isOpen={modalIsOpen} onClose={closeModal} data={selectedMyo} />
    </div>
  );
}

export default Myo;