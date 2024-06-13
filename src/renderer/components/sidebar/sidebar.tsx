import { useState } from 'react';
import { Icons } from '../icons/Icons';
import { cn } from '../../lib/utils';

interface Tab {
  name: string;
  icon: JSX.Element;
  subTabs?: Tab[];
}

const tabs: Tab[] = [
  {
    name: 'Dashboard',
    icon: <Icons.User className="h-6 w-6" />,
  },
  {
    name: 'Settings',
    icon: <Icons.User className="h-6 w-6" />,
    subTabs: [
      { name: 'Profile', icon: <Icons.User className="h-6 w-6" /> },
      { name: 'Account', icon: <Icons.User className="h-6 w-6" /> },
    ],
  },
  // Add more tabs as needed
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openTab, setOpenTab] = useState<string | null>(null);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleToggleTab = (tabName: string) => {
    if (openTab === tabName) {
      setOpenTab(null);
    } else {
      setOpenTab(tabName);
    }
  };

  return (
    <div
      className={`h-full ${
        isCollapsed ? 'w-20' : 'w-64'
      } bg-gray-800 text-white transition-width duration-300`}
    >
      <div className="flex items-center justify-between p-4">
        <span className="text-xl font-semibold">{!isCollapsed && 'MyApp'}</span>
        <button onClick={handleToggleSidebar} className="focus:outline-none">
          {isCollapsed ? '>>' : '<<'}
        </button>
      </div>
      <nav className="mt-4">
        {tabs.map((tab) => (
          <div key={tab.name}>
            <div
              className="flex items-center justify-between p-4 hover:bg-gray-700 cursor-pointer"
              onClick={() => tab.subTabs && handleToggleTab(tab.name)}
            >
              <div className="flex items-center">
                {tab.icon}
                {!isCollapsed && <span className="ml-4">{tab.name}</span>}
              </div>
              {!isCollapsed && tab.subTabs && (
                <span>
                  <Icons.ChevronDown
                    className={cn(
                      'h-5 w-5 text-dust duration-150',
                      openTab === tab.name && 'rotate-180 transition-all',
                    )}
                  />
                </span>
              )}
            </div>
            {tab.subTabs && openTab === tab.name && (
              <div className="ml-8">
                {tab.subTabs.map((subTab) => (
                  <div
                    key={subTab.name}
                    className="flex items-center p-4 hover:bg-gray-700 cursor-pointer"
                  >
                    {subTab.icon}
                    {!isCollapsed && (
                      <span className="ml-4">{subTab.name}</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
