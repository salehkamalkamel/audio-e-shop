import { IoIosAdd, IoIosRemove } from "react-icons/io";

export default function Counter({ min, max, value, setValue }) {
  function handleAdd() {
    if (value < max) {
      setValue((prev) => prev + 1);
    }
  }

  function handleDecrement() {
    if (value > min) {
      setValue((prev) => prev - 1);
    }
  }

  return (
    <div className="flex items-center justify-center bg-lightGray w-[7.5rem] h-[3rem] rounded">
      <button
        className="bg-transparent w-1/3 flex items-center justify-center hover:text-primary disabled:text-gray-400"
        onClick={handleDecrement}
        disabled={value === min}
      >
        <IoIosRemove />
      </button>
      <p className="w-1/3 text-center font-bold">{value}</p>
      <button
        className="bg-transparent w-1/3 flex items-center justify-center hover:text-primary disabled:text-gray-400"
        onClick={handleAdd}
        disabled={value === max}
      >
        <IoIosAdd />
      </button>
    </div>
  );
}
