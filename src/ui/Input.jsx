import React from 'react';

const Input = React.forwardRef(
  ({ heading, holder, error, className, ...rest }, ref) => {
    return (
      <div
        className={`flex flex-col items-start gap-[0.5rem] w-[19rem] ${className}`}
      >
        <div
          className={`flex items-center justify-between w-full ${
            error && 'text-red-600'
          }`}
        >
          <p className="font-bold text-[0.75rem] text-black tracking-[-0.21px]">
            {heading}
          </p>
          {error && <p className="font-bold text-[0.75rem]">{error}</p>}
        </div>
        <input
          placeholder={holder}
          type="text"
          className={`bg-white border-2 w-full border-darkGray rounded-[0.5rem] py-4 px-6 outline-1 outline-primary ${
            error && 'border-red-600'
          }`}
          ref={ref} // Forward the ref here
          {...rest} // Spread the remaining props (e.g., `register` props)
        />
      </div>
    );
  }
);

// Assign a display name for better debugging and to avoid the ESLint warning
Input.displayName = 'Input';

export default Input;
