import { useEffect, useState } from 'react';
import { IpcRendererEvent } from 'electron';

interface TaskStatusUpdate {
  id: number;
  message: string;
}

const useStatuses = () => {
  const [taskStatuses, setTaskStatuses] = useState<{ [key: number]: string }>(
    {},
  );

  useEffect(() => {
    const handleStatusUpdate = (
      event: IpcRendererEvent,
      updates: TaskStatusUpdate[],
    ) => {
      setTaskStatuses((prevStatuses) => {
        const newStatuses = { ...prevStatuses };
        updates.forEach(({ id, message }) => {
          newStatuses[id] = message;
        });
        return newStatuses;
      });
    };

    const removeListener = window.electron.ipcRenderer.on(
      'task-status-update',
      handleStatusUpdate,
    );

    return () => {
      removeListener();
    };
  }, []);

  const fetchTaskStatus = async () => {
    const statusUpdates: TaskStatusUpdate[] =
      await window.electron.ipcRenderer.invoke('get-task-status');
    setTaskStatuses((prevStatuses) => {
      const newStatuses = { ...prevStatuses };
      statusUpdates.forEach(({ id, message }) => {
        newStatuses[id] = message;
      });
      return newStatuses;
    });
  };

  useEffect(() => {
    fetchTaskStatus();
  }, []);

  return taskStatuses;
};

export default useStatuses;
