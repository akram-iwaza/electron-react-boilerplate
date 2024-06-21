import React, { FC } from 'react';
import { Skeleton } from '../ui/skeleton';
interface ITableSkeleton {}

const TableSkeleton: FC<ITableSkeleton> = ({}) => {
  const skeletonCount = 7;
  return (
    <div className="w-full flex flex-col items-start gap-5 self-stretch">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Skeleton
          key={index}
          className="w-full bg-skeleton rounded-md h-[1.5rem]"
        />
      ))}
    </div>
  );
};
export default TableSkeleton;
