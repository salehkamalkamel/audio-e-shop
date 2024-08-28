import { NavLink } from 'react-router-dom';

export default function Logo() {
  return (
    <NavLink to="/home">
      <img src="/audiophile.svg" />
    </NavLink>
  );
}
