import React, { FC } from 'react';
import { Icons } from '../../icons/Icons';
interface IProps {}

const MainDashboard: FC<IProps> = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <h1 className="text-white font-bold text-3xl">MainDashboard</h1>
    </div>
  );
};

export default MainDashboard;
