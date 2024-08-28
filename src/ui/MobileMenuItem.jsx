import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function MobileMenuItem({ imageSrc, altText, label, path }) {
  const navigate = useNavigate();
  return (
    <div className="bg-lightGray rounded-lg flex flex-col items-center justify-center w-full gap-4 pb-6">
      <img
        src={imageSrc}
        alt={altText}
        className="mt-[-10%] drop-shadow-xl pb-4"
      />
      <p className="text-base font-bold uppercase tracking-wide text-black">
        {label}
      </p>
      <Button type="btn-3" onClick={() => navigate(path)}>
        Shop
      </Button>
    </div>
  );
}
