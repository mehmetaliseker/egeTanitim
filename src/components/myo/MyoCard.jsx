function MyoCard({ myo, onOpen }) {
  return (
    <div className="bg-white/50 shadow-md rounded-lg border border-gray-200 overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative group h-60 overflow-hidden">
        <img
          src={myo.image}
          alt={myo.name}
          className="w-full h-full object-cover transition duration-500 group-hover:blur-sm"
        />
        <button
          onClick={() => onOpen(myo)}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
        >
          <span className="bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:bg-blue-700">
            Daha Fazlası..
          </span>
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold pb-2">{myo.name}</h2>
        <p className="text-gray-700">{myo.description || myo.longDescription}</p>
      </div>
    </div>
  );
}

export default MyoCard;
