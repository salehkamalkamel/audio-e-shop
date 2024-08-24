import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import MobileMenuItem from "./MobileMenuItem";

export default function MobileMenu() {
  const [show, setShow] = useState(false);

  const menuItems = [
    {
      imageSrc: "/mobile-menu/headphone.svg",
      altText: "Headphone image",
      label: "Headphones",
    },
    {
      imageSrc: "/mobile-menu/speaker.svg",
      altText: "Speaker image",
      label: "Speakers",
    },
    {
      imageSrc: "/mobile-menu/earphone.svg",
      altText: "Earphone image",
      label: "Earphones",
    },
  ];

  function handleClick() {
    setShow((prev) => !prev);
  }

  return (
    <>
      <button
        className="bg-transparent outline-none hidden mobile:block tablet:block"
        onClick={handleClick}
        aria-label="Toggle menu"
      >
        <IoIosMenu className="text-white text-2xl" />
      </button>
      {show && (
        <>
          <div className="fixed top-[5.5rem] left-0 right-0 bottom-0 bg-black opacity-30 z-40"></div>
          <div className="absolute top-[5.5rem] left-0 right-0 bg-white rounded-br-lg rounded-bl-lg grid mobile:grid-cols-1 grid-cols-3 px-4 py-14 gap-y-24 gap-x-4 z-50 ">
            {menuItems.map((item, index) => (
              <MobileMenuItem
                key={index}
                imageSrc={item.imageSrc}
                altText={item.altText}
                label={item.label}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
