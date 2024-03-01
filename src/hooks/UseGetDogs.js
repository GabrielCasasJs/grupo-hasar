import { useState, useEffect } from 'react';

import { getDogs } from '../apis/dogs';

const UseGetGods = () => {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDogs();
        setDogs(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { dogs, loading, error };
};

export default UseGetGods;
