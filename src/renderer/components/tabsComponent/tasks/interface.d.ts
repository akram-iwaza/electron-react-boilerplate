interface Task {
  id: number;
  taskname: string;
  walletname: string;
  proxyname: string;
}

interface IProps {
  isOpen: boolean;
}

interface MyTask {
  id: number;
  taskname: string;
  walletname: string;
  proxyname: string;
}

interface TableComponentProps<T> {
  tasks: T[];
  columns: Array<{
    label: string;
    dataKey: keyof MyTask | 'status';
    width: number;
    cellRenderer?: (props: any) => React.ReactNode;
  }>;
  playingTasks: number[];
  handleTogglePlay: (id: number) => void;
  handleSelectAll: (selectAll: boolean) => void;
  handleSelectTask: (id: number) => void;
  selectedTasks: number[];
  isOpen: boolean;
}
