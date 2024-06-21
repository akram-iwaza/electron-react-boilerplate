// import React, { useEffect, useState } from 'react';
// import TableComponent from './TableComponent';
// import { Icons } from '../../icons/Icons';
// import useFetch from '../../../hooks/useFetch';
// import { ElectronHandler } from '../../../../main/preload';
// import { IpcRendererEvent } from 'electron';

// declare global {
//   interface Window {
//     electron: ElectronHandler;
//   }
// }

// const MainTasks: React.FC<IProps> = ({ isOpen }) => {
//   const [tasks, setTasks] = useState<Task[]>([]);
//   const [taskStatuses, setTaskStatuses] = useState<{ [key: number]: string }>(
//     {},
//   );
//   console.log('taskStatuses : ', taskStatuses);

//   const fetchTaskStatus = async (taskId: number) => {
//     console.log('taskId : ' ,);

//     const status = await window.electron.ipcRenderer.invoke(
//       'get-task-status',
//       taskId,
//     );
//     setTaskStatuses((prevStatuses) => ({ ...prevStatuses, [taskId]: status }));
//   };

//   const columns: Array<{
//     label: string;
//     dataKey: keyof MyTask | 'status';
//     width: number;
//     cellRenderer?: (props: any) => React.ReactNode;
//   }> = [
//     {
//       label: 'ID',
//       dataKey: 'id',
//       width: 100,
//     },
//     {
//       label: 'Task Name',
//       dataKey: 'taskname',
//       width: 200,
//     },
//     {
//       label: 'Wallet Name',
//       dataKey: 'walletname',
//       width: 200,
//     },
//     {
//       label: 'Proxy Name',
//       dataKey: 'proxyname',
//       width: 200,
//     },
//     {
//       label: 'Status',
//       dataKey: 'status',
//       width: 100,
//       cellRenderer: ({ rowIndex }: { rowIndex: number }) => (
//         <span>{taskStatuses[tasks[rowIndex].id] || 'IDLE'}</span>
//       ),
//     },
//     {
//       label: 'Actions',
//       dataKey: 'id',
//       width: 100,
//       cellRenderer: ({ rowIndex }: { rowIndex: number }) => (
//         <div className="w-full flex items-center gap-1">
//           <button
//             onClick={() => handleTogglePlay(tasks[rowIndex].id)}
//             className="w-6 h-6 border border-border hover:border-primary rounded-md p-2 flex items-center justify-center group"
//           >
//             {playingTasks.includes(tasks[rowIndex].id) ? (
//               <Icons.PauseButton className="min-w-4 min-h-4" />
//             ) : (
//               <Icons.PlayButton className="min-w-4 min-h-4" />
//             )}
//           </button>
//           <button className="w-6 h-6 border border-border hover:border-primary rounded-md p-2 flex items-center justify-center group">
//             <Icons.EditButton className="min-w-4 min-h-4" />
//           </button>
//           <button className="w-6 h-6 border border-border hover:border-primary rounded-md p-2 flex items-center justify-center group">
//             <Icons.DeleteButton className="min-w-4 min-h-4" />
//           </button>
//         </div>
//       ),
//     },
//   ];

//   const [playingTasks, setPlayingTasks] = useState<number[]>([]);
//   const [selectedTasks, setSelectedTasks] = useState<number[]>([]);

//   const { data, isLoading, error } = useFetch('fetch-tasks');

//   const handleStartAll = () => {
//     if (selectedTasks.length > 0) {
//       setPlayingTasks(selectedTasks);
//     } else {
//       const allTaskIds = tasks.map((task) => task.id);
//       setPlayingTasks(allTaskIds);
//     }
//   };

//   const handleTogglePlay = (id: number) => {
//     setPlayingTasks((prev) => {
//       if (selectedTasks.length > 0) {
//         let newPlayingTasks = [...prev];
//         selectedTasks.forEach((taskId) => {
//           if (newPlayingTasks.includes(taskId)) {
//             newPlayingTasks = newPlayingTasks.filter(
//               (playingId) => playingId !== taskId,
//             );
//           } else {
//             newPlayingTasks.push(taskId);
//           }
//         });
//         return newPlayingTasks;
//       } else {
//         return prev.includes(id)
//           ? prev.filter((taskId) => taskId !== id)
//           : [...prev, id];
//       }
//     });
//   };

//   const handleSelectAll = (selectAll: boolean) => {
//     if (selectAll) {
//       setSelectedTasks(tasks.map((task) => task.id));
//     } else {
//       setSelectedTasks([]);
//     }
//   };

//   const handleSelectTask = (id: number) => {
//     setSelectedTasks((prev) =>
//       prev.includes(id)
//         ? prev.filter((taskId) => taskId !== id)
//         : [...prev, id],
//     );
//   };

//   useEffect(() => {
//     if (data) setTasks(data);
//   }, [data]);

//   useEffect(() => {
//     const handleStatusUpdate = (
//       event: IpcRendererEvent,
//       updates: { id: number; status: string }[],
//     ) => {
//       setTaskStatuses((prevStatuses) => {
//         const newStatuses = { ...prevStatuses };
//         updates.forEach(({ id, status }) => {
//           newStatuses[id] = status;
//         });
//         return newStatuses;
//       });
//     };

//     const removeListener = window.electron.ipcRenderer.on(
//       'task-status-update',
//       handleStatusUpdate,
//     );

