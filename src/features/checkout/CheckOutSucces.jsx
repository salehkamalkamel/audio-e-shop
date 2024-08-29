import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import Text from '../../ui/Text';
import SummaryItem from './SummaryItem';
import { useNavigate } from 'react-router-dom';

export default function CheckOutSucces() {
  const [showAll, setShowAll] = useState(false);
  const { cartData, total, setCartData } = useCart();
  const navigate = useNavigate();

  function handleShowAll() {
    setShowAll((prev) => !prev);
  }

  function handleFinish() {
    setCartData([]);
    navigate('/home');
  }

  return (
    <>
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black opacity-75 z-50"></div>

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-6 sm:p-8 md:p-12 flex flex-col items-start justify-center gap-8 w-full max-w-lg md:max-w-2xl h-fit">
          {/* Order confirmation icon */}
          <div className="w-full flex justify-center">
            <img
              src="/checkout/icon-order-confirmation.svg"
              alt="Order Confirmation"
              className="w-16 h-16 sm:w-20 sm:h-20"
            />
          </div>

          {/* Thank you message */}
          <Heading as="h3" className="text-center w-full">
            THANK YOU
            <br />
            FOR YOUR ORDER
          </Heading>

          {/* Confirmation message */}
          <Text
            type="body"
            className="text-black-1 opacity-75 text-center w-full"
          >
            You will receive an email confirmation shortly.
          </Text>

          {/* Order summary grid */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] rounded-lg w-full overflow-hidden">
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
                className="font-bold text-darkGray border-t-2 border-darkGray outline-none py-6 w-full"
              >
                {showAll
                  ? 'Show Less'
                  : `and ${cartData.length - 1 || 1} other item(s)`}
              </button>
            </div>
            <div className="bg-black px-4 py-8 flex flex-col justify-center md:justify-end">
              <Text
                type="body"
                className="text-darkGray opacity-100 text-center md:text-left"
              >
                GRAND TOTAL
              </Text>
              <Heading as="h6" className="text-white text-center md:text-left">
                $ {total + 100}
              </Heading>
            </div>
          </div>

          {/* Back to home button */}
          <Button type="btn-1" className="w-full" onClick={handleFinish}>
            Back To Home
          </Button>
        </div>
      </div>
    </>
  );
}
