import { FaArrowLeft , FaArrowRight } from "react-icons/fa";

function NavigationButton({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`fixed ${direction === "left" ? "left-1/5" : "right-1/5"} top-1/2 transform -translate-y-1/2 text-3xl text-blue-500 hover:text-blue-800 z-10`}
    >
      {direction === "left" ? <FaArrowLeft /> : <FaArrowRight />}
    </button>
  )
}

export default NavigationButton;