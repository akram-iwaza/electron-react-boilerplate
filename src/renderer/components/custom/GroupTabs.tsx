import React from 'react';
import { Icons } from '../icons/Icons';

const GroupTabs: React.FC<IGroupTabsProps> = ({
  tabs,
  onAddTab,
  onTabClick,
  selectedTab,
}) => {
  return (
    <div className="relative flex items-center h-8">
      <div className="flex items-center h-8 overflow-x-auto overflow-y-hidden scrollbar-hide pr-10">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`flex-shrink-0 px-4 text-whiteColor rounded-t-lg cursor-pointer ${selectedTab === tab ? 'bg-border' : 'bg-backgroundApp'}`}
            onClick={() => onTabClick(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div
        className="absolute right-0 flex-shrink-0 px-3 w-8 h-6 rounded-t-lg bg-border cursor-pointer flex items-center justify-center z-10"
        onClick={onAddTab}
      >
        <Icons.Plus className="min-w-4 min-h-4 text-whiteColor" />
      </div>
    </div>
  );
};

export default GroupTabs;
