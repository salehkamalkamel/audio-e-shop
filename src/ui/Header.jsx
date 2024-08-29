import HeaderNav from './HeaderNav';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import CartMenu from '../features/cart/CartMenu';

export default function Header() {
  return (
    <header className="bg-black-1 h-[5.5rem] md:h-[6rem] z-50 sticky top-0">
      <div className="flex items-center justify-between  h-full max-w-[70rem] border-b border-darkGray mx-auto py-4 px-6">
        <div className="flex gap-8 items-center justify-center">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderNav />
        {/* <PiShoppingCart
          onClick={() => navigate('cart')}
          className="text-white cursor-pointer"
          size="1.5rem"
        /> */}
        <CartMenu />
      </div>
    </header>
  );
}
