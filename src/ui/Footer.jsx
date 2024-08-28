import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Text from './Text';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';

function SocialIcon({ IconComponent, label }) {
  return (
    <li>
      <NavLink aria-label={label} to="#">
        <IconComponent className="text-white text-[1.5rem] hover:text-primary" />
      </NavLink>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-[70rem] mx-auto pt-16 pb-12 px-4 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-center sm:items-start md:items-center justify-center md:justify-between gap-y-12">
          <Logo />
          <nav
            className={`flex flex-col sm:flex-row items-center justify-center text-[0.8125rem] font-bold text-white uppercase gap-y-4 gap-x-[2.125rem] leading-[1.5625rem] tracking-[2px]`}
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
        </div>

        <div className="grid grid-flow-row sm:grid-cols-2 gap-y-12">
          <div className="flex flex-col gap-16 text-center sm:text-start opacity-75">
            <Text type="body" className="text-darkGray">
              {`Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.`}
            </Text>
            <Text type="body" className="text-darkGray">
              Copyright 2021. All Rights Reserved
            </Text>
          </div>
          <div className="flex items-end md:items-center justify-center sm:justify-end">
            <ul className="flex gap-4">
              <SocialIcon IconComponent={FaFacebookSquare} label="Facebook" />
              <SocialIcon IconComponent={IoLogoTwitter} label="Twitter" />
              <SocialIcon IconComponent={IoLogoInstagram} label="Instagram" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
