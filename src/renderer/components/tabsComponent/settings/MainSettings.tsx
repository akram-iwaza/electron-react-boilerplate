import React, { FC } from 'react';
interface IProps {}

const MainSettings: FC<IProps> = () => {
  return (
    <div className="w-full flex flex-col items-start">
      <h1 className="text-white font-bold text-3xl">MainSettings</h1>
    </div>
  );
};

export default MainSettings;
