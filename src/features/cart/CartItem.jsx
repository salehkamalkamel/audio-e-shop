import { useState } from 'react';
import Counter from '../../ui/Counter';

export default function CartItem() {
  const [value, setValue] = useState(1);
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <img
          className="w-[4rem] h-[4rem] rounded-[0.5rem]"
          src="/product-xx99-mark-two-headphones/desktop/image-product.jpg"
        />
        <div className="flex flex-col items-start">
          <p className="font-bold text-black text-[0.9375rem] leading-6">
            XX99 MK II
          </p>
          <p className="font-bold text-[0.875rem] leading-6 tracking-normal text-darkGray">
            $123
          </p>
        </div>
      </div>
      <Counter value={value} setValue={setValue} min={1} max={10} />
    </div>
  );
}
