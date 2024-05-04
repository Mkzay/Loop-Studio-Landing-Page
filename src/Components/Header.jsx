import { useState } from "react";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="flex items-center justify-between p-5 fixed top-0 w-full lg:px-20">
      <h1 className="font-alata font-normal text-white text-2xl">
        loopstudios
      </h1>
      <button onClick={toggleMenu} className="lg:hidden">
        <img src="Images/icon-hamburger.svg" alt="menu icon" />
      </button>

      <div
        className={`${
          openMenu
            ? "translate-x-0 transition-transform"
            : "translate-x-full transition-transform "
        } lg:hidden flex flex-col gap-28 fixed bg-black w-full h-screen top-0 left-0 right-0 text-white font-alata py-8 px-5 z-100`}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-normal text-3xl">loopstudios</h1>
          <button onClick={toggleMenu}>
            <img src="Images/icon-close.svg" alt="close icon" />
          </button>
        </div>
        <ul className="flex flex-col gap-8 font-josefin font-light text-2xl uppercase">
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>

      <div className="hidden lg:flex">
        <ul className="flex text-white text-alata text-base font-normal gap-10">
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">
            About
          </li>
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">
            Careers
          </li>
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">
            Events
          </li>
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">
            Products
          </li>
          <li className="block hover:border-b-2 hover:border-white hover:pb-1 cursor-pointer">
            Support
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
