import { useEffect, useState } from 'react';

export function useSecondData() {
  const [secondData, setSecondData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/secondSectionIcerik.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
        return res.json();
      })
      .then((jsonData) => {
        setSecondData(jsonData);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  return { secondData, loading, error };
}