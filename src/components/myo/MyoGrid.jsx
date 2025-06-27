import { useEffect, useState } from 'react';
import MyoCard from './MyoCard';

function MyoGrid({ onOpen }) {
  const [myos, setMyos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/myos.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.json();
      })
      .then((jsonData) => {
        setMyos(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div className="text-red-500">Hata: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {myos.map((myo, index) => (
        <MyoCard key={index} myo={myo} onOpen={onOpen} />
      ))}
    </div>
  );
}

export default MyoGrid;
