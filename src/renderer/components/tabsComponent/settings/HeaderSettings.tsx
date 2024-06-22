import { FC } from 'react';

const HeaderSettings: FC = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-fit flex flex-col items-start">
        <h1 className="text-whiteColor font-bold text-xl">Settings</h1>
        <h2 className="text-gray font-normal text-[0.9375rem]">
          Manage Your Settings
        </h2>
      </div>
      <div></div>
    </div>
  );
};

export default HeaderSettings;
