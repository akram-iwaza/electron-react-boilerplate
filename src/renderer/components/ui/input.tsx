import * as React from 'react';
import { cn } from '../../lib/utils';

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex w-full rounded-[0.3125rem] border border-border bg-transparent px-[0.875rem] py-[0.625rem] text-[0.9375rem]  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-nickle focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
