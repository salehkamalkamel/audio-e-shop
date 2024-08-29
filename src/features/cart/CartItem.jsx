import { useState, useEffect } from 'react';
import Counter from '../../ui/Counter';
import { useCart } from '../../contexts/CartContext';

export default function CartItem({ item }) {
  const [value, setValue] = useState(item.count);
  const { setCartData } = useCart();

  useEffect(() => {
    setCartData((prev) =>
      prev.map((ele) => {
        return ele.id === item.id ? { ...ele, count: value } : ele;
      })
    );
  }, [value, item.id, setCartData]);

  return (
    <div className="flex  justify-between items-center w-full">
      <div className="flex gap-4 items-center">
        <img
          className="w-[4rem] h-[4rem] rounded-[0.5rem]"
          src={item.image.mobile}
          alt={item.name}
        />
        <div className="flex flex-col items-start">
          <p className="font-bold text-black text-[0.875rem] leading-6">
            {item.name}
          </p>
          <p className="font-bold text-[0.875rem] leading-6 tracking-normal text-darkGray">
            ${item.details.price}
          </p>
        </div>
      </div>
      <Counter
        value={value}
        setValue={setValue}
        min={1}
        max={10}
        className="w-full"
      />
    </div>
  );
}
