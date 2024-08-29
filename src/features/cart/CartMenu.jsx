import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { PiShoppingCart } from 'react-icons/pi';
import Heading from '../../ui/Heading';
import CartItem from './CartItem';
import Button from '../../ui/Button';

export default function CartMenu() {
  const navigate = useNavigate();
  const { cartData, setCartData, total, openCart, setOpenCart } = useCart();

  const handleToggleMenu = () => setOpenCart((prev) => !prev);

  const handleClearCart = () => {
    setCartData([]);
    setOpenCart(false);
  };

  const handleCheckout = () => {
    navigate('/checkout');
    setOpenCart(false);
  };

  return (
    <>
      <button
        onClick={handleToggleMenu}
        className="text-white text-2xl relative w-12 h-12 flex items-center justify-center"
        aria-label="Toggle cart menu"
      >
        {cartData.length > 0 && (
          <div className="bg-primary text-white text-[12px] py-1 px-2 rounded-full bottom-0 right-0 absolute">
            {cartData.length}
          </div>
        )}
        <PiShoppingCart />
      </button>

      {openCart && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-40 z-40"
            onClick={handleToggleMenu}
            aria-hidden="true"
          ></div>

          <div className="fixed right-12 top-20 z-50 bg-white rounded-lg p-6 flex flex-col gap-4 w-80 sm:w-96 shadow-lg">
            <div className="flex items-center justify-between">
              <Heading as="h6">{`Cart (${cartData.length})`}</Heading>
              <button
                className="text-darkGray hover:text-primary outline-none"
                onClick={handleClearCart}
                aria-label="Clear all items from cart"
              >
                Clear All
              </button>
            </div>

            <div className="flex flex-col gap-4 max-h-56 overflow-y-auto px-2">
              {cartData.length > 0 ? (
                cartData.map((item) => <CartItem item={item} key={item.id} />)
              ) : (
                <Heading as="h6" className="text-darkGray text-center py-4">
                  Your Cart Is Empty
                </Heading>
              )}
            </div>

            <div className="flex items-center justify-between">
              <p className="font-medium text-base text-darkGray">Total</p>
              <Heading as="h6">${total.toFixed(2)}</Heading>
            </div>

            <Button type="btn-1" onClick={handleCheckout}>
              Check Out
            </Button>
          </div>
        </>
      )}
    </>
  );
}
