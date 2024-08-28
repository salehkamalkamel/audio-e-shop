import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import SummaryItem from './SummaryItem';

export default function CheckOutSucces() {
  const [showAll, setShowAll] = useState(false);
  const { cartData, total } = useCart();

  function handleShowAll() {
    setShowAll((prev) => !prev);
  }

  return (
    <>
      <div className="absolute inset-0 bg-black opacity-75"></div>
      <div className="absolute inset-0 flex items-start justify-center z-50">
        <div className="bg-white rounded-[0.5rem] px-8 py-12 flex flex-col items-start justify-center gap-8 mt-16">
          <div>
            <img
              src="/checkout/icon-order-confirmation.svg"
              alt="Order Confirmation"
            />
          </div>
          <Heading as="h3">
            THANK YOU
            <br />
            FOR YOUR ORDER
          </Heading>
          <Text type="body" className="text-black-1 opacity-75">
            You will receive an email confirmation shortly.
          </Text>
          <div className="grid grid-cols-[2fr_1fr] rounded-[0.5rem] w-full overflow-hidden">
            <div className="bg-lightGray flex items-center justify-center flex-col gap-4 w-full p-4">
              {showAll ? (
                cartData.map((item) => (
                  <SummaryItem item={item} key={item.id} />
                ))
              ) : (
                <SummaryItem item={cartData[0]} />
              )}
              <button
                onClick={handleShowAll}
                className="bold text-darkGray  border-t-2 border-darkGray outline-none py-6 w-full"
              >
                {showAll
                  ? 'Show Less'
                  : `and ${cartData.length - 1 || 1} other item(s)`}
              </button>
            </div>
            <div className="bg-black px-4 py-8 flex flex-col justify-end">
              <Text type="body" className="text-darkGray opacity-100">
                GRAND TOTAL
              </Text>
              <Heading as="h6" className="text-white">
                $ {total + 100}
              </Heading>
            </div>
          </div>
          <Button type="btn-1" className="w-full">
            Back To Home
          </Button>
        </div>
      </div>
    </>
  );
}