//     return () => {
//       removeListener();
//     };
//   }, []);
//   useEffect(() => {
//     tasks.forEach((task) => {
//       fetchTaskStatus(task.id);
//     });
//   }, [tasks]);

//   if (isLoading) {
//     return (
//       <div className="text-white text-2xl font-semibold">Loading tasks...</div>
//     );
//   }

//   if (error) {
//     return (
//       <p className="text-error text-2xl font-semibold">An error occurred</p>
//     );
//   }

//   return (
//     <div className="w-full">
//       <button
//         onClick={handleStartAll}
//         className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Start All
//       </button>
//       <div className="w-full">
//         <TableComponent<MyTask>
//           tasks={tasks}
//           columns={columns}
//           playingTasks={playingTasks}
//           handleTogglePlay={handleTogglePlay}
//           handleSelectAll={handleSelectAll}
//           handleSelectTask={handleSelectTask}
//           selectedTasks={selectedTasks}
//           isOpen={isOpen}
//         />
//       </div>
//     </div>
//   );
// };

// export default MainTasks;
import React, { useEffect, useState } from 'react';
import TableComponent from './TableComponent';
import { Icons } from '../../icons/Icons';
import useFetch from '../../../hooks/useFetch';
import { ElectronHandler } from '../../../../main/preload';
import useStatuses from '../../../hooks/useStatuses';
import TableSkeleton from '../../skeletons/tableSkeleton';

declare global {
  interface Window {
    electron: ElectronHandler;
  }
}

const MainTasks: React.FC<IProps> = ({ isOpen }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [playingTasks, setPlayingTasks] = useState<number[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const taskStatuses = useStatuses();
  const { data, isLoading, error } = useFetch('fetch-tasks');

  const columns: Array<{
    label: string;
    dataKey: keyof MyTask | 'status';
    width: number;
    cellRenderer?: (props: any) => React.ReactNode;
  }> = [
    {
      label: 'ID',
      dataKey: 'id',
      width: 100,
    },
    {
      label: 'Task Name',
      dataKey: 'taskname',
      width: 200,
    },
    {
      label: 'Wallet Name',
      dataKey: 'walletname',
      width: 200,
    },
    {
      label: 'Proxy Name',
      dataKey: 'proxyname',
      width: 200,
    },
    {
      label: 'Status',
      dataKey: 'status',
      width: 100,
      cellRenderer: ({ rowIndex }: { rowIndex: number }) => (
        <span>{taskStatuses[tasks[rowIndex].id] || 'IDLE'}</span>
      ),
    },
    {
      label: 'Actions',
      dataKey: 'id',
      width: 100,
      cellRenderer: ({ rowIndex }: { rowIndex: number }) => (
        <div className="w-full flex items-center gap-1">
          <button
            onClick={() => handleTogglePlay(tasks[rowIndex].id)}
            className="w-6 h-6 border border-border hover:border-primary rounded-md p-2 flex items-center justify-center group"
          >
            {playingTasks.includes(tasks[rowIndex].id) ? (
              <Icons.PauseButton className="min-w-4 min-h-4" />
            ) : (
              <Icons.PlayButton className="min-w-4 min-h-4" />
            )}
          </button>
          <button className="w-6 h-6 border border-border hover:border-primary rounded-md p-2 flex items-center justify-center group">
            <Icons.EditButton className="min-w-4 min-h-4" />
          </button>
          <button className="w-6 h-6 border border-border hover:border-primary rounded-md p-2 flex items-center justify-center group">
            <Icons.DeleteButton className="min-w-4 min-h-4" />
          </button>
        </div>
      ),
    },
  ];

  const handleStartAll = () => {
    if (selectedTasks.length > 0) {
      setPlayingTasks(selectedTasks);
    } else {
      const allTaskIds = tasks.map((task) => task.id);
      setPlayingTasks(allTaskIds);
    }
  };

  const handleTogglePlay = (id: number) => {
    setPlayingTasks((prev) => {
      if (selectedTasks.length > 0) {
        let newPlayingTasks = [...prev];
        selectedTasks.forEach((taskId) => {
          if (newPlayingTasks.includes(taskId)) {
            newPlayingTasks = newPlayingTasks.filter(
              (playingId) => playingId !== taskId,
            );
          } else {
            newPlayingTasks.push(taskId);
          }
        });
        return newPlayingTasks;
      } else {
        return prev.includes(id)
          ? prev.filter((taskId) => taskId !== id)
          : [...prev, id];
      }
    });
  };

  const handleSelectAll = (selectAll: boolean) => {
    if (selectAll) {
      setSelectedTasks(tasks.map((task) => task.id));
    } else {
      setSelectedTasks([]);
    }
  };

  const handleSelectTask = (id: number) => {
    setSelectedTasks((prev) =>
      prev.includes(id)
        ? prev.filter((taskId) => taskId !== id)
        : [...prev, id],
    );
  };

  useEffect(() => {
    if (data) setTasks(data);
  }, [data]);

  if (isLoading) {
    return (
      <div className="w-full h-screen">
        <TableSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-error text-2xl font-semibold">An error occurred</p>
    );
  }

  return (
    <div className="w-full">
      <button
        onClick={handleStartAll}
        className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start All
      </button>
      <div className="w-full">
        <TableComponent<MyTask>
          tasks={tasks}
          columns={columns}
          playingTasks={playingTasks}
          handleTogglePlay={handleTogglePlay}
          handleSelectAll={handleSelectAll}
          handleSelectTask={handleSelectTask}
          selectedTasks={selectedTasks}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default MainTasks;
