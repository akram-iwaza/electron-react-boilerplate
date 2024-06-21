<<<<<<< HEAD
import { FC, useState, useEffect } from 'react';
import { Icons } from '../icons/Icons';
import { cn } from '../../lib/utils';
import { sidebarTabs } from '../../lib/globalVariables';
import tridentLogo from '../../../../assets/tridentLogo.png';

interface IProps {
  onCallback: (value: boolean) => void;
  onActiveTabChange: (activeTab: string) => void;
}

const Sidebar: FC<IProps> = ({ onCallback, onActiveTabChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openTab, setOpenTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>('Dashboard');
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      setOpenTab(null);
      setActiveSubTab(null);
    }
  };

  const handleToggleTab = (tabName: string, subTabs: any[] | undefined) => {
    if (openTab === tabName) {
      setOpenTab(null);
      setActiveTab(tabName);
      setActiveSubTab(null);
      onActiveTabChange(tabName);
    } else {
      setOpenTab(tabName);
      setActiveTab(tabName);
      if (subTabs && subTabs.length > 0) {
        setActiveSubTab(subTabs[0].name);
        onActiveTabChange(subTabs[0].name);
      } else {
        setActiveSubTab(null);
        onActiveTabChange(tabName);
      }
    }
  };

  const handleSubTabClick = (subTabName: string) => {
    setActiveSubTab(subTabName);
    onActiveTabChange(subTabName);
  };

  useEffect(() => {
    if (isCollapsed) {
      setOpenTab(null);
      setActiveSubTab(null);
    }
  }, [isCollapsed]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        const activeTabIndex = sidebarTabs.findIndex(
          (tab) => tab.name === activeTab,
        );
        const nextTabIndex = (activeTabIndex + 1) % sidebarTabs.length;
        setActiveTab(sidebarTabs[nextTabIndex].name);
        onActiveTabChange(sidebarTabs[nextTabIndex].name);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [activeTab, onActiveTabChange]);

  return (
    <div
      className={`h-screen w-full bg-transparent text-white transition-width duration-300 relative flex flex-col border-r-[1px] border-gray !z-30  ${
        isCollapsed ? 'items-center' : 'items-start'
      }`}
    >
      <button
        onClick={() => {
          handleToggleSidebar();
          onCallback(isCollapsed);
        }}
        className={cn(
          `absolute outline-none block !z-40  top-[50%]`,
          isCollapsed ? '-right-6' : '-right-7',
        )}
      >
        {isCollapsed ? (
          <Icons.SidebarToggleRight />
        ) : (
          <Icons.SidebarToggleLeft className="relative" />
        )}
      </button>

      <div className="w-full overflow-x-hidden overflow-y-auto max-h-screen scrollbar-hide">
        <div className="flex items-center justify-between p-4 w-full">
          {isCollapsed ? (
            <h1 className="text-white text-[1.25rem] font-bold">
              The Trident <span className="text-primary">Kit</span>
            </h1>
          ) : (
            <div className="relative w-full h-fit">
              <img alt="logoimg" src={tridentLogo} className="w-full h-fit" />
            </div>
          )}
        </div>
        <nav className="mt-4 w-full flex flex-col items-center">
          {sidebarTabs.map((tab) => (
            <div
              key={tab.name}
              className={cn(
                `w-full`,
                isCollapsed && 'flex flex-col items-center',
              )}
            >
              <div
                className={cn(
                  `w-full flex items-center justify-between p-4 cursor-pointer hover:text-primary group`,
                  activeTab === tab.name && 'text-primary',
                  isCollapsed && 'w-fit',
                )}
                style={{
                  background:
                    activeTab === tab.name
                      ? 'linear-gradient(to right, rgb(0, 0, 0), rgb(5, 41, 8), rgb(44, 94, 47))'
                      : '',
                }}
                onClick={() => {
                  handleToggleTab(tab.name, tab.subTabs);
                  if (!tab.subTabs) {
                    setActiveTab(tab.name);
                    setOpenTab(null);
                    setActiveSubTab(null);
                    onActiveTabChange(tab.name);
                  }
                }}
              >
                <div className="w-full flex items-center">
                  <div className="min-w-5 min-h-5">{tab.icon}</div>
                  {!isCollapsed && <span className="ml-4">{tab.name}</span>}
                </div>
                {!isCollapsed && tab.subTabs && (
                  <span>
                    <Icons.ChevronDown
                      className={cn(
                        'h-5 w-5 text-dust duration-150 group-hover',
                        openTab === tab.name &&
                          'rotate-180 transition-all text-primary',
                      )}
                    />
                  </span>
                )}
              </div>
              {tab.subTabs && (
                <div
                  className={cn(
                    'overflow-hidden transition-max-height duration-300 ease-in-out ml-8',
                    openTab === tab.name ? 'max-h-96' : 'max-h-0',
                  )}
                >
                  {tab.subTabs.map((subTab) => (
                    <div
                      key={subTab.name}
                      className={cn(
                        'flex items-center p-4 cursor-pointer hover group',
                        activeSubTab === subTab.name && 'text-primary',
                      )}
                      onClick={() => handleSubTabClick(subTab.name)}
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
=======
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
>>>>>>> 967fd7ffd9572c7ba85287eeacbbe3ee10be11ee
    </div>
  );
};

export default Sidebar;
