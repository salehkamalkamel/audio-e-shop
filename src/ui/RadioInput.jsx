import { useState } from "react";

export default function RadioInput({ heading }) {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <label
      className={`flex items-center cursor-pointer space-x-3 max-w-[19rem] border border-lightGray rounded-[0.5rem] py-4 px-6 ${
        isActive ? "border-primary" : ""
      }`}
      onClick={handleToggle}
    >
      <div
        className={`w-5 h-5 rounded-full border flex items-center justify-center `}
      >
        <div
          className={`w-3 h-3 rounded-full bg-primary transform ${
            isActive ? "scale-100" : "scale-0"
          } transition-transform duration-200`}
        ></div>
      </div>
      {heading && (
        <span className={`font-bold text-[0.875rem]  `}>{heading}</span>
      )}
    </label>
  );
}