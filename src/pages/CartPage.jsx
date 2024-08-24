import CartMenu from '../features/cart/CartMenu';

export default function CartPage() {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
      <div className="fixed top-[7rem] right-24 z-50">
        <CartMenu />
      </div>
    </>
  );
}
