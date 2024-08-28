import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import SummaryInfo from './SummaryInfo';
import SummaryItem from './SummaryItem';
import CheckOutSucces from './CheckOutSucces';

export default function SummaryMenu() {
  const { cartData, total } = useCart();
  const [open, setOpen] = useState(false);

  function handleCheckOut() {
    setOpen(true);
  }
  return (
    <>
      <div className="w-full h-fit flex flex-col items-start justify-center px-8 py-12 gap-6 bg-white rounded-[0.5rem]">
        <Heading as="h6">summary</Heading>
        <div className="flex items-center justify-center flex-col gap-4 w-full">
          {cartData.map((item) => (
            <SummaryItem item={item} key={item.id} />
          ))}
        </div>
        <SummaryInfo />
        <div className="flex w-full items-center justify-between">
          <p className="font-medium text-[0.9375rem] text-darkGray leading-6">
            GRAND TOTAL
          </p>
          <Heading as="h6" className="text-primary">
            ${total + 100}
          </Heading>
        </div>
        <Button type="btn-1" className="w-full" onClick={handleCheckOut}>
          Check Out
        </Button>
      </div>
      {open && <CheckOutSucces />}
    </>
  );
}
