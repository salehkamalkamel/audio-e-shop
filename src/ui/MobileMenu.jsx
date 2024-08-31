import { useEffect, useState } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import MobileMenuItem from './MobileMenuItem';
import { useLocation } from 'react-router-dom';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const menuItems = [
    {
      imageSrc: '/mobile-menu/headphone.svg',
      altText: 'Headphone image',
      label: 'Headphones',
      path: '/products/headphones',
    },
    {
      imageSrc: '/mobile-menu/speaker.svg',
      altText: 'Speaker image',
      label: 'Speakers',
      path: '/products/speakers',
    },
    {
      imageSrc: '/mobile-menu/earphone.svg',
      altText: 'Earphone image',
      label: 'Earphones',
      path: '/products/earphones',
    },
  ];

  function handleToggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    if (isMenuOpen) {
      // Disable background scrolling when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable background scrolling when menu is closed
      document.body.style.overflow = '';
    }

    // Cleanup function to re-enable scrolling in case component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        className="bg-transparent outline-none hidden mobile:block tablet:block"
        onClick={handleToggleMenu}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? (
          <IoIosClose className="text-white text-2xl" />
        ) : (
          <IoIosMenu className="text-white text-2xl" />
        )}
      </button>
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-30 z-40"
            onClick={handleToggleMenu}
          ></div>
          <div className="fixed top-[5.5rem] left-0 right-0 bottom-0 bg-white rounded-br-lg rounded-bl-lg overflow-y-auto z-50 mb-24">
            <div className="px-4 py-14 grid mobile:grid-cols-1 grid-cols-3 gap-y-24 gap-x-4">
              {menuItems.map(({ imageSrc, altText, label, path }, index) => (
                <MobileMenuItem
                  key={index}
                  imageSrc={imageSrc}
                  altText={altText}
                  label={label}
                  path={path}
                  onClick={handleToggleMenu}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
