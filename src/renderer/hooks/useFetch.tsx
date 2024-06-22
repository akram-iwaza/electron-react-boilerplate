import { useState, useEffect, useCallback } from 'react';
import { Channels } from '../../main/preload';

const useFetch = <T,>(eventName: Channels) => {
  const [fetchedData, setFetchedData] = useState<FetchState<T>>({
    data: [] as unknown as T,
    isLoading: true,
    error: false,
  });

  const fetchData = useCallback(async () => {
    setFetchedData({ data: [] as unknown as T, isLoading: true, error: false });
    try {
      const data = await window.electron.ipcRenderer.invoke(eventName);
      setFetchedData({ data, isLoading: false, error: false });
    } catch (error) {
      console.error(`Error fetching data for event ${eventName}:`, error);
      setFetchedData({
        data: [] as unknown as T,
        isLoading: false,
        error: true,
      });
    }
  }, [eventName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return fetchedData;
};

export default useFetch;
