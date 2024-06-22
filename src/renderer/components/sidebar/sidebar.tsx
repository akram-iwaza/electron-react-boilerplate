import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../icons/Icons';
import { cn } from '../../lib/utils';
import { sidebarTabs } from '../../lib/globalVariables';

interface IProps {
  onCallback: (value: boolean) => void;
  onActiveTabChange: (activeTab: string) => void;
}

const Sidebar: FC<IProps> = ({ onCallback, onActiveTabChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [openTab, setOpenTab] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>('Dashboard');
  const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

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
    <motion.div
      className="h-screen !bg-dashBg px-3 bg-transparent text-whiteColor relative flex flex-col z-30"
      animate={{ width: isCollapsed ? '100px' : '180px' }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => {
        setIsCollapsed(false);
        onCallback(true);
      }}
      onMouseLeave={() => {
        setIsCollapsed(true);
        onCallback(false);
      }}
    >
      <div className="w-full overflow-x-hidden overflow-y-auto max-h-screen scrollbar-hide">
        <div className="flex items-center justify-between p-4 w-full">
          <h1 className="text-titleColor text-2xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-4 w-full flex flex-col items-center gap-3">
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
                  `w-full flex items-center justify-between p-4 cursor-pointer h-11 rounded-md hover:text-primary group`,
                  activeTab === tab.name &&
                    'text-white bg-activeColor font-semibold',
                  isCollapsed && 'w-fit',
                )}
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
                  <div
                    className={cn(
                      `min-w-5 min-h-5 text-iconColor`,
                      activeTab === tab.name && ' text-white',
                    )}
                  >
                    {tab.icon}
                  </div>
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
    </motion.div>
  );
};

export default Sidebar;

// const handleToggleSidebar = () => {
//   setIsCollapsed(!isCollapsed);
//   if (!isCollapsed) {
//     setOpenTab(null);
//     setActiveSubTab(null);
//   }
// };

{
  /* <button
        onClick={() => {
          handleToggleSidebar();
          onCallback(isCollapsed);
        }}
        className={cn(
          `absolute outline-none block z-40 top-[50%]`,
          isCollapsed ? '-right-6' : '-right-7',
        )}
      >
        {isCollapsed ? (
          <Icons.SidebarToggleRight />
        ) : (
          <Icons.SidebarToggleLeft className="relative" />
        )}
      </button> */
}
