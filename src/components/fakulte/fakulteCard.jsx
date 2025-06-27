import { motion } from "framer-motion";

function FakulteCard({ fakulte }) {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white/50 shadow-lg rounded-2xl p-4 border border-gray-200"
    >
      <h2 className="text-lg font-semibold text-blue-800"> {fakulte.name}</h2>
      <p className="text-sm text-gray-600 pt-1"><strong>Kuruluş Yılı:</strong> {fakulte.established}</p>
      <p className="text-sm text-gray-600 pt-1"><strong>Lokasyon:</strong> {fakulte.location}</p>
      <p className="text-gray-700 pt-2">{fakulte.description}</p>

      <div className="relative w-full h-32 pt-3 overflow-hidden rounded-lg group">
        <img
          src={fakulte.images[0]}
          alt={fakulte.name}
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 opacity-100 group-hover:opacity-0"
        />
        <img
          src={fakulte.images[1]}
          alt={`${fakulte.name} hover`}
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
        />
      </div>

      <a
        href={fakulte.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-3 text-white font-medium shadow-md bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-4 py-2 rounded-full transition-all duration-300"
      >
        Web Sitesine Git
      </a>
    </motion.div>
  );
}

export default FakulteCard;
