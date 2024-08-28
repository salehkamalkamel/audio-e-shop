import { NavLink } from 'react-router-dom';

export default function HeaderNav({ className }) {
  return (
    <nav
      className={`md:flex hidden items-center justify-center text-[0.8125rem] font-bold text-white uppercase gap-[2.125rem] leading-[1.5625rem] tracking-[2px] ${className}`}
    >
      <NavLink
        className={({ isActive }) =>
          isActive ? 'text-primary' : 'hover:text-primary'
        }
        to="home"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'text-primary' : 'hover:text-primary'
        }
        to="products/headphones"
      >
        HEADPHONES
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'text-primary' : 'hover:text-primary'
        }
        to="products/speakers"
      >
        SPEAKERS
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'text-primary' : 'hover:text-primary'
        }
        to="products/earphones"
      >
        EARPHONES
      </NavLink>
    </nav>
  );
}
