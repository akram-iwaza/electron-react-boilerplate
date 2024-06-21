import React, { FC } from 'react';
import Sidebar from '../components/sidebar/sidebar';

const LeftSide: FC = () => {
  return (
    <div className="w-[30%] h-screen">
      <Sidebar />
    </div>
  );
};

export default LeftSide;
