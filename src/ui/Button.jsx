import { IoIosArrowForward } from 'react-icons/io';

export default function Button({ children, type, onClick, className }) {
  const styles = {
    'btn-1': 'bg-primary text-white hover:bg-secondary',
    'btn-2':
      'bg-transparent border border-black text-black hover:bg-black hover:text-white',
    'btn-3':
      'bg-transparent text-black opacity-75 flex items-center justify-center gap-[0.8125rem] hover:text-primary',
    'btn-4':
      'bg-black text-white flex items-center justify-center gap-[0.8125rem] hover:opacity-75',
  };
  return (
    <button
      className={`px-btn-x py-btn-y text-[0.8125rem] uppercase font-bold ${styles[type]} ${className}`}
      onClick={onClick} // Pass the onClick prop to the button element
    >
      {children}
      {type === 'btn-3' && <IoIosArrowForward className="text-primary" />}
    </button>
  );
}
