import { Icons } from '../components/icons/Icons';
import { ITab } from '../components/interfaces/global';

export const sidebarTabs: ITab[] = [
  {
    name: 'Dashboard',
    icon: <Icons.GridView className="h-6 w-6" />,
  },
  {
    name: 'Tasks',
    icon: <Icons.Settings className="h-6 w-6" />,
  },
  {
    name: 'Settings',
    icon: <Icons.Settings className="h-6 w-6" />,
  },
];
