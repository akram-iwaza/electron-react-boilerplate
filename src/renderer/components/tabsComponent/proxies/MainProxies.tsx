import React, { useEffect, useState } from 'react';
import { Icons } from '../../icons/Icons';
import useFetch from '../../../hooks/useFetch';
import { ElectronHandler } from '../../../../main/preload';
import useStatuses from '../../../hooks/useStatuses';
import TableSkeleton from '../../skeletons/TableSkeleton';
import GroupTabs from '../../custom/GroupTabs';
import TableComponent from '../../custom/TableComponent';

declare global {
  interface Window {
    electron: ElectronHandler;
  }
}

const MainProxies: React.FC<IProps> = ({ isOpen }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [playingTasks, setPlayingTasks] = useState<number[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const [selectedTab, setSelectedTab] = useState<string>('');
  const taskStatuses = useStatuses();
  const { data, isLoading, error } = useFetch<Group[]>('fetch-tasks');
  const { data: groupData } = useFetch<string[]>('group-names');

  const handleAddTab = () => {};

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
    const selectedGroup = data?.find((group) => group.name === tabName);
    if (selectedGroup) {
      setTasks(selectedGroup.groupData);
    }
  };

  const columns: Array<{
    label: string;
    dataKey: keyof Task | 'status';
    width: number;
    cellRenderer?: (props: any) => React.ReactNode;
  }> = [
    { label: 'ID', dataKey: 'id', width: 100 },
    { label: 'Task Name', dataKey: 'taskname', width: 200 },
    { label: 'Wallet Name', dataKey: 'walletname', width: 200 },
    { label: 'Proxy Name', dataKey: 'proxyname', width: 200 },
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
    if (data && data.length > 0) {
      setSelectedTab(data[0].name);
      setTasks(data[0].groupData);
    }
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
      <div className="w-full max-w-full">
        <GroupTabs
          tabs={groupData}
          onAddTab={handleAddTab}
          onTabClick={handleTabClick}
          selectedTab={selectedTab}
        />
      </div>
      <div className="w-full">
        <TableComponent<Task>
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

export default MainProxies;
