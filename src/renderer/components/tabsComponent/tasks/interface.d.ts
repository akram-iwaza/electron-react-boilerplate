interface Task {
  id: number;
  taskname: string;
  walletname: string;
  proxyname: string;
}

interface Group {
  name: string;
  groupData: Task[];
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

interface IGroupTabsProps {
  tabs: string[];
  onAddTab: () => void;
  onTabClick: (tabName: string) => void;
  selectedTab: string;
}
interface FetchState<T> {
  data: T;
  isLoading: boolean;
  error: boolean;
}
