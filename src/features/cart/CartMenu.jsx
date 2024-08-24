import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import CartItem from './CartItem';

export default function CartMenu() {
  return (
    <div className="bg-white rounded-[0.5rem] p-8 flex gap-8 flex-col w-[20rem] mx-auto sm:w-[24rem] sm:mx-0">
      <div className="flex items-center justify-between">
        <Heading as="h6">{`Cart(3)`}</Heading>
        <button className="text-darkGray hover:text-primary outline-none bg-transparent">
          Clear All
        </button>
      </div>
      <div className="flex flex-col gap-4">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="flex items-center justify-between">
        <p className="font-medium text-[0.9375rem] text-darkGray leading-6">
          Total
        </p>
        <Heading as="h6">$600</Heading>
      </div>
      <Button type="btn-1">Check out</Button>
    </div>
  );
}
