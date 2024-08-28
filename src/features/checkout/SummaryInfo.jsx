import { useCart } from '../../contexts/CartContext';
import Heading from '../../ui/Heading';

export default function SummaryInfo() {
  const { total } = useCart();
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      <div className="flex items-center justify-between w-full">
        <p className="font-medium text-[0.9375rem] text-darkGray leading-6">
          Total
        </p>
        <Heading as="h6">${total}</Heading>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="font-medium text-[0.9375rem] text-darkGray leading-6">
          SHIPPING
        </p>
        <Heading as="h6">$50</Heading>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="font-medium text-[0.9375rem] text-darkGray leading-6">
          {`VAT(INCLUDED)`}
        </p>
        <Heading as="h6">$50</Heading>
      </div>
    </div>
  );
}
