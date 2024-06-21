<<<<<<< HEAD
import './styles/globals.css';
import Sidebar from './components/sidebar/sidebar';
import { cn } from './lib/utils';
import { useState } from 'react';
import MainDashboard from './components/tabsComponent/dashboard/MainDashboard';
import MainSettings from './components/tabsComponent/settings/MainSettings';
import MainTasks from './components/tabsComponent/tasks/MainTasks';

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <MainDashboard />;
      case 'Tasks':
        return <MainTasks isOpen={isOpen} />;
      case 'Settings':
        return <MainSettings />;
      default:
        return <MainDashboard />;
    }
  };

  return (
    <div className="h-screen w-full max-w-full bg-backgroundApp overflow-hidden flex items-start">
      <div
        className={cn(`h-screen max-h-screen`, isOpen ? 'w-[15%]' : 'w-[8%]')}
      >
        <Sidebar
          onCallback={(value: boolean) => {
            setIsOpen(value);
          }}
          onActiveTabChange={(value: string) => {
            setActiveTab(value);
          }}
        />
      </div>
      <div
        className={cn(`max-h-screen px-8 py-4`, isOpen ? 'w-[85%]' : 'w-[92%]')}
      >
        {renderActiveTab()}
      </div>
=======
import '../styles/globals.css';
import LeftSide from './main/LeftSide';
export default function App() {
  return (
    <div className="h-screen w-full max-w-full bg-default">
      <LeftSide />
>>>>>>> 967fd7ffd9572c7ba85287eeacbbe3ee10be11ee
    </div>
  );
}
