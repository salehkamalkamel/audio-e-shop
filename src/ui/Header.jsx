import { PiShoppingCart } from 'react-icons/pi';
import HeaderNav from './HeaderNav';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-black-1 h-[5.5rem] md:h-[6rem] z-50">
      <div className="flex items-center justify-between  h-full max-w-[70rem] border-b border-darkGray mx-auto py-4 px-6">
        <div className="flex gap-8 items-center justify-center">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderNav />
        <PiShoppingCart
          onClick={() => navigate('cart')}
          className="text-white cursor-pointer"
          size="1.5rem"
        />
      </div>
    </header>
  );
}
