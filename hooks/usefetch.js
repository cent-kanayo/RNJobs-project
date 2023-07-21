import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      'X-RapidAPI-Key': 'e38d762d76msh02869c1ce801c72p1b6daajsnaef850324f23',
      'X-RapidAPI-Host': 'search.p.rapidapi.com',
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const { data } = await axios.request(options);
      setData(data.data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      alert('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoading, error, refetch };
};

export default useFetch;
