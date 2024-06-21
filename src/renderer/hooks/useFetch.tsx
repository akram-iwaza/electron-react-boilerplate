import { useState, useEffect, useCallback } from 'react';
import { Channels } from '../../main/preload';

const useFetch = (eventName: Channels) => {
  const [fetchedData, setFetchedData] = useState({
    data: [],
    isLoading: true,
    error: false,
  });

  const fetchData = useCallback(async () => {
    setFetchedData({ data: [], isLoading: true, error: false });
    try {
      const data = await window.electron.ipcRenderer.invoke(eventName);
      setFetchedData({ data, isLoading: false, error: false });
    } catch (error) {
      console.error(`Error fetching data for event ${eventName}:`, error);
      setFetchedData({ data: [], isLoading: false, error: true });
    }
  }, [eventName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return fetchedData;
};

export default useFetch;
