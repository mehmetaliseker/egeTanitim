import FakulteCard from '../components/fakulte/fakulteCard';
import DataLoader from '../components/fakulte/fakulteDataLoader';

function Fakulte() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center pb-12">Fakülteler</h1>
      <DataLoader url="/data/fakulteler.json">
        {(data) => (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.map((fakulte, index) => (
              <FakulteCard key={index} fakulte={fakulte} />
            ))}
          </div>
        )}
      </DataLoader>
    </div>
  );
}

export default Fakulte;